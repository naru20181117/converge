export const metadata = {
  title: 'ICFジャパン コーチング・コンバージ2025 〜connect to X〜',
  description:
    '世界最大のコーチング団体ICF日本支部が主催する、コーチング界最大規模のカンファレンス。ハイブリッド開催で、より多くの方々にご参加いただけます。',
  openGraph: {
    title: 'ICFジャパン コーチング・コンバージ2025 〜connect to X〜',
    description:
      '世界最大のコーチング団体ICF日本支部が主催する、コーチング界最大規模のカンファレンス。ハイブリッド開催で、より多くの方々にご参加いただけます。',
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
      '世界最大のコーチング団体ICF日本支部が主催する、コーチング界最大規模のカンファレンス。ハイブリッド開催で、より多くの方々にご参加いただけます。',
    images: ['/2025/converge-2025-サムネイル.png'],
  },
}

export default function ConferenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
