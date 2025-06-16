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

        {/* チケット・参加登録について */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
            チケット・参加登録について
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                ICF会員の割引の方法を教えてください。
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>ICF会員の皆様は、5,000円引きとなります。以下の手順で進めてください。</p>
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

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                クーポン取得ができません。解決方法を教えてください。
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  クーポン取得ができない場合、以下の原因が考えられます。それぞれの対応策をご確認ください。
                </p>

                <div className="mt-4 space-y-6">
                  <div className="p-4 border border-l-4 border-l-amber-500 rounded bg-amber-50">
                    <h3 className="font-medium">1. ICF会員になったばかりの場合</h3>
                    <p className="mt-2">
                      ICF会員に新しく登録された場合や会員情報を更新した場合、データベースへの反映まで時間がかかることがあります。12時間から24時間程度お待ちいただき、再度クーポン取得をお試しください。
                    </p>
                  </div>

                  <div className="p-4 border border-l-4 border-l-blue-500 rounded bg-blue-50">
                    <h3 className="font-medium">2. ICF会員情報の登録ミス</h3>
                    <ul className="list-disc list-inside mt-2 space-y-3">
                      <li>
                        <span className="font-medium">チャプター設定の確認:</span>
                        <p className="mt-1 ml-6">
                          ICF会員登録時に「Japanチャプター」以外を選択している場合、日本のイベント割引が適用されないことがあります。
                          <a
                            href="https://coachingfederation.org/profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline block mt-1"
                          >
                            ICF会員プロフィールページ
                          </a>
                          からチャプター設定を確認し、必要に応じて「ICF Japan
                          Chapter」に変更してください。
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">登録メールアドレスの確認:</span>
                        <p className="mt-1 ml-6">
                          ICF会員登録時に登録したメールアドレスが正しいことを確認してください。
                          メールアドレスに誤りがあると、クーポンを受け取ることができません。
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 border border-l-4 border-l-green-500 rounded bg-green-50">
                    <h3 className="font-medium">3. メールが届かない場合</h3>
                    <p className="mt-2">
                      クーポンコードを含むメールが見当たらない場合、以下をご確認ください：
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>迷惑メールフォルダを確認してください</li>
                      <li>
                        <span className="font-medium">送信元アドレス：</span>
                        <code className="bg-muted px-1 py-0.5 rounded">
                          send@no-reply.brighty.site
                        </code>{' '}
                        からのメールを探してください
                      </li>
                      <li>メールフィルターで拒否設定されていないか確認してください</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">それでも解決しない場合：</p>
                  <p className="mt-2">
                    上記の対応を試しても問題が解決しない場合は、
                    <a
                      href="https://lin.ee/pyGQFYZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      公式LINEアカウント
                    </a>
                    にてお問い合わせください。その際、会員番号とともに具体的な状況をお知らせいただけると迅速に対応できます。
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                参加費の支払い方法について教えてください。
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>コーチング・コンバージ2025のチケットは、Peatixサイトからご購入いただけます。</p>
                <p>
                  詳細な支払い方法や各種割引に関する情報は、チケット購入ページでご確認ください。
                </p>

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
        </div>

        {/* イベント参加について */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
            イベント参加について
          </h2>
          <Accordion type="single" collapsible className="w-full">
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

            <AccordionItem value="item-ovice">
              <AccordionTrigger className="text-lg font-medium">
                オンライン交流タイムで使用するoViceの使い方を教えてください。
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  オンライン交流タイムでは、バーチャル空間プラットフォーム「oVice」を使用します。
                  oViceでは、参加者同士が自由に移動しながら自然な交流を楽しむことができます。
                </p>
                <p>詳しい使い方については、以下のガイドをご確認ください：</p>
                <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 via-blue-25 to-blue-50 rounded-lg border border-blue-200">
                  <div className="text-center space-y-3">
                    <h3 className="font-medium text-blue-900">oVice使い方ガイド</h3>
                    <a
                      href="https://docs.google.com/presentation/d/1xHTcKJR-tG6UEyv7Ef4KaTT8XV1YO59AAfIZxL66ff4/edit?slide=id.g33bd7fefd38_2_85#slide=id.g33bd7fefd38_2_85"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 hover:underline transition-colors"
                    >
                      <span>oVice操作説明書を見る</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">oVice参加時のポイント:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>事前にマイクとカメラの動作確認をしておくことをお勧めします</li>
                    <li>快適な交流のため、安定したインターネット接続環境でご参加ください</li>
                    <li>アバターを操作して他の参加者に近づくことで会話できます</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                対面会場での受付方法を教えてください。
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>秋葉原UDXギャラリーの受付にて、お名前とチケット情報をご提示ください。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                アーカイブ配信はいつ頃、どうやって公表されますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  コンバージ終了後1〜2週間で、参加申込いただいたメールアドレスにアーカイブリンクをお送りいたします。
                </p>
                <p>
                  該当のチケットをお持ちの方は、同じ時間帯に開催されるすべてのセッションのアーカイブをご視聴いただける予定です。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-lg font-medium">
                写真撮影やSNS投稿は可能ですか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>写っている方の許可を取ってからお願いします。SNS投稿は可能です。</p>
                <p>
                  SNSでのシェアの際は、
                  <span className="font-medium text-primary">#コーチングコンバージ2025</span>
                  でのシェアをよろしくお願いします！
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://x.com/search?q=%23%E3%82%B3%E3%83%BC%E3%83%81%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B82025&src=typed_query"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X (Twitter) で検索
                  </a>
                  <a
                    href="https://www.facebook.com/hashtag/%E3%82%B3%E3%83%BC%E3%83%81%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B82025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook で検索
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-lg font-medium">
                通訳や言語対応はありますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>通訳サービスは提供されません。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="text-lg font-medium">
                （最終日）会場内での飲食は可能ですか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  会場周辺に飲食店等がございます。また、UDX内のコンビニで購入されたものについては会場内で食べていただけます。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="text-lg font-medium">
                懇親会はありますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  懇親会・交流タイムを開催いたします（17:00〜18:00）。 詳細なスケジュールは
                  <a href="/2025/schedule#lastday" className="text-primary hover:underline">
                    こちらのページ
                  </a>
                  でご確認ください。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16">
              <AccordionTrigger className="text-lg font-medium">
                遅刻しての入室はできますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  基本的に遅刻での入室は可能ですが、一部のプログラムでは入室をお断りする場合があります。
                  参加を予定されているセッションの開始時間に遅れないよう、お早めにお越しください。
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">ご注意:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      遅刻での入室の際は、他の参加者の迷惑にならないよう静かに入室してください
                    </li>
                    <li>
                      CCE単位の取得を希望される方は、プログラムの最初から最後まで参加が必要です
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17">
              <AccordionTrigger className="text-lg font-medium">
                会場内でのゴミはどうしますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  会場で発生したゴミは、基本的にご自身での持ち帰りをお願いいたします。
                  環境への配慮とイベント運営へのご協力をよろしくお願いします。
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">お願い:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>会場内にゴミ箱の設置はございません</li>
                    <li>お弁当やお飲み物を持参される場合は、容器等の持ち帰りをお願いします</li>
                    <li>環境に配慮した運営にご理解とご協力をお願いいたします</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CCE単位について */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2">
            CCE単位について
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                CCE単位を取得することはできますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>単位取得ができるように調整中です。随時更新していくのでお待ちください。</p>

                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">CCEについて:</p>
                  <p className="mt-2 text-sm">
                    CCE（Continuing Coach
                    Education）は、ICF認定資格を持つコーチが3年ごとの資格更新に際して必要となる継続コーチ専門教育です。資格更新には40時間のCCE受講履歴が必要となります。
                  </p>
                  <p className="mt-2 text-sm">CCEは以下の2つのカテゴリーに分けられています:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">コア・コンピテンシー(CC):</span>{' '}
                      ICFコア・コンピテンシーに直接関連するトレーニング
                    </li>
                    <li>
                      <span className="font-medium">リソース・ディベロップメント(RD):</span>{' '}
                      コーチの専門性養成に役立つICFコア・コンピテンシー以外のトレーニング（CCE40時間の内、RDは16時間まで認められます）
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                CCE取得のための参加条件はありますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  CCE単位の取得をご希望の方は、各プログラム参加時に以下の条件を満たす必要があります。
                </p>

                <div className="mt-4 p-4 border border-l-4 border-l-blue-500 rounded bg-blue-50">
                  <h3 className="font-medium">＜CCE取得を希望される方へ＞</h3>
                  <p className="mt-2">
                    CCE（継続コーチ専門教育）単位の取得をご希望の方は、各プログラム参加中に以下の点にご留意ください。
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>フルネーム（英語表記）でのご参加</li>
                    <li>ビデオをオンにしてご参加</li>
                    <li>プログラムの最初から最後まで継続してご参加</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">注意事項:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>上記条件を満たさない場合、CCE単位が付与されないことがあります。</li>
                    <li>
                      各セッションのCCE単位取得については、プログラムの担当者へご確認ください。
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                セッションに途中から参加したのですが、CCE単位は取得できますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>
                  CCE単位は、対象セッションに「開始から終了まで」参加された方のみが対象です。途中参加・途中退出の場合は単位付与対象外となります。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18">
              <AccordionTrigger className="text-lg font-medium">
                アーカイブでの参加にCCEは取得できますか？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p>アーカイブでの参加ではCCE単位は取得できません。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-cce-process">
              <AccordionTrigger className="text-lg font-medium">
                CCEを希望する場合に必要な手続きは？
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div className="space-y-6">
                  <div className="p-4 border border-l-4 border-l-primary rounded bg-primary/5">
                    <h3 className="font-medium text-primary">【CCE取得の流れ｜全体まとめ】</h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-lg">1. 事前申請（全員必須）</h4>
                    <p>CCEを取得したい人は全員、事前に申請が必要です。</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>各プログラムのページから該当プログラムを選んで申請</li>
                      <li>
                        <a
                          href="https://www.icf-events.org/event-calendar/?event_type=chapter_event&chap%5B%5D=543&date=#filters"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          申請サイトはこちら
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-lg">2. 当日の参加要件とCCE発行条件</h4>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h5 className="font-medium text-blue-900">■ オフライン参加（最終日）</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-blue-800">
                          <li>プログラムの「冒頭から最後まで」参加すること</li>
                          <li>冒頭と終了時に提示される「2つのキーワード」を取得</li>
                          <li>キーワードを当日中に指定のGoogleフォームから提出する</li>
                        </ul>
                        <div className="mt-3">
                          <a
                            href="https://forms.gle/EDrVUfEbLYYQX5fg7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline"
                          >
                            キーワード提出フォーム
                          </a>
                        </div>
                        <p className="mt-2 text-sm text-blue-700">
                          提出されたキーワードが正しければ、ICFジャパンよりCCEが発行されます
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-medium text-green-900">■ Zoom参加</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-green-800">
                          <li>該当プログラムに冒頭から最後までZoomで参加すること</li>
                          <li>
                            Zoomの参加履歴をもとに、ICFジャパンがCCEを発行します（キーワード提出は不要）
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
