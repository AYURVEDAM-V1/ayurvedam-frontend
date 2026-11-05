"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Brand } from "@/components/layout/Brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { bookingHref, primaryNav } from "@/config/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      buttonRef.current?.focus();
    };

    const closeOnOutsidePress = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    const closeOnHashChange = () => setIsOpen(false);

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    window.addEventListener("hashchange", closeOnHashChange);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      window.removeEventListener("hashchange", closeOnHashChange);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[10px]">
      <Container className="relative flex items-center justify-between gap-4 py-[0.9rem]">
        <Brand />

        <button
          ref={buttonRef}
          id="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={() => setIsOpen((open) => !open)}
          className="hidden min-h-11 min-w-11 cursor-pointer rounded-[10px] border-[1.5px] border-line bg-transparent px-[0.7rem] text-[0.9rem] font-bold text-ink max-[901px]:inline-block"
        >
          Menu
        </button>

        {/* The max height allows for the top bar too, so on a phone held sideways
            the last link can still be scrolled into view at the top of the page. */}
        <nav
          ref={panelRef}
          id="nav-links"
          aria-label="Main"
          className={cn(
            "items-center gap-[1.6rem] min-[901px]:flex max-[901px]:absolute max-[901px]:inset-x-0 max-[901px]:top-full max-[901px]:max-h-[calc(100dvh-10.5rem)] max-[901px]:flex-col max-[901px]:items-stretch max-[901px]:gap-0 max-[901px]:overflow-y-auto max-[901px]:border-b max-[901px]:border-line max-[901px]:bg-page max-[901px]:px-4 max-[901px]:pt-2 max-[901px]:pb-4",
            isOpen ? "flex" : "hidden",
          )}
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-[0.95rem] font-medium text-muted hover:text-ink max-[901px]:border-b max-[901px]:border-line max-[901px]:py-3"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={bookingHref}
            onClick={closeMenu}
            className="max-[901px]:mt-[0.8rem] max-[901px]:justify-center"
          >
            Book a session
          </Button>
        </nav>
      </Container>
    </header>
  );
}
