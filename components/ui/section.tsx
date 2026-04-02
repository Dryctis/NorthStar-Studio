import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  withContainer = true,
}: SectionProps) {
  const content = withContainer ? (
    <Container className={containerClassName}>{children}</Container>
  ) : (
    children
  );

  return (
    <section id={id} className={cn("py-16 md:py-24 xl:py-28", className)}>
      {content}
    </section>
  );
}