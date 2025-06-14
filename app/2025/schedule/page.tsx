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
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4 sm:px-6">
      <TitleWithBackground title="タイムスケジュール" backgroundText="schedule" />
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
        各日のプログラム詳細です。初日と最終日は終日開催、平日は夜間のセッションとなります。
      </p>

      <div className="bg-primary/10 p-3 sm:p-4 rounded-lg border border-primary/20 mb-4 sm:mb-6">
        <p className="font-medium flex items-start sm:items-center gap-2">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="font-bold text-sm sm:text-base leading-relaxed">
            <span className="text-primary">特典：</span>
            一般・U24チケットは全セッションのアーカイブ視聴が可能です
          </span>
        </p>
      </div>

      <div className="mb-4 sm:mb-6 flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label htmlFor="level-filter" className="text-sm font-medium whitespace-nowrap">
              対象レベルで絞り込み
            </label>
            <select
              id="level-filter"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as SessionLevel | 'all')}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
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
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
          >
            <Download className="h-4 w-4" />
            スケジュールPDF
          </a>
        </div>
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
          <AccordionTrigger className="py-4 px-2">
            <div className="flex flex-col gap-2 text-left w-full">
              <h2 className="text-xl sm:text-2xl font-bold">6月15日（日）- 初日</h2>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>オンライン開催</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>10:00～17:00</span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ScheduleFirstDay data={firstDay} levelFilter={selectedLevel} />
          </AccordionContent>
        </AccordionItem>

        {/* 平日セッション */}
        <AccordionItem value="weekdays" id="weekdays">
          <AccordionTrigger className="py-4 px-2">
            <div className="flex flex-col gap-2 text-left w-full">
              <h2 className="text-xl sm:text-2xl font-bold">平日セッション（6/16～6/20）</h2>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>オンライン開催</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>19:00～21:10</span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ScheduleWeekdays data={weekdays} levelFilter={selectedLevel} />
          </AccordionContent>
        </AccordionItem>

        {/* 最終日（土曜日） */}
        <AccordionItem value="lastday" id="lastday">
          <AccordionTrigger className="py-4 px-2">
            <div className="flex flex-col gap-2 text-left w-full">
              <h2 className="text-xl sm:text-2xl font-bold">6月21日（土）- 最終日</h2>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>オンライン</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">秋葉原UDX（ハイブリッド開催）</span>
                  <span className="sm:hidden">秋葉原UDX</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>10:00～18:00</span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ScheduleLastDay data={lastDay} levelFilter={selectedLevel} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 italic leading-relaxed">
        ※スケジュール詳細は、今後一部変更となる可能性がございます。何卒ご理解・ご了承いただけますと幸いです。
      </p>

      <section className="mt-12 sm:mt-16 text-center py-8 sm:py-12 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 rounded-2xl sm:rounded-3xl">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary drop-shadow-md">
            チケット購入
          </h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            ICF Japan Coaching Converge 2025のチケットをご購入いただけます。
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>早期割引や複数日程参加の割引もございます。
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col items-center">
            <a
              href="https://converge2025.peatix.com/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg"
            >
              <span>チケットを購入する</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ticket sm:w-6 sm:h-6"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 leading-relaxed">
              Peatixサイトに移動し、ご希望の参加日程を選択してください
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
