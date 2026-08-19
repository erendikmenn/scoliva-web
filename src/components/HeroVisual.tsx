export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-[8%] rounded-full border border-cream/8" />
      <div className="absolute inset-[18%] rounded-full border border-gold/20" />
      <div className="absolute inset-[30%] rounded-full border border-cream/10" />
      <div className="float-slow absolute inset-[38%] grid place-items-center rounded-full bg-ink-soft/80 shadow-[0_0_80px_rgba(212,174,90,0.12)]">
        <img src="/icon.png" alt="" width={64} height={64} className="h-16 w-16" />
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
