import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type SectionTone = "page" | "band" | "surface";

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
};

const toneStyles: Record<SectionTone, string> = {
  page: "",
  band: "bg-band text-band-fg",
  surface: "border-y border-line bg-surface",
};

export function Section({ tone = "page", className, ...props }: SectionProps) {
  return (
    <section
      data-tone={tone === "band" ? "band" : undefined}
      className={cn("py-section", toneStyles[tone], className)}
      {...props}
    />
  );
}
