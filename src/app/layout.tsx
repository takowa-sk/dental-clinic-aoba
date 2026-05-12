import type { Metadata, Viewport } from "next";
import { notoSansJP, notoSerifJP, cormorant } from "@/lib/fonts";
import { clinicInfo } from "@/lib/clinic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import "./globals.css";
import { MotionConfig } from "framer-motion";

export const metadata: Metadata = {
  metadataBase: new URL('https://dental-clinic-aoba.vercel.app'),
  title: {
    template: `%s | ${clinicInfo.name}`,
    default: `${clinicInfo.name} | 福岡市中央区今泉の歯科・矯正歯科`,
  },
  description: clinicInfo.concept,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://aoba-dental-example.com",
    siteName: clinicInfo.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: clinicInfo.name,
      },
    ],
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
              "image": "https://aoba-dental-example.com/images/hero.jpg",
              "@id": "https://aoba-dental-example.com",
              "url": "https://aoba-dental-example.com",
              "telephone": clinicInfo.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "中央区今泉1-XX-XX",
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
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ]
            })
          }}
        />
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileContactBar />
        </MotionConfig>
      </body>
    </html>
  );
}
