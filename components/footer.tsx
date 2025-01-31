import { Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://x.com/ICF_JAPAN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://line.me/R/ti/p/@549mtxdu?oat_content=url&ts=12281103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary font-bold"
            >
              LINE
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 ICF Japan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
