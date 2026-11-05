/**
 * The one place for business details. Every phone link, WhatsApp link and
 * contact block on the site reads from here.
 */

type SiteConfig = {
  name: string;
  shortName: string;
  descriptor: string;
  description: string;
  footerBlurb: string;
  domain: string;
  url: string;
  disclaimer: string;
  contact: {
    phoneDisplay: string;
    phoneE164: string;
    whatsappNumber: string;
    whatsappGreeting: string;
    email: string;
    addressShort: string;
    addressLines: string[];
    hours: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Ayurvedam Wellness",
  shortName: "Ayurvedam",
  descriptor: "Panchakarma & Wellness",
  description:
    "Ayurvedam Wellness, Gurugram — authentic Panchakarma programmes, classical Ayurvedic therapies and personalised wellness care.",
  footerBlurb:
    "Panchakarma and classical Ayurvedic therapies in Gurugram, guided by a qualified Vaidya and delivered with care.",
  domain: "ayurvedamwellness.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  disclaimer:
    "Ayurvedic therapies support general wellbeing and are not a substitute for medical diagnosis or treatment. Results vary from person to person.",
  contact: {
    phoneDisplay: "+91 92205 60070",
    phoneE164: "+919220560070",
    whatsappNumber: "919220560070",
    whatsappGreeting:
      "Hello Ayurvedam Wellness, I would like to know more about your Ayurvedic therapies and book a wellness session.",
    email: "ayurvedam64@gmail.com",
    addressShort: "Sector 64, Gurugram",
    addressLines: [
      "2nd Floor, Ayurvedam Panchkarma Wellness,",
      "R R Market, opposite M3M URBANA,",
      "Sector 64, Gurugram, Haryana 122101",
    ],
    hours: "8 am – 8 pm",
  },
};
