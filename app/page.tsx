import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CostOfWeakWebsiteSection } from "@/features/homepage/sections/cost-of-weak-website-section";
import { FaqSection } from "@/features/homepage/sections/faq-section";
import { FeaturedCaseStudySection } from "@/features/homepage/sections/featured-case-study-section";
import { FinalCtaSection } from "@/features/homepage/sections/final-cta-section";
import { HeroSection } from "@/features/homepage/sections/hero-section";
import { OffersSection } from "@/features/homepage/sections/offers-section";
import { ProcessSection } from "@/features/homepage/sections/process-section";
import { ProofStripSection } from "@/features/homepage/sections/proof-strip-section";
import { WhyItConvertsSection } from "@/features/homepage/sections/why-it-converts-section";

const siteUrl = "https://north-star-studio.vercel.app";

export const metadata: Metadata = {
  title: "Northstar Studio | Landing pages y sitios web para negocios de servicios",
  description:
    "Diseñamos landing pages y sitios web de alto impacto para negocios de servicios que necesitan transmitir más valor, generar confianza y captar mejores oportunidades.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Northstar Studio | Landing pages y sitios web para negocios de servicios",
    description:
      "Diseñamos landing pages y sitios web de alto impacto para negocios de servicios que necesitan transmitir más valor, generar confianza y captar mejores oportunidades.",
    url: siteUrl,
    siteName: "Northstar Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Northstar Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northstar Studio | Landing pages y sitios web para negocios de servicios",
    description:
      "Diseñamos landing pages y sitios web de alto impacto para negocios de servicios que necesitan transmitir más valor, generar confianza y captar mejores oportunidades.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Northstar Studio",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    founder: {
      "@type": "Person",
      name: "Allan Racancoj",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Northstar Studio",
    url: siteUrl,
    inLanguage: "es",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <main className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <HeroSection />
        <ProofStripSection />
        <CostOfWeakWebsiteSection />
        <OffersSection />
        <ProcessSection />
        <FeaturedCaseStudySection />
        <WhyItConvertsSection />
        <FaqSection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
    </>
  );
}