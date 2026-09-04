"use client";

import { resumeData } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Tag from "./Tag";
import { TopoRings } from "./Texture";
import { Bolt, Robot } from "./icons";

const icons = [Bolt, Robot];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-paper pt-16 text-ink md:pt-26"
    >
      <TopoRings tone="ink" className="opacity-70" />

      <div className="shell relative">
        <SectionHeader
          label="Leadership"
          title="Beyond the"
          accent="Code"
          blurb="Leadership roles and community involvement that shape who I am."
          tone="light"
          className="mb-11 md:mb-15"
        />

        <div className="grid gap-7 md:grid-cols-2">
          {resumeData.leadership.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.organization} delay={i * 100}>
                <article className="flex h-full flex-col border border-ink/16 bg-paper/62 p-7 transition-colors duration-300 hover:border-ink/35 md:p-8.5">
                  <div className="mb-4.5 flex items-center justify-between gap-4">
                    <span className="rounded-[2px] bg-aqua-deep px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
                      {item.role}
                    </span>
                    <Icon className="text-aqua-deep" />
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-black uppercase leading-[1.08] tracking-[-0.024em] text-ink md:text-[27px]">
                    {item.organization}
                  </h3>
                  <div className="mb-4.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-aqua-deep">
                    Project: {item.project}
                  </div>
                  <p className="mb-5.5 flex-grow text-[15.5px] leading-[1.66] text-ink/66 text-pretty">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.75">
                    {item.techStack.map((tech) => (
                      <Tag key={tech} tone="light">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
