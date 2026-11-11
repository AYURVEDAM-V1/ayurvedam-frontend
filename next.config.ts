import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

/**
 * The site is a static export: `npm run build` writes plain HTML, CSS and JS to
 * `out/`, which is uploaded to shared hosting. There is no Node.js server, so
 * features that need one (Cache Components, Server Actions, Route Handlers that
 * read the request, the default image optimizer, rewrites, redirects and
 * headers) cannot be used. Redirects and headers live in `public/.htaccess`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // The default optimizer needs a server. Images are served as they are.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

/**
 * The site address is written into every built page, so a build with a wrong
 * one (for example from a leftover .env.local) would publish broken canonical
 * links and a broken sitemap. Stop the build instead.
 */
function checkSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  if (!url.startsWith("https://") || /localhost|example\.com/.test(url)) {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL is "${url}", but a build needs the live https:// address. ` +
        "Set it in .env.production, and check that .env.local does not override it.",
    );
  }
}

export default function config(phase: string): NextConfig {
  if (phase === PHASE_PRODUCTION_BUILD) checkSiteUrl();
  return nextConfig;
}
