import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about-us", "/properties", "/contact-us", "/terms-and-conditions"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...properties.map((p) => ({ url: `${SITE.url}/properties/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
