"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const barSpring = { type: "spring", bounce: 0.15, duration: 0.45 } as const;
const tapSpring = { type: "spring", bounce: 0.2, duration: 0.25 } as const;

// Glass surface: a translucent, blurred pill with a diagonal sheen and inset
// edge highlights, standing in for the "liquid glass" gradient-chrome look.
const glassStyle = {
  background:
    "linear-gradient(155deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 45%, rgba(139,92,246,0.08) 100%)",
  boxShadow:
    "inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.35), 0 4px 24px rgba(0,0,0,0.35), 0 8px 40px rgba(139,92,246,0.12)",
};

export function LiquidGlassNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div className="w-full max-w-3xl">
        {/* Pill */}
        <div
          className="relative flex items-center justify-between gap-4 rounded-full border border-white/15 px-5 py-3 backdrop-blur-2xl"
          style={glassStyle}
        >
          <Link
            href="#home"
            className="font-display shrink-0 whitespace-nowrap text-base font-bold tracking-tight text-white"
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
                  className="relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium"
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
                      "relative z-10 transition-colors",
                      isActive
                        ? "text-violet"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 md:block">
            <ButtonLink href="#contact" className="px-4 py-2 text-sm">
              Get Started
            </ButtonLink>
          </div>

          {/* Mobile hamburger — bars rotate into an X */}
          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9, transition: tapSpring }}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full bg-white/10 md:hidden"
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
              className="mt-3 flex flex-col gap-1 rounded-3xl border border-white/15 p-3 backdrop-blur-2xl md:hidden"
              style={glassStyle}
            >
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
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
                          ? "text-violet"
                          : "text-white/75 hover:text-white"
                      )}
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
                Get Started
              </ButtonLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
