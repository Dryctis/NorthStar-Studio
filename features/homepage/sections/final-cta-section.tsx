"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type FormData = {
  full_name: string;
  work_email: string;
  company_name: string;
  website_url: string;
  need: string;
  business_type: string;
  main_challenge: string;
  extra_context: string;
};

const initialFormData: FormData = {
  full_name: "",
  work_email: "",
  company_name: "",
  website_url: "",
  need: "",
  business_type: "",
  main_challenge: "",
  extra_context: "",
};

export function FinalCtaSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitMessage, setSubmitMessage] = useState("");

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function validateStep1() {
    return (
      formData.full_name.trim() &&
      formData.work_email.trim() &&
      formData.company_name.trim()
    );
  }

  function validateStep2() {
    return (
      formData.need.trim() &&
      formData.business_type.trim() &&
      formData.main_challenge.trim()
    );
  }

  async function handleSubmit() {
    if (!validateStep2()) {
      setSubmitState("error");
      setSubmitMessage("Completa los campos obligatorios antes de enviar.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitState("idle");
      setSubmitMessage("");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "No se pudo enviar la consulta.");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Tu consulta fue enviada correctamente. Ya quedó registrada."
      );
      setFormData(initialFormData);
      setStep(1);
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la consulta."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact" className="bg-card">
      <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Siguiente paso"
              title="Si tu sitio actual está por debajo del nivel real de tu negocio, podemos corregirlo."
              subtitle="Comparte algunos detalles y la primera conversación tendrá contexto, enfoque y una dirección mucho más útil desde el inicio."
            />

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <div className="rounded-[1.5rem] border border-border/70 bg-background p-4 sm:p-5">
                <p className="text-sm font-medium text-foreground">
                  Qué revisamos primero
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  La claridad de la oferta, la forma en que se percibe el negocio,
                  la estructura actual del sitio y el punto donde se están
                  perdiendo oportunidades.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-background p-4 sm:p-5">
                <p className="text-sm font-medium text-foreground">
                  Para qué sirve esta conversación
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Para entender si Northstar encaja con lo que tu negocio necesita
                  hoy y definir qué tipo de landing o sistema tendría más sentido
                  construir.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[1.7rem] border border-border/70 bg-background p-4 shadow-[0_20px_60px_rgba(17,18,20,0.05)] sm:rounded-[2rem] sm:p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Consulta estratégica
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Un par de datos para hacer la conversación más útil
                </p>
              </div>

              <div className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                Paso {step} de 2
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                  className="space-y-4 sm:space-y-5"
                >
                  <FormField label="Nombre completo" required>
                    <input
                      type="text"
                      value={formData.full_name}
                      onChange={(e) => updateField("full_name", e.target.value)}
                      placeholder="Tu nombre"
                      className="h-11 w-full rounded-2xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-ring sm:h-12"
                    />
                  </FormField>

                  <FormField label="Correo de trabajo" required>
                    <input
                      type="email"
                      value={formData.work_email}
                      onChange={(e) => updateField("work_email", e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="h-11 w-full rounded-2xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-ring sm:h-12"
                    />
                  </FormField>

                  <FormField label="Empresa o marca" required>
                    <input
                      type="text"
                      value={formData.company_name}
                      onChange={(e) => updateField("company_name", e.target.value)}
                      placeholder="Nombre del negocio"
                      className="h-11 w-full rounded-2xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-ring sm:h-12"
                    />
                  </FormField>

                  <FormField label="Sitio web actual">
                    <input
                      type="text"
                      value={formData.website_url}
                      onChange={(e) => updateField("website_url", e.target.value)}
                      placeholder="https://"
                      className="h-11 w-full rounded-2xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-ring sm:h-12"
                    />
                  </FormField>

                  <div className="pt-1 sm:pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!validateStep1()) {
                          setSubmitState("error");
                          setSubmitMessage(
                            "Completa nombre, correo y empresa para continuar."
                          );
                          return;
                        }

                        setSubmitState("idle");
                        setSubmitMessage("");
                        setStep(2);
                      }}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:h-12"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                  className="space-y-4 sm:space-y-5"
                >
                  <FormField label="¿Qué necesitas resolver hoy?" required>
                    <select
                      value={formData.need}
                      onChange={(e) => updateField("need", e.target.value)}
                      className="h-11 w-full rounded-2xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-ring sm:h-12"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Mejorar conversión">
                        Mejorar conversión
                      </option>
                      <option value="Rediseñar la landing principal">
                        Rediseñar la landing principal
                      </option>
                      <option value="Construir una nueva landing">
                        Construir una nueva landing
                      </option>
                      <option value="Crear una base escalable por servicios">
                        Crear una base escalable por servicios
                      </option>
                    </select>
                  </FormField>

                  <FormField label="Tipo de negocio" required>
                    <input
                      type="text"
                      value={formData.business_type}
                      onChange={(e) =>
                        updateField("business_type", e.target.value)
                      }
                      placeholder="Consultoría, firma, clínica, estudio, etc."
                      className="h-11 w-full rounded-2xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-ring sm:h-12"
                    />
                  </FormField>

                  <FormField label="Principal reto del sitio actual" required>
                    <textarea
                      value={formData.main_challenge}
                      onChange={(e) =>
                        updateField("main_challenge", e.target.value)
                      }
                      placeholder="Cuéntanos brevemente qué sientes que hoy no está funcionando bien."
                      className="min-h-[110px] w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring sm:min-h-[120px]"
                    />
                  </FormField>

                  <FormField label="Algo más que debamos saber">
                    <textarea
                      value={formData.extra_context}
                      onChange={(e) =>
                        updateField("extra_context", e.target.value)
                      }
                      placeholder="Contexto adicional, tiempos, expectativas o referencias."
                      className="min-h-[100px] w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring sm:min-h-[110px]"
                    />
                  </FormField>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitState("idle");
                        setSubmitMessage("");
                        setStep(1);
                      }}
                      className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:h-12"
                    >
                      Volver
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:h-12"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar consulta"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {submitMessage ? (
              <div
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm sm:mt-6 ${
                  submitState === "success"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

function FormField({ label, required, children }: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label} {required ? <span className="text-muted-foreground">*</span> : null}
      </span>
      {children}
    </label>
  );
}