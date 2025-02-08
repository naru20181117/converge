import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 items-center">
            <a
              href="https://line.me/R/ti/p/@549mtxdu?oat_content=url&ts=12281103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary font-bold"
            >
              LINE
            </a>
            <a
              href="https://x.com/ICF_JAPAN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
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
              className="hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/icf.japan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">ICF Japan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
