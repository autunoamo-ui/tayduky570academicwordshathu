import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Swords,
  Heart,
  Sparkles,
  RotateCcw,
  Shield,
  HelpCircle,
  Eye,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Map,
  Volume2,
} from 'lucide-react';
import { Stage, Question, CharacterId, AWLWord } from '../types';
import { STAGES, CHARACTERS, AWL_WORDS_DATA, generateQuestionsForStage } from '../data/awlData';
import { sound } from '../services/soundService';

interface BossBattleProps {
  stageId: number;
  characterId: CharacterId;
  onBattleComplete: (stageId: number, score: number, stars: number, correctCount: number, totalCount: number) => void;
  onBackToMap: () => void;
  onAskAiAboutWord: (word: AWLWord) => void;
}

export const BossBattle: React.FC<BossBattleProps> = ({
  stageId,
  characterId,
  onBattleComplete,
  onBackToMap,
  onAskAiAboutWord,
}) => {
  const stage = STAGES.find((s) => s.id === stageId) || STAGES[0];
  const character = CHARACTERS.find((c) => c.id === characterId) || CHARACTERS[0];

  // Game state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Health and score
  const initialPlayerHp = character.id === 'bajie' ? 150 : 100;
  const [playerHp, setPlayerHp] = useState(initialPlayerHp);
  const [bossHp, setBossHp] = useState(stage.bossHp);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Animations & Visual effects
  const [bossDamaged, setBossDamaged] = useState(false);
  const [playerDamaged, setPlayerDamaged] = useState(false);
  const [combatText, setCombatText] = useState<string | null>(null);
  const [isCritical, setIsCritical] = useState(false);

  // Consumables / Items
  const [elixirCount, setElixirCount] = useState(character.id === 'wujing' ? 2 : 1);
  const [camLoCount, setCamLoCount] = useState(1);
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);

  // Battle outcome
  const [battleOver, setBattleOver] = useState<'victory' | 'defeat' | null>(null);

  // Initialize questions
  useEffect(() => {
    const qList = generateQuestionsForStage(stage.id, 8);
    setQuestions(qList);
    setCurrentIndex(0);
    setPlayerHp(initialPlayerHp);
    setBossHp(stage.bossHp);
    setStreak(0);
    setScore(0);
    setCorrectAnswersCount(0);
    setBattleOver(null);
    setHiddenOptions([]);
  }, [stage.id]);

  const currentQuestion = questions[currentIndex];
  const targetWordObj = currentQuestion
    ? AWL_WORDS_DATA.find((w) => w.word.toLowerCase() === currentQuestion.targetWord.toLowerCase())
    : null;

  // Speak target word
  const handleSpeakWord = (wordText: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(wordText);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Use Tiên Đan (Elixir) to heal
  const handleUseElixir = () => {
    if (elixirCount <= 0 || playerHp >= initialPlayerHp || battleOver) return;
    sound.playSuccess();
    setElixirCount((prev) => prev - 1);
    setPlayerHp((prev) => Math.min(initialPlayerHp, prev + 40));
    setCombatText('+40 HP Tiên Đan hồi phục!');
    setTimeout(() => setCombatText(null), 1500);
  };

  // Use Bình Cam Lộ (50/50 - Eliminate 2 wrong options)
  const handleUseCamLo = () => {
    if (camLoCount <= 0 || isAnswered || battleOver || !currentQuestion) return;
    sound.playClick();
    setCamLoCount((prev) => prev - 1);
    const wrongOptions = currentQuestion.options.filter((opt) => opt !== currentQuestion.correctAnswer);
    const toHide = wrongOptions.slice(0, 2);
    setHiddenOptions(toHide);
    setCombatText('Cam Lộ xua tan 2 đáp án sai!');
    setTimeout(() => setCombatText(null), 1500);
  };

  // Submit Answer
  const handleSelectOption = (option: string) => {
    if (isAnswered || battleOver || !currentQuestion) return;

    setSelectedOption(option);
    setIsAnswered(true);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      // Correct! Player attacks Boss
      sound.playStaffSwing();
      setTimeout(() => sound.playHit(), 100);

      const newStreak = streak + 1;
      setStreak(newStreak);
      setCorrectAnswersCount((prev) => prev + 1);

      // Critical damage calculation
      const critical = newStreak >= 3;
      setIsCritical(critical);
      let damage = Math.round(stage.bossHp / questions.length) + 12;
      if (critical) {
        damage = Math.round(damage * (character.id === 'wukong' ? 1.75 : 1.5));
      }

      setBossDamaged(true);
      setTimeout(() => setBossDamaged(false), 500);

      const newBossHp = Math.max(0, bossHp - damage);
      setBossHp(newBossHp);
      setScore((prev) => prev + (critical ? 250 : 100) + newStreak * 20);

      setCombatText(
        critical
          ? `💥 CHÍ MẠNG! -${damage} HP (Kim Cô Bổng x${newStreak})`
          : `⚔️ Đánh trúng! -${damage} HP`
      );

      // Check if Boss is defeated
      if (newBossHp <= 0) {
        triggerVictory();
      }
    } else {
      // Incorrect! Boss attacks Player
      sound.playError();
      setStreak(0);
      setIsCritical(false);

      const monsterDamage = 25;
      setPlayerDamaged(true);
      setTimeout(() => setPlayerDamaged(false), 500);

      const newPlayerHp = Math.max(0, playerHp - monsterDamage);
      setPlayerHp(newPlayerHp);

      setCombatText(`⚠️ Yêu quái phản công! -${monsterDamage} HP`);

      if (newPlayerHp <= 0) {
        setBattleOver('defeat');
      }
    }
  };

  const triggerVictory = () => {
    sound.playVictory();
    setBattleOver('victory');
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  // Advance to next question
  const handleNextQuestion = () => {
    if (battleOver) return;

    if (currentIndex + 1 >= questions.length) {
      // Reached end of questions: if boss is not defeated, check HP comparison
      if (bossHp <= 0 || correctAnswersCount >= Math.ceil(questions.length * 0.6)) {
        triggerVictory();
      } else {
        setBattleOver('defeat');
      }
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setIsAnswered(false);
    setHiddenOptions([]);
    setCombatText(null);
    setIsCritical(false);
  };

  // Finalize battle
  const handleFinishBattle = () => {
    const accuracy = questions.length > 0 ? correctAnswersCount / questions.length : 0;
    let stars = 1;
    if (accuracy >= 0.85) stars = 3;
    else if (accuracy >= 0.6) stars = 2;

    onBattleComplete(stage.id, score, stars, correctAnswersCount, questions.length);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Navigation & Stage Info */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onBackToMap();
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
        >
          <Map className="w-3.5 h-3.5" />
          <span>Về Bản Đồ Ải</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            {stage.name} · Sublist {stage.sublistId}
          </span>
          <span className="text-xs font-mono font-bold text-slate-700">
            Câu {currentIndex + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Combat Arena Card */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Battle Arena Header with Characters & HP */}
        <div className="relative bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white p-5 sm:p-6">
          {/* Floating Combat Text Feedback */}
          {combatText && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 py-1 px-3 rounded-lg bg-black/75 backdrop-blur-md text-amber-300 font-bold text-xs sm:text-sm animate-bounce shadow-md">
              {combatText}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
            {/* Player Side */}
            <div className={`space-y-2 ${playerDamaged ? 'animate-damage' : ''}`}>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${character.avatarColor} flex items-center justify-center text-2xl shadow-md border-2 border-white/20`}
                >
                  {character.id === 'wukong' && '🐒'}
                  {character.id === 'tripitaka' && '🧘'}
                  {character.id === 'bajie' && '🐗'}
                  {character.id === 'wujing' && '🌊'}
                </div>
                <div>
                  <span className="text-xs text-amber-400 font-medium block">
                    {character.title}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {character.name}
                  </h4>
                </div>
              </div>

              {/* Player HP Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                    Sinh lực (HP)
                  </span>
                  <span className="font-mono font-bold text-white tabular-nums">
                    {playerHp}/{initialPlayerHp}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(0, (playerHp / initialPlayerHp) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Combo Streak Indicator */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Chuỗi đúng:</span>
                <span className="font-bold text-amber-400 tabular-nums">
                  {streak > 0 ? `⚡ x${streak}` : '0'}
                </span>
                {streak >= 3 && (
                  <span className="text-[10px] uppercase font-extrabold text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded-sm border border-amber-400/40">
                    Chí mạng!
                  </span>
                )}
              </div>
            </div>

            {/* Boss Side */}
            <div className={`space-y-2 text-right ${bossDamaged ? 'animate-damage' : ''}`}>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <span className="text-xs text-rose-400 font-medium block">
                    {stage.bossTitle}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {stage.bossName}
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-xl bg-rose-950/80 border-2 border-rose-500/30 flex items-center justify-center text-2xl shadow-md">
                  {stage.bossAvatar}
                </div>
              </div>

              {/* Boss HP Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span className="font-mono font-bold text-white tabular-nums">
                    {bossHp}/{stage.bossHp}
                  </span>
                  <span className="flex items-center gap-1">
                    <Swords className="w-3 h-3 text-amber-400" />
                    Ma Khí (HP Boss)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-l from-rose-500 to-orange-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(0, (bossHp / stage.bossHp) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Current Score */}
              <div className="text-xs text-slate-400">
                <span>Điểm tích lũy: </span>
                <span className="font-mono font-bold text-amber-300 tabular-nums">{score}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Consumables / Items Bar */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-slate-50 border-b border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">Bảo Bối Trợ Lực:</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleUseElixir}
              disabled={elixirCount <= 0 || playerHp >= initialPlayerHp || !!battleOver}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors ${
                elixirCount > 0 && playerHp < initialPlayerHp && !battleOver
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  : 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              title="Hồi phục 40 HP"
            >
              <span>💊 Tiên Đan</span>
              <span className="font-mono font-bold tabular-nums">({elixirCount})</span>
            </button>

            <button
              onClick={handleUseCamLo}
              disabled={camLoCount <= 0 || isAnswered || !!battleOver}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors ${
                camLoCount > 0 && !isAnswered && !battleOver
                  ? 'border-cyan-200 bg-cyan-50 text-cyan-800 hover:bg-cyan-100'
                  : 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              title="Loại bỏ 2 đáp án sai (50/50)"
            >
              <span>💧 Cam Lộ (50/50)</span>
              <span className="font-mono font-bold tabular-nums">({camLoCount})</span>
            </button>
          </div>
        </div>

        {/* Question & Choices Section */}
        {!battleOver && currentQuestion && (
          <div className="p-5 sm:p-7 space-y-6">
            {/* Target Word Highlight & Pronunciation */}
            {targetWordObj && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/70 border border-amber-200/60">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-amber-950">
                    {targetWordObj.word}
                  </span>
                  <span className="text-xs text-amber-700 font-mono">
                    {targetWordObj.phonetic}
                  </span>
                  <span className="text-xs text-slate-500 italic">
                    ({targetWordObj.pos})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleSpeakWord(targetWordObj.word)}
                    className="p-1.5 rounded-lg text-amber-800 hover:bg-amber-100 transition-colors"
                    title="Nghe phát âm chuẩn"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      onAskAiAboutWord(targetWordObj);
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
                    title="Hỏi Bồ Đề Sư Tổ AI mẹo nhớ và ngữ cảnh"
                  >
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Hỏi AI</span>
                  </button>
                </div>
              </div>
            )}

            {/* Question Text */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                {currentQuestion.type === 'fill_blank' && 'Điền từ học thuật vào câu'}
                {currentQuestion.type === 'meaning' && 'Chọn nghĩa tiếng Việt chuẩn xác'}
                {currentQuestion.type === 'collocation' && 'Chọn cụm từ kết hợp (Collocation)'}
                {currentQuestion.type === 'synonym' && 'Tìm từ Đồng Nghĩa & Trái Nghĩa (Synonyms & Antonyms)'}
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                {currentQuestion.content}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isHidden = hiddenOptions.includes(option);
                if (isHidden) {
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 text-slate-300 text-xs text-center select-none"
                    >
                      (Đáp án đã bị Cam Lộ thanh tẩy)
                    </div>
                  );
                }

                let btnStyles = 'bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/30';
                if (isAnswered) {
                  if (option === currentQuestion.correctAnswer) {
                    btnStyles = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold shadow-xs';
                  } else if (option === selectedOption) {
                    btnStyles = 'bg-rose-50 border-rose-500 text-rose-900 font-semibold';
                  } else {
                    btnStyles = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(option)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-left text-sm transition-all active:scale-[0.98] ${btnStyles}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 pt-0.5">{option}</span>
                    {isAnswered && option === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && option === selectedOption && option !== currentQuestion.correctAnswer && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next Button after answering */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Chính xác! Đòn tấn công uy lực
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-md">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      Chưa chính xác! Yêu quái phản đòn
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>

                <div className="flex items-center justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
                  >
                    <span>
                      {currentIndex + 1 >= questions.length ? 'Tổng Kết Trận Đấu' : 'Câu Tiếp Theo'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Victory Screen */}
        {battleOver === 'victory' && (
          <div className="p-8 sm:p-12 text-center space-y-6 bg-gradient-to-b from-amber-50/50 to-white">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-4xl shadow-lg shadow-amber-500/30 animate-bounce">
              🏆
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
                Đại Công Cáo Thành
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Thu Phục {stage.bossName}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Bạn đã vượt qua khảo thí từ vựng Sublist {stage.sublistId}, trảm yêu trừ ma và bảo vệ Đường Tăng an toàn!
              </p>
            </div>

            {/* Victory Score Breakdown unboxed */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">Điểm Số</span>
                <span className="text-lg font-bold text-slate-900 tabular-nums">{score}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">Đúng</span>
                <span className="text-lg font-bold text-emerald-600 tabular-nums">
                  {correctAnswersCount}/{questions.length}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">Đánh Giá</span>
                <span className="text-lg font-bold text-amber-500">
                  {correctAnswersCount >= 7 ? '★★★' : correctAnswersCount >= 5 ? '★★☆' : '★☆☆'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={handleFinishBattle}
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 rounded-xl shadow-md transition-all active:scale-95"
              >
                Nhận Thưởng & Về Bản Đồ
              </button>
            </div>
          </div>
        )}

        {/* Defeat Screen */}
        {battleOver === 'defeat' && (
          <div className="p-8 sm:p-12 text-center space-y-6 bg-gradient-to-b from-rose-50/50 to-white">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-100 flex items-center justify-center text-4xl shadow-inner">
              💀
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">
                Gặp Nạn Giữa Đường
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Chưa Thể Đánh Bại {stage.bossName}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Sinh lực đã cạn kiệt trước ma chướng. Hãy vào mục Kim Cô Chú ôn lại từ vựng của Sublist {stage.sublistId} và tái đấu!
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => {
                  sound.playClick();
                  const qList = generateQuestionsForStage(stage.id, 8);
                  setQuestions(qList);
                  setCurrentIndex(0);
                  setPlayerHp(initialPlayerHp);
                  setBossHp(stage.bossHp);
                  setStreak(0);
                  setScore(0);
                  setCorrectAnswersCount(0);
                  setBattleOver(null);
                }}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Thử Lại Trận Này</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onBackToMap();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
              >
                Về Bản Đồ Ải
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
