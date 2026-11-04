import { Container } from "@/components/ui/Container";
import { Devanagari } from "@/components/ui/Devanagari";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { concerns } from "@/data/home";

export function Concerns() {
  return (
    <Section>
      <Container>
        <SectionHead
          devanagari="रोग"
          eyebrow="Common reasons people visit"
          title="Supportive care for everyday concerns"
          lead="Our therapies complement, and never replace, the care of your doctor. Please bring your current reports and medicines to the first consultation."
        />
        <div className="flex flex-wrap gap-[0.6rem]">
          {concerns.map((concern) => (
            <span
              key={concern.label}
              className="rounded-full border-[1.5px] border-line bg-surface px-[1.1rem] py-[0.55rem] text-[0.95rem]"
            >
              <Devanagari className="mr-[0.45rem] text-copper">
                {concern.devanagari}
              </Devanagari>
              {concern.label}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
