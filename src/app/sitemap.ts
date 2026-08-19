import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-19");
  return [
    { url: `${site.url}/`, lastModified, alternates: { languages: { tr: `${site.url}/`, en: `${site.url}/en/` } } },
    { url: `${site.url}/en/`, lastModified, alternates: { languages: { tr: `${site.url}/`, en: `${site.url}/en/` } } },
    { url: `${site.url}/gizlilik/`, lastModified, alternates: { languages: { tr: `${site.url}/gizlilik/`, en: `${site.url}/en/privacy/` } } },
    { url: `${site.url}/en/privacy/`, lastModified, alternates: { languages: { tr: `${site.url}/gizlilik/`, en: `${site.url}/en/privacy/` } } },
  ];
}
