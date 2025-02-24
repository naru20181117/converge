import Image from 'next/image'
import { Link2 } from 'lucide-react'
import Link from 'next/link'
import { TitleWithBackground } from '../../../../components/TitleWithBackground'

type Staff = {
  name: string
  image: string
  url: string
  message: string
}

const staffs: Staff[] = [
  {
    name: '鈴木 一郎',
    image: 'https://i.pravatar.cc/200?img=3',
    url: 'https://www.facebook.com/ICFJapan',
    message: 'コーチングで世界をより良く変える',
  },
  {
    name: '田中 美咲',
    image: 'https://i.pravatar.cc/200?img=4',
    url: 'https://x.com/ICF_JAPAN',
    message: '可能性を広げ、成長を支援する',
  },
  {
    name: '佐々木 健一',
    image: 'https://i.pravatar.cc/200?img=5',
    url: 'https://www.instagram.com/icf.japan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    message: '技術の力で未来を創造する',
  },
  {
    name: '山田 優子',
    image: 'https://i.pravatar.cc/200?img=16',
    url: 'https://www.facebook.com/ICFJapan',
    message: '共に成長する喜びを分かち合う',
  },
  {
    name: '中村 翔太',
    image: 'https://i.pravatar.cc/200?img=7',
    url: 'https://x.com/ICF_JAPAN',
    message: '新しい可能性を探求する',
  },
  {
    name: '小林 美穂',
    image: 'https://i.pravatar.cc/200?img=8',
    url: 'https://www.instagram.com/icf.japan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    message: '心に寄り添うサポートを',
  },
  {
    name: '加藤 隆司',
    image: 'https://i.pravatar.cc/200?img=9',
    url: 'https://www.facebook.com/ICFJapan',
    message: '挑戦を応援し続ける',
  },
  {
    name: '渡辺 真理',
    image: 'https://i.pravatar.cc/200?img=10',
    url: 'https://x.com/ICF_JAPAN',
    message: '夢の実現をサポート',
  },
  {
    name: '斎藤 健一',
    image: 'https://i.pravatar.cc/200?img=11',
    url: 'https://www.instagram.com/icf.japan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    message: '一歩先の未来を創造する',
  },
  {
    name: '高橋 由美',
    image: 'https://i.pravatar.cc/200?img=12',
    url: 'https://www.facebook.com/ICFJapan',
    message: '可能性は無限大',
  },
  {
    name: '松本 大輔',
    image: 'https://i.pravatar.cc/200?img=13',
    url: 'https://x.com/ICF_JAPAN',
    message: '共に歩む、共に育つ',
  },
  {
    name: '井上 恵子',
    image: 'https://i.pravatar.cc/200?img=14',
    url: 'https://www.instagram.com/icf.japan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    message: '明日への希望を共に',
  },
  {
    name: '木村 達也',
    image: 'https://i.pravatar.cc/200?img=17',
    url: 'https://www.facebook.com/ICFJapan',
    message: '一人一人の成長を信じて',
  },
]

export const StaffSection = () => {
  return (
    <section>
      <TitleWithBackground title="スタッフ" backgroundText="staff" />
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 px-4 sm:px-8">
        {staffs.map((staff) => (
          <div key={staff.name} className="text-center">
            <Link
              href={staff.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative mb-4 sm:mb-6 w-[120px] sm:w-[140px] mx-auto">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  width={140}
                  height={140}
                  className="rounded-full ring-1 ring-gray-200 w-full h-auto aspect-square transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-full" />
                  <p className="relative text-white text-center text-sm sm:text-base px-4 transition-transform duration-300 group-hover:scale-100 scale-90">
                    {staff.message}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1.5 group-hover:text-primary transition-colors">
                <p className="font-medium text-sm sm:text-base tracking-wide">{staff.name}</p>
                <Link2 className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
