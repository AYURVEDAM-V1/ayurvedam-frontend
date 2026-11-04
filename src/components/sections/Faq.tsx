import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { faqs } from "@/data/home";

export function Faq() {
  return (
    <Section id="faq" className="pt-0">
      <Container>
        <SectionHead
          devanagari="प्रश्न"
          eyebrow="Questions"
          title="Frequently asked"
        />
        <div className="grid max-w-[860px] border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-line">
              <summary className="relative cursor-pointer list-none py-[1.15rem] pr-10 font-bold after:absolute after:top-[0.85rem] after:right-[0.3rem] after:font-display after:text-[1.6rem] after:leading-[normal] after:font-normal after:text-copper after:transition-[rotate] after:duration-200 after:content-['+'] group-open:after:rotate-45 [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="max-w-[68ch] pb-[1.2rem] text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
