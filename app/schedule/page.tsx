import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SchedulePage() {
  const days = [
    { date: '6月15日（日）', type: 'オンライン' },
    { date: '6月16日（月）', type: 'オンライン' },
    { date: '6月17日（火）', type: 'オンライン' },
    { date: '6月18日（水）', type: 'オンライン' },
    { date: '6月19日（木）', type: 'オンライン' },
    { date: '6月20日（金）', type: 'オンライン' },
    { date: '6月21日（土）', type: 'オフライン@秋葉原UDX' },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">タイムスケジュール</h1>
      <p className="text-lg text-muted-foreground">詳細なスケジュールは随時更新いたします。</p>
      <div className="space-y-6">
        {days.map((day) => (
          <Card key={day.date}>
            <CardHeader>
              <CardTitle>{day.date}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{day.type}</p>
              <p className="mt-4">プログラム詳細は後日公開予定</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
