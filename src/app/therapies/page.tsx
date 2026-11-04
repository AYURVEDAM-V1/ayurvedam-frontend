import type { Metadata } from "next";

import { ContactActions } from "@/components/layout/ContactActions";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Our Therapies",
  description: "Explore Abhyanga, Shirodhara, Kerala massage, herbal steam and other Ayurvedic therapies at AYURVEDAM.",
};

/** A temporary page, so navigation works before this section is built. */
export default function TherapiesPage() {
  return (
    <PageIntro
      kicker="Our therapies"
      title="Traditional Ayurvedic therapies"
      lead="Full therapy details are on their way. Until then, call or message us to ask about any therapy."
    >
      <ContactActions tone="dark" />
    </PageIntro>
  );
}
