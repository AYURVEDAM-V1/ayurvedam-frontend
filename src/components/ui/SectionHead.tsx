import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lead } from "@/components/ui/Lead";
import { cn } from "@/lib/cn";

type SectionHeadProps = {
  devanagari: string;
  eyebrow: string;
  title: string;
  lead?: string;
  /** Removes the space below, for headings that share a column with content. */
  flush?: boolean;
  children?: ReactNode;
};

export function SectionHead({
  devanagari,
  eyebrow,
  title,
  lead,
  flush = false,
  children,
}: SectionHeadProps) {
  return (
    <div className={cn("grid gap-4", !flush && "mb-[clamp(32px,5vw,56px)]")}>
      <Eyebrow devanagari={devanagari}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {lead ? <Lead>{lead}</Lead> : null}
      {children}
    </div>
  );
}
