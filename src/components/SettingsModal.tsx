import React, { useState, useRef } from 'react';
import {
  X,
  Key,
  Eye,
  EyeOff,
  Cpu,
  User,
  Volume2,
  VolumeX,
  Download,
  Upload,
  RotateCcw,
  Check,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { AppSettings, CharacterId, AppData } from '../types';
import { CHARACTERS } from '../data/awlData';
import { FALLBACK_MODELS } from '../services/geminiService';
import { sound } from '../services/soundService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onExportData: () => void;
  onImportData: (imported: AppData) => void;
  onResetData: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onExportData,
  onImportData,
  onResetData,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState(settings.apiKey || '');
  const [showKey, setShowKey] = useState(false);
  const [selectedModel, setSelectedModel] = useState(settings.selectedModel || 'gemini-3-pro-preview');
  const [selectedChar, setSelectedChar] = useState<CharacterId>(settings.character || 'wukong');
  const [soundEnabled, setSoundEnabled] = useState(settings.soundEnabled);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleSave = () => {
    sound.playClick();
    localStorage.setItem('gemini_api_key', apiKeyInput.trim());
    localStorage.setItem('gemini_selected_model', selectedModel);

    onUpdateSettings({
      apiKey: apiKeyInput.trim(),
      selectedModel,
      character: selectedChar,
      soundEnabled,
    });

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.progress && parsed.settings) {
          onImportData(parsed as AppData);
          sound.playSuccess();
          alert('Đã khôi phục dữ liệu tiến độ thành công!');
          onClose();
        } else {
          alert('Tệp sao lưu không đúng định dạng!');
        }
      } catch {
        alert('Không thể đọc tệp JSON sao lưu.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <h3 className="text-base font-bold text-slate-900">
              Cài Đặt Hệ Thống & Gemini AI
            </h3>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-700">
          {/* Section 1: Gemini API Key */}
          <div className="space-y-2 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Key className="w-4 h-4 text-amber-600" />
                <span>Google Gemini API Key:</span>
              </label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-amber-700 hover:underline font-semibold"
              >
                Lấy Key miễn phí ↗
              </a>
            </div>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="Dán API Key (AIzaSy...)"
                className="w-full pr-10 py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Khóa API được lưu an toàn trong LocalStorage của trình duyệt.
              Nếu chạy trên máy chủ AI Studio có sẵn biến môi trường, hệ thống sẽ tự động dùng proxy.
            </p>
          </div>

          {/* Section 2: Model Selection */}
          <div className="space-y-2">
            <label className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
              <Cpu className="w-4 h-4 text-slate-600" />
              <span>Mô Hình AI (Tự động fallback khi lỗi):</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {FALLBACK_MODELS.map((m, idx) => {
                const isSelected = selectedModel === m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedModel(m)}
                    className={`p-3 rounded-xl border text-left flex flex-col items-start gap-1 transition-all ${isSelected
                      ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-400'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    <span className="font-bold text-slate-900 block text-[11px] truncate w-full">
                      {m}
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium">
                      {m === 'gemini-3-pro-preview' ? 'Mặc định' : 'Dự phòng'}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-500">
              Cơ chế Fallback thông minh sẽ tự động chuyển đổi sang model tiếp theo nếu gặp mã lỗi 500, 503 hoặc 504.
            </p>
          </div>

          {/* Section 3: Select Character */}
          <div className="space-y-2">
            <label className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
              <User className="w-4 h-4 text-slate-600" />
              <span>Hóa Thân Nhân Vật:</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CHARACTERS.map((char) => {
                const isSelected = selectedChar === char.id;
                return (
                  <button
                    key={char.id}
                    type="button"
                    onClick={() => setSelectedChar(char.id)}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${isSelected
                      ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-400'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    <span className="text-xl">
                      {char.id === 'wukong' && '🐒'}
                      {char.id === 'tripitaka' && '🧘'}
                      {char.id === 'bajie' && '🐗'}
                      {char.id === 'wujing' && '🌊'}
                    </span>
                    <div className="flex-1">
                      <span className="font-bold text-slate-900 block text-xs">
                        {char.name}
                      </span>
                      <span className="text-[10px] text-slate-500 line-clamp-2">
                        {char.bonus}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Sound Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <span className="font-bold text-slate-900 block text-xs">Âm Thanh & Hiệu Ứng Game</span>
              <span className="text-[11px] text-slate-500">Gậy vung, chém trúng quái, chuông đắc thắng</span>
            </div>
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl border text-xs font-semibold ${soundEnabled ? 'border-amber-300 bg-amber-100 text-amber-800' : 'border-slate-200 bg-white text-slate-400'
                }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* Section 5: Backup & Restore */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-900 block text-xs">Sao Lưu & Phục Hồi Dữ Liệu:</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onExportData}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-semibold"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span>Xuất Tệp JSON</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-semibold"
              >
                <Upload className="w-3.5 h-3.5 text-slate-600" />
                <span>Nhập Tệp JSON</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ thỉnh kinh?')) {
                    onResetData();
                    onClose();
                  }
                }}
                className="text-[11px] text-rose-600 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Đặt lại tiến độ về mặc định ban đầu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl"
          >
            Hủy Bỏ
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
          >
            {saveSuccess && <Check className="w-4 h-4 text-emerald-400" />}
            <span>{saveSuccess ? 'Đã Lưu!' : 'Lưu Cài Đặt'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
