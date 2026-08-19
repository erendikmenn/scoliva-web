export function HeroVisual({
  name,
  message,
}: {
  name: string;
  message: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
      <div className="hero-stage-card relative aspect-square overflow-hidden rounded-[1.6rem] bg-white sm:rounded-[2rem]">
        <div aria-hidden className="hero-rings">
          <span />
          <span />
          <span />
        </div>
        <img
          src="/icon.png"
          alt=""
          width={160}
          height={160}
          className="absolute top-1/2 left-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>

      <aside className="hero-bubble relative z-10 mx-4 -mt-10 rounded-[1.35rem] bg-white p-4 sm:absolute sm:top-[18%] sm:-left-8 sm:mt-0 sm:max-w-[17.5rem] sm:p-5 lg:-left-10">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-ink/45 uppercase">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-ink">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
              <path
                d="M2.2 6.6 4.5 8.8 9.8 3.2"
                fill="none"
                stroke="#d4ae5a"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {name}
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-pretty text-ink/72">
          {message}
        </p>
      </aside>
    </div>
  );
}
