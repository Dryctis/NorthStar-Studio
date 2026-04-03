"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Northstar3DMark } from "@/components/ui/northstar-3d-mark";
import { Section } from "@/components/ui/section";
import { motionPresets } from "@/lib/motion";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-accent/18 blur-[95px]" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-blue-400/16 blur-[110px]" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-violet-300/16 blur-[120px]" />
      </div>

      <div className="relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
        <motion.div
          className="max-w-3xl"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground shadow-[0_8px_24px_rgba(44,39,70,0.08)]"
            {...motionPresets.heroText}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Northstar Studio
          </motion.div>

          <motion.h1
            className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            {...motionPresets.heroText}
          >
            Landing pages y sitios web de alto impacto para negocios de servicios
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
            {...motionPresets.heroText}
          >
            Diseñamos landing pages y experiencias web para negocios que necesitan transmitir más valor,
            generar confianza desde el primer vistazo y convertir su presencia digital en una herramienta
            real de captación.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            {...motionPresets.heroText}
          >
            <Button href="#contact" className="h-11">
              Agendar llamada estratégica
            </Button>
            <Button href="#services" variant="secondary" className="h-11 border-border/90 bg-card/75">
              Ver cómo funciona
            </Button>
          </motion.div>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:mt-9 sm:gap-x-6 sm:text-sm"
            {...motionPresets.heroText}
          >
            <span>Estructura pensada para convertir</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Diseño que transmite valor</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Base sólida y escalable en Next.js</span>
          </motion.div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-xl lg:max-w-none" {...motionPresets.heroVisual}>
          <div className="absolute -left-6 top-8 h-20 w-20 rounded-full border border-accent/30 bg-accent/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.9rem] border border-border/85 bg-card/75 p-4 shadow-[0_28px_70px_rgba(44,39,70,0.16)] backdrop-blur-md sm:rounded-[2.05rem] sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(111,125,243,0.10),transparent_42%,rgba(125,174,255,0.14))]" />

            <div className="relative rounded-[1.45rem] border border-border/80 bg-background/75 p-4 sm:rounded-[1.6rem] sm:p-5">
              <div className="flex items-center justify-between border-b border-border/75 pb-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-foreground sm:text-sm">
                    Isotipo de marca en 3D
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    Branding premium integrado al sistema visual
                  </p>
                </div>

                <span className="rounded-full border border-border/80 bg-card/80 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                  Northstar
                </span>
              </div>

              <div className="mt-4">
                <Northstar3DMark />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/80 bg-card/80 px-3 py-2.5 text-xs text-muted-foreground sm:text-sm">
                  Interacción sutil y enfocada en marca
                </div>
                <div className="rounded-xl border border-border/80 bg-card/80 px-3 py-2.5 text-xs text-muted-foreground sm:text-sm">
                  Experiencia liviana y cuidada para mobile
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
