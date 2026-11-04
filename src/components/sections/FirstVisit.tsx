import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { visitSteps } from "@/data/home";

export function FirstVisit() {
  return (
    <Section className="pt-0">
      <Container>
        <SectionHead
          devanagari="यात्रा"
          eyebrow="Your first visit"
          title="What to expect"
        />
        <div className="grid grid-cols-4 gap-6 max-[901px]:grid-cols-2 max-[521px]:grid-cols-1">
          {visitSteps.map((step, index) => (
            <div key={step.title} className="grid content-start gap-2">
              <span className="font-display text-[2.2rem] leading-none text-copper tabular-nums">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p className="text-[0.95rem] text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
