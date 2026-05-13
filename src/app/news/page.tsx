import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "あおば歯科・矯正歯科のお知らせ一覧。休診情報、予防歯科コラム、感染対策の取り組み、求人情報など、患者さまにお伝えしたい最新情報を掲載しています。",
  alternates: { canonical: "/news" },
};

export default function NewsListPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "お知らせ" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="News" ja="お知らせ" align="center" level={1} />
      </section>

      <ul className="border-t border-border-light max-w-[var(--width-content)] mx-auto">
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
                <span
                  className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
                    item.category === "休診情報"
                      ? "bg-red-50 text-red-600 border border-red-100"
                      : item.category === "コラム"
                        ? "bg-blue-50 text-blue-600 border border-blue-100"
                        : "bg-primary/10 text-primary border border-primary/20"
                  }`}
                >
                  {item.category}
                </span>
              </div>
              <p className="text-text-main group-hover:text-primary transition-colors font-medium flex-1">
                {item.title}
              </p>
              <ArrowRight className="hidden sm:block w-4 h-4 text-text-sub group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
