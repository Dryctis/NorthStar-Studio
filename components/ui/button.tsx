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
    "border border-transparent bg-foreground text-background shadow-[0_12px_35px_rgba(119,181,255,0.24)] hover:brightness-95",
  secondary:
    "border border-border bg-card/70 text-foreground hover:bg-secondary",
  ghost:
    "bg-transparent text-foreground hover:bg-secondary",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-[color,background-color,border-color,box-shadow,filter] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

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
