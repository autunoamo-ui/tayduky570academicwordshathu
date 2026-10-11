import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Bookmark,
  Award,
  BookOpen,
  Keyboard,
  Headphones,
  Sliders,
  ChevronRight,
  Flame,
  Zap,
  Scale,
  Check,
  X,
  MessageSquare,
  Users,
  Eye,
  EyeOff,
  FileText,
  ArrowLeftRight,
} from 'lucide-react';
import { AWLWord, Stage, LearningSession } from '../types';
import { STAGES, AWL_WORDS_DATA } from '../data/awlData';
import { getWordLexicalRelations, WordLexicalRelation } from '../data/awlSynonymsAntonyms';
import { sound } from '../services/soundService';
import { speechService } from '../services/speechService';

export type ListeningFormatType =
  | 'all'
  | 'sound_to_word'
  | 'sound_to_meaning'
  | 'dictation'
  | 'context_sentence'
  | 'true_false'
  | 'dialogue_mcq'
  | 'synonym_antonym';

interface ListeningPracticeProps {
  initialStageId: number;
  masteredWords: string[];
  reviewWords: string[];
  weakTopics: string[];
  onToggleMastered: (wordId: string) => void;
  onToggleReview: (wordId: string) => void;
  onOpenAiTutor: (word: AWLWord) => void;
  onRecordSession: (session: LearningSession) => void;
  onBackToMap: () => void;
}

export type ListeningQuestionFormat =
  | 'sound_to_word'
  | 'sound_to_meaning'
  | 'dictation'
  | 'context_sentence'
  | 'true_false'
  | 'dialogue_mcq'
  | 'synonym_antonym';

export interface DialogueLine {
  speaker: string;
  role: string;
  gender: 'male' | 'female';
  text: string;
  vietnamese: string;
}

interface ListeningQuestion {
  id: string;
  word: AWLWord;
  format: ListeningQuestionFormat;
  promptAudioText: string;
  promptDisplay: string;
  statementText?: string;
  statementIsActuallyTrue?: boolean;
  distractorWord?: AWLWord;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  dialogueQuestion?: string;
  dialogueQuestionVi?: string;
  dialogueLines?: DialogueLine[];
  // For Find Synonyms & Antonyms format
  relationType?: 'synonym' | 'antonym';
  targetSynonyms?: string[];
  targetAntonyms?: string[];
  targetSynonymsVi?: string[];
  targetAntonymsVi?: string[];
  lexicalRelation?: WordLexicalRelation;
}

export const ListeningPractice: React.FC<ListeningPracticeProps> = ({
  initialStageId,
  masteredWords,
  reviewWords,
  weakTopics,
  onToggleMastered,
  onToggleReview,
  onOpenAiTutor,
  onRecordSession,
  onBackToMap,
}) => {
  // Stage and column selection
  const [selectedStageId, setSelectedStageId] = useState<number>(initialStageId);
  const [selectedColumn, setSelectedColumn] = useState<number | 'all'>('all');
  const [selectedFormat, setSelectedFormat] = useState<ListeningFormatType>('all');
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [speechAccent, setSpeechAccent] = useState<'en-US' | 'en-GB'>('en-US');

  // Exercise execution state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [questions, setQuestions] = useState<ListeningQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [revealedLettersCount, setRevealedLettersCount] = useState<number>(0);
  const [showPhoneticHint, setShowPhoneticHint] = useState<boolean>(false);
  const [timesListened, setTimesListened] = useState<number>(0);
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number | null>(null);
  const [showDialogueTranscript, setShowDialogueTranscript] = useState<boolean>(false);

  // Score & streak
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongWords, setWrongWords] = useState<AWLWord[]>([]);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());

  const inputRef = useRef<HTMLInputElement>(null);

  const stage = STAGES.find((s) => s.id === selectedStageId) || STAGES[0];
  const allStageWords = AWL_WORDS_DATA.filter((w) => w.sublist === selectedStageId);

  // Helper to split words into 4 columns (or 3 columns for Stage 10)
  const getStageColumns = (words: AWLWord[]) => {
    if (words.length <= 30) {
      // 3 columns of 10
      return [words.slice(0, 10), words.slice(10, 20), words.slice(20, 30)];
    }
    // 4 columns of 15
    const quarter = Math.ceil(words.length / 4);
    return [
      words.slice(0, quarter),
      words.slice(quarter, quarter * 2),
      words.slice(quarter * 2, quarter * 3),
      words.slice(quarter * 3),
    ];
  };

  const columns = getStageColumns(allStageWords);

  // Build pool of words based on selected column
  const getTargetWords = (): AWLWord[] => {
    if (selectedColumn === 'all') return allStageWords;
    const colIdx = Number(selectedColumn) - 1;
    return columns[colIdx] && columns[colIdx].length > 0 ? columns[colIdx] : allStageWords;
  };

  // Generate question list
  const generateQuestions = () => {
    const targetPool = getTargetWords();
    const shuffled = [...targetPool].sort(() => 0.5 - Math.random());
    const count = Math.min(10, shuffled.length);
    const selected = shuffled.slice(0, count);

    const generated: ListeningQuestion[] = selected.map((word, idx) => {
      // Determine question format
      let format: ListeningQuestionFormat;
      if (selectedFormat === 'all') {
        const formats: ListeningQuestionFormat[] = [
          'sound_to_word',
          'sound_to_meaning',
          'dictation',
          'context_sentence',
          'true_false',
          'dialogue_mcq',
          'synonym_antonym',
        ];
        format = formats[idx % formats.length];
      } else {
        format = selectedFormat;
      }

      // Pick 3 distractors from the same stage
      const otherWords = allStageWords.filter((w) => w.id !== word.id);
      const distractors = (otherWords.length >= 3 ? otherWords : AWL_WORDS_DATA.filter((w) => w.id !== word.id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      if (format === 'sound_to_word') {
        const options = [word.word, ...distractors.map((d) => d.word)].sort(() => 0.5 - Math.random());
        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format,
          promptAudioText: word.word,
          promptDisplay: `Nghe phát âm và nhận diện từ vựng tiếng Anh đúng: [${word.pos}]`,
          options,
          correctAnswer: word.word,
          explanation: `Từ đúng: "${word.word}" (${word.phonetic}) - ${word.meaningVi}.`,
        };
      } else if (format === 'sound_to_meaning') {
        const options = [word.meaningVi, ...distractors.map((d) => d.meaningVi)].sort(() => 0.5 - Math.random());
        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format,
          promptAudioText: word.word,
          promptDisplay: `Nghe phát âm từ tiếng Anh và chọn nghĩa tiếng Việt chuẩn xác nhất:`,
          options,
          correctAnswer: word.meaningVi,
          explanation: `"${word.word}" (${word.phonetic}) có nghĩa là: ${word.meaningVi}.`,
        };
      } else if (format === 'dictation') {
        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format,
          promptAudioText: word.word,
          promptDisplay: `Nghe âm thanh và gõ chính xác từ vựng tiếng Anh: [${word.pos}]`,
          correctAnswer: word.word.toLowerCase().trim(),
          explanation: `Chính tả chuẩn: "${word.word}" (${word.phonetic}) - ${word.meaningVi}.`,
        };
      } else if (format === 'context_sentence') {
        // context_sentence: read full example sentence
        const regex = new RegExp(`\\b${word.word}\\b`, 'i');
        const maskedSentence = regex.test(word.example)
          ? word.example.replace(regex, '_______')
          : `[${word.meaningVi}] _______`;

        const options = [word.word, ...distractors.map((d) => d.word)].sort(() => 0.5 - Math.random());
        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format,
          promptAudioText: word.example,
          promptDisplay: `Nghe câu ngữ cảnh học thuật và bắt từ bị khuyết:\n"${maskedSentence}"`,
          options,
          correctAnswer: word.word,
          explanation: `Câu hoàn chỉnh: "${word.example}". Từ khuyết là "${word.word}" (${word.pos}): ${word.meaningVi}.`,
        };
      } else if (format === 'true_false') {
        // true_false: Listen and Decide: True or False
        const isTrue = Math.random() < 0.5;
        const distractor = distractors[0] || word;
        const style = idx % 3;
        let statementText = '';
        let explanation = '';

        if (isTrue) {
          if (style === 0) {
            statementText = `Từ vựng được phát âm trong audio là "${word.word}" và có nghĩa tiếng Việt là "${word.meaningVi}".`;
          } else if (style === 1) {
            statementText = `Âm thanh bạn vừa nghe mang nghĩa tiếng Việt là: "${word.meaningVi}" [từ loại: ${word.pos}].`;
          } else {
            statementText = `Từ phát âm trong audio là "${word.word}" (${word.pos}), thường đi kèm cụm học thuật "${word.collocations[0]}".`;
          }
          explanation = `✅ Phát biểu hoàn toàn ĐÚNG (TRUE)!\n• Âm thanh phát âm chuẩn: "${word.word}" (${word.phonetic}) [${word.pos}].\n• Nghĩa tiếng Việt: "${word.meaningVi}".\n• Định nghĩa học thuật: ${word.definitionEn}.`;
        } else {
          if (style === 0) {
            statementText = `Từ vựng được phát âm trong audio là "${distractor.word}" (${distractor.phonetic}) mang nghĩa "${distractor.meaningVi}".`;
          } else if (style === 1) {
            statementText = `Âm thanh bạn vừa nghe mang nghĩa tiếng Việt là: "${distractor.meaningVi}" [từ loại: ${distractor.pos}].`;
          } else {
            statementText = `Từ phát âm trong audio là "${word.word}", nhưng có nghĩa là "${distractor.meaningVi}".`;
          }
          explanation = `❌ Phát biểu này là SAI (FALSE)!\n• Âm thanh thực tế là từ: "${word.word}" (${word.phonetic}) [${word.pos}] ➔ Nghĩa: "${word.meaningVi}".\n• Đối chiếu: "${distractor.meaningVi}" là nghĩa của từ "${distractor.word}" (${distractor.phonetic}).`;
        }

        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format: 'true_false',
          promptAudioText: word.word,
          promptDisplay: `Nghe phát âm từ vựng và phán đoán xem phát biểu dưới đây là ĐÚNG (True) hay SAI (False):`,
          statementText,
          statementIsActuallyTrue: isTrue,
          distractorWord: isTrue ? undefined : distractor,
          options: ['TRUE', 'FALSE'],
          correctAnswer: isTrue ? 'TRUE' : 'FALSE',
          explanation,
        };
      } else if (format === 'dialogue_mcq') {
        // dialogue_mcq: Listen and Choose the Correct Answer (Nghe hội thoại, chọn đáp án)
        const colloc = word.collocations && word.collocations.length > 0 ? word.collocations[0] : `${word.word} framework`;
        const dist1 = distractors[0] || word;
        const dist2 = distractors[1] || word;

        const style = idx % 4;
        let dialogueLines: DialogueLine[] = [];
        let dialogueQuestion = '';
        let dialogueQuestionVi = '';
        let correctAnswer = '';
        let wrongOptions: string[] = [];
        let explanation = '';

        if (style === 0) {
          // Scenario 1: Academic Advisory Consultation (Alex & Dr. Miller)
          dialogueLines = [
            {
              speaker: 'Alex',
              role: 'Sinh viên',
              gender: 'male',
              text: `Professor Miller, how should our research group handle "${word.word}" in our academic project?`,
              vietnamese: `Thưa Giáo sư Miller, nhóm nghiên cứu của chúng em nên xử lý "${word.word}" (${word.meaningVi}) như thế nào trong bài tập ạ?`,
            },
            {
              speaker: 'Dr. Miller',
              role: 'Giảng viên hướng dẫn',
              gender: 'female',
              text: `Well Alex, you must apply "${colloc}" carefully because ${word.definitionEn.toLowerCase().replace(/\.$/, '')}. That ensures valid results.`,
              vietnamese: `À Alex, các em cần phải áp dụng "${colloc}" thật cẩn thận bởi vì nó có nghĩa là ${word.meaningVi}. Điều đó sẽ đảm bảo kết quả chính xác.`,
            },
          ];
          dialogueQuestion = `What does Dr. Miller recommend regarding "${word.word}"?`;
          dialogueQuestionVi = `Tiến sĩ Miller khuyên nhóm nghiên cứu điều gì đối với "${word.word}" (${word.meaningVi})?`;
          correctAnswer = `Apply "${colloc}" carefully to ensure valid results`;
          wrongOptions = [
            `Postpone evaluating "${word.word}" until next academic year`,
            `Rely exclusively on unverified assumptions about ${dist1.word}`,
            `Discard "${word.word}" and replace it with ${dist2.word}`,
          ];
          explanation = `💡 Phân tích câu trả lời chuẩn xác (Cambridge IELTS):\n• Trong cuộc hội thoại, Dr. Miller hướng dẫn: "You must apply '${colloc}' carefully because... That ensures valid results".\n• Từ vựng cốt lõi: "${word.word}" (${word.phonetic}) [${word.pos}] mang nghĩa "${word.meaningVi}".\n• Phương án đúng phản ánh chính xác kết luận của giảng viên.`;
        } else if (style === 1) {
          // Scenario 2: Seminar Study Group Discussion (Emma & David)
          dialogueLines = [
            {
              speaker: 'Emma',
              role: 'Bạn cùng nhóm',
              gender: 'female',
              text: `David, did you understand why the lecturer emphasized "${word.word}" in today's seminar?`,
              vietnamese: `David, cậu đã hiểu vì sao giảng viên lại nhấn mạnh từ "${word.word}" (${word.meaningVi}) trong buổi hội thảo hôm nay chưa?`,
            },
            {
              speaker: 'David',
              role: 'Bạn cùng nhóm',
              gender: 'male',
              text: `Yes, Emma. She explained that in academic discourse, "${word.word}" means "${word.meaningVi}", especially in the context of "${colloc}".`,
              vietnamese: `Hiểu rồi Emma. Cô ấy giải thích rằng trong văn bản học thuật, "${word.word}" có nghĩa là "${word.meaningVi}", đặc biệt trong ngữ cảnh "${colloc}".`,
            },
          ];
          dialogueQuestion = `According to David, what is the academic significance of "${word.word}"?`;
          dialogueQuestionVi = `Theo lời giải thích của David, ý nghĩa học thuật của "${word.word}" là gì?`;
          correctAnswer = `It represents "${word.meaningVi}" within "${colloc}"`;
          wrongOptions = [
            `It has the opposite meaning, referring instead to ${dist1.meaningVi}`,
            `It is only used in casual conversations, not in academic papers`,
            `It was rejected by the lecturer in favor of ${dist2.word}`,
          ];
          explanation = `💡 Phân tích câu trả lời chuẩn xác (Cambridge IELTS):\n• David khẳng định: "${word.word}" có ý nghĩa học thuật là "${word.meaningVi}" (${word.pos}), thường đi với cụm "${colloc}".\n• Định nghĩa học thuật: ${word.definitionEn}.`;
        } else if (style === 2) {
          // Scenario 3: Research Lab Methodology (Sarah & Dr. Watson)
          dialogueLines = [
            {
              speaker: 'Sarah',
              role: 'Trợ lý nghiên cứu',
              gender: 'female',
              text: `Dr. Watson, our laboratory data has just revealed a direct link to "${word.word}". How should we interpret this?`,
              vietnamese: `Tiến sĩ Watson, dữ liệu phòng thí nghiệm vừa phát hiện mối liên hệ trực tiếp với "${word.word}". Chúng ta nên giải thích thế nào ạ?`,
            },
            {
              speaker: 'Dr. Watson',
              role: 'Trưởng nhóm thí nghiệm',
              gender: 'male',
              text: `We should document it immediately. Remember that "${word.example}". That confirms our central hypothesis.`,
              vietnamese: `Chúng ta cần ghi nhận ngay. Hãy nhớ rằng "${word.example}". Điều đó khẳng định giả thuyết trung tâm của đề tài.`,
            },
          ];
          dialogueQuestion = `What does Dr. Watson conclude based on the laboratory findings about "${word.word}"?`;
          dialogueQuestionVi = `Tiến sĩ Watson kết luận điều gì từ phát hiện trong phòng thí nghiệm về "${word.word}"?`;
          correctAnswer = `Document it immediately as evidence confirming their central hypothesis`;
          wrongOptions = [
            `Ignore the finding because ${dist1.word} is far more urgent`,
            `Restart the entire experiment from scratch due to faulty data`,
            `Conclude that "${word.word}" has no relationship to their research`,
          ];
          explanation = `💡 Phân tích câu trả lời chuẩn xác (Cambridge IELTS):\n• Dr. Watson khẳng định: "We should document it immediately... That confirms our central hypothesis".\n• Ngữ cảnh thực tế: "${word.example}".\n• Từ vựng: "${word.word}" [${word.pos}]: ${word.meaningVi}.`;
        } else {
          // Scenario 4: Academic Advisory (Lucas & Elena)
          dialogueLines = [
            {
              speaker: 'Lucas',
              role: 'Học viên cao học',
              gender: 'male',
              text: `Elena, what is the best strategy to employ "${word.word}" effectively in our final presentation?`,
              vietnamese: `Elena, chiến lược tốt nhất để vận dụng "${word.word}" hiệu quả trong bài thuyết trình cuối khóa là gì?`,
            },
            {
              speaker: 'Elena',
              role: 'Cố vấn chuyên môn',
              gender: 'female',
              text: `You should incorporate the academic collocation "${colloc}" and clarify its meaning as "${word.meaningVi}". That will impress the evaluators.`,
              vietnamese: `Em nên đưa cụm từ học thuật "${colloc}" vào và giải thích rõ nghĩa là "${word.meaningVi}". Điều đó sẽ tạo ấn tượng với hội đồng đánh giá.`,
            },
          ];
          dialogueQuestion = `What advice does Elena give Lucas for his final presentation?`;
          dialogueQuestionVi = `Elena đưa ra lời khuyên nào cho Lucas về bài thuyết trình có liên quan đến "${word.word}"?`;
          correctAnswer = `Incorporate the collocation "${colloc}" and clarify its meaning as "${word.meaningVi}"`;
          wrongOptions = [
            `Avoid using "${word.word}" and discuss only ${dist1.word}`,
            `Replace all formal academic words with informal slang`,
            `Present only raw statistics about ${dist2.word} without clear definitions`,
          ];
          explanation = `💡 Phân tích câu trả lời chuẩn xác (Cambridge IELTS):\n• Elena khuyên: "Incorporate the academic collocation '${colloc}' and clarify its meaning as '${word.meaningVi}'".\n• Từ vựng trọng tâm: "${word.word}" (${word.phonetic}) - ${word.definitionEn}.`;
        }

        const options = [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random());
        const promptAudioText = dialogueLines.map((l) => `${l.speaker}: ${l.text}`).join(' ... ');

        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format: 'dialogue_mcq',
          promptAudioText,
          promptDisplay: `Nghe đoạn hội thoại giữa 2 nhân vật và chọn đáp án chính xác nhất:`,
          dialogueQuestion,
          dialogueQuestionVi,
          dialogueLines,
          options,
          correctAnswer,
          explanation,
        };
      } else {
        // format === 'synonym_antonym': Find Synonyms and Antonyms – Tìm từ đồng nghĩa, trái nghĩa
        const relations = getWordLexicalRelations(word.word);
        const isSynonym = idx % 2 === 0;
        const relationType: 'synonym' | 'antonym' = isSynonym ? 'synonym' : 'antonym';

        let correctAnswer = '';
        let promptDisplay = '';
        let explanation = '';
        let wrongPool: string[] = [];

        if (relationType === 'synonym') {
          correctAnswer = relations.synonyms[0] || 'equivalent';
          promptDisplay = `Tìm TỪ ĐỒNG NGHĨA (SYNONYM) gần nhất với từ học thuật "${word.word}" (${word.phonetic}) [${word.pos}]:\nNghĩa: ${word.meaningVi}`;

          const antonymDistractor = relations.antonyms[0];
          wrongPool = [
            antonymDistractor,
            distractors[0].word,
            distractors[1].word,
            distractors[2].word,
          ].filter((w): w is string => Boolean(w && w.trim().toLowerCase() !== correctAnswer.trim().toLowerCase()));

          explanation = `🎯 TỪ ĐỒNG NGHĨA (SYNONYM) CHUẨN XÁC: "${correctAnswer}"\n• Từ vựng: "${word.word}" (${word.phonetic}) [${word.pos}]: ${word.meaningVi}.\n• Định nghĩa học thuật: ${word.definitionEn}.\n• Các từ đồng nghĩa tương đương: ${relations.synonyms.join(', ')}.\n• Các từ trái nghĩa đối lập: ${relations.antonyms.join(', ')}.\n• Ví dụ ngữ cảnh: "${word.example}"`;
        } else {
          correctAnswer = relations.antonyms[0] || 'opposite';
          promptDisplay = `Tìm TỪ TRÁI NGHĨA (ANTONYM) đối lập nghĩa nhất với từ học thuật "${word.word}" (${word.phonetic}) [${word.pos}]:\nNghĩa: ${word.meaningVi}`;

          const synonymDistractor = relations.synonyms[0];
          wrongPool = [
            synonymDistractor,
            distractors[0].word,
            distractors[1].word,
            distractors[2].word,
          ].filter((w): w is string => Boolean(w && w.trim().toLowerCase() !== correctAnswer.trim().toLowerCase()));

          explanation = `⚡ TỪ TRÁI NGHĨA (ANTONYM) CHUẨN XÁC: "${correctAnswer}"\n• Từ vựng: "${word.word}" (${word.phonetic}) [${word.pos}]: ${word.meaningVi}.\n• Định nghĩa học thuật: ${word.definitionEn}.\n• Các từ trái nghĩa đối lập: ${relations.antonyms.join(', ')}.\n• Các từ đồng nghĩa tương đương: ${relations.synonyms.join(', ')}.\n• Ví dụ ngữ cảnh: "${word.example}"`;
        }

        const uniqueWrong = Array.from(new Set(wrongPool)).slice(0, 3);
        const options = [correctAnswer, ...uniqueWrong].sort(() => 0.5 - Math.random());
        const promptAudioText = `${word.word}. ${relationType === 'synonym' ? 'Find the synonym' : 'Find the antonym'} for ${word.word}. ${word.example}`;

        return {
          id: `lq_${word.id}_${idx}`,
          word,
          format: 'synonym_antonym',
          promptAudioText,
          promptDisplay,
          options,
          correctAnswer,
          explanation,
          relationType,
          targetSynonyms: relations.synonyms,
          targetAntonyms: relations.antonyms,
          targetSynonymsVi: relations.synonymsVi,
          targetAntonymsVi: relations.antonymsVi,
          lexicalRelation: relations,
        };
      }
    });

    setQuestions(generated);
    setCurrentIndex(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedAnswer('');
    setTypedAnswer('');
    setRevealedLettersCount(0);
    setShowPhoneticHint(false);
    setTimesListened(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setWrongWords([]);
    setIsSessionComplete(false);
    setSessionStartTime(Date.now());
  };

  // Auto initialize or re-generate questions on stage/format/column changes
  useEffect(() => {
    generateQuestions();
  }, [selectedStageId, selectedColumn, selectedFormat]);

  const currentQ = questions[currentIndex];

  // Play audio for current question
  const playCurrentAudio = (rateOverride?: number) => {
    if (!currentQ) return;
    const rate = rateOverride ?? speechRate;

    if (currentQ.format === 'dialogue_mcq' && currentQ.dialogueLines && currentQ.dialogueLines.length > 0) {
      speechService.speakDialogue(
        currentQ.dialogueLines.map((l) => ({
          text: l.text,
          pitch: l.gender === 'female' ? 1.15 : 0.9,
        })),
        {
          rate,
          accent: speechAccent,
          onStart: () => {
            setIsPlayingAudio(true);
            setActiveDialogueIndex(0);
          },
          onLineChange: (lineIdx) => {
            setActiveDialogueIndex(lineIdx);
          },
          onEnd: () => {
            setIsPlayingAudio(false);
            setActiveDialogueIndex(null);
          },
          onError: () => {
            setIsPlayingAudio(false);
            setActiveDialogueIndex(null);
          },
        }
      );
    } else {
      speechService.speak(currentQ.promptAudioText, {
        rate,
        accent: speechAccent,
        onStart: () => setIsPlayingAudio(true),
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
    setTimesListened((prev) => prev + 1);
  };

  const playSingleDialogueLine = (line: DialogueLine, index: number) => {
    speechService.speak(line.text, {
      rate: speechRate,
      accent: speechAccent,
      pitch: line.gender === 'female' ? 1.15 : 0.9,
      onStart: () => {
        setIsPlayingAudio(true);
        setActiveDialogueIndex(index);
      },
      onEnd: () => {
        setIsPlayingAudio(false);
        setActiveDialogueIndex(null);
      },
      onError: () => {
        setIsPlayingAudio(false);
        setActiveDialogueIndex(null);
      },
    });
  };

  // Play audio when entering a new question
  useEffect(() => {
    if (currentQ && !isSessionComplete) {
      setIsAnswered(false);
      setIsCorrect(false);
      setSelectedAnswer('');
      setTypedAnswer('');
      setRevealedLettersCount(0);
      setShowPhoneticHint(false);
      setTimesListened(0);
      setActiveDialogueIndex(null);
      setShowDialogueTranscript(false);

      // Delay slight ms for smooth transition then speak
      const timer = setTimeout(() => {
        playCurrentAudio();
        if (currentQ.format === 'dictation') {
          inputRef.current?.focus();
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isSessionComplete]);

  // Handle Option selection (Formats: sound_to_word, sound_to_meaning, context_sentence)
  const handleSelectOption = (option: string) => {
    if (isAnswered || !currentQ) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isRight = option.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();
    setIsCorrect(isRight);

    if (isRight) {
      sound.playSuccess();
      const earned = Math.max(10, 20 + streak * 5 - (timesListened > 2 ? 5 : 0));
      setScore((prev) => prev + earned);
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
      setCorrectCount((prev) => prev + 1);
    } else {
      sound.playHit();
      setStreak(0);
      setWrongWords((prev) => [...prev, currentQ.word]);
    }
  };

  // Handle Dictation submit
  const handleCheckDictation = () => {
    if (isAnswered || !currentQ || currentQ.format !== 'dictation') return;

    const trimmedInput = typedAnswer.trim().toLowerCase();
    const correctClean = currentQ.correctAnswer.toLowerCase();
    const isRight = trimmedInput === correctClean;

    setSelectedAnswer(typedAnswer);
    setIsAnswered(true);
    setIsCorrect(isRight);

    if (isRight) {
      sound.playSuccess();
      const bonus = revealedLettersCount > 0 ? 10 : 25;
      const earned = Math.max(10, bonus + streak * 5);
      setScore((prev) => prev + earned);
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
      setCorrectCount((prev) => prev + 1);
    } else {
      sound.playHit();
      setStreak(0);
      setWrongWords((prev) => [...prev, currentQ.word]);
    }
  };

  // Reveal next letter hint for dictation
  const handleRevealLetter = () => {
    if (!currentQ || isAnswered || currentQ.format !== 'dictation') return;
    sound.playClick();
    const target = currentQ.word.word.toLowerCase();
    if (revealedLettersCount < target.length) {
      setRevealedLettersCount((prev) => prev + 1);
      setTypedAnswer((prev) => {
        const nextPart = target.slice(0, revealedLettersCount + 1);
        return nextPart;
      });
    }
  };

  // Next question or complete
  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Completed session
      finishSession();
    }
  };

  const finishSession = () => {
    setIsSessionComplete(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const elapsed = Math.round((Date.now() - sessionStartTime) / 1000);
    const session: LearningSession = {
      id: `listening_${Date.now()}`,
      subjectId: selectedStageId,
      score,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      timeSpent: elapsed,
      date: new Date().toLocaleDateString('vi-VN'),
      mode: 'listening',
    };

    onRecordSession(session);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSessionComplete) return;

      // Space to replay audio
      if (e.code === 'Space' && e.target !== inputRef.current) {
        e.preventDefault();
        playCurrentAudio();
        return;
      }

      // Enter to check dictation or go next
      if (e.code === 'Enter') {
        if (!isAnswered && currentQ?.format === 'dictation') {
          e.preventDefault();
          handleCheckDictation();
        } else if (isAnswered) {
          e.preventDefault();
          handleNextQuestion();
        }
        return;
      }

      // Numbers 1-4 or Keys A-D for multiple choice options
      if (!isAnswered && currentQ && currentQ.options && currentQ.options.length >= 4) {
        if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= currentQ.options.length) {
            handleSelectOption(currentQ.options[num - 1]);
          }
        } else if (['KeyA', 'KeyB', 'KeyC', 'KeyD'].includes(e.code)) {
          const keyMap: Record<string, number> = { KeyA: 0, KeyB: 1, KeyC: 2, KeyD: 3 };
          const optIdx = keyMap[e.code];
          if (optIdx !== undefined && currentQ.options[optIdx]) {
            handleSelectOption(currentQ.options[optIdx]);
          }
        }
      }

      // Keyboard shortcuts for True / False: T / 1 for TRUE, F / 2 for FALSE
      if (!isAnswered && currentQ && currentQ.format === 'true_false') {
        if (e.key === 't' || e.key === 'T' || e.code === 'Digit1' || e.code === 'Numpad1') {
          e.preventDefault();
          handleSelectOption('TRUE');
        } else if (e.key === 'f' || e.key === 'F' || e.code === 'Digit2' || e.code === 'Numpad2') {
          e.preventDefault();
          handleSelectOption('FALSE');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, isSessionComplete, currentQ, typedAnswer]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Control Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-xs">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Thuận Phong Nhĩ · Luyện Nghe Nhận Diện
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-semibold">
                Ải {stage.id}: Sublist {stage.sublistId}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {stage.name} - {stage.bossName} ({allStageWords.length} Từ Vựng)
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => {
              sound.playClick();
              onBackToMap();
            }}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Về Bản Đồ Ải
          </button>
        </div>
      </div>

      {/* Filter & Configuration Strip */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Stage Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Chọn Ải:</span>
            <select
              value={selectedStageId}
              onChange={(e) => {
                sound.playClick();
                setSelectedStageId(Number(e.target.value));
                setSelectedColumn('all');
              }}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            >
              {STAGES.map((s) => (
                <option key={s.id} value={s.id}>
                  Ải {s.id}: {s.name} (Sublist {s.sublistId})
                </option>
              ))}
            </select>
          </div>

          {/* Column Range Filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Phạm vi từ:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedColumn('all');
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  selectedColumn === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất cả ({allStageWords.length})
              </button>
              {columns.map((col, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sound.playClick();
                    setSelectedColumn(idx + 1);
                  }}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    selectedColumn === idx + 1
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cột {idx + 1} ({col.length})
                </button>
              ))}
            </div>
          </div>

          {/* Accent and Speed Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Giọng:</span>
              <button
                onClick={() => {
                  sound.playClick();
                  setSpeechAccent((prev) => (prev === 'en-US' ? 'en-GB' : 'en-US'));
                }}
                className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-[11px]"
                title="Đổi giọng đọc US / UK"
              >
                {speechAccent === 'en-US' ? '🇺🇸 US' : '🇬🇧 UK'}
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Tốc độ:</span>
              <button
                onClick={() => {
                  sound.playClick();
                  setSpeechRate((prev) => (prev === 0.9 ? 0.75 : prev === 0.75 ? 1.0 : 0.9));
                }}
                className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-[11px]"
                title="Thay đổi tốc độ đọc"
              >
                {speechRate === 0.9 ? '0.9x' : speechRate === 0.75 ? '0.75x 🐢' : '1.0x ⚡'}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Listening Formats Selector Pills */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-700 mr-2">Dạng nghe nhận diện:</span>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('all');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'all'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🔥 Tất Cả Các Dạng (Hỗn Hợp)
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('sound_to_word');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'sound_to_word'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🎧 Nghe ➔ Chọn Từ Tiếng Anh
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('sound_to_meaning');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'sound_to_meaning'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🇻🇳 Nghe ➔ Chọn Nghĩa Tiếng Việt
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('dictation');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'dictation'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ⌨️ Nghe Chính Tả ➔ Gõ Từ
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('context_sentence');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'context_sentence'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            📖 Nghe Câu Ngữ Cảnh ➔ Bắt Từ
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('true_false');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'true_false'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ⚖️ Listen & Decide: True or False
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('dialogue_mcq');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'dialogue_mcq'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🎙️ Listen & Choose: Nghe Hội Thoại ➔ Chọn Đáp Án
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedFormat('synonym_antonym');
            }}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              selectedFormat === 'synonym_antonym'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🔀 Find Synonyms & Antonyms: Tìm Từ Đồng Nghĩa & Trái Nghĩa
          </button>
        </div>
      </div>

      {/* Main Practice Area */}
      {!isSessionComplete && currentQ ? (
        <div className="space-y-6">
          {/* Progress Header Strip */}
          <div className="flex items-center justify-between text-xs text-slate-600 px-1">
            <div className="flex items-center gap-3">
              <span>
                Câu <strong>{currentIndex + 1}</strong> / {questions.length}
              </span>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1 text-orange-600 font-semibold">
                <Flame className="w-3.5 h-3.5" />
                <span>Streak: {streak}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-semibold">
              <span className="text-amber-700">Điểm: {score}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600">Đúng: {correctCount}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Audio Listening Card (The Hero Listening Hub) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-stone-900 text-white p-6 sm:p-8 shadow-md border border-slate-800">
            {/* Visual background soundwaves */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none gap-2">
              {[40, 70, 20, 90, 60, 30, 80, 50, 100, 45, 65, 85].map((h, i) => (
                <div
                  key={i}
                  className={`w-3 rounded-full bg-amber-400 ${isPlayingAudio ? 'animate-pulse' : ''}`}
                  style={{ height: `${h}%`, transition: 'height 0.2s' }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              {/* Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5" />
                <span>
                  {currentQ.format === 'sound_to_word'
                    ? 'Dạng 1: Nghe phát âm ➔ Chọn từ vựng'
                    : currentQ.format === 'sound_to_meaning'
                    ? 'Dạng 2: Nghe phát âm ➔ Chọn nghĩa tiếng Việt'
                    : currentQ.format === 'dictation'
                    ? 'Dạng 3: Nghe chính tả ➔ Gõ từ vựng'
                    : currentQ.format === 'context_sentence'
                    ? 'Dạng 4: Nghe câu ví dụ ➔ Bắt từ ngữ cảnh'
                    : currentQ.format === 'true_false'
                    ? 'Dạng 5: Listen & Decide: True or False (Đúng / Sai)'
                    : currentQ.format === 'dialogue_mcq'
                    ? 'Dạng 6: Listen & Choose: Nghe hội thoại ➔ Chọn đáp án (Dialogue MCQ)'
                    : 'Dạng 7: Find Synonyms & Antonyms: Tìm từ đồng nghĩa & trái nghĩa'}
                </span>
              </div>

              {/* Central Audio Play Button */}
              <div className="flex items-center gap-4 my-2">
                <button
                  onClick={() => playCurrentAudio()}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white transition-all transform active:scale-95 shadow-lg ${
                    isPlayingAudio
                      ? 'bg-gradient-to-tr from-amber-500 to-orange-500 ring-4 ring-amber-400/40 scale-105'
                      : 'bg-gradient-to-tr from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 hover:scale-105'
                  }`}
                  title="Phát âm thanh (Phím Space)"
                >
                  <Volume2 className={`w-9 h-9 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                </button>
              </div>

              {/* Sub controls: Replay & Slow Play */}
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <button
                  onClick={() => playCurrentAudio(speechRate)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Nghe lại (Space)</span>
                </button>

                <button
                  onClick={() => playCurrentAudio(0.7)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  title="Nghe tốc độ chậm để nhận diện rõ từng âm tiết"
                >
                  <span>🐢 Nghe chậm 0.7x</span>
                </button>

                {timesListened > 0 && (
                  <span className="text-slate-400 text-[11px] font-mono">
                    Đã nghe {timesListened} lần
                  </span>
                )}
              </div>

              {/* Question Prompt Text */}
              <div className="pt-2 max-w-xl">
                <p className="text-sm sm:text-base font-medium text-slate-200 whitespace-pre-line leading-relaxed">
                  {currentQ.promptDisplay}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Question Input Area */}
          {/* FORMAT 1, 2, 4: Multiple Choice Grid */}
          {currentQ.options && currentQ.options.length > 0 && currentQ.format !== 'true_false' && currentQ.format !== 'dialogue_mcq' && currentQ.format !== 'synonym_antonym' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswer === opt;
                const isTheCorrectOne = opt.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();

                let cardStyle =
                  'bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/30';

                if (isAnswered) {
                  if (isTheCorrectOne) {
                    cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isTheCorrectOne) {
                    cardStyle = 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/30';
                  } else {
                    cardStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`relative p-4 rounded-2xl border text-left font-medium transition-all duration-150 flex items-start gap-3 shadow-xs ${cardStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold flex-1 leading-snug">{opt}</span>
                    {isAnswered && isTheCorrectOne && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isTheCorrectOne && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* FORMAT 3: Dictation / Spelling Typing Form */}
          {currentQ.format === 'dictation' && (
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">
                  Gõ từ vựng tiếng Anh bạn nghe được:
                </label>

                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    disabled={isAnswered}
                    value={typedAnswer}
                    onChange={(e) => setTypedAnswer(e.target.value)}
                    placeholder={`Gõ từ gồm ${currentQ.word.word.length} chữ cái...`}
                    className={`flex-1 px-4 py-3 text-base sm:text-lg font-mono font-bold tracking-wider rounded-xl border transition-all ${
                      isAnswered
                        ? isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                          : 'bg-rose-50 border-rose-500 text-rose-900'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white'
                    }`}
                  />

                  {!isAnswered ? (
                    <button
                      onClick={handleCheckDictation}
                      disabled={typedAnswer.trim().length === 0}
                      className="px-6 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 rounded-xl transition-all shadow-xs"
                    >
                      Kiểm Tra (Enter)
                    </button>
                  ) : null}
                </div>
              </div>

              {/* Length indicator and letter slots */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1 font-mono tracking-widest text-slate-700">
                  <span>Số chữ cái:</span>
                  {currentQ.word.word.split('').map((char, i) => (
                    <span
                      key={i}
                      className={`inline-block px-1 border-b-2 ${
                        i < revealedLettersCount || isAnswered
                          ? 'border-amber-600 text-amber-700 font-bold'
                          : 'border-slate-300 text-slate-400'
                      }`}
                    >
                      {i < revealedLettersCount ? currentQ.word.word[i] : isAnswered ? char : '_'}
                    </span>
                  ))}
                </div>

                {!isAnswered && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRevealLetter}
                      disabled={revealedLettersCount >= currentQ.word.word.length - 1}
                      className="px-2.5 py-1 text-[11px] font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors disabled:opacity-50"
                    >
                      💡 Gợi ý chữ cái (+1)
                    </button>

                    <button
                      onClick={() => setShowPhoneticHint((prev) => !prev)}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                      {showPhoneticHint ? currentQ.word.phonetic : '🔍 Hiện phiên âm'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FORMAT 5: Listen and Decide: True or False */}
          {currentQ.format === 'true_false' && (
            <div className="space-y-4">
              {/* Statement Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                    <Scale className="w-3.5 h-3.5" />
                    Mệnh Đề / Phát Biểu Cần Phán Đoán
                  </span>
                  <span className="text-xs text-amber-800 font-semibold bg-amber-100/90 px-2.5 py-0.5 rounded-md">
                    Nghe kỹ phát âm ➔ Chọn ĐÚNG (True) hoặc SAI (False)
                  </span>
                </div>
                <div className="pt-1">
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-serif bg-white/90 p-4 rounded-2xl border border-amber-200/80 shadow-xs">
                    "{currentQ.statementText}"
                  </p>
                </div>
              </div>

              {/* Two Big Interactive Decision Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* TRUE BUTTON */}
                <button
                  disabled={isAnswered}
                  onClick={() => handleSelectOption('TRUE')}
                  className={`p-5 rounded-2xl border-2 text-left font-medium transition-all duration-150 flex items-center justify-between gap-4 shadow-sm group ${
                    isAnswered
                      ? currentQ.correctAnswer === 'TRUE'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/40'
                        : selectedAnswer === 'TRUE'
                        ? 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/40'
                        : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                      : 'bg-white border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 hover:shadow-md active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${
                        isAnswered
                          ? currentQ.correctAnswer === 'TRUE'
                            ? 'bg-emerald-500 text-white'
                            : selectedAnswer === 'TRUE'
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-200 text-slate-400'
                          : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white'
                      }`}
                    >
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black text-slate-900 group-hover:text-emerald-700">
                          ĐÚNG (TRUE)
                        </span>
                        {isAnswered && currentQ.correctAnswer === 'TRUE' && (
                          <span className="text-xs bg-emerald-200 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                            Đáp án chuẩn
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 block">
                        Phát biểu khớp chính xác với âm thanh
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono font-bold group-hover:bg-emerald-200 group-hover:text-emerald-800 shrink-0">
                    [T] / [1]
                  </span>
                </button>

                {/* FALSE BUTTON */}
                <button
                  disabled={isAnswered}
                  onClick={() => handleSelectOption('FALSE')}
                  className={`p-5 rounded-2xl border-2 text-left font-medium transition-all duration-150 flex items-center justify-between gap-4 shadow-sm group ${
                    isAnswered
                      ? currentQ.correctAnswer === 'FALSE'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/40'
                        : selectedAnswer === 'FALSE'
                        ? 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/40'
                        : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                      : 'bg-white border-slate-200 hover:border-rose-500 hover:bg-rose-50/40 hover:shadow-md active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${
                        isAnswered
                          ? currentQ.correctAnswer === 'FALSE'
                            ? 'bg-emerald-500 text-white'
                            : selectedAnswer === 'FALSE'
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-200 text-slate-400'
                          : 'bg-rose-100 text-rose-700 group-hover:bg-rose-500 group-hover:text-white'
                      }`}
                    >
                      <X className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black text-slate-900 group-hover:text-rose-700">
                          SAI (FALSE)
                        </span>
                        {isAnswered && currentQ.correctAnswer === 'FALSE' && (
                          <span className="text-xs bg-emerald-200 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                            Đáp án chuẩn
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 block">
                        Phát biểu sai hoặc không khớp với âm thanh
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono font-bold group-hover:bg-rose-200 group-hover:text-rose-800 shrink-0">
                    [F] / [2]
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* FORMAT 6: Listen and Choose the Correct Answer (Nghe Hội Thoại ➔ Chọn Đáp Án) */}
          {currentQ.format === 'dialogue_mcq' && (
            <div className="space-y-4">
              {/* Dialogue Scenario & Question Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-sky-50/50 to-amber-50 border-2 border-amber-300/80 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Nghe Hội Thoại Học Thuật
                    </span>
                    <span className="text-xs text-slate-700 font-semibold bg-white px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-600" />
                      {currentQ.dialogueLines?.[0]?.speaker} & {currentQ.dialogueLines?.[1]?.speaker}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Transcript toggle */}
                    <button
                      onClick={() => setShowDialogueTranscript((prev) => !prev)}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 shadow-2xs"
                      title="Hiện/Ẩn phụ đề hội thoại"
                    >
                      {showDialogueTranscript ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                          <span>Ẩn Phụ Đề</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-amber-600" />
                          <span>Hiện Phụ Đề (Transcript)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Câu hỏi trắc nghiệm nội dung hội thoại:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-serif">
                    "{currentQ.dialogueQuestion}"
                  </p>
                  {currentQ.dialogueQuestionVi && (
                    <p className="text-xs font-medium text-slate-500 pt-0.5">
                      ({currentQ.dialogueQuestionVi})
                    </p>
                  )}
                </div>

                {/* Active Speaker Status Bar if playing */}
                {isPlayingAudio && activeDialogueIndex !== null && currentQ.dialogueLines?.[activeDialogueIndex] && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-semibold animate-pulse">
                    <Volume2 className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      Đang phát thoại của{' '}
                      <strong>{currentQ.dialogueLines[activeDialogueIndex].speaker}</strong> (
                      {currentQ.dialogueLines[activeDialogueIndex].role})
                    </span>
                  </div>
                )}

                {/* Transcript Dialog Bubbles (if toggled OR if answered) */}
                {(showDialogueTranscript || isAnswered) && currentQ.dialogueLines && (
                  <div className="space-y-2.5 pt-2 border-t border-amber-200/60 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-600 pb-1">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <FileText className="w-3.5 h-3.5 text-amber-600" />
                        Bản Ghi Lời Thoại (Dialogue Transcript):
                      </span>
                      <span className="text-[11px] text-slate-400 font-normal">
                        Bấm biểu tượng loa từng câu để nghe lại riêng câu đó
                      </span>
                    </div>

                    {currentQ.dialogueLines.map((line, lIdx) => {
                      const isActive = activeDialogueIndex === lIdx && isPlayingAudio;
                      const isFirst = lIdx === 0;

                      return (
                        <div
                          key={lIdx}
                          className={`p-3.5 rounded-2xl border transition-all ${
                            isActive
                              ? 'bg-amber-100/90 border-amber-400 ring-2 ring-amber-400/40'
                              : isFirst
                              ? 'bg-white border-slate-200'
                              : 'bg-stone-50/90 border-slate-200'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-2.5 flex-1">
                              <span
                                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                                  line.gender === 'female'
                                    ? 'bg-rose-100 text-rose-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {line.speaker.slice(0, 2)}
                              </span>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-slate-900">
                                    {line.speaker}
                                  </span>
                                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                                    {line.role}
                                  </span>
                                </div>
                                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                                  {line.text}
                                </p>
                                <p className="text-xs text-slate-500 italic">
                                  {line.vietnamese}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => playSingleDialogueLine(line, lIdx)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-amber-700 hover:bg-amber-100 transition-colors shrink-0"
                              title="Nghe riêng câu này"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 4 Interactive Option Cards */}
              {currentQ.options && (
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswer === opt;
                    const isTheCorrectOne = opt.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();
                    const letter = ['A', 'B', 'C', 'D'][optIdx] || `${optIdx + 1}`;

                    let cardStyle =
                      'bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-sm';

                    if (isAnswered) {
                      if (isTheCorrectOne) {
                        cardStyle =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/40 shadow-xs';
                      } else if (isSelected && !isTheCorrectOne) {
                        cardStyle =
                          'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/40 shadow-xs';
                      } else {
                        cardStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(opt)}
                        className={`p-4 rounded-2xl border-2 text-left font-medium transition-all duration-150 flex items-start gap-3.5 shadow-2xs group ${cardStyle}`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                            isAnswered
                              ? isTheCorrectOne
                                ? 'bg-emerald-500 text-white'
                                : isSelected
                                ? 'bg-rose-500 text-white'
                                : 'bg-slate-100 text-slate-400'
                              : 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white'
                          }`}
                        >
                          {letter}
                        </span>

                        <div className="flex-1 space-y-0.5">
                          <span className="text-sm sm:text-base font-semibold block leading-snug">
                            {opt}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isAnswered && isTheCorrectOne && (
                            <span className="inline-flex items-center gap-1 text-xs bg-emerald-200 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                              Đúng
                            </span>
                          )}
                          {isAnswered && isSelected && !isTheCorrectOne && (
                            <span className="inline-flex items-center gap-1 text-xs bg-rose-200 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                              <X className="w-3.5 h-3.5 stroke-[3]" />
                              Sai
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-slate-400 px-1.5 py-0.5 rounded bg-slate-100">
                            [{optIdx + 1}]
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* FORMAT 7: Find Synonyms and Antonyms (Tìm Từ Đồng Nghĩa & Trái Nghĩa) */}
          {currentQ.format === 'synonym_antonym' && (
            <div className="space-y-4">
              {/* Target Word Spotlight Card */}
              <div
                className={`p-5 sm:p-6 rounded-3xl border-2 shadow-xs space-y-4 ${
                  currentQ.relationType === 'synonym'
                    ? 'bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50 border-emerald-300'
                    : 'bg-gradient-to-r from-rose-50 via-amber-50/60 to-rose-50 border-rose-300'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-xs ${
                        currentQ.relationType === 'synonym' ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    >
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                      {currentQ.relationType === 'synonym'
                        ? 'Tìm Từ Đồng Nghĩa (Synonym / Closest in Meaning)'
                        : 'Tìm Từ Trái Nghĩa (Antonym / Opposite in Meaning)'}
                    </span>
                    <span className="text-xs text-slate-700 font-semibold bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      Sublist {currentQ.word.sublist} · {currentQ.word.pos}
                    </span>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white/80 text-slate-600 border border-slate-200">
                    Phím tắt: [1-4] hoặc [A-D]
                  </span>
                </div>

                {/* Prominent Word Box */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
                        {currentQ.word.word}
                      </h2>
                      <span className="text-sm font-mono text-slate-600 font-medium">
                        {currentQ.word.phonetic}
                      </span>
                      <span className="text-xs uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold">
                        {currentQ.word.pos}
                      </span>
                    </div>

                    <button
                      onClick={() => playCurrentAudio()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                      title="Phát lại âm thanh (Space)"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe Phát Âm</span>
                    </button>
                  </div>

                  {/* Context sentence box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Ngữ cảnh học thuật (Context Sentence):
                    </span>
                    <p className="text-sm sm:text-base font-serif italic text-slate-800 leading-relaxed">
                      "{currentQ.word.example}"
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      ({currentQ.word.exampleVi})
                    </p>
                  </div>

                  {/* Question Prompt Callout */}
                  <div className="pt-1 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      {currentQ.relationType === 'synonym'
                        ? `Từ nào trong các đáp án dưới đây có nghĩa ĐỒNG NGHĨA (Synonym) gần nhất với "${currentQ.word.word}"?`
                        : `Từ nào trong các đáp án dưới đây có nghĩa TRÁI NGHĨA (Antonym) đối lập với "${currentQ.word.word}"?`}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Multiple Choice Option Cards */}
              {currentQ.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswer === opt;
                    const isTheCorrectOne = opt.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();
                    const letter = ['A', 'B', 'C', 'D'][optIdx] || `${optIdx + 1}`;

                    let cardStyle =
                      'bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-sm';

                    if (isAnswered) {
                      if (isTheCorrectOne) {
                        cardStyle =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/40 shadow-xs';
                      } else if (isSelected && !isTheCorrectOne) {
                        cardStyle =
                          'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/40 shadow-xs';
                      } else {
                        cardStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(opt)}
                        className={`p-4 rounded-2xl border-2 text-left font-medium transition-all duration-150 flex items-start gap-3.5 shadow-2xs group ${cardStyle}`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                            isAnswered
                              ? isTheCorrectOne
                                ? 'bg-emerald-500 text-white'
                                : isSelected
                                ? 'bg-rose-500 text-white'
                                : 'bg-slate-100 text-slate-400'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-amber-500 group-hover:text-white'
                          }`}
                        >
                          {letter}
                        </span>

                        <div className="flex-1 space-y-0.5">
                          <span className="text-base sm:text-lg font-bold block leading-snug">
                            {opt}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isAnswered && isTheCorrectOne && (
                            <span className="inline-flex items-center gap-1 text-xs bg-emerald-200 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                              Đúng
                            </span>
                          )}
                          {isAnswered && isSelected && !isTheCorrectOne && (
                            <span className="inline-flex items-center gap-1 text-xs bg-rose-200 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                              <X className="w-3.5 h-3.5 stroke-[3]" />
                              Sai
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-slate-400 px-1.5 py-0.5 rounded bg-slate-100">
                            [{optIdx + 1}]
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Feedback & Detailed Academic Word Card */}
          {isAnswered && (
            <div
              className={`p-6 rounded-3xl border shadow-xs space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200 ${
                isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        Chính xác! Thính lực thần thông
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-800 bg-rose-200/60 px-2.5 py-0.5 rounded-md">
                        <XCircle className="w-3.5 h-3.5 text-rose-700" />
                        Chưa chính xác! Cần lưu ý
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-mono">
                      Sublist {currentQ.word.sublist}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {currentQ.word.word}
                    </h3>
                    <span className="font-mono text-sm text-slate-600 font-medium">
                      {currentQ.word.phonetic}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 font-semibold uppercase">
                      {currentQ.word.pos}
                    </span>
                    <button
                      onClick={() => playCurrentAudio()}
                      className="p-1 rounded-md text-amber-700 hover:bg-amber-100 transition-colors"
                      title="Phát lại âm thanh"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Next button */}
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs flex items-center gap-2 shrink-0"
                >
                  <span>{currentIndex + 1 < questions.length ? 'Từ Tiếp Theo' : 'Xem Kết Quả'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Detailed Academic Explanation & True/False Analysis */}
              {currentQ.explanation && (
                <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 shadow-xs space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-700">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span>
                      {currentQ.format === 'true_false'
                        ? 'Phân Tích Chi Tiết & Đối Chiếu Tính Đúng / Sai:'
                        : currentQ.format === 'dialogue_mcq'
                        ? 'Phân Tích Lời Thoại & Đáp Án Học Thuật (Cambridge IELTS):'
                        : currentQ.format === 'synonym_antonym'
                        ? 'Phân Tích Quan Hệ Từ Đồng Nghĩa & Trái Nghĩa Học Thuật:'
                        : 'Giải Thích Chi Tiết:'}
                    </span>
                  </div>
                  <div className="text-slate-800 whitespace-pre-line leading-relaxed font-medium pl-5">
                    {currentQ.explanation}
                  </div>
                </div>
              )}

              {/* Synonyms & Antonyms Matrix Card (if lexical relation is available) */}
              {currentQ.lexicalRelation && (
                <div className="p-4 rounded-2xl bg-white/95 border border-slate-200 shadow-xs space-y-3 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs sm:text-sm">
                      <ArrowLeftRight className="w-4 h-4 text-amber-600" />
                      Mở Rộng Từ Đồng Nghĩa (Synonyms) & Trái Nghĩa (Antonyms):
                    </span>
                    <button
                      onClick={() =>
                        speechService.speak(currentQ.correctAnswer, {
                          rate: 0.9,
                          accent: speechAccent,
                        })
                      }
                      className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-100/90 hover:bg-emerald-200 px-3 py-1 rounded-lg border border-emerald-300 transition-colors"
                      title="Nghe phát âm đáp án chuẩn"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Phát âm đáp án: <strong>{currentQ.correctAnswer}</strong></span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Synonyms Box */}
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/90 space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                        <span>Từ Đồng Nghĩa (Synonyms):</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentQ.lexicalRelation.synonyms.map((syn, sIdx) => {
                          const isTheAnswer = syn.toLowerCase() === currentQ.correctAnswer.toLowerCase();
                          return (
                            <span
                              key={sIdx}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                                isTheAnswer
                                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs ring-2 ring-emerald-400/40'
                                  : 'bg-white text-emerald-950 border-emerald-200/90 hover:bg-emerald-100/50'
                              }`}
                            >
                              {syn}
                              {currentQ.lexicalRelation?.synonymsVi?.[sIdx] && (
                                <span className={`text-[10px] ml-1 ${isTheAnswer ? 'text-emerald-100' : 'text-emerald-700 font-normal'}`}>
                                  ({currentQ.lexicalRelation.synonymsVi[sIdx]})
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Antonyms Box */}
                    <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/90 space-y-2">
                      <div className="flex items-center gap-1.5 text-rose-900 font-bold">
                        <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                        <span>Từ Trái Nghĩa (Antonyms):</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentQ.lexicalRelation.antonyms.map((ant, aIdx) => {
                          const isTheAnswer = ant.toLowerCase() === currentQ.correctAnswer.toLowerCase();
                          return (
                            <span
                              key={aIdx}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                                isTheAnswer
                                  ? 'bg-rose-600 text-white border-rose-700 shadow-xs ring-2 ring-rose-400/40'
                                  : 'bg-white text-rose-950 border-rose-200/90 hover:bg-rose-100/50'
                              }`}
                            >
                              {ant}
                              {currentQ.lexicalRelation?.antonymsVi?.[aIdx] && (
                                <span className={`text-[10px] ml-1 ${isTheAnswer ? 'text-rose-100' : 'text-rose-700 font-normal'}`}>
                                  ({currentQ.lexicalRelation.antonymsVi[aIdx]})
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Meanings and Collocations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white/80 border border-slate-200/70 space-y-1">
                  <span className="text-slate-500 font-semibold block">Nghĩa tiếng Việt:</span>
                  <p className="font-bold text-slate-900 text-sm">{currentQ.word.meaningVi}</p>
                  <p className="text-slate-600 text-[11px]">{currentQ.word.definitionEn}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/80 border border-slate-200/70 space-y-1">
                  <span className="text-slate-500 font-semibold block">Cụm từ học thuật (Collocations):</span>
                  <div className="flex flex-wrap gap-1">
                    {currentQ.word.collocations.map((col, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-medium text-[11px] border border-amber-200/60"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Example Sentence with Audio */}
              <div className="p-3 rounded-xl bg-white/80 border border-slate-200/70 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Ví dụ trong ngữ cảnh học thuật:</span>
                  <button
                    onClick={() => {
                      speechService.speak(currentQ.word.example, { rate: 0.9, accent: speechAccent });
                    }}
                    className="flex items-center gap-1 text-[11px] text-amber-700 hover:text-amber-900 font-semibold"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe cả câu</span>
                  </button>
                </div>
                <p className="italic text-slate-800 font-serif text-sm">"{currentQ.word.example}"</p>
                <p className="text-slate-500 text-[11px]">{currentQ.word.exampleVi}</p>
              </div>

              {/* Quick Actions (Master / Review / Ask AI) */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleMastered(currentQ.word.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      masteredWords.includes(currentQ.word.id)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{masteredWords.includes(currentQ.word.id) ? 'Đã Thuộc Từ Này' : 'Đánh Dấu Đã Thuộc'}</span>
                  </button>

                  <button
                    onClick={() => onToggleReview(currentQ.word.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      reviewWords.includes(currentQ.word.id)
                        ? 'bg-amber-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{reviewWords.includes(currentQ.word.id) ? 'Đang Trong Sổ Ôn' : 'Lưu Vào Sổ Ôn'}</span>
                  </button>
                </div>

                <button
                  onClick={() => onOpenAiTutor(currentQ.word)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-800 bg-amber-100/70 hover:bg-amber-200/70 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Hỏi Sư Tổ AI Về Phát Âm Này</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {/* Completion Summary Modal / Card */}
      {isSessionComplete && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mx-auto shadow-xs">
            🎧
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
              Hoàn Thành Phiên Luyện Nghe Nhận Diện
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Công Đức Viên Mãn · Ải {stage.id}
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Bạn đã hoàn thành bài tập nghe nhận diện từ vựng của Sublist {stage.sublistId}.
            </p>
          </div>

          {/* Core Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-2xl mx-auto">
            <div>
              <span className="text-xs text-slate-500 block mb-1">Số Câu Đúng</span>
              <span className="text-2xl font-bold text-slate-900 tabular-nums">
                {correctCount} / {questions.length}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Độ Chính Xác</span>
              <span className="text-2xl font-bold text-emerald-600 tabular-nums">
                {questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0}%
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Chuỗi Kỷ Lục</span>
              <span className="text-2xl font-bold text-orange-600 tabular-nums">
                {maxStreak} liên tiếp
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Điểm Thần Thông</span>
              <span className="text-2xl font-bold text-amber-700 tabular-nums">
                +{score} pts
              </span>
            </div>
          </div>

          {/* List of wrong words if any */}
          {wrongWords.length > 0 && (
            <div className="text-left max-w-2xl mx-auto space-y-2 p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <span className="text-xs font-bold text-amber-900 block">
                Các từ cần chú ý luyện nghe lại trong ải này ({wrongWords.length} từ):
              </span>
              <div className="flex flex-wrap gap-2">
                {wrongWords.map((w, wIdx) => (
                  <button
                    key={wIdx}
                    onClick={() => {
                      speechService.speak(w.word, { rate: 0.85, accent: speechAccent });
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-amber-200 text-xs font-semibold text-slate-800 hover:bg-amber-100 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>{w.word}</span>
                    <span className="text-[11px] text-slate-400">({w.meaningVi})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                sound.playClick();
                generateQuestions();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
            >
              Luyện Tập Lại Lượt Này
            </button>

            {selectedStageId < 10 && (
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedStageId((prev) => prev + 1);
                  setSelectedColumn('all');
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-all"
              >
                Sang Luyện Nghe Ải {selectedStageId + 1}
              </button>
            )}

            <button
              onClick={() => {
                sound.playClick();
                onBackToMap();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
            >
              Trở Về Bản Đồ 10 Ải
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
