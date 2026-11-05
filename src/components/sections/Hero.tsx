import { DharaIllustration } from "@/components/sections/DharaIllustration";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Devanagari } from "@/components/ui/Devanagari";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lead } from "@/components/ui/Lead";
import { bookingHref } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { telHref } from "@/lib/contact";

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-[0.45rem]">
      <i aria-hidden="true" className="block size-[7px] rounded-full bg-oil" />
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="pt-[clamp(40px,6vw,80px)] pb-[clamp(56px,7vw,96px)]">
      <Container className="grid grid-cols-[1.15fr_0.85fr] items-center gap-[clamp(32px,5vw,72px)] max-[901px]:grid-cols-1">
        <div className="max-[901px]:text-center">
          <Eyebrow devanagari="स्वास्थ्य">
            Ayurvedic wellness centre · Gurugram
          </Eyebrow>
          <h1 className="mt-[1.1rem] mb-[1.4rem] text-[clamp(2.5rem,5.6vw,4.4rem)]">
            Slow down, cleanse deeply,{" "}
            <em className="text-copper not-italic">return to balance.</em>
          </h1>
          <Lead>
            {siteConfig.name} brings classical Kerala-style therapies and
            supervised Panchakarma to the city. Every visit begins with a
            consultation, so your oils, herbs and routine are chosen for your
            body, not for a menu.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-[0.8rem] max-[901px]:justify-center">
            <Button href={bookingHref}>Book a consultation →</Button>
            <Button href="/#panchakarma" variant="ghost">
              Explore Panchakarma
            </Button>
          </div>
          <div className="mt-[2.2rem] flex flex-wrap gap-x-[1.6rem] gap-y-[0.6rem] text-[0.9rem] text-muted max-[901px]:justify-center">
            <TrustItem>BAMS-qualified Vaidya on site</TrustItem>
            <TrustItem>Trained Kerala therapists</TrustItem>
            <TrustItem>Oils prepared fresh in-house</TrustItem>
            <TrustItem>
              <a href={telHref} className="underline underline-offset-2">
                Call Now: {siteConfig.contact.phoneDisplay}
              </a>
            </TrustItem>
          </div>
        </div>

        <figure
          data-tone="band"
          className="relative min-w-0 overflow-hidden rounded-[28px_28px_120px_28px] bg-band p-7 text-band-fg max-[901px]:mx-auto max-[901px]:w-full max-[901px]:max-w-[440px]"
        >
          <DharaIllustration />
          {/* The right padding keeps the last line clear of the rounded corner. */}
          <figcaption className="mt-2 pr-4 text-[0.9rem] max-[901px]:pl-4 max-[901px]:text-center">
            <Devanagari className="mr-[0.4rem] text-[1.05rem] text-oil-text">
              शिरोधारा
            </Devanagari>{" "}
            <span className="opacity-85">
              Shirodhara — a slow, unbroken stream of warm herbal oil across the
              forehead.
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
