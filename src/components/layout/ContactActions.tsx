import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/cn";
import { telHref, whatsappHref } from "@/lib/contact";

type ContactActionsProps = {
  /** Use "dark" when the buttons sit on a cocoa background. */
  tone?: "light" | "dark";
  /** Replaces the default greeting, for example with a therapy name. */
  whatsappMessage?: string;
  className?: string;
};

/** The Call Now and WhatsApp pair used across the site. */
export function ContactActions({
  tone = "light",
  whatsappMessage,
  className,
}: ContactActionsProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <Button href={telHref} variant={tone === "dark" ? "inverse" : "primary"}>
        <Phone aria-hidden="true" className="size-4" />
        Call Now
      </Button>
      <Button href={whatsappHref(whatsappMessage)} variant="whatsapp">
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </Button>
    </div>
  );
}
