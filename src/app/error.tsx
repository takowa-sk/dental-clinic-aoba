"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-red-50 p-8 rounded-full mb-8">
        <AlertTriangle className="w-16 h-16 text-red-400" />
      </div>
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Application Error</h1>
      <p className="text-text-sub mb-10 max-w-md mx-auto leading-loose">
        申し訳ありません。システムエラーが発生しました。<br />
        時間を置いてもう一度お試しいただくか、トップページにお戻りください。
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          もう一度試す
        </Button>
        <Button asChild>
          <Link href="/">トップページへ</Link>
        </Button>
      </div>
    </div>
  );
}
