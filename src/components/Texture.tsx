/**
 * Topographic contour texture, drawn inline so it inherits the band's
 * color and costs no request. Purely decorative — hidden from a11y tree.
 */

type TextureProps = {
  /** "aqua" on dark grounds, "ink" on the paper bands. */
  tone?: "aqua" | "ink";
  className?: string;
};

const stroke = { aqua: "#86b9b0", ink: "#3f6263" } as const;
const opacity = { aqua: 0.1, ink: 0.13 } as const;

/** Concentric rings — used behind section headers. */
export function TopoRings({ tone = "aqua", className = "" }: TextureProps) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden
      focusable={false}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <g
        fill="none"
        stroke={stroke[tone]}
        strokeOpacity={opacity[tone]}
        strokeWidth="1"
      >
        <ellipse cx="1210" cy="300" rx="330" ry="250" />
        <ellipse cx="1210" cy="300" rx="260" ry="192" />
        <ellipse cx="1210" cy="300" rx="190" ry="136" />
        <ellipse cx="1210" cy="300" rx="120" ry="82" />
      </g>
    </svg>
  );
}

/** Flowing contour lines — used along band edges. */
export function TopoWaves({ tone = "aqua", className = "" }: TextureProps) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden
      focusable={false}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <g
        fill="none"
        stroke={stroke[tone]}
        strokeOpacity={opacity[tone]}
        strokeWidth="1"
      >
        <path d="M-120 620 C 180 480, 340 800, 640 640 S 1120 440, 1560 580" />
        <path d="M-120 680 C 200 540, 360 860, 660 700 S 1140 500, 1560 640" />
        <path d="M-120 740 C 220 600, 380 920, 680 760 S 1160 560, 1560 700" />
        <path d="M-120 800 C 240 660, 400 980, 700 820 S 1180 620, 1560 760" />
      </g>
    </svg>
  );
}

/** Soft accent glow. */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(134,185,176,0.13), transparent 68%)",
      }}
    />
  );
}
