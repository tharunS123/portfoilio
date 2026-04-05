"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";
import { resumeData } from "@/data/resume";

const tagColors: Array<"cyan" | "purple" | "pink"> = ["cyan", "purple", "pink"];

export default function Experience() {
  const roles = resumeData.experience[0].roles;

  return (
    <section id="experience">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            Where I&apos;ve Made Impact
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mb-12">
            Real-world projects that pushed the boundaries of what I thought
            possible.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-purple-bright to-transparent rounded-full" />

          {roles.map((role, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="relative mb-10 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-cyan shadow-[0_0_12px_rgba(0,240,181,0.3)] z-[2]" />

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:border-border-hover hover:shadow-glow hover:translate-x-1">
                  <div className="flex justify-between items-start gap-3 flex-wrap mb-2">
                    <h3 className="text-lg font-bold">{role.title}</h3>
                    <span className="font-mono text-xs text-cyan bg-cyan/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {role.startDate && role.endDate
                        ? `${role.startDate} – ${role.endDate}`
                        : "The Data Mine"}
                    </span>
                  </div>
                  <div className="text-sm text-purple-bright font-medium mb-3">
                    {role.client} —{" "}
                    {resumeData.experience[0].organization}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(role.techStack || []).map((tech, j) => (
                      <Tag key={tech} color={tagColors[j % 3]}>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
