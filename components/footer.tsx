'use client'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Footer() {
  const pathname = usePathname()

  const getMenuItems = (path: string) => {
    if (path.startsWith('/2025')) {
      return [
        { href: '/2025', label: 'ホーム' },
        { href: '/2025/schedule', label: 'タイムスケジュール' },
        { href: '/2025/speakers', label: '登壇者' },
        { href: '/2025/questions', label: 'Q&A' },
        { href: '/2025/policy', label: 'プライバシーポリシー' },
      ]
    }
    return [] // トップページの場合は空の配列を返す
  }

  const menuItems = getMenuItems(pathname)
  const showFooterNav = menuItems.length > 0

  return (
    <footer className="border-t py-8 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* フッターナビゲーション - スマホ向け */}
          {showFooterNav && (
            <div className="w-full md:hidden">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'py-2 px-4 text-sm font-medium text-center transition-colors',
                      'border-l-2 hover:border-l-primary hover:text-primary',
                      pathname === item.href
                        ? 'border-l-primary text-primary'
                        : 'border-l-muted-foreground/20'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* ソーシャルメディアリンク */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://line.me/R/ti/p/@549mtxdu?oat_content=url&ts=12281103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center"
            >
              <span className="font-medium">LINE</span>
            </a>
            <a
              href="https://x.com/ICF_JAPAN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="sr-only">X (旧Twitter)</span>
            </a>
            <a
              href="https://www.facebook.com/ICFJapan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/icf.japan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          {/* コピーライト */}
          <p className="text-sm text-muted-foreground">
            {' '}
            {new Date().getFullYear()} ICF Japan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
