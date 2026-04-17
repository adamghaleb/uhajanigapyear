# Build Plan — Vertical Slices

## Phase 1: Foundation

- [ ] Install dependencies: `npm install framer-motion`
- [ ] Install test deps: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @playwright/test`
- [ ] Configure fonts (DM Serif Display, Inter, JetBrains Mono) in layout.tsx via next/font/google
- [ ] Set up globals.css with design tokens and base styles
- [ ] Create root layout with metadata, fonts, dark background
- [ ] Create shared components: Navigation, PageTransition, ScrollReveal
- [ ] Verify: `npm run build` passes

## Phase 2: Landing Page (/)

- [ ] Build landing page — Jonny's name large, thesis statement, CTA
- [ ] Add entrance animations (Framer Motion)
- [ ] Verify: page renders, CTA links to /roundtable, build passes

## Phase 3: Roundtable (/roundtable)

- [ ] Create Speaker component with per-voice typographic treatment
- [ ] Write full roundtable dialogue (Jobs, Karpathy, Fadi) — substantial, not shallow
- [ ] Build page with scroll-reveal dialogue sections
- [ ] Verify: dialogue reads authentically, build passes

## Phase 4: Sunk Cost (/sunk-cost)

- [ ] Create Timeline component — Years 1-4 grayed, Year 5 live
- [ ] Build page with interactive timeline and cognitive lock content
- [ ] Add scroll-driven timeline animation
- [ ] Verify: timeline is interactive, build passes

## Phase 5: The Gap (/the-gap)

- [ ] Build invisible curriculum page — 6 items with visual treatment
- [ ] Add "Year 5 teaches vs Gap year teaches" contrast
- [ ] Verify: content is clear and striking, build passes

## Phase 6: Permission (/permission)

- [ ] Build reframe page — gap year ≠ dropout
- [ ] Address parents, social proof, identity molting
- [ ] Verify: messaging is clear, build passes

## Phase 7: Letter (/letter)

- [ ] Write Adam's letter to Jonny — first person, 2am energy, dense
- [ ] Build letter page with careful typography
- [ ] This is the emotional core — spend time here
- [ ] Verify: letter feels genuine, build passes

## Phase 8: Now (/now)

- [ ] Build CTA page with concrete next steps
- [ ] Deferral process, parent conversation framing, first month plan, 90-day checkpoint
- [ ] Final CTA: permission statement
- [ ] Verify: actionable, friction-free, build passes

## Phase 9: Polish & Connect

- [ ] Verify all inter-page navigation works
- [ ] Check page transitions between all routes
- [ ] Mobile responsive check (375px)
- [ ] Spell-check: "Jonny Quibbuyen" everywhere

## Phase 10: Testing

- [ ] Write E2E tests:
  - Full navigation flow: Landing → Roundtable → Sunk Cost → The Gap → Permission → Letter → Now
  - Direct URL access for each page
  - CTA click functionality
  - Mobile viewport tests
- [ ] Run all E2E tests via Playwright — fix any failures
- [ ] Run `npm run build` — must pass clean
- [ ] Navigate every page via Playwright to verify visually

## Phase 11: Final Verification

- [ ] `npm run build` — zero errors
- [ ] All tests green
- [ ] Every page accessible and beautiful
- [ ] Report: DONE
