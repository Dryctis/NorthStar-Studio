"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motionPresets } from "@/lib/motion";

export function HeroSection() {
  return (
    <Section className="section-surface-soft overflow-hidden py-12 sm:py-14 md:py-22 lg:py-30">
      <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-[1.14fr_0.86fr] lg:gap-20">
        <motion.div
          className="max-w-2xl lg:max-w-3xl"
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
          <motion.p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-5 sm:text-xs md:mb-6"
            {...motionPresets.heroText}
          >
            Northstar Studio
          </motion.p>

          <motion.h1
            className="max-w-4xl text-[2.35rem] font-semibold leading-[1.03] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            {...motionPresets.heroText}
          >
           Landing pages y sitios web de alto impacto para negocios de servicios
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8 md:mt-8 md:text-xl"
            {...motionPresets.heroText}
          >
            Diseñamos landing pages y experiencias web para negocios que
            necesitan transmitir más valor, generar confianza desde el primer
            vistazo y convertir su presencia digital en una herramienta real de
            captación.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4 md:mt-11"
            {...motionPresets.heroText}
          >
            <Button href="#contact" className="h-12 px-7 text-sm shadow-[0_10px_26px_rgba(17,18,20,0.16)] sm:h-12 sm:text-[15px]">
              Agendar llamada estratégica
            </Button>
            <Button href="#services" variant="secondary" className="h-12 px-6 text-sm sm:text-[15px]">
              Ver cómo funciona
            </Button>
          </motion.div>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:mt-9 sm:gap-x-6 sm:text-sm md:mt-11 md:gap-x-8"
            {...motionPresets.heroText}
          >
            <span>Estructura pensada para convertir</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Diseño que transmite valor</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Base sólida y escalable en NextJS</span>
          </motion.div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none" {...motionPresets.heroVisual}>
          <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-accent/8 blur-3xl sm:block md:-left-10 md:top-10 md:h-32 md:w-32" />
          <div className="absolute -right-6 bottom-5 hidden h-24 w-24 rounded-full bg-foreground/5 blur-3xl sm:block md:-right-8 md:bottom-6 md:h-28 md:w-28" />

          <div className="relative rounded-[1.6rem] border border-border/80 bg-card p-3 shadow-[0_18px_52px_rgba(17,18,20,0.06)] sm:rounded-[1.8rem] sm:p-4 md:rounded-[2rem]">
            <div className="rounded-[1.2rem] border border-border/70 bg-background p-4 sm:rounded-[1.35rem] sm:p-4 md:rounded-[1.5rem] md:p-5">
              <div className="flex items-center justify-between border-b border-border/70 pb-3 sm:pb-4">
                <div>
                  <p className="text-xs font-medium text-foreground sm:text-sm">
                    Vista previa del sistema
                  </p>
                  <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                    Estructura premium para captación de leads
                  </p>
                </div>

                <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] text-muted-foreground sm:px-3 sm:text-xs">
                  Northstar
                </span>
              </div>

              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <div className="rounded-2xl border border-border/70 bg-card p-3 sm:p-4">
                  <div className="h-2.5 w-16 rounded-full bg-secondary sm:h-3 sm:w-20" />
                  <div className="mt-3 h-6 w-4/5 rounded-full bg-secondary sm:mt-4 sm:h-8" />
                  <div className="mt-2 h-6 w-3/5 rounded-full bg-secondary sm:mt-3 sm:h-8" />
                  <div className="mt-4 flex gap-2.5 sm:mt-6 sm:gap-3">
                    <div className="h-10 w-28 rounded-full bg-foreground sm:h-11 sm:w-40" />
                    <div className="h-10 w-24 rounded-full border border-border bg-background sm:h-11 sm:w-36" />
                  </div>
                </div>

                <div className="grid gap-3 grid-cols-3 sm:gap-4">
                  <div className="rounded-2xl border border-border/70 bg-card p-3 sm:p-4">
                    <div className="h-2.5 w-10 rounded-full bg-secondary sm:h-3 sm:w-16" />
                    <div className="mt-3 h-4 w-full rounded-full bg-secondary sm:mt-4 sm:h-5" />
                    <div className="mt-2 h-4 w-4/5 rounded-full bg-secondary sm:h-5" />
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-3 sm:p-4">
                    <div className="h-2.5 w-10 rounded-full bg-secondary sm:h-3 sm:w-16" />
                    <div className="mt-3 h-4 w-full rounded-full bg-secondary sm:mt-4 sm:h-5" />
                    <div className="mt-2 h-4 w-3/4 rounded-full bg-secondary sm:h-5" />
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-3 sm:p-4">
                    <div className="h-2.5 w-10 rounded-full bg-secondary sm:h-3 sm:w-16" />
                    <div className="mt-3 h-4 w-full rounded-full bg-secondary sm:mt-4 sm:h-5" />
                    <div className="mt-2 h-4 w-2/3 rounded-full bg-secondary sm:h-5" />
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-16 rounded-full bg-secondary sm:h-3 sm:w-20" />
                      <div className="mt-2.5 h-5 w-28 rounded-full bg-secondary sm:mt-3 sm:h-6 sm:w-40" />
                    </div>

                    <div className="rounded-full border border-border bg-background px-2.5 py-1.5 text-[10px] text-muted-foreground sm:px-3 sm:py-2 sm:text-xs">
                      Caso destacado
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                    <div className="h-3.5 w-full rounded-full bg-secondary sm:h-4" />
                    <div className="h-3.5 w-11/12 rounded-full bg-secondary sm:h-4" />
                    <div className="h-3.5 w-9/12 rounded-full bg-secondary sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
