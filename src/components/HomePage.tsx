import { ArrowRight, ArrowUpRight } from "lucide-react";
import { copy } from "@/lib/copy";
import { site, type Locale } from "@/lib/site";
import { Footer } from "./Footer";
import { HeroVisual } from "./HeroVisual";
import { JourneyCards } from "./JourneyCards";
import { Nav } from "./Nav";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const mail = `mailto:${site.email}`;

  return (
    <div className="flex min-h-full flex-col bg-paper" lang={t.htmlLang}>
      <Nav locale={locale} />
      <main className="flex-1">
        <section className="hero-light relative overflow-x-clip">
          <div className="gutter relative mx-auto grid w-full max-w-6xl items-center gap-10 py-10 sm:gap-12 sm:py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:py-16">
            <div className="min-w-0">
              <p className="rise inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-ink/50 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                {t.hero.badge}
              </p>
              <h1 className="rise rise-1 mt-5 max-w-3xl font-serif text-[clamp(2.15rem,8.4vw,4.55rem)] leading-[1.08] tracking-tight text-balance">
                {t.hero.titleBefore}
                <em className="mark-wash">{t.hero.titleMark}</em>
                {t.hero.titleAfter}
              </h1>
              <p className="rise rise-2 mt-5 max-w-lg text-base leading-relaxed text-pretty text-ink/62 sm:mt-6 sm:text-lg">
                {t.hero.body}
              </p>
              <div className="rise rise-3 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={mail}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-cream shadow-[0_14px_30px_-16px_rgb(10_20_16/0.55)] transition hover:bg-forest"
                >
                  {t.hero.primary}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#urun"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-ink/12 bg-white/70 px-6 text-sm font-semibold text-ink/80 transition hover:border-ink/25 hover:bg-white"
                >
                  {t.hero.secondary}
                </a>
              </div>
              <div className="rise rise-4 mt-10 flex max-w-md items-stretch border-t border-ink/8 pt-6">
                <div className="pr-6">
                  <p className="font-serif text-[2rem] leading-none tracking-tight">{t.hero.proofA}</p>
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-ink/45 uppercase">
                    {t.hero.proofANote}
                  </p>
                </div>
                <div className="border-l border-ink/8 pl-6">
                  <p className="font-serif text-[1.35rem] leading-none tracking-tight sm:text-[2rem]">
                    {t.hero.proofB}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-ink/45 uppercase">
                    {t.hero.proofBNote}
                  </p>
                </div>
              </div>
            </div>
            <div className="rise rise-2 lg:justify-self-end lg:w-full lg:max-w-[30rem]">
              <HeroVisual name={t.hero.bubbleName} message={t.hero.bubble} />
            </div>
          </div>
        </section>

        <JourneyCards locale={locale} />

        <section className="gutter bg-cream pt-14 pb-16 sm:pt-20 sm:pb-24" id="ne-yapiyoruz">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.what.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.what.title}
            </h2>
            <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {t.what.items.map((item, i) => (
                <article
                  key={item.title}
                  className="flex h-full min-w-0 flex-col rounded-[1.25rem] border border-ink/7 bg-paper p-5 sm:rounded-[1.6rem] sm:p-6"
                >
                  <div className="h-px w-10 shrink-0 rule-gold" />
                  <p className="mt-5 font-serif text-3xl text-gold">{`0${i + 1}`}</p>
                  <h3 className="mt-4 font-serif text-[1.35rem] leading-tight sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/62">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter bg-paper py-14 sm:py-24" id="sistem">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.features.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.features.title}
            </h2>
            <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
              {t.features.items.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full min-w-0 flex-col rounded-[1.35rem] bg-cream p-5 sm:rounded-[1.7rem] sm:p-7"
                >
                  <h3 className="font-serif text-[1.4rem] leading-tight sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/62">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter bg-cream py-14 sm:py-24" id="sinavlar">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.exams.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.exams.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-ink/62">
              {t.exams.body}
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.35rem] border border-ink/8 bg-paper sm:mt-12 sm:rounded-[1.8rem]">
              {t.exams.items.map((exam, i) => (
                <article
                  key={exam.name}
                  className={`flex flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 ${
                    i > 0 ? "border-t border-ink/8" : ""
                  }`}
                >
                  <div className="min-w-0 sm:flex sm:items-baseline sm:gap-5">
                    <h3 className="font-serif text-[2rem] tracking-tight sm:text-5xl">
                      {exam.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm text-pretty text-ink/58 sm:mt-0">
                      {exam.note}
                    </p>
                  </div>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase ${
                      i === 0
                        ? "bg-ink text-cream"
                        : "border border-ink/12 text-ink/55"
                    }`}
                  >
                    {exam.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter relative overflow-hidden bg-olive-deep py-16 text-cream sm:py-28" id="hikaye">
          <div className="grain" />
          <p
            aria-hidden
            className="pointer-events-none absolute -top-10 left-4 hidden font-serif text-[12rem] leading-none text-cream/[0.06] select-none sm:block"
          >
            “
          </p>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
              {t.story.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.85rem,6.8vw,3.4rem)] tracking-tight text-balance">
              {t.story.title}
            </h2>
            <div className="mt-8 grid gap-6 text-base leading-[1.75] text-pretty text-cream/78 sm:mt-10 md:grid-cols-2 md:gap-8">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
            </div>
          </div>
        </section>

        <section className="gutter bg-paper py-14 sm:py-24" id="sss">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.faq.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight">
              {t.faq.title}
            </h2>
            <div className="mt-8 space-y-3 sm:mt-12">
              {t.faq.items.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[1.15rem] border border-ink/8 bg-cream px-4 py-1 sm:rounded-[1.4rem] sm:px-5"
                >
                  <summary className="cursor-pointer list-none py-3 font-serif text-[1.05rem] leading-snug sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-3">
                      <span className="min-w-0 pt-0.5">{item.q}</span>
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-lg leading-none text-gold transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-pretty text-ink/62">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter bg-cream py-14 sm:py-24" id="iletisim">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.35rem] bg-ink px-5 py-10 text-cream sm:rounded-[2.2rem] sm:px-14 sm:py-20">
            <div className="relative min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                {t.contact.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.1rem,10vw,4.5rem)] tracking-tight">
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-cream/65 sm:mt-5">
                {t.contact.body}
              </p>
              <a
                href={mail}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-ink sm:mt-10 sm:w-auto"
              >
                {t.contact.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2">
                <a
                  href={mail}
                  className="card-lift inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl bg-cream/8 px-5 py-4 sm:min-h-0 sm:px-6 sm:py-5"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold tracking-[0.14em] text-cream/40 uppercase">
                      {t.contact.emailLabel}
                    </span>
                    <span className="mt-1 block font-serif text-[1.15rem] break-all sm:text-2xl">
                      {site.email}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-cream/12 px-5 py-4 sm:min-h-0 sm:px-6 sm:py-5"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold tracking-[0.14em] text-cream/40 uppercase">
                      {t.contact.linkedinLabel}
                    </span>
                    <span className="mt-1 block font-serif text-[1.15rem] sm:text-2xl">
                      scoliva-ai
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
