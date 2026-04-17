# Architecture

## Overview

Static multi-page persuasion site. No backend, no database, no auth. Pure frontend with rich typography and motion.

## Tech Decisions

| Decision   | Choice                                                   | Why                                                                      |
| ---------- | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| Framework  | Next.js 16 App Router                                    | Adam's stack, SSG for static pages, file-based routing                   |
| Styling    | Tailwind CSS v4                                          | Utility-first, already configured                                        |
| Animation  | Framer Motion                                            | Best React animation library, scroll-driven support                      |
| Typography | DM Serif Display + Inter + JetBrains Mono (Google Fonts) | High-conviction serif + clean sans + mono for data. Free, self-hostable. |
| Testing    | Vitest + Playwright                                      | Unit + E2E coverage                                                      |
| Deployment | Static export or Vercel                                  | Zero config deployment                                                   |

## Page Architecture

Each page is a self-contained route in `src/app/[route]/page.tsx`. No shared state between pages — each is its own room.

### Navigation Flow

```
Landing (/) → Roundtable → Sunk Cost → The Gap → Permission → Letter → Now
                                                                         ↑
                                                              (Any page can jump here)
```

### Shared Components

- `Navigation` — minimal top nav, appears on all pages except landing
- `PageTransition` — framer-motion wrapper for enter/exit animations
- `ScrollReveal` — intersection-observer-based reveal for scroll animations
- `Timeline` — interactive SVG timeline for sunk-cost page
- `Speaker` — styled dialogue block for roundtable voices

## Design Tokens

All design tokens live in `globals.css` as CSS custom properties and Tailwind theme extensions.

```
--color-bg: #0A0A0A
--color-text: #FAFAF9
--color-text-secondary: #A8A29E
--color-accent: #EF4444
--color-accent-muted: #DC2626
--color-surface: #1C1917
```

## Content Strategy

All content is hardcoded in page components. No CMS, no markdown files. The content IS the code — each page's prose is carefully written inline for maximum control over typography and layout.

## Performance

- Static generation for all pages (no server-side rendering needed)
- Google Fonts loaded via `next/font/google` for zero layout shift
- Framer Motion tree-shaken — only import what's used
- Images: none (typography-only design, SVG illustrations if needed)
