"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
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

const ICONS = [
  <path
    key="a"
    d="M12 4.5c2.8 2.2 4.4 4.4 4.4 6.6A4.4 4.4 0 1 1 7.6 11c0-2.2 1.6-4.4 4.4-6.5Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
  />,
  <path
    key="b"
    d="M7 8h10M7 12h10M7 16h6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  />,
  <path
    key="c"
    d="M8 12c0-3 2-5 4-5s4 1.6 4 4-1.6 3.4-3.2 3.4c-.8 0-1.3-.5-1.3-1.2 0-2 3.5-2.4 3.5-5.2 0-1.8-1.5-3-3-3s-3.2 1.3-3.2 3.4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  />,
  <path
    key="d"
    d="M6 12h12M14 8l4 4-4 4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
] as const;

function CardAside({ card, index }: { card: Card; index: number }) {
  if (index === 2) {
    return (
      <div className="journey-aside">
        <p className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-cream">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
              {ICONS[2]}
            </svg>
          </span>
          {card.asideTitle}
        </p>
        <p className="mt-4 rounded-2xl bg-paper px-4 py-3 text-sm leading-relaxed text-pretty text-ink/70">
          {card.asideBody}
        </p>
        <div className="mt-5 flex items-center gap-2">
          <span className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[#dce6d4] text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">
            {card.asideAction}
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ink/10 text-ink/50">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 8.5V12l2.4 1.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="journey-aside">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/40 uppercase">
        {card.asideTitle}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-pretty text-ink/62">{card.asideBody}</p>
      <ul className="mt-5 space-y-2">
        {card.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-3 rounded-2xl bg-paper px-3.5 py-3"
          >
            <span className="text-sm font-medium text-ink">{item.label}</span>
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
  const pinRef = useRef<HTMLDivElement>(null);
  const panesRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const pin = pinRef.current;
    const panes = panesRef.current;
    if (!pin || panes.length === 0) return;

    let frame = 0;
    const last = cards.length - 1;

    const paint = () => {
      const range = pin.offsetHeight - window.innerHeight;
      const scrolled = -pin.getBoundingClientRect().top;
      const progress = range <= 0 ? 0 : Math.min(1, Math.max(0, scrolled / range));
      const cursor = progress * last;

      panes.forEach((pane, index) => {
        if (!pane) return;
        const dist = Math.abs(cursor - index);
        const open = dist >= 1 ? 0 : 1 - dist;
        pane.style.setProperty("--open", open.toFixed(4));
        const isOpen = open > 0.55;
        pane.dataset.open = isOpen ? "true" : "false";
        const body = pane.querySelector(".journey-body");
        if (body) body.setAttribute("aria-hidden", isOpen ? "false" : "true");
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        paint();
      });
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [cards.length]);

  const openAt = (index: number) => {
    const pin = pinRef.current;
    if (!pin) return;
    const last = Math.max(cards.length - 1, 1);
    const range = pin.offsetHeight - window.innerHeight;
    const top = pin.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (index / last) * range, behavior: "smooth" });
  };

  return (
    <section className="scroll-mt-20 bg-paper pt-10 sm:pt-16" id="urun">
      <div className="gutter mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-olive-deep uppercase">
          {t.how.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.85rem,6.8vw,3.25rem)] tracking-tight text-balance">
          {t.how.title}
        </h2>
      </div>

      <div className="journey-pin" ref={pinRef}>
        <div className="journey-sticky">
          <div className="gutter mx-auto flex h-full max-w-6xl">
            <div className="journey-deck">
              {cards.map((card, index) => (
                <article
                  key={card.title}
                  ref={(node) => {
                    panesRef.current[index] = node;
                  }}
                  className="journey-pane"
                  style={{ ["--open" as string]: index === 0 ? "1" : "0" }}
                  data-open={index === 0 ? "true" : "false"}
                >
                  <button
                    type="button"
                    className="journey-spine"
                    onClick={() => openAt(index)}
                    aria-label={`${card.n}. ${card.title}`}
                  >
                    <span className="font-serif text-2xl text-gold sm:text-3xl">{card.n}</span>
                    <span className="journey-spine-title">{card.title}</span>
                  </button>

                  <div className="journey-body">
                    <div className="journey-grid">
                      <div className="flex min-w-0 flex-col">
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/14 text-cream">
                          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                            {ICONS[index] ?? ICONS[0]}
                          </svg>
                        </span>
                        <h3 className="mt-5 font-serif text-[clamp(1.55rem,4vw,2.55rem)] leading-[1.1] tracking-tight text-cream">
                          {card.n}. {card.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-pretty text-cream/68 sm:mt-4 sm:text-base">
                          {card.body}
                        </p>
                        <a
                          href="#ne-yapiyoruz"
                          className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-ink transition hover:bg-white sm:mt-8"
                        >
                          {t.how.cta}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="journey-stage" aria-hidden>
                        <CardAside card={card} index={index} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
