'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'ホーム' },
    { href: '/sponsors', label: 'スポンサー' },
    { href: '/schedule', label: 'タイムスケジュール' },
    { href: '/policy', label: 'ポリシー' },
  ]

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            コーチング・コンバージ 2025
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルナビゲーション */}
          <div className="flex items-center gap-4">
            <Button asChild>
              <a
                href="https://forms.gle/BySAsHjWZhQR2t7QA"
                target="_blank"
                rel="noopener noreferrer"
              >
                事前登録
              </a>
            </Button>

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
          </div>
        </div>
      </div>
    </header>
  )
}
