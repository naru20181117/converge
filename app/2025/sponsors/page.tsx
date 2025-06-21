import { Card, CardContent } from '@/components/ui/card'
import { TitleWithBackground } from '@/components/TitleWithBackground'

export default function SponsorsPage() {
  return (
    <div className="space-y-8">
      <TitleWithBackground title="スポンサー" backgroundText="sponsors" />
      <div className="grid gap-6 md:grid-cols-3">
        {/* プレースホルダースポンサー */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6 aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">Coming Soon...</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl my-12">
        <div className="max-w-2xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            スポンサー様へ感謝
          </h2>
          <p className="text-lg">
            コーチング・コンバージ2025を支えていただいたスポンサーの皆様に、
            <br />
            心より感謝申し上げます。
          </p>
          <p className="text-base text-gray-700">
            皆様のご支援により、素晴らしいイベントを開催することができました。
          </p>
        </div>
      </section>
    </div>
  )
}
