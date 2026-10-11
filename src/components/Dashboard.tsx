import React from 'react';
import {
  Trophy,
  Flame,
  Target,
  Clock,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Swords,
  Layers,
} from 'lucide-react';
import { UserProgress, LearningSession, AWLWord } from '../types';
import { STAGES, AWL_WORDS_DATA } from '../data/awlData';
import { sound } from '../services/soundService';
import { generateDocxStudyGuide } from '../services/exportService';

interface DashboardProps {
  progress: UserProgress;
  sessions: LearningSession[];
  onReviewWeakWord: (word: AWLWord) => void;
  onGoToStage: (stageId: number) => void;
  onGoToExam: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  progress,
  sessions,
  onReviewWeakWord,
  onGoToStage,
  onGoToExam,
}) => {
  const totalMastered = progress.masteredWords.length;
  const totalWords = 570;
  const masterPercent = Math.min(100, Math.round((totalMastered / totalWords) * 100));

  // Compute stats from sessions if available
  const totalAttempts = progress.totalAttempts || sessions.length;
  const averageScore = progress.averageScore > 0
    ? progress.averageScore
    : sessions.length > 0
      ? Math.round(sessions.reduce((acc, s) => acc + s.score, 0) / sessions.length)
      : 0;

  // Find weak word objects
  const weakWordObjects = progress.weakTopics
    .map((wordStr) => AWL_WORDS_DATA.find((w) => w.word.toLowerCase() === wordStr.toLowerCase()))
    .filter((w): w is AWLWord => Boolean(w))
    .slice(0, 8);

  const [isExporting, setIsExporting] = React.useState(false);

  const handleExportDocx = async () => {
    if (weakWordObjects.length === 0) return;
    setIsExporting(true);
    try {
      await generateDocxStudyGuide(weakWordObjects);
      sound.playSuccess();
    } catch (e) {
      console.error(e);
      alert('Có lỗi khi tạo file Word. Vui lòng thử lại sau.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Top Banner Overview */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              Đại Điện Công Đức · Tổng Kết Hành Trình
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Bảng Vàng Thành Tích Thỉnh Kinh
            </h2>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onGoToExam();
            }}
            className="self-start sm:self-auto px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
          >
            Làm Bài Khảo Thí Tổng Hợp
          </button>
        </div>

        {/* 4 Core Metrics Strip unboxed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>Từ đã thuộc</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 tabular-nums">
              {totalMastered} / {totalWords}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Đạt {masterPercent}% kho từ cốt lõi
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Chuỗi ngày học</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 tabular-nums">
              {progress.streakDays} Ngày
            </span>
            <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">
              Tâm đạo kiên cố
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Điểm trung bình</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 tabular-nums">
              {averageScore}%
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Khảo thí & Trảm yêu
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>Số lần thí luyện</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 tabular-nums">
              {totalAttempts} Lần
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Tổng số phiên học
            </span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Tiến độ thỉnh trọn bộ 570 Từ Vựng AWL:</span>
            <span className="font-bold text-amber-700 tabular-nums">{masterPercent}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${masterPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Weak Topics (Các từ vựng gặp nạn cần ôn lại) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <h3 className="text-base font-bold text-slate-900">
              Từ Vựng Cần Cứu Nạn (Hay Trả Lời Sai)
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400">
              {progress.weakTopics.length} từ vựng ghi nhận
            </span>
            {weakWordObjects.length > 0 && (
              <button
                onClick={handleExportDocx}
                disabled={isExporting}
                className="px-3 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 disabled:opacity-50 rounded-xl transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap"
              >
                {isExporting ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <BookOpen className="w-3.5 h-3.5" />}
                <span>Xuất Bí Kíp DOCX</span>
              </button>
            )}
          </div>
        </div>

        {weakWordObjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {weakWordObjects.map((w) => (
              <div
                key={w.id}
                className="p-3 rounded-xl border border-rose-200/80 bg-rose-50/30 flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{w.word}</span>
                    <span className="text-[10px] text-slate-400">Sublist {w.sublist}</span>
                  </div>
                  <span className="text-xs text-rose-800 line-clamp-1">{w.meaningVi}</span>
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    onReviewWeakWord(w);
                  }}
                  className="w-full py-1.5 px-2 text-[11px] font-semibold text-rose-800 bg-rose-100/80 hover:bg-rose-200 rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Xem Bí Kíp AI</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-100">
            Tuyệt vời! Hiện tại bạn không có từ vựng nào nằm trong danh sách gặp nạn.
          </div>
        )}
      </div>

      {/* 10 Stages Status Matrix */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
        <h3 className="text-base font-bold text-slate-900">
          Tiến Độ 10 Ải Tây Du Ký
        </h3>

        <div className="divide-y divide-slate-100">
          {STAGES.map((s) => {
            const stageStat = progress.stageProgress[s.id] || {
              unlocked: s.id === 1,
              stars: 0,
              highScore: 0,
              bossDefeated: false,
            };
            const stageWords = AWL_WORDS_DATA.filter((w) => w.sublist === s.id);
            const masteredInStage = stageWords.filter((w) => progress.masteredWords.includes(w.id)).length;

            return (
              <div
                key={s.id}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.bossAvatar}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {s.name} - {s.bossName}
                    </h4>
                    <span className="text-slate-500 text-[11px]">
                      {s.description}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <div className="text-right">
                    <span className="font-semibold text-slate-800 tabular-nums">
                      {masteredInStage}/{stageWords.length} từ
                    </span>
                    <span className="text-[11px] text-amber-500 block">
                      {'★'.repeat(stageStat.stars)}{'☆'.repeat(3 - stageStat.stars)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      sound.playClick();
                      onGoToStage(s.id);
                    }}
                    className="px-3 py-1.5 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Vào Ải
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Sessions History */}
      {sessions.length > 0 && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-slate-900">
            Lịch Sử Các Phiên Thí Luyện Gần Đây
          </h3>

          <div className="divide-y divide-slate-100">
            {sessions.slice(-5).reverse().map((sess) => (
              <div key={sess.id} className="py-3 flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800 block">
                    {sess.mode === 'battle'
                      ? 'Trảm Yêu Trừ Ma'
                      : sess.mode === 'exam'
                        ? 'Đại Khảo Thí'
                        : sess.mode === 'listening'
                          ? 'Thuận Phong Nhĩ (Luyện Nghe)'
                          : 'Hỏa Nhãn Kim Tinh'}
                  </span>
                  <span className="text-slate-400 text-[11px]">{sess.date}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-slate-500">
                    Đúng {sess.correctAnswers}/{sess.totalQuestions}
                  </span>
                  <span className="font-mono font-bold text-sm text-amber-700 tabular-nums">
                    {sess.score} điểm
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
