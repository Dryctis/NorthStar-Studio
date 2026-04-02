import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    title: "Jerarquía más clara",
    description:
      "La información importante aparece en el momento correcto y con el peso visual adecuado.",
  },
  {
    title: "Más confianza desde el recorrido",
    description:
      "La estructura ayuda a transmitir valor antes de pedir una acción o iniciar contacto.",
  },
  {
    title: "Menos fricción, más claridad",
    description:
      "Cada sección guía al usuario sin distraerlo ni obligarlo a interpretar demasiado.",
  },
  {
    title: "CTA con más intención",
    description:
      "La conversión no depende solo del botón, sino del contexto que lo vuelve lógico.",
  },
];

export function WhyItConvertsSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Por qué funciona"
          title="Una landing page convierte mejor cuando cada parte cumple una función clara."
          subtitle="La diferencia no está solo en el diseño visual. Está en cómo se organiza el mensaje, cómo se construye la confianza y cómo se guía al usuario hacia una acción con más intención."
          align="center"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:mt-16 xl:grid-cols-4 xl:gap-6">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} variant="card" delay={index * 0.06}>
            <div className="rounded-[1.5rem] border border-border/70 bg-card p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,18,20,0.05)] sm:rounded-[1.6rem] sm:p-6 lg:rounded-[1.75rem] lg:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[22px] lg:text-2xl">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-[15px] lg:text-base">
                {principle.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}