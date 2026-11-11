import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Written to out/sitemap.xml at build time, as the site is a static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, changeFrequency: "monthly", priority: 1 }];
}
