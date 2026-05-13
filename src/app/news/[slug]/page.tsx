import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { newsItems, getNewsItem } from "@/lib/news";

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return { title: "お知らせ" };
  return {
    title: item.title,
    description: item.body.replace(/\n/g, " ").slice(0, 120),
    alternates: { canonical: `/news/${item.slug}` },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb
        items={[
          { label: "お知らせ", href: "/news" },
          { label: item.title },
        ]}
      />

      <article className="max-w-[var(--width-content)] mx-auto py-12 md:py-16">
        <header className="mb-10 pb-8 border-b border-border-light">
          <div className="flex items-center gap-4 mb-6">
            <time
              dateTime={item.date}
              className="font-en text-text-sub tracking-wider text-sm"
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
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-main leading-tight">
            {item.title}
          </h1>
        </header>

        <div className="text-text-main leading-loose space-y-4 text-sm md:text-base whitespace-pre-line">
          {item.body}
        </div>

        <footer className="mt-16 pt-8 border-t border-border-light">
          <Link
            href="/news"
            className="inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="border-b border-primary pb-0.5">お知らせ一覧へ戻る</span>
          </Link>
        </footer>
      </article>
    </div>
  );
}
