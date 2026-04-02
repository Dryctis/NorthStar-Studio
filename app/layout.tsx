import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Northstar Studio | Sitios web de alto impacto para negocios de servicios",
    template: "%s | Northstar Studio",
  },
  description:
    "Northstar Studio diseña sitios web y landing pages de alto impacto para negocios de servicios que necesitan convertir mejor su presencia digital en oportunidades comerciales.",
  verification: {
    google: "zk6492gJjUwN-2slsuiKHWYZwhXdxxX2oaHM45NKbU8",
  },
  keywords: [
    "landing pages para negocios de servicios",
    "sitios web para captar clientes",
    "diseño web para negocios de servicios",
    "landing page para generar leads",
    "diseño web orientado a conversión",
    "sitios web de alto impacto",
    "landing pages premium",
    "Northstar Studio",
  ],
  applicationName: "Northstar Studio",
  authors: [{ name: "Allan Racancoj" }],
  creator: "Allan Racancoj",
  publisher: "Northstar Studio",
  alternates: {
    canonical: "/",
  },
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Northstar Studio",
    title:
      "Northstar Studio | Sitios web de alto impacto para negocios de servicios",
    description:
      "Sitios web y landing pages premium diseñados para convertir visitas en oportunidades comerciales.",
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
    title:
      "Northstar Studio | Sitios web de alto impacto para negocios de servicios",
    description:
      "Sitios web y landing pages premium diseñados para convertir visitas en oportunidades comerciales.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics gaId="G-KPXBEYEYJ9" />
      </body>
    </html>
  );
}