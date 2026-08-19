export function Mark({
  className = "h-8 w-8",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const leaf = inverted ? "#0a1410" : "#f3eee3";

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        fill={leaf}
        d="M16 6.5c5 3.4 7.4 8.2 7.4 12.3 0 5.4-3.5 9.2-7.4 10.5C11.1 28 7.6 24.2 7.6 18.8 7.6 14.7 10 9.9 16 6.5Z"
      />
      <circle cx="16" cy="22.2" r="2.2" fill="#d4ae5a" />
    </svg>
  );
}

export function Wordmark({
  className = "text-ink",
  markClassName = "h-8 w-8 text-ink",
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
