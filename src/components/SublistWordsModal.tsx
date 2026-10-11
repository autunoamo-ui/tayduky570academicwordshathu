import React, { useState } from 'react';
import { X, Volume2, Sparkles, CheckCircle2, Bookmark, Layers, Swords, Headphones, FileText } from 'lucide-react';
import { AWLWord } from '../types';
import { AWL_WORDS_DATA, STAGES } from '../data/awlData';
import { sound } from '../services/soundService';

interface SublistWordsModalProps {
  stageId: number;
  isOpen: boolean;
  onClose: () => void;
  masteredWords: string[];
  reviewWords: string[];
  onSelectWordForAi: (word: AWLWord) => void;
  onStartFlashcards: (stageId: number) => void;
  onStartBattle: (stageId: number) => void;
  onStartListening?: (stageId: number) => void;
  onStartReading?: (stageId: number) => void;
}

export const SublistWordsModal: React.FC<SublistWordsModalProps> = ({
  stageId,
  isOpen,
  onClose,
  masteredWords,
  reviewWords,
  onSelectWordForAi,
  onStartFlashcards,
  onStartBattle,
  onStartListening,
  onStartReading,
}) => {
  const [selectedWord, setSelectedWord] = useState<AWLWord | null>(null);

  if (!isOpen) return null;

  const stage = STAGES.find((s) => s.id === stageId) || STAGES[0];
  const words = AWL_WORDS_DATA.filter((w) => w.sublist === stageId);

  // Split into 4 columns like the user's reference image
  const quarter = Math.ceil(words.length / 4);
  const col1 = words.slice(0, quarter);
  const col2 = words.slice(quarter, quarter * 2);
  const col3 = words.slice(quarter * 2, quarter * 3);
  const col4 = words.slice(quarter * 3);

  const columns = [col1, col2, col3, col4];

  const handleSpeak = (wordText: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(wordText);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center text-xl font-bold border border-amber-300">
              {stage.bossAvatar}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Bảng 60 Từ Vựng Cốt Lõi · {stage.name} (Sublist {stage.sublistId})
              </h3>
              <span className="text-xs text-amber-700 font-medium">
                Danh sách chuẩn Academic Word List (AWL)
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

        {/* Selected Word Quick Preview Banner */}
        {selectedWord && (
          <div className="px-6 py-3.5 bg-amber-50/70 border-b border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-amber-950">
                  {selectedWord.word}
                </span>
                <span className="font-mono text-amber-700">{selectedWord.phonetic}</span>
                <span className="italic text-slate-500 font-medium">({selectedWord.pos})</span>
                <button
                  onClick={(e) => handleSpeak(selectedWord.word, e)}
                  className="p-1 rounded-md text-amber-800 hover:bg-amber-200/60"
                  title="Phát âm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-700">
                <span className="font-semibold text-amber-900">Nghĩa: </span>
                {selectedWord.meaningVi} — <span className="italic text-slate-600">{selectedWord.definitionEn}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  sound.playClick();
                  onSelectWordForAi(selectedWord);
                }}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-200/80 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bí Kíp AI</span>
              </button>
            </div>
          </div>
        )}

        {/* Main 4-Column Table matching user screenshot */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 text-xs">
              {columns.map((col, colIdx) => (
                <div key={colIdx} className="divide-y divide-slate-100">
                  {col.map((wordItem) => {
                    const isSelected = selectedWord?.id === wordItem.id;
                    const isMastered = masteredWords.includes(wordItem.id);
                    const isReview = reviewWords.includes(wordItem.id);

                    return (
                      <div
                        key={wordItem.id}
                        onClick={() => {
                          sound.playClick();
                          setSelectedWord(wordItem);
                          handleSpeak(wordItem.word);
                        }}
                        className={`px-3 py-2.5 flex items-center justify-between cursor-pointer transition-colors group select-none ${
                          isSelected
                            ? 'bg-amber-100/70 font-bold text-amber-950'
                            : 'hover:bg-amber-50/50 text-slate-800'
                        }`}
                      >
                        <span className="font-medium text-xs sm:text-sm group-hover:text-amber-800 transition-colors">
                          {wordItem.word}
                        </span>

                        <div className="flex items-center gap-1">
                          {isMastered && (
                            <span title="Đã thuộc">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            </span>
                          )}
                          {isReview && (
                            <span title="Cần ôn">
                              <Bookmark className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            </span>
                          )}
                          <button
                            onClick={(e) => handleSpeak(wordItem.word, e)}
                            className="opacity-0 group-hover:opacity-100 p-0.5 text-slate-400 hover:text-amber-700 transition-opacity"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <span className="text-xs text-slate-500">
            Tổng cộng: <strong className="text-slate-800">{words.length}</strong> từ vựng cốt lõi. Nhấp vào từ bất kỳ để nghe phát âm và xem nghĩa chi tiết.
          </span>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {onStartListening && (
              <button
                onClick={() => {
                  sound.playClick();
                  onStartListening(stageId);
                  onClose();
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/70 rounded-xl transition-colors"
              >
                <Headphones className="w-3.5 h-3.5 text-amber-700" />
                <span>Luyện Nghe</span>
              </button>
            )}

            {onStartReading && (
              <button
                onClick={() => {
                  sound.playClick();
                  onStartReading(stageId);
                  onClose();
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-700" />
                <span>Luyện Đọc (Reading)</span>
              </button>
            )}

            <button
              onClick={() => {
                sound.playClick();
                onStartFlashcards(stageId);
                onClose();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl"
            >
              <Layers className="w-3.5 h-3.5 text-slate-600" />
              <span>Học Thẻ Flashcard</span>
            </button>

            <button
              onClick={() => {
                sound.playStaffSwing();
                onStartBattle(stageId);
                onClose();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs"
            >
              <Swords className="w-3.5 h-3.5 text-amber-400" />
              <span>Trảm Yêu Ải Này</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
