"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-gradient-to-b from-bg-primary to-bg-secondary"
      >
        <div className="max-w-[1200px] mx-auto px-8 py-24">
          <Reveal>
            <div className="text-center max-w-[600px] mx-auto">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-4">
                Let&apos;s Build
                <br />
                <span className="text-cyan">Something Amazing</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10">
                I&apos;m always open to discussing new opportunities, interesting
                projects, or collaborations. Feel free to reach out!
              </p>

              {/* Contact cards */}
              <div className="flex justify-center gap-4 flex-wrap mb-10">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-3.5 transition-all duration-300 hover:border-cyan hover:bg-cyan/10 hover:-translate-y-0.5 hover:shadow-glow text-text-primary hover:text-cyan no-underline"
                >
                  <span className="text-lg">📧</span>
                  <span className="text-sm font-medium">
                    {resumeData.email}
                  </span>
                </a>
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-3.5 transition-all duration-300 hover:border-cyan hover:bg-cyan/10 hover:-translate-y-0.5 hover:shadow-glow text-text-primary hover:text-cyan no-underline"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium">
                    github.com/tharunS123
                  </span>
                </a>
              </div>

              {/* CTA */}
              <a
                href={`mailto:${resumeData.email}`}
                className="inline-flex items-center gap-2 px-9 py-3.5 rounded-lg text-base font-semibold bg-gradient-to-br from-cyan to-cyan-dim text-bg-primary no-underline shadow-[0_4px_20px_rgba(0,240,181,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,240,181,0.35)]"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Say Hello
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-border relative z-[1]">
        <Image
          src="/typography-wordmark.png"
          alt="THARUN"
          width={120}
          height={28}
          className="mx-auto mb-3 opacity-50"
        />
        <p className="text-xs text-text-muted">
          © 2025 Tharun Kumar Senthilkumar. Built with passion &amp; clean code.
        </p>
      </footer>
    </>
  );
}
