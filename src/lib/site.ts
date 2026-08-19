export const site = {
  name: "Scoliva",
  url: "https://scoliva.ai",
  email: "hello@scoliva.ai",
  linkedin: "https://www.linkedin.com/company/scoliva-ai/",
  tagline: {
    tr: "Her sınav için kişisel öğrenme.",
    en: "AI for personalized learning, for every exam.",
  },
} as const;

export type Locale = "tr" | "en";

export function pathFor(locale: Locale, path = "/") {
  const clean = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return locale === "en" ? `/en${clean === "/" ? "/" : clean}` : clean;
}

export function switchLocalePath(locale: Locale, pathname: string) {
  const withoutEn = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? pathFor("tr", withoutEn) : pathFor("en", withoutEn);
}
