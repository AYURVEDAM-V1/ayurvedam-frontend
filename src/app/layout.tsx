import type { Metadata, Viewport } from "next";
import { Karla, Marcellus, Tiro_Devanagari_Hindi } from "next/font/google";

import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { TopBar } from "@/components/layout/TopBar";
import { siteConfig } from "@/config/site";

import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  adjustFontFallback: false,
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["devanagari"],
  variable: "--font-tiro",
  display: "swap",
});

const siteTitle = `${siteConfig.name} | Panchakarma & Ayurvedic Therapies in Gurugram`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#111a16" },
  ],
};

const noScriptStyles = `@media (max-width:900px){header .wrap{flex-wrap:wrap}#menu-button{display:none!important}#nav-links{display:flex!important;position:static;flex-direction:row;flex-wrap:wrap;gap:.25rem 1rem;width:100%;border:0;padding:0;background:none}#nav-links a{border:0;padding:.25rem 0}}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  const fontVariables = `${marcellus.variable} ${karla.variable} ${tiroDevanagari.variable}`;

  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={fontVariables}>
      <head>
        <noscript>
          <style>{noScriptStyles}</style>
        </noscript>
      </head>
      <body>
        <SkipLink />
        <TopBar />
        <Header />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
