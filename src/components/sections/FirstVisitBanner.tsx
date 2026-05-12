"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FirstVisitBanner() {
  return (
    <section className="pb-[var(--spacing-section-md)] md:pb-[var(--spacing-section-lg)]">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-base border-t-4 border-primary p-8 md:p-12 rounded-[4px] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-6 flex-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-primary">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-bold mb-3">初めてご来院される方へ</h2>
              <p className="text-text-main text-sm md:text-base leading-relaxed">
                当院は予約制となっております。初診の際は、検査・カウンセリングのため約60分から90分のお時間をいただいております。<br className="hidden lg:block" />
                保険証とおくすり手帳をお持ちの上、ご予約時間の10分前にお越しください。
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button asChild size="lg" className="w-full md:w-auto text-base group">
              <Link href="/first-visit">
                来院の流れを見る
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
