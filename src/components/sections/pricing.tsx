"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { ButtonLink } from "@/components/ui/button";
import { BarChart3, Bus, CheckCircle2, GraduationCap } from "lucide-react";

const PLANS = [
  {
    name: "School ERP",
    icon: GraduationCap,
    description: "For schools managing admissions, academics & attendance.",
    featured: false,
    accent: "#4f46e5",
    features: [
      "Admissions & academics",
      "Fee & finance management",
      "Parent & staff portals",
      "Dedicated onboarding",
    ],
  },
  {
    name: "Sumo360°",
    icon: BarChart3,
    description: "For organizations needing staff, attendance & finance BI.",
    featured: true,
    accent: "#8b5cf6",
    features: [
      "Staff management & attendance",
      "Financial control",
      "Business analytics",
      "Priority support",
    ],
  },
  {
    name: "Smart Bus / Book Sumo / Sumo Kids",
    icon: Bus,
    description: "For transportation, hospitality, or early-learning needs.",
    featured: false,
    accent: "#6d28d9",
    features: [
      "Live tracking or bookings",
      "Adaptive learning tools",
      "Custom module selection",
      "24/7 support",
    ],
  },
];

const cardSpring = { type: "spring", bounce: 0.2, duration: 0.4 } as const;

export function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 border-y border-border bg-surface"
    >
      <div className="gradient-divider absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,_rgba(139,92,246,0.13),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Pricing built
            <span className="gradient-text"> around your organization</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            Every school, fleet, hotel, and business runs differently — so
            we scope pricing to your product mix and scale. Reach out for a
            custom quote.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const isDimmed = hovered !== null && hovered !== i;
            return (
              <motion.div
                key={plan.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  scale: isDimmed ? 0.97 : hovered === i ? 1.02 : 1,
                  opacity: isDimmed ? 0.55 : 1,
                }}
                transition={cardSpring}
                className="relative"
              >
                {/* Rotating conic glow, sits behind the card */}
                <motion.div
                  aria-hidden
                  className="absolute -inset-2 -z-10 rounded-[36px] blur-2xl"
                  style={{
                    background: `conic-gradient(from 0deg, ${plan.accent}66, transparent 40%, ${plan.accent}66 100%)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                />

                <div
                  className="liquid-glass relative flex h-full flex-col overflow-hidden rounded-[28px] p-7"
                  style={{
                    background: `linear-gradient(160deg, ${plan.accent}40 0%, ${plan.accent}0d 45%, rgba(255,255,255,0.03) 100%)`,
                  }}
                >
                  {plan.featured && (
                    <span className="w-fit rounded-full bg-white/15 px-3 py-1 font-display text-xs font-medium uppercase tracking-wide text-white">
                      Most requested
                    </span>
                  )}

                  <div
                    className={clsx(
                      "flex h-12 w-12 items-center justify-center rounded-2xl text-white",
                      plan.featured ? "mt-4" : "mt-0"
                    )}
                    style={{ background: plan.accent }}
                  >
                    <plan.icon size={22} />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {plan.description}
                  </p>

                  <p className="mt-6 font-display text-4xl font-bold text-white">
                    Custom
                  </p>

                  <ul className="mt-8 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/85"
                      >
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-violet"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href="#contact"
                    className="mt-8 justify-center !bg-white !text-obsidian shadow-none hover:!bg-white/90"
                  >
                    Request a Quote
                  </ButtonLink>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-foreground-muted">
          Not sure which product fits?{" "}
          <a href="#contact" className="font-medium text-violet hover:underline">
            Talk to our team
          </a>{" "}
          — we&apos;ll help you scope the right fit.
        </p>
      </div>
    </section>
  );
}
