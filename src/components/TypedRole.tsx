"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Data Science Researcher",
  "AI Enthusiast",
  "Purdue CS Student",
];

export default function TypedRole() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // The typing loop is perpetual motion that a CSS media query can't stop,
  // so the preference is read here and the effect simply doesn't run.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const current = roles[roleIndex];
    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex > current.length) {
      speed = 2000;
      const t = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex < 0) {
      speed = 300;
      const t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText(current.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, roleIndex, reducedMotion]);

  // Reduced motion still gets the information, just without the churn:
  // every role, listed once, statically.
  if (reducedMotion) {
    return (
      <span className="block min-h-[1.5em] font-mono text-sm text-aqua sm:text-[15px]">
        {"> "}
        {roles.join(" · ")}
      </span>
    );
  }

  return (
    <span className="block min-h-[1.5em] font-mono text-sm text-aqua sm:text-[15px]">
      {">"} {text}
      <span className="animate-caret">|</span>
    </span>
  );
}
