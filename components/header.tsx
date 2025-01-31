import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            ICF Converge 2025
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
            <Link href="/sponsors" className="hover:text-primary">
              スポンサー
            </Link>
            <Link href="/schedule" className="hover:text-primary">
              タイムスケジュール
            </Link>
            <Link href="/policy" className="hover:text-primary">
              ポリシー
            </Link>
          </nav>
          <Button asChild>
            <a href="https://forms.gle/BySAsHjWZhQR2t7QA" target="_blank" rel="noopener noreferrer">
              事前登録
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
