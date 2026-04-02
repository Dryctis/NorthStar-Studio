import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCaseStudySection() {
  return (
    <Section id="case-study" className="bg-card">
      <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Caso de estudio destacado"
              title="De una presencia correcta a una experiencia digital más convincente."
              subtitle="Este tipo de proyecto nace cuando un negocio ya tiene una buena oferta, pero su sitio todavía no transmite el nivel, la claridad y la confianza que esa oferta realmente merece."
            />

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 md:space-y-6">
              <div>
                <p className="text-sm font-medium text-foreground">Contexto</p>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:mt-2 sm:text-base">
                  Un estudio de servicios premium necesitaba una landing más clara,
                  más sólida y más alineada con el valor real de su propuesta.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">Problema</p>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:mt-2 sm:text-base">
                  La página anterior se veía correcta, pero no lograba explicar la
                  oferta con suficiente claridad ni generar una sensación de valor
                  acorde al nivel del servicio.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">Enfoque</p>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:mt-2 sm:text-base">
                  Se replanteó la jerarquía del contenido, se simplificó el
                  mensaje, se reforzó la capa de confianza y se construyó una
                  estructura orientada a convertir visitas en conversaciones mejor
                  calificadas.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">
                  Resultado esperado
                </p>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:mt-2 sm:text-base">
                  Una presencia digital más clara, una percepción de valor más
                  sólida y un recorrido preparado para captar oportunidades más
                  alineadas con el negocio.
                </p>
              </div>

              <div className="pt-1 sm:pt-2">
                <Button href="#contact" variant="secondary">
                  Agendar llamada estratégica
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-[1.6rem] border border-border/70 bg-background p-4 shadow-[0_20px_60px_rgba(17,18,20,0.05)] sm:rounded-[1.8rem] sm:p-5 md:rounded-[2rem]">
              <div className="rounded-[1.2rem] border border-border/70 bg-card p-4 sm:rounded-[1.35rem] sm:p-5 md:rounded-[1.5rem]">
                <div className="flex items-center justify-between border-b border-border/70 pb-3 sm:pb-4">
                  <div>
                    <p className="text-xs font-medium text-foreground sm:text-sm">
                      Caso destacado
                    </p>
                    <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                      Replanteamiento de landing principal
                    </p>
                  </div>

                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] text-muted-foreground sm:px-3 sm:text-xs">
                    Servicios premium
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4">
                  <div className="rounded-2xl border border-border/70 bg-background p-4 sm:p-5">
                    <div className="h-2.5 w-16 rounded-full bg-secondary sm:h-3 sm:w-24" />
                    <div className="mt-3 h-6 w-5/6 rounded-full bg-secondary sm:mt-4 sm:h-8" />
                    <div className="mt-2 h-6 w-3/5 rounded-full bg-secondary sm:mt-3 sm:h-8" />
                    <div className="mt-4 h-10 w-28 rounded-full bg-foreground sm:mt-6 sm:h-12 sm:w-44" />
                  </div>

                  <div className="grid gap-3 grid-cols-3 sm:gap-4">
                    <div className="rounded-2xl border border-border/70 bg-background p-3 sm:p-4">
                      <p className="text-[10px] text-muted-foreground sm:text-xs">
                        Más claridad
                      </p>
                      <div className="mt-2.5 h-4 w-full rounded-full bg-secondary sm:mt-3 sm:h-5" />
                      <div className="mt-2 h-4 w-4/5 rounded-full bg-secondary sm:h-5" />
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background p-3 sm:p-4">
                      <p className="text-[10px] text-muted-foreground sm:text-xs">
                        Más confianza
                      </p>
                      <div className="mt-2.5 h-4 w-full rounded-full bg-secondary sm:mt-3 sm:h-5" />
                      <div className="mt-2 h-4 w-3/4 rounded-full bg-secondary sm:h-5" />
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background p-3 sm:p-4">
                      <p className="text-[10px] text-muted-foreground sm:text-xs">
                        Mejor recorrido
                      </p>
                      <div className="mt-2.5 h-4 w-full rounded-full bg-secondary sm:mt-3 sm:h-5" />
                      <div className="mt-2 h-4 w-2/3 rounded-full bg-secondary sm:h-5" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-background p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-foreground sm:text-sm">
                          Resultado
                        </p>
                        <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                          Mejor percepción y mejor intención comercial
                        </p>
                      </div>

                      <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] text-muted-foreground sm:px-3 sm:text-xs">
                        Northstar
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                      <div className="h-3.5 w-full rounded-full bg-secondary sm:h-4" />
                      <div className="h-3.5 w-11/12 rounded-full bg-secondary sm:h-4" />
                      <div className="h-3.5 w-9/12 rounded-full bg-secondary sm:h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}