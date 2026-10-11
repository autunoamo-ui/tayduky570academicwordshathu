/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StageMap } from './components/StageMap';
import { BossBattle } from './components/BossBattle';
import { FlashcardDeck } from './components/FlashcardDeck';
import { MatchingGame } from './components/MatchingGame';
import { ExamMode } from './components/ExamMode';
import { Dashboard } from './components/Dashboard';
import { AiTutorModal } from './components/AiTutorModal';
import { SettingsModal } from './components/SettingsModal';
import { ListeningPractice } from './components/ListeningPractice';
import { ReadingPractice } from './components/ReadingPractice';
import { AppData, AWLWord, LearningSession, UserProgress, AppSettings } from './types';
import { STAGES, AWL_WORDS_DATA } from './data/awlData';
import { sound } from './services/soundService';

const STORAGE_KEY = 'tay_du_ky_awl_data_v1';

// Initial default state with sample demo data
const DEFAULT_APP_DATA: AppData = {
  subjects: STAGES.map((s) => ({
    id: s.id,
    name: s.name,
    icon: s.bossAvatar,
    questionsCount: 60,
  })),
  questions: [],
  sessions: [
    {
      id: 'session_demo_1',
      subjectId: 1,
      score: 95,
      totalQuestions: 8,
      correctAnswers: 8,
      timeSpent: 120,
      date: new Date(Date.now() - 86400000 * 2).toLocaleDateString('vi-VN'),
      mode: 'battle',
    },
    {
      id: 'session_demo_2',
      subjectId: 1,
      score: 88,
      totalQuestions: 10,
      correctAnswers: 9,
      timeSpent: 280,
      date: new Date(Date.now() - 86400000).toLocaleDateString('vi-VN'),
      mode: 'exam',
    },
  ],
  progress: {
    totalAttempts: 2,
    averageScore: 91,
    streakDays: 3,
    lastActiveDate: new Date().toISOString(),
    weakTopics: ['legislation', 'derived', 'constitutional'],
    masteredWords: ['w1_1', 'w1_2', 'w1_3', 'w1_4', 'w1_7', 'w1_8', 'w1_9', 'w1_14', 'w1_15'],
    reviewWords: ['w1_5', 'w1_6', 'w1_11'],
    stageProgress: {
      1: { unlocked: true, stars: 3, highScore: 950, bossDefeated: true },
      2: { unlocked: true, stars: 2, highScore: 720, bossDefeated: true },
      3: { unlocked: true, stars: 1, highScore: 500, bossDefeated: false },
      4: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
      5: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
      6: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
      7: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
      8: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
      9: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
      10: { unlocked: false, stars: 0, highScore: 0, bossDefeated: false },
    },
  },
  settings: {
    theme: 'light',
    soundEnabled: true,
    autoSave: true,
    character: 'wukong',
    apiKey: '',
    selectedModel: 'gemini-3-pro-preview',
  },
};

export default function App() {
  const [appData, setAppData] = useState<AppData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure critical fields are merged
        return {
          ...DEFAULT_APP_DATA,
          ...parsed,
          progress: { ...DEFAULT_APP_DATA.progress, ...parsed.progress },
          settings: { ...DEFAULT_APP_DATA.settings, ...parsed.settings },
        };
      }
    } catch {
      // ignore
    }
    return DEFAULT_APP_DATA;
  });

  // Current active navigation tab
  const [currentTab, setCurrentTab] = useState<
    'stages' | 'battle' | 'flashcards' | 'matching' | 'listening' | 'reading' | 'exam' | 'dashboard'
  >('stages');

  // Active stage for combat/learning
  const [selectedStageId, setSelectedStageId] = useState<number>(1);

  // Modals state
  const [isAiTutorOpen, setIsAiTutorOpen] = useState(false);
  const [aiTutorWord, setAiTutorWord] = useState<AWLWord | null>(null);
  const [aiTutorMode, setAiTutorMode] = useState<'mnemonic' | 'academic' | 'sentence' | 'chat'>('mnemonic');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('gemini_api_key');
    if (!key) {
      setIsSettingsOpen(true);
    }
  }, []);

  // Synchronize sound settings with SoundService
  useEffect(() => {
    sound.enabled = appData.settings.soundEnabled;
  }, [appData.settings.soundEnabled]);

  // Save to LocalStorage
  useEffect(() => {
    if (appData.settings.autoSave) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
      } catch {
        // ignore
      }
    }
  }, [appData]);

  // Handle stage battle completion
  const handleBattleComplete = (
    stageId: number,
    score: number,
    stars: number,
    correctCount: number,
    totalCount: number
  ) => {
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    const newSession: LearningSession = {
      id: `battle_${Date.now()}`,
      subjectId: stageId,
      score,
      totalQuestions: totalCount,
      correctAnswers: correctCount,
      timeSpent: 180,
      date: new Date().toLocaleDateString('vi-VN'),
      mode: 'battle',
    };

    setAppData((prev) => {
      const currentStageProg = prev.progress.stageProgress[stageId] || {
        unlocked: true,
        stars: 0,
        highScore: 0,
        bossDefeated: false,
      };

      const updatedStageProgress = {
        ...prev.progress.stageProgress,
        [stageId]: {
          ...currentStageProg,
          stars: Math.max(currentStageProg.stars, stars),
          highScore: Math.max(currentStageProg.highScore, score),
          bossDefeated: true,
        },
      };

      // Unlock next stage if won
      if (stageId < 10) {
        const nextId = stageId + 1;
        updatedStageProgress[nextId] = {
          ...(updatedStageProgress[nextId] || { stars: 0, highScore: 0, bossDefeated: false }),
          unlocked: true,
        };
      }

      const newSessions = [...prev.sessions, newSession];
      const newTotalAttempts = prev.progress.totalAttempts + 1;
      const newAverage = Math.round(
        newSessions.reduce((acc, s) => acc + (s.score || accuracy), 0) / newSessions.length
      );

      return {
        ...prev,
        sessions: newSessions,
        progress: {
          ...prev.progress,
          totalAttempts: newTotalAttempts,
          averageScore: newAverage,
          stageProgress: updatedStageProgress,
        },
      };
    });

    // Return to stages view
    setCurrentTab('stages');
  };

  // Handle exam completion
  const handleExamComplete = (session: LearningSession) => {
    setAppData((prev) => {
      const newSessions = [...prev.sessions, session];
      const newAverage = Math.round(
        newSessions.reduce((acc, s) => acc + s.score, 0) / newSessions.length
      );

      return {
        ...prev,
        sessions: newSessions,
        progress: {
          ...prev.progress,
          totalAttempts: prev.progress.totalAttempts + 1,
          averageScore: newAverage,
        },
      };
    });
  };

  // Handle listening session completion
  const handleListeningComplete = (session: LearningSession) => {
    setAppData((prev) => {
      const newSessions = [...prev.sessions, session];
      const newTotalAttempts = prev.progress.totalAttempts + 1;
      const newAverage = Math.round(
        newSessions.reduce((acc, s) => acc + s.score, 0) / newSessions.length
      );

      return {
        ...prev,
        sessions: newSessions,
        progress: {
          ...prev.progress,
          totalAttempts: newTotalAttempts,
          averageScore: newAverage,
        },
      };
    });
  };

  // Handle reading session completion
  const handleReadingComplete = (session: LearningSession) => {
    setAppData((prev) => {
      const newSessions = [...prev.sessions, session];
      const newTotalAttempts = prev.progress.totalAttempts + 1;
      const newAverage = Math.round(
        newSessions.reduce((acc, s) => acc + s.score, 0) / newSessions.length
      );

      return {
        ...prev,
        sessions: newSessions,
        progress: {
          ...prev.progress,
          totalAttempts: newTotalAttempts,
          averageScore: newAverage,
        },
      };
    });
  };

  // Toggle word states
  const handleToggleMastered = (wordId: string) => {
    setAppData((prev) => {
      const isMastered = prev.progress.masteredWords.includes(wordId);
      const newMastered = isMastered
        ? prev.progress.masteredWords.filter((id) => id !== wordId)
        : [...prev.progress.masteredWords, wordId];

      const newReview = prev.progress.reviewWords.filter((id) => id !== wordId);

      return {
        ...prev,
        progress: {
          ...prev.progress,
          masteredWords: newMastered,
          reviewWords: newReview,
        },
      };
    });
  };

  const handleToggleReview = (wordId: string) => {
    setAppData((prev) => {
      const isReview = prev.progress.reviewWords.includes(wordId);
      const newReview = isReview
        ? prev.progress.reviewWords.filter((id) => id !== wordId)
        : [...prev.progress.reviewWords, wordId];

      return {
        ...prev,
        progress: {
          ...prev.progress,
          reviewWords: newReview,
        },
      };
    });
  };

  const handleToggleWeak = (wordStr: string) => {
    setAppData((prev) => {
      const isWeak = prev.progress.weakTopics.includes(wordStr);
      const newWeak = isWeak
        ? prev.progress.weakTopics.filter((w) => w !== wordStr)
        : [...prev.progress.weakTopics, wordStr];

      return {
        ...prev,
        progress: {
          ...prev.progress,
          weakTopics: newWeak,
        },
      };
    });
  };

  // Export JSON file
  const handleExportData = () => {
    sound.playClick();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `tay_du_ky_awl_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON
  const handleImportData = (imported: AppData) => {
    setAppData(imported);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
  };

  // Reset Data
  const handleResetData = () => {
    sound.playClick();
    setAppData(DEFAULT_APP_DATA);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        selectedCharacterId={appData.settings.character}
        soundEnabled={appData.settings.soundEnabled}
        onToggleSound={() => {
          setAppData((prev) => ({
            ...prev,
            settings: { ...prev.settings, soundEnabled: !prev.settings.soundEnabled },
          }));
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenAiTutor={() => {
          setAiTutorWord(AWL_WORDS_DATA[0]);
          setAiTutorMode('mnemonic');
          setIsAiTutorOpen(true);
        }}
        streakDays={appData.progress.streakDays}
        masteredCount={appData.progress.masteredWords.length}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentTab === 'stages' && (
          <StageMap
            progress={appData.progress}
            onSelectStageForBattle={(stageId) => {
              setSelectedStageId(stageId);
              setCurrentTab('battle');
            }}
            onSelectStageForFlashcards={(stageId) => {
              setSelectedStageId(stageId);
              setCurrentTab('flashcards');
            }}
            onSelectStageForMatching={(stageId) => {
              setSelectedStageId(stageId);
              setCurrentTab('matching');
            }}
            onSelectStageForListening={(stageId) => {
              setSelectedStageId(stageId);
              setCurrentTab('listening');
            }}
            onSelectStageForReading={(stageId) => {
              setSelectedStageId(stageId);
              setCurrentTab('reading');
            }}
            onSelectWordForAi={(word) => {
              setAiTutorWord(word);
              setAiTutorMode('mnemonic');
              setIsAiTutorOpen(true);
            }}
          />
        )}

        {currentTab === 'battle' && (
          <BossBattle
            stageId={selectedStageId}
            characterId={appData.settings.character}
            onBattleComplete={handleBattleComplete}
            onBackToMap={() => setCurrentTab('stages')}
            onAskAiAboutWord={(word) => {
              setAiTutorWord(word);
              setAiTutorMode('mnemonic');
              setIsAiTutorOpen(true);
            }}
          />
        )}

        {currentTab === 'listening' && (
          <ListeningPractice
            initialStageId={selectedStageId}
            masteredWords={appData.progress.masteredWords}
            reviewWords={appData.progress.reviewWords}
            weakTopics={appData.progress.weakTopics}
            onToggleMastered={handleToggleMastered}
            onToggleReview={handleToggleReview}
            onOpenAiTutor={(word) => {
              setAiTutorWord(word);
              setAiTutorMode('mnemonic');
              setIsAiTutorOpen(true);
            }}
            onRecordSession={handleListeningComplete}
            onBackToMap={() => setCurrentTab('stages')}
          />
        )}

        {currentTab === 'reading' && (
          <ReadingPractice
            initialStageId={selectedStageId}
            masteredWords={appData.progress.masteredWords}
            reviewWords={appData.progress.reviewWords}
            onToggleMastered={handleToggleMastered}
            onToggleReview={handleToggleReview}
            onOpenAiTutor={(word) => {
              setAiTutorWord(word);
              setAiTutorMode('mnemonic');
              setIsAiTutorOpen(true);
            }}
            onRecordSession={handleReadingComplete}
            onBackToMap={() => setCurrentTab('stages')}
          />
        )}

        {currentTab === 'flashcards' && (
          <FlashcardDeck
            initialSublist={selectedStageId}
            masteredWords={appData.progress.masteredWords}
            reviewWords={appData.progress.reviewWords}
            weakTopics={appData.progress.weakTopics}
            onToggleMastered={handleToggleMastered}
            onToggleReview={handleToggleReview}
            onToggleWeak={handleToggleWeak}
            onOpenAiTutorForWord={(word, mode = 'mnemonic') => {
              setAiTutorWord(word);
              setAiTutorMode(mode);
              setIsAiTutorOpen(true);
            }}
          />
        )}

        {currentTab === 'matching' && (
          <MatchingGame
            initialStageId={selectedStageId}
            onRecordScore={(score) => {
              setAppData((prev) => ({
                ...prev,
                sessions: [
                  ...prev.sessions,
                  {
                    id: `matching_${Date.now()}`,
                    subjectId: selectedStageId,
                    score,
                    totalQuestions: 6,
                    correctAnswers: 6,
                    timeSpent: 60,
                    date: new Date().toLocaleDateString('vi-VN'),
                    mode: 'matching',
                  },
                ],
              }));
            }}
            onBackToMap={() => setCurrentTab('stages')}
          />
        )}

        {currentTab === 'exam' && (
          <ExamMode onCompleteExam={handleExamComplete} />
        )}

        {currentTab === 'dashboard' && (
          <Dashboard
            progress={appData.progress}
            sessions={appData.sessions}
            onReviewWeakWord={(word) => {
              setAiTutorWord(word);
              setAiTutorMode('mnemonic');
              setIsAiTutorOpen(true);
            }}
            onGoToStage={(stageId) => {
              setSelectedStageId(stageId);
              setCurrentTab('battle');
            }}
            onGoToExam={() => setCurrentTab('exam')}
          />
        )}
      </main>

      {/* AI Tutor Modal */}
      <AiTutorModal
        isOpen={isAiTutorOpen}
        onClose={() => setIsAiTutorOpen(false)}
        selectedWord={aiTutorWord}
        initialMode={aiTutorMode}
        progress={appData.progress}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={appData.settings}
        onUpdateSettings={(newSettings) => {
          setAppData((prev) => ({
            ...prev,
            settings: { ...prev.settings, ...newSettings },
          }));
        }}
        onExportData={handleExportData}
        onImportData={handleImportData}
        onResetData={handleResetData}
      />

      {/* Site Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Tây Du Ký · 570 AWL</span>
            <span>- Ứng dụng học từ vựng tiếng Anh học thuật cốt lõi gamified</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                sound.playClick();
                setIsSettingsOpen(true);
              }}
              className="hover:text-slate-800 transition-colors"
            >
              Cài Đặt API Key
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => {
                sound.playClick();
                setCurrentTab('exam');
              }}
              className="hover:text-slate-800 transition-colors"
            >
              Đại Khảo Thí
            </button>
            <span aria-hidden="true">·</span>
            <span>Gemini AI Fallback Enabled</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
