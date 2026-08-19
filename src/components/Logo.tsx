export function Mark({
  className = "h-8 w-8",
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <img
      src="/icon.png"
      alt=""
      width={64}
      height={64}
      className={className}
    />
  );
}

export function Wordmark({
  className = "text-ink",
  markClassName = "h-8 w-8",
}: {
  className?: string;
  markClassName?: string;
  inverted?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className={markClassName} />
      <span className="font-serif text-[1.4rem] leading-none tracking-tight">
        Scoliva
      </span>
    </span>
  );
}
