import type { Metadata, Viewport } from "next";
import { notoSansJP, notoSerifJP, cormorant } from "@/lib/fonts";
import { clinicInfo } from "@/lib/clinic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import "./globals.css";
import { MotionConfig } from "framer-motion";

const SITE_URL = "https://dental-clinic-aoba.vercel.app";
const SITE_DESCRIPTION =
  "福岡市中央区今泉のあおば歯科・矯正歯科。一般歯科・小児歯科・予防歯科・矯正歯科・ホワイトニング・インプラントに対応。個室・半個室の診療室と歯周病学会認定医による精密な治療で、痛みに配慮した予防中心の歯科診療をご提供します。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${clinicInfo.name}`,
    default: `${clinicInfo.name} | 福岡市中央区今泉`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: clinicInfo.name,
    title: `${clinicInfo.name} | 福岡市中央区今泉`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${clinicInfo.name} 待合室`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicInfo.name} | 福岡市中央区今泉`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans text-text-main bg-base antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": clinicInfo.name,
              "image": `${SITE_URL}/images/hero.jpg`,
              "@id": SITE_URL,
              "url": SITE_URL,
              "telephone": "+81-92-000-0000",
              "priceRange": "¥¥",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "中央区今泉1-X-XX あおばビル2F",
                "addressLocality": "福岡市",
                "addressRegion": "福岡県",
                "postalCode": "810-0021",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.5854,
                "longitude": 130.3958
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
                  "opens": "10:00",
                  "closes": "13:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
                  "opens": "14:30",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "13:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "14:30",
                  "closes": "17:00"
                }
              ]
            })
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-[4px] focus:shadow-lg focus:outline-none"
        >
          メインコンテンツへスキップ
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <MobileContactBar />
        </MotionConfig>
      </body>
    </html>
  );
}
