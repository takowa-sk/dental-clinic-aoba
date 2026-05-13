import Link from "next/link";
import { clinicInfo } from "@/lib/clinic";

export function Footer() {
  const navLinks = [
    { href: "/treatments", label: "診療メニュー" },
    { href: "/doctor", label: "院長・スタッフ" },
    { href: "/clinic", label: "医院紹介" },
    { href: "/first-visit", label: "初診の方へ" },
    { href: "/access", label: "アクセス" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <footer className="bg-white border-t border-border-light pt-16 pb-8 lg:pb-12 mt-auto">
      <div className="mx-auto max-w-[var(--width-container)] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Clinic Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                  {clinicInfo.name}
                </span>
              </Link>
              <p className="text-sm text-text-main leading-relaxed mb-1">
                〒810-0021<br />
                {clinicInfo.address}
              </p>
              <p className="text-sm text-text-sub">
                {clinicInfo.access}
              </p>
            </div>
            
            <div className="p-4 bg-base rounded-[4px] border border-border-light max-w-sm">
              <p className="text-xs text-text-sub mb-1">ご予約・お問い合わせ</p>
              <p className="text-2xl font-bold text-primary font-serif tracking-wider mb-2">
                {clinicInfo.phone}
              </p>
              <div className="text-xs text-text-sub space-y-1">
                <p>【休診日】 {clinicInfo.businessHours.closed}</p>
              </div>
            </div>
          </div>

          {/* Business Hours Table */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-lg font-bold mb-4">診療時間</h3>
            <table className="w-full text-sm text-center border-collapse">
              <thead>
                <tr className="border-b border-border-light bg-base">
                  <th className="py-2 px-1 font-medium text-text-sub">診療時間</th>
                  <th className="py-2 px-1 font-medium text-text-main">月</th>
                  <th className="py-2 px-1 font-medium text-text-main">火</th>
                  <th className="py-2 px-1 font-medium text-text-main">水</th>
                  <th className="py-2 px-1 font-medium text-text-sub">木</th>
                  <th className="py-2 px-1 font-medium text-text-main">金</th>
                  <th className="py-2 px-1 font-medium text-primary">土</th>
                  <th className="py-2 px-1 font-medium text-red-500">日</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                <tr>
                  <td className="py-3 px-1 text-xs whitespace-nowrap">10:00<br/>|<br/>13:00</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1 text-text-sub">休</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1 text-primary">●</td>
                  <td className="py-3 px-1 text-red-500">休</td>
                </tr>
                <tr>
                  <td className="py-3 px-1 text-xs whitespace-nowrap">14:30<br/>|<br/>19:00</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1 text-text-sub">休</td>
                  <td className="py-3 px-1">●</td>
                  <td className="py-3 px-1 text-xs text-primary">17:00<br/>まで</td>
                  <td className="py-3 px-1 text-red-500">休</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-text-sub mt-2">
              ※祝日は休診となります。<br />
              ※最終受付は診療終了時間の30分前です。
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:justify-self-end">
            <h3 className="font-serif text-lg font-bold mb-4">メニュー</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-main">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center before:content-[''] before:block before:w-1 before:h-1 before:bg-primary before:rounded-full before:mr-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-sub">
            &copy; {new Date().getFullYear()} {clinicInfo.name} All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-text-sub">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/sitemap-html" className="hover:text-primary transition-colors">
              サイトマップ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
