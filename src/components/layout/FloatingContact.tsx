import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";

const { contact, name } = siteConfig;

// These buttons pass over both light and green sections, so the keyboard focus
// ring has two tones: one always shows, whichever section is behind them.
const buttonStyles =
  "justify-center whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.18)] focus-visible:shadow-[0_0_0_3px_var(--surface)] focus-visible:outline-ink max-[521px]:flex-1 max-[521px]:px-3";

/**
 * Keeps Call Now and WhatsApp on screen while the page scrolls. They sit side
 * by side along the bottom on phones and tablets, and stack in the corner on
 * desktop. These take the place of the template's floating "Book now" button,
 * because the client asked for both contact options to stay in view.
 *
 * The wrapper ignores pointer events so the gap between the buttons does not
 * block whatever is underneath. On extremely short screens, such as 400% zoom
 * on a laptop, the wrapper hides so that the page itself stays readable. The
 * same contact options are still in the top bar, hero, booking section and
 * footer.
 */
export function FloatingContact() {
  return (
    <div
      role="group"
      aria-label="Quick contact"
      className="pointer-events-none fixed right-[calc(16px+env(safe-area-inset-right,0px))] bottom-[calc(18px+env(safe-area-inset-bottom,0px))] left-[calc(16px+env(safe-area-inset-left,0px))] z-40 flex justify-center gap-2 *:pointer-events-auto min-[901px]:right-[calc(18px+env(safe-area-inset-right,0px))] min-[901px]:left-auto min-[901px]:flex-col [@media(max-height:240px)]:hidden"
    >
      <Button
        href={telHref}
        aria-label={`Call Now: ${name}, ${contact.phoneDisplay}`}
        className={buttonStyles}
      >
        <PhoneIcon className="size-5" />
        Call Now
      </Button>
      <Button
        href={whatsappHref()}
        aria-label={`Chat with ${name} on WhatsApp (opens in a new tab)`}
        className={buttonStyles}
      >
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </Button>
    </div>
  );
}
