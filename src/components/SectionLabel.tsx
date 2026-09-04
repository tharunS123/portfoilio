"use client";

export default function SectionLabel({
  children,
  tone = "dark",
}: {
  children: string;
  /** "dark" = on ink/deep grounds, "light" = on the paper bands. */
  tone?: "dark" | "light";
}) {
  return (
    <span className="mb-5 flex items-center gap-3">
      <span
        className={`h-px w-6.5 ${tone === "dark" ? "bg-aqua" : "bg-aqua-deep"}`}
      />
      <span
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${
          tone === "dark" ? "text-aqua" : "text-aqua-deep"
        }`}
      >
        {children}
      </span>
    </span>
  );
}
