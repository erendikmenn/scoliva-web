import Link from "next/link";
import { copy } from "@/lib/copy";
import { pathFor, site, type Locale } from "@/lib/site";
import { Wordmark } from "./Logo";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const privacyHref = locale === "en" ? "/en/privacy/" : "/gizlilik/";

  return (
    <footer className="relative overflow-hidden bg-ink pb-[max(0.25rem,env(safe-area-inset-bottom))] text-cream">
      <div className="grain" />
      <div className="gutter relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 pt-12 pb-8 sm:gap-10 sm:pt-16 sm:pb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Link href={pathFor(locale)} aria-label="Scoliva">
            <Wordmark
              className="text-cream"
              markClassName="h-8 w-8 text-cream"
              inverted
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-pretty text-cream/55">
            {t.footer.blurb}
          </p>
        </div>
        <nav className="flex flex-col gap-1 text-sm text-cream/55 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center hover:text-cream"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center hover:text-cream"
          >
            LinkedIn
          </a>
          <Link
            href={privacyHref}
            className="inline-flex min-h-11 items-center hover:text-cream"
          >
            {t.footer.privacy}
          </Link>
        </nav>
      </div>
      <div className="gutter relative z-10 border-t border-cream/8">
        <p className="mx-auto max-w-6xl py-4 text-xs text-cream/35">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
      <p aria-hidden className="footer-mark">
        Scoliva
      </p>
    </footer>
  );
}
