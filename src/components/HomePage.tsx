import { copy } from "@/lib/copy";
import { site, type Locale } from "@/lib/site";
import { Footer } from "./Footer";
import { HeroVisual } from "./HeroVisual";
import { Nav } from "./Nav";

function MiniList({
  title,
  body,
  items,
  ink = false,
}: {
  title: string;
  body: string;
  items: readonly { label: string; note: string }[];
  ink?: boolean;
}) {
  if (items.length === 0) {
    return (
      <div className={`inset ${ink ? "bg-cream/10" : ""}`}>
        <p className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${ink ? "text-gold" : "text-ink/40"}`}>
          {title}
        </p>
        <p className={`mt-2 text-sm leading-relaxed ${ink ? "text-cream/70" : "text-ink/65"}`}>{body}</p>
      </div>
    );
  }

  return (
    <div className={`inset ${ink ? "bg-cream/10" : ""}`}>
      <p className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${ink ? "text-gold" : "text-ink/40"}`}>
        {title}
      </p>
      <ul className="mt-3 space-y-0">
        {items.map((item) => (
          <li
            key={item.label}
            className={`flex items-center justify-between gap-3 py-2 text-sm ${
              ink ? "border-b border-cream/10 text-cream last:border-0" : "border-b border-ink/8 last:border-0"
            }`}
          >
            <span>{item.label}</span>
            <span className={`text-[11px] font-semibold tracking-[0.08em] uppercase ${ink ? "text-cream/45" : "text-ink/45"}`}>
              {item.note}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
        <section className="hero-desk overflow-x-clip">
          <div className="gutter mx-auto grid w-full max-w-6xl items-center gap-12 py-12 sm:py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:py-16">
            <div className="min-w-0">
              <p className="rise text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
                {t.hero.badge}
              </p>
              <h1 className="rise rise-1 mt-5 max-w-3xl font-serif text-[clamp(2.15rem,8.2vw,4.5rem)] leading-[1.08] tracking-tight text-balance">
                {t.hero.titleBefore}
                <em className="mark-wash">{t.hero.titleMark}</em>
                {t.hero.titleAfter}
              </h1>
              <p className="rise rise-2 mt-6 max-w-lg text-base leading-relaxed text-pretty text-ink/68 sm:text-lg">
                {t.hero.body}
              </p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={mail}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-cream transition hover:bg-forest"
                >
                  {t.hero.primary}
                </a>
                <a
                  href="#urun"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-ink/12 bg-white/70 px-6 text-sm font-semibold text-ink/80 transition hover:border-ink/25 hover:bg-white"
                >
                  {t.hero.secondary}
                </a>
              </div>
              <div className="rise rise-3 mt-10 flex max-w-md items-stretch border-t border-ink/8 pt-6">
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

        <section className="gutter scroll-mt-20 bg-cream py-16 sm:py-24" id="urun">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.how.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.how.title}
            </h2>
            <ol className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4">
              {t.how.cards.map((card, i) => (
                <li key={card.title}>
                  <article className={`panel ${i === 0 ? "panel-ink" : "panel-paper"}`}>
                    <p className={`font-serif text-sm tracking-[0.16em] uppercase ${i === 0 ? "text-gold" : "text-olive-deep"}`}>
                      {card.n} / {t.how.cards.length}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.7rem] leading-tight sm:text-[2rem]">{card.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed text-pretty ${i === 0 ? "text-cream/68" : "text-ink/65"}`}>
                      {card.body}
                    </p>
                    <MiniList
                      title={card.asideTitle}
                      body={card.asideBody}
                      items={card.items}
                      ink={i === 0}
                    />
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gutter bg-paper py-16 sm:py-24" id="ne-yapiyoruz">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.what.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.what.title}
            </h2>
            <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {t.what.items.map((item, i) => (
                <li key={item.title} className="panel">
                  <div className="rule-gold h-px w-10" />
                  <p className="mt-5 font-serif text-3xl text-gold">{`0${i + 1}`}</p>
                  <h3 className="mt-3 font-serif text-[1.4rem] leading-tight sm:text-[1.6rem]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/65">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="gutter bg-cream py-16 sm:py-24" id="sistem">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.features.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.features.title}
            </h2>
            <ul className="mt-10 grid gap-3 sm:mt-14 md:grid-cols-3">
              {t.features.items.map((item) => (
                <li key={item.title} className="panel panel-paper">
                  <h3 className="font-serif text-[1.45rem] leading-tight sm:text-[1.65rem]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/65">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="gutter bg-paper py-16 sm:py-24" id="sinavlar">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
              {t.exams.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
              {t.exams.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-ink/65">
              {t.exams.body}
            </p>
            <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-ink/8 bg-cream sm:mt-12">
              {t.exams.items.map((exam, i) => (
                <article
                  key={exam.name}
                  className={`flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 ${
                    i > 0 ? "border-t border-ink/8" : ""
                  }`}
                >
                  <div className="min-w-0 sm:flex sm:items-baseline sm:gap-5">
                    <h3 className="font-serif text-[2rem] tracking-tight sm:text-5xl">{exam.name}</h3>
                    <p className="mt-1 max-w-md text-sm text-pretty text-ink/58 sm:mt-0">{exam.note}</p>
                  </div>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase ${
                      i === 0 ? "bg-ink text-cream" : "border border-ink/12 text-ink/55"
                    }`}
                  >
                    {exam.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter relative overflow-hidden bg-olive-deep py-16 text-cream sm:py-24" id="hikaye">
          <div className="grain" />
          <div className="relative mx-auto max-w-4xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-soft uppercase">
              {t.story.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.85rem,6.8vw,3.4rem)] tracking-tight text-balance">
              {t.story.title}
            </h2>
            <div className="mt-8 grid gap-6 text-base leading-[1.75] text-pretty text-cream/80 md:grid-cols-2">
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
                  <summary className="flex items-start justify-between gap-4 py-4 font-serif text-[1.1rem] leading-snug sm:text-xl">
                    <span className="min-w-0 pt-0.5">{item.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-lg leading-none text-gold">
                      +
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-pretty text-ink/65">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter bg-cream py-16 sm:py-24" id="iletisim">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.6rem] bg-ink px-5 py-12 text-cream sm:rounded-[2.2rem] sm:px-14 sm:py-20">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.1rem,10vw,4.5rem)] tracking-tight">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-cream/65">
              {t.contact.body}
            </p>
            <a
              href={mail}
              className="mt-8 inline-flex h-12 items-center rounded-full bg-cream px-6 text-sm font-semibold text-ink"
            >
              {t.contact.cta}
            </a>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <a
                href={mail}
                className="inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl bg-cream/8 px-5 py-4"
              >
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.14em] text-cream/40 uppercase">
                    {t.contact.emailLabel}
                  </span>
                  <span className="mt-1 block font-serif text-[1.15rem] break-all sm:text-2xl">{site.email}</span>
                </span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-cream/12 px-5 py-4"
              >
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.14em] text-cream/40 uppercase">
                    {t.contact.linkedinLabel}
                  </span>
                  <span className="mt-1 block font-serif text-[1.15rem] sm:text-2xl">scoliva-ai</span>
                </span>
              </a>
            </div>
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
