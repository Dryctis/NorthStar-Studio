import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}