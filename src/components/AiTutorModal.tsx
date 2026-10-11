import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  BookOpen,
  PenTool,
  MessageSquare,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
  Volume2,
} from 'lucide-react';
import { AWLWord, UserProgress } from '../types';
import {
  generateMnemonic,
  explainAcademicContext,
  gradeUserSentence,
  askAiTutor,
} from '../services/geminiService';
import { AWL_WORDS_DATA } from '../data/awlData';
import { sound } from '../services/soundService';

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedWord?: AWLWord | null;
  initialMode?: 'mnemonic' | 'academic' | 'sentence' | 'chat';
  progress?: UserProgress;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  selectedWord,
  initialMode = 'mnemonic',
  progress,
}) => {
  const [activeTab, setActiveTab] = useState<'mnemonic' | 'academic' | 'sentence' | 'chat'>(initialMode);
  const [targetWord, setTargetWord] = useState<AWLWord | null>(selectedWord || AWL_WORDS_DATA[0]);
  const [searchWordInput, setSearchWordInput] = useState<string>('');

  // Tab 1 & 2 state
  const [cachedMnemonic, setCachedMnemonic] = useState<Record<string, string>>({});
  const [cachedAcademic, setCachedAcademic] = useState<Record<string, string>>({});
  const [loadingContent, setLoadingContent] = useState<boolean>(false);
  const [contentError, setContentError] = useState<string | null>(null);

  // Tab 3: Sentence Grader
  const [userSentence, setUserSentence] = useState<string>('');
  const [gradedResult, setGradedResult] = useState<string | null>(null);
  const [isGrading, setIsGrading] = useState<boolean>(false);

  // Tab 4: Chat with AI Tutor
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Chào thiện nam tín nữ! Lão phu là Bồ Đề Sư Tổ. Ngươi đang gặp khó khăn với từ vựng Academic Word List nào trong hành trình thỉnh kinh?',
    },
  ]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isSendingChat, setIsSendingChat] = useState<boolean>(false);

  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (selectedWord) {
      setTargetWord(selectedWord);
    }
    if (initialMode) {
      setActiveTab(initialMode);
    }
  }, [selectedWord, initialMode, isOpen]);

  // Load mnemonic or academic explanation when tab or target word changes
  useEffect(() => {
    if (!isOpen || !targetWord) return;

    if (activeTab === 'mnemonic' && !cachedMnemonic[targetWord.id]) {
      fetchMnemonic(targetWord);
    } else if (activeTab === 'academic' && !cachedAcademic[targetWord.id]) {
      fetchAcademic(targetWord);
    }
  }, [activeTab, targetWord, isOpen]);

  const fetchMnemonic = async (word: AWLWord) => {
    setLoadingContent(true);
    setContentError(null);
    try {
      const text = await generateMnemonic(word);
      setCachedMnemonic((prev) => ({ ...prev, [word.id]: text }));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setContentError(msg);
    } finally {
      setLoadingContent(false);
    }
  };

  const fetchAcademic = async (word: AWLWord) => {
    setLoadingContent(true);
    setContentError(null);
    try {
      const text = await explainAcademicContext(word);
      setCachedAcademic((prev) => ({ ...prev, [word.id]: text }));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setContentError(msg);
    } finally {
      setLoadingContent(false);
    }
  };

  const handleGradeSentence = async () => {
    if (!targetWord || !userSentence.trim() || isGrading) return;
    setIsGrading(true);
    setContentError(null);
    sound.playClick();
    try {
      const result = await gradeUserSentence(targetWord, userSentence);
      setGradedResult(result);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setContentError(msg);
    } finally {
      setIsGrading(false);
    }
  };

  const handleSendChat = async () => {
    if (!chatInput.trim() || isSendingChat) return;
    const userText = chatInput.trim();
    const nextMessages = [...chatMessages, { sender: 'user' as const, text: userText }];
    setChatMessages(nextMessages);
    setChatInput('');
    setIsSendingChat(true);
    sound.playClick();

    try {
      const reply = await askAiTutor(nextMessages, targetWord || undefined, progress);
      setChatMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      sound.playSuccess();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setChatMessages((prev) => [
        ...prev,
        { sender: 'ai', text: `⚠️ Đã có sự cố: ${msg}` },
      ]);
    } finally {
      setIsSendingChat(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shadow-xs">
              🧙‍♂️
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Bồ Đề Sư Tổ · Gemini AI Tutor
              </h3>
              <span className="text-xs text-amber-700 font-medium">
                Gia sư thần thông hỗ trợ 570 từ vựng AWL
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Selection Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Từ vựng mục tiêu:</span>
            {targetWord ? (
              <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                {targetWord.word} ({targetWord.meaningVi})
              </span>
            ) : (
              <span className="text-slate-400">Chưa chọn từ</span>
            )}
          </div>

          {/* Quick Word Switcher */}
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              placeholder="Đổi từ (vd: analysis)..."
              value={searchWordInput}
              onChange={(e) => setSearchWordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const found = AWL_WORDS_DATA.find(
                    (w) => w.word.toLowerCase() === searchWordInput.trim().toLowerCase()
                  );
                  if (found) {
                    setTargetWord(found);
                    setSearchWordInput('');
                  }
                }
              }}
              className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 w-36 sm:w-48"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-100 overflow-x-auto bg-white">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('mnemonic');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${activeTab === 'mnemonic'
                ? 'border-amber-600 text-amber-700 bg-amber-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Thần Chú Ghi Nhớ</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('academic');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${activeTab === 'academic'
                ? 'border-amber-600 text-amber-700 bg-amber-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>IELTS Task 2 Nuance</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('sentence');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${activeTab === 'sentence'
                ? 'border-amber-600 text-amber-700 bg-amber-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            <PenTool className="w-3.5 h-3.5 text-amber-600" />
            <span>Chấm Câu & Nâng Cấp</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('chat');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${activeTab === 'chat'
                ? 'border-amber-600 text-amber-700 bg-amber-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>Vấn Đạo Tôn Sư</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Error Message */}
          {contentError && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1">
                <span className="font-bold block">Không thể kết nối Gemini AI:</span>
                <span>{contentError}</span>
              </div>
            </div>
          )}

          {/* TAB 1: Mnemonic */}
          {activeTab === 'mnemonic' && targetWord && (
            <div className="space-y-4">
              {loadingContent ? (
                <div className="py-16 text-center space-y-3">
                  <Loader2 className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
                  <p className="text-xs text-slate-500">
                    Bồ Đề Sư Tổ đang xuất chiêu sáng tạo bí kíp thần chú cho &quot;{targetWord.word}&quot;...
                  </p>
                </div>
              ) : cachedMnemonic[targetWord.id] ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Bí Kíp Thần Chú Tây Du Ký:
                    </span>
                    <button
                      onClick={() => handleCopy(cachedMnemonic[targetWord.id])}
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md bg-slate-100"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
                    </button>
                  </div>

                  <div className="prose prose-sm max-w-none text-slate-800 bg-amber-50/40 p-5 rounded-2xl border border-amber-200/60 leading-relaxed whitespace-pre-wrap">
                    {cachedMnemonic[targetWord.id]}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* TAB 2: Academic IELTS Breakdown */}
          {activeTab === 'academic' && targetWord && (
            <div className="space-y-4">
              {loadingContent ? (
                <div className="py-16 text-center space-y-3">
                  <Loader2 className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
                  <p className="text-xs text-slate-500">
                    Đang phân tích sắc thái học thuật và văn cảnh IELTS Task 2 cho &quot;{targetWord.word}&quot;...
                  </p>
                </div>
              ) : cachedAcademic[targetWord.id] ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Hướng Dẫn Học Thuật Band 8.0+:
                    </span>
                    <button
                      onClick={() => handleCopy(cachedAcademic[targetWord.id])}
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md bg-slate-100"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
                    </button>
                  </div>

                  <div className="prose prose-sm max-w-none text-slate-800 bg-slate-50 p-5 rounded-2xl border border-slate-200 leading-relaxed whitespace-pre-wrap">
                    {cachedAcademic[targetWord.id]}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* TAB 3: Sentence Grader */}
          {activeTab === 'sentence' && targetWord && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Thử viết một câu tiếng Anh có chứa từ &quot;<span className="text-amber-700 font-bold">{targetWord.word}</span>&quot;:
                </label>
                <textarea
                  rows={3}
                  value={userSentence}
                  onChange={(e) => setUserSentence(e.target.value)}
                  placeholder={`Ví dụ: The initial analysis revealed surprising insights...`}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-400"
                />

                <div className="flex justify-end">
                  <button
                    disabled={!userSentence.trim() || isGrading}
                    onClick={handleGradeSentence}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 rounded-xl transition-all shadow-xs"
                  >
                    {isGrading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Chấm Điểm & Nâng Cấp Câu</span>
                  </button>
                </div>
              </div>

              {gradedResult && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block">
                    Kết Quả Chấm Điểm Của Bồ Đề Sư Tổ:
                  </span>
                  <div className="prose prose-sm max-w-none text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed whitespace-pre-wrap">
                    {gradedResult}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Free Chat Q&A */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[380px] space-y-3">
              <div className="flex-1 overflow-y-auto space-y-3 p-1 pr-2">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                        🧙‍♂️
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${msg.sender === 'user'
                          ? 'bg-slate-900 text-white rounded-br-xs'
                          : 'bg-slate-100 text-slate-800 rounded-bl-xs'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isSendingChat && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sư tổ đang trầm ngâm suy nghĩ câu trả lời...</span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <input
                  type="text"
                  placeholder="Đặt câu hỏi về từ vựng, ngữ pháp, collocations..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500"
                />
                <button
                  disabled={!chatInput.trim() || isSendingChat}
                  onClick={handleSendChat}
                  className="p-2 text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
