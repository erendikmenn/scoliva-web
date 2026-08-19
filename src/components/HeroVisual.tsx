export function HeroVisual({
  name,
  message,
  lines,
}: {
  name: string;
  message: string;
  lines: readonly { label: string; note: string }[];
}) {
  return (
    <aside className="notebook" aria-label={name}>
      <div className="notebook-inner">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-olive-deep uppercase">
          <img src="/icon.png" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
          {name}
        </p>
        <p className="mt-6 max-w-sm font-serif text-[1.35rem] leading-snug text-pretty text-ink">
          {message}
        </p>
        <ul className="mt-8 space-y-0">
          {lines.map((item) => (
            <li
              key={item.label}
              className="flex items-baseline justify-between gap-4 border-b border-ink/8 py-3 last:border-0"
            >
              <span className="text-sm text-ink/80">{item.label}</span>
              <span className="text-[11px] font-semibold tracking-[0.08em] text-olive-deep uppercase">
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
