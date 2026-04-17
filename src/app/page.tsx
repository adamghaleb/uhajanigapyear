"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const fadeSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "easeOut" as const,
      delay: 1.8,
    },
  },
};

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-bg px-6 py-12 sm:px-12 md:px-20 lg:px-28">
      {/* Grain / texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Top — from line */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary"
        >
          From Adam, to Ajani
        </motion.p>
      </motion.div>

      {/* Center — name + thesis */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-8 md:gap-10"
      >
        {/* The name — massive, asymmetric */}
        <div className="flex flex-col">
          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl leading-[0.88] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Ajani
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl leading-[0.88] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-9xl md:ml-[12vw]"
          >
            Quibuyen
          </motion.h1>
        </div>

        {/* Thin rule */}
        <motion.div
          variants={fadeUp}
          className="h-px w-24 bg-accent md:ml-[12vw]"
        />

        {/* Thesis */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl md:ml-[12vw] md:text-2xl"
        >
          The next year of your life matters more
          <br className="hidden sm:block" /> than the last four combined.
          <br />
          <span className="text-text">This is why.</span>
        </motion.p>
      </motion.div>

      {/* Bottom — CTA + scroll indicator */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between"
      >
        {/* CTA */}
        <motion.div variants={fadeUp}>
          <Link
            href="/roundtable"
            className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:tracking-[0.3em]"
          >
            Enter the conversation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>

        {/* Scroll / enter indicator */}
        <motion.div
          variants={fadeSlow}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-text-secondary/60">
            Scroll or enter
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-gradient-to-b from-text-secondary/60 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Background accent glow — very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />
    </main>
  );
}
