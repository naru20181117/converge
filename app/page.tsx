'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { TitleWithBackground } from '@/components/TitleWithBackground'
import { FileText } from 'lucide-react'

export default function HomePage() {
  const events = [
    {
      year: 2025,
      title: 'コーチング・コンバージ2025 〜connect to X〜',
      date: '2025年6月15日〜21日',
      description:
        '世界最大のコーチング団体ICF日本支部が主催する、コーチング界最大規模のカンファレンス。ハイブリッド開催で、より多くの方々にご参加いただけます。',
      image: '/2025/converge-2025-サムネイル.png',
      status: '終了',
      link: '/2025',
      type: 'event',
    },
    {
      year: 2023,
      title: 'コーチング・コンバージ2023 "COACHING UNITE"',
      date: '2023年6月',
      description: '2023年度のコーチング・コンバージの詳細はアーカイブをご覧ください。',
      image:
        'https://jimdo-storage.freetls.fastly.net/image/375666116/11b5b6a6-5432-488c-ba6f-80419bec7cab.png?quality=80,90&auto=webp&disable=upscale&width=480&height=480%20480w',
      status: '終了',
      link: 'https://www.icfjevent.com/',
      type: 'event',
    },
    {
      year: 2022,
      title: 'コーチング・コンバージ2022 イベントレポート',
      date: '2022年6月',
      description:
        '2022年度に開催されたコーチング・コンバージのイベントレポートをご覧いただけます。コーチングの可能性と未来について、参加者の声とともにお届けします。',
      status: '終了',
      link: 'https://icfjapan.com/post/DBe8O_lA',
      type: 'report',
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <TitleWithBackground title="ICFジャパン コーチング・コンバージ" backgroundText="Converge" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          ICFジャパンが主催するカンファレンス「コーチング・コンバージ」の歴代イベント一覧です。
          各年のイベントページでは、開催内容や過去の開催情報をご覧いただけます。
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link
            href={event.link}
            key={event.year}
            className="group"
            target={event.link.startsWith('http') ? '_blank' : undefined}
            rel={event.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
              {event.type === 'event' && event.image ? (
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority={event.year === 2025}
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {event.status}
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-primary/60" />
                  <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {event.status}
                  </div>
                </div>
              )}
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-muted-foreground">{event.date}</p>
                </div>
                <p>{event.description}</p>
                {event.type === 'report' && (
                  <div className="flex items-center gap-2 text-primary">
                    <FileText className="w-4 h-4" />
                    <span>イベントレポートを読む</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
