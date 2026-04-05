"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/data/resume";

export default function Volunteering() {
  return (
    <section id="volunteering">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>Giving Back</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-8">
            Community Impact
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resumeData.volunteerism.map((vol, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-border-hover hover:-translate-y-0.5 hover:shadow-glow flex gap-4 items-start">
                <div className="text-3xl shrink-0">{vol.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{vol.organization}</h4>
                  <div className="font-mono text-xs text-cyan mb-2">
                    {vol.hours}+ hours volunteered
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {vol.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
