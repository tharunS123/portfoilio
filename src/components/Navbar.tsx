"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "./icons";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

// Order mirrors the section order: proof of work first.
const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-1000 transition-colors duration-300 ${
        scrolled ? "material scroll-edge" : ""
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between md:h-22">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="pressable flex min-h-11 items-center gap-3 no-underline"
        >
          <span className="flex size-[34px] items-center justify-center border-[1.5px] border-aqua">
            <span className="font-display text-[17px] font-black tracking-tight text-aqua">
              T
            </span>
          </span>
          <span className="font-display text-[17px] font-extrabold tracking-[0.02em] text-paper">
            THARUN<span className="text-aqua">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9.5 md:flex">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`pressable cursor-pointer font-mono text-[11.5px] uppercase tracking-[0.14em] hover:text-aqua ${
                active === href.slice(1) ? "text-aqua" : "text-pale/58"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn btn-sm bg-aqua text-ink hover:bg-paper"
          >
            Let&apos;s Talk
            <ArrowUpRight />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="pressable flex size-11.5 cursor-pointer items-center justify-center border border-aqua/25 text-pale md:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Mobile sheet. Kept mounted and collapsed rather than conditionally
          rendered, so it enters and exits along the same path instead of
          appearing instantly. The surface materializes — blur and scale move
          together with opacity — so it reads as glass arriving, not a fade. */}
      <div
        inert={!open || undefined}
        className={`material absolute inset-x-0 top-full origin-top overflow-hidden transition-[opacity,transform,filter] duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto scale-y-100 opacity-100 blur-none"
            : "pointer-events-none -translate-y-1 scale-y-95 opacity-0 blur-sm"
        }`}
      >
        <div className="shell flex flex-col py-2">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              tabIndex={open ? 0 : -1}
              className={`pressable flex h-13 cursor-pointer items-center border-b border-aqua/8 text-left font-mono text-xs uppercase tracking-[0.16em] ${
                active === href.slice(1) ? "text-aqua" : "text-pale/70"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            tabIndex={open ? 0 : -1}
            className="btn btn-md mt-4 mb-3 justify-center bg-aqua text-ink"
          >
            Let&apos;s Talk
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </nav>
  );
}
