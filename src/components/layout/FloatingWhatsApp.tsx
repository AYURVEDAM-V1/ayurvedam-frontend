import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/contact";

/**
 * Takes the place of the template's floating "Book now" button, because the
 * client's brief makes a floating WhatsApp button mandatory.
 */
export function FloatingWhatsApp() {
  return (
    <Button
      href={whatsappHref()}
      aria-label={`Chat with ${siteConfig.name} on WhatsApp (opens in a new tab)`}
      className="fixed right-[calc(18px+env(safe-area-inset-right,0px))] bottom-[calc(18px+env(safe-area-inset-bottom,0px))] z-40 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
    >
      <WhatsAppIcon className="size-5" />
      WhatsApp
    </Button>
  );
}
