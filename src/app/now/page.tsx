"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Section Data ─── */

const sections = [
  {
    number: "01",
    label: "How to Defer",
    title: "How to Defer Enrollment",
    steps: [
      "Most schools allow a 1-year leave of absence. This is not rare — it's a checkbox.",
      "Talk to the registrar's office, not your advisor. Advisors are incentivized to keep you enrolled. The registrar just processes paperwork.",
      'Frame it as a "leave of absence," not dropping out. Language matters. One sounds temporary. The other sounds permanent.',
      "Credits don't expire. Financial aid can often be deferred. Ask directly — don't assume you know the answer.",
      "Get it in writing. An email confirmation. A signed form. Paper trail protects you.",
    ],
  },
  {
    number: "02",
    label: "The Conversation",
    title: "What to Tell Your Parents",
    steps: [
      "Frame it as exploration, not abandonment. You're not leaving something — you're going toward something.",
      '"I\'m taking a year to work on [specific thing] before finishing." Not vague. Not abstract. Name the thing.',
      "Give them a concrete plan — even if it evolves. A bad plan beats no plan in their eyes.",
      "The 90-day checkpoint. Tell them you'll evaluate at 90 days. This turns an open-ended fear into a bounded experiment.",
      "They want safety. Show them the safety net exists. The degree isn't going anywhere.",
    ],
  },
  {
    number: "03",
    label: "Month One",
    title: "What to Do in Month One",
    steps: [
      "Ship something. Anything. A website, an app, a tool, a video. The act of finishing is the skill.",
      "Start learning AI tooling — it's the new literacy. The people who understand this early have a 10-year head start.",
      "Build in public. Tweet what you're making. Document the process. Attract the people you want to meet.",
      "Find 3 people doing what you want to do. Watch them. Learn their patterns. Steal their frameworks.",
      "Don't plan for 12 months. Plan for 30 days. Then re-plan. Iteration beats prediction.",
    ],
  },
  {
    number: "04",
    label: "Checkpoint",
    title: "The 90-Day Checkpoint",
    steps: [
      "This is your built-in evaluation point. Not a test. A mirror.",
      "Am I learning faster than school taught me?",
      "Am I building things I'm proud of?",
      "Am I closer to what I actually want?",
      "If yes — keep going. If no — the degree is right where you left it. No bridges burned. No time wasted. Just data.",
    ],
  },
];

/* ─── Animations ─── */

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 0px 0px rgba(239,68,68,0)",
      "0 0 60px 20px rgba(239,68,68,0.15)",
      "0 0 0px 0px rgba(239,68,68,0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function NowPage() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Navigation />
      <PageTransition>
        <div className="px-6 pt-24 pb-12 sm:px-12 md:px-20 lg:px-28">
          {/* ── Page Header ── */}
          <section className="mb-20 md:mb-28">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 font-mono text-xs tracking-[0.3em] uppercase text-accent"
            >
              The Final Page
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-6xl leading-[0.9] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-9xl"
            >
              What Now
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 h-px w-24 origin-left bg-accent"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl"
            >
              Everything before this was the argument.
              <br />
              <span className="text-text">This is the playbook.</span>
            </motion.p>
          </section>

          {/* ── Sections ── */}
          <div className="flex flex-col gap-12 md:gap-16">
            {sections.map((section, sectionIdx) => (
              <ScrollReveal key={section.number} delay={sectionIdx * 0.08}>
                <div className="group relative overflow-hidden rounded-sm border border-white/[0.04] bg-surface p-8 md:p-12">
                  {/* Accent corner mark */}
                  <div className="absolute top-0 left-0 h-16 w-px bg-accent" />
                  <div className="absolute top-0 left-0 h-px w-16 bg-accent" />

                  {/* Header row */}
                  <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="font-mono text-4xl font-light leading-none tracking-tight text-accent md:text-5xl">
                      {section.number}
                    </span>
                    <div>
                      <p className="mb-1 font-mono text-[10px] tracking-[0.4em] uppercase text-text-secondary/60">
                        {section.label}
                      </p>
                      <h2 className="font-display text-2xl text-text md:text-3xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col gap-6">
                    {section.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex gap-4">
                        <span className="mt-[3px] shrink-0 font-mono text-xs text-accent/60">
                          {String(stepIdx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Subtle hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Divider ── */}
          <ScrollReveal>
            <div className="my-20 flex items-center gap-6 md:my-28">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-text-secondary/40">
                One more thing
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </ScrollReveal>

          {/* ── Final CTA ── */}
          <ScrollReveal>
            <section className="relative flex flex-col items-center py-16 text-center md:py-28">
              {/* Background glow */}
              <motion.div
                {...pulseGlow}
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[600px] md:w-[600px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 60%)",
                }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative mb-8 font-mono text-xs tracking-[0.4em] uppercase text-accent/80"
              >
                From Adam, to Jonny
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative font-display text-4xl leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                You don&apos;t need
                <br />
                permission.
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative my-8 h-px w-32 bg-accent md:my-12 md:w-48"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative max-w-md text-xl leading-relaxed text-text-secondary sm:text-2xl md:max-w-lg md:text-3xl"
              >
                But if you did —
                <br />
                <span className="font-display text-accent">here it is.</span>
              </motion.p>

              {/* Signature */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 2.0 }}
                className="relative mt-16 font-mono text-sm tracking-[0.2em] text-text-secondary/50 md:mt-24"
              >
                — Adam
              </motion.p>
            </section>
          </ScrollReveal>
        </div>
      </PageTransition>

      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </main>
  );
}
