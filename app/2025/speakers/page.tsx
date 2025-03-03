import { TitleWithBackground } from '@/components/TitleWithBackground'
import { StaffSection } from './_components/StaffSection'
import Image from 'next/image'
import { Calendar, Clock, Globe } from 'lucide-react'
import Link from 'next/link'

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
  url?: string
  sns_url?: string
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
        date: '6月15日（日）',
        time: '11:30',
      },
      url: 'https://www.torix-corp.com/',
      sns_url: 'https://x.com/takahashikoichi',
    },
    {
      name: '本間 正人',
      role: '「学習学」提唱者、京都芸術大学 元・副学長',
      title: '（仮）「産官学におけるコーチングの力―社会を変革する新たな可能性」',
      organization: 'Learnology',
      image: '/2025/speakers/honnma.jpg',
      description:
        '「学習学」の提唱者。京都芸術大学 元・副学長。1959年東京都中野区生まれ。松下政経塾3期生として入塾し、松下幸之助の経営哲学を学び、国連、内外政策研究会で実務研修。その後、ミネソタ大学から成人教育学Ph.D.取得。日本でコーチングやキャリア教育の普及、地域の教育力向上などにつとめてきた。\n\n「研修講師塾」「調和塾」を主宰し、誰もが最新学習歴を更新し続ける「学習する地球社会のビジョン」構築を目指す。NHK教育テレビでビジネス英語講師、民放ニュース番組のコメンテーターとしても活動。著書は80冊。単独著書１冊目は『良い政治家の見分け方』（ディスカヴァー21、1996年）。最新刊は『100年学習時代』（BOW BOOKS）。',
      datetime: {
        date: '6月21日（土）',
        time: '13:00',
      },
      url: 'https://learnology.co.jp/',
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
        date: '6月21日（土）',
        time: '14:00',
      },
    },
  ]

  // 日付でスピーカーをグループ化
  const speakersByDate = speakers.reduce(
    (acc, speaker) => {
      const date = speaker.datetime.date
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(speaker)
      return acc
    },
    {} as Record<string, Speaker[]>
  )

  // 日付順にソート（6月15日、6月21日など）
  const sortedDates = Object.keys(speakersByDate).sort((a, b) => {
    const dateA = parseInt(a.match(/\d+/)![0])
    const dateB = parseInt(b.match(/\d+/)![0])
    return dateA - dateB
  })

  return (
    <div className="space-y-40">
      <section>
        <TitleWithBackground title="登壇者" backgroundText="speakers" />

        <div className="mt-12 space-y-16">
          {sortedDates.map((date) => (
            <div key={date} className="space-y-12">
              <div className="relative mb-8">
                <div className="flex items-center">
                  <h2 className="text-3xl font-bold text-primary bg-gradient-to-r from-primary/10 to-transparent px-6 py-2 rounded-lg shadow-sm relative z-10">
                    {date}
                  </h2>
                  <div className="h-0.5 bg-primary/30 flex-grow ml-4"></div>
                </div>
              </div>

              <div className="space-y-10">
                {speakersByDate[date]
                  // 時間順にソート
                  .sort((a, b) => {
                    const timeA = parseInt(a.datetime.time.replace(':', ''))
                    const timeB = parseInt(b.datetime.time.replace(':', ''))
                    return timeA - timeB
                  })
                  .map((speaker) => (
                    <div
                      key={speaker.name}
                      className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-primary"
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/4">
                          <div className="relative w-full aspect-square mb-4 group">
                            {speaker.sns_url && (
                              <Link
                                href={speaker.sns_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                  <div className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <Image
                                  src={speaker.image}
                                  alt={speaker.name}
                                  fill
                                  className="object-cover rounded-xl shadow-lg"
                                />
                              </Link>
                            )}
                            {!speaker.sns_url && speaker.url && (
                              <Link href={speaker.url} target="_blank" rel="noopener noreferrer">
                                <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                  <div className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                                    <Globe className="w-5 h-5" />
                                  </div>
                                </div>
                                <Image
                                  src={speaker.image}
                                  alt={speaker.name}
                                  fill
                                  className="object-cover rounded-xl shadow-lg"
                                />
                              </Link>
                            )}
                            {!speaker.sns_url && !speaker.url && (
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover rounded-xl shadow-lg"
                              />
                            )}
                          </div>
                          <div className="space-y-2 bg-primary/5 p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-primary">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">{speaker.datetime.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm font-medium">{speaker.datetime.time}</span>
                            </div>
                            {speaker.url && (
                              <div className="flex items-center gap-2 text-primary">
                                <Globe className="w-4 h-4" />
                                <Link
                                  href={speaker.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm hover:underline"
                                >
                                  {speaker.url}
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="lg:w-3/4 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                            <p className="text-lg font-medium text-primary">{speaker.role}</p>
                          </div>
                          <div className="bg-primary/5 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-primary mb-1">講演テーマ</h4>
                            <p className="text-base leading-relaxed">{speaker.title}</p>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-lg font-bold text-primary">プロフィール</h4>
                            {speaker.description.split('\n\n').map((paragraph, i) => (
                              <p key={i} className="text-sm leading-relaxed text-gray-700">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <StaffSection />
    </div>
  )
}
