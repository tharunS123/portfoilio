"use client";

import Education from "./Education";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { TopoWaves } from "./Texture";

const stats = [
  { value: "Purdue", label: "University" },
  { value: "AI/ML", label: "Research Focus" },
  { value: "Full-Stack", label: "Development" },
  { value: "Hackathon", label: "Competitor" },
];

export default function About() {
  return (
    <section id="about" className="band relative overflow-hidden bg-deep">
      <TopoWaves className="opacity-70" />

      <div className="shell relative">
        <SectionHeader
          label="About Me"
          title={
            <>
              Building the{" "}
              <span className="h2-accent text-aqua">Future</span>,
              <br />
              One Line at a Time
            </>
          }
          className="mb-12 md:mb-14"
        />

        <div className="grid gap-14 lg:grid-cols-[1.08fr_1fr] lg:gap-18">
          {/* Narrative */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-[1.72] text-pale/68 text-pretty md:text-[16.5px]">
                I&apos;m a{" "}
                <strong className="font-semibold text-paper">
                  Computer Science student at Purdue University
                </strong>{" "}
                with a passion for building impactful software that solves
                real-world problems. Currently working at the intersection of{" "}
                <strong className="font-semibold text-paper">
                  full-stack development
                </strong>{" "}
                and <strong className="font-semibold text-paper">data science</strong>.
              </p>
              <p className="text-base leading-[1.72] text-pale/68 text-pretty md:text-[16.5px]">
                From developing AI-powered chatbots with{" "}
                <strong className="font-semibold text-paper">
                  LangGraph and OpenAI
                </strong>{" "}
                for Corteva Agriscience to analyzing social impact data for
                Dream Center Indianapolis, I thrive on challenges that blend
                technical depth with meaningful outcomes.
              </p>
              <p className="text-base leading-[1.72] text-pale/68 text-pretty md:text-[16.5px]">
                When I&apos;m not coding, you&apos;ll find me leading robotics
                teams, competing in hackathons, or exploring the latest in AI
                and web technologies.
              </p>

              <div className="mt-3.5 grid grid-cols-2 gap-px border border-aqua/16 bg-aqua/16 sm:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="bg-ink px-4 py-5">
                    <div className="font-display text-lg font-black tracking-[-0.02em] text-aqua md:text-[21px]">
                      {item.value}
                    </div>
                    <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={200}>
            <Education />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
