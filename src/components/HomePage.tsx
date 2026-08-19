import { copy } from "@/lib/copy";
import { site, type Locale } from "@/lib/site";
import { Footer } from "./Footer";
import { HeroVisual } from "./HeroVisual";
import { Nav } from "./Nav";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const mail = `mailto:${site.email}`;
  const skip = locale === "tr" ? "İçeriğe geç" : "Skip to content";

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="flex min-h-full flex-col bg-paper" lang={t.htmlLang}>
      <a className="skip-link" href="#icerik">
        {skip}
      </a>
      <Nav locale={locale} />
      <main className="flex-1" id="icerik">
        <section className="hero-desk">
          <div className="gutter mx-auto grid w-full max-w-6xl items-center gap-12 py-12 sm:py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
            <div className="min-w-0">
              <p className="rise text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
                {t.hero.badge}
              </p>
              <h1 className="rise rise-1 mt-5 max-w-3xl font-serif text-[clamp(2.2rem,7.4vw,4.4rem)] leading-[1.08] tracking-tight text-balance">
                {t.hero.titleBefore}
                <em className="mark-wash">{t.hero.titleMark}</em>
                {t.hero.titleAfter}
              </h1>
              <p className="rise rise-2 mt-6 max-w-lg text-base leading-relaxed text-pretty text-ink/72 sm:text-lg">
                {t.hero.body}
              </p>
              <div className="rise rise-3 mt-8 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={mail}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-cream transition hover:bg-forest"
                >
                  {t.hero.primary}
                </a>
                <p className="text-sm text-ink/60">
                  <span className="font-serif text-lg text-ink">{t.hero.proofA}</span>
                  <span className="mx-2 text-ink/25">·</span>
                  {t.hero.proofANote}
                  <span className="mx-2 text-ink/25">·</span>
                  {t.hero.proofB} {t.hero.proofBNote.toLowerCase()}
                </p>
              </div>
            </div>
            <div className="rise rise-2 lg:justify-self-end lg:w-full lg:max-w-[28rem]">
              <HeroVisual
                name={t.hero.bubbleName}
                message={t.hero.bubble}
                lines={t.how.cards[0].items}
              />
            </div>
          </div>
        </section>

        <section className="gutter scroll-mt-20 border-t border-ink/8 bg-paper py-16 sm:py-24" id="urun">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.how.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.how.title}
            </h2>
            <ol className="mt-10 sm:mt-14">
              {t.how.cards.map((card) => (
                <li key={card.title} className="how-step grid">
                  <p className="font-serif text-lg text-olive-deep">{card.n.padStart(2, "0")}</p>
                  <h3 className="font-serif text-[1.45rem] leading-tight sm:text-[1.7rem]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-ink/70">{card.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gutter bg-cream py-16 sm:py-24" id="ne-yapiyoruz">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.what.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.what.title}
            </h2>
            <ol className="mt-10 sm:mt-14">
              {t.what.items.map((item, i) => (
                <li key={item.title} className="journal-row">
                  <p className="font-serif text-lg text-olive-deep">{`0${i + 1}`}</p>
                  <h3 className="font-serif text-[1.45rem] leading-tight sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-ink/70">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gutter bg-paper py-16 sm:py-24" id="sistem">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.features.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.features.title}
            </h2>
            <ol className="mt-10 sm:mt-14">
              {t.features.items.map((item, i) => (
                <li key={item.title} className="journal-row">
                  <p className="font-serif text-lg text-olive-deep">{`0${i + 1}`}</p>
                  <h3 className="font-serif text-[1.45rem] leading-tight sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-ink/70">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gutter bg-cream py-16 sm:py-24" id="sinavlar">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.exams.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.exams.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-ink/70">
              {t.exams.body}
            </p>
            <div className="ledger mt-10 sm:mt-14">
              {t.exams.items.map((exam, i) => (
                <article key={exam.name} className="ledger-row">
                  <h3 className="font-serif text-[2rem] tracking-tight sm:text-[2.5rem]">
                    {exam.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-ink/65">{exam.note}</p>
                  <p
                    className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
                      i === 0 ? "text-ink" : "text-ink/45"
                    }`}
                  >
                    {exam.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter relative overflow-hidden bg-olive-deep py-16 text-cream sm:py-24" id="hikaye">
          <div className="grain" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-soft uppercase">
              {t.story.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.story.title}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.75] text-pretty text-cream/82">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
            </div>
          </div>
        </section>

        <section className="gutter bg-paper py-16 sm:py-24" id="sss">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.faq.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight">
              {t.faq.title}
            </h2>
            <div className="mt-10">
              {t.faq.items.map((item) => (
                <details key={item.q} className="faq-item group">
                  <summary className="flex items-baseline justify-between gap-4 py-5 font-serif text-[1.15rem] leading-snug sm:text-[1.35rem]">
                    <span>{item.q}</span>
                    <span aria-hidden className="font-sans text-lg text-olive-deep group-open:hidden">
                      +
                    </span>
                    <span aria-hidden className="hidden font-sans text-lg text-olive-deep group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-pretty text-ink/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter border-t border-ink/8 bg-cream py-16 sm:py-24" id="iletisim">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,9vw,4.5rem)] tracking-tight">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-ink/70">
              {t.contact.body}
            </p>
            <a
              href={mail}
              className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-cream transition hover:bg-forest"
            >
              {t.contact.cta}
            </a>
            <p className="mt-10 font-serif text-[clamp(1.4rem,4vw,2.4rem)] tracking-tight">
              <a href={mail} className="break-all hover:text-olive-deep">
                {site.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-ink/55">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                LinkedIn · scoliva-ai
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </div>
  );
}
