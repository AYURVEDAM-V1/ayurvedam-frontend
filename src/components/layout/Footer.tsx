import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { ContactActions } from "@/components/layout/ContactActions";
import { Container } from "@/components/ui/Container";
import { bookingHref, primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { telHref } from "@/lib/contact";

const { contact } = siteConfig;

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer data-tone="dark" className="bg-cocoa-deep text-ivory">
      <div aria-hidden="true" className="kasavu" />

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-6">
          <p className="max-w-md font-display text-display-md">
            Speak to us before you book. We will help you choose.
          </p>
          <ContactActions tone="dark" className="mt-8" />
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="font-sans text-sm font-medium text-sage">Explore</h2>
          <ul className="mt-4 space-y-1">
            {[...primaryNav, { label: "Book a Session", href: bookingHref }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline inline-block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-sans text-sm font-medium text-sage">Visit</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <a href={telHref} className="link-underline">
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span>
                {contact.address ?? "Address coming soon. Call us for directions."}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span>
                {contact.hours ?? "Please call to confirm our opening hours."}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      {/* The extra space on small screens keeps this text clear of the WhatsApp button. */}
      <Container className="pb-24 text-sm text-sand md:pb-8">
        <div className="space-y-2 border-t border-line-dark pt-6">
          <p className="max-w-3xl">{siteConfig.disclaimer}</p>
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
