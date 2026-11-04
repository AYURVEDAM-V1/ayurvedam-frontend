import type { Metadata } from "next";

import { ContactActions } from "@/components/layout/ContactActions";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call or WhatsApp AYURVEDAM to ask about therapies or plan a visit.",
};

/** A temporary page, so navigation works before this section is built. */
export default function ContactPage() {
  return (
    <PageIntro
      kicker="Contact us"
      title="Talk to AYURVEDAM"
      lead="Call us or send a message on WhatsApp. We are glad to answer your questions."
    >
      <ContactActions tone="dark" />
    </PageIntro>
  );
}
