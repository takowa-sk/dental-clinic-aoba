"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, CalendarHeart, ChevronDown } from "lucide-react";
import { clinicInfo } from "@/lib/clinic";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/treatments", label: "診療メニュー" },
    { href: "/doctor", label: "院長・スタッフ" },
    { href: "/clinic", label: "医院紹介" },
    { href: "/first-visit", label: "初診の方へ" },
    { href: "/access", label: "アクセス" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border-light shadow-sm">
      <div className="mx-auto flex h-16 sm:h-20 max-w-[var(--width-container)] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* シンプルなロゴタイポグラフィ */}
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary">
            {clinicInfo.name}
          </span>
        </Link>

        {/* PC Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-text-main">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* 予約 CTA */}
          <div className="relative">
            <Button
              className="flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              ご予約はこちら
              <ChevronDown className="h-4 w-4" />
            </Button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-md bg-white p-4 shadow-lg border border-border-light flex flex-col gap-4">
                <div>
                  <p className="text-xs text-text-sub mb-1">お電話でのご予約</p>
                  <a
                    href={`tel:${clinicInfo.phone.replace(/-/g, "")}`}
                    className="flex items-center gap-2 text-primary font-bold text-lg hover:opacity-80 transition-opacity"
                  >
                    <Phone className="h-5 w-5" />
                    {clinicInfo.phone}
                  </a>
                </div>
                <div className="h-px bg-border-light w-full" />
                <div>
                  <p className="text-xs text-text-sub mb-2">24時間受付</p>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact" onClick={() => setIsDropdownOpen(false)}>
                      <CalendarHeart className="h-4 w-4 mr-2" />
                      WEB予約フォームへ
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-text-main hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border-light shadow-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-text-main py-2 border-b border-border-light/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${clinicInfo.phone.replace(/-/g, "")}`}
                className="flex items-center justify-center gap-2 py-3 rounded-[4px] border border-primary text-primary font-bold bg-primary/5"
              >
                <Phone className="h-5 w-5" />
                {clinicInfo.phone}
              </a>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <CalendarHeart className="h-5 w-5 mr-2" />
                  WEB予約フォームへ
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
