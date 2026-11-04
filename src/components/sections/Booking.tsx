import { BookingForm } from "@/components/booking/BookingForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lead } from "@/components/ui/Lead";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { mailtoHref, telHref, whatsappHref } from "@/lib/contact";

const { contact } = siteConfig;

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-[0.15rem]">
      <dt className="text-[0.75rem] font-bold tracking-[0.14em] text-band-fg/65 uppercase">
        {label}
      </dt>
      <dd className="text-[1.05rem]">{children}</dd>
    </div>
  );
}

export function Booking() {
  return (
    <Section tone="band" id="book">
      <Container className="grid grid-cols-[0.85fr_1.15fr] gap-[clamp(32px,5vw,64px)] max-[901px]:grid-cols-1">
        <div>
          <Eyebrow devanagari="स्वागतम्">Visit us</Eyebrow>
          <h2 className="mt-4">Book your consultation</h2>
          <Lead className="mt-4">
            Tell us a little about what you are looking for and a preferred
            time. We will confirm your slot on WhatsApp within a few working
            hours.
          </Lead>
          <dl className="mt-[1.8rem] grid gap-[1.1rem]">
            <ContactRow label="Address">
              {siteConfig.name}, {contact.address}
            </ContactRow>
            <ContactRow label="Phone & WhatsApp">
              <a href={telHref}>{contact.phoneDisplay}</a>
            </ContactRow>
            <ContactRow label="Email">
              <a href={mailtoHref}>{contact.email}</a>
            </ContactRow>
            <ContactRow label="Hours">Every day, {contact.hours}</ContactRow>
          </dl>
          <div className="mt-[1.8rem] flex flex-wrap gap-[0.6rem]">
            <Button href={telHref}>Call Now</Button>
            <Button href={whatsappHref()} variant="ghost">
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </Button>
          </div>
        </div>

        <BookingForm />
      </Container>
    </Section>
  );
}
