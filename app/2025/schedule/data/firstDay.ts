// 初日のセッションデータ
import { FirstDaySchedule } from '../types'

export const firstDay: FirstDaySchedule = [
  {
    time: '10:00-10:30',
    sessions: [
      {
        title: '開会式およびICFジャパンからの挨拶・チーム紹介',
        description: 'ICFジャパン代表理事からの挨拶',
        level: '全対象',
      },
    ],
  },
  {
    time: '10:30-11:30',
    sessions: [
      {
        title: 'ICFグローバル代表からの基調講演',
        description:
          '代表の自己紹介、ICFグローバルコーチングのトレンド、日本のICFコーチングの可能性と日本のコーチング業界への期待について',
        unit: 'RD 1.0単位',
        level: '全対象',
      },
    ],
  },
  {
    time: '11:30-12:30',
    sessions: [
      {
        title: '高橋 浩一氏：「問い」で、相手の心を動かす。',
        description:
          '～「無敗営業」の著者と考える、「個」のキャリアを加速させるコミュニケーション戦略～',
        level: '全対象',
      },
    ],
  },
  {
    time: '12:30-13:30',
    sessions: [
      {
        title: '休憩',
      },
    ],
  },
  {
    time: '13:30-14:30',
    sessions: [
      {
        title: '中竹 竜二氏：コーチとしてのアンラーン',
        level: '全対象',
      },
    ],
  },
  {
    time: '14:30-15:30',
    sessions: [
      {
        title: 'あなたのコーチングが、誰かの未来を変える〜プロボノコーチング connect to X〜',
        unit: 'CC 0.5単位 RD 0.5単位',
        level: '全対象',
      },
    ],
  },
  {
    time: '15:30-16:00',
    sessions: [
      {
        title: 'クロージング',
        bg: 'border-l-4 border-secondary pl-3',
      },
    ],
  },
  {
    time: '16:00-17:30',
    sessions: [
      {
        title: 'コーチング・プラクティス（コーチング実践）',
        description: '参加者同士によるコーチング実践セッション',
        unit: 'CC 1.5単位',
        note: '対象：ACCを目指している方、ACC、PCC、MCCの方 ※17:30までの開催',
        bg: 'border-l-4 border-primary pl-3',
        level: '中級',
      },
      {
        title: 'ネットワーキング',
        note: '※自由解散',
        bg: 'border-l-4 border-primary pl-3',
        level: '全対象',
      },
    ],
  },
]
