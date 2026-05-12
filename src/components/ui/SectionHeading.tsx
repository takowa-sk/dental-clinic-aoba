interface SectionHeadingProps {
  en: string;
  ja: string;
  align?: "left" | "center";
}

export function SectionHeading({ en, ja, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <span className="font-en italic text-primary text-xl md:text-2xl tracking-wider">
        {en}
      </span>
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-main">
        {ja}
      </h2>
    </div>
  );
}
