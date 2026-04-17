"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

interface CurriculumItem {
  number: string;
  title: string;
  year5: string;
  gapYear: string;
}

const curriculum: CurriculumItem[] = [
  {
    number: "01",
    title: "AI Tooling",
    year5:
      "One elective on machine learning. A professor who last shipped code in 2014. Group projects where the smartest tool is Google Docs.",
    gapYear:
      "AI coding tools, agents, the new literacy. The people who learn this now compound. The people who wait get left behind. This isn't a trend\u200A\u2014\u200Ait's the new floor.",
  },
  {
    number: "02",
    title: "Taste",
    year5:
      "Rubrics. Peer reviews from people who've never shipped anything. Grades that reward compliance, not craft. Four years and you still can't tell good from great.",
    gapYear:
      "You can't teach taste in a lecture hall. Taste is built by shipping things, seeing what works, iterating with real users. A portfolio of 10 shipped products teaches more about taste than 4 years of theory.",
  },
  {
    number: "03",
    title: "Shipping",
    year5:
      "Submit to Gradescope. Wait for a grade. Never see a user. Never feel the panic of something breaking in production. Never learn to fix it at 2AM.",
    gapYear:
      "Deploying real things to real users. The gap between \u201CI know how to code\u201D and \u201CI've shipped something people use\u201D is a canyon. School teaches the first. Life teaches the second.",
  },
  {
    number: "04",
    title: "Building in Public",
    year5:
      "A GPA nobody will ever ask about. A transcript that proves attendance, not ability. Your best work locked behind a .edu login.",
    gapYear:
      "Reputation compounds faster than GPA. A Twitter thread with 10K impressions teaches more about communication than any paper. Your work = your resume.",
  },
  {
    number: "05",
    title: "Entrepreneurship",
    year5:
      "A business class taught by someone who never started one. Case studies about other people's risks. A capstone project that dies on presentation day.",
    gapYear:
      "The thing you actually want to do. If this is where you're headed, the fastest path isn't through year 5. It's through year 1 of your real life.",
  },
];

function CurriculumCard({
  item,
  index,
}: {
  item: CurriculumItem;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="group relative">
        {/* Number + Title header */}
        <div className="mb-6 flex items-baseline gap-4">
          <span className="font-mono text-xs tracking-widest text-accent/60">
            {item.number}
          </span>
          <h3 className="font-display text-2xl tracking-tight text-text sm:text-3xl md:text-4xl">
            {item.title}
          </h3>
        </div>

        {/* Two-column contrast */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-0">
          {/* Year 5 — dead side */}
          <div className="relative border border-white/[0.04] bg-white/[0.01] p-6 md:border-r-0 md:p-8">
            {/* Subtle diagonal strikethrough overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)",
              }}
            />
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary/40">
              What Year 5 Teaches
            </p>
            <p className="text-sm leading-relaxed text-text-secondary/50 md:text-base">
              {item.year5}
            </p>
          </div>

          {/* Gap Year — alive side */}
          <div className="relative border border-accent/20 bg-accent/[0.03] p-6 md:p-8">
            {/* Glow edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent"
            />
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70">
              What a Gap Year Teaches
            </p>
            <p className="text-sm leading-relaxed text-text md:text-base">
              {item.gapYear}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function TheGapPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      <PageTransition>
        <div className="relative px-6 pt-24 pb-20 sm:px-12 md:px-20 lg:px-28">
          {/* Grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />

          {/* Section Header */}
          <div className="relative z-10 mb-20 max-w-3xl md:mb-28">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                The Gap
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mb-6 font-display text-4xl leading-[0.95] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
                The Invisible
                <br />
                Curriculum
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-8 h-px w-16 bg-accent" />
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg md:text-xl">
                There are things that matter more than what&apos;s on the
                syllabus. Things no professor can grade because no classroom can
                contain them. Year 5 won&apos;t teach these. But the next 12
                months could.
              </p>
            </ScrollReveal>
          </div>

          {/* Legend bar */}
          <ScrollReveal>
            <div className="relative z-10 mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 border border-white/[0.08] bg-white/[0.02]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary/40">
                  Year 5
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 border border-accent/40 bg-accent/10" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/70">
                  Gap Year
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Curriculum Items */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-16">
            {curriculum.map((item, i) => (
              <CurriculumCard key={item.number} item={item} index={i} />
            ))}
          </div>

          {/* Summary statement */}
          <ScrollReveal>
            <div className="relative z-10 mt-24 border-t border-white/[0.06] pt-16 md:mt-32 md:pt-20">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.4em] text-text-secondary/40">
                  5 skills. 0 credits.
                </p>
                <p className="font-display text-2xl leading-snug tracking-tight text-text sm:text-3xl md:text-4xl">
                  The degree gives you a credential.
                  <br />
                  <span className="text-accent">
                    The gap year gives you the leverage to not need one.
                  </span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA to /permission */}
          <ScrollReveal>
            <div className="relative z-10 mt-16 flex justify-center md:mt-20">
              <Link
                href="/permission"
                className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:tracking-[0.3em]"
              >
                You have permission
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Background accent glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/3 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />
        </div>
      </PageTransition>
    </main>
  );
}
