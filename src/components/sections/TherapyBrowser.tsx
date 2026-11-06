"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Devanagari } from "@/components/ui/Devanagari";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  categoryLabels,
  therapies,
  therapyFilters,
  type Therapy,
  type TherapyFilter,
} from "@/data/therapies";
import { buildTherapyMessage } from "@/lib/booking";
import { cn } from "@/lib/cn";
import { whatsappHref } from "@/lib/contact";

function TherapyCard({ therapy, hidden }: { therapy: Therapy; hidden: boolean }) {
  return (
    <article
      hidden={hidden}
      className="grid min-w-0 grid-rows-[auto_auto_1fr_auto_auto] gap-[0.55rem] bg-surface p-[1.6rem] shadow-[0_0_0_1px_var(--line)] max-[901px]:text-center"
    >
      <Devanagari className="text-[1.25rem] leading-none text-copper">
        {therapy.devanagari}
      </Devanagari>
      <h3>{therapy.name}</h3>
      <p className="text-[0.95rem] text-muted">
        <strong className="text-ink">{therapy.subtitle}.</strong>{" "}
        {therapy.description}
      </p>
      <div className="flex items-center justify-between gap-2 border-t border-dashed border-line pt-[0.9rem] text-[0.82rem] text-muted tabular-nums">
        <span className="text-[0.72rem] font-bold tracking-[0.08em] text-ink uppercase">
          {categoryLabels[therapy.category]}
        </span>
        {therapy.duration ? <span>{therapy.duration}</span> : null}
      </div>
      <Button
        href={whatsappHref(buildTherapyMessage(therapy))}
        aria-label={`Book Now: ${therapy.name} on WhatsApp (opens in a new tab)`}
        className="mt-2 w-full justify-center"
      >
        <WhatsAppIcon className="size-5" />
        Book Now
      </Button>
    </article>
  );
}

export function TherapyBrowser() {
  const [active, setActive] = useState<TherapyFilter>("all");

  const isVisible = (therapy: Therapy) =>
    active === "all" || therapy.category === active;

  return (
    <>
      <div
        role="group"
        aria-label="Filter therapies"
        className="mb-4 flex flex-wrap gap-2 max-[901px]:justify-center"
      >
        {therapyFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={active === filter.id}
            onClick={() => setActive(filter.id)}
            className={cn(
              "cursor-pointer rounded-full border-[1.5px] px-4 py-[0.45rem] text-[0.88rem] leading-[normal] font-bold",
              active === filter.id
                ? "border-ink bg-ink text-page"
                : "border-line bg-surface text-muted",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Each sentence stays whole, so phones break the line between them. */}
      <p className="mb-[1.8rem] text-[0.9rem] text-balance text-muted max-[901px]:text-center">
        <span className="inline-block">
          Book Now opens WhatsApp with your therapy filled in.
        </span>{" "}
        <span className="inline-block">
          Your request reaches us when you press send.
        </span>
      </p>

      <p role="status" className="sr-only">
        Showing {therapies.filter(isVisible).length} therapies
      </p>

      {/* Lines come from each card's shadow, so empty cells stay plain. */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-px overflow-hidden rounded-[20px] border border-line bg-surface">
        {therapies.map((therapy) => (
          <TherapyCard
            key={therapy.name}
            therapy={therapy}
            hidden={!isVisible(therapy)}
          />
        ))}
      </div>
    </>
  );
}
