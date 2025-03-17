'use client'

import { TitleWithBackground } from '@/components/TitleWithBackground'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import { useState } from 'react'
import { Maximize2, X } from 'lucide-react'

export default function QuestionsPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <>
      <div className="space-y-8 max-w-3xl mx-auto">
        <TitleWithBackground title="よくある質問" backgroundText="questions" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              ICF会員の割引の方法を教えてください。
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>ICF会員の方は、イベント参加費の割引が適用されます。以下の手順で進めてください。</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  公式LINEを登録する
                  <div className="mt-2 ml-6">
                    <a
                      href="https://lin.ee/pyGQFYZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      公式LINEアカウントはこちら
                    </a>
                  </div>
                </li>
                <li>
                  リッチメニューから「割引クーポン」をクリック
                  <p className="ml-6 mt-1 text-gray-600">
                    LINE画面下部に表示されるリッチメニュー内にある「割引クーポン」をタップ。
                  </p>
                  <div
                    className="ml-6 mt-2 relative h-auto w-full cursor-pointer group flex justify-center"
                    onClick={() => setExpandedImage('/2025/faq/ICFリッチメニュー.png')}
                  >
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                      <div className="bg-white/80 py-1 px-3 rounded-full flex items-center text-sm">
                        <Maximize2 size={16} className="mr-1" />
                        <span>クリックで拡大</span>
                      </div>
                    </div>
                    <Image
                      src="/2025/faq/ICFリッチメニュー.png"
                      alt="ICFリッチメニュー"
                      className="object-contain max-h-36 rounded border border-gray-200"
                      width={280}
                      height={160}
                    />
                  </div>
                </li>
                <li>
                  会員番号を入力する
                  <p className="ml-6 mt-1 text-gray-600">
                    <a
                      href="https://www.brighty.site/icf/member_search"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      表示されたサイト
                    </a>
                    にアクセスし、ご自身のICF会員番号を入力してください。
                  </p>
                  <div
                    className="ml-6 mt-2 relative h-auto w-full cursor-pointer group flex justify-center"
                    onClick={() => setExpandedImage('/2025/faq/brighty-icf-member-search.png')}
                  >
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                      <div className="bg-white/80 py-1 px-3 rounded-full flex items-center text-sm">
                        <Maximize2 size={16} className="mr-1" />
                        <span>クリックで拡大</span>
                      </div>
                    </div>
                    <Image
                      src="/2025/faq/brighty-icf-member-search.png"
                      alt="ICF会員番号検索"
                      className="object-contain max-h-36 rounded border border-gray-200"
                      width={280}
                      height={160}
                    />
                  </div>
                </li>
                <li>
                  登録メールアドレスを確認
                  <p className="ml-6 mt-1 text-gray-600">
                    ICFに登録されているメールアドレス宛にクーポンが届きます。届いたメールの内容をチェックし、クーポンコードをコピーしてください。
                  </p>
                  <div
                    className="ml-6 mt-2 relative h-auto w-full cursor-pointer group flex justify-center"
                    onClick={() => setExpandedImage('/2025/faq/brighty-qupon-email.png')}
                  >
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                      <div className="bg-white/80 py-1 px-3 rounded-full flex items-center text-sm">
                        <Maximize2 size={16} className="mr-1" />
                        <span>クリックで拡大</span>
                      </div>
                    </div>
                    <Image
                      src="/2025/faq/brighty-qupon-email.png"
                      alt="クーポンメール"
                      className="object-contain max-h-36 rounded border border-gray-200"
                      width={280}
                      height={160}
                    />
                  </div>
                </li>
                <li>
                  Peatixの購入画面へ進む
                  <p className="ml-6 mt-1 text-gray-600">
                    メールに記載されたPeatixのリンクをクリックし、チケットの購入画面へ移動します。
                  </p>
                </li>
                <li>
                  クーポンを適用する
                  <p className="ml-6 mt-1 text-gray-600">
                    購入画面のクーポン入力欄に、先ほどコピーしたクーポンコードを入力してください。入力後、割引が適用されていることを画面上で確認できます。
                  </p>
                  <div
                    className="ml-6 mt-2 relative h-auto w-full cursor-pointer group flex justify-center"
                    onClick={() => setExpandedImage('/2025/faq/peatix-qupon.png')}
                  >
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                      <div className="bg-white/80 py-1 px-3 rounded-full flex items-center text-sm">
                        <Maximize2 size={16} className="mr-1" />
                        <span>クリックで拡大</span>
                      </div>
                    </div>
                    <Image
                      src="/2025/faq/peatix-qupon.png"
                      alt="クーポンコード入力"
                      className="object-contain max-h-36 rounded border border-gray-200"
                      width={280}
                      height={160}
                    />
                  </div>
                </li>
              </ol>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-medium">注意事項:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>クーポンコードは他の方との共有はご遠慮ください。</li>
                  <li>割引は現在有効なICF会員資格をお持ちの方のみ適用されます。</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              オンラインでの参加方法について教えてください。
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>
                コーチング・コンバージ2025は、初日（6月15日）と最終日（6月21日）は終日オンラインで開催されます。
                また、平日（6月16日〜20日）は夜間セッションがオンラインで行われます。
              </p>
              <p>オンライン参加の手順は以下の通りです：</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  イベント参加登録後、登録時のメールアドレスに参加用のZoomリンクが送信されます。
                </li>
                <li>各セッションの開始時間の15分前からZoomミーティングに入室可能です。</li>
                <li>安定したインターネット接続環境でご参加ください。</li>
                <li>セッション中の質問は、Zoomのチャット機能を通じて行うことができます。</li>
              </ol>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-medium">推奨環境:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>安定したインターネット接続（有線接続を推奨）</li>
                  <li>ヘッドセットまたはイヤホン（音声品質向上のため）</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              参加費の支払い方法について教えてください。
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>コーチング・コンバージ2025のチケットは、Peatixサイトからご購入いただけます。</p>
              <p>詳細な支払い方法や各種割引に関する情報は、チケット購入ページでご確認ください。</p>

              <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 rounded-xl">
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-bold text-primary">チケット購入</h3>
                  <div className="pt-2 flex flex-col items-center">
                    <a
                      href="https://converge2025.peatix.com/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-lg px-6 py-3 rounded-full shadow-md"
                    >
                      <span>チケットを購入する</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-ticket"
                      >
                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                        <path d="M13 5v2" />
                        <path d="M13 17v2" />
                        <path d="M13 11v2" />
                      </svg>
                    </a>
                    <p className="text-sm text-muted-foreground mt-3">Peatixサイトに移動します</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p className="text-sm">
          コーチング・コンバージ2025に関するよくある質問をまとめました。
          <br />
          お探しの情報が見つからない場合は、
          <a
            href="https://lin.ee/pyGQFYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            公式LINEアカウント
          </a>
          までお問い合わせください。
        </p>
      </div>
      {/* 画像拡大モーダル */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 bg-white/90 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                setExpandedImage(null)
              }}
            >
              <X size={24} />
            </button>
            <div className="relative w-full h-auto">
              <Image
                src={expandedImage}
                alt="拡大画像"
                width={600}
                height={800}
                className="object-contain bg-white rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
