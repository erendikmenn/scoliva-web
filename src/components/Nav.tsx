"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { copy } from "@/lib/copy";
import { pathFor, site, type Locale } from "@/lib/site";
import { Wordmark } from "./Logo";

export function Nav({
  locale,
  localeHref,
}: {
  locale: Locale;
  localeHref?: string;
}) {
  const t = copy[locale];
  const home = pathFor(locale);
  const other = locale === "tr" ? "EN" : "TR";
  const otherHref = localeHref ?? (locale === "tr" ? "/en/" : "/");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = [
    { href: `${home}#urun`, label: t.nav.product },
    { href: `${home}#sinavlar`, label: t.nav.exams },
    { href: `${home}#hikaye`, label: t.nav.about },
    { href: `mailto:${site.email}`, label: t.nav.contact },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const menu = (
    <div
      role="dialog"
      aria-modal={open}
      aria-hidden={!open}
      aria-label={t.nav.menu}
      inert={!open}
      className={`menu-screen gutter fixed inset-0 z-[200] flex h-[100dvh] min-h-[100dvh] w-full flex-col bg-ink text-cream md:hidden ${
        open ? "menu-screen-open" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between pt-[max(1.25rem,env(safe-area-inset-top))]">
        <Link href={pathFor(locale)} aria-label="Scoliva" onClick={() => setOpen(false)}>
          <Wordmark
            className="text-cream"
            markClassName="h-8 w-8 text-cream"
            inverted
          />
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20"
          aria-label={t.nav.close}
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-3.5 w-5">
            <span className="absolute top-1.5 left-0 h-0.5 w-5 rotate-45 bg-cream" />
            <span className="absolute top-1.5 left-0 h-0.5 w-5 -rotate-45 bg-cream" />
          </span>
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-1">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="menu-link py-1 font-serif text-[clamp(2rem,9vw,3.25rem)] tracking-tight text-cream"
            style={{ transitionDelay: open ? `${120 + index * 60}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <Link
          href={otherHref}
          hrefLang={locale === "tr" ? "en" : "tr"}
          className="inline-flex h-12 items-center justify-center rounded-full border border-cream/20 text-sm font-semibold"
          onClick={() => setOpen(false)}
        >
          {other}
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex h-12 items-center justify-center rounded-full bg-cream text-sm font-semibold text-ink"
        >
          {t.nav.cta}
        </a>
        <a href={`mailto:${site.email}`} className="pt-1 text-center text-sm text-cream/55">
          {site.email}
        </a>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/80 backdrop-blur-xl">
      <div className="gutter mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <Link href={pathFor(locale)} aria-label="Scoliva" className="justify-self-start">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/65 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href={otherHref}
            className="hidden h-9 items-center rounded-full border border-ink/12 px-3 text-xs font-semibold tracking-[0.12em] text-ink/65 hover:text-ink md:inline-flex"
            hrefLang={locale === "tr" ? "en" : "tr"}
          >
            {other}
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="hidden h-9 items-center rounded-full bg-ink px-4 text-sm font-semibold text-cream hover:bg-forest md:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 md:hidden"
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t.nav.close : t.nav.menu}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-ink transition duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 bg-ink transition duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-ink transition duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mounted ? createPortal(menu, document.documentElement) : null}
    </header>
  );
}
