import type { Metadata } from "next";

import { ContactActions } from "@/components/layout/ContactActions";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See the therapies and spaces at AYURVEDAM.",
};

/** A temporary page, so navigation works before this section is built. */
export default function GalleryPage() {
  return (
    <PageIntro
      kicker="Gallery"
      title="A look inside AYURVEDAM"
      lead="Photographs are on their way."
    >
      <ContactActions tone="dark" />
    </PageIntro>
  );
}
