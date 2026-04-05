"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/data/resume";

const categories = [
  { key: "languages" as const, icon: "⌨️", title: "Languages" },
  { key: "frameworks" as const, icon: "🖥️", title: "Frameworks" },
  { key: "cloud" as const, icon: "☁️", title: "Cloud & Tools" },
  { key: "domains" as const, icon: "🎯", title: "Domains" },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            My Tech Stack
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mb-12">
            Technologies and tools I use to bring ideas to life.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 100}>
              <div className="bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:border-border-hover hover:shadow-glow hover:-translate-y-0.5 h-full">
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 flex items-center gap-2">
                  <span className="text-base">{cat.icon}</span>
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {resumeData.skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium bg-cyan/[0.04] border border-border text-text-primary transition-all duration-200 hover:border-cyan hover:bg-cyan/10 hover:text-cyan hover:-translate-y-px cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
