# SPEC: Jonny Gap Year Site

## Purpose

Convince Jonny Quibbuyen to take a gap year from college. He's 4 years into a 5-year degree. Everyone around him says "one year left, just finish." Adam believes this is the sunk cost fallacy wearing a cap and gown.

This is a personal project from Adam Fadi to Jonny. It needs to be the most striking site Adam has ever seen.

---

## Core Concept: The Roundtable

A conversation between three minds — **Steve Jobs**, **Andrej Karpathy**, and **Adam Fadi** — architected as the site's narrative spine. Each has a distinct perspective on WHY Jonny should take a gap year:

### Steve Jobs

- The dent in the universe, the fear of living someone else's life
- "Your time is limited — don't waste it living someone else's life"
- 1 year of your twenties is a geological epoch
- The question isn't "finish the degree" — it's "what are you letting this degree cost you?"
- **Voice:** Direct, almost cruel. Poetic but sharp. Questions that cut.

### Andrej Karpathy

- Credentialing is collapsing
- The learning curve of AI tools in 2026 is steeper than any degree
- The gap between people who use Claude Code / Cursor / agents daily and people who don't is now a generational gap
- The degree won't teach him this. No one will.
- **Voice:** Precise, curious, technically grounded. "It turns out..." and analogies. Data-driven.

### Adam Fadi

- Architecture over discipline
- Hermetic + nondual framing — the part of him telling him to finish isn't him, it's the crowd's voice in his throat
- A gap year is an experiment, not a dropout
- The asymmetry is massive: worst case = take it in 12 months, best case = life redirects
- **Voice:** Hermetic, nondual, FL Studio / Photoshop analogies. Peer-to-peer. No preachy spirituality. Like texting at 2am.

---

## Psychology: The 7 Cognitive Locks to Dissolve

### 1. Sunk Cost Fallacy

"4 years in, may as well finish" is the textbook example. The 4 years are spent regardless. The only question is what the NEXT year buys him. Visualize with a timeline where past 4 years are grayed out (already real), and only Year 5 is live/interactive.

### 2. Social Proof Trap

"Everyone says stay" means nothing. Everyone also said the internet was a fad, crypto was only for criminals, AI was hype. Everyone is pattern-matching on their own fears, not Jonny's life.

### 3. Identity Capture

When "I'm a student" becomes "I am a student," ending it feels like dying. It's not. It's molting.

### 4. Time Asymmetry

One year in your early 20s is worth ~10x a year in your 40s (energy, plasticity, no dependents, compounding). This isn't "just a year."

### 5. The Dropout Framing

A GAP YEAR IS NOT DROPPING OUT. The degree waits. The moment does not. People conflate the two and it's the main resistance.

### 6. What the Degree Won't Teach Him

AI tooling, taste, shipping, building in public, entrepreneurship, the thing he actually wants to do. Name the gap explicitly.

### 7. The Phantom Permission

He is waiting for someone to give him permission to stop. This site IS the permission. Make the final page a direct, grounded call to action.

---

## Site Structure (7 Pages)

### `/` — Landing

- Jonny's name displayed large and striking
- Central thesis in one sentence
- Single CTA to enter the conversation
- Dark, typographic, minimal — sets the tone immediately

### `/roundtable` — The Roundtable

- The main dialogue between Jobs, Karpathy, and Fadi
- Styled like a transcript but cinematic
- Each speaker has their own typographic treatment (different font weights, colors, spacing)
- Dialogue should be substantial — not shallow quotes. A genuine multi-page conversation.
- Topics flow naturally: why credentials are dying, what a year really costs, the asymmetry of the bet, the voice vs the self

### `/sunk-cost` — The Sunk Cost

- The fallacy, visualized
- Interactive timeline: Years 1-4 grayed out / faded (already spent), Year 5 is the live decision point
- Visual weight on "the only year that matters is the next one"
- Include the social proof trap, identity capture, and time asymmetry concepts here or as scroll sections

### `/the-gap` — The Invisible Curriculum

- What the degree won't teach him — named plainly:
  - AI tooling (Claude Code, Cursor, agents — the new literacy)
  - Taste (you can't teach taste in a lecture hall)
  - Shipping (deploying real things to real users)
  - Building in public (reputation compounds faster than GPA)
  - Entrepreneurship (the thing he actually wants to do)
- Each item gets its own visual treatment
- Contrast: "What Year 5 teaches" vs "What a gap year teaches"

### `/permission` — The Reframe

- Gap year ≠ dropout. Hammer this.
- The degree waits. The moment does not.
- Low-risk experiment framing: worst case you resume in 12 months with more clarity
- Address parents, friends, the "everyone says stay" chorus
- Identity molting metaphor

### `/letter` — Adam's Letter

- First-person letter from Adam to Jonny
- Unguarded, warm, dense. Like texting at 2am.
- No "I hope this finds you well." No filler.
- This is the emotional core of the site
- Should make Jonny feel seen — not lectured

### `/now` — What Now

- Concrete next steps:
  - How to actually defer enrollment (most schools allow 1-year leave of absence)
  - What to tell parents (frame as exploration, not abandonment)
  - What to do with the first month (specific suggestions)
  - The 90-day checkpoint (built-in evaluation point)
- Remove friction from the decision
- Final CTA: "You don't need permission. But if you did — here it is."

---

## Aesthetic Direction

### Typography

- **Display/Headings:** DM Serif Display — high-conviction serif with character
- **Body text:** Inter — clean, modern, excellent readability
- **Data/Accents:** JetBrains Mono — for readouts, statistics, timeline labels
- Typography IS the image. No stock photos. Type does the heavy lifting.

### Color Palette

- Background: `#0A0A0A` (near-black)
- Primary text: `#FAFAF9` (warm white / bone)
- Secondary text: `#A8A29E` (stone-400)
- Accent: `#EF4444` (red-500) — sparingly, for emphasis and CTAs
- Accent muted: `#DC2626` (red-600)
- Surface/Cards: `#1C1917` (stone-900)

### Layout

- Dense grids with generous whitespace where it earns it
- Asymmetry preferred over centered-everything
- Each page feels like its own room — distinct spatial character
- No stock imagery. Typography as image. SVG illustrations if absolutely needed.

### Motion

- Scroll-driven reveals with Framer Motion
- Text that fades/slides in on scroll
- Timeline animation on /sunk-cost
- Page transitions between routes
- RULE: Every animation must serve comprehension. Never decorative.

---

## Voice & Tone Rules

1. The roundtable must feel like the actual three people speaking
2. The letter should sound like Adam texting Jonny at 2am — warm, direct, no filler
3. Never call Jonny "you" in a patronizing way — this is peer-to-peer
4. This is a love letter from a friend, not a self-help landing page
5. **NEVER mention Anthropic, Claude, or AI anywhere on the site. This is FROM Adam.**

---

## About Adam (for authentic voice)

- 21 years old
- Software dev: 40+ projects across Zig, Swift, Metal, React, Next.js
- Hyperpop musician (stage name: adam fadi)
- Runs Everything For Artists
- Tokyo show August 2026
- Philosophy: Hermetic / nondual / Buddhist / Christian syncretic
- ADHD — architecture over discipline
- Builds tools daily
- The kind of person who'd text Jonny this site at 3am with no preamble

---

## Definition of Done

- [ ] All 7 pages built and navigable
- [ ] Roundtable dialogue reads like the real people
- [ ] Letter page makes you feel something
- [ ] Sunk cost timeline is interactive/animated
- [ ] All page transitions are smooth
- [ ] Mobile responsive (375px+)
- [ ] `npm run build` passes clean
- [ ] E2E tests cover full user navigation flow
- [ ] All tests green
- [ ] Zero TypeScript errors
- [ ] Jonny's name spelled correctly everywhere (Jonny Quibbuyen)
