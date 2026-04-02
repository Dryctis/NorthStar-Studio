import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const painPoints = [
  {
    title: "La oferta se percibe por debajo de su verdadero nivel",
    description:
      "Cuando el sitio no acompaña la calidad del servicio, el mercado lo nota antes de iniciar contacto.",
  },
  {
    title: "El tráfico llega, pero no siempre encuentra claridad",
    description:
      "Una estructura débil genera fricción y reduce la probabilidad de convertir interés en conversación.",
  },
  {
    title: "Se generan contactos con menos intención o menos encaje",
    description:
      "Sin una narrativa bien construida, el sitio puede atraer volumen, pero no necesariamente mejores oportunidades.",
  },
  {
    title: "Crecer después requiere más esfuerzo del necesario",
    description:
      "Cuando no existe una base clara, cada nueva landing o campaña termina costando más tiempo y más energía.",
  },
];

export function CostOfWeakWebsiteSection() {
  return (
    <Section id="services">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Presencia digital y percepción de valor"
            title="Cuando un sitio no refleja el verdadero nivel del negocio, se pierden oportunidades."
            subtitle="Una presencia digital poco clara o poco convincente puede afectar la percepción de valor, la calidad de los leads y el rendimiento de cada visita."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-border/70 bg-card p-6"
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}