"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Baby, Sparkles, Activity, ShieldCheck, Gem } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const treatments = [
  {
    id: "general",
    name: "一般歯科",
    description: "むし歯や歯周病の治療。できるだけ削らない・抜かないアプローチをご提案します。",
    icon: Stethoscope,
    href: "/treatments#general",
  },
  {
    id: "pediatric",
    name: "小児歯科",
    description: "初回は治療の前に診療室に慣れる時間を設け、お子さまの様子を見ながら少しずつ進めます。",
    icon: Baby,
    href: "/treatments#pediatric",
  },
  {
    id: "preventive",
    name: "予防歯科",
    description: "病気になる前の定期的なメンテナンスで、毎日を快適に過ごせるお口の状態を保ちます。",
    icon: ShieldCheck,
    href: "/treatments#preventive",
  },
  {
    id: "orthodontic",
    name: "矯正歯科",
    description: "見た目の美しさだけでなく、噛み合わせの機能改善を目指す歯列矯正です。",
    icon: Activity,
    href: "/treatments#orthodontic",
  },
  {
    id: "whitening",
    name: "ホワイトニング",
    description: "専用の薬剤で歯の本来の白さを引き出し、清潔感のある口元を実現します。",
    icon: Sparkles,
    href: "/treatments#whitening",
  },
  {
    id: "implant",
    name: "インプラント",
    description: "失った歯を補い、ご自身の歯のようにしっかり噛める機能を取り戻す治療です。",
    icon: Gem,
    href: "/treatments#implant",
  },
];

export function TreatmentsList() {
  return (
    <section className="py-[var(--spacing-section-md)] md:py-[var(--spacing-section-lg)]">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading en="Treatments" ja="診療メニュー" align="center" />

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.id}
                  href={t.href}
                  className="group flex flex-col p-8 bg-white border border-border-light rounded-[4px] hover:bg-base hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{t.name}</h3>
                  <p className="text-text-sub text-sm leading-relaxed mb-8 flex-grow">
                    {t.description}
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm mt-auto group-hover:text-primary/80">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
