"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

/**
 * Eyebrow + display heading + optional standfirst.
 * `accent` is the trailing word set in the serif face.
 */
export default function SectionHeader({
  label,
  title,
  accent,
  blurb,
  tone = "dark",
  className = "",
}: {
  label: string;
  title: React.ReactNode;
  accent?: string;
  blurb?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2 className={`h2-display ${tone === "dark" ? "text-paper" : "text-ink"}`}>
        {title}
        {accent && (
          <>
            {" "}
            <span
              className={`h2-accent ${
                tone === "dark" ? "text-aqua" : "text-aqua-deep"
              }`}
            >
              {accent}
            </span>
          </>
        )}
      </h2>
      {blurb && (
        <p
          className={`mt-5.5 max-w-[560px] text-[17px] leading-relaxed text-pretty ${
            tone === "dark" ? "text-pale/62" : "text-ink/62"
          }`}
        >
          {blurb}
        </p>
      )}
    </Reveal>
  );
}
