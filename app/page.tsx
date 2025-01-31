'use client'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TitleWithBackground } from '@/components/TitleWithBackground'
import { CountdownTimer } from '@/components/CountdownTimer'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Image
        src="/2025/icf-converge-2025.png"
        alt="ICF Japan Coaching Converge 2025"
        width={500}
        height={400}
        className="rounded-lg w-full object-cover max-w-3xl mx-auto"
        priority
      />

      <CountdownTimer targetDate={new Date('2025-06-15T10:00:00')} />

      <section className="space-y-4">
        <h1 className="text-4xl font-bold">コーチング・コンバージ2025 〜connect to X〜</h1>
        <p className="text-lg text-muted-foreground">
          世界最大のコーチング団体であるICF（国際コーチング連盟）日本支部が主催する、コーチング界最大規模のカンファレンス「コーチング・コンバージ2025」を開催いたします。
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-bold">開催概要</h2>
            <p>日時：2025年6月15日（日）〜 6月21日（土） 10:00-17:00</p>
            <p>形式：ハイブリッド開催</p>
            <ul className="list-disc list-inside">
              <li>6月15日〜6月20日：オンライン開催</li>
              <li>6月21日：秋葉原UDXギャラリー（オフライン）</li>
            </ul>
            <p>定員：最大1,000名</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-bold">参加対象</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>コーチの方</li>
              <li>コーチングを学んでみたい方</li>
              <li>コーチングを受けてみたい方</li>
              <li>学生の方</li>
              <li>人事や組織開発を担当されている方</li>
              <li>医療や士業、コンサルタントなど専門家の方</li>
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
                {'世界の最前線で活躍するコーチや専門家によるセッションをお届けします。'}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">ハイブリッド開催</h3>
              <p>
                オンラインで学びを深め、最終日は秋葉原UDXギャラリーにてネットワーキングや対面での交流をお楽しみいただけます。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">10,000人物語</h3>
              <p>
                ICFコーチングを通じて、多くの方が「自分ならではの未来」を切り拓いていく物語を紡ぐ取り組みをスタートします。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center space-y-4 py-6">
        <TitleWithBackground title="ICFについて" backgroundText="ICF" />
        <div className="mx-auto max-w-4xl bg-muted/50 p-4 rounded-xl">
          <div className="aspect-video overflow-hidden rounded-lg">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=oQAFJK96MRc"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">参加登録</h2>
        <p>最新情報の配信やチケット販売開始のご案内をお受け取りいただけます。</p>
        <Button size="lg" asChild>
          <a href="https://forms.gle/BySAsHjWZhQR2t7QA" target="_blank" rel="noopener noreferrer">
            ウェイティングリストに登録する
          </a>
        </Button>
      </section>
    </div>
  )
}
