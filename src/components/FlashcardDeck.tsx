import React, { useState } from 'react';
import {
  Volume2,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Filter,
  Bookmark,
  Layers,
} from 'lucide-react';
import { AWLWord } from '../types';
import { AWL_WORDS_DATA } from '../data/awlData';
import { sound } from '../services/soundService';

interface FlashcardDeckProps {
  initialSublist?: number;
  masteredWords: string[];
  reviewWords: string[];
  weakTopics: string[];
  onToggleMastered: (wordId: string) => void;
  onToggleReview: (wordId: string) => void;
  onToggleWeak: (wordId: string) => void;
  onOpenAiTutorForWord: (word: AWLWord, mode?: 'mnemonic' | 'academic' | 'sentence') => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  initialSublist = 1,
  masteredWords,
  reviewWords,
  weakTopics,
  onToggleMastered,
  onToggleReview,
  onToggleWeak,
  onOpenAiTutorForWord,
}) => {
  const [selectedSublist, setSelectedSublist] = useState<number>(initialSublist);
  const [filterMode, setFilterMode] = useState<'all' | 'mastered' | 'review' | 'weak'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Filter words
  const sublistWords = AWL_WORDS_DATA.filter(
    (w) => selectedSublist === 0 || w.sublist === selectedSublist
  );

  const displayedWords = sublistWords.filter((w) => {
    if (filterMode === 'mastered') return masteredWords.includes(w.id);
    if (filterMode === 'review') return reviewWords.includes(w.id);
    if (filterMode === 'weak') return weakTopics.includes(w.word);
    return true;
  });

  const currentWord: AWLWord | undefined = displayedWords[currentIndex];

  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleFlip = () => {
    sound.playClick();
    setIsFlipped(!isFlipped);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      sound.playClick();
      setIsFlipped(false);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < displayedWords.length - 1) {
      sound.playClick();
      setIsFlipped(false);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Filter and Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200">
        {/* Sublist Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="sublist-select" className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            Chọn Ải/Sublist:
          </label>
          <select
            id="sublist-select"
            value={selectedSublist}
            onChange={(e) => {
              sound.playClick();
              setSelectedSublist(Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
          >
            <option value={0}>Tất cả 10 Sublist (570 từ)</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sub) => (
              <option key={sub} value={sub}>
                Ải {sub} · Sublist {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl overflow-x-auto">
          <button
            onClick={() => {
              setFilterMode('all');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filterMode === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả ({sublistWords.length})
          </button>
          <button
            onClick={() => {
              setFilterMode('weak');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filterMode === 'weak' ? 'bg-white text-rose-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Gặp nạn ({sublistWords.filter((w) => weakTopics.includes(w.word)).length})
          </button>
          <button
            onClick={() => {
              setFilterMode('review');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filterMode === 'review' ? 'bg-white text-amber-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cần ôn ({sublistWords.filter((w) => reviewWords.includes(w.id)).length})
          </button>
          <button
            onClick={() => {
              setFilterMode('mastered');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filterMode === 'mastered' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Đã thuộc ({sublistWords.filter((w) => masteredWords.includes(w.id)).length})
          </button>
        </div>
      </div>

      {displayedWords.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200 space-y-3">
          <Layers className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">Không có từ vựng nào trong mục này</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Hãy chuyển sang bộ lọc &quot;Tất cả&quot; hoặc chọn Sublist khác để tiếp tục tu luyện Kim Cô Chú!
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-xl"
          >
            Xem tất cả từ
          </button>
        </div>
      ) : currentWord ? (
        <div className="space-y-6">
          {/* Card Counter & Quick Status Strip */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-2">
            <span className="font-medium">
              Thẻ {currentIndex + 1} / {displayedWords.length}
            </span>
            <div className="flex items-center gap-3">
              {masteredWords.includes(currentWord.id) && (
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã thuộc
                </span>
              )}
              {reviewWords.includes(currentWord.id) && (
                <span className="text-amber-600 font-semibold flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5" /> Cần ôn
                </span>
              )}
              {weakTopics.includes(currentWord.word) && (
                <span className="text-rose-600 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Hay sai
                </span>
              )}
              <span>Sublist {currentWord.sublist}</span>
            </div>
          </div>

          {/* Flashcard Component */}
          <div
            onClick={handleFlip}
            className="group relative min-h-[380px] sm:min-h-[420px] rounded-3xl cursor-pointer select-none transition-all duration-300 transform perspective-1000 bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-lg p-6 sm:p-10 flex flex-col justify-between"
          >
            {/* Top Bar on Card */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Sublist {currentWord.sublist} · AWL Core
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleSpeak(currentWord.word, e)}
                  className="p-2 rounded-xl text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  title="Nghe phát âm chuẩn (US/UK)"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <div className="p-2 rounded-xl text-slate-400 group-hover:text-amber-600 transition-colors">
                  <RotateCw className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Front View */}
            {!isFlipped ? (
              <div className="my-auto text-center space-y-4 py-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                    {currentWord.pos}
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {currentWord.word}
                  </h2>
                  <p className="text-base text-amber-700 font-mono">
                    {currentWord.phonetic}
                  </p>
                </div>

                <div className="pt-6">
                  <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full group-hover:bg-amber-100/60 group-hover:text-amber-800 transition-colors">
                    Nhấp vào thẻ để lật xem định nghĩa, collocations & ví dụ
                  </span>
                </div>
              </div>
            ) : (
              /* Back View */
              <div className="my-auto space-y-5 py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {currentWord.word}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      {currentWord.phonetic}
                    </span>
                    <span className="text-xs text-amber-700 font-semibold italic">
                      ({currentWord.pos})
                    </span>
                  </div>
                  <p className="text-base font-semibold text-amber-700">
                    {currentWord.meaningVi}
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">Định nghĩa tiếng Anh:</span>
                  {currentWord.definitionEn}
                </div>

                {/* Collocations */}
                {currentWord.collocations.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-slate-500 block">
                      Collocations học thuật:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentWord.collocations.map((col, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-amber-50 text-amber-900 border border-amber-200/60 px-2.5 py-0.5 rounded-md font-medium"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Academic Example */}
                <div className="space-y-1 border-t border-slate-100 pt-3">
                  <span className="text-xs font-semibold text-slate-500 block">
                    Ví dụ câu học thuật:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 italic">
                    &quot;{currentWord.example}&quot;
                  </p>
                  <p className="text-xs text-slate-500">
                    → {currentWord.exampleVi}
                  </p>
                </div>

                {/* Word Family */}
                {currentWord.wordFamily.length > 0 && (
                  <div className="text-xs text-slate-500 border-t border-slate-100 pt-2">
                    <span className="font-semibold text-slate-700">Họ từ: </span>
                    <span>{currentWord.wordFamily.join(', ')}</span>
                  </div>
                )}
              </div>
            )}

            {/* AI Assistant Quick Triggers on Card */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-slate-400">
                Trợ lực Bồ Đề Sư Tổ:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    onOpenAiTutorForWord(currentWord, 'mnemonic');
                  }}
                  className="px-2.5 py-1 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Thần Chú</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    onOpenAiTutorForWord(currentWord, 'academic');
                  }}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <span>IELTS Task 2</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    onOpenAiTutorForWord(currentWord, 'sentence');
                  }}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <span>Chấm Câu</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation and Spaced Repetition Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Từ Trước</span>
              </button>

              <button
                disabled={currentIndex >= displayedWords.length - 1}
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-colors"
              >
                <span>Từ Kế Tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Spaced repetition marking actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button
                onClick={() => {
                  sound.playClick();
                  onToggleWeak(currentWord.word);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border transition-colors ${
                  weakTopics.includes(currentWord.word)
                    ? 'bg-rose-50 border-rose-300 text-rose-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-rose-50/50'
                }`}
                title="Đánh dấu từ khó, thường quên"
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                <span>Gặp Nạn (Khó)</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onToggleReview(currentWord.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border transition-colors ${
                  reviewWords.includes(currentWord.id)
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-amber-50/50'
                }`}
                title="Đánh dấu cần ôn tập lại"
              >
                <Bookmark className="w-3.5 h-3.5 text-amber-600" />
                <span>Cần Ôn</span>
              </button>

              <button
                onClick={() => {
                  sound.playSuccess();
                  onToggleMastered(currentWord.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border transition-colors ${
                  masteredWords.includes(currentWord.id)
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-emerald-50/50'
                }`}
                title="Đánh dấu đã thuộc vững"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Đã Thuộc</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
