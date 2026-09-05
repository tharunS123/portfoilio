"use client";

import { resumeData } from "@/data/resume";
import { Cap, MapPin } from "./icons";
import SectionLabel from "./SectionLabel";

/**
 * Education card. Rendered as the right-hand column of the About band
 * rather than as its own section, so the two read as one unit.
 */
export default function Education() {
  const edu = resumeData.education[0];

  return (
    <div id="education" className="scroll-mt-28">
      <SectionLabel>Education</SectionLabel>
      <h3 className="mb-6.5 font-display text-[28px] font-black uppercase leading-none tracking-[-0.026em] text-paper md:text-[34px]">
        Academic Foundation
      </h3>

      <div className="border border-aqua/22 bg-ink/55 p-7 md:p-8">
        <Cap size={34} className="mb-5.5 text-aqua" />
        <h4 className="mb-3.5 font-display text-[22px] font-extrabold leading-[1.18] tracking-[-0.018em] text-paper md:text-2xl">
          {edu.institution}
        </h4>

        <div className="flex flex-col gap-1.75 border-t border-aqua/16 pt-4.5">
          <div className="text-base font-semibold text-aqua">{edu.degree}</div>
          <div className="text-[15px] font-medium text-pale">{edu.major}</div>
          <div className="mt-2.25 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em]">
                {edu.location}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Cap size={12} />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em]">
                Expected {edu.expectedGraduation}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
