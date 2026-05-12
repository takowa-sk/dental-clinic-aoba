"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicInfo } from "@/lib/clinic";

export function Hero() {
  return (
    <section className="relative w-full max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pt-6 sm:pt-12 pb-12 sm:pb-24 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex flex-col items-start w-full lg:w-auto"
      >
        <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.3] font-bold text-text-main tracking-tight mb-6">
          <span className="block mb-2">「行かなきゃ」を、</span>
          <span className="block">「行ってよかった」へ。</span>
        </h1>
        <p className="text-text-sub text-base sm:text-lg leading-relaxed mb-10 max-w-md">
          私たちは、痛みを抑えた丁寧な治療と徹底した予防管理で、あなたとご家族の生涯の健康をサポートします。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="h-14 px-8 text-base shadow-sm">
            <Link href="/contact">
              <CalendarHeart className="h-5 w-5 mr-2" />
              WEB予約フォームへ
            </Link>
          </Button>
          <a
            href={`tel:${clinicInfo.phone.replace(/-/g, "")}`}
            className="flex items-center justify-center h-14 px-8 rounded-[4px] border border-border-light bg-white hover:bg-base transition-colors text-text-main font-bold text-lg"
          >
            <Phone className="h-5 w-5 mr-3 text-primary" />
            {clinicInfo.phone}
          </a>
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="flex-1 w-full relative aspect-[4/3] lg:aspect-square max-h-[600px]"
      >
        <div className="absolute inset-0 rounded-[4px] overflow-hidden bg-base">
          <Image
            src="/images/hero.jpg"
            alt="自然光が差し込む清潔な歯科クリニックの待合室"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Decorative element */}
        <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-[4px] -z-10" />
      </motion.div>

    </section>
  );
}
