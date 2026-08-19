"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/site";

type Card = {
  n: string;
  title: string;
  body: string;
  asideTitle: string;
  asideBody: string;
  asideAction: string;
  items: readonly { label: string; note: string }[];
};

function CardAside({ card, index }: { card: Card; index: number }) {
  if (index === 2) {
    return (
      <div className="chapter-aside">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/40 uppercase">
          {card.asideTitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/70">{card.asideBody}</p>
        <span className="mt-5 inline-flex h-10 items-center rounded-full bg-[#dce6d4] px-4 text-[11px] font-semibold tracking-[0.12em] text-ink uppercase">
          {card.asideAction}
        </span>
      </div>
    );
  }

  return (
    <div className="chapter-aside">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/40 uppercase">
        {card.asideTitle}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-pretty text-ink/62">{card.asideBody}</p>
      <ul className="mt-5 space-y-2">
        {card.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-3 border-b border-ink/8 py-2.5 last:border-0"
          >
            <span className="text-sm text-ink">{item.label}</span>
            <span className="text-[11px] font-semibold tracking-[0.08em] text-ink/45 uppercase">
              {item.note}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function JourneyCards({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const cards = t.how.cards;
  const [active, setActive] = useState(0);
  const card = cards[active];

  return (
    <section className="gutter scroll-mt-20 bg-paper pt-16 pb-6 sm:pt-24 sm:pb-10" id="urun">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
          {t.how.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
          {t.how.title}
        </h2>

        <div className="chapter-spread">
          <ol
            className="chapter-index"
            role="tablist"
            aria-label={t.how.eyebrow}
            onKeyDown={(event) => {
              const step = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
              if (!step) return;
              event.preventDefault();
              const next = (active + step + cards.length) % cards.length;
              setActive(next);
              document.getElementById(`chapter-tab-${cards[next].n}`)?.focus();
            }}
          >
            {cards.map((item, index) => (
              <li key={item.title} role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={`chapter-tab-${item.n}`}
                  aria-selected={index === active}
                  aria-controls="chapter-page"
                  tabIndex={index === active ? 0 : -1}
                  onClick={() => setActive(index)}
                >
                  <span className="chapter-n">{item.n.padStart(2, "0")}</span>
                  <span className="chapter-t">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="chapter-stack">
            <article
              className="chapter-page"
              id="chapter-page"
              role="tabpanel"
              aria-labelledby={`chapter-tab-${card.n}`}
            >
              <div className="chapter-grid">
                <div className="min-w-0">
                  <p className="font-serif text-sm tracking-[0.18em] text-gold uppercase">
                    {card.n} / {cards.length}
                  </p>
                  <h3 className="mt-3 font-serif text-[clamp(1.7rem,4.4vw,2.7rem)] leading-[1.1] tracking-tight text-cream">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-pretty text-cream/68 sm:text-base">
                    {card.body}
                  </p>
                  <a
                    href="#ne-yapiyoruz"
                    className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-ink transition hover:bg-white"
                  >
                    {t.how.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="chapter-stage" aria-hidden>
                  <CardAside card={card} index={active} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
