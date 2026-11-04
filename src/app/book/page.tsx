import type { Metadata } from "next";

import { ContactActions } from "@/components/layout/ContactActions";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Send AYURVEDAM an appointment enquiry by phone or WhatsApp.",
};

/** A temporary page, so navigation works before this section is built. */
export default function BookPage() {
  return (
    <PageIntro
      kicker="Book a session"
      title="Plan your visit"
      lead="The enquiry form is on its way. Until then, call or message us to arrange a session."
    >
      <ContactActions tone="dark" />
    </PageIntro>
  );
}
