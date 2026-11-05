import { EnquireLink } from "@/components/booking/EnquireLink";
import { Container } from "@/components/ui/Container";
import { Devanagari } from "@/components/ui/Devanagari";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { siteConfig } from "@/config/site";
import { panchakarmaStages, programmes } from "@/data/panchakarma";
import { cn } from "@/lib/cn";

export function Panchakarma() {
  return (
    <Section tone="band" id="panchakarma">
      <Container>
        <SectionHead
          devanagari="पञ्चकर्म"
          eyebrow={`Panchakarma at ${siteConfig.shortName}`}
          title="A complete reset, in three stages"
          lead="Panchakarma is Ayurveda's deepest cleansing programme. It is always planned and supervised by our Vaidya after a detailed consultation and pulse reading."
        />

        <div className="grid grid-cols-3 gap-[clamp(20px,3vw,40px)] [counter-reset:stage] max-[821px]:grid-cols-1">
          {panchakarmaStages.map((stage) => (
            <div
              key={stage.title}
              className="relative grid content-start gap-[0.6rem] border-t-2 border-band-fg pt-[2.4rem] max-[901px]:text-center max-[901px]:before:inset-x-0 before:absolute before:top-[0.7rem] before:text-[0.75rem] before:font-bold before:tracking-[0.14em] before:text-stage-label before:uppercase before:[counter-increment:stage] before:content-['Stage_'_counter(stage)]"
            >
              <Devanagari className="text-[1.3rem] text-stage-accent">
                {stage.devanagari}
              </Devanagari>
              <h3>{stage.title}</h3>
              <p className="opacity-80">{stage.summary}</p>
              <ul className="mt-[0.4rem] grid list-disc gap-[0.3rem] pl-[1.1rem] text-[0.95rem] text-stage-list max-[901px]:mx-auto max-[901px]:w-fit max-[901px]:text-left">
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-4 gap-4 max-[981px]:grid-cols-2 max-[521px]:grid-cols-1">
          {programmes.map((programme) => (
            <div
              key={programme.title}
              className={cn(
                "grid grid-rows-[auto_auto_1fr_auto] gap-[0.6rem] rounded-[18px] border-[1.5px] p-[1.4rem] max-[901px]:text-center",
                programme.featured
                  ? "border-band bg-band text-band-fg"
                  : "border-line bg-surface text-ink",
              )}
            >
              <div className="font-display text-[2.6rem] leading-none tabular-nums">
                {programme.days}
                <small
                  className={cn(
                    "ml-[0.3rem] font-sans text-[0.8rem] font-bold tracking-[0.1em] uppercase",
                    programme.featured ? "text-band-fg/75" : "text-muted",
                  )}
                >
                  days
                </small>
              </div>
              <h3>{programme.title}</h3>
              <p
                className={cn(
                  "text-[0.93rem]",
                  programme.featured ? "text-band-fg/75" : "text-muted",
                )}
              >
                {programme.description}
              </p>
              <EnquireLink
                service={programme.bookingOption}
                className={programme.featured ? "text-oil-text" : "text-copper"}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
