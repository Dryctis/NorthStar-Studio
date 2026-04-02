"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motionPresets } from "@/lib/motion";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden py-12 sm:py-14 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-fuchsia-500/12 blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-sky-500/10 blur-[130px]" />
      </div>

      <div className="relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
            {...motionPresets.heroText}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Northstar Studio
          </motion.div>

          <motion.h1
            className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
            <Button
              href="#contact"
              className="h-11 bg-foreground text-background shadow-[0_14px_40px_rgba(119,181,255,0.24)] hover:opacity-100 hover:brightness-95"
            >
              Agendar llamada estratégica
            </Button>
            <Button
              href="#services"
              variant="secondary"
              className="h-11 border-border/80 bg-card/70 hover:bg-secondary"
            >
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
          <div className="absolute -left-5 top-8 h-20 w-20 rounded-full border border-accent/40 bg-accent/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.8rem] border border-border bg-card/70 p-4 shadow-[0_35px_80px_rgba(0,0,0,0.5)] backdrop-blur-md sm:rounded-[2rem] sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(119,181,255,0.08),transparent_40%,rgba(139,92,246,0.12))]" />

            <div className="relative rounded-[1.4rem] border border-border/80 bg-background/80 p-4 sm:rounded-[1.6rem] sm:p-5">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-foreground sm:text-sm">
                    Vista previa premium
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    Enfoque comercial con ejecución cinematográfica
                  </p>
                </div>

                <span className="rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                  Sistema Northstar
                </span>
              </div>

              <div className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
                <div className="rounded-2xl border border-border/80 bg-card/80 p-4">
                  <div className="h-2.5 w-24 rounded-full bg-secondary" />
                  <div className="mt-3 h-7 w-5/6 rounded-full bg-secondary" />
                  <div className="mt-2 h-7 w-2/3 rounded-full bg-secondary" />
                  <div className="mt-4 flex gap-3 sm:mt-5">
                    <div className="h-11 w-36 rounded-full bg-foreground" />
                    <div className="h-11 w-32 rounded-full border border-border bg-background/80" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {["Mensaje", "Oferta", "Prueba"].map((label) => (
                    <div key={label} className="rounded-2xl border border-border/80 bg-card/80 p-3.5">
                      <div className="h-2.5 w-12 rounded-full bg-secondary" />
                      <div className="mt-3 h-[1.125rem] w-full rounded-full bg-secondary" />
                      <div className="mt-2 h-[1.125rem] w-3/4 rounded-full bg-secondary" />
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border/80 bg-card/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="h-2.5 w-20 rounded-full bg-secondary" />
                      <div className="mt-3 h-5 w-36 rounded-full bg-secondary" />
                    </div>
                    <div className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-accent sm:text-[11px]">
                      Caso destacado
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2.5">
                    <div className="h-3.5 w-full rounded-full bg-secondary" />
                    <div className="h-3.5 w-11/12 rounded-full bg-secondary" />
                    <div className="h-3.5 w-9/12 rounded-full bg-secondary" />
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
