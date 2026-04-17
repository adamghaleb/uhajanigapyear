"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ── The 12-Month Plan ── */
const quarters = [
  {
    label: "Month 1–3",
    title: "Foundation",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/[0.03]",
    items: [
      "Complete 3 portfolio-ready software projects (websites, apps, or tools)",
      "Learn modern AI-assisted development — the highest-demand skill in tech right now",
      "Set up a professional online presence: portfolio site, GitHub, LinkedIn",
      "Apply to 2–3 freelance platforms and land first paid client work",
      "Establish a daily routine: 8 hours of focused building, every weekday",
    ],
    checkpoint:
      "90-Day Checkpoint: Has Ajani shipped at least 3 projects? Is he earning any income from his skills? If the answer is no to both — he re-enrolls for fall semester. No questions asked.",
  },
  {
    label: "Month 4–6",
    title: "Momentum",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/[0.03]",
    items: [
      "Build a client base or join an early-stage startup as a developer",
      "Target $3,000–5,000/month in freelance or contract income",
      "Contribute to open-source projects for public credibility",
      "Attend 1–2 tech meetups or conferences (online or in-person)",
      "Begin building a personal product — something he owns",
    ],
    checkpoint:
      "6-Month Checkpoint: Is income replacing what a part-time campus job would pay? Is the portfolio stronger than a senior capstone project? Is he learning faster than school?",
  },
  {
    label: "Month 7–9",
    title: "Acceleration",
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/[0.03]",
    items: [
      "Pursue a full-time role, advanced freelance contracts, or launch his own product",
      "Target $5,000–8,000/month income",
      "Build depth in one specialization (AI tooling, web apps, mobile, etc.)",
      "Document everything: blog posts, project write-ups, case studies",
      "Expand professional network through the work itself",
    ],
    checkpoint:
      "9-Month Checkpoint: Is this trajectory clearly outpacing what Year 5 would have provided? If yes — the gap year proved itself. If no — fall enrollment is still available.",
  },
  {
    label: "Month 10–12",
    title: "Decision Point",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/[0.03]",
    items: [
      "Evaluate the full year honestly: skills gained, income earned, projects shipped",
      "Compare where he is vs. where he would have been with a diploma and no portfolio",
      "Make a clear-eyed decision: continue building, or return to finish the degree",
      "If returning: he comes back with real-world experience that makes the final year far more valuable",
      "If continuing: he's already established in a career that many graduates spend months job-hunting for",
    ],
    checkpoint:
      "Final Evaluation: Either path forward is stronger because of this year. He either returns as a better student or continues as an established professional. There is no losing scenario.",
  },
];

/* ── Parent Concerns ── */
const concerns = [
  {
    worry: '"He\'s so close — just one more year"',
    response:
      "We understand this instinct. Four years feels like too much to walk away from. But the four years are already complete — they can't be un-spent. The only question is whether Year 5 is the best use of the next 12 months. The credits don't expire. The degree will be there if he needs it. But the current window — being 22 with no mortgage, no dependents, and the fastest-moving technology shift in history happening right now — that window closes.",
  },
  {
    worry: '"What if he doesn\'t go back?"',
    response:
      "This is a leave of absence, not a withdrawal. The university holds his place. His credits remain valid. If the gap year doesn't produce clear results — and the plan below includes specific checkpoints to measure this — he re-enrolls. Many students who take structured gap years return with more focus, better grades, and a clearer sense of purpose. And if the gap year goes well enough that he doesn't need to return? That's the best possible outcome, not a failure.",
  },
  {
    worry: '"A degree is a safety net"',
    response:
      "It used to be. In 2026, for computer science specifically, the safety net has shifted. Google, Apple, Tesla, IBM, and most startups no longer require degrees for technical roles. They hire based on demonstrated ability — projects shipped, problems solved, code written. A portfolio of real work is now a stronger safety net than a diploma. The degree is still available as a backup, but it is no longer the primary path to employment in tech.",
  },
  {
    worry: '"Is this just him being lazy or avoiding hard work?"',
    response:
      "Building software products, finding clients, shipping real projects, and earning income with no institutional support structure is significantly harder than attending classes. A structured gap year requires more discipline, not less. The plan below includes daily commitments, monthly milestones, and quarterly evaluations that are more rigorous than a typical semester course load. This isn't avoidance — it's choosing a harder, faster path.",
  },
  {
    worry: '"What will he actually DO all day?"',
    response:
      "The plan is detailed below, but in short: he will build software, learn the most in-demand tools in the industry, create a professional portfolio, earn income through freelance and contract work, and evaluate his progress at 90-day intervals. Every day has structure. Every month has deliverables. Every quarter has a checkpoint where he honestly evaluates whether to continue or return.",
  },
  {
    worry: '"We\'re worried about his future"',
    response:
      "So is he. That's exactly why he's considering this. He's not running from his future — he's running toward a version of it where he arrives with real skills, real experience, and real income instead of just a credential. The tech industry in 2026 values what you can do over what certificate you hold. A year of building gives him both the skills AND the option to finish the degree — it's additive, not subtractive.",
  },
];

export default function ParentsPage() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="min-h-screen bg-bg pt-24 pb-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* ── Header ── */}
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-4">
                A message for Ajani&apos;s family
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-text leading-[0.95] mb-8">
                The Plan,
                <br />
                In Full
              </h1>
              <div className="max-w-2xl space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  This page is written for the people who care most about
                  Ajani&apos;s future — his parents and family. We know this
                  decision isn&apos;t easy, and we know the concerns are real.
                </p>
                <p>
                  Below is a detailed, structured plan for a one-year leave of
                  absence. It includes monthly milestones, quarterly
                  checkpoints, and clear criteria for evaluating whether to
                  continue or re-enroll. Nothing about this is impulsive.
                  Everything is measured.
                </p>
                <p className="text-text">
                  The degree is not going away. The credits do not expire. This
                  is not dropping out — it is a strategic pause to take
                  advantage of a once-in-a-generation opportunity in technology.
                </p>
              </div>
            </ScrollReveal>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 1: Addressing Concerns ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  01 / 03
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-text mb-4">
                We Hear Your Concerns
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed">
                Every concern below is valid. Here is how the plan addresses
                each one directly.
              </p>
            </ScrollReveal>

            <div className="space-y-6 mb-20">
              {concerns.map((c, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="bg-surface border border-white/5 p-6 md:p-8">
                    <p className="font-display text-xl md:text-2xl text-text mb-4 italic">
                      {c.worry}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {c.response}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 2: The 12-Month Plan ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  02 / 03
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-text mb-4">
                The 12-Month Plan
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-6 leading-relaxed">
                This is not &ldquo;take a year off and figure it out.&rdquo;
                Every quarter has specific goals, measurable deliverables, and a
                built-in evaluation checkpoint.
              </p>
              <div className="bg-surface border border-accent/10 p-4 md:p-6 mb-16">
                <p className="text-sm text-text-secondary">
                  <span className="text-accent font-semibold">
                    Key guarantee:
                  </span>{" "}
                  If the 90-day checkpoint (end of Month 3) does not show clear
                  progress — shipped projects, skill growth, and early income —
                  Ajani re-enrolls for the next semester. This is a structured
                  experiment with a built-in exit, not a leap of faith.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-12 mb-20">
              {quarters.map((q, i) => (
                <ScrollReveal key={q.label} delay={i * 0.05}>
                  <div className={`border ${q.border} ${q.bg} p-6 md:p-8`}>
                    <div className="flex items-baseline gap-4 mb-6">
                      <span
                        className={`font-mono text-xs tracking-[0.2em] uppercase ${q.color}`}
                      >
                        {q.label}
                      </span>
                      <h3
                        className={`font-display text-2xl md:text-3xl ${q.color}`}
                      >
                        {q.title}
                      </h3>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {q.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-text">
                          <span className={`${q.color} shrink-0 mt-1`}>•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-white/5 pt-4">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        <span className={`font-semibold ${q.color}`}>
                          ✓ Checkpoint:
                        </span>{" "}
                        {q.checkpoint}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ── Divider ── */}
            <div className="my-20 h-px bg-white/5" />

            {/* ── SECTION 3: The Safety Net ── */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  03 / 03
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-text mb-4">
                The Safety Net
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed">
                This plan is designed so that{" "}
                <span className="text-text">
                  every outcome is a good outcome
                </span>
                . Here&apos;s why there is no downside.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <ScrollReveal>
                <div className="bg-surface border border-emerald-500/10 p-6 md:p-8 h-full">
                  <h3 className="font-display text-xl text-emerald-400 mb-4">
                    If the gap year goes well
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        Ajani has a career, income, and a portfolio that speaks
                        for itself
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        He can still finish the degree later if he wants —
                        credits don&apos;t expire
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        He enters the workforce 1 year ahead of his classmates,
                        with real experience
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span>
                        He saved $22,000+ in tuition, housing, and living costs
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-surface border border-blue-400/10 p-6 md:p-8 h-full">
                  <h3 className="font-display text-xl text-blue-400 mb-4">
                    If the gap year doesn&apos;t go as planned
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-blue-400 shrink-0">→</span>
                      <span>
                        Ajani re-enrolls with his credits intact — right where
                        he left off
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 shrink-0">→</span>
                      <span>
                        He returns with real-world experience that makes his
                        final year more valuable
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 shrink-0">→</span>
                      <span>
                        He finishes the degree with more clarity about what he
                        wants from it
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 shrink-0">→</span>
                      <span>
                        He still gained skills, contacts, and perspective that
                        classmates didn&apos;t get
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="bg-surface border border-white/5 p-6 md:p-8 mb-20">
                <h3 className="font-display text-xl text-text mb-3">
                  The numbers, plainly
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <p className="font-mono text-3xl text-accent tabular-nums mb-1">
                      $0
                    </p>
                    <p className="text-text-secondary text-sm">
                      Cost if he takes the gap year and it doesn&apos;t work out
                      (he re-enrolls)
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-3xl text-accent tabular-nums mb-1">
                      $22K+
                    </p>
                    <p className="text-text-secondary text-sm">
                      Cost of Year 5 regardless of outcome (tuition + housing +
                      living)
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-3xl text-emerald-400 tabular-nums mb-1">
                      $72K+
                    </p>
                    <p className="text-text-secondary text-sm">
                      Potential earnings during a gap year with freelance
                      development work
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Daily Structure ── */}
            <ScrollReveal>
              <div className="bg-surface border border-white/5 p-6 md:p-8 mb-20">
                <h3 className="font-display text-2xl text-text mb-6">
                  A Typical Day
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  This is not unstructured time. Here is what a weekday looks
                  like during the gap year.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      time: "8:00 AM",
                      activity: "Morning review — plan the day's build goals",
                    },
                    {
                      time: "8:30 AM – 12:30 PM",
                      activity:
                        "Deep work block — building projects, writing code, shipping features",
                    },
                    {
                      time: "12:30 PM",
                      activity: "Lunch break",
                    },
                    {
                      time: "1:30 PM – 3:30 PM",
                      activity:
                        "Learning block — new tools, tutorials, documentation, AI tooling practice",
                    },
                    {
                      time: "3:30 PM – 5:30 PM",
                      activity:
                        "Client work / freelance — applying skills for income",
                    },
                    {
                      time: "5:30 PM – 6:30 PM",
                      activity:
                        "Public building — writing about what he learned, sharing progress, networking",
                    },
                    {
                      time: "Evening",
                      activity:
                        "Free time — rest, hobbies, social life. Work-life balance is built in.",
                    },
                  ].map((slot, i) => (
                    <div
                      key={i}
                      className="flex gap-4 py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="font-mono text-xs text-text-secondary w-36 shrink-0 tabular-nums pt-0.5">
                        {slot.time}
                      </span>
                      <span className="text-text text-sm leading-relaxed">
                        {slot.activity}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-text-secondary/60 text-xs">
                  8 hours of focused work per day, 5 days a week. More
                  structured than a typical semester course load.
                </p>
              </div>
            </ScrollReveal>

            {/* ── Closing ── */}
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1] mb-6"
                >
                  This is not reckless.
                  <br />
                  This is <span className="text-emerald-400">calculated</span>.
                </motion.h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Ajani is not asking to drop out. He is asking for 12 months to
                  prove — with measurable results, at every checkpoint — that
                  the path he wants to take is real.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  The degree will wait. This moment won&apos;t.
                </p>
              </div>
            </ScrollReveal>

            {/* ── Nav Links ── */}
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/roi"
                  className="group inline-flex items-center justify-center gap-3 border border-white/10 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary transition-all duration-300 hover:border-white/20 hover:text-text"
                >
                  See the full ROI breakdown
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/now"
                  className="group inline-flex items-center justify-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10"
                >
                  See the next steps
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
