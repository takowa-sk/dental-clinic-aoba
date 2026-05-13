import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldAlert, Sparkles, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "医院紹介・設備",
  description: "あおば歯科・矯正歯科の院内設備・感染対策。個室・半個室の診療室、歯科用CT、カウンセリングルーム、キッズスペース、パウダールームをご紹介。クラスB滅菌器の導入や使い捨ての徹底など、感染対策の取り組みもお伝えします。",
  alternates: { canonical: "/clinic" },
};

const equipments = [
  {
    name: "完全個室診療室",
    description: "全診療室を個室または半個室とし、プライバシーへの配慮を徹底。周りの視線や治療音を気にせず、リラックスしてお話しいただけます。",
    image: "/images/clinic-room.webp",
  },
  {
    name: "歯科用CT・デジタルレントゲン",
    description: "従来のレントゲンでは把握できなかった顎の骨の立体的な構造や、神経・血管の位置を精密に診断。安全性の高い治療に不可欠な設備です。",
    image: "/images/clinic-ct.webp",
  },
  {
    name: "カウンセリングルーム",
    description: "治療計画や費用のことなど、落ち着いてご相談いただける専用ルームを完備。モニターを使って視覚的に分かりやすくご説明します。",
    image: "/images/clinic-counseling.webp",
  },
  {
    name: "キッズスペース",
    description: "お子さま連れの方も安心して通えるよう、おもちゃや絵本を備えたキッズスペースをご用意。待ち時間も楽しくお過ごしいただけます。",
    image: "/images/clinic-kids.webp",
  },
  {
    name: "パウダールーム",
    description: "診療前後のブラッシングや、お化粧直しにご利用いただける清潔な空間です。明るく使いやすい設計にこだわりました。",
    image: "/images/clinic-powder.webp",
  },
];

export default function ClinicPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "医院紹介・設備" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="Clinic Tour" ja="院内紹介・設備" align="center" level={1} />
        <div className="mt-12 space-y-24">
          {equipments.map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center`}>
              <div className="flex-1 w-full">
                <div className="aspect-video relative rounded-[4px] overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={`${item.name}の様子`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-4">
                  <span className="text-primary/20 font-en italic text-4xl">0{i+1}</span>
                  {item.name}
                </h3>
                <p className="text-text-main leading-loose text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 感染対策セクション */}
      <section className="py-20 bg-base rounded-[4px] px-8 md:px-16 mt-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading en="Hygiene & Safety" ja="徹底した感染対策" align="center" />
          <p className="mt-8 text-center text-text-main leading-loose mb-16">
            当院では、患者さまに安心して治療を受けていただけるよう、ヨーロッパ規格クラスBの滅菌器を導入し、目に見えない細菌やウイルスまで除去する体制を整えています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h4 className="font-bold">クラスB滅菌器</h4>
              <p className="text-sm text-text-sub leading-relaxed">
                最も厳しいヨーロッパ規格「クラスB」の滅菌器を採用。あらゆる器具の内部まで完全に滅菌します。
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-bold">使い捨ての徹底</h4>
              <p className="text-sm text-text-sub leading-relaxed">
                エプロン、コップ、グローブなどはすべて使い捨て（ディスポーザブル）を徹底しています。
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <UserCheck className="w-8 h-8" />
              </div>
              <h4 className="font-bold">口腔外バキューム</h4>
              <p className="text-sm text-text-sub leading-relaxed">
                治療中に飛び散る削りかすや飛沫を瞬時に吸引し、診療室内の空気を清潔に保ちます。
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[4px] border border-border-light">
            <h4 className="font-bold mb-6 text-center border-b border-border-light pb-4">器具滅菌のプロセス</h4>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Step 1</span>
                <div>
                  <h5 className="font-bold text-sm mb-1">洗浄・消毒</h5>
                  <p className="text-xs text-text-sub">付着した汚れを手洗いや超音波洗浄器で徹底的に落とします。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Step 2</span>
                <div>
                  <h5 className="font-bold text-sm mb-1">パッキング</h5>
                  <p className="text-xs text-text-sub">洗浄後の器具は一つずつ滅菌パックに入れ、密閉します。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Step 3</span>
                <div>
                  <h5 className="font-bold text-sm mb-1">高圧蒸気滅菌</h5>
                  <p className="text-xs text-text-sub">クラスB滅菌器を使用し、真空状態と高温高圧蒸気で死滅させます。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Step 4</span>
                <div>
                  <h5 className="font-bold text-sm mb-1">保管・使用直前に開封</h5>
                  <p className="text-xs text-text-sub">滅菌済みの器具は保管庫に入れ、患者さまの目の前で開封します。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 医院理念 */}
      <section className="py-24 text-center">
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-text-main leading-relaxed max-w-4xl mx-auto">
          「治療のために訪れる場所から、変化に気づくために通う場所へ」
        </blockquote>
        <p className="mt-8 text-text-sub text-sm tracking-[0.2em] uppercase">Aoba Dental Clinic Philosophy</p>
      </section>
    </div>
  );
}
