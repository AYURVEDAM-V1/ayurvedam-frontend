import { ContactActions } from "@/components/layout/ContactActions";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookingHref } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/** A temporary home page. The feature/homepage branch replaces it. */
export default function HomePage() {
  return (
    <>
      <div data-tone="dark" className="bg-cocoa text-ivory">
        <Container className="flex min-h-svh flex-col justify-center pt-header pb-16">
          <Reveal>
            <Kicker>{siteConfig.tagline}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-display-xl">
              {siteConfig.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <ContactActions tone="dark" className="mt-10" />
          </Reveal>
        </Container>
        <div aria-hidden="true" className="kasavu" />
      </div>

      <Section tone="sand">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Our foundation"
              title="The new website is being built"
              lead="Therapy details, the gallery and the booking enquiry arrive in the next stages."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={bookingHref} className="mt-8">
              Book a Session
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
