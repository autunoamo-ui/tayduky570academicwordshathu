import { AWLWord } from '../types';

export const FALLBACK_MODELS = [
  'gemini-3-flash-preview',
  'gemini-3-pro-preview',
  'gemini-2.5-flash',
];

export interface GeminiCallResult {
  text: string;
  modelUsed: string;
  error?: string;
}

/**
 * Universal Gemini AI caller with automatic fallback across models.
 * Supports both local API Key (localStorage) and backend server proxy (/api/gemini/generate).
 */
export async function callGeminiAI(
  prompt: string | { role: 'user' | 'model'; parts: { text: string }[] }[],
  systemInstruction?: string,
  modelIndex = 0
): Promise<GeminiCallResult> {
  const customKey = localStorage.getItem('gemini_api_key') || '';
  const preferredModel = localStorage.getItem('gemini_selected_model') || 'gemini-3-pro-preview';

  const sequence = [
    preferredModel,
    ...FALLBACK_MODELS.filter(m => m !== preferredModel)
  ];

  const currentModel = sequence[modelIndex] || FALLBACK_MODELS[0];

  // First attempt: try backend server proxy if no client key is provided
  // or if client explicitly chose default environment key
  if (!customKey) {
    try {
      const serverRes = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, systemInstruction, model: currentModel }),
      });

      if (serverRes.ok) {
        const data = await serverRes.json();
        if (data.text) {
          return { text: data.text, modelUsed: data.model || currentModel };
        }
      }
    } catch {
      // Server proxy not available or running pure client SPA, continue to client direct call
    }
  }

  // Client-side direct call using stored key
  if (!customKey) {
    throw new Error('Chưa thiết lập API Key. Vui lòng mở Cài đặt (biểu tượng bánh răng) trên thanh điều hướng để nhập Gemini API Key miễn phí!');
  }

  try {
    const payload: {
      contents: { role?: string; parts: { text: string }[] }[];
      generationConfig: { temperature: number; maxOutputTokens: number };
      systemInstruction?: { parts: { text: string }[] };
    } = {
      contents: typeof prompt === 'string' ? [{ parts: [{ text: prompt }] }] : prompt,
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
    };

    if (systemInstruction) {
      payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${customKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    // Automatic fallback on temporary server errors (500, 503, 504)
    if ([500, 503, 504].includes(response.status) && modelIndex < FALLBACK_MODELS.length - 1) {
      return callGeminiAI(prompt, systemInstruction, modelIndex + 1);
    }

    if (response.status === 401 || response.status === 403) {
      throw new Error('API Key không hợp lệ hoặc không có quyền truy cập. Vui lòng kiểm tra lại Key trong Cài đặt.');
    }
    if (response.status === 429) {
      throw new Error('Đã hết hạn mức sử dụng (Quota Exceeded) hoặc vượt tần suất gửi tin. Vui lòng thử lại sau vài giây hoặc đổi Model trong Cài đặt.');
    }
    if (!response.ok) {
      const errBody = await response.text().catch(() => '');
      throw new Error(`Lỗi máy chủ Google (${response.status}): ${errBody.slice(0, 100)}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!candidateText) {
      throw new Error('Mô hình AI không trả về nội dung phù hợp.');
    }

    return { text: candidateText, modelUsed: currentModel };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);

    // If it's a model-not-found error, try the next model in fallback array
    if (
      (errorMsg.includes('not found') || errorMsg.includes('404')) &&
      modelIndex < FALLBACK_MODELS.length - 1
    ) {
      return callGeminiAI(prompt, systemInstruction, modelIndex + 1);
    }

    throw new Error(errorMsg);
  }
}

/**
 * Generate memorable Tây Du Ký themed mnemonic for an AWL word
 */
export async function generateMnemonic(word: AWLWord): Promise<string> {
  const prompt = `Bạn là Bồ Đề Tổ Sư (sư phụ của Tôn Ngộ Không trong Tây Du Ký) kiêm chuyên gia ngôn ngữ học đỉnh cao.
Hãy sáng tạo bí kíp ghi nhớ độc đáo cho từ vựng học thuật AWL sau:

- Từ: "${word.word}"
- Phiên âm: "${word.phonetic}"
- Nghĩa: "${word.meaningVi}"
- Định nghĩa tiếng Anh: "${word.definitionEn}"

Yêu cầu xuất ra định dạng Markdown sinh động:
1. 🐒 **Thần Chú Ngộ Không (Mnemonic / Mẹo Tách Âm Tiếng Việt Vui Nhộn)**: Cách chơi chữ tách từ gần âm với tiếng Việt gắn với cốt truyện Tây Du Ký giúp nhớ ngay lập tức trong 5 giây.
2. 📜 **Thơ Lục Bát Thỉnh Kinh (2-4 câu thơ)**: Lồng ghép từ và nghĩa một cách duyên dáng.
3. ⚔️ **Tình Huống Hàng Ma**: Một câu chuyện mini 2 câu giải thích từ này trong tình huống Tôn Ngộ Không đối phó với yêu quái.
4. 💡 **Mẹo Tránh Nhầm Lẫn**: Phân biệt với các từ dễ nhầm họ hàng.`;

  const sys = 'Bạn là Bồ Đề Sư Tổ thông thái, hài hước, dạy từ vựng học thuật bằng điển tích Tây Du Ký.';
  const res = await callGeminiAI(prompt, sys);
  return res.text;
}

/**
 * Detailed academic breakdown (IELTS Writing Task 2 / Research paper)
 */
export async function explainAcademicContext(word: AWLWord): Promise<string> {
  const prompt = `Hãy giải thích chi tiết cách ứng dụng từ vựng học thuật cốt lõi "${word.word}" (${word.meaningVi}) trong văn cảnh học thuật cao cấp (IELTS Writing Band 8.0+, TOEFL iBT, Luận văn nghiên cứu):

1. 🎯 **Sắc Thái Học Thuật (Academic Nuance)**: Từ này khác gì so với từ vựng thông thường (General English)?
2. 💎 **Bộ 3 Collocations Đắt Giá Nhất**: Kèm ví dụ câu hoàn chỉnh.
3. 📝 **Đoạn Văn Mẫu IELTS Writing Task 2 (Band 8.0+)**: Một đoạn văn 3-4 câu sử dụng chuẩn xác từ "${word.word}".
4. ⚠️ **Lỗi Thường Gặp Của Học Viên Việt Nam**: Chỉ ra lỗi sai phổ biến và cách sửa chuẩn.`;

  const sys = 'Bạn là chuyên gia khảo thí IELTS 9.0 kiêm giảng viên ngôn ngữ học.';
  const res = await callGeminiAI(prompt, sys);
  return res.text;
}

/**
 * Grade student sentence using the target AWL word
 */
export async function gradeUserSentence(word: AWLWord, sentence: string): Promise<string> {
  const prompt = `Học viên vừa tự viết câu tiếng Anh chứa từ vựng học thuật "${word.word}" (${word.meaningVi}):
"${sentence}"

Hãy chấm điểm và nhận xét chi tiết:
1. 🏅 **Đánh Giá & Điểm Số (Thang 10)**: Điểm ngữ pháp, ngữ nghĩa, độ tự nhiên.
2. 🔍 **Nhận Xét Ngữ Pháp & Ngữ Cảnh**: Câu dùng đúng hay sai? Từ "${word.word}" có đặt đúng vị trí và ngữ cảnh học thuật không?
3. 🚀 **Phiên Bản Nâng Cấp (Band 8.5+ Upgrade)**: Viết lại câu trên theo chuẩn văn phong học thuật xuất sắc hơn.
4. 🎁 **Lời Động Viên Của Đại Thánh Tôn Ngộ Không**: Một câu khích lệ tinh thần người học.`;

  const sys = 'Bạn là Tôn Ngộ Không và Giám khảo ngôn ngữ tận tâm, sắc bén, khích lệ.';
  const res = await callGeminiAI(prompt, sys);
  return res.text;
}

/**
 * Chat Q&A with AI Tutor regarding AWL vocabulary
 */
export async function askAiTutor(
  messages: { sender: 'user' | 'ai'; text: string }[],
  contextWord?: AWLWord,
  progress?: any // We use any here to avoid cyclic dependency if type isn't easily imported, or we can just import UserProgress. Let's use any for simplicity for progress.
): Promise<string> {
  let contextInfo = '';
  if (contextWord) {
    contextInfo += `Ngữ cảnh từ vựng đang học: "${contextWord.word}" (${contextWord.pos}, ${contextWord.meaningVi}).\n\n`;
  }
  if (progress) {
    contextInfo += `Tiến độ của học viên lúc này:\n- Các chủ đề/từ đang yếu dài hạn: ${progress.weakTopics.join(', ')}\n- Điểm TB: ${progress.averageScore}\n- Số ngày thỉnh kinh (streak): ${progress.streakDays}\n(Sư tổ hãy có thể khuyên nhủ học trò học các từ vựng này hoặc chúc mừng streak nếu thấy phù hợp).\n\n`;
  }

  // Convert messages to Gemini format
  const formattedPrompt = messages.map((m, idx) => {
    let text = m.text;
    if (idx === messages.length - 1 && m.sender === 'user' && contextInfo) {
      text = contextInfo + 'Câu hỏi của học viên: ' + text;
    }
    return {
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: text }],
    };
  }) as { role: 'user' | 'model'; parts: { text: string }[] }[];

  // Gemini API requires first message to be from User
  while (formattedPrompt.length > 0 && formattedPrompt[0].role === 'model') {
    formattedPrompt.shift();
  }
  if (formattedPrompt.length === 0) {
    formattedPrompt.push({ role: 'user', parts: [{ text: "Kính chào Sư tổ!" }] });
  }

  const sys = 'Bạn là Bồ Đề Sư Tổ - Gia sư AI Tây Du Ký dạy 570 từ vựng Academic Word List. Luôn giải thích bằng tiếng Việt dễ hiểu, kết hợp ví dụ tiếng Anh học thuật chuẩn mực, phong thái uyên bác, ân cần.';
  const res = await callGeminiAI(formattedPrompt, sys);
  return res.text;
}
