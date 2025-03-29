export const metadata = {
  title: 'ICFジャパン コーチング・コンバージ2025 〜connect to X〜',
  description:
    'ICFジャパン主催の最新カンファレンス。プロフェッショナルコーチや組織開発の実践者が集う、日本最大級の学びと出会いの場',
  openGraph: {
    title: 'ICFジャパン コーチング・コンバージ2025 〜connect to X〜',
    description:
      'ICFジャパン主催の最新カンファレンス。プロフェッショナルコーチや組織開発の実践者が集う、日本最大級の学びと出会いの場',
    url: 'https://icf-japan-converge.vercel.app/2025',
    siteName: 'ICFジャパン コーチング・コンバージ',
    images: [
      {
        url: '/2025/converge-2025-サムネイル.png',
        width: 1200,
        height: 630,
        alt: 'コーチング・コンバージ2025 〜connect to X〜',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICFジャパン コーチング・コンバージ2025 〜connect to X〜',
    description:
      'ICFジャパン主催の最新カンファレンス。プロフェッショナルコーチや組織開発の実践者が集う、日本最大級の学びと出会いの場',
    images: ['/2025/converge-2025-サムネイル.png'],
  },
}

export default function ConferenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
