"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "完全個室診療",
    description: "周りの目や音を気にせず、プライバシーが守られた空間でリラックスして治療に専念していただけます。ご相談内容が外に漏れる心配もありません。",
    image: "/images/room.jpg",
  },
  {
    title: "徹底した滅菌・感染対策",
    description: "世界基準であるクラスB滅菌器を導入し、治療で使用する器具は患者さまごとにパックして滅菌処理。院内感染リスクを極限まで抑えています。",
    image: "/images/sterilization.jpg",
  },
  {
    title: "ご家族で通える環境",
    description: "待合室から目の届くキッズスペースを完備。また、女性歯科医師も在籍しており、小さなお子さまや男性医師に緊張される方も安心してご来院いただけます。",
    image: "/images/kids.jpg",
  },
];

export function Features() {
  return (
    <section className="py-[var(--spacing-section-md)] md:py-[var(--spacing-section-lg)]">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading en="Features" ja="当院の3つの特徴" align="center" />

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-[4px] overflow-hidden mb-6 bg-base">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <span className="font-en text-primary text-3xl font-bold mr-3 italic opacity-40">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-text-sub text-sm leading-loose">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
