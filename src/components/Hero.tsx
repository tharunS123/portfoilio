"use client";

import Image from "next/image";
import TypedRole from "./TypedRole";
import { resumeData } from "@/data/resume";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden z-[1]" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abstract-hero-background.png"
          alt="Abstract background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-bg-primary/60 to-bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 pt-[120px] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="animate-fade-in-up lg:order-1 order-2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan/10 border border-cyan/15 rounded-full font-mono text-xs text-cyan tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] tracking-tight mb-6">
            Hi, I&apos;m
            <br />
            <span className="bg-gradient-to-br from-cyan via-purple-bright to-pink-500 bg-clip-text text-transparent">
              Tharun Kumar
            </span>
            <br />
            Senthilkumar
          </h1>

          <TypedRole />

          <p className="text-lg text-text-secondary max-w-[520px] mx-auto lg:mx-0 mb-8 leading-relaxed">
            Full-Stack Developer &amp; Data Science Researcher at Purdue
            University. I build intelligent applications that bridge the gap
            between data and user experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold bg-gradient-to-br from-cyan to-cyan-dim text-bg-primary border-none cursor-pointer shadow-[0_4px_20px_rgba(0,240,181,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,240,181,0.35)]"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
              View Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold bg-transparent text-text-primary border border-border-hover cursor-pointer transition-all duration-300 hover:bg-cyan/10 hover:border-cyan hover:text-cyan hover:-translate-y-0.5"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Get in Touch
            </button>
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold bg-transparent text-text-primary border border-border-hover cursor-pointer transition-all duration-300 hover:bg-cyan/10 hover:border-cyan hover:text-cyan hover:-translate-y-0.5 no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center lg:order-2 order-1 animate-fade-in-up-delay">
          <div className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]">
            {/* Spinning ring */}
            <div className="absolute -inset-1 rounded-full bg-conic-gradient opacity-60 animate-spin-slow" />
            <div className="absolute -inset-1 rounded-full bg-conic-gradient opacity-30 blur-[30px] animate-spin-slow" />

            <Image
              src="/developer-avatar.png"
              alt="Tharun Kumar"
              fill
              className="rounded-full object-cover relative z-[1] border-4 border-bg-primary"
              priority
            />

            {/* Floating stats */}
            <div className="hero-stat top-[10%] -right-5 animate-float hidden sm:flex">
              <span>🎓</span>
              <span className="text-cyan font-semibold">Purdue CS &apos;28</span>
            </div>
            <div className="hero-stat bottom-[15%] -left-[30px] animate-float-delay-1 hidden sm:flex">
              <span>💻</span>
              <span className="text-cyan font-semibold">Full-Stack Dev</span>
            </div>
            <div className="hero-stat bottom-[5%] -right-[10px] animate-float-delay-2 hidden sm:flex">
              <span>🤖</span>
              <span className="text-cyan font-semibold">AI/ML Researcher</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
