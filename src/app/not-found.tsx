import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-base p-8 rounded-full mb-8">
        <SearchX className="w-16 h-16 text-text-sub opacity-20" />
      </div>
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">ページが見つかりません</h1>
      <p className="text-text-sub mb-10 max-w-md mx-auto leading-loose">
        お探しのページは見つかりませんでした。<br />
        一時的にアクセスできないか、移動または削除された可能性があります。
      </p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          トップページへ戻る
        </Link>
      </Button>
    </div>
  );
}
