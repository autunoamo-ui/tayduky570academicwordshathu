import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { Question, LearningSession } from '../types';
import { AWL_WORDS_DATA, STAGES } from '../data/awlData';
import { sound } from '../services/soundService';

interface ExamModeProps {
  onCompleteExam: (session: LearningSession) => void;
}

export const ExamMode: React.FC<ExamModeProps> = ({ onCompleteExam }) => {
  const [examStarted, setExamStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins
  const [isFinished, setIsFinished] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  // Generate randomized multi-sublist exam questions
  const startExam = (numQuestions: number) => {
    sound.playStaffSwing();
    const allWords = [...AWL_WORDS_DATA].sort(() => 0.5 - Math.random());
    const selectedWords = allWords.slice(0, numQuestions);

    const generated: Question[] = selectedWords.map((word, idx) => {
      const distractors = allWords
        .filter((w) => w.id !== word.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const isFillBlank = idx % 2 === 0;
      let content = '';
      let correctAnswer = '';
      let options: string[] = [];
      let explanation = '';

      if (isFillBlank) {
        const regex = new RegExp(`\\b${word.word}\\b`, 'i');
        content = `Điền từ học thuật thích hợp vào chỗ trống:\n"${word.example.replace(regex, '_______')}"`;
        correctAnswer = word.word;
        options = [correctAnswer, ...distractors.map((d) => d.word)].sort(() => 0.5 - Math.random());
        explanation = `"${word.word}" (${word.pos}): ${word.meaningVi}. Ví dụ: ${word.example}`;
      } else {
        content = `Nghĩa tiếng Việt chuẩn của từ "${word.word}" (${word.phonetic}) là:`;
        correctAnswer = word.meaningVi;
        options = [correctAnswer, ...distractors.map((d) => d.meaningVi)].sort(() => 0.5 - Math.random());
        explanation = `"${word.word}": ${word.meaningVi}. Định nghĩa: ${word.definitionEn}`;
      }

      return {
        id: `exam_q_${word.id}_${idx}`,
        subjectId: word.sublist,
        content,
        type: isFillBlank ? 'fill_blank' : 'meaning',
        options,
        correctAnswer,
        explanation,
        difficulty: word.difficulty,
        targetWord: word.word,
      };
    });

    setQuestions(generated);
    setQuestionCount(numQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setTimeLeft(numQuestions * 60); // 1 minute per question
    setTimeSpent(0);
    setIsFinished(false);
    setExamStarted(true);
  };

  // Timer countdown
  useEffect(() => {
    if (!examStarted || isFinished) return;

    if (timeLeft <= 0) {
      finishExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, isFinished, timeLeft]);

  const handleSelectOption = (option: string) => {
    sound.playClick();
    setAnswers((prev) => ({ ...prev, [currentIndex]: option }));
  };

  const finishExam = () => {
    sound.playVictory();
    setIsFinished(true);

    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);

    const session: LearningSession = {
      id: `session_${Date.now()}`,
      subjectId: 0,
      score,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      timeSpent,
      date: new Date().toLocaleDateString('vi-VN'),
      mode: 'exam',
    };

    onCompleteExam(session);

    if (score >= 80) {
      try {
        confetti({ particleCount: 120, spread: 80 });
      } catch {
        // ignore
      }
    }
  };

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Not started screen
  if (!examStarted) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 py-4 pb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white p-8 sm:p-10 text-center space-y-4 shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-3xl mx-auto border border-amber-500/30">
            🪷
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Đại Lôi Âm Tự Khảo Thí
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Thỉnh Chân Kinh · Đại Khảo Thí Tổng Hợp
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Bài thi tổng hợp ngẫu nhiên các từ vựng học thuật cốt lõi Academic Word List (AWL) có đếm ngược thời gian.
              Đạt trên 80% để nhận đạo hiệu &quot;Đấu Chiến Thắng Phật&quot;!
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => startExam(10)}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 rounded-xl shadow-md transition-all active:scale-95"
            >
              Bắt Đầu Khảo Thí (10 Câu · 10 Phút)
            </button>
            <button
              onClick={() => startExam(20)}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-all active:scale-95"
            >
              Đại Khảo Thí 20 Câu (20 Phút)
            </button>
          </div>
        </div>

        {/* Exam rules info */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Quy Chế Khảo Thí:</h3>
          <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
            <li>Mỗi câu hỏi tương ứng 1 phút thời gian làm bài đếm ngược.</li>
            <li>Có thể tự do chuyển đổi giữa các câu để xem lại hoặc sửa đáp án.</li>
            <li>Kết quả sẽ được ghi vào Bảng Vàng Đại Điện để theo dõi tiến độ tổng thể.</li>
          </ul>
        </div>
      </div>
    );
  }

  // Results Screen
  if (isFinished) {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) correctCount++;
    });
    const percentage = Math.round((correctCount / questions.length) * 100);

    let rankTitle = 'Tập Sự Sa Di';
    if (percentage >= 90) rankTitle = 'Đấu Chiến Thắng Phật (Xuất Sắc)';
    else if (percentage >= 80) rankTitle = 'Kim Thân La Hán (Giỏi)';
    else if (percentage >= 65) rankTitle = 'Hành Giả Đại Sĩ (Khá)';
    else rankTitle = 'Cần Tu Luyện Thêm';

    return (
      <div className="max-w-3xl mx-auto space-y-8 pb-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-xs">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center text-4xl border border-amber-200">
            📜
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
              Kết Quả Thỉnh Kinh
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {rankTitle}
            </h2>
            <p className="text-xs text-slate-500">
              Hoàn thành trong {formatTime(timeSpent)}
            </p>
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-md mx-auto">
            <div>
              <span className="text-xs text-slate-400 block">Số điểm</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">
                {percentage}%
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Đúng</span>
              <span className="text-xl font-bold text-emerald-600 tabular-nums">
                {correctCount}/{questions.length}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Thời gian</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">
                {formatTime(timeSpent)}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setExamStarted(false)}
              className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
            >
              Làm Đề Khác
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Chi Tiết Bài Khảo Thí:</h3>
          <div className="space-y-3">
            {questions.map((q, idx) => {
              const userAnswer = answers[idx];
              const isCorrect = userAnswer === q.correctAnswer;

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-left text-xs space-y-2 ${
                    isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-800">
                      Câu {idx + 1}: {q.content}
                    </span>
                    {isCorrect ? (
                      <span className="text-emerald-700 font-bold shrink-0 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                      </span>
                    ) : (
                      <span className="text-rose-700 font-bold shrink-0 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Sai
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 text-slate-600">
                    <div>
                      <span>Bạn chọn: </span>
                      <span className={`font-semibold ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {userAnswer || '(Bỏ trống)'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div>
                        <span>Đáp án chuẩn: </span>
                        <span className="font-semibold text-emerald-800">
                          {q.correctAnswer}
                        </span>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                      💡 {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Exam In Progress Screen
  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Top Exam Header with Timer & Progress */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-bold text-slate-900">
            Câu {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs text-slate-500">
            Đã làm: {Object.keys(answers).length}/{questions.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100">
            <Clock className={`w-3.5 h-3.5 ${timeLeft <= 60 ? 'text-rose-500 animate-pulse' : 'text-slate-600'}`} />
            <span className={`font-mono text-xs font-bold tabular-nums ${timeLeft <= 60 ? 'text-rose-600' : 'text-slate-800'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>

          <button
            onClick={() => {
              if (confirm('Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?')) {
                finishExam();
              }
            }}
            className="px-3 py-1 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
          >
            Nộp Bài
          </button>
        </div>
      </div>

      {/* Question Card */}
      {currentQ && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
              Sublist {currentQ.subjectId} · {currentQ.type === 'fill_blank' ? 'Điền từ' : 'Nghĩa từ'}
            </span>
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed whitespace-pre-line">
              {currentQ.content}
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = answers[currentIndex] === option;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold ring-1 ring-amber-400'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 pt-0.5">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Question Navigation Numbers */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-lg"
            >
              Câu Trước
            </button>

            <div className="flex items-center gap-1 overflow-x-auto max-w-[50%] py-1">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-6 h-6 rounded-md text-[10px] font-bold transition-colors shrink-0 ${
                    currentIndex === i
                      ? 'bg-amber-600 text-white'
                      : answers[i]
                      ? 'bg-slate-200 text-slate-800'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
              >
                Câu Sau
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="px-4 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
              >
                Nộp Bài
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
