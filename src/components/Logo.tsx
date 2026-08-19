export function Mark({
  className = "h-8 w-8",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const feather = inverted ? "#0a1410" : "#f3eee3";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <g transform="rotate(-36 32 33)">
        <path
          fill={feather}
          d="M32 7.2C40.2 12.4 47.2 21.6 46.2 32.2C45.4 41.2 39.8 48.2 32 52.4C24.2 48.2 18.6 41.2 17.8 32.2C17.2 26.4 18.6 21.2 22.2 16.8L16.8 24.6L25.2 20.4L21.2 14.2C24.4 10.2 28.2 7.8 32 7.2Z"
        />
        <path
          d="M32 14.5V48.2"
          stroke={inverted ? "#f3eee3" : "#0a1410"}
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.22"
        />
        <path
          fill="#d4ae5a"
          d="M27.6 51.4L32 50.8L36.4 51.4C37.4 53.2 36.6 56.6 32 61.4C27.4 56.6 26.6 53.2 27.6 51.4Z"
        />
        <circle cx="32" cy="53.15" r="1.15" fill={inverted ? "#f3eee3" : "#0a1410"} />
        <path
          d="M32 54.3V60.1"
          stroke={inverted ? "#f3eee3" : "#0a1410"}
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </g>
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
