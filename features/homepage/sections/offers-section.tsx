import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const offers = [
  {
    title: "Landing de campaña",
    description:
      "Una página enfocada en una oferta, campaña o servicio específico, diseñada para captar atención y generar una acción clara.",
    bullets: [
      "Mensaje directo y enfocado",
      "Jerarquía visual orientada a conversión",
      "Ideal para campañas o servicios concretos",
    ],
  },
  {
    title: "Landing principal de captación",
    description:
      "Una página central pensada para presentar el negocio con mayor claridad, una propuesta más sólida y un recorrido más convincente.",
    bullets: [
      "Mejor presentación de la oferta",
      "Más confianza desde el primer recorrido",
      "CTA pensado para oportunidades mejor calificadas",
    ],
  },
  {
    title: "Sistema escalable de landings",
    description:
      "Una base reusable para crecer por servicios, campañas o verticales manteniendo consistencia visual y estratégica.",
    bullets: [
      "Componentes reutilizables",
      "Estructura preparada para expansión",
      "Más coherencia entre marca, contenido y conversión",
    ],
  },
];

export function OffersSection() {
  return (
    <Section className="bg-card">
      <Reveal>
        <SectionHeading
          eyebrow="Qué construye Northstar"
          title="Diseñamos landing pages y sitios web para negocios de servicios que necesitan captar mejores oportunidades."
          subtitle="Cada entrega está pensada para presentar mejor tu oferta, transmitir más confianza y convertir tu presencia digital en una herramienta real de captación."
          align="center"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
        {offers.map((offer, index) => (
          <Reveal key={offer.title} variant="card" delay={index * 0.06}>
            <div className="h-full rounded-[1.5rem] border border-border/70 bg-background p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,18,20,0.05)] sm:rounded-[1.6rem] sm:p-6 lg:rounded-[1.75rem] lg:p-7">
              <div className="flex h-full flex-col">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[22px] lg:text-2xl">
                    {offer.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-[15px] lg:text-base">
                    {offer.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 pt-1 sm:mt-7 sm:space-y-3 sm:pt-2 lg:mt-8">
                  {offer.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}