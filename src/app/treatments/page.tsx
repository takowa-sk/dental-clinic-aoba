import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Clock, Coins } from "lucide-react";

export const metadata: Metadata = {
  title: "診療メニュー",
  description: "あおば歯科・矯正歯科の診療メニュー一覧。一般歯科から矯正、インプラントまで、痛みに配慮した丁寧な治療を提供します。",
};

const treatments = [
  {
    id: "general",
    name: "一般歯科",
    en: "General Dentistry",
    description: "むし歯や歯周病の治療を行います。「痛い」「しみる」といった症状の解消だけでなく、再発を防ぐための根本的なアプローチを重視。可能な限り神経を残し、抜かない治療を心がけています。",
    recommend: ["歯が痛む、しみる", "詰め物が取れた", "歯ぐきから血が出る"],
    steps: ["問診・視診", "精密検査（レントゲン等）", "カウンセリング・治療計画", "痛みを抑えた治療", "経過確認"],
    price: "保険適用（3割負担の場合、初診目安 3,000円〜5,000円程度）",
    time: "約30分〜60分",
  },
  {
    id: "pediatric",
    name: "小児歯科",
    en: "Pediatric Dentistry",
    description: "お子さまのペースに合わせた診療を行います。無理に治療を進めるのではなく、まずは雰囲気に慣れてもらうことからスタート。生涯にわたって健康な歯を保つための土台づくりをサポートします。",
    recommend: ["子どものむし歯を治したい", "定期検診を受けさせたい", "歯並びが気になる"],
    steps: ["コミュニケーション", "お口のチェック", "クリーニング・フッ素塗布", "ブラッシング指導"],
    price: "自治体の医療費助成が適用される場合が多いです",
    time: "約30分",
  },
  {
    id: "preventive",
    name: "予防歯科",
    en: "Preventive Dentistry",
    description: "「痛くなってから行く」のではなく「痛くならないために行く」。定期的なプロによるクリーニング（PMTC）により、自分では落としきれない汚れを除去し、口腔環境を清潔に保ちます。",
    recommend: ["むし歯・歯周病を防ぎたい", "お口をスッキリさせたい", "口臭が気になる"],
    steps: ["口腔内チェック", "歯石除去（スケーリング）", "歯面清掃（PMTC）", "フッ素塗布", "セルフケアアドバイス"],
    price: "保険適用（約3,000円程度） ※内容により自費の場合あり",
    time: "約45分〜60分",
  },
  {
    id: "orthodontic",
    name: "矯正歯科",
    en: "Orthodontics",
    description: "見た目の改善だけでなく、噛み合わせを整えることで全身の健康にも寄与します。目立ちにくいマウスピース型矯正（インビザライン等）や、お子さまの成長に合わせた小児矯正も行っています。",
    recommend: ["歯並びを整えたい", "噛み合わせが悪い", "目立たずに矯正したい"],
    steps: ["初診相談", "精密検査・診断", "クリンチェック（シミュレーション）", "保定期間"],
    price: "自費診療：330,000円〜990,000円（税込） ※分割可",
    time: "調整 15〜30分程度（月1回〜）",
  },
  {
    id: "whitening",
    name: "ホワイトニング",
    en: "Whitening",
    description: "加齢や嗜好品によって着色した歯を、専用の薬剤で白くします。院内で行う「オフィス」と、ご自宅でじっくり取り組む「ホーム」を組み合わせ、理想の白さを目指します。",
    recommend: ["歯の黄ばみが気になる", "結婚式などの行事を控えている", "笑顔に自信を持ちたい"],
    steps: ["シェード確認", "クリーニング", "薬剤塗布・光照射", "アフターケア指導"],
    price: "自費診療：16,500円〜44,000円（税込）",
    time: "オフィス 60〜90分 / ホーム 2週間程度",
  },
  {
    id: "implant",
    name: "インプラント",
    en: "Implant",
    description: "失った歯の代わりにチタン製の人工歯根を埋め込み、ご自身の歯のような噛み心地を取り戻します。入れ歯やブリッジに抵抗がある方、周囲の健康な歯を削りたくない方に適した治療です。",
    recommend: ["自分の歯のように噛みたい", "ブリッジで隣の歯を削りたくない", "入れ歯が合わない"],
    steps: ["CT撮影・精密診断", "インプラント埋入手術", "治癒期間（3〜6ヶ月）", "人工歯の装着"],
    price: "自費診療：385,000円〜 / 1本（税込・上部構造込）",
    time: "手術 60〜120分",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "診療メニュー" }]} />
      
      <section className="py-12 md:py-16">
        <SectionHeading en="Treatments" ja="診療メニュー" align="center" />
        <p className="mt-8 max-w-[var(--width-content)] mx-auto text-text-main text-center leading-loose">
          あおば歯科・矯正歯科では、一般的な保険診療から自由診療まで幅広く対応しております。
          ただ痛みを取り去るだけでなく、その後の生活がより豊かになるよう、将来を見据えた丁寧な治療をご提案いたします。
        </p>
      </section>

      <div className="flex flex-col gap-24">
        {treatments.map((t) => (
          <section key={t.id} id={t.id} className="scroll-mt-32 border-b border-border-light pb-24 last:border-0">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-en italic text-primary text-xl">{t.en}</span>
                  <div className="h-px bg-primary/30 flex-grow" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t.name}</h2>
                <p className="text-text-main leading-loose mb-8">
                  {t.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-base p-6 rounded-[4px]">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      こんな方におすすめ
                    </h3>
                    <ul className="space-y-2">
                      {t.recommend.map((item, i) => (
                        <li key={i} className="text-sm text-text-main flex items-start before:content-['・'] before:mr-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-border-light p-6 rounded-[4px]">
                    <h3 className="font-bold mb-4 flex items-center gap-2 text-text-sub">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      治療の流れ
                    </h3>
                    <ol className="space-y-3">
                      {t.steps.map((step, i) => (
                        <li key={i} className="text-sm text-text-main flex gap-3">
                          <span className="font-en italic text-primary/50 font-bold">0{i+1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-10">
                  <div className="flex items-start gap-3">
                    <Coins className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-text-sub font-bold uppercase tracking-wider mb-1">Fee</p>
                      <p className="text-sm font-medium">{t.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-text-sub font-bold uppercase tracking-wider mb-1">Time</p>
                      <p className="text-sm font-medium">{t.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:max-w-md">
                <div className="aspect-video lg:aspect-[4/5] relative rounded-[4px] overflow-hidden shadow-sm">
                  <Image
                    src={`/images/${t.id === 'orthodontic' ? 'treatment-ortho' : 'treatment-gen'}.jpg`}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
