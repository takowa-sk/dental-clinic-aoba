import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clinicInfo } from "@/lib/clinic";
import { MapPin, Train, Car, Bus, HelpCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "アクセス・診療時間",
  description: "あおば歯科・矯正歯科へのアクセス方法と診療時間のご案内。天神南駅徒歩3分、西鉄天神駅徒歩6分。提携駐車場も2台分ございます。",
};

export default function AccessPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "アクセス" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="Access & Hours" ja="アクセス・診療時間" align="center" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7 space-y-12">
          {/* Map */}
          <div className="aspect-video w-full rounded-[4px] overflow-hidden border border-border-light shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8647517652755!2d130.39587421526435!3d33.58547438073579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541918451b6e159%3A0xc47e3a8934dfb07b!2z5aSp56We6aeF!5e0!3m2!1sja!2sjp!4v1689399222444!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="周辺地図"
            />
          </div>

          {/* Route Details */}
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-3">
                <Train className="text-primary w-6 h-6" />
                電車でお越しの方
              </h3>
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-primary p-6 shadow-sm">
                  <h4 className="font-bold mb-2">地下鉄七隈線「天神南駅」より徒歩3分</h4>
                  <p className="text-sm text-text-main leading-loose">
                    中央改札口を出て、天神地下街を「東12b出口」方面へ。地上に出て国体道路を東へ進むと、1Fにアパレルショップが入っているビルの2Fが当院です。
                  </p>
                </div>
                <div className="bg-white border-l-4 border-primary p-6 shadow-sm">
                  <h4 className="font-bold mb-2">西鉄天神大牟田線「西鉄福岡（天神）駅」より徒歩6分</h4>
                  <p className="text-sm text-text-main leading-loose">
                    南口を出て警固公園方面へ。国体道路を中洲方面へ直進し、「今泉公園入口」交差点そばのビル2Fです。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-3">
                  <Car className="text-primary w-6 h-6" />
                  お車でお越しの方
                </h3>
                <p className="text-sm text-text-main leading-loose">
                  提携駐車場が2台分ございます。ご利用の際は受付までお申し出ください。満車の場合は近隣のコインパーキングをご利用ください。お会計時に駐車券をご提示いただくと、ご利用料金の一部を補助いたします。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-3">
                  <Bus className="text-primary w-6 h-6" />
                  バスでお越しの方
                </h3>
                <p className="text-sm text-text-main leading-loose">
                  西鉄バス「今泉一丁目」バス停より徒歩1分。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-10">
          {/* Info Card */}
          <div className="bg-white p-8 border border-border-light rounded-[4px] shadow-sm">
            <h3 className="font-serif text-xl font-bold mb-6 text-primary">{clinicInfo.name}</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <MapPin className="text-text-sub w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  〒810-0021<br />
                  {clinicInfo.address}
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <Train className="text-text-sub w-5 h-5 flex-shrink-0" />
                <p className="text-sm leading-relaxed">{clinicInfo.access}</p>
              </li>
            </ul>

            <div className="pt-8 border-t border-border-light">
              <h4 className="font-bold mb-6 text-center">診療時間</h4>
              <table className="w-full text-sm text-center border-collapse">
                <thead>
                  <tr className="border-b border-border-light bg-base/50">
                    <th className="py-2 font-medium">診療時間</th>
                    <th className="py-2 font-medium">月</th>
                    <th className="py-2 font-medium">火</th>
                    <th className="py-2 font-medium">水</th>
                    <th className="py-2 font-medium">木</th>
                    <th className="py-2 font-medium">金</th>
                    <th className="py-2 font-medium text-primary">土</th>
                    <th className="py-2 font-medium text-red-500">日</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  <tr>
                    <td className="py-4 text-xs">10:00 - 13:00</td>
                    <td>●</td><td>●</td><td>●</td><td className="text-text-sub">休</td><td>●</td><td className="text-primary">●</td><td className="text-red-500">休</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-xs">14:30 - 19:00</td>
                    <td>●</td><td>●</td><td>●</td><td className="text-text-sub">休</td><td>●</td><td className="text-primary text-xs">17:00<br/>まで</td><td className="text-red-500">休</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-text-sub text-center leading-relaxed">
                【休診日】 木曜日、日曜日、祝日<br />
                ※最終受付は診療終了の30分前となります。
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-[4px] border border-primary/20">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              道に迷われたら
            </h4>
            <p className="text-sm leading-loose text-text-main mb-6">
              場所が分からない場合は、お気軽にお電話ください。スタッフが道順をご案内いたします。
            </p>
            <a
              href={`tel:${clinicInfo.phone.replace(/-/g, "")}`}
              className="flex items-center justify-center gap-3 bg-white border border-primary text-primary py-4 rounded-[4px] font-serif text-xl font-bold shadow-sm hover:bg-white/80 transition-all"
            >
              <Phone className="w-5 h-5" />
              {clinicInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

