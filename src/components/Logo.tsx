const ICON_VERSION = "10";

export function Mark({
  className = "h-8 w-8",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <img
      src={inverted ? `/icon.png?v=${ICON_VERSION}` : `/quill-ink.png?v=${ICON_VERSION}`}
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
  inverted = false,
}: {
  className?: string;
  markClassName?: string;
  inverted?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className={markClassName} inverted={inverted} />
      <span className="font-serif text-[1.4rem] leading-none tracking-tight">
        Scoliva
      </span>
    </span>
  );
}
