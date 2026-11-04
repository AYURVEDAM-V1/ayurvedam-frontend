import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { mailtoHref, telHref } from "@/lib/contact";

const { contact } = siteConfig;

export function TopBar() {
  return (
    <div data-tone="band" className="bg-band text-[0.85rem] text-band-fg">
      <Container className="flex flex-wrap justify-between gap-x-6 gap-y-[0.4rem] py-2 opacity-90">
        <span>
          {contact.addressShort} · Open daily {contact.hours}
        </span>
        <span>
          Call / WhatsApp:{" "}
          <a href={telHref} className="font-bold">
            {contact.phoneDisplay}
          </a>
          {" · "}
          <a href={mailtoHref}>{contact.email}</a>
        </span>
      </Container>
    </div>
  );
}
