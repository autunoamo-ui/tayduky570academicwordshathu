import React, { useState } from 'react';
import { Swords, Layers, Lock, Star, Sparkles, ChevronRight, CheckCircle2, BookOpen, Headphones, FileText } from 'lucide-react';
import { Stage, UserProgress, AWLWord } from '../types';
import { STAGES, AWL_WORDS_DATA } from '../data/awlData';
import { sound } from '../services/soundService';
import { SublistWordsModal } from './SublistWordsModal';

interface StageMapProps {
  progress: UserProgress;
  onSelectStageForBattle: (stageId: number) => void;
  onSelectStageForFlashcards: (stageId: number) => void;
  onSelectStageForMatching: (stageId: number) => void;
  onSelectStageForListening: (stageId: number) => void;
  onSelectStageForReading: (stageId: number) => void;
  onSelectWordForAi: (word: AWLWord) => void;
}

export const StageMap: React.FC<StageMapProps> = ({
  progress,
  onSelectStageForBattle,
  onSelectStageForFlashcards,
  onSelectStageForMatching,
  onSelectStageForListening,
  onSelectStageForReading,
  onSelectWordForAi,
}) => {
  const [sublistModalStageId, setSublistModalStageId] = useState<number | null>(null);

  // Calculate total stars
  const totalStars = Object.values(progress.stageProgress).reduce((acc, curr) => acc + (curr.stars || 0), 0);
  const totalBossesDefeated = Object.values(progress.stageProgress).filter((s) => s.bossDefeated).length;

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Journey Overview Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white p-6 sm:p-8 shadow-md">
        {/* Decorative oriental cloud elements */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-8 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hành Trình Vượt 81 Nạn Thỉnh Kinh</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 text-wrap-balance">
            Bản Đồ 10 Ải Thần Thông · 570 Từ Vựng AWL
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed max-w-2xl">
            Từ Ngũ Hành Sơn bạt ngàn đến Tây Thiên Lôi Âm Tự, mỗi ải đại diện cho một Sublist Academic Word List (AWL). 
            Hãy đánh bại yêu tinh, thu thập Chân Kinh và nâng tầm tiếng Anh học thuật IELTS/TOEFL của bạn!
          </p>

          {/* Quick Metrics unboxed */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">Tổng Chân Kinh</span>
              <span className="text-xl sm:text-2xl font-bold text-white tabular-nums">570 Từ</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">Sao Thần Thông</span>
              <span className="text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">
                {totalStars} / 30 ★
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">Yêu Ma Thu Phục</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
                {totalBossesDefeated} / 10 Boss
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">Chuỗi Ngày Học</span>
              <span className="text-xl sm:text-2xl font-bold text-orange-400 tabular-nums">
                {progress.streakDays} Ngày
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stages Grid List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            10 Ải Thử Thách Tây Du Ký
          </h2>
          <span className="text-xs text-slate-500">
            Hoàn thành mỗi ải để mở khóa ải tiếp theo
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STAGES.map((stage) => {
            const stageStat = progress.stageProgress[stage.id] || {
              unlocked: stage.id === 1,
              stars: 0,
              highScore: 0,
              bossDefeated: false,
            };

            const isUnlocked = stageStat.unlocked || stage.id === 1 || totalStars >= stage.requiredStars;
            const stageWords = AWL_WORDS_DATA.filter((w) => w.sublist === stage.id);
            const masteredInStage = stageWords.filter((w) => progress.masteredWords.includes(w.id)).length;
            const percentMastered = stageWords.length > 0 ? Math.round((masteredInStage / stageWords.length) * 100) : 0;

            return (
              <div
                key={stage.id}
                className={`group relative rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isUnlocked
                    ? 'bg-white border-slate-200/90 hover:border-amber-400 hover:shadow-md'
                    : 'bg-slate-50/80 border-slate-200/50 opacity-80'
                }`}
              >
                {/* Header Strip */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-xs transition-transform group-hover:scale-105 ${
                          isUnlocked ? 'bg-amber-100/70 border border-amber-200' : 'bg-slate-200'
                        }`}
                      >
                        {isUnlocked ? stage.bossAvatar : <Lock className="w-5 h-5 text-slate-400" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-amber-700">
                            Ải {stage.id} · Sublist {stage.sublistId}
                          </span>
                          {stageStat.bossDefeated && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                              <CheckCircle2 className="w-3 h-3" />
                              Đã Trảm Yêu
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                          {stage.name} - {stage.title}
                        </h3>
                      </div>
                    </div>

                    {/* Star ratings */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 ${
                            starIdx <= (stageStat.stars || 0)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-200 fill-slate-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Lore & Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {stage.lore}
                  </p>

                  {/* Boss Info unboxed */}
                  <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <span className="font-semibold text-slate-900">{stage.bossName}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{stage.bossTitle}</span>
                    </div>
                    <span className="font-mono font-medium text-amber-700">
                      HP: {stage.bossHp}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Đã thuộc từ vựng:</span>
                      <span className="font-semibold text-slate-800 tabular-nums">
                        {masteredInStage}/{stageWords.length} ({percentMastered}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                        style={{ width: `${percentMastered}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {isUnlocked ? (
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setSublistModalStageId(stage.id);
                        }}
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100/80 rounded-xl transition-all border border-amber-200/80"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                        <span>Xem Bảng {stageWords.length} Từ Sublist {stage.sublistId}</span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            sound.playStaffSwing();
                            onSelectStageForBattle(stage.id);
                          }}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all active:scale-95 whitespace-nowrap shadow-xs"
                        >
                          <Swords className="w-3.5 h-3.5 text-amber-400" />
                          <span>Trảm Yêu</span>
                        </button>

                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectStageForListening(stage.id);
                          }}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-amber-900 bg-amber-100/90 hover:bg-amber-200/90 rounded-xl transition-all active:scale-95 whitespace-nowrap border border-amber-300/70 shadow-xs"
                        >
                          <Headphones className="w-3.5 h-3.5 text-amber-700" />
                          <span>Thuận Phong Nhĩ</span>
                        </button>
                      </div>

                      {/* Row 2: Reading & Flashcard */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectStageForReading(stage.id);
                          }}
                          className="flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-bold text-indigo-900 bg-indigo-50 hover:bg-indigo-100/90 rounded-xl transition-all active:scale-95 whitespace-nowrap border border-indigo-200/70"
                        >
                          <FileText className="w-3.5 h-3.5 text-indigo-700" />
                          <span>Kinh Thư (Đọc)</span>
                        </button>

                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectStageForFlashcards(stage.id);
                          }}
                          className="flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                        >
                          <Layers className="w-3.5 h-3.5 text-slate-600" />
                          <span>Kim Cô Chú</span>
                        </button>
                      </div>

                      <div className="w-full">
                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectStageForMatching(stage.id);
                          }}
                          className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-amber-800 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                        >
                          <span>Hỏa Nhãn Kim Tinh (Ghép Từ)</span>
                          <ChevronRight className="w-3 h-3 text-amber-600" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-slate-500 bg-slate-100 rounded-xl">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Cần tích lũy tối thiểu {stage.requiredStars} sao thần thông để mở ải</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sublist Words Modal (Exact 4-column reference matching user request) */}
      {sublistModalStageId !== null && (
        <SublistWordsModal
          stageId={sublistModalStageId}
          isOpen={true}
          onClose={() => setSublistModalStageId(null)}
          masteredWords={progress.masteredWords}
          reviewWords={progress.reviewWords}
          onSelectWordForAi={(word) => {
            onSelectWordForAi(word);
            setSublistModalStageId(null);
          }}
          onStartFlashcards={(sId) => {
            onSelectStageForFlashcards(sId);
            setSublistModalStageId(null);
          }}
          onStartBattle={(sId) => {
            onSelectStageForBattle(sId);
            setSublistModalStageId(null);
          }}
          onStartListening={(sId) => {
            onSelectStageForListening(sId);
            setSublistModalStageId(null);
          }}
          onStartReading={(sId) => {
            onSelectStageForReading(sId);
            setSublistModalStageId(null);
          }}
        />
      )}
    </div>
  );
};
