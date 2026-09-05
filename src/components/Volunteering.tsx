"use client";

import { resumeData } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      className="relative bg-paper pt-16 pb-18 text-ink md:pt-20 md:pb-28"
    >
      <div className="shell relative">
        <SectionHeader
          label="Giving Back"
          title="Community"
          accent="Impact"
          tone="light"
          className="mb-9"
        />

        <div className="grid gap-7 md:grid-cols-2">
          {resumeData.volunteerism.map((vol, i) => (
            <Reveal key={vol.organization} delay={i * 100}>
              <article className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-6.5 border-t-[1.5px] border-ink/24 pt-6 md:grid-cols-[96px_minmax(0,1fr)]">
                <div>
                  <div className="font-display text-4xl font-black leading-[0.9] tracking-[-0.03em] text-aqua-deep md:text-[42px]">
                    {vol.hours}
                    <span className="text-[22px]">+</span>
                  </div>
                  <div className="mt-1.75 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-ink">
                    Hours volunteered
                  </div>
                </div>
                <div>
                  <h4 className="mb-2.5 font-display text-[19px] font-extrabold leading-[1.24] tracking-[-0.012em] text-ink">
                    {vol.organization}
                  </h4>
                  <p className="text-[15px] leading-[1.64] text-ink/64 text-pretty">
                    {vol.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
