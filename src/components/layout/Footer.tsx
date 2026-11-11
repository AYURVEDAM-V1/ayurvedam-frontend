import Link from "next/link";

import { CurrentYear } from "@/components/layout/CurrentYear";
import { Address } from "@/components/ui/Address";
import { Container } from "@/components/ui/Container";
import { Devanagari } from "@/components/ui/Devanagari";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { mailtoHref, telHref } from "@/lib/contact";

const { contact } = siteConfig;

const headingStyles =
  "mb-[0.8rem] font-sans text-[0.75rem] font-bold tracking-[0.14em] uppercase opacity-70";

const linkStyles = "opacity-85 hover:opacity-100";

export function Footer() {
  return (
    <footer data-tone="band" className="bg-band pt-14 pb-8 text-[0.92rem] text-band-fg">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-8 max-[761px]:grid-cols-1 max-[901px]:text-center">
          <div>
            <p className="font-display text-[1.6rem] leading-[normal]">
              {siteConfig.name}
            </p>
            <p className="mt-[0.6rem] max-w-[44ch] opacity-80 max-[901px]:mx-auto">
              {siteConfig.footerBlurb}
            </p>
            <p className="mt-4 text-[1.2rem] text-oil-text">
              <Devanagari lang="sa">लोकाः समस्ताः सुखिनो भवन्तु</Devanagari>
            </p>
            <p className="text-[0.85rem] opacity-70">
              May all beings everywhere be well.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className={headingStyles}>Explore</h2>
            <ul className="grid gap-[0.4rem]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkStyles}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingStyles}>Contact</h2>
            <ul className="grid gap-[0.4rem]">
              <li>
                <Address />
              </li>
              <li>
                <a href={telHref} className={linkStyles}>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoHref} className={linkStyles}>
                  {contact.email}
                </a>
              </li>
              <li>Open daily, {contact.hours}</li>
            </ul>
          </div>
        </div>

        {/* The extra space keeps this text clear of the floating contact buttons. */}
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-band-fg/18 pt-5 text-[0.82rem] opacity-70 max-[901px]:justify-center max-[901px]:pb-10 max-[901px]:text-center min-[901px]:max-[1520px]:pb-24">
          <p className="max-w-[70ch]">{siteConfig.disclaimer}</p>
          <span>
            © <CurrentYear buildYear={new Date().getFullYear()} />{" "}
            {siteConfig.name} · {siteConfig.domain}
          </span>
        </div>
      </Container>
    </footer>
  );
}
