"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, CalendarHeart } from "lucide-react";
import Link from "next/link";
import { clinicInfo } from "@/lib/clinic";

export function MobileContactBar() {
  const { scrollY } = useScroll();
  // 300pxスクロールしたらopacityが0から1へ、yが20から0へ
  const opacity = useTransform(scrollY, [200, 300], [0, 1]);
  const y = useTransform(scrollY, [200, 300], [20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-border-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-3 pb-safe"
    >
      <div className="flex gap-2">
        <a
          href={`tel:${clinicInfo.phone.replace(/-/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-[4px] border border-primary text-primary bg-primary/5 active:bg-primary/10 transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-bold">電話予約</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-[4px] bg-primary text-white active:bg-primary/90 transition-colors"
        >
          <CalendarHeart className="h-5 w-5" />
          <span className="text-[10px] font-bold">WEB予約</span>
        </Link>
      </div>
    </motion.div>
  );
}
