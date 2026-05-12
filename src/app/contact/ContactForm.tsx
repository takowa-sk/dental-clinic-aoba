"use client";

import { useState } from "react";
import { clinicInfo } from "@/lib/clinic";
import { Phone, CalendarHeart, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Server Actionを模した疑似処理
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 sm:py-24">
        <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
          <CheckCircle2 className="w-16 h-16 text-primary" />
          <h1 className="font-serif text-3xl font-bold">送信が完了しました</h1>
          <p className="text-text-main leading-loose">
            お問い合わせいただきありがとうございます。内容を確認の上、1〜2営業日以内にスタッフよりお電話またはメールにてご連絡差し上げます。
          </p>
          <p className="text-sm text-text-sub">
            ※数日経過しても連絡がない場合は、恐れ入りますがお電話にてお問い合わせください。
          </p>
          <Button asChild className="mt-8">
            <Link href="/">トップページへ戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      {/* 電話導線 */}
      <div className="lg:col-span-4 order-2 lg:order-1">
        <div className="bg-base p-8 rounded-[4px] border border-border-light sticky top-32">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            お電話でのご予約
          </h3>
          <p className="text-2xl font-serif font-bold text-primary mb-2 tracking-wider">
            {clinicInfo.phone}
          </p>
          <p className="text-xs text-text-sub leading-relaxed mb-6">
            平日 10:00-19:00 / 土曜 10:00-17:00<br />
            （休診：木・日・祝）
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded border border-border-light text-xs text-text-main leading-loose">
              <AlertCircle className="w-4 h-4 text-primary mb-2" />
              <strong>当日・翌日のご予約について</strong><br />
              WEBフォームからの送信は確認までにお時間をいただく場合がございます。直近のご予約はお電話が確実です。
            </div>
          </div>
        </div>
      </div>

      {/* フォーム */}
      <div className="lg:col-span-8 order-1 lg:order-2">
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-10 border border-border-light rounded-[4px] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-2" htmlFor="name">
                お名前 <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="例：山田 太郎"
                className="w-full border-b border-border-light focus:border-primary outline-none py-2 text-sm transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-2" htmlFor="kana">
                フリガナ <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input
                required
                id="kana"
                name="kana"
                type="text"
                placeholder="例：ヤマダ タロウ"
                className="w-full border-b border-border-light focus:border-primary outline-none py-2 text-sm transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-2" htmlFor="tel">
                電話番号 <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input
                required
                id="tel"
                name="tel"
                type="tel"
                placeholder="例：09000000000"
                className="w-full border-b border-border-light focus:border-primary outline-none py-2 text-sm transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-2" htmlFor="email">
                メールアドレス <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="例：sample@example.com"
                className="w-full border-b border-border-light focus:border-primary outline-none py-2 text-sm transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold flex items-center gap-2">
              来院区分 <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">必須</span>
            </label>
            <div className="flex gap-6 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="type" value="first" required className="accent-primary" />
                初めて（初診）
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="type" value="repeat" className="accent-primary" />
                通院したことがある（再診）
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold flex items-center gap-2" htmlFor="content">
              ご相談・お問い合わせ内容 <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">必須</span>
            </label>
            <textarea
              required
              id="content"
              name="content"
              rows={5}
              placeholder="症状やご希望のメニュー、ご希望の日時などをご記入ください。"
              className="w-full border border-border-light focus:border-primary outline-none p-3 text-sm transition-colors rounded-[4px] bg-base/30"
            />
          </div>

          <div className="pt-6">
            <p className="text-xs text-text-sub text-center mb-6 leading-loose">
              送信いただいた情報は、お問い合わせへの回答および予約管理の目的以外には使用いたしません。<br />
              当院の「プライバシーポリシー」に同意の上、送信してください。
            </p>
            <Button
              type="submit"
              className="w-full h-16 text-lg font-bold"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "送信中..." : (
                <>
                  <CalendarHeart className="w-5 h-5 mr-2" />
                  この内容で送信する
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
