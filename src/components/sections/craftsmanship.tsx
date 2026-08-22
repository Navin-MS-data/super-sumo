"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";

/**
 * Port of the Framer "Steps" component
 * (https://framer.com/m/Steps-ATjK3c.js) — a horizontal, numbered step
 * strip where clicking a number brings its card into focus. The original's
 * step-switching is driven by Framer's internal variant-state system
 * (useVariantState / activeVariantCallback), which only exists inside the
 * Framer runtime, so this reimplements the same interaction with
 * framer-motion: `layout` animations handle the card resizing smoothly,
 * and the description/tags crossfade in as a single block via
 * AnimatePresence instead of popping in abruptly.
 */

const CARDS = [
  {
    index: "01",
    title: "Web Applications",
    subtitle: "Next-Gen Digital Experiences",
    description:
      "Cutting-edge web applications built with modern frameworks, optimized for performance, and designed for the future.",
    tags: ["React", "Next.js", "TypeScript", "AI Integration"],
    tone: "from-[#4f46e5] via-[#6d28d9] to-[#1e1b4b]",
  },
  {
    index: "02",
    title: "Enterprise Solutions",
    subtitle: "Scalable Business Ecosystems",
    description:
      "Enterprise-grade platforms that grow with your business, featuring robust security and seamless integrations.",
    tags: ["Microservices", "Cloud Native", "Security First", "Global Scale"],
    tone: "from-[#8b5cf6] via-[#7c3aed] to-[#312e81]",
  },
  {
    index: "03",
    title: "Mobile Experiences",
    subtitle: "Cross-Platform Excellence",
    description:
      "Native-quality mobile applications that deliver exceptional user experiences across all devices and platforms.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    tone: "from-[#0ea5e9] via-[#4f46e5] to-[#1e1b4b]",
  },
];

const cardSpring = { type: "spring", bounce: 0.15, duration: 0.6 } as const;
const contentFade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: 0.35, ease: [0.44, 0, 0.56, 1] as const },
};

export function Craftsmanship() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="craftsmanship"
      className="relative scroll-mt-20 overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_50%_at_50%_0%,_rgba(139,92,246,0.16),_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            Custom Craftsmanship
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Bespoke software solutions
            <span className="gradient-text"> engineered for your unique vision</span>
          </h2>
        </div>

        {/* Cards row — the active step's card is enlarged and fully shown */}
        <div className="mt-16 flex flex-col items-stretch gap-6 lg:flex-row lg:items-end">
          {CARDS.map((card, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={card.title}
                type="button"
                onClick={() => setActive(i)}
                layout
                transition={cardSpring}
                className={clsx(
                  "relative overflow-hidden rounded-3xl bg-white/5 p-8 text-left text-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] sm:p-10",
                  isActive ? "flex-[2.2]" : "flex-1 opacity-70 hover:opacity-100"
                )}
              >
                {/* Gradient fill fades in/out on its own layer, instead of
                    snapping instantly on className swap, so the color
                    change stays in sync with the size animation. */}
                <motion.div
                  aria-hidden
                  className={clsx("pointer-events-none absolute inset-0 bg-gradient-to-br", card.tone)}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
                />

                <motion.div layout="position" className="relative flex items-start justify-between gap-6">
                  <div>
                    <p
                      className={clsx(
                        "font-display text-sm font-medium uppercase tracking-wide",
                        isActive ? "text-white/70" : "text-foreground-muted"
                      )}
                    >
                      {card.title}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                      {card.subtitle}
                    </h3>
                  </div>
                  <span className="font-display shrink-0 text-3xl opacity-25 sm:text-4xl">
                    {card.index}
                  </span>
                </motion.div>

                <AnimatePresence initial={false} mode="popLayout">
                  {isActive && (
                    <motion.div
                      key="content"
                      className="relative"
                      initial={contentFade.initial}
                      animate={contentFade.animate}
                      exit={contentFade.exit}
                      transition={contentFade.transition}
                    >
                      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                        {card.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Baseline with numbered step markers */}
        <div className="relative mt-12 flex items-center justify-center gap-16">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" />
          {CARDS.map((card, i) => {
            const isActive = i === active;
            return (
              <button
                key={card.index}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${card.title}`}
                className={clsx(
                  "font-display relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300",
                  isActive
                    ? "bg-violet text-white"
                    : "border border-border bg-background text-foreground-muted hover:text-foreground"
                )}
              >
                {card.index}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
