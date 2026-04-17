"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

/* ──────────────────────────── Timeline Data ──────────────────────────── */

const years = [
  { year: 1, label: "Year 1", status: "Spent" },
  { year: 2, label: "Year 2", status: "Spent" },
  { year: 3, label: "Year 3", status: "Spent" },
  { year: 4, label: "Year 4", status: "Spent" },
  { year: 5, label: "Year 5", status: "The Decision" },
] as const;

/* ──────────────────────────── Year Marker ──────────────────────────── */

function YearMarker({
  year,
  isActive,
  index,
}: {
  year: (typeof years)[number];
  isActive: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  if (isActive) {
    return (
      <motion.div
        className="relative flex flex-col items-center gap-3 md:gap-4 cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 md:top-0 md:translate-y-0"
          animate={{
            width: [48, 64, 48],
            height: [48, 64, 48],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* The dot */}
        <motion.div
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-accent/10 md:h-12 md:w-12"
          animate={{
            boxShadow: [
              "0 0 20px rgba(239,68,68,0.3)",
              "0 0 40px rgba(239,68,68,0.6)",
              "0 0 20px rgba(239,68,68,0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
        >
          <span className="font-display text-lg text-accent md:text-xl">
            {year.year}
          </span>
        </motion.div>

        {/* Label */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {year.label}
          </span>
          <motion.span
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/80"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {year.status}
          </motion.span>
        </div>

        {/* Hover reveal */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-accent/10 border border-accent/30 px-3 py-1.5 font-mono text-[10px] text-accent md:-bottom-16"
            >
              This is the only year that matters.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // Spent years — grayed out
  return (
    <motion.div
      className="flex flex-col items-center gap-3 md:gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.12, duration: 0.5 }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:h-12 md:w-12">
        <span className="font-mono text-sm text-text-secondary/50 md:text-base">
          {year.year}
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="font-mono text-xs uppercase tracking-widest text-text-secondary/40">
          {year.label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary/30">
          {year.status}
        </span>
      </div>
    </motion.div>
  );
}

/* ────────────────────────── Connecting Line ────────────────────────── */

function TimelineConnector({
  isLast,
  index,
}: {
  isLast: boolean;
  index: number;
}) {
  if (isLast) return null;

  const isBeforeFinal = index === 3;

  return (
    <motion.div
      className={`hidden md:block h-px flex-1 ${
        isBeforeFinal
          ? "bg-gradient-to-r from-white/10 to-accent/40"
          : "bg-white/10"
      }`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.6 + index * 0.12, duration: 0.6 }}
      style={{ transformOrigin: "left" }}
    />
  );
}

/* Vertical connector for mobile */
function TimelineConnectorVertical({
  isLast,
  index,
}: {
  isLast: boolean;
  index: number;
}) {
  if (isLast) return null;

  const isBeforeFinal = index === 3;

  return (
    <motion.div
      className={`md:hidden w-px h-8 ${
        isBeforeFinal
          ? "bg-gradient-to-b from-white/10 to-accent/40"
          : "bg-white/10"
      }`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: 0.6 + index * 0.12, duration: 0.6 }}
      style={{ transformOrigin: "top" }}
    />
  );
}

/* ──────────────────────── Section Divider ──────────────────────── */

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="h-px w-16 bg-white/10" />
      <div className="mx-4 h-1.5 w-1.5 rotate-45 bg-accent/40" />
      <div className="h-px w-16 bg-white/10" />
    </div>
  );
}

/* ──────────────────────────── Page ──────────────────────────── */

export default function SunkCostPage() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="min-h-svh bg-bg px-6 pt-24 pb-20 sm:px-12 md:px-20 lg:px-28">
          {/* ─── Page Header ─── */}
          <section className="mx-auto max-w-4xl pb-20 md:pb-28">
            <ScrollReveal>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                Cognitive Lock 01 / 04
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl leading-[0.92] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl">
                The Sunk Cost
                <br />
                <span className="text-accent">Fallacy</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                &ldquo;I&rsquo;m already 4 years in, may as well finish.&rdquo;
                <br />
                This is the textbook example. Literally. It&rsquo;s in the
                textbooks.
              </p>
            </ScrollReveal>
          </section>

          {/* ─── The Timeline ─── */}
          <section className="mx-auto max-w-4xl pb-20 md:pb-28">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <h2 className="font-display text-3xl text-text md:text-4xl">
                  5 Years. 1 Decision.
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                  The grayed out years are gone. Only one is live.
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: horizontal */}
            <div className="hidden md:flex items-center justify-between gap-0 px-4">
              {years.map((year, i) => (
                <div
                  key={year.year}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <YearMarker
                    year={year}
                    isActive={year.year === 5}
                    index={i}
                  />
                  <TimelineConnector
                    isLast={i === years.length - 1}
                    index={i}
                  />
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="flex md:hidden flex-col items-center gap-0">
              {years.map((year, i) => (
                <div key={year.year} className="flex flex-col items-center">
                  <YearMarker
                    year={year}
                    isActive={year.year === 5}
                    index={i}
                  />
                  <TimelineConnectorVertical
                    isLast={i === years.length - 1}
                    index={i}
                  />
                </div>
              ))}
            </div>

            {/* The punchline */}
            <ScrollReveal delay={0.3}>
              <div className="mt-14 text-center">
                <p className="font-display text-2xl text-text md:text-3xl">
                  Year 5 is not a continuation.
                </p>
                <p className="font-display text-2xl text-accent md:text-3xl">
                  It&rsquo;s a new decision.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-text-secondary md:text-lg">
                The 4 years are spent whether you finish or not. They
                don&rsquo;t come back. They don&rsquo;t get refunded. The only
                question left is: what does the{" "}
                <em className="text-text">next</em> year buy you?
              </p>
            </ScrollReveal>
          </section>

          <SectionDivider />

          {/* ─── Lock 02: Social Proof Trap ─── */}
          <section className="mx-auto max-w-3xl py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                Cognitive Lock 02 / 04
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl leading-[0.92] tracking-tight text-text sm:text-5xl md:text-6xl">
                The Social Proof
                <br />
                <span className="text-accent">Trap</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <blockquote className="mt-8 border-l-2 border-accent/40 pl-6">
                <p className="text-xl italic text-text-secondary md:text-2xl">
                  &ldquo;Everyone says I should stay.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-text-secondary md:text-lg">
                Everyone also said the internet was a fad. That crypto was only
                for criminals. That AI was overhyped. &ldquo;Everyone&rdquo; is
                not a strategy. It&rsquo;s a census of fear.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                The people telling you to stay are pattern-matching on{" "}
                <em className="text-text">their</em> lives, not yours.
                They&rsquo;re projecting the risk they would feel, not the risk
                you actually face. They see dropout. You see recalibration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 rounded border border-white/5 bg-surface p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary mb-4">
                  The uncomfortable truth
                </p>
                <p className="text-lg leading-relaxed text-text md:text-xl">
                  The people who take the biggest risks rarely poll the room
                  first. The room is always wrong about outliers &mdash; and
                  Ajani, you&rsquo;re an outlier whether you like it or not.
                </p>
              </div>
            </ScrollReveal>
          </section>

          <SectionDivider />

          {/* ─── Lock 03: Identity Capture ─── */}
          <section className="mx-auto max-w-3xl py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                Cognitive Lock 03 / 04
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl leading-[0.92] tracking-tight text-text sm:text-5xl md:text-6xl">
                Identity
                <br />
                <span className="text-accent">Capture</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-10">
                {/* Before */}
                <div className="flex-1 rounded border border-white/5 bg-surface p-6 md:p-8">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                    How it starts
                  </p>
                  <p className="font-display text-2xl text-text-secondary md:text-3xl">
                    &ldquo;I&rsquo;m <span className="text-text">a</span>{" "}
                    student.&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-text-secondary/60">
                    A role. Temporary. One of many things you are.
                  </p>
                </div>

                {/* After */}
                <div className="flex-1 rounded border border-accent/20 bg-accent/5 p-6 md:p-8">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent/70">
                    How it traps
                  </p>
                  <p className="font-display text-2xl text-accent md:text-3xl">
                    &ldquo;I{" "}
                    <span className="underline decoration-accent underline-offset-4">
                      am
                    </span>{" "}
                    a student.&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-accent/60">
                    An identity. Permanent. Ending it feels like dying.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-10 text-base leading-relaxed text-text-secondary md:text-lg">
                When a temporary role fuses with your identity, leaving it
                triggers an existential threat response. Your brain treats
                &ldquo;I&rsquo;m taking a gap year&rdquo; the same way it treats
                &ldquo;I&rsquo;m erasing who I am.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-text md:text-xl">
                It&rsquo;s not dying, Ajani.{" "}
                <span className="text-accent">It&rsquo;s molting.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                Every version of you that got you here had to be shed for the
                next one to emerge. The kid who started Year 1 is already gone.
                The question is whether you let Year 5 happen to you, or you
                choose what comes next.
              </p>
            </ScrollReveal>
          </section>

          <SectionDivider />

          {/* ─── Lock 04: Time Asymmetry ─── */}
          <section className="mx-auto max-w-3xl py-20 md:py-28">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                Cognitive Lock 04 / 04
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl leading-[0.92] tracking-tight text-text sm:text-5xl md:text-6xl">
                Time
                <br />
                <span className="text-accent">Asymmetry</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-base leading-relaxed text-text-secondary md:text-lg">
                Not all years are created equal. A year at 22 is not the same as
                a year at 42. This isn&rsquo;t philosophy &mdash; it&rsquo;s
                math.
              </p>
            </ScrollReveal>

            {/* Multiplier visualization */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  {
                    label: "Energy",
                    detail: "Peak physical & mental capacity",
                  },
                  {
                    label: "Plasticity",
                    detail: "Brain still rewiring itself",
                  },
                  {
                    label: "Freedom",
                    detail: "No mortgage, no kids, no anchors",
                  },
                  {
                    label: "Compounding",
                    detail: "50+ years to compound on any skill",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="rounded border border-white/5 bg-surface p-4 md:p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-text-secondary">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 flex items-baseline gap-3">
                <span className="font-display text-6xl text-accent md:text-7xl">
                  10x
                </span>
                <p className="max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                  One year in your early 20s is worth roughly ten times a year
                  in your 40s when measured by optionality, energy, and
                  compounding runway.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="mt-8 text-lg leading-relaxed text-text md:text-xl">
                This is not &ldquo;just a year.&rdquo;{" "}
                <span className="text-accent">
                  This is the most expensive year you will ever spend.
                </span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                Spending it on autopilot &mdash; finishing a degree because you
                started it, not because it&rsquo;s the best use of the year
                &mdash; is the most expensive decision disguised as the safest
                one.
              </p>
            </ScrollReveal>
          </section>

          <SectionDivider />

          {/* ─── Closing + CTA ─── */}
          <section className="mx-auto max-w-3xl py-20 md:py-28 text-center">
            <ScrollReveal>
              <h2 className="font-display text-4xl leading-[0.95] text-text sm:text-5xl md:text-6xl">
                Four locks.
                <br />
                <span className="text-accent">One key.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
                The sunk cost says stay. The crowd says stay. Your identity says
                stay. And the calendar says this year is worth more than all of
                them combined.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text md:text-xl">
                So what does the gap actually look like?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-12">
                <Link
                  href="/the-gap"
                  className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:tracking-[0.3em]"
                >
                  See what a gap year unlocks
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
