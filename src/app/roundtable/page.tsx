"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import Speaker from "@/components/Speaker";

export default function RoundtablePage() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="min-h-screen bg-bg pt-24 pb-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <header className="mb-24 md:mb-32">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                  A conversation
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text leading-[0.9] mb-8">
                  The
                  <br />
                  Roundtable
                </h1>
                <p className="font-sans text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
                  Three minds. One question. Whether Ajani Quibuyen should spend
                  his next year finishing a degree or doing something that
                  terrifies him.
                </p>
              </header>
            </ScrollReveal>

            {/* Stage direction */}
            <ScrollReveal>
              <div className="text-center mb-20">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary/50">
                  — transcript begins —
                </p>
              </div>
            </ScrollReveal>

            {/* The Dialogue */}

            <Speaker name="jobs">
              Let me ask a question that no one around Ajani is asking. Not his
              parents. Not his friends. Not his advisors. What is this degree
              costing him? Not in tuition. In time. In the version of himself
              he&apos;s not building while he sits in lectures designed for a
              world that no longer exists.
            </Speaker>

            <Speaker name="karpathy">
              It turns out that&apos;s a quantifiable thing. In 2019, a computer
              science degree gave you roughly a seven-year head start on someone
              self-taught. By 2023 it was maybe three years. Right now, in 2026,
              the gap has inverted. The people shipping the most interesting
              software in the world are not in classrooms. They are
              pair-programming with AI agents, building production systems
              before lunch, and iterating at a speed that makes a semester look
              like a geological epoch.
            </Speaker>

            <Speaker name="fadi">
              Ajani, real talk. You know what I think about when I hear
              &quot;just one more year&quot;? I think about when I used to open
              FL Studio and spend six hours tweaking a hi-hat pattern that no
              one would ever hear. Not because it mattered. Because I&apos;d
              already spent four hours on it and couldn&apos;t stop. That&apos;s
              not discipline. That&apos;s a trap wearing discipline&apos;s
              clothes.
            </Speaker>

            <Speaker name="jobs">
              The trap has a name. It&apos;s the sunk cost fallacy. And it is
              the single most expensive cognitive error a young person can make.
              Because the currency isn&apos;t money. It&apos;s your twenties.
              One year in your twenties — with no mortgage, no kids, no
              obligations carved in stone — that year is not twelve months. It
              is an entire life compressed into a window that closes faster than
              you think.
            </Speaker>

            <Speaker name="karpathy">
              I want to be precise about what&apos;s happening right now in
              technology, because I think Ajani might not see the full picture
              from inside a university. The tools available today — AI coding
              assistants, autonomous agents, models that can reason through
              multi-step problems — they are not incremental improvements. They
              represent a phase transition. And the people who learn to work
              with them now, who build the muscle memory of human-AI
              collaboration, they will be operating at a fundamentally different
              level than people who encounter these tools in two or three years.
              The learning curve is steepest right now. That is when it matters
              most.
            </Speaker>

            <Speaker name="fadi">
              It&apos;s like — imagine you&apos;re in a Photoshop class and
              someone hands you the pen tool in 1998. That&apos;s what this
              moment is. Except the pen tool is an AI agent that can write,
              debug, and deploy code while you sleep. And the class? The class
              is still teaching you how to use the magic wand.
            </Speaker>

            <Speaker name="jobs">
              When I dropped out of Reed, people said I was throwing away my
              future. My parents were terrified. And I was terrified. But here
              is what I learned — the fear of leaving is almost always louder
              than the reality of leaving. Because the fear is imaginary and the
              reality is that you wake up the next morning and you still exist.
              Except now you have time. You have that thing everyone says they
              want and no one has the courage to take.
            </Speaker>

            <Speaker name="karpathy">
              There is an interesting analogy from machine learning. When you
              train a neural network, there is a concept called the learning
              rate. Too low and the model barely moves, stuck in a local
              minimum, never finding the global optimum. Too high and it
              oscillates wildly. But there is a critical window where the
              learning rate is just right, and the model makes enormous leaps in
              capability. Ajani is in that window right now. His twenties. Low
              obligations. High neuroplasticity. Maximum surface area for
              compound growth. Spending that window in a lecture hall is like
              setting the learning rate to zero.
            </Speaker>

            <Speaker name="fadi">
              And here&apos;s the thing nobody says out loud. The voice telling
              you to finish? That&apos;s not your voice. Think about it. When
              did you decide a five-year degree was the path? Was it a decision
              or was it an inheritance? Something your parents assumed, your
              high school counselor reinforced, your friends reflected back at
              you until it felt like your own thought. That&apos;s not
              conviction. That&apos;s consensus dressed up as identity.
            </Speaker>

            <Speaker name="jobs">
              Your time is limited. Don&apos;t waste it living someone
              else&apos;s life. Don&apos;t be trapped by dogma — which is living
              with the results of other people&apos;s thinking. I said that
              twenty years ago and it has only become more true. The dogma now
              is &quot;finish the degree.&quot; The dogma is &quot;be
              practical.&quot; The dogma is &quot;what will you tell
              people?&quot; You tell them: I chose.
            </Speaker>

            <Speaker name="karpathy">
              Let me give you the data point that keeps me up at night. I have
              watched — personally watched — the gap between people who use AI
              development tools daily and people who don&apos;t go from a
              productivity difference of maybe 2x in 2024 to something closer to
              20x in 2026. That is not hyperbole. I am talking about individuals
              who ship entire applications in a weekend that would have taken a
              team of five engineers a quarter to build three years ago. And the
              gap is accelerating. Every month Ajani spends not building that
              muscle is a month the distance grows.
            </Speaker>

            <Speaker name="fadi">
              I shipped forty projects last year. Not because I&apos;m a genius.
              Because I built the right architecture — the right tools, the
              right workflow, the right relationship with AI. It&apos;s not
              about grinding harder. It&apos;s about setting up the system so
              the work flows through you instead of against you. A degree
              doesn&apos;t teach you that. It can&apos;t. The institution is
              optimized for credentialing, not for the actual shape of building
              things in 2026.
            </Speaker>

            <Speaker name="jobs">
              I want to talk about the asymmetry here, because I think it&apos;s
              the thing Ajani hasn&apos;t let himself see. If he takes a gap
              year and it doesn&apos;t work out — what happens? He goes back. He
              finishes the degree twelve months later. He has lost nothing
              except the illusion that the timeline mattered. But if he stays
              and finishes, and realizes in three years that the degree gave him
              nothing he couldn&apos;t have gotten faster on his own — he has
              lost the one year where the cost of experimentation was nearly
              zero.
            </Speaker>

            <Speaker name="karpathy">
              The asymmetry is even more extreme than that. It turns out that in
              rapidly evolving fields — and AI-assisted software development is
              the most rapidly evolving field in human history — a year of
              hands-on experience during the inflection point is worth more than
              a decade of experience after the curve flattens. This is not a
              linear trade. The year Ajani would spend finishing his degree is
              not equivalent to a year he could take later. It is a
              fundamentally different year. The opportunity cost compounds.
            </Speaker>

            <Speaker name="fadi">
              Let me put it another way. Imagine two parallel universes. In one,
              Ajani finishes Year 5. Gets the diploma. Starts looking for work.
              He&apos;s got a credential that says he knows things from 2021
              through 2026, but the world has moved so far past what that
              credential represents that it&apos;s basically a receipt for a
              meal he already ate. In the other universe, Ajani takes a year.
              Builds real things. Ships them. Learns the tools that are
              rewriting every industry. Comes back — if he comes back — with a
              portfolio that speaks louder than any diploma. Which Ajani is
              better off in 2028?
            </Speaker>

            <Speaker name="jobs">
              The diploma is a receipt. I love that. Because that is exactly
              what it is. It is proof that you paid. Not proof that you learned.
              Not proof that you can build. Not proof that you can think. It is
              a receipt. And the world is slowly — then very quickly — stopping
              accepting receipts. They want to see the work.
            </Speaker>

            <Speaker name="karpathy">
              I should mention something about the credentialing collapse,
              because I think it is relevant. When I was at Stanford, the degree
              mattered. It opened doors. It signaled capability. But I have been
              watching hiring patterns very carefully, and something has shifted
              in the last two years. The most interesting companies — the ones
              building the future — they are not looking at degrees. They are
              looking at GitHub profiles. They are looking at shipped products.
              They are looking at whether you can sit down with an AI coding
              tool and build something real in a day. A degree does not signal
              that. A portfolio does.
            </Speaker>

            <Speaker name="fadi">
              Ajani, I know the fear. I know it because I feel a version of it
              every time I start something new. There&apos;s this moment where
              the voice says &quot;what if it doesn&apos;t work?&quot; And you
              know what I&apos;ve learned? That voice is never mine. It&apos;s
              my dad&apos;s voice. It&apos;s my teacher&apos;s voice. It&apos;s
              the voice of everyone who ever chose the safe thing and needs me
              to choose it too so they don&apos;t have to feel the weight of
              their own unchosen life. You have to learn to hear whose voice is
              actually speaking when you think you&apos;re thinking.
            </Speaker>

            <Speaker name="jobs">
              That is the entire game. Distinguishing your voice from the
              chorus. And the chorus is loud. The chorus has been rehearsing
              since you were five years old. The chorus says: be safe, be
              practical, be normal. But here is what the chorus never tells you
              — normal is just the average of everyone else&apos;s fear. And if
              you live by it, you will arrive at the end of your life having
              lived a perfectly average one. Is that what Ajani wants? A
              perfectly average life?
            </Speaker>

            <Speaker name="karpathy">
              I want to address the practical objection, because I think
              it&apos;s valid and it deserves a real answer. The concern is:
              what if Ajani takes a year off and it amounts to nothing? He sits
              at home, plays video games, loses momentum. That is a real risk.
              But the answer is not to stay in school. The answer is to have a
              plan. A structured gap year where he ships one project per month.
              Learns one new tool per week. Builds a portfolio that does not
              exist yet. The structure does not come from an institution. It
              comes from intention.
            </Speaker>

            <Speaker name="fadi">
              That&apos;s exactly right. Architecture over discipline. You
              don&apos;t need willpower if you build the right environment. I
              don&apos;t wake up motivated every day — are you kidding? Some
              days I want to stay in bed until noon. But the system I built
              catches me. The tools are open, the projects are alive, the
              momentum is already there before I make a decision. That&apos;s
              what a gap year gives you — the space to build an architecture
              that a classroom never could.
            </Speaker>

            <Speaker name="jobs">
              A classroom is someone else&apos;s architecture. Someone
              else&apos;s priorities. Someone else&apos;s timeline. And Ajani
              has been living inside it for four years. Four years. Does he even
              remember what his own priorities feel like? Does he know what he
              would build if no one was grading it?
            </Speaker>

            <Speaker name="karpathy">
              There is one more thing I want to say, and it is perhaps the most
              important. The skills Ajani would develop in a structured gap year
              — working with AI tools, shipping products, building in public,
              learning to learn autonomously — these are not niche skills. They
              are the new literacy. In five years, the ability to collaborate
              with AI systems will be as fundamental as the ability to use a
              computer was in 2000. Ajani has the chance to become fluent now,
              while most people are still learning the alphabet. That head start
              is not a nice-to-have. In a winner-take-most economy, it is
              everything.
            </Speaker>

            <Speaker name="fadi">
              So here&apos;s the real question, Ajani. Not &quot;should I finish
              the degree.&quot; That&apos;s the wrong frame. The question is:
              what are you becoming while you sit there? Are you becoming the
              person you want to be, or are you becoming the person the system
              designed you to be? Because those are two very different people.
              And you&apos;re running out of time to choose.
            </Speaker>

            <Speaker name="jobs">
              Not because life is short. Life is not short. But because the
              window is. The window where you have nothing to lose and
              everything to discover — that window is closing. Not in ten years.
              Not in five. Now. Every semester you spend finishing someone
              else&apos;s checklist is a semester you didn&apos;t spend finding
              out what happens when you trust yourself.
            </Speaker>

            <Speaker name="karpathy">
              And the beautiful thing about this bet — and it is a bet — is that
              the downside is capped and the upside is unbounded. Worst case:
              Ajani goes back in twelve months, finishes the degree, and has a
              year of real-world experience that makes the final year trivially
              easy. Best case: he never goes back because he doesn&apos;t need
              to. He built something. He became someone. The degree becomes
              irrelevant not because he rejected it, but because he outgrew it.
            </Speaker>

            <Speaker name="fadi">
              That&apos;s the move, Ajani. It&apos;s not dropping out. It&apos;s
              not giving up. It&apos;s an experiment. Twelve months. One year
              where you answer to nobody but yourself. Where you build the
              things you&apos;ve been thinking about building while you sit in
              class pretending to pay attention. Where you find out whether the
              voice telling you to stay is wisdom or just fear with a good
              vocabulary. Take the year. The degree will still be there. But
              this version of you — the hungry one, the curious one, the one who
              hasn&apos;t been beaten into compliance yet — that one has an
              expiration date. And it&apos;s closer than you think.
            </Speaker>

            {/* Stage direction — end */}
            <ScrollReveal>
              <div className="text-center mt-20 mb-24">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary/50">
                  — end of transcript —
                </p>
              </div>
            </ScrollReveal>

            {/* Continue CTA */}
            <ScrollReveal>
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="/sunk-cost"
                  className="group inline-flex items-center gap-3 font-mono text-sm tracking-[0.15em] uppercase text-accent hover:text-text transition-colors duration-300"
                >
                  <span>Continue: The Sunk Cost</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
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
