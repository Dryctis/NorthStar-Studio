export const siteConfig = {
  name: "Northstar Studio",
  description:
    "Sistemas de landing pages diseñados para convertir tráfico de servicios premium en leads calificados.",
  url: "http://localhost:3000",
  ogImage: "/images/og/northstar-og.jpg",
  navigation: [
    { label: "Servicios", href: "#services" },
    { label: "Proceso", href: "#process" },
    { label: "Caso de estudio", href: "#case-study" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  cta: {
    label: "Agendar llamada estratégica",
    href: "#contact",
  },
};

export type SiteConfig = typeof siteConfig;