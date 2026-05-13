import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "サイトマップ",
  description:
    "あおば歯科・矯正歯科のサイトマップ。診療メニュー、院長・スタッフ紹介、医院紹介、初診の方へ、アクセス、お問い合わせ、お知らせなど全ページへのリンク一覧をご案内します。",
  alternates: { canonical: "/sitemap-html" },
};

const sections: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "クリニック",
    links: [
      { href: "/", label: "トップ" },
      { href: "/doctor", label: "院長・スタッフ紹介" },
      { href: "/clinic", label: "医院紹介・設備" },
    ],
  },
  {
    title: "診療メニュー",
    links: [
      { href: "/treatments", label: "診療メニュー一覧" },
      { href: "/treatments#general", label: "一般歯科" },
      { href: "/treatments#pediatric", label: "小児歯科" },
      { href: "/treatments#preventive", label: "予防歯科" },
      { href: "/treatments#orthodontic", label: "矯正歯科" },
      { href: "/treatments#whitening", label: "ホワイトニング" },
      { href: "/treatments#implant", label: "インプラント" },
    ],
  },
  {
    title: "ご来院案内",
    links: [
      { href: "/first-visit", label: "初診の方へ" },
      { href: "/access", label: "アクセス・診療時間" },
      { href: "/contact", label: "お問い合わせ・WEB予約" },
    ],
  },
];

export default function SitemapHtmlPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "サイトマップ" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="Sitemap" ja="サイトマップ" align="center" level={1} />
      </section>

      <div className="max-w-[var(--width-content)] mx-auto space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-main hover:text-primary transition-colors flex items-center before:content-[''] before:block before:w-1 before:h-1 before:bg-primary before:rounded-full before:mr-3"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            お知らせ
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/news"
                className="text-text-main hover:text-primary transition-colors flex items-center before:content-[''] before:block before:w-1 before:h-1 before:bg-primary before:rounded-full before:mr-3"
              >
                お知らせ一覧
              </Link>
            </li>
            {newsItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-text-sub text-sm hover:text-primary transition-colors flex items-center before:content-['└'] before:mr-2 before:opacity-40"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border-light">
            その他
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/privacy-policy"
                className="text-text-main hover:text-primary transition-colors flex items-center before:content-[''] before:block before:w-1 before:h-1 before:bg-primary before:rounded-full before:mr-3"
              >
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
