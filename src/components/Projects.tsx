"use client";

import { resumeData } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Tag from "./Tag";
import { TopoRings } from "./Texture";
import { ArrowUpRight, GitHub } from "./icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="band relative overflow-hidden bg-paper text-ink"
    >
      <TopoRings tone="ink" className="opacity-60" />

      <div className="shell relative">
        <SectionHeader
          label="Projects"
          title="Things I've"
          accent="Built"
          blurb="A selection of projects that showcase my passion for building meaningful software."
          tone="light"
          className="mb-12 md:mb-17.5"
        />

        {resumeData.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article
              className={`grid items-start gap-x-10 gap-y-5 border-t border-ink/16 py-9 lg:grid-cols-[96px_minmax(0,1fr)_320px] ${
                i === resumeData.projects.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-serif text-4xl leading-[0.9] text-ink/50 md:text-[54px]">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="mb-1.5 font-display text-3xl font-black uppercase leading-none tracking-[-0.028em] text-ink md:text-[40px]">
                  {project.name}
                </h3>
                <div className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-aqua-deep">
                  {project.association}
                </div>
                <p className="mb-5 max-w-160 text-[15.5px] leading-[1.66] text-ink/66 text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.75">
                  {project.techStack.map((tech) => (
                    <Tag key={tech} tone="light">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="lg:flex lg:justify-end lg:pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm border border-ink/22 text-ink no-underline hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <GitHub />
                    GitHub
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
