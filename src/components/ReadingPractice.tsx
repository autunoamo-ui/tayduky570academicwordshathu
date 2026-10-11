import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Languages,
  Eye,
  EyeOff,
  Flame,
  Award,
  Bookmark,
  Check,
  Search,
  BookMarked,
  Clock,
  ArrowRight,
  Filter,
  FileText,
  ArrowLeftRight,
  Shuffle,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AWLWord, Stage, LearningSession } from '../types';
import { STAGES, AWL_WORDS_DATA } from '../data/awlData';
import {
  READING_PASSAGES,
  ReadingPassage,
  ReadingQuestion,
  MatchingActivity,
  getPassagesForStage,
} from '../data/awlReadingData';
import { sound } from '../services/soundService';

interface ReadingPracticeProps {
  initialStageId: number;
  masteredWords: string[];
  reviewWords: string[];
  onToggleMastered: (wordId: string) => void;
  onToggleReview: (wordId: string) => void;
  onOpenAiTutor: (word: AWLWord) => void;
  onRecordSession: (session: LearningSession) => void;
  onBackToMap: () => void;
}

export const ReadingPractice: React.FC<ReadingPracticeProps> = ({
  initialStageId,
  masteredWords,
  reviewWords,
  onToggleMastered,
  onToggleReview,
  onOpenAiTutor,
  onRecordSession,
  onBackToMap,
}) => {
  // Navigation & Selected Stage
  const [selectedStageId, setSelectedStageId] = useState<number>(initialStageId);
  const stage = STAGES.find((s) => s.id === selectedStageId) || STAGES[0];
  const stagePassages = getPassagesForStage(selectedStageId);

  // Selected Passage
  const [selectedPassageId, setSelectedPassageId] = useState<string>(
    stagePassages.length > 0 ? stagePassages[0].id : ''
  );

  // When stage changes, update passage selection
  useEffect(() => {
    const passages = getPassagesForStage(selectedStageId);
    if (passages.length > 0) {
      setSelectedPassageId(passages[0].id);
    } else {
      setSelectedPassageId('');
    }
    // Reset test state
    handleResetPassage();
  }, [selectedStageId]);

  const currentPassage = stagePassages.find((p) => p.id === selectedPassageId) || stagePassages[0];

  // Right column exercise view mode: 'all' | 'comprehension' | 'synonyms_antonyms' | 'matching_worksheet'
  const [exerciseMode, setExerciseMode] = useState<
    'all' | 'comprehension' | 'synonyms_antonyms' | 'matching_worksheet'
  >('all');

  // Reading Experience State
  const [showBilingual, setShowBilingual] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [highlightTargetWords, setHighlightTargetWords] = useState<boolean>(true);
  const [selectedWordGlossary, setSelectedWordGlossary] = useState<AWLWord | null>(null);

  // Question Answering State
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [timeSpent, setTimeSpent] = useState<number>(0);

  // Matching Activity State (Matching Synonyms & Antonyms Worksheet)
  const [synSelectedTop, setSynSelectedTop] = useState<string | null>(null);
  const [synSelectedBottom, setSynSelectedBottom] = useState<string | null>(null);
  const [synMatches, setSynMatches] = useState<Record<string, string>>({}); // word -> match
  const [synWrongPairs, setSynWrongPairs] = useState<string[]>([]);

  const [antSelectedLeft, setAntSelectedLeft] = useState<string | null>(null);
  const [antSelectedRight, setAntSelectedRight] = useState<string | null>(null);
  const [antMatches, setAntMatches] = useState<Record<string, string>>({}); // word -> match
  const [antWrongPairs, setAntWrongPairs] = useState<string[]>([]);

  // Sound & Speech Synthesis
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Reset passage test & matching
  const handleResetPassage = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setStartTime(Date.now());
    setTimeSpent(0);
    setSynSelectedTop(null);
    setSynSelectedBottom(null);
    setSynMatches({});
    setSynWrongPairs([]);
    setAntSelectedLeft(null);
    setAntSelectedRight(null);
    setAntMatches({});
    setAntWrongPairs([]);
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
    }
  };

  // Switch passage
  const handleSelectPassage = (passageId: string) => {
    sound.playClick();
    setSelectedPassageId(passageId);
    handleResetPassage();
  };

  // Text to Speech
  const toggleReadAloud = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.onend = () => setIsReadingAloud(false);
    utterance.onerror = () => setIsReadingAloud(false);
    speechRef.current = utterance;
    setIsReadingAloud(true);
    window.speechSynthesis.speak(utterance);
  };

  // Pronounce word
  const speakWord = (word: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  // Handle answering a question
  const handleSelectOption = (questionId: string, option: string) => {
    if (isSubmitted) return;
    sound.playClick();
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  // Filter questions according to mode
  const displayedQuestions = currentPassage
    ? currentPassage.questions.filter((q) => {
        if (exerciseMode === 'all') return true;
        if (exerciseMode === 'comprehension') return q.type === 'mcq' || q.type === 'cloze' || q.type === 'tfng';
        if (exerciseMode === 'synonyms_antonyms') return q.type === 'synonym' || q.type === 'antonym';
        return true;
      })
    : [];

  // Submit test
  const handleSubmitTest = () => {
    if (!currentPassage || displayedQuestions.length === 0) return;

    sound.playClick();
    let correct = 0;
    displayedQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    const calculatedScore = Math.round((correct / displayedQuestions.length) * 100);
    setScore(calculatedScore);
    setIsSubmitted(true);

    const elapsed = Math.round((Date.now() - startTime) / 1000);
    setTimeSpent(elapsed);

    if (calculatedScore >= 80) {
      sound.playVictory();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#6366f1'],
      });
    } else {
      sound.playSuccess();
    }

    // Record learning session
    onRecordSession({
      id: `reading_${Date.now()}`,
      subjectId: selectedStageId,
      score: calculatedScore,
      totalQuestions: displayedQuestions.length,
      correctAnswers: correct,
      timeSpent: elapsed,
      date: new Date().toLocaleDateString('vi-VN'),
      mode: 'reading',
    });
  };

  // Matching Synonyms Handler
  const handleSynonymClick = (item: string, side: 'top' | 'bottom') => {
    if (!currentPassage?.matchingActivity) return;
    const pairs = currentPassage.matchingActivity.synonymPairs;

    if (side === 'top') {
      if (synMatches[item]) return; // already matched
      sound.playClick();
      setSynSelectedTop(item);
      if (synSelectedBottom) {
        // Check match
        const isMatch = pairs.some((p) => p.word === item && p.match === synSelectedBottom);
        if (isMatch) {
          sound.playSuccess();
          setSynMatches((prev) => ({ ...prev, [item]: synSelectedBottom }));
          setSynSelectedTop(null);
          setSynSelectedBottom(null);
        } else {
          sound.playError();
          setSynWrongPairs([item, synSelectedBottom]);
          setTimeout(() => setSynWrongPairs([]), 800);
          setSynSelectedTop(null);
          setSynSelectedBottom(null);
        }
      }
    } else {
      // Bottom card clicked
      // Check if already matched
      const isAlreadyMatched = Object.values(synMatches).includes(item);
      if (isAlreadyMatched) return;
      sound.playClick();
      setSynSelectedBottom(item);
      if (synSelectedTop) {
        // Check match
        const isMatch = pairs.some((p) => p.word === synSelectedTop && p.match === item);
        if (isMatch) {
          sound.playSuccess();
          setSynMatches((prev) => ({ ...prev, [synSelectedTop]: item }));
          setSynSelectedTop(null);
          setSynSelectedBottom(null);
        } else {
          sound.playError();
          setSynWrongPairs([synSelectedTop, item]);
          setTimeout(() => setSynWrongPairs([]), 800);
          setSynSelectedTop(null);
          setSynSelectedBottom(null);
        }
      }
    }
  };

  // Matching Antonyms Handler
  const handleAntonymClick = (item: string, side: 'left' | 'right') => {
    if (!currentPassage?.matchingActivity) return;
    const pairs = currentPassage.matchingActivity.antonymPairs;

    if (side === 'left') {
      if (antMatches[item]) return;
      sound.playClick();
      setAntSelectedLeft(item);
      if (antSelectedRight) {
        const isMatch = pairs.some((p) => p.word === item && p.match === antSelectedRight);
        if (isMatch) {
          sound.playSuccess();
          setAntMatches((prev) => ({ ...prev, [item]: antSelectedRight }));
          setAntSelectedLeft(null);
          setAntSelectedRight(null);
        } else {
          sound.playError();
          setAntWrongPairs([item, antSelectedRight]);
          setTimeout(() => setAntWrongPairs([]), 800);
          setAntSelectedLeft(null);
          setAntSelectedRight(null);
        }
      }
    } else {
      const isAlreadyMatched = Object.values(antMatches).includes(item);
      if (isAlreadyMatched) return;
      sound.playClick();
      setAntSelectedRight(item);
      if (antSelectedLeft) {
        const isMatch = pairs.some((p) => p.word === antSelectedLeft && p.match === item);
        if (isMatch) {
          sound.playSuccess();
          setAntMatches((prev) => ({ ...prev, [antSelectedLeft]: item }));
          setAntSelectedLeft(null);
          setAntSelectedRight(null);
        } else {
          sound.playError();
          setAntWrongPairs([antSelectedLeft, item]);
          setTimeout(() => setAntWrongPairs([]), 800);
          setAntSelectedLeft(null);
          setAntSelectedRight(null);
        }
      }
    }
  };

  // Clean-up speech on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Highlight words helper
  const renderInteractiveText = (text: string) => {
    if (!highlightTargetWords || !currentPassage) {
      return <span>{text}</span>;
    }

    const wordsMap = new Map<string, AWLWord>();
    currentPassage.targetWords.forEach((tw) => {
      const match = AWL_WORDS_DATA.find((w) => w.word.toLowerCase() === tw.toLowerCase());
      if (match) {
        wordsMap.set(tw.toLowerCase(), match);
      }
    });

    const pattern = new RegExp(`\\b(${currentPassage.targetWords.join('|')})\\b`, 'gi');
    const parts = text.split(pattern);

    return (
      <>
        {parts.map((part, index) => {
          const lower = part.toLowerCase();
          const awlWord = wordsMap.get(lower);
          if (awlWord) {
            const isMastered = masteredWords.includes(awlWord.id);
            const isReview = reviewWords.includes(awlWord.id);
            return (
              <span
                key={index}
                onClick={() => {
                  sound.playClick();
                  setSelectedWordGlossary(awlWord);
                }}
                className={`cursor-pointer inline-block px-1 py-0.2 mx-0.5 rounded font-semibold transition-all border-b-2 hover:scale-105 ${
                  isMastered
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-400 hover:bg-emerald-100'
                    : isReview
                    ? 'bg-amber-50 text-amber-800 border-amber-400 hover:bg-amber-100'
                    : 'bg-indigo-50 text-indigo-800 border-indigo-400 hover:bg-indigo-100'
                }`}
                title={`[${awlWord.pos}] ${awlWord.meaningVi} (Nhấp để tra cứu nhanh & nghe)`}
              >
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header & Navigation Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white p-5 sm:p-7 shadow-md">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={onBackToMap}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-amber-300 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Bản Đồ Ải</span>
              </button>
              <span className="text-xs text-slate-300 font-medium">·</span>
              <span className="text-xs font-bold text-amber-400">
                Ải {stage.id}: {stage.name} · Sublist {stage.sublistId}
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              <BookOpen className="w-7 h-7 text-amber-400 shrink-0" />
              <span>Kinh Thư Động - Luyện Đọc Hiểu Học Thuật (Reading)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Đọc các bài luận học thuật chuẩn mực embedding trọn vẹn từ vựng cốt lõi của Ải {stage.id}.
              Học sinh đọc đoạn văn rồi tìm từ đồng nghĩa (Synonyms) & trái nghĩa (Antonyms), tra cứu trực tiếp và làm bài tập đối chiếu.
            </p>
          </div>

          {/* Stage Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedStageId(s.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedStageId === s.id
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                Ải {s.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Passage Selector Tabs for the selected stage */}
      {stagePassages.length > 0 && (
        <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              Bài Đọc Ải {stage.id}:
            </span>
            {stagePassages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => handleSelectPassage(p.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                  currentPassage?.id === p.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>Bài {idx + 1}: {p.title.length > 35 ? p.title.slice(0, 35) + '...' : p.title}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-mono font-semibold">
                  {p.targetWords.length} từ AWL
                </span>
              </button>
            ))}
          </div>

          {/* Quick reading tool toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                setShowBilingual(!showBilingual);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                showBilingual
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title="Bật/Tắt Bản dịch Song ngữ Tiếng Việt đối chiếu"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>{showBilingual ? 'Ẩn Dịch Việt' : 'Song Ngữ Đối Chiếu'}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setHighlightTargetWords(!highlightTargetWords);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                highlightTargetWords
                  ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title="Tô sáng các từ vựng AWL trong bài đọc"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{highlightTargetWords ? 'Tô Sáng Từ: Bật' : 'Tô Sáng: Tắt'}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setFontSize(fontSize === 'normal' ? 'large' : 'normal');
              }}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              title="Thay đổi cỡ chữ bài đọc"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            {currentPassage && (
              <button
                onClick={() => toggleReadAloud(currentPassage.content)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                  isReadingAloud
                    ? 'bg-rose-100 text-rose-800 border-rose-300 animate-pulse'
                    : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                }`}
                title="Nghe giọng đọc AI phát âm bài viết học thuật"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                <span>{isReadingAloud ? 'Dừng Đọc' : 'Phát Âm Cả Bài'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main Content Layout: 2 Columns (Left: Passage & Glossary, Right: Exercises & Matching Activity) */}
      {currentPassage ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (7 cols): The Academic Passage */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-7 space-y-5">
              {/* Passage Title & Meta */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-800">
                    Chủ Đề: {currentPassage.topic}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
                    Thể Loại: {currentPassage.genre === 'academic' ? 'Học Thuật Nghiên Cứu' : 'Cổ Tích & Triết Học'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {currentPassage.content.split(/\s+/).length} từ tiếng Anh
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  {currentPassage.title}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-amber-800 mt-1">
                  {currentPassage.titleVi}
                </p>
              </div>

              {/* Target Words Bar */}
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/70">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-2">
                  <span className="flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-amber-700" />
                    Từ Vựng Mục Tiêu Sublist {stage.sublistId} ({currentPassage.targetWords.length} từ):
                  </span>
                  <span className="text-[11px] font-normal text-amber-800">
                    (Nhấp vào từ để xem nghĩa và nghe phát âm)
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentPassage.targetWords.map((tw) => {
                    const match = AWL_WORDS_DATA.find((w) => w.word.toLowerCase() === tw.toLowerCase());
                    const isMastered = match && masteredWords.includes(match.id);
                    return (
                      <button
                        key={tw}
                        onClick={() => {
                          sound.playClick();
                          if (match) setSelectedWordGlossary(match);
                        }}
                        className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all border ${
                          isMastered
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-amber-400 hover:bg-amber-50'
                        }`}
                      >
                        <span>{tw}</span>
                        {isMastered && <Check className="w-3 h-3 text-emerald-600 inline ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Passage English Text */}
              <div
                className={`text-slate-800 font-serif leading-relaxed space-y-4 ${
                  fontSize === 'large' ? 'text-lg leading-loose' : 'text-base'
                }`}
              >
                {currentPassage.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-justify">
                    {renderInteractiveText(paragraph)}
                  </p>
                ))}
              </div>

              {/* Bilingual Translation Drawer */}
              {showBilingual && (
                <div className="mt-6 pt-5 border-t border-dashed border-amber-300 bg-amber-50/40 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <Languages className="w-4 h-4 text-amber-700" />
                    <span>Bản Dịch Nghĩa Tiếng Việt Đối Chiếu:</span>
                  </div>
                  <div className="text-sm text-slate-700 font-sans leading-relaxed space-y-3">
                    {currentPassage.vietnameseTranslation.split('\n\n').map((vPara, vIdx) => (
                      <p key={vIdx} className="text-justify italic">
                        {vPara}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Word Glossary Card if user clicked a target word */}
            {selectedWordGlossary && (
              <div className="bg-white rounded-2xl border-2 border-amber-400 shadow-md p-4 sm:p-5 transition-all animate-fadeIn">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-black text-slate-900 font-mono">
                        {selectedWordGlossary.word}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">
                        {selectedWordGlossary.pos}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {selectedWordGlossary.phonetic}
                      </span>
                      <button
                        onClick={() => speakWord(selectedWordGlossary.word)}
                        className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                      </button>
                    </div>

                    <p className="text-sm font-bold text-amber-900 mt-1">
                      🇻🇳 {selectedWordGlossary.meaningVi}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 italic">
                      "{selectedWordGlossary.definitionEn}"
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedWordGlossary(null)}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleMastered(selectedWordGlossary.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                        masteredWords.includes(selectedWordGlossary.id)
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{masteredWords.includes(selectedWordGlossary.id) ? 'Đã Thuộc' : 'Đánh Dấu Thuộc'}</span>
                    </button>

                    <button
                      onClick={() => onToggleReview(selectedWordGlossary.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                        reviewWords.includes(selectedWordGlossary.id)
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{reviewWords.includes(selectedWordGlossary.id) ? 'Cần Ôn' : 'Lưu Ôn Tập'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenAiTutor(selectedWordGlossary)}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold text-xs hover:from-amber-500 hover:to-orange-400 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>Hỏi Bồ Đề Sư Tổ AI</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Exercises & Matching Activity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-5">
              {/* Exercise Mode Filter Bar */}
              <div className="space-y-2 border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-sm">
                      ✍️
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Bài Tập Theo Đoạn Văn
                      </h3>
                      <p className="text-xs text-slate-500">
                        {exerciseMode === 'matching_worksheet'
                          ? 'Bảng nối từ Đồng Nghĩa & Trái Nghĩa (Interactive Matching)'
                          : 'Đọc đoạn văn rồi tìm từ, trả lời câu hỏi'}
                      </p>
                    </div>
                  </div>

                  {isSubmitted && exerciseMode !== 'matching_worksheet' && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-mono font-bold text-xs">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span>Điểm: {score}/100</span>
                    </div>
                  )}
                </div>

                {/* Sub-tabs for exercise types */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl text-xs">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setExerciseMode('all');
                    }}
                    className={`py-1.5 px-2 rounded-lg font-semibold transition-all text-center ${
                      exerciseMode === 'all'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Tất Cả ({currentPassage.questions.length})
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setExerciseMode('synonyms_antonyms');
                    }}
                    className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center flex items-center justify-center gap-1 ${
                      exerciseMode === 'synonyms_antonyms'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-amber-800 hover:bg-amber-100/50'
                    }`}
                    title="Đọc đoạn văn rồi tìm từ đồng nghĩa, trái nghĩa"
                  >
                    <ArrowLeftRight className="w-3 h-3" />
                    <span>Đồng/Trái Nghĩa</span>
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setExerciseMode('comprehension');
                    }}
                    className={`py-1.5 px-2 rounded-lg font-semibold transition-all text-center ${
                      exerciseMode === 'comprehension'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Đọc Hiểu IELTS
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setExerciseMode('matching_worksheet');
                    }}
                    className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center flex items-center justify-center gap-1 ${
                      exerciseMode === 'matching_worksheet'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-emerald-800 hover:bg-emerald-100/50'
                    }`}
                    title="Bảng nối từ đồng nghĩa, trái nghĩa như bài tập mẫu"
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>Bảng Nối Từ</span>
                  </button>
                </div>
              </div>

              {/* RENDER MODE 1: Interactive Matching Worksheet (Matching Activity like User Image) */}
              {exerciseMode === 'matching_worksheet' && currentPassage.matchingActivity ? (
                <div className="space-y-6 animate-fadeIn">
                  {/* Banner */}
                  <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                    <h4 className="text-xs sm:text-sm font-black uppercase text-emerald-950 tracking-wider">
                      {currentPassage.matchingActivity.title}
                    </h4>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Đọc đoạn văn bên trái, sau đó ghép cặp từ vựng tương đương hoặc đối lập
                    </p>
                  </div>

                  {/* Exercise 1: Synonyms Matching (Pastel green top, Pastel orange bottom like worksheet) */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                          1
                        </span>
                        <h5 className="text-xs font-black text-slate-900 uppercase">
                          Exercise 1. Match the words with their SYNONYMS
                        </h5>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700">
                        {Object.keys(synMatches).length}/{currentPassage.matchingActivity.synonymPairs.length} đã nối
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 italic">
                      Nhấp vào 1 ô màu xanh lá ở trên, rồi nhấp vào 1 ô màu cam ở dưới có nghĩa ĐỒNG NGHĨA tương đương:
                    </p>

                    {/* Top Row: Target words from passage (Pastel Green) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {currentPassage.matchingActivity.synonymPairs.map((p) => {
                        const isMatched = !!synMatches[p.word];
                        const isSelected = synSelectedTop === p.word;
                        const isWrong = synWrongPairs.includes(p.word);

                        return (
                          <button
                            key={p.word}
                            onClick={() => handleSynonymClick(p.word, 'top')}
                            disabled={isMatched}
                            className={`p-2.5 rounded-xl border text-center transition-all shadow-xs ${
                              isMatched
                                ? 'bg-emerald-100 border-emerald-400 text-emerald-950 opacity-80 cursor-default'
                                : isWrong
                                ? 'bg-rose-200 border-rose-400 text-rose-950 animate-bounce'
                                : isSelected
                                ? 'bg-emerald-300 border-emerald-500 ring-2 ring-emerald-500 scale-105 font-black text-emerald-950'
                                : 'bg-[#e5f7d8] border-[#c0e6a8] hover:bg-[#d6f2c4] text-slate-900 font-bold'
                            }`}
                          >
                            <span className="text-xs font-mono block tracking-wide">{p.word}</span>
                            <span className="text-[10px] text-slate-600 block font-normal">({p.wordVi})</span>
                            {isMatched && (
                              <span className="text-[10px] text-emerald-800 font-bold block mt-0.5">
                                ➔ {synMatches[p.word]}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom Row: Synonyms to match (Pastel Orange) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-200/80">
                      {[...currentPassage.matchingActivity.synonymPairs]
                        .sort((a, b) => a.match.localeCompare(b.match))
                        .map((p) => {
                          const isMatched = Object.values(synMatches).includes(p.match);
                          const isSelected = synSelectedBottom === p.match;
                          const isWrong = synWrongPairs.includes(p.match);

                          return (
                            <button
                              key={p.match}
                              onClick={() => handleSynonymClick(p.match, 'bottom')}
                              disabled={isMatched}
                              className={`p-2.5 rounded-xl border text-center transition-all shadow-xs ${
                                isMatched
                                  ? 'bg-amber-100 border-amber-300 text-amber-950 opacity-80 cursor-default'
                                  : isWrong
                                  ? 'bg-rose-200 border-rose-400 text-rose-950 animate-bounce'
                                  : isSelected
                                  ? 'bg-amber-300 border-amber-500 ring-2 ring-amber-500 scale-105 font-black text-amber-950'
                                  : 'bg-[#fde0c5] border-[#f6c398] hover:bg-[#fcd0a9] text-slate-900 font-bold'
                              }`}
                            >
                              <span className="text-xs font-mono block tracking-wide">{p.match}</span>
                              <span className="text-[10px] text-slate-600 block font-normal">({p.matchVi})</span>
                            </button>
                          );
                        })}
                    </div>
                  </div>

                  {/* Exercise 2: Antonyms Matching (Blue Left 1-4, Pink/Red Right a-d like worksheet) */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                          2
                        </span>
                        <h5 className="text-xs font-black text-slate-900 uppercase">
                          Exercise 2. Match the words with their OPPOSITE meanings (ANTONYMS)
                        </h5>
                      </div>
                      <span className="text-[11px] font-bold text-rose-700">
                        {Object.keys(antMatches).length}/{currentPassage.matchingActivity.antonymPairs.length} đã nối
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 italic">
                      Nhấp vào cột bên trái (màu xanh dương), sau đó chọn từ có nghĩa TRÁI NGHĨA ở cột phải (màu hồng):
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Left Column (Numbered 1-4, Light Blue Pills) */}
                      <div className="space-y-2">
                        {currentPassage.matchingActivity.antonymPairs.map((p, idx) => {
                          const isMatched = !!antMatches[p.word];
                          const isSelected = antSelectedLeft === p.word;
                          const isWrong = antWrongPairs.includes(p.word);

                          return (
                            <button
                              key={p.word}
                              onClick={() => handleAntonymClick(p.word, 'left')}
                              disabled={isMatched}
                              className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                                isMatched
                                  ? 'bg-blue-100 border-blue-400 text-blue-950 opacity-80'
                                  : isWrong
                                  ? 'bg-rose-200 border-rose-400 text-rose-950 animate-bounce'
                                  : isSelected
                                  ? 'bg-blue-300 border-blue-500 ring-2 ring-blue-500 font-black'
                                  : 'bg-[#dce9fd] border-[#b8d4fa] hover:bg-[#c9defa] text-slate-900 font-bold'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">
                                  {idx + 1}
                                </span>
                                <div>
                                  <span className="text-xs font-mono font-bold block">{p.word}</span>
                                  <span className="text-[10px] text-slate-600 block">({p.wordVi})</span>
                                </div>
                              </div>
                              {isMatched && (
                                <span className="text-[11px] font-bold text-blue-800">
                                  ➔ {antMatches[p.word]}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Column (Lettered a-d, Light Pink/Coral Pills) */}
                      <div className="space-y-2">
                        {[...currentPassage.matchingActivity.antonymPairs]
                          .sort((a, b) => a.match.localeCompare(b.match))
                          .map((p, idx) => {
                            const isMatched = Object.values(antMatches).includes(p.match);
                            const isSelected = antSelectedRight === p.match;
                            const isWrong = antWrongPairs.includes(p.match);

                            return (
                              <button
                                key={p.match}
                                onClick={() => handleAntonymClick(p.match, 'right')}
                                disabled={isMatched}
                                className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                                  isMatched
                                    ? 'bg-rose-100 border-rose-400 text-rose-950 opacity-80'
                                    : isWrong
                                    ? 'bg-rose-200 border-rose-400 text-rose-950 animate-bounce'
                                    : isSelected
                                    ? 'bg-rose-300 border-rose-500 ring-2 ring-rose-500 font-black'
                                    : 'bg-[#fedfdc] border-[#fbc4bf] hover:bg-[#fecfc9] text-slate-900 font-bold'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-bold flex items-center justify-center">
                                    {String.fromCharCode(97 + idx)}
                                  </span>
                                  <div>
                                    <span className="text-xs font-mono font-bold block">{p.match}</span>
                                    <span className="text-[10px] text-slate-600 block">({p.matchVi})</span>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                      </div>
                    </div>
                  </div>

                  {/* Reset Matching Button */}
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setSynMatches({});
                        setAntMatches({});
                        setSynSelectedTop(null);
                        setSynSelectedBottom(null);
                        setAntSelectedLeft(null);
                        setAntSelectedRight(null);
                      }}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                      <span>Làm Lại Bảng Nối</span>
                    </button>
                  </div>
                </div>
              ) : null}

              {/* RENDER MODE 2: Question List (MCQ, Cloze, TFNG, Synonyms & Antonyms from Passage) */}
              {exerciseMode !== 'matching_worksheet' && (
                <div className="space-y-6">
                  {displayedQuestions.map((q, idx) => {
                    const userAnswer = userAnswers[q.id];
                    const isCorrect = isSubmitted && userAnswer === q.correctAnswer;
                    const isWrong = isSubmitted && userAnswer !== q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border transition-all ${
                          isSubmitted
                            ? isCorrect
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : 'bg-rose-50/50 border-rose-200'
                            : q.type === 'synonym' || q.type === 'antonym'
                            ? 'bg-amber-50/40 border-amber-200 hover:border-amber-300'
                            : 'bg-slate-50/80 border-slate-200/90 hover:border-slate-300'
                        }`}
                      >
                        {/* Question Header & Type Badge */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>

                            {/* Specific Badges for Question Types */}
                            {q.type === 'synonym' && (
                              <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-1">
                                <ArrowLeftRight className="w-3 h-3 text-emerald-700" />
                                <span>Tìm Từ Đồng Nghĩa (Synonym)</span>
                              </span>
                            )}
                            {q.type === 'antonym' && (
                              <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded-md bg-rose-100 border border-rose-300 text-rose-900 flex items-center gap-1">
                                <Zap className="w-3 h-3 text-rose-700" />
                                <span>Tìm Từ Trái Nghĩa (Antonym)</span>
                              </span>
                            )}
                            {q.type === 'mcq' && (
                              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                                Đọc Hiểu (MCQ)
                              </span>
                            )}
                            {q.type === 'cloze' && (
                              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                                Điền Từ (Cloze)
                              </span>
                            )}
                            {q.type === 'tfng' && (
                              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                                True / False / Not Given
                              </span>
                            )}

                            {q.targetWord && (
                              <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-100/70 px-1.5 py-0.2 rounded">
                                Từ: {q.targetWord}
                              </span>
                            )}
                          </div>

                          {isSubmitted && (
                            <div className="shrink-0">
                              {isCorrect ? (
                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                                  <CheckCircle2 className="w-4 h-4" /> Đúng
                                </span>
                              ) : (
                                <span className="flex items-center gap-1 text-xs font-bold text-rose-600">
                                  <XCircle className="w-4 h-4" /> Sai
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Question Prompt */}
                        <h4 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                          {q.question}
                        </h4>
                        <p className="text-xs text-slate-500 mb-3 italic">
                          {q.questionVi}
                        </p>

                        {/* Options */}
                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isOptionSelected = userAnswer === opt;
                            const isOptionCorrect = opt === q.correctAnswer;

                            let optionStyle =
                              'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-amber-50/40';

                            if (isSubmitted) {
                              if (isOptionCorrect) {
                                optionStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                              } else if (isOptionSelected && !isOptionCorrect) {
                                optionStyle = 'bg-rose-100 border-rose-400 text-rose-900 line-through';
                              } else {
                                optionStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                              }
                            } else if (isOptionSelected) {
                              optionStyle = 'bg-amber-100 border-amber-400 text-amber-900 font-bold shadow-xs';
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => handleSelectOption(q.id, opt)}
                                className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-start gap-2.5 ${optionStyle}`}
                              >
                                <span className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span className="flex-1 leading-relaxed font-mono">{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation if submitted */}
                        {isSubmitted && (
                          <div className="mt-3 pt-2.5 border-t border-slate-200/70 text-xs text-slate-700 bg-white/80 p-2.5 rounded-lg space-y-1">
                            <p className="font-semibold text-slate-900 flex items-center gap-1">
                              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                              <span>Giải Thích Học Thuật:</span>
                            </p>
                            <p className="leading-relaxed text-slate-600">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Action Buttons for Question Test */}
              {exerciseMode !== 'matching_worksheet' && (
                <div className="pt-2 border-t border-slate-100">
                  {!isSubmitted ? (
                    <button
                      onClick={handleSubmitTest}
                      disabled={Object.keys(userAnswers).length === 0}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs ${
                        Object.keys(userAnswers).length > 0
                          ? 'bg-slate-900 text-white hover:bg-slate-800 active:scale-98'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>
                        Nộp Bài & Chấm Điểm ({Object.keys(userAnswers).length}/{displayedQuestions.length} câu)
                      </span>
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <button
                        onClick={handleResetPassage}
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-xs"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Làm Lại Bộ Câu Hỏi Này</span>
                      </button>

                      <button
                        onClick={() => {
                          sound.playClick();
                          if (selectedStageId < 10) {
                            setSelectedStageId(selectedStageId + 1);
                          } else {
                            onBackToMap();
                          }
                        }}
                        className="w-full py-2 px-3 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>
                          {selectedStageId < 10
                            ? `Chuyển Sang Bài Đọc Ải ${selectedStageId + 1}`
                            : 'Quay Lại Bản Đồ Ải'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">
            Đang tải dữ liệu bài đọc cho Ải {stage.id}...
          </h3>
        </div>
      )}
    </div>
  );
};
