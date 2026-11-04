import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type SectionTone = "ivory" | "sand" | "cocoa";

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
};

const toneStyles: Record<SectionTone, string> = {
  ivory: "bg-ivory text-cocoa",
  sand: "bg-sand text-cocoa",
  cocoa: "bg-cocoa text-ivory",
};

export function Section({ tone = "ivory", className, ...props }: SectionProps) {
  return (
    <section
      data-tone={tone === "cocoa" ? "dark" : undefined}
      className={cn("py-section", toneStyles[tone], className)}
      {...props}
    />
  );
}
