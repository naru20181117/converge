import { Card, CardContent } from '@/components/ui/card'
import { TitleWithBackground } from '@/components/TitleWithBackground'
import { Button } from '@/components/ui/button'

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
            スポンサー募集
          </h2>
          <p className="text-lg">
            コーチング・コンバージ2025のスポンサーとして、共に新しいコーチングの未来を創造しませんか？
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-lg px-8 py-6 shadow-lg"
            >
              <a
                href="https://forms.gle/UyUgknsaoq1bHvgn6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                スポンサーについて問い合わせる
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
