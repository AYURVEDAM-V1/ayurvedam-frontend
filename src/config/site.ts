/**
 * The one place for business details. Every phone link, WhatsApp link and
 * contact block on the site reads from here.
 *
 * Fields set to `null` are waiting for the client. Do not invent values: the
 * interface shows an honest placeholder until a real value is added.
 */

type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  disclaimer: string;
  contact: {
    phoneDisplay: string;
    phoneE164: string;
    whatsappNumber: string;
    whatsappGreeting: string;
    email: string | null;
    address: string | null;
    hours: string | null;
    mapEmbedUrl: string | null;
  };
};

export const siteConfig: SiteConfig = {
  name: "AYURVEDAM",
  tagline: "Panchakarma wellness and traditional Kerala massage",
  description:
    "AYURVEDAM offers Panchakarma wellness and traditional Kerala massage, including Abhyanga, Shirodhara and herbal steam. Call or WhatsApp us to enquire about a session.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  disclaimer:
    "AYURVEDAM offers traditional Ayurvedic wellness therapies. They do not replace medical diagnosis or treatment. Please speak to your doctor about any health condition.",
  contact: {
    phoneDisplay: "+91 99580 01036",
    phoneE164: "+919958001036",
    whatsappNumber: "919958001036",
    whatsappGreeting:
      "Hello AYURVEDAM, I would like to know more about your Ayurvedic therapies and book a wellness session.",
    email: null,
    address: null,
    hours: null,
    mapEmbedUrl: null,
  },
};
