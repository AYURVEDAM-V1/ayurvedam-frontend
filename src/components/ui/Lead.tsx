import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type LeadProps = {
  children: ReactNode;
  className?: string;
};

export function Lead({ children, className }: LeadProps) {
  return (
    <p
      className={cn(
        "max-w-[60ch] text-[1.1rem] text-muted in-data-[tone=band]:text-band-fg/75 max-[901px]:mx-auto max-[901px]:text-center max-[901px]:text-balance",
        className,
      )}
    >
      {children}
    </p>
  );
}
