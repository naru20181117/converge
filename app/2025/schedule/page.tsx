'use client'

import { Card } from '@/components/ui/card'
import { TitleWithBackground } from '@/components/TitleWithBackground'
import { Clock, Monitor, MapPin } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useEffect, useState } from 'react'

export default function SchedulePage() {
  const [activeSection, setActiveSection] = useState<string | undefined>(undefined)

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
            <div className="space-y-2 pt-2">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 divide-y">
                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      10:00-10:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        開会式およびICFジャパンからの挨拶・チーム紹介
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        ICFジャパン代表理事からの挨拶
                      </p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      10:30-11:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">ICFグローバル代表からの基調講演</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        代表の自己紹介、ICFグローバルコーチングのトレンド、日本のICFコーチングの可能性と日本のコーチング業界への期待について
                      </p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      11:30-12:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        高橋 浩一氏：「問い」で、相手の心を動かす。
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        ～「無敗営業」の著者と考える、「個」のキャリアを加速させるコミュニケーション戦略～
                      </p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      12:30-13:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">休憩</h4>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      13:30-14:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        ゲスト講演: 「ICFコーチングと多様な業種の連携」
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      14:30-15:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        プロボノチームによるコンテンツ: コーチングセッションの効果と良さ
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      15:30-16:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        ネットワーキングセッション & クロージング
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
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
            <div className="space-y-8 pt-2">
              {/* 6/16(月) */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">6月16日（月）</h3>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1">
                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">共創コーチ®養成スクール</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          コーチングと教育の関係性～ICFコアコンピテンシーと教育～
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">エムビーシーシー合同会社</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          1on1の効果を上げるマインドフルコーチングの基本技能「共感コミュニケーション」
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">ライフコーチワールド</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          ICF認定資格試験の不合格体験から学んだMCC合格への道
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 6/17(火) */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">6月17日（火）</h3>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1">
                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">ホールシステムコーチング</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          可能性へのアプローチ　～幸せ脳・身体～個人の能力開発
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">コーチングプラットフォーム</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          自己基盤を学びＩＣＦコア・コンピテンシーを体現できるコーチとして成長しよう！コア・コンピテンシー『A　基盤を整える』と自己基盤
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">ヘルスコーチ・ジャパン</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          現場で活かせるメンタルコーチング×セルフマネジメントトレーニング（自己理解）
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">ライフコーチワールド</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          ライフコーチング体験ワークショップ
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 6/18(水) */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">6月18日（水）</h3>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1">
                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">銀座コーチングスクール</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          経営コンサルタントが活かすコーチング
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">ホールシステムコーチング</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          チームコーチング～１対１のコーチングを超えて～組織・チームの能力開発Weメソッド®
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">共創コーチ®養成スクール</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Good Coachingを生み出す共創の作り方
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">コーチングプラスワン</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          人生の転機に役立つマインドセットコーチング
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">ヘルスコーチ・ジャパン</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          現場で活かせるヘルスコーチング×セルフマネジメントトレーニング（他者理解）
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 6/19(木) */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">6月19日（木）</h3>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1">
                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        19:00-20:00
                      </div>
                      <div className="border-l-4 border-primary/20 pl-3">
                        <h4 className="text-sm font-semibold">コーチングプラットフォーム</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          自己基盤を学びＩＣＦコア・コンピテンシーを体現できるコーチとして成長しよう！コア・コンピテンシー『B　関係性をともに築く』と自己基盤
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">コーチングプラスワン</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          ～ACC×PCC×MCC　そのコーチング、どう違う?～
                        </p>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t-0 bg-muted/5">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-0">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">銀座コーチングスクール</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          キャリア支援とコーチングがつながる未来：人材開発の新たな可能性
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 6/20(金) */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">6月20日（金）</h3>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1">
                    <div className="p-3 grid grid-cols-[90px_1fr] gap-3 border-t">
                      <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        20:10-21:10
                      </div>
                      <div className="border-l-4 border-secondary/20 pl-3">
                        <h4 className="text-sm font-semibold">エムビーシーシー合同会社</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          あなたのコーチングをUp
                          Dateするマインドフルコーチングの基本技能「共感コミュニケーション」
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
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
            <div className="space-y-2 pt-2">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 divide-y">
                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      10:00-10:30
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">開会と一週間の振り返り</h4>
                      <p className="text-sm text-muted-foreground mt-1">理事からの挨拶</p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      10:30-12:00
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Code&CCチームによるコンテンツ: ICFコーチングの習得意欲の喚起
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      12:00-13:00
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">昼休憩</h4>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      13:00-14:00
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        本間 正人氏： 産官学におけるコーチングの力―社会を変革する新たな可能性
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      14:00-15:00
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        加藤 智博氏： 日本の教育の未来に、コーチングはどう活かせるか？
                        〜教育現場の最前線〜
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      15:00-15:15
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">休憩</h4>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      15:15-16:45
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        プラクティス(コーチング実践) and 初めてのコーチング
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      16:45-17:00
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">クロージングセレモニー</h4>
                    </div>
                  </div>

                  <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      17:00-18:00
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">懇親会・交流タイム(自由参加)</h4>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="text-sm text-muted-foreground mt-8 italic">
        ※スケジュール詳細は、今後一部変更となる可能性がございます。何卒ご理解・ご了承いただけますと幸いです。
      </p>
    </div>
  )
}
