"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Concept() {
  return (
    <section className="bg-base py-[var(--spacing-section-md)] md:py-[var(--spacing-section-lg)]">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <SectionHeading en="Our Concept" ja="あおば歯科の想い" align="center" />
          
          <div className="mt-10 md:mt-14 max-w-[var(--width-content)] w-full relative">
            <div className="flex flex-col gap-6 text-text-main leading-loose text-base md:text-lg">
              <p>
                むし歯が痛くなってから、仕方なく足を運ぶ。<br className="hidden md:block" />
                これまでの歯科医院は、多くの方にとって「できれば行きたくない場所」でした。あおば歯科・矯正歯科が目指すのは、そのネガティブなイメージを払拭し、お口の健康を整えるために心地よく通っていただけるクリニックです。
              </p>
              <p>
                私たちは、一時的な治療で終わるのではなく、次の検診まで良い状態を保てるよう、「予防」を第一に考えています。<br className="hidden md:block" />
                落ち着いてお話しいただける完全個室の診療室や、肉眼では見えないリスクまで把握する精密な検査機器。これらすべては、痛みを我慢して通うのではなく、自分の健康を前向きに点検しに来ていただくための設備です。
              </p>
              <p>
                どんな小さな違和感でも構いません。<br className="hidden md:block" />
                まずはあなたのお悩みをお聞かせください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
