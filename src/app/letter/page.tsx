"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const sectionBreak = (
  <div className="my-12 flex justify-start md:my-16">
    <div className="h-px w-12 bg-accent/20" />
  </div>
);

export default function LetterPage() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="relative min-h-svh overflow-hidden bg-bg px-6 pt-24 pb-32 sm:px-12 md:px-20 lg:px-28">
          {/* Grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />

          {/* ─── THE LETTER ─── */}
          <article className="relative z-10 mx-auto max-w-2xl">
            {/* Date stamp */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16 font-mono text-xs tracking-[0.3em] text-text-secondary/40 md:mb-20"
            >
              Written at 2:47 AM
            </motion.p>

            {/* Opening — "Ajani," */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-12 font-display text-5xl tracking-tight text-text sm:text-6xl md:mb-16 md:text-7xl"
            >
              Ajani,
            </motion.h1>

            {/* ─── PARAGRAPH GROUP 1: The opening salvo ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  I&apos;m not going to pretend this is casual. I built you a
                  whole website. That&apos;s not normal behavior. I know that.
                  But I also know that the things that actually matter in your
                  life rarely arrive in a normal package. They arrive at 3 AM as
                  a link from your friend with no context and a{" "}
                  <span className="text-text">&ldquo;just trust me&rdquo;</span>{" "}
                  attached.
                </p>
                <p>
                  So here it is. No preamble. No warm-up. I&apos;m going to tell
                  you something that I think you already know but haven&apos;t
                  let yourself say out loud yet. And I think the reason you
                  haven&apos;t said it is because everyone around you is so
                  confident about what you{" "}
                  <span className="text-accent">should</span> do that it feels
                  insane to disagree.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 2: Adam knows the feeling ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  I know what it feels like when everyone around you has the
                  same answer. &ldquo;Finish the degree.&rdquo;
                  &ldquo;You&apos;re so close.&rdquo; &ldquo;Just one more
                  year.&rdquo; And the thing is, they&apos;re not wrong from
                  where they&apos;re standing. From the outside, the math looks
                  simple: four years done, one year left, just push through.
                </p>
                <p>
                  But they&apos;re not inside your head. They don&apos;t feel
                  what you feel when you sit down to do the work and something
                  in you just <span className="text-text">refuses</span>. Not
                  because you&apos;re lazy — you&apos;re one of the least lazy
                  people I know. But because some part of you has already moved
                  on. Your body is in the classroom but your{" "}
                  <span className="text-accent">mind</span> left the building
                  months ago.
                </p>
                <p>
                  I know that feeling because I lived it. There was a version of
                  me that was supposed to take the conventional path. The
                  degree, the internship, the entry-level gig, the slow climb.
                  And for a while I tried. Not because I wanted to, but because
                  I didn&apos;t have the language for why it felt wrong.
                  Everyone said it was the smart move, and I didn&apos;t have a
                  counter argument — I just had this feeling in my gut like I
                  was wearing someone else&apos;s shoes.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 3: The divergence ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  The moment my path actually diverged wasn&apos;t dramatic. It
                  wasn&apos;t some movie scene where I threw my textbooks in the
                  air and walked into the sunset. It was quieter than that. It
                  was a Tuesday. I was supposed to be working on an assignment,
                  and instead I was deep in a project — real project, not school
                  project — and I realized I&apos;d been in flow for six hours.
                  No breaks. No forcing it. Six hours of the kind of work that
                  feels like play.
                </p>
                <p>
                  And then I looked at the assignment. Twenty minutes in and I
                  was already checking my phone. That&apos;s when it clicked.
                  Not as an intellectual argument but as a{" "}
                  <span className="text-text">felt thing</span>. The assignment
                  wasn&apos;t hard. The project wasn&apos;t easier. The
                  difference was that one of them was{" "}
                  <span className="text-accent">mine</span>.
                </p>
                <p>
                  Since then I&apos;ve built over forty projects. Zig, Swift,
                  Metal shaders, React, Next.js — stuff I never would&apos;ve
                  touched in a curriculum. I&apos;ve got a music career going.
                  I&apos;m playing a show in Tokyo this August. I run Everything
                  For Artists. None of this was on a syllabus. None of it would
                  have happened if I&apos;d kept wearing those shoes.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 4: Seeing something in Ajani ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  I&apos;m not telling you that to flex. I&apos;m telling you
                  because{" "}
                  <span className="text-text">
                    I see the exact same thing in you
                  </span>
                  . And I don&apos;t mean that in the generic &ldquo;you have
                  potential&rdquo; way that adults say when they don&apos;t know
                  what else to offer. I mean it specifically. I see the way your
                  brain works — the way you pick things up fast, the way you get
                  obsessed with the thing you&apos;re building, the way you
                  can&apos;t half-ass things when you care about them.
                </p>
                <p>
                  You know how in FL Studio, when a beat is almost right, you
                  can feel it? Like the kick pattern is there but the hi-hat
                  spacing is just slightly off, and even though nobody else in
                  the room hears it, it&apos;s driving you crazy? That&apos;s
                  what I&apos;m watching you do with your own life right now.
                  The big picture looks fine to everyone else. But you can hear
                  that{" "}
                  <span className="text-accent">something is off-beat</span>.
                </p>
                <p>
                  Most people don&apos;t have that. Most people go through their
                  whole lives with no sensitivity to their own rhythm. They do
                  what&apos;s expected, and it&apos;s fine, and they never
                  question it because they genuinely don&apos;t hear the
                  difference. You hear it. That&apos;s not a flaw. That&apos;s a{" "}
                  <span className="text-text">signal</span>.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 5: The ADHD angle ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  Here&apos;s something I don&apos;t talk about enough, and I
                  think it matters here. My brain doesn&apos;t work like the
                  system was designed for. ADHD. The whole apparatus of
                  traditional education — sit still, pay attention, follow the
                  linear path, delay gratification for four years and trust that
                  it&apos;ll pay off — that&apos;s not just hard for me.
                  It&apos;s{" "}
                  <span className="text-accent">structurally incompatible</span>{" "}
                  with how I process the world.
                </p>
                <p>
                  And I&apos;m not saying you have ADHD — that&apos;s not my
                  call. But I am saying that when your brain works differently
                  from the system, the system will tell you you&apos;re broken.
                  It&apos;ll tell you that you lack discipline. That you need to
                  try harder. That the problem is{" "}
                  <span className="text-text">you</span>.
                </p>
                <p>It&apos;s not you.</p>
                <p>
                  The thing I figured out — the thing that changed everything
                  for me — is that{" "}
                  <span className="text-text">
                    you don&apos;t need more willpower
                  </span>
                  . You need a better{" "}
                  <span className="text-accent">environment</span>. It&apos;s
                  like — you know how in Photoshop, you can work on the image
                  directly, or you can work with adjustment layers? The
                  traditional approach is &ldquo;fix yourself.&rdquo; Grind
                  harder. Push through. That&apos;s destructive editing. What
                  actually works is changing the{" "}
                  <span className="text-text">layer structure</span>. Change the
                  environment, the incentives, the feedback loops — and suddenly
                  the person who &ldquo;couldn&apos;t focus&rdquo; is in flow
                  for six hours straight.
                </p>
                <p>
                  Architecture over discipline. That&apos;s my whole philosophy.
                  And I watch you trying to discipline yourself into a system
                  that was never built for the way you think, and it&apos;s like
                  watching someone try to edit a RAW file in MS Paint.
                  You&apos;re not the problem.{" "}
                  <span className="text-accent">The tool is wrong.</span>
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 6: The asymmetry, personal ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  I want to talk about the math one more time, but personally
                  this time. Not the abstract version. The you-and-me version.
                </p>
                <p>
                  If you take the gap year and it doesn&apos;t work out —
                  genuinely doesn&apos;t work out, nothing clicks, you
                  don&apos;t find your thing — you go back. You finish the
                  degree. You graduate at 24 instead of 23. In the grand arc of
                  your life, that year is{" "}
                  <span className="text-text">a rounding error</span>. Nobody at
                  30 remembers whether they graduated at 23 or 24. Nobody at 40
                  even thinks about it.
                </p>
                <p>
                  But if it works? If you step out of the current and find
                  something real? Something that makes the alarm clock
                  irrelevant because you&apos;re already up? Then you just saved
                  yourself years — maybe decades — of doing the thing you were
                  supposed to do instead of the thing you were{" "}
                  <span className="text-accent">meant</span> to do. The downside
                  is a delay. The upside is a{" "}
                  <span className="text-text">completely different life</span>.
                </p>
                <p>
                  That&apos;s not a 50/50 bet. That&apos;s one of those trades
                  where even if you&apos;re wrong, you still learn more than you
                  would have staying. The worst gap year teaches you more about
                  yourself than the best fifth year of a degree you stopped
                  believing in.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 7: Pro-timing, not anti-education ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  And I want to be really clear about something because I know
                  how this can sound: I am not anti-education. Education is
                  incredible. Learning is one of the best things a human being
                  can do. But there&apos;s a difference between learning and{" "}
                  <span className="text-text">
                    performing compliance inside an institution
                  </span>
                  .
                </p>
                <p>
                  This isn&apos;t about being against school. It&apos;s about
                  being <span className="text-accent">for timing</span>. About
                  recognizing that the right thing at the wrong time is the
                  wrong thing. About the fact that you can always go back to the
                  degree but you can never go back to being 22 with this exact
                  window of freedom. This configuration of low obligations, high
                  energy, and a world that is moving so fast that the people who
                  step into it <span className="text-text">now</span> have an
                  advantage that compounds every single day.
                </p>
                <p>
                  There&apos;s a concept in programming — lazy evaluation. You
                  don&apos;t compute a value until you actually need it. The
                  degree is a value. You might need it. But you don&apos;t need
                  it <span className="text-accent">right now</span>. And
                  computing it right now has a cost — the cost of this window
                  closing while you&apos;re inside a lecture hall.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 8: The site itself ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  I want you to think about the fact that I made this. Not a
                  text. Not a phone call. A whole website, with multiple pages,
                  with animations, with a roundtable of thinkers I admire
                  arguing your case for you. I didn&apos;t do this because I
                  have spare time — I have less spare time than anyone I know. I
                  did this because I think this is one of those{" "}
                  <span className="text-text">fork-in-the-road</span> moments,
                  and I didn&apos;t want to be the friend who just said
                  &ldquo;yeah man, follow your heart&rdquo; and left it at that.
                </p>
                <p>
                  You deserve a real case. A structured argument. Something you
                  can sit with and come back to. Something that isn&apos;t just
                  vibes — because I know you. You don&apos;t make decisions on
                  vibes. You need to see the logic, feel the weight of it, turn
                  it over in your hands. So that&apos;s what this is.
                </p>
              </div>
            </ScrollReveal>

            {sectionBreak}

            {/* ─── PARAGRAPH GROUP 9: The closing ─── */}
            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  I&apos;m not going to tell you to take the gap year. I&apos;m
                  not your advisor and I&apos;m not your parent and this
                  isn&apos;t my life. But I am going to tell you this:
                </p>
              </div>
            </ScrollReveal>

            {/* The pull quote — the truth that sits in your chest */}
            <ScrollReveal delay={0.1}>
              <motion.div
                className="my-12 border-l-2 border-accent pl-6 md:my-16 md:pl-8"
                whileInView={{ borderColor: "var(--color-accent)" }}
                viewport={{ once: true }}
              >
                <p className="font-display text-2xl leading-snug tracking-tight text-text md:text-3xl">
                  The version of you that&apos;s supposed to exist hasn&apos;t
                  been built yet. And it will{" "}
                  <span className="text-accent">never</span> be built inside a
                  system that only knows how to grade the version of you it
                  expected.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                <p>
                  You don&apos;t owe the path anything. Not the time you already
                  put in, not the money already spent, not the expectations
                  already set. Those are{" "}
                  <span className="text-text">sunk costs</span>, and you know
                  what we do with sunk costs. We don&apos;t let them architect
                  our futures.
                </p>
                <p>
                  The world is not going to wait for you to finish a degree to
                  give you permission to become who you are. The world
                  doesn&apos;t care about your transcript. The world cares about
                  what you can <span className="text-accent">build</span>, what
                  you can <span className="text-accent">ship</span>, and whether
                  you had the courage to start when the timing was right.
                </p>
                <p>The timing is right.</p>
                <p>
                  I&apos;ll be here either way. Whatever you decide. But I
                  needed you to have this, so that whatever you choose,
                  it&apos;s a choice — not a default.
                </p>
              </div>
            </ScrollReveal>

            {/* ─── SIGN-OFF ─── */}
            <ScrollReveal delay={0.15}>
              <div className="mt-16 md:mt-20">
                <p className="font-display text-3xl tracking-tight text-accent md:text-4xl">
                  &mdash; Adam
                </p>
              </div>
            </ScrollReveal>

            {/* ─── LINK TO /NOW ─── */}
            <ScrollReveal delay={0.2}>
              <div className="mt-20 border-t border-white/5 pt-12 md:mt-28 md:pt-16">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary/40">
                  One more thing
                </p>
                <p className="mb-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                  If you want to see what the next 12 months could actually look
                  like — not abstract, but concrete — I mapped it out for you.
                </p>
                <Link
                  href="/now"
                  className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:tracking-[0.3em]"
                >
                  See the plan
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
          </article>

          {/* Background accent glow — subtle, centered on the letter */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[1000px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(ellipse, var(--color-accent) 0%, transparent 70%)",
            }}
          />
        </main>
      </PageTransition>
    </>
  );
}
