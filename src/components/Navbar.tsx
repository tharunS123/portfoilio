"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          current = s.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-350 ${
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 font-extrabold text-lg tracking-tight text-text-primary no-underline hover:text-text-primary"
        >
          <Image
            src="/primiary-logo.png"
            alt="T Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span>
            THARUN<span className="text-cyan">.</span>
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none text-text-primary text-2xl cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Links */}
        <ul
          className={`list-none flex items-center gap-2 ${
            open
              ? "flex flex-col absolute top-[72px] left-0 right-0 bg-bg-primary/97 backdrop-blur-xl p-5 border-b border-border gap-1"
              : "hidden md:flex"
          }`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-transparent border-none cursor-pointer ${
                  active === href.slice(1)
                    ? "text-cyan"
                    : "text-text-secondary hover:text-cyan hover:bg-cyan/10"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-br from-cyan to-cyan-dim text-bg-primary cursor-pointer border-none transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,240,181,0.3)] hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
