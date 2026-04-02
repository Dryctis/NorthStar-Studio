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
    "border border-transparent bg-[linear-gradient(120deg,#4f62e8,#6f7df3)] text-primary-foreground shadow-[0_14px_28px_rgba(79,98,232,0.24)] hover:brightness-95",
  secondary:
    "border border-border/90 bg-card/75 text-foreground shadow-[0_10px_24px_rgba(70,57,43,0.08)] hover:bg-secondary",
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
