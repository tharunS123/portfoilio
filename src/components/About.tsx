"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-4">
            Building the Future,
            <br />
            One Line at a Time
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
          <Reveal delay={100}>
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                I&apos;m a{" "}
                <strong className="text-text-primary">
                  Computer Science student at Purdue University
                </strong>{" "}
                with a passion for building impactful software that solves
                real-world problems. Currently working at the intersection of{" "}
                <strong className="text-text-primary">
                  full-stack development
                </strong>{" "}
                and{" "}
                <strong className="text-text-primary">data science</strong>.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                From developing AI-powered chatbots with{" "}
                <strong className="text-text-primary">
                  LangGraph and OpenAI
                </strong>{" "}
                for Corteva Agriscience to analyzing social impact data for
                Dream Center Indianapolis, I thrive on challenges that blend
                technical depth with meaningful outcomes.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me leading robotics
                teams, competing in hackathons, or exploring the latest in AI
                and web technologies.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏫", value: "Purdue", label: "University" },
                { icon: "🧠", value: "AI/ML", label: "Research Focus" },
                { icon: "🔧", value: "Full-Stack", label: "Development" },
                { icon: "🏆", value: "Hackathon", label: "Competitor" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-lg p-5 transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xl font-extrabold text-cyan">
                    {item.value}
                  </div>
                  <div className="text-xs text-text-muted font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
