'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const getHeaderTitle = (path: string) => {
    if (path === '/') return 'ICF ジャパン コーチング・コンバージ'
    if (path.startsWith('/2025')) return 'コーチング・コンバージ 2025'
    if (path.startsWith('/2024')) return 'コーチング・コンバージ 2024'
    if (path.startsWith('/2023')) return 'コーチング・コンバージ 2023'
    return 'コーチング・コンバージ'
  }

  const getMenuItems = (path: string) => {
    if (path.startsWith('/2025')) {
      return [
        { href: '/2025', label: 'ホーム' },
        { href: '/2025/schedule', label: 'タイムスケジュール' },
        { href: '/2025/speakers', label: '登壇者' },
        { href: '/2025/policy', label: 'プライバシーポリシー' },
      ]
    }
    return [] // トップページの場合は空の配列を返す
  }

  const menuItems = getMenuItems(pathname)
  const showRegisterButton = pathname.startsWith('/2025')

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={pathname === '/' ? '/' : '/2025'} className="font-bold text-lg">
            {getHeaderTitle(pathname)}
          </Link>

          {/* デスクトップナビゲーション */}
          {menuItems.length > 0 && (
            <nav className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* モバイルナビゲーション */}
          <div className="flex items-center gap-4">
            {showRegisterButton && (
              <Button asChild>
                <a
                  href="https://forms.gle/BySAsHjWZhQR2t7QA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  事前登録
                </a>
              </Button>
            )}

            {menuItems.length > 0 && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">メニューを開く</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg hover:text-primary px-4 py-2 rounded-lg hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
