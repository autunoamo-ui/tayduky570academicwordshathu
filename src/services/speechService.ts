/**
 * Speech Service leveraging Web Speech API with voice selection,
 * variable playback speed, audio-state callbacks, and pronunciation assistance.
 */

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  accent?: 'en-US' | 'en-GB';
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  public isSpeaking: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices();
    }
  }

  public getAvailableAccents(): { code: 'en-US' | 'en-GB'; label: string }[] {
    return [
      { code: 'en-US', label: 'Mỹ (US English)' },
      { code: 'en-GB', label: 'Anh (UK English)' },
    ];
  }

  public speak(text: string, options: SpeechOptions = {}) {
    if (!this.synth) {
      options.onEnd?.();
      return;
    }

    // Cancel ongoing speech to avoid queue pileup
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate ?? 0.9;
    utterance.pitch = options.pitch ?? 1.0;
    utterance.lang = options.accent ?? 'en-US';

    // Pick best matching voice
    if (this.voices.length > 0) {
      const targetLang = options.accent ?? 'en-US';
      const matchedVoice =
        this.voices.find((v) => v.lang === targetLang) ||
        this.voices.find((v) => v.lang.startsWith(targetLang.split('-')[0])) ||
        this.voices.find((v) => v.lang.startsWith('en'));

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      options.onStart?.();
    };

    const handleFinish = () => {
      this.isSpeaking = false;
      options.onEnd?.();
    };

    utterance.onend = handleFinish;
    utterance.onerror = (e) => {
      this.isSpeaking = false;
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        options.onError?.();
      }
      options.onEnd?.();
    };

    this.synth.speak(utterance);
  }

  public speakDialogue(
    lines: { text: string; pitch?: number; voiceIndex?: number }[],
    options: SpeechOptions & { onLineChange?: (lineIndex: number) => void } = {}
  ) {
    if (!this.synth || lines.length === 0) {
      options.onEnd?.();
      return;
    }

    this.synth.cancel();
    this.isSpeaking = true;
    options.onStart?.();

    let currentIndex = 0;

    const speakLine = () => {
      if (!this.synth) {
        this.isSpeaking = false;
        options.onEnd?.();
        return;
      }

      if (currentIndex >= lines.length) {
        this.isSpeaking = false;
        options.onEnd?.();
        return;
      }

      const item = lines[currentIndex];
      options.onLineChange?.(currentIndex);

      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.rate = options.rate ?? 0.9;
      // Provide distinctive pitch for speaker 1 vs speaker 2
      utterance.pitch = item.pitch ?? (currentIndex % 2 === 0 ? 1.08 : 0.92);
      utterance.lang = options.accent ?? 'en-US';

      if (this.voices.length > 0) {
        const targetLang = options.accent ?? 'en-US';
        const matching = this.voices.filter(
          (v) => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0])
        );

        if (matching.length > 1) {
          // Select alternating voices if available
          utterance.voice = matching[currentIndex % matching.length];
        } else if (matching.length > 0) {
          utterance.voice = matching[0];
        }
      }

      utterance.onend = () => {
        currentIndex++;
        if (currentIndex < lines.length) {
          setTimeout(() => {
            if (this.isSpeaking) {
              speakLine();
            }
          }, 350);
        } else {
          this.isSpeaking = false;
          options.onEnd?.();
        }
      };

      utterance.onerror = (e) => {
        this.isSpeaking = false;
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          options.onError?.();
        }
        options.onEnd?.();
      };

      this.synth.speak(utterance);
    };

    speakLine();
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
    }
  }
}

export const speechService = new SpeechService();
