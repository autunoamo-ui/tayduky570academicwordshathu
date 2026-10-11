export interface AWLWord {
  id: string;
  word: string;
  phonetic: string;
  pos: string; // part of speech: noun, verb, adj, adv
  meaningVi: string;
  definitionEn: string;
  collocations: string[];
  example: string;
  exampleVi: string;
  wordFamily: string[];
  sublist: number; // 1 to 10
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Stage {
  id: number;
  sublistId: number;
  name: string;
  title: string;
  bossName: string;
  bossAvatar: string;
  bossTitle: string;
  bossHp: number;
  description: string;
  requiredStars: number;
  backgroundTheme: string;
  lore: string;
}

export interface Question {
  id: string;
  subjectId: number; // stage/sublist ID
  content: string;
  type: 'meaning' | 'fill_blank' | 'synonym' | 'collocation' | 'listening';
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  targetWord: string;
  audioPrompt?: string;
  listeningFormat?:
    | 'sound_to_word'
    | 'sound_to_meaning'
    | 'dictation'
    | 'context_sentence'
    | 'true_false'
    | 'dialogue_mcq'
    | 'synonym_antonym';
}

export interface LearningSession {
  id: string;
  subjectId: number;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // in seconds
  date: string;
  mode: 'battle' | 'exam' | 'matching' | 'listening' | 'reading';
}

export interface UserProgress {
  totalAttempts: number;
  averageScore: number;
  streakDays: number;
  lastActiveDate: string;
  weakTopics: string[]; // list of words user struggled with
  masteredWords: string[]; // list of word IDs
  reviewWords: string[]; // words marked for review
  stageProgress: Record<number, {
    unlocked: boolean;
    stars: number; // 0 to 3
    highScore: number;
    bossDefeated: boolean;
  }>;
}

export type CharacterId = 'wukong' | 'tripitaka' | 'bajie' | 'wujing';

export interface Character {
  id: CharacterId;
  name: string;
  title: string;
  quote: string;
  bonus: string;
  avatarColor: string;
}

export interface AppSettings {
  theme: 'dark' | 'light';
  soundEnabled: boolean;
  autoSave: boolean;
  character: CharacterId;
  apiKey: string;
  selectedModel: string;
}

export interface AppData {
  subjects: { id: number; name: string; icon: string; questionsCount: number }[];
  questions: Question[];
  sessions: LearningSession[];
  progress: UserProgress;
  settings: AppSettings;
}
