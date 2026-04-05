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

  useEffect(() => {
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
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="block font-mono text-base text-text-secondary min-h-[1.5em] mt-2">
      {">"} {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
