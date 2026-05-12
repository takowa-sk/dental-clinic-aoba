# あおば歯科・矯正歯科 コーポレートサイト

実在するクリニックと遜色ない品質を目指した、歯科クリニックのポートフォリオ用コーポレートサイトです。

## 技術スタック

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Noto Sans JP / Noto Serif JP / Cormorant Garamond

## 特徴

- **高精細なタイポグラフィ**: 和文見出しに明朝体、英文にセリフ体、本文にサンセリフ体を使い分け、誠実さと高級感を両立。
- **モダンなスタイリング**: Tailwind v4 のデザイントークンを活用した一貫性のあるデザインシステム。
- **アクセシビリティ**: セマンティック HTML、適切な ARIA 属性、レスポンシブ対応。
- **SEO 最適化**: JSON-LD 構造化データ、動的メタデータ、静的サイトマップ/robots.txt。
- **インタラクティブ**: Framer Motion による控えめながら洗練されたスクロールアニメーション。

## ディレクトリ構成

- `src/app/`: ページコンポーネント、ルーティング
- `src/components/`:
  - `ui/`: 汎用的な UI パーツ（Button, SectionHeading, Breadcrumb等）
  - `layout/`: ヘッダー、フッター等の共通レイアウト
  - `sections/`: トップページの各セクション
- `src/lib/`: フォント設定、クリニック情報の定数管理、ユーティリティ
- `public/`: 画像、favicon、SEO関連ファイル

## 開発・ビルド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド（本番用）
npm run build
```

※プロジェクトパスに日本語が含まれる環境では、Turbopack の制約により `npm run build` が失敗する場合があります。その場合はプロジェクトディレクトリ名を半角英数字に変更して実行してください。

## ライセンス

MIT License
