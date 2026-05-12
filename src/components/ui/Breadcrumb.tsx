"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex py-4 overflow-x-auto whitespace-nowrap scrollbar-hide" aria-label="Breadcrumb">
      <ol className="flex items-center text-xs sm:text-sm text-text-sub">
        <li className="flex items-center">
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="h-3.5 w-3.5 mr-1" />
            <span>トップ</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 sm:mx-2 opacity-40 flex-shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-main font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
