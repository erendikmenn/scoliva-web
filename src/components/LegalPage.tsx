import Link from "next/link";
import { copy } from "@/lib/copy";
import { pathFor, site, type Locale } from "@/lib/site";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function LegalPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="flex min-h-full flex-col bg-paper" lang={t.htmlLang}>
      <Nav
        locale={locale}
        localeHref={locale === "en" ? "/gizlilik/" : "/en/privacy/"}
      />
      <main className="gutter mx-auto w-full max-w-2xl flex-1 py-14 sm:py-20">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
          Scoliva
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2.1rem,8vw,3rem)] tracking-tight">
          {t.privacy.title}
        </h1>
        <p className="mt-3 text-sm text-ink/45">{t.privacy.updated}</p>
        <p className="mt-10 text-base leading-relaxed text-ink/72">{t.privacy.intro}</p>
        {t.privacy.sections.map((section) => (
          <section key={section.title} className="mt-12 border-t border-ink/8 pt-8">
            <h2 className="font-serif text-2xl">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{section.body}</p>
          </section>
        ))}
        <p className="mt-14 flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
          <a href={`mailto:${site.email}`} className="font-semibold break-all text-olive-deep">
            {site.email}
          </a>
          <span className="hidden text-ink/25 sm:inline">·</span>
          <Link href={pathFor(locale)} className="text-ink/55 hover:text-ink">
            {locale === "en" ? "Back home" : "Ana sayfa"}
          </Link>
        </p>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
