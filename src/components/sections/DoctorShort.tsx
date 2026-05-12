"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clinicInfo } from "@/lib/clinic";

export function DoctorShort() {
  return (
    <section className="bg-base py-[var(--spacing-section-md)] md:py-[var(--spacing-section-lg)]">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
        >
          {/* 画像エリア（左） */}
          <div className="w-full lg:w-5/12 flex-shrink-0 relative">
            <div className="aspect-[4/5] relative rounded-[4px] overflow-hidden">
              <Image
                src="/images/doctor.jpg"
                alt="ドクターの手元・聴診器を写した清潔感のあるカット"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* テキストエリア（右） */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <SectionHeading en="Director" ja="院長ご挨拶" align="left" />
            
            <div className="mt-8 mb-6">
              <p className="text-text-main text-base md:text-lg leading-loose">
                「いつまでも自分の歯で美味しく食べたい」<br className="hidden sm:block" />
                その願いを叶えるためには、トラブルが起きてからではなく、健康な状態をいかに維持するかが鍵となります。<br />
                私たちは、高度な医療技術を提供するだけでなく、患者さまご自身がリラックスして何でも相談できる「良きパートナー」でありたいと考えています。<br />
                不安を安心に変える丁寧な説明と、ご家族揃って長く通える環境づくりをお約束します。
              </p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-text-sub mb-1">
                院長 / 日本歯周病学会認定医
              </p>
              <p className="font-serif text-2xl font-bold tracking-widest text-text-main">
                {clinicInfo.director}
              </p>
            </div>

            <Link
              href="/doctor"
              className="inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity group"
            >
              <span className="border-b border-primary pb-0.5">院長プロフィールを見る</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
