"use client";

import ScrollReveal from "./ScrollReveal";

type SpeakerName = "jobs" | "karpathy" | "fadi";

interface SpeakerProps {
  name: SpeakerName;
  children: string;
}

const speakerConfig = {
  jobs: {
    label: "Steve Jobs",
    color: "text-accent",
    borderColor: "border-accent/30",
    style: "font-display text-2xl md:text-3xl leading-snug italic",
  },
  karpathy: {
    label: "Andrej Karpathy",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    style: "font-sans text-lg md:text-xl leading-relaxed",
  },
  fadi: {
    label: "Adam Fadi",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/30",
    style: "font-sans text-lg md:text-xl leading-relaxed",
  },
};

export default function Speaker({ name, children }: SpeakerProps) {
  const config = speakerConfig[name];

  return (
    <ScrollReveal>
      <div
        className={`border-l-2 ${config.borderColor} pl-6 md:pl-10 py-4 mb-12`}
      >
        <span
          className={`block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${config.color}`}
        >
          {config.label}
        </span>
        <p className={config.style}>{children}</p>
      </div>
    </ScrollReveal>
  );
}
