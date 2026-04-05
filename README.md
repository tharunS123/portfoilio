<p align="center">
  <img src="public/primiary-logo.png" alt="Tharun Logo" width="160" />
</p>

<h1 align="center">Tharun Kumar Senthilkumar — Portfolio</h1>

<p align="center">
  <strong>A modern, animated, single-page developer portfolio built with Next.js 16, React 19, Tailwind CSS v4 &amp; TypeScript.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Preview](#-live-preview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Configuration](#-configuration)
  - [Editing Resume Data](#editing-resume-data)
  - [Swapping Images](#swapping-images)
  - [Customizing Colors & Theme](#customizing-colors--theme)
  - [Customizing Fonts](#customizing-fonts)
  - [Customizing Animations](#customizing-animations)
- [Architecture & Design Decisions](#-architecture--design-decisions)
  - [Component Breakdown](#component-breakdown)
  - [Data-Driven Design](#data-driven-design)
  - [Performance Optimizations](#performance-optimizations)
  - [Styling Strategy](#styling-strategy)
- [Deployment](#-deployment)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [Self-Hosted / Docker](#self-hosted--docker)
- [Customization Guide](#-customization-guide)
  - [Adding a New Section](#adding-a-new-section)
  - [Adding a New Project](#adding-a-new-project)
  - [Adding a New Experience Role](#adding-a-new-experience-role)
  - [Adding a New Skill Category](#adding-a-new-skill-category)
  - [Changing the Typed Roles](#changing-the-typed-roles)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

This is a fully responsive, statically generated developer portfolio designed to impress recruiters and showcase projects, skills, experience, and leadership. It features a dark cyberpunk-inspired aesthetic with neon cyan/purple/pink accents, floating particle effects, scroll-reveal animations, and a typing hero effect — all with **zero external runtime dependencies** beyond React and Next.js.

Every piece of content is driven from a **single TypeScript data file** (`src/data/resume.ts`), making it trivial to update without touching any component code.

---

## 🔗 Live Preview

```
http://localhost:3000
```

Run the dev server (see [Getting Started](#-getting-started)) and open the URL above.

---

## ✨ Features

### Visual & UX
| Feature | Description |
|---|---|
| 🌌 **Particle System** | Canvas-based animated particles with interconnecting lines |
| 🔮 **Floating Orbs** | Three ambient gradient orbs with physics-based floating animation |
| 🔲 **Grid Overlay** | Subtle CSS grid background with radial mask fade |
| 🖱️ **Cursor Glow** | Mouse-following radial gradient (desktop only, detected via `pointer: fine`) |
| 🌀 **Avatar Ring** | Rotating conic-gradient border around the hero avatar image |
| 📍 **Floating Stats** | Animated badges orbiting the avatar (Purdue CS '28, Full-Stack Dev, AI/ML) |
| ⌨️ **Typing Animation** | Auto-cycling role titles with typewriter + delete effect |
| 📜 **Scroll Reveal** | Intersection Observer-based fade-in-up animations on every section |
| 🧭 **Active Nav Tracking** | Sticky navbar highlights the current section on scroll |
| 📱 **Mobile Menu** | Hamburger toggle with blur backdrop on small screens |
| 🎨 **Hover Micro-interactions** | Cards lift, borders glow, gradient bars appear on hover |
| 🖱️ **Smooth Scroll** | All navigation links use native smooth scrolling |

### Technical
| Feature | Description |
|---|---|
| ⚡ **Static Generation** | Entire site pre-rendered as static HTML at build time |
| 🔤 **Optimized Fonts** | `next/font` self-hosted Inter & JetBrains Mono (zero layout shift) |
| 🖼️ **Optimized Images** | `next/image` with priority loading, responsive sizing |
| 🧩 **Dynamic Imports** | Canvas & cursor effects loaded client-side only (`ssr: false`) |
| 🎯 **SEO Ready** | Full metadata, OpenGraph tags, semantic HTML |
| ♿ **Accessible** | Proper ARIA labels, semantic elements, keyboard-navigable |
| 📐 **Responsive** | Fluid typography (`clamp()`), mobile-first grid layouts |
| 🧪 **Type-Safe** | Full TypeScript coverage across all components and data |

### Sections
1. **Hero** — Name, avatar with animated ring, typed roles, CTA buttons
2. **About** — Bio paragraphs + 2×2 highlight cards
3. **Education** — University card with accent border
4. **Experience** — Vertical timeline with glowing dots and tech tags
5. **Projects** — Card grid with hover gradient bar and GitHub links
6. **Skills** — 4-column categorized skill pills (Languages, Frameworks, Cloud, Domains)
7. **Leadership** — Hackathon & robotics leadership cards
8. **Volunteering** — Community impact cards with hours
9. **Contact** — Email + GitHub cards, CTA button
10. **Footer** — Wordmark logo + copyright

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.2 | React framework, static generation, routing, image optimization |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling with `@theme` design tokens |
| [ESLint](https://eslint.org/) | 9.x | Code linting |

**Zero additional runtime dependencies.** No animation libraries, no icon packs, no CSS-in-JS — just React, Next.js, and Tailwind.

---

## 📁 Project Structure

```
portfolio/
├── public/                          # Static assets (served at /)
│   ├── abstract-hero-background.png # Hero section background
│   ├── developer-avatar.png         # Avatar/profile image
│   ├── primiary-logo.png            # "T" hexagon logo (navbar)
│   └── typography-wordmark.png      # "THARUN" text wordmark (footer)
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── globals.css              # Tailwind v4 theme tokens + custom CSS
│   │   ├── layout.tsx               # Root layout (fonts, metadata, <html>)
│   │   ├── page.tsx                 # Home page (composes all sections)
│   │   └── favicon.ico              # Favicon
│   │
│   ├── components/                  # React components (1 per file)
│   │   ├── BackgroundEffects.tsx    # Orchestrates grid, orbs, particles, cursor
│   │   ├── ParticleCanvas.tsx       # HTML5 Canvas particle system
│   │   ├── CursorGlow.tsx           # Mouse-following gradient (desktop)
│   │   ├── Navbar.tsx               # Sticky navigation bar
│   │   ├── Hero.tsx                 # Hero section with avatar + CTAs
│   │   ├── TypedRole.tsx            # Typing animation component
│   │   ├── About.tsx                # About me section
│   │   ├── Education.tsx            # Education card
│   │   ├── Experience.tsx           # Experience timeline
│   │   ├── Projects.tsx             # Project cards grid
│   │   ├── Skills.tsx               # Skills categories grid
│   │   ├── Leadership.tsx           # Leadership & involvement
│   │   ├── Volunteering.tsx         # Volunteer work
│   │   ├── Contact.tsx              # Contact section + footer
│   │   ├── Divider.tsx              # Gradient horizontal rule
│   │   ├── Reveal.tsx               # Scroll-reveal animation wrapper
│   │   ├── SectionLabel.tsx         # Reusable "— LABEL" section header
│   │   └── Tag.tsx                  # Colored tech badge pill
│   │
│   ├── data/
│   │   └── resume.ts               # All resume/portfolio content (single source of truth)
│   │
│   └── hooks/
│       └── useReveal.ts             # Intersection Observer hook for scroll animations
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Minimum Version |
|---|---|
| [Node.js](https://nodejs.org/) | 18.18+ (tested on 22.19.0) |
| [npm](https://www.npmjs.com/) | 9+ (tested on 11.7.0) |

### Installation

```bash
# Clone the repository
git clone https://github.com/tharunS123/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at **http://localhost:3000** with Turbopack hot reload.

### Production Build

```bash
# Build static site
npm run build

# Preview the production build locally
npm run start
```

The build output is in `.next/`. The entire site is statically generated (no server required at runtime).

### Linting

```bash
npm run lint
```

Runs ESLint with the Next.js config.

---

## ⚙️ Configuration

### Editing Resume Data

**All content lives in a single file:** `src/data/resume.ts`

Open it and edit any field — name, email, education, experience, projects, skills, leadership, volunteering. Components automatically re-render with updated data.

```typescript
// src/data/resume.ts
export const resumeData = {
  name: "Your Name",
  email: "you@example.com",
  github: "https://github.com/yourhandle",
  education: [ ... ],
  experience: [ ... ],
  projects: [ ... ],
  skills: {
    languages: ["Python", "TypeScript", ...],
    frameworks: ["React", "Next.js", ...],
    cloud: ["AWS", "Docker", ...],
    domains: ["Full Stack", "AI/ML", ...],
  },
  leadership: [ ... ],
  volunteerism: [ ... ],
};
```

### Swapping Images

Replace files in `public/` with your own (keep the same filenames or update the `src` paths in components):

| File | Used In | Recommended Size |
|---|---|---|
| `primiary-logo.png` | Navbar logo | 200×200px, transparent PNG |
| `developer-avatar.png` | Hero avatar | 800×800px, square |
| `abstract-hero-background.png` | Hero background | 2800×1500px |
| `typography-wordmark.png` | Footer wordmark | 800×200px, transparent PNG |

### Customizing Colors & Theme

All design tokens are defined in `src/app/globals.css` under `@theme`:

```css
@theme {
  /* Primary accent — change this to rebrand the entire site */
  --color-cyan: #00f0b5;
  --color-cyan-dim: #00c996;

  /* Secondary accent */
  --color-purple-bright: #a78bfa;

  /* Backgrounds */
  --color-bg-primary: #0a0e17;
  --color-bg-secondary: #0f1420;
  --color-card: #111827;
  --color-card-hover: #162032;

  /* Text */
  --color-text-primary: #f0f4f8;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;

  /* Borders */
  --color-border: rgba(0, 240, 181, 0.08);
  --color-border-hover: rgba(0, 240, 181, 0.25);
}
```

Change `--color-cyan` and all `rgba(0, 240, 181, ...)` references to rebrand. The Tailwind classes reference these tokens via names like `text-cyan`, `bg-card`, `border-border-hover`, etc.

### Customizing Fonts

Fonts are loaded in `src/app/layout.tsx` via `next/font`:

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
```

To change fonts:
1. Import a different font from `next/font/google`
2. Update the CSS variable name
3. Update `--font-sans` / `--font-mono` in `globals.css` `@theme`

### Customizing Animations

Animation keyframes are in `globals.css`. Key animations:

| Animation | Used For | Duration |
|---|---|---|
| `fade-in-up` | Hero entrance | 0.8s |
| `float` | Floating stat badges | 6s infinite |
| `orb-float` | Background orbs | 20s infinite |
| `spin` (Tailwind) | Avatar ring | 8s infinite (via `animate-spin-slow`) |

Particle system parameters are in `src/components/ParticleCanvas.tsx`:

```typescript
const PARTICLE_COUNT = 50;  // Number of particles
// In Particle.reset():
this.size = Math.random() * 2 + 0.5;        // Particle size range
this.speedX = (Math.random() - 0.5) * 0.3;  // Horizontal speed
this.speedY = (Math.random() - 0.5) * 0.3;  // Vertical speed
this.opacity = Math.random() * 0.3 + 0.05;  // Opacity range
// Connection distance:
if (dist < 150) { ... }                      // Max line distance
```

---

## 🏗️ Architecture & Design Decisions

### Component Breakdown

The app follows a **section-per-component** pattern. Each section is a self-contained component that imports what it needs from the shared data and utility components:

```
page.tsx
  ├── BackgroundEffects (client, dynamic)
  │     ├── ParticleCanvas (dynamic, ssr: false)
  │     └── CursorGlow (dynamic, ssr: false)
  ├── Navbar (client)
  ├── Hero (client)
  │     └── TypedRole (client)
  ├── About (client)
  │     └── Reveal (client)
  ├── Education (client)
  ├── Experience (client)
  ├── Projects (client)
  ├── Skills (client)
  ├── Leadership (client)
  ├── Volunteering (client)
  └── Contact (client)
```

**Shared components:**
- `Reveal` — Wraps any content with scroll-triggered fade-in-up animation
- `SectionLabel` — Consistent `— LABEL` with cyan accent line
- `Tag` — Colored tech pill badge (`cyan`, `purple`, `pink`)
- `Divider` — Gradient horizontal rule between sections

### Data-Driven Design

All content lives in `src/data/resume.ts`. Components never hardcode content — they `.map()` over data arrays. This means:

- ✅ Update your resume in **one file** and the entire site updates
- ✅ Adding a new project = adding an object to an array
- ✅ TypeScript catches missing fields at compile time
- ✅ Easy to swap in data from a CMS or API in the future

### Performance Optimizations

| Optimization | Implementation |
|---|---|
| **Static Generation** | All pages pre-rendered at build time (no SSR at runtime) |
| **Code Splitting** | Each component is a separate module, tree-shaken by Turbopack |
| **Dynamic Imports** | `ParticleCanvas` and `CursorGlow` are `ssr: false` — no canvas in SSR |
| **Image Optimization** | `next/image` auto-generates WebP/AVIF, lazy-loads below fold |
| **Font Optimization** | `next/font` self-hosts Google Fonts, eliminates render-blocking |
| **CSS** | Tailwind v4 JIT — only used classes ship to production |
| **Minimal JS** | No animation libraries (GSAP, Framer Motion) — pure CSS + 1 canvas |

### Styling Strategy

This project uses **Tailwind CSS v4** with the new `@theme` directive for design tokens. Custom CSS is kept minimal and only used for:

- Background grid pattern (complex `background-image` + `mask-image`)
- Floating orb positioning
- Conic gradient ring (not expressible in utility classes)
- Hero stat badge positioning
- Keyframe definitions

Everything else uses Tailwind utility classes directly in JSX.

---

## 🌐 Deployment

### Vercel (Recommended)

The fastest path — Vercel is built by the creators of Next.js:

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**

That's it. Vercel auto-detects Next.js and configures everything.

```bash
# Or deploy via CLI
npm i -g vercel
vercel --prod
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

Install the [Next.js plugin for Netlify](https://docs.netlify.com/integrations/frameworks/next-js/) or use the `@netlify/plugin-nextjs` package.

### GitHub Pages

Since the site is fully static, you can export it:

1. Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

2. Build:
```bash
npm run build
```

3. Deploy the `out/` directory to GitHub Pages.

> **Note:** `next/image` optimization won't work on GitHub Pages. The `unoptimized: true` flag falls back to standard `<img>` tags.

### Self-Hosted / Docker

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🎨 Customization Guide

### Adding a New Section

1. **Create the component** in `src/components/NewSection.tsx`:

```tsx
"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function NewSection() {
  return (
    <section id="new-section">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <Reveal>
          <SectionLabel>New Section</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-8">
            Section Title
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-text-secondary">Your content here.</p>
        </Reveal>
      </div>
    </section>
  );
}
```

2. **Add it to `page.tsx`**:

```tsx
import NewSection from "@/components/NewSection";

// Inside the JSX:
<Divider />
<NewSection />
```

3. **Add nav link** in `src/components/Navbar.tsx`:

```typescript
const links = [
  ...existing,
  { href: "#new-section", label: "New" },
];
```

### Adding a New Project

Edit `src/data/resume.ts`:

```typescript
projects: [
  ...existing,
  {
    name: "Project Name",
    association: "Where / Context",
    description: "What it does...",
    techStack: ["React", "Node.js"],
    github: "https://github.com/you/repo",  // or null
    icon: "🚀",
    color: "cyan" as const,  // "cyan" | "purple" | "pink"
  },
],
```

The `Projects.tsx` component automatically renders it.

### Adding a New Experience Role

Edit `src/data/resume.ts`:

```typescript
experience: [
  {
    organization: "Company Name",
    location: "City, State",
    roles: [
      ...existing,
      {
        title: "Your Title",
        client: "Client / Team Name",
        startDate: "Jan 2025",
        endDate: "Present",
        description: "What you did...",
        techStack: ["Tech1", "Tech2"],
      },
    ],
  },
],
```

### Adding a New Skill Category

1. Add the data in `src/data/resume.ts`:

```typescript
skills: {
  ...existing,
  databases: ["PostgreSQL", "MongoDB", "Redis"],
},
```

2. Add the category in `src/components/Skills.tsx`:

```typescript
const categories = [
  ...existing,
  { key: "databases" as const, icon: "🗄️", title: "Databases" },
];
```

### Changing the Typed Roles

Edit `src/components/TypedRole.tsx`:

```typescript
const roles = [
  "Full-Stack Developer",
  "Data Science Researcher",
  "AI Enthusiast",
  "Your Custom Role",
];
```

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Mobile Chrome | ✅ iOS & Android |
| Mobile Safari | ✅ iOS 15+ |
| IE 11 | ❌ Not supported |

**Required browser features:** CSS Grid, Intersection Observer, Canvas 2D, ES2020+, `backdrop-filter`.

---

## ❓ Troubleshooting

### Images not loading

- Ensure all images are in `public/` (not `src/`)
- File names are case-sensitive — check exact names in component `src` props
- If using GitHub Pages with `output: 'export'`, add `basePath` to `next.config.ts`

### Particles not rendering

- `ParticleCanvas` uses `dynamic()` with `ssr: false` — it only runs in the browser
- Check browser console for canvas errors
- Canvas won't render in automated tests / headless environments

### Fonts not loading / FOUT

- `next/font` self-hosts fonts. They should load without flash
- If you see fallback fonts, check the `variable` names match between `layout.tsx` and `globals.css`

### Build fails with type errors

```bash
npm run build
```

TypeScript errors will point to the exact file and line. Common fix: ensure all data in `resume.ts` matches the expected types.

### Styling looks wrong

- Ensure Tailwind v4 is installed (`tailwindcss@^4`)
- Verify `postcss.config.mjs` includes `@tailwindcss/postcss`
- Run `npm install` to ensure all deps are present

### Mobile menu not closing

- The `Navbar` component closes the menu on any link click
- If you add custom links, ensure they call `setOpen(false)`

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Tharun Kumar Senthilkumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📬 Contact

**Tharun Kumar Senthilkumar**

- 📧 Email: [tharunsenthilkumar308@gmail.com](mailto:tharunsenthilkumar308@gmail.com)
- 🐙 GitHub: [github.com/tharunS123](https://github.com/tharunS123)
- 📍 West Lafayette, IN — Purdue University

---

<p align="center">
  <img src="public/typography-wordmark.png" alt="THARUN" width="200" />
  <br />
  <sub>Built with ❤️ and clean code</sub>
</p>
