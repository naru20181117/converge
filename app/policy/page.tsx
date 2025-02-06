import { TitleWithBackground } from '@/components/TitleWithBackground'

export default function PolicyPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <TitleWithBackground title="プライバシーポリシー" backgroundText="policy" />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">個人情報の取り扱いについて</h2>
        <p>
          ICFジャパンは、「コーチング・コンバージ2025」の運営において、参加者の個人情報を適切に取り扱い、
          保護することが社会的責務であると考え、以下の方針に基づき個人情報の保護に努めます。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. 個人情報の取得方法</h2>
        <p>
          ICFジャパンは、本カンファレンスへの参加登録、アンケート、問い合わせ対応、その他正当な手段を通じて個人情報を取得します。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. 個人情報の利用目的</h2>
        <p>取得した個人情報は、以下の目的で利用いたします：</p>
        <ul className="list-disc list-inside space-y-2">
          <li>イベントの運営及び管理のため</li>
          <li>参加者への連絡及び情報提供のため（リマインド、変更通知など）</li>
          <li>イベント改善のための統計データ作成のため（個人を特定できない形での分析を含む）</li>
          <li>その他、参加者が同意した目的のため</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. 個人情報の管理</h2>
        <p>
          ICFジャパンは、取得した個人情報の漏えい・滅失・改ざんを防止するため、適切な安全管理措置を講じます。
          個人情報の取り扱いを外部委託する場合には、適切な管理・監督を行います。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. 個人情報の第三者提供</h2>
        <p>
          取得した個人情報は、以下の場合を除き、事前に本人の同意を得ることなく第三者に提供することはありません：
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>法令に基づく場合</li>
          <li>
            参加者が希望するサービスの提供のため、必要な範囲内で業務委託先に提供する場合（例：イベント運営事業者、システム管理者など）
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. 個人情報の開示・訂正・削除請求</h2>
        <p>
          参加者は、自身の個人情報について、開示・訂正・削除を求めることができます。ご希望の場合は、下記の問い合わせ先までご連絡ください。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. お問い合わせ</h2>
        <p>個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。</p>
        <p>ICFジャパン事務局</p>
        <p>
          Mail:{' '}
          <a href="mailto:converge2025@icfjapan.com" className="text-primary hover:underline">
            converge2025@icfjapan.com
          </a>
        </p>
      </section>
    </div>
  )
}
