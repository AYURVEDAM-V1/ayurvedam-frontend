import { TherapyBrowser } from "@/components/sections/TherapyBrowser";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";

export function Therapies() {
  return (
    <Section id="therapies">
      <Container>
        <SectionHead
          devanagari="चिकित्सा"
          eyebrow="Signature therapies"
          title="Classical therapies, performed the traditional way"
          lead="Each session includes a short check-in with our Vaidya, warm oils selected for your dosha, and quiet time to rest afterwards."
        />
        <TherapyBrowser />
      </Container>
    </Section>
  );
}
