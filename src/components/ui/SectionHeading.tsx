interface SectionHeadingProps {
  en: string;
  ja: string;
  align?: "left" | "center";
  level?: 1 | 2;
}

export function SectionHeading({ en, ja, align = "center", level = 2 }: SectionHeadingProps) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <div className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <span className="font-en italic text-primary text-xl md:text-2xl tracking-wider">
        {en}
      </span>
      <Tag className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-main">
        {ja}
      </Tag>
    </div>
  );
}
