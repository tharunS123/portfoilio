/**
 * Stroke-based icon set (16/20/24px grid, 1.7–1.8 stroke).
 *
 * Replaces the emoji the previous design used inline. Emoji render
 * differently on every OS and can't inherit color; these scale and
 * recolor with `currentColor`.
 */

type IconProps = {
  size?: number;
  className?: string;
};

function svgProps(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.8,
    "aria-hidden": true,
    focusable: false as const,
    className,
  };
}

export function ArrowRight({ size = 14, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={2.4} strokeLinecap="square">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 13, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={2.4} strokeLinecap="square">
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  );
}

export function ArrowDown({ size = 14, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.9} strokeLinecap="square">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function Mail({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M3 6.5l9 6.2 9-6.2" />
    </svg>
  );
}

export function MapPin({ size = 13, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

/** Graduation cap — education, degree, university. */
export function Cap({ size = 19, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.7}>
      <path d="M12 4L1.5 9.2 12 14.4 22.5 9.2 12 4z" />
      <path d="M5.5 11.4v4.9c0 1.6 2.9 2.9 6.5 2.9s6.5-1.3 6.5-2.9v-4.9" />
    </svg>
  );
}

/** Angle brackets — code, languages, engineering. */
export function Code({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.8} strokeLinecap="square">
      <path d="M8.5 8.5L4.5 12l4 3.5M15.5 8.5l4 3.5-4 3.5" />
    </svg>
  );
}

/** Machine head — AI / ML. */
export function Cpu({ size = 19, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.7}>
      <rect x="4.5" y="7.5" width="15" height="12" rx="2.5" />
      <path d="M12 7.5V4M9 12.5v1.5M15 12.5v1.5M2 12h2.5M19.5 12H22" />
    </svg>
  );
}

export function Monitor({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="2.5" y="4.5" width="19" height="14" rx="1.5" />
      <path d="M8.5 21.5h7M12 18.5v3" />
    </svg>
  );
}

export function Cloud({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M6.5 18.5h11a4 4 0 0 0 .6-7.95 6 6 0 0 0-11.55-1.7A3.9 3.9 0 0 0 6.5 18.5z" />
    </svg>
  );
}

export function Target({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

/** Bolt — hackathon, shipping fast. */
export function Bolt({ size = 24, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.6}>
      <path d="M13 2.5L4 13.5h6l-1 8 9-11h-6l1-8z" />
    </svg>
  );
}

/** Robot — FIRST Robotics. */
export function Robot({ size = 24, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.6}>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 8V4.5M9.5 13v1.5M14.5 13v1.5M2 13h2M20 13h2" />
      <circle cx="12" cy="3.5" r="1.4" />
    </svg>
  );
}

export function Menu({ size = 18, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.9} strokeLinecap="square">
      <path d="M3 8h18M3 16h18" />
    </svg>
  );
}

export function Close({ size = 18, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)} strokeWidth={1.9} strokeLinecap="square">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

/** GitHub mark — solid, so it takes fill rather than stroke. */
export function GitHub({ size = 15, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable={false}
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
