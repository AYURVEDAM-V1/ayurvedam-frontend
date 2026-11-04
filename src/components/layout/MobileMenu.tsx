"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, type Ref } from "react";

import { ContactActions } from "@/components/layout/ContactActions";
import { Wordmark } from "@/components/layout/Wordmark";
import { Button } from "@/components/ui/Button";
import { bookingHref, isActivePath, primaryNav } from "@/config/navigation";

type MobileMenuProps = {
  ref: Ref<HTMLDialogElement>;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ ref, pathname, onClose }: MobileMenuProps) {
  // The menu is hidden on large screens, so it must not stay open behind them.
  useEffect(() => {
    const largeScreen = window.matchMedia("(min-width: 64rem)");
    const closeOnLargeScreen = () => {
      if (largeScreen.matches) onClose();
    };

    largeScreen.addEventListener("change", closeOnLargeScreen);
    return () => largeScreen.removeEventListener("change", closeOnLargeScreen);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      id="mobile-menu"
      aria-label="Site menu"
      data-tone="dark"
      className="mobile-menu fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-cocoa p-0 text-ivory lg:hidden"
    >
      <div className="flex h-full flex-col">
        <div className="flex h-header shrink-0 items-center justify-between px-gutter">
          <Wordmark onNavigate={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2.5 inline-flex size-11 items-center justify-center"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div aria-hidden="true" className="kasavu shrink-0" />

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-gutter py-6">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-line-dark">
                <Link
                  href={item.href}
                  onNavigate={onClose}
                  aria-current={
                    isActivePath(pathname, item.href) ? "page" : undefined
                  }
                  className="block py-3.5 font-display text-[2rem] leading-tight aria-[current=page]:text-sage"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 px-gutter pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <Button
            href={bookingHref}
            variant="outline-inverse"
            onClick={onClose}
            className="w-full"
          >
            Book a Session
          </Button>
          <ContactActions
            tone="dark"
            className="sm:[&>*]:flex-1"
          />
        </div>
      </div>
    </dialog>
  );
}
