"use client";

import { ButtonLink } from "@/components/ui/button";
import { LiquidShaderTwist } from "@/components/liquid-shader-twist";
import { Rocket, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-background text-white"
    >
      {/* Full-bleed liquid shader background, fold form */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <LiquidShaderTwist className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-32 lg:py-40">
        <span className="font-display inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 sm:text-sm">
          <Sparkles size={14} className="text-violet" />
          Modern software solutions
        </span>

        <h1 className="mt-8 text-4xl font-bold leading-[1.1] sm:text-6xl sm:leading-[1.05] lg:text-7xl">
          <span className="text-[#ddd6fe]">Revolutionizing</span>
          <br />
          <span className="gradient-text">Digital Experiences</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md px-2 text-base leading-relaxed text-[#c4b5fd]/70 sm:text-lg">
          We craft extraordinary software solutions that transform schools
          into digital powerhouses and businesses into market leaders.
          Experience the future of technology today.
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
  );
}
