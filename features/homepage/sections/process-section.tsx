"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
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

type ProcessStepCardProps = {
  step: Step;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function ProcessStepCard({ step, index, total, scrollYProgress }: ProcessStepCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const start = index * (0.64 / total);
  const end = start + 0.27;

  const cardProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(cardProgress, [0, 1], [40, 0]);
  const opacity = useTransform(cardProgress, [0, 1], [0.45, 1]);
  const scale = useTransform(cardProgress, [0, 1], [0.97, 1]);
  const glowOpacity = useTransform(cardProgress, [0, 1], [0, 0.2]);

  return (
    <motion.div
      className="relative lg:sticky"
      style={{
        top: `calc(6rem + ${index * 1.15}rem)`,
        y: prefersReducedMotion ? 0 : y,
        opacity: prefersReducedMotion ? 1 : opacity,
        scale: prefersReducedMotion ? 1 : scale,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_20%_-10%,rgba(111,125,243,0.22),transparent_55%)]"
        style={{ opacity: prefersReducedMotion ? 0.08 : glowOpacity }}
      />

      <div className="relative rounded-[1.5rem] border border-border/75 bg-card/90 p-5 shadow-[0_16px_38px_rgba(44,39,70,0.1)] transition-all duration-200 ease-out sm:rounded-[1.6rem] sm:p-6 lg:rounded-[1.75rem] lg:p-7">
        <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground sm:text-xs">
          {step.number}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:mt-4 sm:text-[22px] lg:text-2xl">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-[15px] lg:text-base">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 82%", "end 36%"],
  });

  return (
    <Section id="process">
      <Reveal>
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title="Una forma de trabajo clara, pensada para construir con intención."
          subtitle="Cada etapa existe para que el sitio no solo se vea bien, sino que comunique mejor, convierta mejor y pueda sostener el crecimiento del negocio."
          align="center"
        />
      </Reveal>

      <div ref={stackRef} className="relative mt-10 space-y-4 sm:mt-12 sm:space-y-5 lg:mt-16 lg:space-y-0">
        {steps.map((step, index) => (
          <div key={step.number} className={index === 0 ? "" : "lg:-mt-20"}>
            <ProcessStepCard
              step={step}
              index={index}
              total={steps.length}
              scrollYProgress={scrollYProgress}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
