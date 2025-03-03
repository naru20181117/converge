import Image from 'next/image'
import { Link2 } from 'lucide-react'
import Link from 'next/link'
import { TitleWithBackground } from '../../../../components/TitleWithBackground'

type Staff = {
  name: string
  image: string
  url?: string
  message: string
}

const staffs: Staff[] = [
  {
    name: '林 充宏(みっちー)',
    image: '/2025/staff/hayashi.jpg',
    url: 'https://crescer-mcc.com/',
    message: 'よりよいコミュニティーに「つながる」場',
  },
  {
    name: 'なる',
    image: '/2025/staff/naru.jpg',
    url: 'https://www.brighty.site/naru',
    message: '「コーチングを民主化する」を掲げて活動中！',
  },
  {
    name: 'さいき さちこ',
    image: '/2025/staff/saiki.jpg',
    message: '現地ボランティアスタッフ担当頑張ります！',
  },
  {
    name: '佐藤 大樹',
    image: '/2025/staff/sato.jpg',
    url: 'https://www.facebook.com/taiju.sato',
    message: '日本のコーチングを盛り上げる1週間に！',
  },
  {
    name: '福澤 博貴',
    image: '/2025/staff/fukuzawa.jpeg',
    url: 'https://icfjapan.notion.site/41855d82db694157b8de52203f2cf658?p=e46847df2dc044cab98467012de36bb8&pm=s',
    message: 'コーチングLOVE高め',
  },
  {
    name: '松丸 海太',
    image: '/2025/staff/matsumaru.jpg',
    url: 'https://www.brighty.site/maru',
    message: 'コーチングを一緒に盛り上げましょう！',
  },
  {
    name: '栂村 雅美',
    image: '/2025/staff/tsugamura.jpeg',
    url: 'https://www.thecoaches.co.jp/find_coach/tsugamura_masami/',
    message: 'ココロが満たされる豊かな場に。',
  },
  {
    name: '杉嶋 奈津子（なっち）',
    image: '/2025/staff/sugishima.jpg',
    url: 'https://coacham.biz/',
    message: '私たち自らめいっぱい楽しみましょう～🥰',
  },
  {
    name: 'コットン',
    image: '/2025/staff/cotton.png',
    message: 'ONENESS！！',
  },
  {
    name: 'そでこ（袖川航平）',
    image: '/2025/staff/sodeko.png',
    url: 'https://x.com/sodekooo',
    message: 'コーチングが最高に盛り上がる1週間に。',
  },
  {
    name: 'あゆえもん♪(藤生あゆみ)',
    image: '/2025/staff/ayuemon.jpg',
    message: '私たちでコーチングのある未来創造していきましょう',
  },
  {
    name: '藤原 悠兵',
    image: '/2025/staff/fujiwara.jpg',
    url: 'https://note.com/wara33',
    message: 'ひとり一人の可能性を解き放つ',
  },
  {
    name: '須藤 拓',
    image: '/2025/staff/sudo.png',
    url: 'https://x.com/ssttstt',
    message: '充実した時間にしましょう！',
  },
]

export const StaffSection = () => {
  return (
    <section>
      <TitleWithBackground title="スタッフ" backgroundText="staff" />
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 px-4 sm:px-8">
        {staffs.map((staff) => (
          <div key={staff.name} className="text-center">
            {staff.url ? (
              <Link
                href={staff.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative mb-4 sm:mb-6 w-[120px] sm:w-[140px] mx-auto">
                  <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-full ring-1 ring-gray-200">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
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
            ) : (
              <div className="block group">
                <div className="relative mb-4 sm:mb-6 w-[120px] sm:w-[140px] mx-auto">
                  <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-full ring-1 ring-gray-200">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-full" />
                    <p className="relative text-white text-center text-sm sm:text-base px-4 transition-transform duration-300 group-hover:scale-100 scale-90">
                      {staff.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="font-medium text-sm sm:text-base tracking-wide">{staff.name}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
