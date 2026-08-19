export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-[8%] rounded-full border border-cream/8" />
      <div className="absolute inset-[18%] rounded-full border border-gold/20" />
      <div className="absolute inset-[30%] rounded-full border border-cream/10" />
      <div className="float-slow absolute inset-[38%] grid place-items-center rounded-full bg-ink-soft/80 shadow-[0_0_80px_rgba(212,174,90,0.12)]">
        <svg viewBox="0 0 32 32" className="h-16 w-16" aria-hidden>
          <path
            fill="#f3eee3"
            d="M16 6.5c5 3.4 7.4 8.2 7.4 12.3 0 5.4-3.5 9.2-7.4 10.5C11.1 28 7.6 24.2 7.6 18.8 7.6 14.7 10 9.9 16 6.5Z"
          />
          <circle cx="16" cy="22.2" r="2.2" fill="#d4ae5a" />
        </svg>
      </div>
      <svg
        viewBox="0 0 240 240"
        className="orbit pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle cx="120" cy="18" r="3.2" fill="#d4ae5a" />
        <circle cx="222" cy="120" r="2.4" fill="#f3eee3" opacity="0.55" />
        <circle cx="120" cy="222" r="3.2" fill="#d4ae5a" />
        <circle cx="18" cy="120" r="2.4" fill="#f3eee3" opacity="0.55" />
      </svg>
    </div>
  );
}
