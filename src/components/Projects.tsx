"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";
import { resumeData } from "@/data/resume";

const tagColors: Array<"cyan" | "purple" | "pink"> = ["cyan", "purple", "pink"];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">
            Things I&apos;ve Built
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mb-12">
            A selection of projects that showcase my passion for building
            meaningful software.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <div className="group bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(0,240,181,0.08)] flex flex-col h-full relative overflow-hidden">
                {/* Top gradient bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan to-purple-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5 ${
                    project.color === "cyan"
                      ? "bg-cyan/10 border border-cyan/15"
                      : project.color === "purple"
                      ? "bg-purple-bright/10 border border-purple-bright/15"
                      : "bg-pink-500/10 border border-pink-500/15"
                  }`}
                >
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <div className="text-xs text-text-muted font-mono mb-3">
                  {project.association}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-end">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, j) => (
                      <Tag key={tech} color={tagColors[j % 3]}>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-cyan border-b border-dashed border-cyan/30 hover:border-cyan transition-all duration-200 no-underline shrink-0 ml-3"
                    >
                      GitHub
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
