"use client";

export default function Tag({
  children,
  tone = "dark",
}: {
  children: string;
  /** "dark" = on ink/deep grounds, "light" = on the paper bands. */
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-[2px] border px-2.5 py-[5px] font-mono text-[10.5px] tracking-[0.06em] ${
        tone === "dark"
          ? "border-aqua/30 text-aqua"
          : "border-aqua-deep/30 text-aqua-deep"
      }`}
    >
      {children}
    </span>
  );
}
