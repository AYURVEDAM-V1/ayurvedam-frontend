import type { Metadata } from "next";

import { ContactActions } from "@/components/layout/ContactActions";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Panchakarma",
  description: "Learn about traditional Panchakarma practices and the programmes available at AYURVEDAM.",
};

/** A temporary page, so navigation works before this section is built. */
export default function PanchakarmaPage() {
  return (
    <PageIntro
      kicker="Panchakarma"
      title="Traditional Panchakarma"
      lead="A full guide to Panchakarma is on its way. Until then, call or message us with your questions."
    >
      <ContactActions tone="dark" />
    </PageIntro>
  );
}
