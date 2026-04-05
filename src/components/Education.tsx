"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/data/resume";

export default function Education() {
  const edu = resumeData.education[0];

  return (
    <section id="education">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-8">
            Academic Foundation
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-card border border-border rounded-2xl p-9 flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:border-border-hover hover:shadow-glow relative overflow-hidden">
            {/* Left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan to-purple-bright rounded-full" />

            <div className="text-5xl">🚂</div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
              <div className="text-cyan font-semibold">{edu.degree}</div>
              <div className="text-purple-bright font-medium text-sm">
                {edu.major}
              </div>
              <div className="text-text-muted font-mono text-xs mt-1">
                📍 {edu.location} &nbsp;·&nbsp; 🎓 Expected{" "}
                {edu.expectedGraduation}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
