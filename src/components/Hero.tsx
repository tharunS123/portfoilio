"use client";

import { resumeData } from "@/data/resume";
import TypedRole from "./TypedRole";
import { Glow, TopoRings } from "./Texture";
import { ArrowDown, ArrowRight, Cap, Code, Cpu, GitHub, Mail, MapPin } from "./icons";

const credentials = [
  { icon: Cap, title: "Purdue CS '28", sub: "College of Science" },
  { icon: Code, title: "Full-Stack Dev", sub: "Development" },
  { icon: Cpu, title: "AI/ML Researcher", sub: "The Data Mine" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink pt-[72px] md:pt-22"
    >
      <TopoRings className="opacity-60" />
      <Glow className="-top-45 -right-35 h-155 w-180" />

      <div className="shell relative z-2 py-14 md:py-19">
        {/* Status row */}
        <div className="mb-9 flex flex-wrap items-center gap-x-6.5 gap-y-3 md:mb-11">
          <span className="flex items-center gap-2.5 rounded-[2px] border border-aqua/32 px-3.5 py-2">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-aqua" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-aqua">
              Open to opportunities
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-muted">
            <MapPin />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
              {resumeData.location}
            </span>
          </span>
          <span className="hidden h-px flex-grow bg-gradient-to-r from-aqua/28 to-transparent lg:block" />
        </div>

        {/* Name */}
        <div className="mb-7">
          <span className="mb-1.5 block font-serif text-xl italic text-muted sm:text-2xl md:text-[26px]">
            Hi, I&apos;m
          </span>
          <h1 className="font-display text-[clamp(3.25rem,9vw,8rem)] font-black uppercase leading-[0.86] tracking-[-0.035em] text-paper">
            Tharun Kumar
          </h1>
          <h1 className="font-serif text-[clamp(2.1rem,6.2vw,8rem)] font-normal uppercase leading-[0.92] tracking-[-0.015em] text-aqua">
            Senthilkumar
          </h1>
        </div>

        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end lg:gap-20">
          {/* Role, blurb, CTAs */}
          <div className="max-w-[640px]">
            <div className="mb-4.5">
              <TypedRole />
            </div>
            <p className="mb-8.5 text-base leading-[1.62] text-pale/72 text-pretty sm:text-[17.5px]">
              Full-Stack Developer &amp; Data Science Researcher at Purdue
              University. I build intelligent applications that bridge the gap
              between data and user experience.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <button
                onClick={() => scrollTo("#projects")}
                className="btn btn-md justify-center bg-aqua text-ink hover:bg-paper"
              >
                View Projects
                <ArrowRight />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn btn-md justify-center border border-aqua/34 text-pale hover:border-aqua hover:text-aqua"
              >
                <Mail size={14} />
                Get in Touch
              </button>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md justify-center border border-aqua/34 text-pale no-underline hover:border-aqua hover:text-aqua"
              >
                <GitHub />
                GitHub
              </a>
            </div>
          </div>

          {/* Credential panel */}
          <div className="grid w-full grid-cols-1 gap-px border border-aqua/14 bg-aqua/14 sm:grid-cols-3 lg:w-auto lg:min-w-75 lg:grid-cols-1">
            {credentials.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3.5 bg-deep px-5 py-4">
                <Icon className="shrink-0 text-aqua" />
                <div>
                  <div className="font-display text-[15px] font-extrabold text-paper">
                    {title}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="shell relative z-3 hidden items-center gap-4.5 pb-10.5 lg:flex">
        <button
          onClick={() => scrollTo("#experience")}
          className="flex cursor-pointer items-center gap-2.5 text-muted transition-colors hover:text-aqua"
        >
          <ArrowDown />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Experience
          </span>
        </button>
        <span className="h-px flex-grow bg-gradient-to-r from-aqua/24 to-aqua/4" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Purdue University
        </span>
      </div>
    </section>
  );
}
