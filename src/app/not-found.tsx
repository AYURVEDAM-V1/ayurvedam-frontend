import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lead } from "@/components/ui/Lead";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section>
      <Container>
        <Eyebrow devanagari="प्रश्न">Page not found</Eyebrow>
        <h1 className="mt-[1.1rem] mb-[1.4rem] text-[clamp(2.5rem,5.6vw,4.4rem)]">
          We could not find that page
        </h1>
        <Lead>It may have moved, or the link may be out of date.</Lead>
        <Button href="/" className="mt-8">
          Back to the home page
        </Button>
      </Container>
    </Section>
  );
}
