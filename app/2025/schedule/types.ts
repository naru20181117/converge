// ICF Japan 2025 スケジュール用型定義

export interface SessionBase {
  title: string
  description?: string
  unit?: string // 例: "CC 1.0単位"
  note?: string
  bg?: string // Tailwind色クラス等
  link?: string
  linkLabel?: string
  sub?: string
}

export interface TimeSlot {
  time: string // 例: "19:00-20:00"
  sessions: SessionBase[]
}

export interface WeekdaySchedule {
  date: string // 例: "6月16日（月）"
  slots: TimeSlot[]
}

export interface DaySchedule {
  time: string
  sessions: SessionBase[]
}

// 初日・最終日は単純な配列で良い場合
export type FirstDaySchedule = DaySchedule[]
export type LastDaySchedule = DaySchedule[]
