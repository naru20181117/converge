'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

// Google Analytics測定ID
const GA_MEASUREMENT_ID = 'G-S2506G11TB'

// 実際のトラッキングロジックを含むコンポーネント
const GoogleAnalyticsTracking = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      // ページビューの送信
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      })
    }
  }, [pathname, searchParams])

  return null
}

export const GoogleAnalytics = () => {
  // クライアントサイドでのみレンダリングされるようにする
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {/* Google Analytics スクリプト */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* useSearchParamsを使用する部分をSuspenseでラップ */}
      {isClient && (
        <Suspense fallback={null}>
          <GoogleAnalyticsTracking />
        </Suspense>
      )}
    </>
  )
}
