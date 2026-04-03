import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Diagnóstico y enfoque",
    description:
      "Empezamos entendiendo la oferta, el tipo de cliente que se quiere atraer y el punto exacto donde la presencia digital está perdiendo fuerza.",
  },
  {
    number: "02",
    title: "Estructura y mensaje",
    description:
      "Definimos una narrativa más clara, una jerarquía visual mejor pensada y una landing orientada a generar una acción concreta.",
  },
  {
    number: "03",
    title: "Diseño y construcción",
    description:
      "Diseñamos una experiencia visual sobria y convincente, y la desarrollamos sobre una base limpia, rápida y escalable.",
  },
  {
    number: "04",
    title: "Lanzamiento y evolución",
    description:
      "La entrega no queda pensada como una pieza aislada, sino como una base que pueda crecer con campañas, servicios o nuevas verticales.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="section-surface-ivory section-divider-soft">
      <Reveal>
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title="Una forma de trabajo clara, pensada para construir con intención."
          subtitle="Cada etapa existe para que el sitio no solo se vea bien, sino que comunique mejor, convierta mejor y pueda sostener el crecimiento del negocio."
          align="center"
        />
      </Reveal>

      <div className="relative mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border/80 to-transparent lg:block"
        />
        {steps.map((step, index) => (
          <Reveal key={step.number} variant="card" delay={index * 0.06}>
            <article
              className="relative rounded-[1.5rem] border border-border/70 bg-card p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,18,20,0.05)] sm:rounded-[1.6rem] sm:p-6 lg:rounded-[1.75rem] lg:p-7"
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-border/80 bg-background px-3 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground sm:h-10 sm:min-w-10 sm:text-xs">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-border/70" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[22px] lg:text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-[15px] lg:text-base">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
