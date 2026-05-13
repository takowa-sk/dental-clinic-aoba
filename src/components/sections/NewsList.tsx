"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { newsItems } from "@/lib/news";

export function NewsList() {
  return (
    <section className="py-[var(--spacing-section-md)] md:py-[var(--spacing-section-lg)]">
      <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start"
        >
          <div className="w-full md:w-1/4 md:sticky md:top-32">
            <SectionHeading en="News" ja="お知らせ" align="left" />
            <Link
              href="/news"
              className="hidden md:inline-flex items-center text-text-sub font-bold hover:text-primary transition-colors mt-6 text-sm group"
            >
              お知らせ一覧を見る
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="w-full md:w-3/4 flex flex-col">
            <ul className="border-t border-border-light">
              {newsItems.map((item) => (
                <li key={item.slug} className="border-b border-border-light group">
                  <Link
                    href={`/news/${item.slug}`}
                    className="flex flex-col sm:flex-row sm:items-center py-5 sm:py-6 gap-3 sm:gap-6 hover:bg-base/50 transition-colors px-2 -mx-2"
                  >
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <time
                        dateTime={item.date}
                        className="font-en text-text-sub tracking-wider"
                      >
                        {item.displayDate}
                      </time>
                      <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
                        item.category === "休診情報" ? "bg-red-50 text-red-600 border border-red-100" :
                        item.category === "コラム" ? "bg-blue-50 text-blue-600 border border-blue-100" :
                        "bg-primary/10 text-primary border border-primary/20"
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-text-main group-hover:text-primary transition-colors font-medium">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/news"
              className="inline-flex md:hidden items-center text-text-sub font-bold hover:text-primary transition-colors mt-6 text-sm group self-end"
            >
              お知らせ一覧を見る
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
