import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const faqItems = [
  {
    id: "faq-1",
    question: "¿Qué tipo de negocios pueden aprovechar mejor este enfoque?",
    answer:
      "Northstar está pensado para negocios que venden servicios de mayor valor y necesitan que su presencia digital comunique mejor su nivel, su propuesta y su capacidad de generar confianza desde el primer recorrido.",
  },
  {
    id: "faq-2",
    question: "¿Trabajan desde plantillas o cada proyecto se construye a medida?",
    answer:
      "La base del sistema está diseñada para ser reusable, pero cada proyecto se plantea con una narrativa, una jerarquía y una dirección visual alineadas con la oferta y el tipo de cliente que se quiere atraer.",
  },
  {
    id: "faq-3",
    question: "¿Esto sirve solo para una landing o también puede crecer después?",
    answer:
      "La idea no es construir una página aislada, sino una base clara que pueda extenderse a nuevos servicios, campañas o verticales sin perder consistencia visual ni criterio estratégico.",
  },
  {
    id: "faq-4",
    question: "¿Qué cambia realmente cuando se replantea un sitio así?",
    answer:
      "Normalmente cambia la claridad del mensaje, la forma en que se presenta la oferta, la percepción de valor y la facilidad con la que una visita puede convertirse en una conversación con más intención.",
  },
  {
    id: "faq-5",
    question: "¿Qué tan involucrado tiene que estar el cliente durante el proceso?",
    answer:
      "Lo suficiente para aportar contexto, validar dirección y tomar decisiones clave, pero con un proceso claro para que el trabajo avance con orden y no dependa de intercambios constantes o desgastantes.",
  },
  {
    id: "faq-6",
    question: "¿Qué pasa si ya existe tráfico pero el sitio no está convirtiendo como debería?",
    answer:
      "Ese es precisamente uno de los escenarios donde más valor aporta este tipo de trabajo: cuando la demanda ya existe, pero la estructura actual no la está aprovechando con suficiente claridad, confianza o intención comercial.",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <Reveal>
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Preguntas frecuentes antes de replantear tu sitio o landing page."
          subtitle="Estas son algunas de las preguntas más comunes cuando un negocio empieza a replantear su presencia digital con una intención más seria y orientada a captación."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.06}>
        <Accordion items={faqItems} className="mt-16" />
      </Reveal>
    </Section>
  );
}