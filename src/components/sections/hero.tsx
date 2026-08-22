"use client";

import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/ui/button";
import { GradientBars } from "@/components/gradient-bars";
import { Rocket, Sparkles } from "lucide-react";

const STATS = [
  { value: "200+", label: "Schools on School ERP" },
  { value: "50K+", label: "Students served" },
  { value: "99%", label: "Satisfaction rate" },
  { value: "500+", label: "Organizations" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;

    // Target = where the cursor actually is; current = smoothed position we render.
    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;
    let raf = 0;

    function handleMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
    }

    function tick() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      spotlight!.style.background = `radial-gradient(600px circle at ${
        currentX * 100
      }% ${currentY * 100}%, rgba(139,92,246,0.16), transparent 65%)`;

      raf = requestAnimationFrame(tick);
    }

    section.addEventListener("mousemove", handleMove);
    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="relative scroll-mt-20 overflow-hidden bg-background text-white"
      >
        {/* Animated gradient bars background */}
        <GradientBars />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.35),_transparent_60%)]" />
        {/* Cursor-follow spotlight */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        />

        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center lg:py-40">
          <span className="font-display inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
            <Sparkles size={14} className="text-violet" />
            Modern software solutions
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-[1.05] sm:text-7xl">
            Experience
            <br />
            <span className="gradient-text">the Future</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Super Sumo pioneers the future of digital transformation with
            software that turns schools into digital powerhouses and
            businesses into market leaders — worldwide.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#contact">
              Get Started
              <Rocket size={16} />
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="secondary"
              className="border-white/20 text-white hover:border-violet hover:text-violet"
            >
              Explore Products
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border bg-surface">
        <div className="gradient-divider absolute inset-x-0 top-0" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-violet sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
