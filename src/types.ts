
export type TimerMode = 'work' | 'shortBreak' | 'longBreak';

export interface Settings {
    work: number;
    shortBreak: number;
    longBreak: number;
    longBreakInterval: number;
}

export type Theme = 'light' | 'dark' | 'system';

// ... (Theme, TimerMode, Settings tipleri zaten burada) ...

// YENİ EKLENDİ: Tamamlanan her seans için bir kayıt yapısı
export interface SessionLogEntry {
  timestamp: number; // Seansın bittiği an (Date.now())
  duration: number;  // Seansın süresi (saniye cinsinden, örn: settings.work)
}