'use client'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TitleWithBackground } from '@/components/TitleWithBackground'
import { CountdownTimer } from '@/components/CountdownTimer'
import { Clock, Monitor, MapPin, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <div className="relative py-8 px-4 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <Image
            src="/2025/icf-converge-2025.png"
            alt="ICF Japan Coaching Converge 2025"
            width={450}
            height={450}
            className="rounded-lg object-cover z-10"
            priority
          />
          <div className="z-10 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary drop-shadow-md">
              コーチング・コンバージ2025
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 drop-shadow-sm">
              〜connect to X〜
            </h2>
            <p className="text-gray-800 font-medium drop-shadow-sm">
              世界最大のコーチング団体ICF日本支部主催
              <br />
              コーチング界最大規模のカンファレンス
            </p>
          </div>
        </div>
      </div>

      <CountdownTimer targetDate={new Date('2025-06-15T10:00:00')} />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">開催概要</h2>
              <div className="flex justify-start">
                <Link
                  href="/2025/schedule"
                  className="text-sm text-primary flex items-center gap-1 hover:underline"
                >
                  タイムスケジュールを確認
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <p>日時：2025年6月15日（日）〜 6月21日（土）</p>
            <p>形式：ハイブリッド開催</p>
            <div className="grid gap-2 mt-3">
              <Link href="/2025/schedule#day1" className="block">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-2.5 rounded-md border-l-4 border-primary shadow-sm flex items-center hover:bg-primary/20 transition-colors">
                  <div className="bg-primary text-white rounded-md w-10 h-10 flex items-center justify-center font-bold mr-3 flex-shrink-0 shadow-sm">
                    6/15
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm flex items-center">
                      <span className="mr-2">日曜日</span>
                      <span className="text-xs px-1.5 py-0.5 bg-white/80 rounded text-primary font-medium">
                        DAY 1
                      </span>
                    </div>
                    <div className="flex items-center text-xs font-medium text-gray-700">
                      <Clock className="text-primary h-3.5 w-3.5 mr-1" />
                      10:00〜17:00
                      <span className="mx-1.5">|</span>
                      <Monitor className="text-primary h-3.5 w-3.5 mr-1" />
                      オンライン
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/2025/schedule#weekdays" className="block">
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-2.5 rounded-md border-l-4 border-secondary shadow-sm flex items-center hover:bg-secondary/20 transition-colors">
                  <div className="bg-secondary text-white rounded-md w-10 h-10 flex items-center justify-center font-bold mr-3 flex-shrink-0 shadow-sm text-xs">
                    6/16
                    <br />
                    〜20
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm flex items-center">
                      <span className="mr-2">平日5日間</span>
                      <span className="text-xs px-1.5 py-0.5 bg-white/80 rounded text-secondary font-medium">
                        WEEK
                      </span>
                    </div>
                    <div className="flex items-center text-xs font-medium text-gray-700">
                      <Clock className="text-secondary h-3.5 w-3.5 mr-1" />
                      19:00〜21:10
                      <span className="mx-1.5">|</span>
                      <Monitor className="text-secondary h-3.5 w-3.5 mr-1" />
                      オンライン
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/2025/schedule#lastday" className="block">
                <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-2.5 rounded-md border-l-4 border-accent shadow-sm flex items-center hover:bg-accent/20 transition-colors">
                  <div className="bg-accent text-white rounded-md w-10 h-10 flex items-center justify-center font-bold mr-3 flex-shrink-0 shadow-sm">
                    6/21
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm flex items-center">
                      <span className="mr-2">土曜日</span>
                      <span className="text-xs px-1.5 py-0.5 bg-white/80 rounded text-accent font-medium">
                        FINAL
                      </span>
                    </div>
                    <div className="flex items-center text-xs font-medium text-gray-700">
                      <Clock className="text-accent h-3.5 w-3.5 mr-1" />
                      10:00〜18:00
                      <span className="mx-1.5">|</span>
                      <MapPin className="text-accent h-3.5 w-3.5 mr-1" />
                      ハイブリッド
                    </div>
                    <div className="text-xs mt-1 text-gray-700 font-medium">
                      オンライン & オフライン（秋葉原UDXギャラリー）
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-bold">参加対象</h2>
            <p className="text-gray-700 font-medium">定員：最大1,000名</p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li>コーチの方</li>
              <li>コーチングを学んでみたい・受けてみたい方</li>
              <li>社内で、人事や組織開発を担当されている方</li>
              <li>社内で、現場のチームマネジメントをされている方</li>
              <li>人材育成、組織開発、HRtechなど、HR業界関係者の方</li>
              <li>医療や士業、教員、コンサルタントなど専門職の方</li>
              <li>学生の方</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">主な内容・見どころ</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">スペシャルゲスト登壇</h3>
              <p>
                ICF Global本部よりスペシャルゲストが登壇予定！
                世界の最前線で活躍するコーチや専門家によるセッションをお届けします。
              </p>
              <div className="flex justify-start mt-4">
                <Link
                  href="/2025/speakers"
                  className="text-md text-primary flex items-center gap-1 hover:underline"
                >
                  登壇者を確認する
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">ハイブリッド開催</h3>
              <p>
                平日のオンライン枠では、コーチングの最新トレンドや実践的な知見など、豊富なコンテンツをご用意。その集大成として、最終日は秋葉原UDXギャラリーにて対面でのネットワーキングと交流の場を設けています。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">10,000人物語</h3>
              <p>
                ICFジャパンでは、グローバル基準のコーチング資格を持つ「ICFコーチ10,000人」を目標に掲げ、日本がアメリカに次ぐ世界2位のコーチング大国となることを目指しています。
              </p>
              <p>
                今回、その1つのきっかけとして、コーチングが様々な他業種・他職種とつながり、社会をよりよくする可能性が広がっていくことを願い、本コンバージを開催いたします。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center py-12 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 rounded-3xl my-12">
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-bold text-primary drop-shadow-md">チケット価格</h2>
          <p className="text-lg text-gray-800 mb-6">
            早期割引や会員割引をご利用いただけます。お早めのご購入がお得です。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">種別</th>
                  <th className="px-4 py-3 text-center">締め切り</th>
                  <th className="px-4 py-3 text-center">価格</th>
                  <th className="px-4 py-3 text-center">ICF会員価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200 hover:bg-primary/5 transition-colors">
                  <td className="px-4 py-4 font-medium">
                    <div>超早割・一般</div>
                  </td>
                  <td className="px-4 py-4 text-center">3/31</td>
                  <td className="px-4 py-4 text-center font-bold">¥9,800</td>
                  <td className="px-4 py-4 text-center font-bold text-primary">¥4,800</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200 hover:bg-primary/5 transition-colors">
                  <td className="px-4 py-4 font-medium">
                    <div>早割・一般</div>
                  </td>
                  <td className="px-4 py-4 text-center">5/14</td>
                  <td className="px-4 py-4 text-center font-bold">¥12,800</td>
                  <td className="px-4 py-4 text-center font-bold text-primary">¥7,800</td>
                </tr>
                <tr className="bg-white border-b border-gray-200 hover:bg-primary/5 transition-colors">
                  <td className="px-4 py-4 font-medium">一般</td>
                  <td className="px-4 py-4 text-center">6/8</td>
                  <td className="px-4 py-4 text-center font-bold">¥14,800</td>
                  <td className="px-4 py-4 text-center font-bold text-primary">¥9,800</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-primary/5 transition-colors">
                  <td className="px-4 py-4 font-medium">U24</td>
                  <td className="px-4 py-4 text-center">6/8</td>
                  <td className="px-4 py-4 text-center font-bold">¥5,000</td>
                  <td className="px-4 py-4 text-center font-bold text-primary">無料</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-primary/10 p-3 rounded-lg border border-primary/20">
            <p className="font-medium flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-bold">
                <span className="text-primary">特典：</span>
                全セッションのアーカイブ視聴が可能です
              </span>
            </p>
          </div>

          <div className="text-sm text-gray-600 mt-4 px-4">
            <p>※価格はすべて税込です</p>
            <p>※U24は24歳以下の方が対象です（学生証など年齢確認できる書類が必要）</p>
            <p>
              ※ICF会員は会員割引が適用されます（
              <a href="/2025/questions" className="text-primary hover:underline">
                適用方法はこちら
              </a>
              ）
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-16 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 rounded-3xl my-12">
        <div className="max-w-2xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-bold text-primary drop-shadow-md">参加登録</h2>
          <p className="text-lg text-gray-800 drop-shadow-sm">
            チケットの購入、最新情報、クーポン受け取りはすべて公式LINEより可能です！
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-lg px-8 py-6 shadow-lg"
            >
              <a
                href="https://lin.ee/pyGQFYZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                チケット購入はLINEから
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="text-center space-y-4 py-6">
        <TitleWithBackground title="ICF ジャパンについて" backgroundText="ICF JAPAN" />
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex flex-col items-center gap-8">
              <Image
                src="/images/icf_banner.webp"
                alt="ICF ジャパン"
                width={400}
                height={250}
                className="rounded-lg object-contain"
                priority
              />
              <div className="text-left space-y-4 w-full">
                <p>
                  2008年、主に日本在住の外国人コーチをサポートする任意団体として誕生した、ICF
                  ジャパン。
                  <br />
                  2013年、世界標準のコーチングを日本に普及させるため、
                  非営利型一般社団法人国際コーチ連盟日本支部（後に国際コーチング連盟日本支部）として生まれ変わり、現在に至ります。
                </p>
                <p>
                  ICF ジャパンは、日本では唯一のICF公式認定支部として、グローバルな視点を持ち続け、
                  プロコーチに対してICFが発信する有益な情報の日本語での提供、プロコーチが垣根なく参加できるネットワーク作り、
                  コーチング業界外へのコーチング認知拡大の活動など、ビジネスとしてコーチングを行う方々のための支援活動を行っています。
                </p>
                <p>
                  「コーチングを社会の共通言語に。」を理念に掲げ、日本のコーチング業界のプレゼンスを高め、
                  存在価値を高めていくために世界に発信する活動にも取り組んでいます。
                </p>
                <p>
                  <a
                    href="https://icfjapan.com/"
                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    詳しい情報はこちら
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center space-y-4 py-6">
        <TitleWithBackground title="ICFについて" backgroundText="ICF" />
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="bg-muted/50 p-4 rounded-xl">
            <div className="aspect-video overflow-hidden rounded-lg">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=oQAFJK96MRc"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/images/ICF_30Years_Icon.png"
                alt="ICF30周年記念"
                width={200}
                height={150}
                className="rounded-lg object-contain"
                priority
              />
              <div className="text-left space-y-4">
                <p>
                  国際コーチング連盟(ICF)は、世界158カ国、59,627人の会員が所属する、世界最大の非営利型コーチング組織です。
                </p>
                <p>
                  「A world where coaching is integral to transforming
                  societies」をビジョンに掲げ、コーチングの普及と、それに伴う社会貢献を目指して活動しています。
                </p>
                <p>2025年は、国際コーチング連盟（ICF）の創立30周年にあたります。</p>
                <p>
                  <a
                    href="https://coachingfederation.org/"
                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    詳しい情報はこちら
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
