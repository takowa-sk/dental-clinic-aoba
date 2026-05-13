import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ・WEB予約",
  description: "あおば歯科・矯正歯科への WEB 予約・お問い合わせフォーム。24時間受け付けております。当日・翌日のご予約や、お急ぎの方はお電話 092-000-0000（平日10:00-19:00 / 土曜10:00-17:00）まで直接ご連絡ください。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-[var(--width-container)] mx-auto px-4 sm:px-6 pb-24">
      <Breadcrumb items={[{ label: "お問い合わせ" }]} />

      <section className="py-12 md:py-16">
        <SectionHeading en="Contact" ja="お問い合わせ・WEB予約" align="center" level={1} />
        <p className="mt-8 max-w-[var(--width-content)] mx-auto text-text-main text-center leading-loose">
          WEBからのご予約・お問い合わせは以下のフォームより承っております。<br />
          当日のご予約や、お急ぎの方はお電話にてご連絡ください。
        </p>
      </section>

      <ContactForm />
    </div>
  );
}
