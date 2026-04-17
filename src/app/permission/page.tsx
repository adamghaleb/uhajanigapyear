"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const sectionDivider = (
  <div className="mx-auto my-16 h-px w-16 bg-accent/30 md:my-24" />
);

export default function PermissionPage() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="relative min-h-svh overflow-hidden bg-bg px-6 pt-24 pb-24 sm:px-12 md:px-20 lg:px-28">
          {/* Grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />

          {/* ─── HERO: THE MASSIVE OPENING STATEMENT ─── */}
          <section className="relative z-10 flex min-h-[70vh] flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary md:mb-8"
            >
              Permission Granted
            </motion.p>

            <div className="flex flex-col gap-3 md:gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-5xl leading-[0.9] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              >
                A gap year is <span className="text-accent">not</span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-5xl leading-[0.9] tracking-tight text-text sm:text-6xl md:text-7xl md:ml-[8vw] lg:text-8xl xl:text-9xl"
              >
                dropping out.
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="mt-10 h-px w-32 origin-left bg-accent md:mt-14 md:ml-[8vw]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-text-secondary md:ml-[8vw] md:text-xl"
            >
              The degree waits. The moment does not.
            </motion.p>
          </section>

          {sectionDivider}

          {/* ─── SECTION 1: THE REFRAME ─── */}
          <section className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                01 / The Reframe
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                A <span className="text-accent">low-risk</span> experiment
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                A gap year is not a leap of faith. It is a{" "}
                <span className="text-text">
                  calculated bet with asymmetric upside
                </span>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-10 rounded-sm border border-white/5 bg-surface p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      Worst case
                    </p>
                    <p className="text-lg leading-relaxed text-text">
                      You resume in 12 months with more clarity, more
                      conviction, and a better answer to{" "}
                      <span className="text-accent">
                        &ldquo;why am I here?&rdquo;
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      Best case
                    </p>
                    <p className="text-lg leading-relaxed text-text">
                      Your entire life{" "}
                      <span className="text-accent">redirects</span>. You find
                      the thing the degree was supposed to lead to — without
                      needing the degree.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/5 pt-6">
                  <p className="font-mono text-sm text-text-secondary">
                    The asymmetry is{" "}
                    <span className="text-accent font-medium">massive</span>.
                    You already know this.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {sectionDivider}

          {/* ─── SECTION 2: THE DEGREE WAITS ─── */}
          <section className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                02 / The Degree Waits
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                The door stays <span className="text-accent">open</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                Universities allow leaves of absence. The credits don&apos;t
                expire. The professors will still be there. The campus will
                still be there.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                But the window of being{" "}
                <span className="text-text">22 with zero obligations</span>? No
                mortgage. No dependents. No career to protect.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <motion.div
                className="mt-10 border-l-2 border-accent pl-6 md:pl-8"
                whileInView={{ borderColor: "var(--color-accent)" }}
                viewport={{ once: true }}
              >
                <p className="font-display text-2xl leading-snug text-text md:text-3xl">
                  That window <span className="text-accent">closes</span>.
                  <br />
                  And it doesn&apos;t reopen.
                </p>
              </motion.div>
            </ScrollReveal>
          </section>

          {sectionDivider}

          {/* ─── SECTION 3: ADDRESS THE CHORUS ─── */}
          <section className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                03 / The Chorus
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                Everyone has an <span className="text-accent">opinion</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 space-y-4">
                {[
                  { who: "Parents", say: '"Finish what you started."' },
                  { who: "Friends", say: '"Just one more year."' },
                  { who: "Society", say: '"Don\'t throw it away."' },
                ].map((voice, i) => (
                  <motion.div
                    key={voice.who}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-baseline gap-4 rounded-sm border border-white/5 bg-surface px-6 py-4 md:px-8"
                  >
                    <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {voice.who}
                    </span>
                    <span className="font-display text-lg text-text/70 italic md:text-xl">
                      {voice.say}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-10 text-lg leading-relaxed text-text-secondary md:text-xl">
                The chorus is loud. But the chorus is{" "}
                <span className="text-text">
                  pattern-matching on their lives
                </span>
                , not yours. They are protecting you from a risk that{" "}
                <span className="text-accent">doesn&apos;t exist</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                They finished because finishing was the right move for them, in
                their decade, with their options. You are not them. Your decade
                is different. Your options are different.
              </p>
            </ScrollReveal>
          </section>

          {sectionDivider}

          {/* ─── SECTION 4: IDENTITY MOLTING ─── */}
          <section className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                04 / Identity Molting
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                Shedding the skin
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                When{" "}
                <span className="text-text">
                  &ldquo;I&apos;m a student&rdquo;
                </span>{" "}
                has been your identity for{" "}
                <span className="text-accent">16+ years</span>, releasing it
                feels like dying.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                It&apos;s not dying.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col items-center py-8 md:py-12">
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center font-display text-4xl leading-tight tracking-tight text-text sm:text-5xl md:text-6xl"
                >
                  It&apos;s <span className="text-accent">molting</span>.
                </motion.p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <p className="text-center text-lg leading-relaxed text-text-secondary md:text-xl">
                The snake doesn&apos;t mourn the skin.
                <br />
                It was always going to outgrow it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <p className="mt-8 text-center text-lg leading-relaxed text-text-secondary md:text-xl">
                You&apos;re not losing who you are. You&apos;re making room for
                who you <span className="text-accent">become</span>.
              </p>
            </ScrollReveal>
          </section>

          {sectionDivider}

          {/* ─── SECTION 5: THE EXPERIMENT FRAME ─── */}
          <section className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                05 / The Experiment
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                12 months. <span className="text-accent">That&apos;s it.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                This is not a permanent decision. It is a{" "}
                <span className="text-text">12-month experiment</span>. You are
                not burning a bridge. You are walking across a drawbridge that
                you control.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                If it doesn&apos;t work — if the world outside the classroom has
                nothing for you — the degree is right where you left it. Same
                building. Same curriculum. Same finish line.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10 rounded-sm border border-accent/20 bg-accent/5 p-8 md:p-10">
                <p className="font-display text-xl leading-snug text-text md:text-2xl">
                  The only thing you lose is{" "}
                  <span className="text-accent">12 months</span> of a path you
                  already doubt.
                </p>
                <p className="mt-4 font-mono text-sm text-text-secondary">
                  And what you might gain is everything else.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {sectionDivider}

          {/* ─── CLOSING CTA ─── */}
          <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center py-12 text-center md:py-20">
            <ScrollReveal>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                One more thing
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                I wrote you a letter.
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
                Not an argument. Not a pitch. Just what I&apos;d say if we were
                sitting across from each other.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/letter"
                className="group mt-10 inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:tracking-[0.3em]"
              >
                Read the letter
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </ScrollReveal>
          </section>

          {/* Background accent glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/3 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />
        </main>
      </PageTransition>
    </>
  );
}
