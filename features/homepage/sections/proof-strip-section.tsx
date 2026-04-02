import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function ProofStripSection() {
  return (
    <Section className="border-y border-border/70 bg-card py-8 md:py-10">
      <div className="grid gap-4 md:grid-cols-3 md:gap-8">
        <Reveal variant="card" delay={0}>
          <div className="rounded-2xl border border-border/70 bg-background px-5 py-4">
            <p className="text-sm font-medium text-foreground">
              Estructura pensada para convertir
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Cada sección cumple una función clara dentro del recorrido del usuario.
            </p>
          </div>
        </Reveal>

        <Reveal variant="card" delay={0.06}>
          <div className="rounded-2xl border border-border/70 bg-background px-5 py-4">
            <p className="text-sm font-medium text-foreground">
              Diseño que transmite valor
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Interfaces limpias, sobrias y alineadas con ofertas de mayor nivel.
            </p>
          </div>
        </Reveal>

        <Reveal variant="card" delay={0.12}>
          <div className="rounded-2xl border border-border/70 bg-background px-5 py-4">
            <p className="text-sm font-medium text-foreground">
              Base sólida para crecer
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Una arquitectura ordenada y reusable, preparada para evolucionar con el negocio.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}