"use client";

import { resumeData } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Tag from "./Tag";
import { Glow } from "./Texture";

export default function Experience() {
  const { organization, location, roles } = resumeData.experience[0];

  return (
    <section id="experience" className="band relative overflow-hidden bg-ink">
      <Glow className="top-15 -right-30 h-140 w-140" />

      <div className="shell relative">
        <SectionHeader
          label="Experience"
          title="Where I've Made"
          accent="Impact"
          blurb="Real-world projects that pushed the boundaries of what I thought possible."
          className="mb-14 md:mb-19"
        />

        {roles.map((role, i) => (
          <Reveal key={role.title} delay={i * 120}>
            <article
              className={`grid gap-8 border-t border-aqua/16 py-9 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14 ${
                i === roles.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Meta */}
              <div>
                <div className="font-display text-[13px] font-extrabold uppercase leading-snug tracking-[0.06em] text-paper">
                  {role.client}
                </div>
                <div className="mt-2.5 font-mono text-[10.5px] uppercase leading-[1.7] tracking-[0.12em] text-muted">
                  {organization}
                </div>
                <span className="mt-4 inline-block rounded-[2px] border border-aqua/26 px-3 py-[5px] font-mono text-[10px] uppercase tracking-[0.12em] text-aqua">
                  {role.startDate && role.endDate
                    ? `${role.startDate} – ${role.endDate}`
                    : "The Data Mine"}
                </span>
                <div className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {location}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-4 font-display text-2xl font-extrabold leading-[1.08] tracking-[-0.02em] text-paper md:text-[34px]">
                  {role.title}
                </h3>
                <p className="mb-5.5 max-w-200 text-[15.5px] leading-[1.68] text-pale/66 text-pretty">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-1.75">
                  {(role.techStack || []).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
