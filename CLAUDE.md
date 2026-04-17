@AGENTS.md

# Jonny Gap Year — Context Injection

## What This Is

A multi-page persuasion website from Adam Fadi to his friend **Jonny Quibbuyen** (exact spelling: J-O-N-N-Y Q-U-I-B-B-U-Y-E-N), convincing him to take a gap year from college. Jonny is 4 years into a 5-year degree. This is NOT a template, NOT a SaaS landing page. It's a love letter disguised as a website.

## Your Mission

Build this entire site production-ready. Read the full spec in `SPEC.md`. Read `ARCHITECTURE.md` for tech decisions. Read `tasks/todo.md` for the build order.

Build in **vertical slices** — each page fully working end-to-end before moving to the next. After all pages are built, create E2E tests that simulate real user flows (navigating page to page, scrolling, clicking CTAs), run them, and fix any issues. Only stop when the site builds clean, all tests pass, and you've navigated every page yourself via Playwright.

**Do NOT ask questions. Make decisions. Pick the more daring option. Ship it.**

## Tech Stack

- **Next.js 16** (App Router) — already scaffolded
- **TypeScript** strict
- **Tailwind CSS v4** — already configured
- **Framer Motion** — install with `npm install framer-motion` (NOT installed yet)
- **Vitest** + **Playwright** for testing — install when needed
- No backend. No database. No auth. Pure frontend.

## Key Rules

- Spelling: **Jonny Quibbuyen** — never Johnny, never Quibuyen
- **NEVER mention Anthropic, Claude, or AI generation anywhere on the site. This is FROM Adam.**
- Typography IS the design. Big, bold, asymmetric.
- Every animation must serve comprehension, never decorative
- When in doubt, pick the more daring option
- Build each page completely before moving to the next
- Run `npm run build` after every major page to catch errors early
- All tests must pass before you report back
