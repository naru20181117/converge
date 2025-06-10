// 最終日のセッションデータ
import { LastDaySchedule } from '../types'

const lastDay: LastDaySchedule = [
  {
    time: '10:00-10:30',
    sessions: [
      {
        title: '開会と一週間の振り返り',
        description: '理事からの挨拶',
        level: '全対象',
      },
    ],
  },
  {
    time: '10:30-12:00',
    sessions: [
      {
        title:
          '世界から注目を集めるCode＆CC研究会がお届けする 質の高いコーチングで社会をアップデート',
        unit: 'CC 1.5単位',
        description: '〜話す×学ぶ×楽しむ〜',
        level: '中級',
      },
    ],
  },
  {
    time: '12:00-13:00',
    sessions: [
      {
        title: '昼休憩',
        level: '全対象',
      },
    ],
  },
  {
    time: '13:00-14:00',
    sessions: [
      {
        title: '本間 正人氏： 産官学におけるコーチングの力―社会を変革する新たな可能性',
        level: '全対象',
      },
    ],
  },
  {
    time: '14:00-15:00',
    sessions: [
      {
        title:
          '加藤 智博氏： 日本の教育の未来に、コーチングはどう活かせるか？ 〜教育現場の最前線〜',
        level: '全対象',
      },
    ],
  },
  {
    time: '15:00-15:15',
    sessions: [
      {
        title: '休憩',
        level: '全対象',
      },
    ],
  },
  {
    time: '15:15-16:45',
    sessions: [
      {
        title: 'Code＆CC研究会がお届けする ICFコーチングのデモンストレーション',
        unit: 'CC 1.5単位',
        description: '会話・対話・コーチングセッション',
        level: '全対象',
      },
      {
        title: 'プラクティス(コーチング実践)',
        unit: 'CC 1.5単位',
        description: '参加者同士によるコーチング実践セッション',
        level: '中級',
      },
    ],
  },
  {
    time: '16:45-17:00',
    sessions: [
      {
        title: 'クロージングセレモニー',
        level: '全対象',
      },
    ],
  },
  {
    time: '17:00-18:00',
    sessions: [
      {
        title: '懇親会・交流タイム',
        note: '自由参加',
        level: '全対象',
      },
    ],
  },
]

export default lastDay
