import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "院長・スタッフ紹介",
  description: "あおば歯科・矯正歯科の院長およびスタッフをご紹介します。患者さまとの対話を大切にし、安心できる診療体制を整えています。",
};

const staffs = [
  {
    role: "副院長 / 歯科医師",
    name: "青葉 結衣",
    description: "九州大学歯学部卒。小児歯科とホワイトニングを担当。お子さまや女性の患者さまが安心して相談できる雰囲気づくりを心がけています。",
    motto: "「ここに来てよかった」と笑顔で帰っていただけるように。",
  },
  {
    role: "歯科衛生士",
    name: "佐藤 美咲",
    description: "キャリア10年のベテラン。予防歯科のエキスパートとして、痛くないクリーニングと丁寧なセルフケア指導を提供します。",
    motto: "一生自分の歯でおいしく食べていただくためのサポートを。",
  },
  {
    role: "歯科衛生士",
    name: "田中 結菜",
    description: "明るい笑顔がトレードマーク。患者さまの不安を和らげるコミュニケーションを大切にしています。",
    motto: "お口の健康から、全身の健康と幸福を守ります。",
  },
  {
    role: "受付・歯科助手",
    name: "鈴木 加奈",
    description: "クリニックの「顔」として、スムーズなご案内とお困りごとのヒアリングを担当。お気軽にお声がけください。",
    motto: "感謝の気持ちを忘れず、温かいおもてなしを。",
  },
];

export default function DoctorPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "院長・スタッフ紹介" }]} />

      {/* 院長紹介セクション */}
      <section className="py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3">
            <div className="aspect-[3/4] relative rounded-[4px] overflow-hidden shadow-md">
              <Image
                src="/images/doctor.jpg"
                alt="院長 青葉健一"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <SectionHeading en="Director Message" ja="院長ご挨拶" align="left" />
            <div className="mt-8 space-y-6 text-text-main leading-loose">
              <p>
                ホームページをご覧いただきありがとうございます。あおば歯科・矯正歯科 院長の青葉健一です。
              </p>
              <p>
                私は福岡市で生まれ育ち、九州大学を卒業後は都内の大学病院にて歯周病学を専門に研鑽を積んできました。大学病院時代、ある重度の歯周病を抱えた患者さまと数年にわたり向き合ったことが、私の歯科医師としての原点です。
              </p>
              <p>
                治療を終え一度は健康を取り戻しても、ご自宅でのケアや定期的なメンテナンスが途絶えると、再び病状が悪化してしまう。その現実に直面し、「失った歯を補うこと」以上に、「今ある健康を維持し続ける仕組み」がいかに重要かを痛感しました。
              </p>
              <p>
                2018年、地元であるこの場所に開業した理由は、専門的な治療技術はもちろん、日々の些細な変化を共に分かち合える「一生涯のパートナー」としての歯科医院を作りたいと考えたからです。
              </p>
              <p>
                歯医者は、治療のために行く場所ではなく、健康を保つために行く場所。その理想を形にするため、私たちは皆さま一人ひとりの声にじっくりと耳を傾けます。10年後、20年後も、あなたが大好きなものを美味しく食べ続けられるよう、共にお口の健康を守っていければ幸いです。
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border-light pt-10">
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">経歴</h3>
                <ul className="text-sm space-y-2 text-text-sub">
                  <li>1980年 福岡市生まれ</li>
                  <li>2005年 九州大学歯学部 卒業</li>
                  <li>2005年〜 都内大学病院 歯科保存学講座 勤務</li>
                  <li>2012年〜 福岡市内 総合歯科医院 分院長</li>
                  <li>2018年 あおば歯科・矯正歯科 開院</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">資格・所属学会</h3>
                <ul className="text-sm space-y-2 text-text-sub">
                  <li>日本歯周病学会 認定医</li>
                  <li>日本歯科保存学会 会員</li>
                  <li>日本口腔インプラント学会 会員</li>
                  <li>日本成人矯正歯科学会 会員</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スタッフ紹介セクション */}
      <section className="py-16 border-t border-border-light">
        <SectionHeading en="Staff" ja="スタッフ紹介" align="center" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffs.map((staff, i) => (
            <div key={i} className="flex flex-col bg-white border border-border-light rounded-[4px] overflow-hidden group">
              <div className="aspect-square relative bg-base">
                {/* 顔写真の代わりに清潔感のある抽象素材やイラストのプレースホルダを想定 */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Image src="/images/hero.jpg" alt="" fill className="object-cover grayscale" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <span className="font-en text-primary/30 text-4xl font-bold italic">{staff.name[0]}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{staff.role}</p>
                <h3 className="font-serif text-lg font-bold mb-3">{staff.name}</h3>
                <p className="text-xs text-text-main leading-loose mb-4">
                  {staff.description}
                </p>
                <div className="mt-auto pt-4 border-t border-border-light/50">
                  <p className="text-[10px] text-text-sub font-bold mb-1 tracking-tight">MOTTO</p>
                  <p className="text-[11px] font-medium text-text-main italic">
                    &ldquo;{staff.motto}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
