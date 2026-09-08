/**
 * Scroll helpers that honour `prefers-reduced-motion`.
 *
 * The CSS `scroll-behavior: auto` override in globals.css does not apply to
 * scrolls requested from JS with an explicit `behavior: "smooth"` — that wins
 * over the stylesheet. So the preference has to be read here too, or a user
 * who asked for reduced motion still gets a long animated scroll.
 */

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scroll behavior matching the user's motion preference. */
export function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

/** Scroll a section into view by selector. */
export function scrollToSection(selector: string) {
  document.querySelector(selector)?.scrollIntoView({
    behavior: scrollBehavior(),
    block: "start",
  });
}

/** Scroll back to the top of the page. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}
