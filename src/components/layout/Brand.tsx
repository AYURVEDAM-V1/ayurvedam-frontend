import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Brand() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="flex items-center gap-[0.7rem]"
    >
      <svg viewBox="0 0 40 40" aria-hidden="true" className="size-10 flex-none">
        <circle cx="20" cy="20" r="19" fill="var(--band)" />
        <path
          d="M20 8c5 6 7 11 7 15a7 7 0 0 1-14 0c0-4 2-9 7-15z"
          fill="var(--oil)"
        />
        <path
          d="M20 14v16"
          stroke="var(--band)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M20 22l-3.5-3M20 26l3.5-3"
          stroke="var(--band)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span>
        <span className="block font-display text-[1.35rem] leading-none tracking-[0.02em]">
          {siteConfig.shortName}
        </span>
        <span className="mt-1 block text-[0.68rem] leading-[1.65] tracking-[0.2em] text-muted uppercase">
          {siteConfig.descriptor}
        </span>
      </span>
    </Link>
  );
}
