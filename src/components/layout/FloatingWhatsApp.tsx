import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/contact";

/** Stays in view on every page. Its layer sits below the header and menu. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp (opens in a new tab)`}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex size-14 items-center justify-center gap-2.5 bg-whatsapp text-white shadow-[0_12px_28px_-12px_rgb(36_31_27/0.6)] transition-colors duration-300 ease-soft hover:bg-whatsapp-deep md:right-6 md:bottom-6 md:h-12 md:w-auto md:px-5"
    >
      <WhatsAppIcon className="size-6 md:size-5" />
      <span className="hidden text-[0.9375rem] font-medium md:inline">
        WhatsApp
      </span>
    </a>
  );
}
