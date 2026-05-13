# あおば歯科・矯正歯科 コーポレートサイト

実在するクリニックと遜色ない品質を目指した、歯科クリニックのポートフォリオ用コーポレートサイトです。**読みやすさ・アクセシビリティ・情報設計** を軸に、医療系サイトに求められる信頼感と通いやすさの両立を意識して設計しています。

## 技術スタック

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4（CSS変数ベースのデザイントークン）
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Noto Sans JP / Noto Serif JP / Cormorant Garamond

## 設計判断のポイント

### タイポグラフィ

和文見出しに **明朝体（Noto Serif JP）**、英文ラベルに **セリフ体（Cormorant Garamond）**、本文にサンセリフ体（Noto Sans JP）を使い分けています。医療系サイトに求められる誠実さと、ポートフォリオに求められる審美性の両立を狙ったフォント選定です。

### 配色とトークン設計

`globals.css` の `@theme` ブロックに配色・スペーシング・コンテンツ幅を CSS 変数として集約。プライマリカラーには医療系の落ち着きを表す深緑系（`#1A4A44`）を採用し、文字色は十分なコントラスト比（WCAG AA 以上）を確保しています。

### アクセシビリティ

- セマンティック HTML（各ページに `<h1>` 1つ、見出し階層を遵守）
- ARIA 属性の付与（`aria-expanded` / `aria-haspopup` / `aria-controls` 等）
- キーボード操作対応（Escape キーでメニュー閉鎖、外側クリックで dropdown 閉鎖）
- スキップリンク（メインコンテンツへの飛び先）
- `prefers-reduced-motion` の尊重
- ContactForm の `<fieldset>` / `<legend>` / `autocomplete` / `inputMode` 等の細部対応

### SEO・構造化データ

- ページごとの `title` / `description` / `canonical` を `generateMetadata` で動的に管理
- `<Dentist>` 型の JSON-LD 構造化データ（昼休みを含む `openingHoursSpecification` の正確な記述）
- `app/sitemap.ts` と `app/robots.ts` による動的生成
- `openGraph` / `twitter` カード設定

### 情報設計

「初診の方へ」「アクセス」「料金」「お知らせ」など、患者が訪問時に欲しい情報を 1〜2 クリック以内で辿れる導線設計。サイトマップ（HTML 版）も別途用意し、検索性を確保しています。

### インタラクション

Framer Motion による控えめなスクロールアニメーション。ユーザーの注意を奪わず、ページの構造を理解しやすくする補助としての位置付けです。

## ディレクトリ構成

- `src/app/`: ページコンポーネント、ルーティング
  - `news/[slug]/`: お知らせ個別記事（SSG）
  - `privacy-policy/`: プライバシーポリシー
  - `sitemap-html/`: HTML 形式のサイトマップ
  - `sitemap.ts` / `robots.ts`: 動的生成
- `src/components/`:
  - `ui/`: 汎用的な UI パーツ（Button, SectionHeading, Breadcrumb 等）
  - `layout/`: ヘッダー、フッター、モバイル下部固定 CTA
  - `sections/`: トップページの各セクション
- `src/lib/`: フォント設定、クリニック情報の定数、お知らせデータ、ユーティリティ
- `public/images/`: WebP 化済みの画像（最大幅 2000px、quality 80）

## 開発・ビルド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド（本番用）
npm run build

# 型チェック
npx tsc --noEmit

# Lint
npm run lint
```

※プロジェクトパスに日本語が含まれる環境では、Turbopack の制約によりビルドが失敗する場合があります。その場合はプロジェクトディレクトリ名を半角英数字に変更して実行してください。

## ライセンス

MIT License
