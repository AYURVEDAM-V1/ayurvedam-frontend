import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type DevanagariProps = {
  children: ReactNode;
  className?: string;
  lang?: "hi" | "sa";
};

/** The lang attribute helps screen readers pronounce the word correctly. */
export function Devanagari({ children, className, lang = "hi" }: DevanagariProps) {
  return (
    <span lang={lang} className={cn("font-deva", className)}>
      {children}
    </span>
  );
}
