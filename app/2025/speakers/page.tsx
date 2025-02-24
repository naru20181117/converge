import { TitleWithBackground } from '@/components/TitleWithBackground'
import { StaffSection } from './_components/StaffSection'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

type Speaker = {
  name: string
  role: string
  title: string
  organization: string
  image: string
  description: string
  datetime: {
    date: string
    time: string
  }
}

export default function SpeakersPage() {
  const speakers: Speaker[] = [
    {
      name: '高橋 浩一',
      role: 'TORiX株式会社 代表取締役',
      title:
        '「問い」で、相手の心を動かす。～「無敗営業」の著者と考える、「個」のキャリアを加速させるコミュニケーション戦略～',
      organization: 'TORiX株式会社',
      image: '/2025/speakers/takahashi.jpg',
      description:
        '東京大学経済学部卒業。外資系戦略コンサルティング会社を経て25歳で起業、企業研修のアルー株式会社に創業参画（取締役副社長）。事業と組織を統括する立場として、創業から6年で70名までの成長を牽引。同社の上場に向けた事業基盤と組織体制を作る。\n\n2011年にTORiX株式会社を設立し、代表取締役に就任。これまで4万人以上の営業強化支援に携わる。\n\nコンペ8年間無敗の経験を基に、2019年『無敗営業』、2020年に続編となる『無敗営業 チーム戦略』(ともに日経BP)を出版、シリーズ累計10万部突破。2024年4月から東京学芸大学の客員准教授も務め、「"教育"と"営業"の交差点」を探究している。',
      datetime: {
        date: '6月15日（土）',
        time: '11:30',
      },
    },
    {
      name: '加藤 智博',
      role: '立命館守山中学校・高等学校教諭',
      title: '日本の教育の未来に、コーチングはどう活かせるか？ 〜教育現場の最前線〜',
      organization: '立命館守山中学校・高等学校',
      image: '/2025/speakers/katou.jpeg',
      description:
        '2020年3月まで学校教育改革で注目を集めた東京・千代田区立麹町中学校で、工藤勇一元校長のもと生活指導主任と学年主任を兼務。注目を集めた学校教育改革の現場で、中心的役割を担う。2020年4月から立命館守山中学校・高等学校に実践の場を移す。\n\n生徒指導・生徒支援にコーチング的なアプローチを導入し、子どもの「自律」や「主体性」、「自己決定する力」を育む教育実践を行っている。他にも、脳神経科学やマインドフルネス、ポジティブ心理学等の知見を教育現場に導入。また、学校改革や組織開発・組織変革に関する専門性も併せ持つ。\n\n共著に「自律と尊重を育む学校」（時事通信社）がある。',
      datetime: {
        date: '6月21日（日）',
        time: '14:00',
      },
    },
  ]

  return (
    <div className="space-y-40">
      <section>
        <TitleWithBackground title="登壇者" backgroundText="speakers" />
        <div className="mt-12 space-y-24">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="relative w-full aspect-square mb-6">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{speaker.datetime.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{speaker.datetime.time}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{speaker.name}</h3>
                    <p className="text-xl font-medium text-primary">{speaker.role}</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">講演テーマ</h4>
                    <p className="text-lg leading-relaxed">{speaker.title}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-primary">プロフィール</h4>
                    {speaker.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <StaffSection />
    </div>
  )
}
