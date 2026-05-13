import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "初診の方へ",
  description: "あおば歯科・矯正歯科の初診案内。受付・カウンセリング・検査・治療計画のご説明まで当日の流れと所要時間（約60〜90分）、お持ちいただくもの、お支払い方法、駐車場、よくあるご質問まで初めての方の疑問にお答えします。",
  alternates: { canonical: "/first-visit" },
};

const steps = [
  {
    title: "受付・問診票の記入",
    time: "約10分",
    content: "保険証（おくすり手帳をお持ちの方は合わせて）をご提示ください。現在のお悩みや全身疾患の有無などについて問診票にご記入いただきます。",
  },
  {
    title: "カウンセリング",
    time: "約15分",
    content: "カウンセリングルームにて、専任スタッフがお話を伺います。お悩みや治療に対する不安、ご要望など、どんなことでもお聞かせください。",
  },
  {
    title: "検査・診断",
    time: "約20分",
    content: "口腔内写真の撮影、レントゲン・CT撮影、歯周病検査などを行い、お口全体の健康状態を詳しく把握します。",
  },
  {
    title: "治療計画のご説明",
    time: "約15分",
    content: "検査結果に基づき、現在の状態と今後の治療方針、期間、費用について視覚的な資料を用いて分かりやすくご説明します。",
  },
  {
    title: "応急処置・クリーニング",
    time: "約30分",
    content: "痛みがある場合は応急処置を優先します。状態に応じてクリーニングを行い、お口を整えてから次回以降の本格的な治療へ進みます。",
  },
];

const faqs = [
  {
    q: "初診にはどのくらいの時間がかかりますか？",
    a: "検査やカウンセリングを含め、約60分から90分ほどお時間をいただいております。時間に余裕を持ってお越しください。",
  },
  {
    q: "当日、何を持っていけばよいですか？",
    a: "健康保険証（またはマイナンバーカード）、医療証（お持ちの方）、おくすり手帳、現在お使いの入れ歯（あれば）をお持ちください。",
  },
  {
    q: "駐車場はありますか？",
    a: "当院指定の提携駐車場が2台分ございます。満車の場合は近隣のコインパーキングをご利用ください（駐車券の提示で一部補助がございます）。",
  },
  {
    q: "子どもを連れて行っても大丈夫ですか？",
    a: "はい、もちろんです。キッズスペースを完備しており、親御さまの治療中はスタッフが目を配ることも可能です。ベビーカーのまま診察室に入ることもできます。",
  },
  {
    q: "予約のキャンセルや変更はどうすればいいですか？",
    a: "お電話にて承っております。他の患者さまをお待たせしないためにも、変更がある場合は前日までにご連絡いただけますと幸いです。",
  },
  {
    q: "自費診療の支払い方法は何がありますか？",
    a: "現金に加え、各種クレジットカード、デンタルローンをご利用いただけます。詳しくはスタッフまでお気軽にお尋ねください。",
  },
];

export default function FirstVisitPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "初診の方へ" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="First Visit" ja="初めての方へ" align="center" level={1} />
        <p className="mt-8 max-w-[var(--width-content)] mx-auto text-text-main text-center leading-loose">
          当院では、お口の悩みだけでなく、患者さまの背景やご要望を理解することを大切にしています。<br className="hidden md:block" />
          初回の検査とカウンセリングで現在の状態を可視化し、これからの通院ペースを一緒に決めていきます。
        </p>
      </section>

      {/* 来院の流れ */}
      <section className="py-16">
        <h3 className="font-serif text-2xl font-bold mb-12 text-center underline decoration-primary decoration-2 underline-offset-8">来院の流れ</h3>
        <div className="max-w-3xl mx-auto space-y-12 relative before:content-[''] before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border-light before:-z-10">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group">
              <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center font-en italic font-bold text-primary z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                0{i+1}
              </div>
              <div className="flex-grow bg-white border border-border-light p-6 rounded-[4px] shadow-sm w-full">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg">{step.title}</h4>
                  <span className="text-xs bg-base px-2 py-1 rounded text-text-sub font-medium">{step.time}</span>
                </div>
                <p className="text-sm text-text-main leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 持ち物・注意事項 */}
      <section className="py-16 bg-base rounded-[4px] px-8 md:px-16 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">お持ちいただくもの</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">健康保険証 / マイナンバーカード</p>
                <p className="text-xs text-text-sub">受給者証、医療券などをお持ちの方は合わせてお持ちください。</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">おくすり手帳</p>
                <p className="text-xs text-text-sub">歯科治療の際、飲み合わせの確認が必要です。常用薬がある方は必ずお持ちください。</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">他院からの紹介状（お持ちの方）</p>
                <p className="text-xs text-text-sub">検査結果や診療情報提供書などがあればスムーズに診断が可能です。</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2 text-red-600">来院時のご注意</h3>
          <ul className="space-y-4 text-sm text-text-main leading-loose">
            <li>・当院は<strong>完全予約制</strong>です。事前にお電話またはWEBよりご予約ください。</li>
            <li>・初診時は問診票の記入等がございますので、<strong>予約時間の10分前</strong>にお越しください。</li>
            <li>・予約の変更・キャンセルは、恐れ入りますが<strong>前日まで</strong>にご連絡をお願いいたします。</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto">
          <SectionHeading en="FAQ" ja="よくあるご質問" align="center" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-border-light rounded-[4px] bg-white transition-all duration-300 open:shadow-md">
                <summary className="list-none p-6 flex justify-between items-center cursor-pointer">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-text-main leading-relaxed">{faq.q}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-text-sub transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-0 ml-9">
                  <p className="text-sm text-text-sub leading-loose border-t border-border-light/50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
