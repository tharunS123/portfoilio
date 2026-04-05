"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";
import { resumeData } from "@/data/resume";

const tagColors: Array<"cyan" | "purple" | "pink"> = ["cyan", "purple", "pink"];

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            Beyond the Code
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mb-12">
            Leadership roles and community involvement that shape who I am.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.leadership.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden h-full">
                {/* Bottom gradient on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-purple-bright to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="text-xs font-semibold text-purple-bright uppercase tracking-wider mb-1">
                  {item.role}
                </div>
                <h3 className="text-lg font-bold mb-1">{item.organization}</h3>
                <div className="font-mono text-xs text-cyan mb-3">
                  Project: {item.project}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, j) => (
                    <Tag key={tech} color={tagColors[j % 3]}>
                      {tech}
                    </Tag>
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
