import { Container } from "@/components/ui/Container";
import { Devanagari } from "@/components/ui/Devanagari";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { principles } from "@/data/home";

export function Approach() {
  return (
    <Section tone="band" id="approach">
      <Container>
        <SectionHead
          devanagari="दर्शन"
          eyebrow="How we work"
          title="Four ideas guide every treatment room"
          lead="Ayurveda sees health as a balance between body, mind and digestion. Our role is to find what has drifted and gently bring it back."
        />
        <div className="grid grid-cols-4 border-t border-band-fg/18 max-[901px]:grid-cols-2 max-[521px]:grid-cols-1">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="grid content-start gap-2 pt-[1.6rem] pr-[1.4rem]"
            >
              <Devanagari className="text-[1.6rem] text-oil-text">
                {principle.devanagari}
              </Devanagari>
              <h3 className="text-[1.15rem]">{principle.title}</h3>
              <p className="text-[0.95rem] opacity-80">{principle.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
