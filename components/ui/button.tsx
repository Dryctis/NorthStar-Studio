import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-secondary",
  ghost:
    "bg-transparent text-foreground hover:bg-secondary",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}