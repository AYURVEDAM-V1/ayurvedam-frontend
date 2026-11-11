"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

/**
 * The static HTML holds the year the site was built. The browser then shows
 * the current year, so the footer stays right even if nobody rebuilds the site.
 */
export function CurrentYear({ buildYear }: { buildYear: number }) {
  return useSyncExternalStore(subscribe, getYear, () => buildYear);
}
