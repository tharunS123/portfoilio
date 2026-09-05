"use client";

import { resumeData } from "@/data/resume";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { Glow } from "./Texture";
import { GitHub, Mail } from "./icons";

export default function Contact() {
  return (
    <>
      <section id="contact" className="band relative overflow-hidden bg-ink">
        {/* Concentric rings, centred on the closing statement */}
        <svg
          viewBox="0 0 1440 760"
          preserveAspectRatio="none"
          aria-hidden
          focusable={false}
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g fill="none" stroke="#86b9b0" strokeOpacity="0.1" strokeWidth="1">
            <ellipse cx="720" cy="330" rx="620" ry="330" />
            <ellipse cx="720" cy="330" rx="500" ry="262" />
            <ellipse cx="720" cy="330" rx="380" ry="194" />
            <ellipse cx="720" cy="330" rx="260" ry="126" />
          </g>
        </svg>
        <Glow className="top-10 left-1/2 h-130 w-225 -translate-x-1/2" />

        <div className="shell relative">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <SectionLabel>Contact</SectionLabel>

              <h2 className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-black uppercase leading-[0.92] tracking-[-0.035em] text-paper">
                Let&apos;s Build
              </h2>
              <p className="-mt-0.5 font-hand text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1.16] text-aqua">
                Something Amazing
              </p>

              <p className="mt-7 mb-10 max-w-155 text-base leading-[1.64] text-pale/68 text-pretty sm:text-[17.5px]">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or collaborations. Feel free to reach out!
              </p>

              <div className="mb-9 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="btn btn-md justify-center border border-aqua/26 bg-deep/60 font-sans text-sm font-medium normal-case tracking-normal text-pale no-underline hover:border-aqua hover:text-aqua"
                >
                  <Mail size={17} className="text-aqua" />
                  {resumeData.email}
                </a>
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md justify-center border border-aqua/26 bg-deep/60 font-sans text-sm font-medium normal-case tracking-normal text-pale no-underline hover:border-aqua hover:text-aqua"
                >
                  <GitHub size={17} className="text-aqua" />
                  github.com/tharunS123
                </a>
              </div>

              <a
                href={`mailto:${resumeData.email}`}
                className="btn btn-lg bg-aqua font-black text-ink no-underline hover:bg-paper"
              >
                <Mail />
                Say Hello
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-aqua/14 bg-deep py-10">
        <div className="shell flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex size-7.5 items-center justify-center border-[1.5px] border-aqua/50">
              <span className="font-display text-[15px] font-black tracking-tight text-aqua">
                T
              </span>
            </span>
            <span className="font-display text-[15px] font-extrabold tracking-[0.02em] text-pale/70">
              THARUN<span className="text-aqua">.</span>
            </span>
          </div>

          <p className="text-[12.5px] text-muted">
            © 2025 Tharun Kumar Senthilkumar. Built with passion &amp; clean
            code.
          </p>

          <div className="flex items-center gap-2.25">
            <span className="size-1.5 rounded-full bg-aqua" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-aqua">
              Open to opportunities
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
