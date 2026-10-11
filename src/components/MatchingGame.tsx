import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Clock, Trophy, Eye, CheckCircle2, Sparkles, Map } from 'lucide-react';
import { AWLWord } from '../types';
import { AWL_WORDS_DATA, STAGES } from '../data/awlData';
import { sound } from '../services/soundService';

interface MatchingGameProps {
  initialStageId?: number;
  onRecordScore?: (score: number) => void;
  onBackToMap: () => void;
}

interface MatchCard {
  id: string;
  wordId: string;
  type: 'word' | 'meaning';
  content: string;
  matched: boolean;
}

export const MatchingGame: React.FC<MatchingGameProps> = ({
  initialStageId = 1,
  onRecordScore,
  onBackToMap,
}) => {
  const [stageId, setStageId] = useState(initialStageId);
  const [cards, setCards] = useState<MatchCard[]>([]);
  const [selectedFirst, setSelectedFirst] = useState<MatchCard | null>(null);
  const [selectedSecond, setSelectedSecond] = useState<MatchCard | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');

  const stage = STAGES.find((s) => s.id === stageId) || STAGES[0];

  // Initialize deck with 6 words (12 cards)
  const initGame = () => {
    const stageWords = AWL_WORDS_DATA.filter((w) => w.sublist === stageId);
    const pool = stageWords.length >= 6 ? stageWords : AWL_WORDS_DATA;
    const shuffledWords = [...pool].sort(() => 0.5 - Math.random()).slice(0, 6);

    const generatedCards: MatchCard[] = [];
    shuffledWords.forEach((w) => {
      generatedCards.push({
        id: `word_${w.id}`,
        wordId: w.id,
        type: 'word',
        content: w.word,
        matched: false,
      });
      generatedCards.push({
        id: `meaning_${w.id}`,
        wordId: w.id,
        type: 'meaning',
        content: w.meaningVi,
        matched: false,
      });
    });

    // Shuffle cards
    setCards(generatedCards.sort(() => 0.5 - Math.random()));
    setSelectedFirst(null);
    setSelectedSecond(null);
    setTimeLeft(60);
    setScore(0);
    setMatchedPairs(0);
    setGameState('playing');
  };

  useEffect(() => {
    initGame();
  }, [stageId]);

  // Countdown timer
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 0) {
      setGameState('lost');
      sound.playError();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleCardClick = (card: MatchCard) => {
    if (card.matched || selectedFirst?.id === card.id || selectedSecond || gameState !== 'playing') {
      return;
    }

    sound.playClick();

    if (!selectedFirst) {
      setSelectedFirst(card);
    } else {
      setSelectedSecond(card);

      // Check match
      if (selectedFirst.wordId === card.wordId && selectedFirst.type !== card.type) {
        // MATCH!
        sound.playSuccess();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.wordId === card.wordId ? { ...c, matched: true } : c
            )
          );
          setSelectedFirst(null);
          setSelectedSecond(null);
          const newPairs = matchedPairs + 1;
          setMatchedPairs(newPairs);
          setScore((s) => s + 150 + timeLeft * 5);

          if (newPairs >= 6) {
            sound.playVictory();
            setGameState('won');
            onRecordScore?.(score + 300);
            try {
              confetti({ particleCount: 80, spread: 60 });
            } catch {
              // ignore
            }
          }
        }, 300);
      } else {
        // MISMATCH
        sound.playError();
        setTimeout(() => {
          setSelectedFirst(null);
          setSelectedSecond(null);
        }, 700);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playClick();
              onBackToMap();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
          >
            <Map className="w-3.5 h-3.5" />
            <span>Bản Đồ</span>
          </button>

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Hỏa Nhãn Kim Tinh · Ghép Từ Nhanh
            </h3>
            <span className="text-xs text-amber-700">
              {stage.name} (Sublist {stage.sublistId})
            </span>
          </div>
        </div>

        {/* Status Indicators unboxed */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <Clock className={`w-4 h-4 ${timeLeft <= 15 ? 'text-rose-500 animate-pulse' : 'text-slate-500'}`} />
            <span className="text-slate-500">Thời gian:</span>
            <span className={`font-mono font-bold text-sm tabular-nums ${timeLeft <= 15 ? 'text-rose-600' : 'text-slate-900'}`}>
              {timeLeft}s
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-slate-500">Điểm:</span>
            <span className="font-mono font-bold text-sm text-slate-900 tabular-nums">
              {score}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              initGame();
            }}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            title="Chơi lại ván mới"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card) => {
          const isSelected = selectedFirst?.id === card.id || selectedSecond?.id === card.id;
          const isMatched = card.matched;

          let cardStyles = 'bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:shadow-xs';
          if (isMatched) {
            cardStyles = 'bg-emerald-50/70 border-emerald-300 text-emerald-800 opacity-60 pointer-events-none';
          } else if (isSelected) {
            cardStyles = 'bg-amber-100 border-amber-500 text-amber-950 font-bold ring-2 ring-amber-400/50';
          }

          return (
            <button
              key={card.id}
              disabled={isMatched || gameState !== 'playing'}
              onClick={() => handleCardClick(card)}
              className={`min-h-[100px] sm:min-h-[120px] p-3 rounded-2xl border text-center flex flex-col items-center justify-center transition-all select-none active:scale-95 ${cardStyles}`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
                {card.type === 'word' ? 'Từ vựng AWL' : 'Nghĩa tiếng Việt'}
              </span>
              <span className={`text-xs sm:text-sm font-semibold leading-snug ${card.type === 'word' ? 'font-bold' : ''}`}>
                {card.content}
              </span>
              {isMatched && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-2" />
              )}
            </button>
          );
        })}
      </div>

      {/* Victory / Defeat Overlays */}
      {gameState === 'won' && (
        <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mx-auto">
            👁️
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Hỏa Nhãn Tinh Tường! Hoàn Thành Ghép Thẻ!
          </h3>
          <p className="text-xs text-slate-600">
            Bạn đã ghép đúng tất cả 6 cặp từ vựng trong thời gian quy định!
          </p>
          <div className="pt-2">
            <button
              onClick={initGame}
              className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
            >
              Chơi Lại Ván Mới
            </button>
          </div>
        </div>
      )}

      {gameState === 'lost' && (
        <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center text-3xl mx-auto">
            ⏳
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Hết Thời Gian!
          </h3>
          <p className="text-xs text-slate-600">
            Thời gian 60 giây đã hết trước khi bạn kịp ghép hết các từ. Hãy thử lại để rèn luyện phản xạ nhé!
          </p>
          <div className="pt-2">
            <button
              onClick={initGame}
              className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
            >
              Thử Lại Ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
