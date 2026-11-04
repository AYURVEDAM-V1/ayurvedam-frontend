"use client";

import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useSyncExternalStore } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Wordmark } from "@/components/layout/Wordmark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  bookingHref,
  isActivePath,
  navLeft,
  navRight,
  type NavItem,
} from "@/config/navigation";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getIsScrolled = () => window.scrollY > 24;
const getIsScrolledOnServer = () => false;

type NavLinksProps = {
  label: string;
  items: NavItem[];
  pathname: string;
};

function NavLinks({ label, items, pathname }: NavLinksProps) {
  return (
    <nav aria-label={label} className="hidden lg:block">
      <ul className="flex items-center gap-7 xl:gap-9">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={
                isActivePath(pathname, item.href) ? "page" : undefined
              }
              className="link-underline inline-block py-1 text-[0.9375rem] leading-tight font-medium"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);
  const closeMenu = useCallback(() => menuRef.current?.close(), []);

  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getIsScrolled,
    getIsScrolledOnServer,
  );

  return (
    <>
      {/* Every page opens on a dark band, so the header starts transparent. */}
      <header
        data-tone={isScrolled ? undefined : "dark"}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-soft",
          isScrolled
            ? "bg-ivory text-cocoa shadow-[0_1px_0_var(--color-line)]"
            : "text-ivory",
        )}
      >
        <Container className="grid h-header grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => menuRef.current?.showModal()}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-controls="mobile-menu"
              className="-ml-2.5 inline-flex size-11 items-center justify-center lg:hidden"
            >
              <Menu aria-hidden="true" className="size-6" />
            </button>
            <NavLinks label="Primary" items={navLeft} pathname={pathname} />
          </div>

          <Wordmark />

          <div className="flex items-center justify-end gap-5 xl:gap-7">
            <NavLinks label="Secondary" items={navRight} pathname={pathname} />
            <a
              href={telHref}
              className="-mr-2.5 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-[0.9375rem] leading-tight font-medium lg:mr-0"
            >
              <Phone aria-hidden="true" className="size-5 lg:size-4" />
              <span className="sr-only lg:not-sr-only">Call Now</span>
            </a>
            <div className="hidden lg:block">
              <Button
                href={bookingHref}
                size="sm"
                variant={isScrolled ? "primary" : "inverse"}
              >
                Book a Session
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu ref={menuRef} pathname={pathname} onClose={closeMenu} />
    </>
  );
}
