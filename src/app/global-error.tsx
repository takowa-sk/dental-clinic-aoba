"use client";

import { Noto_Sans_JP } from "next/font/google";
import { AlertTriangle } from "lucide-react";

const notoLines = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja" className={notoLines.variable}>
      <body className="font-sans antialiased bg-white text-text-main">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="bg-red-50 p-8 rounded-full mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 font-serif">Critical System Error</h1>
          <p className="text-text-sub mb-10 max-w-md mx-auto leading-loose text-sm">
            致命的なエラーが発生しました。アプリケーションを再起動してください。
          </p>
          <button
            onClick={() => reset()}
            className="bg-primary text-white px-8 py-3 rounded-[4px] font-bold hover:opacity-90 transition-opacity"
          >
            再読み込み
          </button>
        </div>
      </body>
    </html>
  );
}
