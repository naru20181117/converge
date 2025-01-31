import { TitleWithBackground } from '@/components/TitleWithBackground'

export default function PolicyPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <TitleWithBackground title="プライバシーポリシー" backgroundText="policy" />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. 個人情報の取り扱いについて</h2>
        <p>
          ICFジャパンは、コーチング・コンバージ2025の運営において、参加者の個人情報を適切に取り扱い、
          保護することが社会的責務であると考え、個人情報の保護に努めます。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. 個人情報の利用目的</h2>
        <p>取得した個人情報は、以下の目的で利用いたします：</p>
        <ul className="list-disc list-inside space-y-2">
          <li>イベントの運営及び管理のため</li>
          <li>参加者への連絡及び情報提供のため</li>
          <li>イベント改善のための統計データ作成のため</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. 個人情報の第三者提供</h2>
        <p>
          取得した個人情報は、法令に基づく場合を除き、事前に本人の同意を得ることなく第三者に提供することはありません。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. お問い合わせ</h2>
        <p>個人情報の取り扱いに関するお問い合わせは、ICFジャパン事務局までご連絡ください。</p>
      </section>
    </div>
  )
}
