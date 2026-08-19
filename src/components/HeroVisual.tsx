export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-[8%] rounded-full border border-cream/8" />
      <div className="absolute inset-[18%] rounded-full border border-gold/20" />
      <div className="absolute inset-[30%] rounded-full border border-cream/10" />
      <div className="float-slow absolute inset-[38%] grid place-items-center rounded-full bg-ink-soft/80 shadow-[0_0_80px_rgba(212,174,90,0.12)]">
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <g transform="rotate(-36 32 33)">
            <path
              fill="#f3eee3"
              d="M32 7.2C40.2 12.4 47.2 21.6 46.2 32.2C45.4 41.2 39.8 48.2 32 52.4C24.2 48.2 18.6 41.2 17.8 32.2C17.2 26.4 18.6 21.2 22.2 16.8L16.8 24.6L25.2 20.4L21.2 14.2C24.4 10.2 28.2 7.8 32 7.2Z"
            />
            <path
              fill="#d4ae5a"
              d="M27.6 51.4L32 50.8L36.4 51.4C37.4 53.2 36.6 56.6 32 61.4C27.4 56.6 26.6 53.2 27.6 51.4Z"
            />
          </g>
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
