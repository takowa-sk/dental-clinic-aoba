import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clinicInfo } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "あおば歯科・矯正歯科のプライバシーポリシー。患者さまからお預かりする個人情報の取得目的、利用範囲、第三者提供、保管・管理、開示請求の窓口について明記しています。",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="Privacy Policy" ja="プライバシーポリシー" align="center" level={1} />
        <p className="mt-8 max-w-[var(--width-content)] mx-auto text-text-main text-center leading-loose">
          {clinicInfo.name}（以下、「当院」といいます）は、患者さまの個人情報の重要性を認識し、個人情報の保護に関する法律および関連法令を遵守して、適切に取り扱います。
        </p>
      </section>

      <article className="max-w-[var(--width-content)] mx-auto space-y-12 text-text-main leading-loose text-sm md:text-base">
        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            1. 個人情報の取得目的
          </h2>
          <p>当院は、以下の目的のために必要な範囲で患者さまの個人情報を取得します。</p>
          <ul className="mt-3 space-y-2 pl-6 list-disc">
            <li>診療および診療に付帯する業務（予約管理、会計、検査、処方等）</li>
            <li>診療費請求のための保険機関等への提出</li>
            <li>院内における医療安全・感染管理</li>
            <li>当院からの診療予約のご連絡、検診のご案内</li>
            <li>診療内容に関するご質問・お問い合わせへの対応</li>
            <li>医療サービス向上を目的とした院内利用（個人を特定しない統計処理を含む）</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            2. 取得する情報の項目
          </h2>
          <p>当院が取得する個人情報の主な項目は以下のとおりです。</p>
          <ul className="mt-3 space-y-2 pl-6 list-disc">
            <li>氏名、生年月日、性別、住所、電話番号、メールアドレス</li>
            <li>健康保険証の情報</li>
            <li>診療内容、口腔内の所見、レントゲン・CT等の画像</li>
            <li>過去の病歴、現在服用中の薬剤、アレルギー情報</li>
            <li>ご家族の連絡先（緊急時のご連絡のため、ご本人の同意の上で取得）</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            3. 第三者提供について
          </h2>
          <p>
            当院は、患者さまから取得した個人情報を、ご本人の同意なく第三者に提供することはありません。ただし、次に該当する場合はこの限りではありません。
          </p>
          <ul className="mt-3 space-y-2 pl-6 list-disc">
            <li>法令に基づく場合（医療法・保険診療関連法規等）</li>
            <li>人の生命、身体または財産の保護のために必要があり、ご本人の同意を得ることが困難なとき</li>
            <li>他の医療機関と連携した診療が必要な場合（事前に趣旨を説明し、ご了承を得たうえで実施）</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            4. 個人情報の保管・管理
          </h2>
          <p>
            当院は、患者さまの個人情報を適切に管理し、不正アクセス、漏えい、紛失、毀損等の防止のために合理的な安全対策を講じています。具体的には、紙のカルテは施錠可能な書庫に保管し、電子カルテはアクセス権限を限定したうえで、暗号化通信および定期的なバックアップを実施しています。
          </p>
          <p className="mt-3">
            また、当院職員に対しては、入職時および年1回以上、個人情報保護に関する研修を実施しています。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            5. 開示・訂正・削除のご請求について
          </h2>
          <p>
            患者さまご本人から、ご自身の個人情報について開示、訂正、利用停止、削除のご請求があった場合、ご本人であることを確認のうえ、合理的な範囲で速やかに対応いたします。
          </p>
          <p className="mt-3">
            ご請求は、来院時に受付までお申し出いただくか、下記窓口までお電話・お問い合わせフォームよりご連絡ください。
          </p>
          <div className="mt-6 bg-base p-6 rounded-[4px] border border-border-light">
            <p className="text-sm font-bold mb-2">お問い合わせ窓口</p>
            <p className="text-sm">
              {clinicInfo.name}　個人情報保護管理者
              <br />
              電話：{clinicInfo.phone}（受付：平日 10:00-19:00 / 土曜 10:00-17:00）
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            6. プライバシーポリシーの改定
          </h2>
          <p>
            当院は、必要に応じて本プライバシーポリシーの内容を改定することがあります。改定後の内容は、本ページに掲載した時点から有効となります。重要な変更がある場合は、院内掲示やウェブサイトのお知らせ欄を通じて事前にご案内いたします。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            7. 制定日・改定日
          </h2>
          <ul className="space-y-1">
            <li>制定：2018年4月1日</li>
            <li>最終改定：2025年4月1日</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
