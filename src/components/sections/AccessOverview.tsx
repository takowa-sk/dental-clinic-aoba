"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Train, Car } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clinicInfo } from "@/lib/clinic";

export function AccessOverview() {
  return (
    <section className="bg-base py-[var(--spacing-section-md)] md:py-[var(--spacing-section-lg)] border-t border-border-light">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading en="Access" ja="アクセス" align="center" />

          <div className="mt-10 md:mt-14 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Map Area */}
            <div className="w-full lg:w-3/5 rounded-[4px] overflow-hidden border border-border-light bg-white h-[350px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8647517652755!2d130.39587421526435!3d33.58547438073579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541918451b6e159%3A0xc47e3a8934dfb07b!2z5aSp56We6aeF!5e0!3m2!1sja!2sjp!4v1689399222444!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="クリニックの周辺地図"
              />
            </div>

            {/* Info Area */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <h3 className="font-serif text-xl font-bold text-text-main mb-6">
                {clinicInfo.name}
              </h3>
              
              <ul className="flex flex-col gap-5 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-main text-sm leading-relaxed">
                    〒810-0021<br />
                    {clinicInfo.address}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-main text-sm leading-relaxed">
                    西鉄福岡（天神）駅 徒歩6分<br />
                    地下鉄七隈線 天神南駅 徒歩3分
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-main text-sm leading-relaxed">
                    提携駐車場2台完備<br />
                    <span className="text-xs text-text-sub">（満車の場合は近隣のコインパーキングをご利用ください）</span>
                  </p>
                </li>
              </ul>

              {/* 診療時間ミニ表 */}
              <div className="bg-white p-4 border border-border-light rounded-[4px] mb-8">
                <table className="w-full text-xs text-center border-collapse">
                  <thead>
                    <tr className="border-b border-border-light bg-base/50">
                      <th className="py-2 px-1 font-medium text-text-sub">診療</th>
                      <th className="py-2 px-1 font-medium">月</th>
                      <th className="py-2 px-1 font-medium">火</th>
                      <th className="py-2 px-1 font-medium">水</th>
                      <th className="py-2 px-1 font-medium text-text-sub">木</th>
                      <th className="py-2 px-1 font-medium">金</th>
                      <th className="py-2 px-1 font-medium text-primary">土</th>
                      <th className="py-2 px-1 font-medium text-red-500">日</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light">
                    <tr>
                      <td className="py-2 px-1 text-[10px]">10:00<br/>|<br/>13:00</td>
                      <td>●</td><td>●</td><td>●</td><td className="text-text-sub">休</td><td>●</td><td className="text-primary">●</td><td className="text-red-500">休</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-1 text-[10px]">14:30<br/>|<br/>19:00</td>
                      <td>●</td><td>●</td><td>●</td><td className="text-text-sub">休</td><td>●</td><td className="text-primary text-[10px]">17時<br/>まで</td><td className="text-red-500">休</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Link
                href="/access"
                className="inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity group self-start"
              >
                <span className="border-b border-primary pb-0.5">アクセスの詳細を見る</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
