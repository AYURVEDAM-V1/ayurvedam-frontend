import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type KickerProps = {
  children: ReactNode;
  className?: string;
};

/** The short italic line above a heading. It adapts to dark sections. */
export function Kicker({ children, className }: KickerProps) {
  return (
    <p
      className={cn(
        "font-display text-[1.375rem] leading-snug text-laterite italic in-data-[tone=dark]:text-sage",
        className,
      )}
    >
      {children}
    </p>
  );
}
