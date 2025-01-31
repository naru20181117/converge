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
    </div>
  )
}
