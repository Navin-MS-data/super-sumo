"use client";

import { useEffect, useRef } from "react";
import {
  Bus,
  BookOpen,
  GraduationCap,
  Hotel,
  type LucideIcon,
} from "lucide-react";
import type { gsap } from "gsap";

type Tone = "violet" | "ice" | "indigo" | "obsidian" | "lavender";

type Stat = {
  value: string;
  label: string;
};

type Product = {
  index: string;
  title: string;
  lede: string;
  body: string;
  icon: LucideIcon;
  tone: Tone;
  tags?: string[];
  stats?: Stat[];
  ctaLabel?: string;
};

const PRODUCTS: Product[] = [
  {
    index: "01",
    title: "School ERP",
    lede: "Complete Educational Ecosystem",
    body: "Revolutionary school management platform that transforms administrative complexity into seamless digital experiences.",
    icon: GraduationCap,
    tone: "violet",
    tags: [
      "AI-Powered Analytics",
      "Real-time Insights",
      "Parent Engagement",
      "Academic Excellence",
      "Digital Transformation",
    ],
    stats: [
      { value: "200+", label: "schools" },
      { value: "50K+", label: "students" },
      { value: "99%", label: "satisfaction" },
    ],
    ctaLabel: "Experience School ERP",
  },
  {
    index: "02",
    title: "Smart Bus",
    lede: "Next-Gen School Transportation",
    body: "AI-powered transportation management with real-time tracking, predictive maintenance, and safety-first design.",
    icon: Bus,
    tone: "ice",
    tags: [
      "GPS Precision",
      "AI Route Optimization",
      "Safety Protocols",
      "Parent Peace of Mind",
      "Real-time Updates",
    ],
    stats: [
      { value: "1000+", label: "buses" },
      { value: "5K+", label: "routes" },
      { value: "100%", label: "safety" },
    ],
    ctaLabel: "Experience Smart Bus",
  },
  {
    index: "03",
    title: "Sumo Kids",
    lede: "Future of Child Learning",
    body: "Immersive learning experiences powered by AI, gamification, and adaptive learning technologies.",
    icon: BookOpen,
    tone: "indigo",
    tags: [
      "AI Adaptive Learning",
      "Immersive Content",
      "Progress Intelligence",
      "Parent Partnership",
      "Joy in Learning",
    ],
    stats: [
      { value: "25K+", label: "children" },
      { value: "10K+", label: "lessons" },
      { value: "95%", label: "engagement" },
    ],
    ctaLabel: "Experience Sumo Kids",
  },
  {
    index: "04",
    title: "Book Sumo",
    lede: "Hotel Booking & Management Software",
    body: "Comprehensive hotel management platform for walk-ins, advance bookings, and real-time room status tracking with detailed guest analytics.",
    icon: Hotel,
    tone: "obsidian",
    tags: [
      "Room Status Management",
      "Guest History Tracking",
      "Booking Intelligence",
      "Real-time Analytics",
      "Contact Management",
    ],
    stats: [
      { value: "150+", label: "hotels" },
      { value: "25K+", label: "bookings" },
      { value: "98%", label: "efficiency" },
    ],
    ctaLabel: "Experience Book Sumo",
  },
];

const TONE_CLASSES: Record<Tone, string> = {
  violet: "bg-gradient-to-br from-[#a78bfa] via-violet to-indigo text-white",
  ice: "bg-gradient-to-br from-ice to-white text-obsidian",
  indigo: "bg-gradient-to-br from-indigo via-[#4338ca] to-obsidian text-white",
  obsidian:
    "bg-gradient-to-br from-surface-raised to-black text-white border border-white/10",
  lavender: "bg-gradient-to-br from-[#ddd6fe] to-[#c4b5fd] text-obsidian",
};

const TONE_MEDIA_CLASSES: Record<Tone, string> = {
  violet: "bg-white/15 text-white",
  ice: "bg-obsidian/5 text-obsidian",
  indigo: "bg-white/15 text-white",
  obsidian: "bg-white/10 text-white",
  lavender: "bg-white/40 text-obsidian",
};

const PEEK = 42;
const SCALE_STEP = 0.045;

function stackPose(index: number) {
  return {
    y: index * PEEK,
    scale: 1 - index * SCALE_STEP,
  };
}

export function ProductStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    let cancelled = false;

    async function init() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const cards = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (cards.length === 0) return;

      ctx = gsap.context(() => {
        cards.forEach((card, i) => {
          gsap.set(card, {
            zIndex: cards.length - i,
            y: window.innerHeight * 0.55 + i * PEEK,
            scale: stackPose(i).scale * 0.92,
            transformOrigin: "50% 0%",
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${cards.length * window.innerHeight}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          tl.to(
            card,
            { ...stackPose(i), ease: "power3.out", duration: 1.35 },
            i * 0.06
          );
        });

        tl.to({}, { duration: 0.35 });

        const flyAt = tl.duration();
        const flying = cards.slice(0, -1);

        flying.forEach((card, i) => {
          const time = flyAt + i;
          const behind = cards.slice(i + 1);

          tl.to(
            card,
            {
              y: -window.innerHeight * 1.15,
              rotate: -18,
              scale: 0.94,
              ease: "none",
              duration: 1,
            },
            time
          );

          tl.to(
            behind,
            {
              y: (index: number) => stackPose(index).y,
              scale: (index: number) => stackPose(index).scale,
              ease: "none",
              duration: 1,
            },
            time
          );
        });

        tl.to({}, { duration: 0.4 });
      }, sectionRef);

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }

    const cleanupPromise = init();

    return () => {
      cancelled = true;
      cleanupPromise.then((cleanup) => cleanup?.());
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-4 pb-12 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(139,92,246,0.22),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,_rgba(79,70,229,0.15),_transparent_50%)]" />

      <div className="relative z-10 mb-3 text-center sm:mb-4">
        <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
          The suite
        </span>
        <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
          Four products, one platform
        </h3>
      </div>

      <div
        ref={deckRef}
        className="relative z-10 my-auto w-full max-w-5xl"
        style={{ height: "min(66vh, 580px)" }}
      >
        {PRODUCTS.map((product, i) => (
          <div
            key={product.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`absolute inset-0 grid grid-cols-1 gap-6 rounded-3xl p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(0,0,0,0.2),0_18px_50px_rgba(0,0,0,0.35)] will-change-transform sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 ${TONE_CLASSES[product.tone]}`}
          >
            <div className="flex min-w-0 flex-col overflow-y-auto">
              <div className="mb-2 flex items-start justify-between gap-4">
                <h4 className="font-display text-3xl font-bold sm:text-5xl">
                  {product.title}
                </h4>
                <span className="font-display shrink-0 text-2xl opacity-35 sm:text-4xl">
                  {product.index}
                </span>
              </div>
              <p className="max-w-[28ch] text-sm opacity-75 sm:text-base">
                {product.lede}
              </p>
              <p className="my-4 max-w-[42ch] text-sm leading-relaxed opacity-85">
                {product.body}
              </p>

              {product.tags && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${TONE_MEDIA_CLASSES[product.tone]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {product.stats && (
                <div className="mb-4 flex gap-6">
                  {product.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-xl font-bold sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="text-xs opacity-70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-obsidian/90 py-2 pl-4 pr-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                {product.ctaLabel ?? "Discover our approach"}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-violet text-white">
                  →
                </span>
              </a>
            </div>

            <div className="hidden items-center justify-center rounded-2xl sm:flex">
              <div
                className={`flex h-full w-full items-center justify-center rounded-2xl ${TONE_MEDIA_CLASSES[product.tone]}`}
              >
                <product.icon size={96} strokeWidth={1.25} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
