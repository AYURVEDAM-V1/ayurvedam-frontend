import type { Metadata } from "next";

import { ContactActions } from "@/components/layout/ContactActions";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AYURVEDAM and our approach to traditional Ayurvedic wellness.",
};

/** A temporary page, so navigation works before this section is built. */
export default function AboutPage() {
  return (
    <PageIntro
      kicker="About us"
      title="About AYURVEDAM"
      lead="Our story is on its way. Until then, we are happy to talk."
    >
      <ContactActions tone="dark" />
    </PageIntro>
  );
}
