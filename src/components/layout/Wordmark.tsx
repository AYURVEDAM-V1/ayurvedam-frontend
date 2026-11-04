import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Wordmark({ className, onNavigate }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      onNavigate={onNavigate}
      className={cn(
        "font-display text-[1.375rem] leading-none font-semibold tracking-[0.2em] sm:text-2xl",
        className,
      )}
    >
      {siteConfig.name}
    </Link>
  );
}
