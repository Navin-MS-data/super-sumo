"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const barSpring = { type: "spring", bounce: 0.15, duration: 0.45 } as const;
const tapSpring = { type: "spring", bounce: 0.2, duration: 0.25 } as const;

// Liquid glass: a highly translucent, refractive pill — layered specular
// sheen + a soft violet tint pooling at the base + a thin bright top edge
// to sell the glass bevel — over a strong blur/saturate so it reads as
// glass bending the content behind it, not a flat tinted panel.
const glassStyle = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0.18) 100%), radial-gradient(120% 140% at 20% 120%, rgba(139,92,246,0.35), transparent 60%), rgba(10,10,16,0.32)",
  boxShadow:
    "inset 0 1.5px 0 rgba(255,255,255,0.55), inset 0 -1px 1px rgba(0,0,0,0.25), inset 1px 0 0 rgba(255,255,255,0.15), inset -1px 0 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.35), 0 12px 48px rgba(139,92,246,0.18)",
  backdropFilter: "blur(28px) saturate(200%) brightness(1.08) contrast(1.05)",
  WebkitBackdropFilter: "blur(28px) saturate(200%) brightness(1.08) contrast(1.05)",
};

export function LiquidGlassNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // Reference line sits just below the fixed navbar. The active link is
    // whichever section's top has most recently scrolled past it — this
    // stays correct regardless of how tall a section is (e.g. the pinned
    // product deck inside Services), unlike a fixed-band intersection
    // check, which can miss updates when in-between, un-tracked sections
    // (Sumo360, Craftsmanship) are taller than the viewport.
    // Set below the nav-click scroll target's resting position (~160px,
    // since the click handler's own offset stacks with the sections'
    // scroll-mt-20) so a clicked link's section actually crosses the line.
    const REFERENCE_Y = 170;
    let ticking = false;

    function updateActive() {
      ticking = false;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= REFERENCE_Y) {
          current = section.id;
        }
      }
      setActive(current);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActive);
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Pill */}
        <div
          className="relative flex items-center justify-between gap-3 rounded-full border border-white/25 px-3.5 py-1.5 backdrop-blur-2xl"
          style={glassStyle}
        >
          <Link
            href="#home"
            className="font-display shrink-0 whitespace-nowrap text-sm font-bold tracking-tight text-white"
          >
            Super<span className="gradient-text">Sumo</span>
          </Link>

          {/* Desktop links, always visible */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href.slice(1))}
                  className="relative whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/12"
                      style={{
                        boxShadow:
                          "inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.2)",
                      }}
                      transition={barSpring}
                    />
                  )}
                  <span
                    className={clsx(
                      "relative z-10 whitespace-nowrap transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                    )}
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.75)" }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 md:block">
            <ButtonLink href="#contact" className="px-3 py-1 text-xs">
              Contact Us
            </ButtonLink>
          </div>

          {/* Mobile hamburger — bars rotate into an X */}
          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9, transition: tapSpring }}
            className="flex h-7 w-7 shrink-0 flex-col items-center justify-center gap-1 rounded-full bg-white/10 md:hidden"
          >
            <motion.span
              className="block h-[2px] w-4 rounded-full bg-white"
              animate={{ rotate: open ? 45 : 0, y: open ? 3.5 : 0 }}
              transition={barSpring}
            />
            <motion.span
              className="block h-[2px] w-4 rounded-full bg-white"
              animate={{ rotate: open ? -45 : 0, y: open ? -3.5 : 0 }}
              transition={barSpring}
            />
          </motion.button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={barSpring}
              className="mt-3 flex flex-col gap-1 rounded-3xl border border-white/25 p-3 backdrop-blur-2xl md:hidden"
              style={glassStyle}
            >
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActive(link.href.slice(1));
                      setOpen(false);
                    }}
                    className="relative w-full rounded-xl px-4 py-2.5 text-sm font-medium"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill-mobile"
                        className="absolute inset-0 rounded-xl bg-white/12"
                        transition={barSpring}
                      />
                    )}
                    <span
                      className={clsx(
                        "relative z-10 transition-colors",
                        isActive
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                      )}
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.75)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <ButtonLink
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 justify-center"
              >
                Contact Us
              </ButtonLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
