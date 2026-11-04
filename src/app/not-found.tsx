import type { Metadata } from "next";

import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <PageIntro
      kicker="Page not found"
      title="We could not find that page"
      lead="It may have moved, or the link may be out of date."
    >
      <Button href="/" variant="inverse">
        Back to the home page
      </Button>
    </PageIntro>
  );
}
