"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Adam's real project timeline (from ~/Documents/windsurf projects/) ── */
const adamTimeline = [
  { month: "Apr 2025", count: 1, label: "fadiOS" },
  { month: "Nov 2025", count: 1, label: "ASCII Player" },
  {
    month: "Dec 2025",
    count: 5,
    label: "lyric generator, pinterest, starter kit, text sorter…",
  },
  {
    month: "Jan 2026",
    count: 6,
    label: "lifeOS, pharmai, rhymeOS, NOW app…",
  },
  {
    month: "Feb 2026",
    count: 35,
    label:
      "fadicode, shader-lab, chroma, spec-deck, roundtable, pixelpet, omnimedia, prism, hatchery-forge…",
  },
  {
    month: "Mar 2026",
    count: 35,
    label:
      "signalbox, fadigrid, teach-me, OpenCut, metamirror, creatousel, takesync, plugin-lab, design-playbook…",
  },
  {
    month: "Apr 2026",
    count: 7,
    label:
      "machete-os, fadicolors, stone-social, ellensburg-ai, crossy-rhodes…",
  },
];

const totalProjects = adamTimeline.reduce((sum, m) => sum + m.count, 0);

/* ── Ajani's 4-year CS timeline (typical path) ── */
const ajaniTimeline = [
  { year: "Year 1", label: "Gen-eds, intro to programming, learning loops" },
  {
    year: "Year 2",
    label: "Data structures, algorithms, theory — still no shipped product",
  },
  {
    year: "Year 3",
    label: "Electives, group projects, maybe an internship application",
  },
  {
    year: "Year 4",
    label: "Senior project, job prep, still writing code no one will use",
  },
];

/* ── The Money Math ── */
const costOfYear5 = {
  tuition: 10000,
  housing: 8000,
  food: 4000,
  total: 22000,
  label: "Minimum cost of Year 5",
};

const opportunityCost = {
  entrySalary: 75000,
  freelanceRange: "50K–120K",
  monthlyFreelance: 6000,
  yearFreelance: 72000,
  totalMissed: 94000,
  label: "What you're NOT earning while sitting in lectures",
};

const maxBar = 40; // max count for bar scaling

export default function ROIPage() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="min-h-screen bg-bg pt-24 pb-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* ── Header ── */}
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
                The Math
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text leading-[0.9] mb-6">
                Return on
                <br />
                Investment
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
                Numbers don&apos;t lie. Here&apos;s what 4 years of a CS degree
                actually bought — and what 5 months of building in the real
                world produced.
              </p>
            </ScrollReveal>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 1: The Timeline Comparison ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  01 / 04
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-text mb-4">
                4 years vs. 5 months
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
                Ajani spent 4 years in a CS program. In the same world, in the
                same city, Adam built{" "}
                <span className="text-accent font-semibold">
                  {totalProjects} projects
                </span>{" "}
                in 5 months. Not ideas. Not plans. Shipped, working software.
              </p>
            </ScrollReveal>

            {/* ── Adam's Timeline (real data) ── */}
            <ScrollReveal>
              <div className="mb-16">
                <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-emerald-400 mb-8">
                  Adam&apos;s Build Log — Real Projects, Real Dates
                </h3>
                <div className="space-y-4">
                  {adamTimeline.map((m, i) => (
                    <motion.div
                      key={m.month}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 mb-1">
                        <span className="font-mono text-xs text-text-secondary w-20 shrink-0">
                          {m.month}
                        </span>
                        <div className="flex-1 relative h-8 flex items-center">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: i * 0.08 + 0.2,
                              duration: 0.8,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full bg-emerald-500/20 border border-emerald-500/30 origin-left"
                            style={{
                              width: `${(m.count / maxBar) * 100}%`,
                              minWidth: "2rem",
                            }}
                          />
                          <span className="absolute right-0 font-mono text-xs text-emerald-400 pr-2 tabular-nums">
                            {m.count} projects
                          </span>
                        </div>
                      </div>
                      <p className="text-text-secondary/50 text-xs font-mono ml-24 truncate">
                        {m.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 ml-24 border-t border-emerald-500/20 pt-4">
                  <span className="font-mono text-sm text-emerald-400">
                    Total: {totalProjects} shipped projects in ~5 months
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Ajani's Timeline ── */}
            <ScrollReveal>
              <div className="mb-20">
                <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-text-secondary/40 mb-8">
                  Ajani&apos;s CS Degree — 4 Years
                </h3>
                <div className="space-y-4">
                  {ajaniTimeline.map((y, i) => (
                    <motion.div
                      key={y.year}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <span className="font-mono text-xs text-text-secondary/30 w-20 shrink-0">
                        {y.year}
                      </span>
                      <div className="flex-1 h-8 flex items-center">
                        <div
                          className="h-full bg-white/[0.03] border border-white/[0.04]"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 ml-24 border-t border-white/5 pt-4">
                  <span className="font-mono text-sm text-text-secondary/40">
                    Total: 0 shipped products. 1 unfinished degree.
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* ── The punchline ── */}
            <ScrollReveal>
              <div className="bg-surface border border-white/5 p-8 md:p-12 mb-20">
                <p className="font-display text-2xl md:text-4xl text-text leading-snug">
                  Adam learned more in{" "}
                  <span className="text-emerald-400">February 2026</span> than
                  most CS programs teach in{" "}
                  <span className="text-text-secondary/50 line-through">
                    4 years
                  </span>
                  .
                </p>
                <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                  35 projects in one month. Terminal emulators, GPU shader
                  engines, real-time trading dashboards, AI platforms, design
                  systems, video engines. Not homework. Not theory. Software
                  people use.
                </p>
              </div>
            </ScrollReveal>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 2: The Money ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  02 / 04
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-text mb-4">
                The Price Tag
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
                Year 5 isn&apos;t free. It costs real money to attend and real
                money to miss.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Cost of staying */}
              <ScrollReveal>
                <div className="bg-surface border border-accent/10 p-8 h-full">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
                    Cost of Year 5
                  </span>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-text-secondary">Tuition</span>
                      <span className="font-mono text-accent tabular-nums">
                        ${costOfYear5.tuition.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-text-secondary">
                        Housing / rent
                      </span>
                      <span className="font-mono text-accent tabular-nums">
                        ${costOfYear5.housing.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-text-secondary">Food / living</span>
                      <span className="font-mono text-accent tabular-nums">
                        ${costOfYear5.food.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-text font-semibold">
                      Minimum total
                    </span>
                    <span className="font-mono text-accent text-2xl tabular-nums">
                      -${costOfYear5.total.toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-4 text-text-secondary/50 text-xs">
                    This is conservative. Books, software, fees, transportation
                    not included.
                  </p>
                </div>
              </ScrollReveal>

              {/* Opportunity cost */}
              <ScrollReveal delay={0.1}>
                <div className="bg-surface border border-emerald-500/10 p-8 h-full">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
                    What You&apos;d Earn Instead
                  </span>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-text-secondary">
                        Entry dev salary
                      </span>
                      <span className="font-mono text-emerald-400 tabular-nums">
                        ${opportunityCost.entrySalary.toLocaleString()}
                        /yr
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-text-secondary">
                        Freelance range
                      </span>
                      <span className="font-mono text-emerald-400 tabular-nums">
                        ${opportunityCost.freelanceRange}/yr
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-text-secondary">
                        AI-tooling premium
                      </span>
                      <span className="font-mono text-emerald-400 tabular-nums">
                        +30–50%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-text font-semibold">
                      Conservative year
                    </span>
                    <span className="font-mono text-emerald-400 text-2xl tabular-nums">
                      +$
                      {opportunityCost.yearFreelance.toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-4 text-text-secondary/50 text-xs">
                    Based on $6K/mo freelance — well below market for AI-fluent
                    devs in 2026.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* ── The Total Swing ── */}
            <ScrollReveal>
              <div className="text-center mb-20">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                  Total cost of this decision
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-6xl md:text-8xl lg:text-9xl text-accent tabular-nums font-bold">
                    -$94K
                  </span>
                </motion.div>
                <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
                  $22K spent on year 5 <span className="text-accent">+</span>{" "}
                  $72K in missed earnings. That&apos;s the real price of
                  &ldquo;just one more year.&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 3: The Degree is Depreciating ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  03 / 04
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-text mb-4">
                The CS Degree in 2026
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
                A CS degree used to be a golden ticket. In 2026, it&apos;s a
                depreciating asset — and here&apos;s why.
              </p>
            </ScrollReveal>

            <div className="space-y-8 mb-20">
              {[
                {
                  title: "AI writes code now",
                  body: "The thing a CS degree trained you to do — write code — is now the thing AI does fastest. The bottleneck moved from 'can you code' to 'can you build products, talk to users, and ship.' No lecture teaches that.",
                },
                {
                  title: "Hiring doesn't care about degrees anymore",
                  body: "Google, Apple, Tesla, and most YC startups dropped degree requirements years ago. They hire based on what you've built. A GitHub profile with 90 shipped projects beats a diploma every time.",
                },
                {
                  title: "The curriculum is 5 years behind",
                  body: "Universities are teaching React patterns from 2021. The industry moved to AI-augmented development, agent frameworks, and tools that didn't exist when Ajani's textbooks were written. By the time Year 5 ends, the gap will be wider.",
                },
                {
                  title: "The credential premium is collapsing",
                  body: "The salary premium for a CS degree over self-taught developers has been shrinking every year since 2020. In AI-adjacent roles, portfolio and demonstrated skill now command higher offers than credentials.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="bg-surface border border-white/5 p-8 md:p-10">
                    <h3 className="font-display text-xl md:text-2xl text-text mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 4: The Real Resume ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  04 / 04
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-text mb-4">
                Two Resumes
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
                Same age. Same era. Different decisions.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Ajani's resume */}
              <ScrollReveal>
                <div className="border border-white/[0.04] p-8 h-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent, transparent 10px, white 10px, white 11px)",
                    }}
                  />
                  <div className="relative">
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary/40 mb-6 block">
                      Ajani Quibuyen — After Year 5
                    </span>
                    <ul className="space-y-4 text-text-secondary/60">
                      <li className="flex gap-3">
                        <span className="text-text-secondary/30 shrink-0">
                          →
                        </span>
                        <span>B.S. Computer Science (5 years)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-text-secondary/30 shrink-0">
                          →
                        </span>
                        <span>
                          Coursework: data structures, algorithms, OS, databases
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-text-secondary/30 shrink-0">
                          →
                        </span>
                        <span>
                          1 senior capstone project (group, unshipped)
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-text-secondary/30 shrink-0">
                          →
                        </span>
                        <span>0 shipped products</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-text-secondary/30 shrink-0">
                          →
                        </span>
                        <span>0 users</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-text-secondary/30 shrink-0">
                          →
                        </span>
                        <span>$22K+ in debt</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Adam's resume */}
              <ScrollReveal delay={0.1}>
                <div className="border border-emerald-500/20 bg-emerald-500/[0.02] p-8 h-full">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-6 block">
                    Adam Fadi — Same Time Period
                  </span>
                  <ul className="space-y-4 text-text">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        {totalProjects} shipped projects (React, Next.js, Swift,
                        Zig, Metal, Python)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        Built a terminal emulator, GPU shader engine, real-time
                        trading dashboard
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        Built video engines, design systems, AI platforms,
                        learning apps
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>Runs Everything For Artists</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>Tokyo show booked August 2026</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>$0 in student debt</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* ── Final Statement ── */}
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}
                  className="font-display text-3xl md:text-5xl lg:text-6xl text-text leading-[1.1] mb-8"
                >
                  The degree costs you <span className="text-accent">$94K</span>
                  .
                  <br />
                  The gap year costs you{" "}
                  <span className="text-emerald-400">nothing</span>.
                </motion.h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  If it doesn&apos;t work out, the degree is right where you
                  left it. But you can&apos;t get 2026 back. You can&apos;t get
                  this window back. The math isn&apos;t even close.
                </p>
              </div>
            </ScrollReveal>

            {/* ── CTA ── */}
            <ScrollReveal>
              <div className="flex justify-center">
                <Link
                  href="/now"
                  className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:tracking-[0.3em]"
                >
                  What now
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
