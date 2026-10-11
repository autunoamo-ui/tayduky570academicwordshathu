import React from 'react';
import { Volume2, VolumeX, Settings, Sparkles, BookOpen, Swords, Map, Layers, Award, BarChart3, Headphones, FileText } from 'lucide-react';
import { Character, CharacterId } from '../types';
import { CHARACTERS } from '../data/awlData';
import { sound } from '../services/soundService';

interface HeaderProps {
  currentTab: 'stages' | 'battle' | 'flashcards' | 'matching' | 'listening' | 'reading' | 'exam' | 'dashboard';
  onSelectTab: (tab: 'stages' | 'battle' | 'flashcards' | 'matching' | 'listening' | 'reading' | 'exam' | 'dashboard') => void;
  selectedCharacterId: CharacterId;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  onOpenAiTutor: () => void;
  streakDays: number;
  masteredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedCharacterId,
  soundEnabled,
  onToggleSound,
  onOpenSettings,
  onOpenAiTutor,
  streakDays,
  masteredCount,
}) => {
  const currentCharacter = CHARACTERS.find((c) => c.id === selectedCharacterId) || CHARACTERS[0];

  const navItems = [
    { id: 'stages' as const, label: 'Bản Đồ Ải', icon: Map },
    { id: 'battle' as const, label: 'Trảm Yêu', icon: Swords },
    { id: 'listening' as const, label: 'Thuận Phong', icon: Headphones },
    { id: 'reading' as const, label: 'Kinh Thư (Đọc)', icon: FileText },
    { id: 'flashcards' as const, label: 'Kim Cô Chú', icon: Layers },
    { id: 'matching' as const, label: 'Hỏa Nhãn', icon: BookOpen },
    { id: 'exam' as const, label: 'Thỉnh Kinh', icon: Award },
    { id: 'dashboard' as const, label: 'Đại Điện', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                sound.playClick();
                onSelectTab('stages');
              }}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <span className="text-xl">🐒</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-base text-slate-900 tracking-tight block">
                  Tây Du Ký AWL
                </span>
                <span className="text-xs text-amber-600 font-medium tracking-wide">
                  570 Từ Vựng Cốt Lõi
                </span>
              </div>
            </button>

            {/* Quick stats unboxed */}
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 ml-4 pl-4 border-l border-slate-200">
              <span className="font-semibold text-amber-600">{masteredCount}/570</span>
              <span>từ đã thuộc</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-rose-500">{streakDays}</span>
              <span>ngày thỉnh kinh</span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sound.playClick();
                    onSelectTab(item.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* AI Tutor Assistant Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenAiTutor();
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 rounded-xl shadow-xs hover:from-amber-500 hover:to-orange-400 active:scale-95 transition-all whitespace-nowrap shrink-0"
              title="Mở Bồ Đề Sư Tổ AI Tutor"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
              <span className="hidden sm:inline">Bồ Đề Sư Tổ AI</span>
              <span className="sm:hidden">AI Tutor</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                if (!soundEnabled) sound.playClick();
              }}
              className={`p-2 rounded-xl border text-xs transition-colors ${soundEnabled
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  : 'border-slate-200 text-slate-400 bg-slate-50'
                }`}
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-amber-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Character Badge */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenSettings();
              }}
              className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-colors"
              title={`Nhân vật: ${currentCharacter.name} (${currentCharacter.title}) - Nhấp để đổi`}
            >
              <div
                className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${currentCharacter.avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-xs`}
              >
                {currentCharacter.id === 'wukong' && '🐒'}
                {currentCharacter.id === 'tripitaka' && '🧘'}
                {currentCharacter.id === 'bajie' && '🐗'}
                {currentCharacter.id === 'wujing' && '🌊'}
              </div>
              <span className="hidden xl:inline text-xs font-semibold text-slate-700">
                {currentCharacter.name}
              </span>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenSettings();
              }}
              className="flex items-center p-2 rounded-xl border border-rose-200 hover:border-rose-400 text-slate-700 bg-rose-50 hover:bg-rose-100 transition-colors group"
              title="Cài đặt API Key, Model & Sao lưu dữ liệu"
              aria-label="Cài đặt"
            >
              <span className="hidden md:inline text-xs font-bold text-rose-600 mr-2">
                Lấy API key để sử dụng app
              </span>
              <Settings className="w-4 h-4 text-slate-600 group-hover:text-rose-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  onSelectTab(item.id);
                }}
                className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${isActive ? 'text-amber-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
