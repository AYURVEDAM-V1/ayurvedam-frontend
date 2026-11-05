import type { ReactNode } from "react";

import { Devanagari } from "@/components/ui/Devanagari";

type EyebrowProps = {
  devanagari: string;
  children: ReactNode;
};

/** The small label above a heading. It adapts to the green band sections. */
export function Eyebrow({ devanagari, children }: EyebrowProps) {
  return (
    <div className="flex items-baseline gap-[0.6rem] text-[0.78rem] max-[901px]:flex-wrap max-[901px]:justify-center max-[901px]:text-center font-bold tracking-[0.14em] text-muted uppercase in-data-[tone=band]:text-band-fg/70">
      <Devanagari className="text-[1.1rem] font-normal tracking-normal text-copper normal-case in-data-[tone=band]:text-oil-text">
        {devanagari}
      </Devanagari>
      {children}
    </div>
  );
}
