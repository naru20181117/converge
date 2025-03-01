// Google Analyticsの型定義
interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: {
      page_path?: string
      page_location?: string
      page_title?: string
      [key: string]: any
    }
  ) => void
}
