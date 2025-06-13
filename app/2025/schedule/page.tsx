'use client'

import { TitleWithBackground } from '@/components/TitleWithBackground'
import { Clock, Monitor, MapPin, Download } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useEffect, useState } from 'react'
import { SessionLevel } from './types'

// データのインポート
import { firstDay } from './data/firstDay'
import weekdays from './data/weekdays'
import lastDay from './data/lastDay'

// コンポーネントのインポート
import ScheduleFirstDay from './components/ScheduleFirstDay'
import ScheduleWeekdays from './components/ScheduleWeekdays'
import ScheduleLastDay from './components/ScheduleLastDay'

export default function SchedulePage() {
  const [activeSection, setActiveSection] = useState<string | undefined>(undefined)
  const [selectedLevel, setSelectedLevel] = useState<SessionLevel | 'all'>('all')

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setActiveSection(hash)
    }
  }, [])

  const handleAccordionChange = (value: string) => {
    setActiveSection(value)
    // URLのハッシュを更新
    if (value) {
      window.history.pushState(null, '', `#${value}`)
    } else {
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <TitleWithBackground title="タイムスケジュール" backgroundText="schedule" />
      <p className="text-lg text-muted-foreground">
        各日のプログラム詳細です。初日と最終日は終日開催、平日は夜間のセッションとなります。
      </p>

      <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mb-6">
        <p className="font-medium flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary flex-shrink-0" />
          <span className="font-bold">
            <span className="text-primary">特典：</span>
            一般・U24チケットは全セッションのアーカイブ視聴が可能です
          </span>
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <label htmlFor="level-filter" className="text-sm font-medium">
            対象レベルで絞り込み
          </label>
          <select
            id="level-filter"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as SessionLevel | 'all')}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">すべて表示</option>
            <option value="初級">初級</option>
            <option value="中級">中級</option>
            <option value="全対象">全対象</option>
          </select>
        </div>

        <a
          href="/2025/コーチングコンバージ2025%20コンテンツ一覧表.pdf"
          download="コーチングコンバージ2025-コンテンツ一覧表.pdf"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md transition-colors"
        >
          <Download className="h-4 w-4" />
          スケジュールPDF
        </a>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={activeSection}
        onValueChange={handleAccordionChange}
      >
        {/* 初日（日曜日） */}
        <AccordionItem value="day1" id="day1">
          <AccordionTrigger>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
              <h2 className="text-2xl font-bold">6月15日（日）- 初日</h2>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Monitor className="h-4 w-4" />
                <span>オンライン開催</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>10:00～17:00</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ScheduleFirstDay data={firstDay} levelFilter={selectedLevel} />
          </AccordionContent>
        </AccordionItem>

        {/* 平日セッション */}
        <AccordionItem value="weekdays" id="weekdays">
          <AccordionTrigger>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
              <h2 className="text-2xl font-bold">平日セッション（6/16～6/20）</h2>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Monitor className="h-4 w-4" />
                <span>オンライン開催</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>19:00～21:10</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ScheduleWeekdays data={weekdays} levelFilter={selectedLevel} />
          </AccordionContent>
        </AccordionItem>

        {/* 最終日（土曜日） */}
        <AccordionItem value="lastday" id="lastday">
          <AccordionTrigger>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
              <h2 className="text-2xl font-bold">6月21日（土）- 最終日</h2>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Monitor className="h-4 w-4" />
                <span>オンライン</span>
                <MapPin className="h-4 w-4 ml-2" />
                <span>秋葉原UDX（ハイブリッド開催）</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>10:00～18:00</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ScheduleLastDay data={lastDay} levelFilter={selectedLevel} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="text-sm text-muted-foreground mt-8 italic">
        ※スケジュール詳細は、今後一部変更となる可能性がございます。何卒ご理解・ご了承いただけますと幸いです。
      </p>

      <section className="mt-16 text-center py-12 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 rounded-3xl">
        <div className="max-w-2xl mx-auto space-y-6 px-4">
          <h2 className="text-3xl font-bold text-primary drop-shadow-md">チケット購入</h2>
          <p className="text-lg text-gray-800">
            ICF Japan Coaching Converge 2025のチケットをご購入いただけます。
            <br />
            早期割引や複数日程参加の割引もございます。
          </p>
          <div className="pt-4 flex flex-col items-center">
            <a
              href="https://converge2025.peatix.com/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-lg px-8 py-4 rounded-full shadow-lg"
            >
              <span>チケットを購入する</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ticket"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Peatixサイトに移動し、ご希望の参加日程を選択してください
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
