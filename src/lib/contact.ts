import { siteConfig } from "@/config/site";

const { phoneE164, whatsappNumber, whatsappGreeting } = siteConfig.contact;

/** Opens the phone dialer on mobile devices. */
export const telHref = `tel:${phoneE164}`;

/**
 * Opens a WhatsApp chat with the message already typed. The visitor reviews it
 * and sends it themselves: nothing is sent automatically.
 */
export function whatsappHref(message: string = whatsappGreeting): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
