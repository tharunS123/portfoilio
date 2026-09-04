"use client";

import { resumeData } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Glow } from "./Texture";
import { Cloud, Code, Monitor, Target } from "./icons";

const categories = [
  { key: "languages" as const, icon: Code, title: "Languages" },
  { key: "frameworks" as const, icon: Monitor, title: "Frameworks" },
  { key: "cloud" as const, icon: Cloud, title: "Cloud & Tools" },
  { key: "domains" as const, icon: Target, title: "Domains" },
];

export default function Skills() {
  return (
    <section id="skills" className="band relative overflow-hidden bg-ink">
      <Glow className="-top-20 -left-30 h-140 w-155" />

      <div className="shell relative">
        <SectionHeader
          label="Skills"
          title="My Tech"
          accent="Stack"
          blurb="Technologies and tools I use to bring ideas to life."
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-8.5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 90}>
              <div className="border-t-[1.5px] border-aqua/34 pt-5.5">
                <div className="mb-5 flex items-center gap-2.5 text-aqua">
                  <cat.icon />
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em]">
                    {cat.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-[2px] border border-aqua/20 bg-aqua/5 px-3.5 py-2.25 text-sm font-medium text-pale transition-colors duration-200 hover:border-aqua/50 hover:bg-aqua/10"
                    >
                      <span className="size-[5px] shrink-0 rounded-full bg-aqua" />
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
