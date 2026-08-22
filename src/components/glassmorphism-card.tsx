"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/**
 * Standalone port of the Framer "Glassmorphism Card" component
 * (https://framer.com/m/Glassmorphism-Card-odWqyp.js), stripped of
 * Framer-only runtime APIs (addPropertyControls / useVariantState /
 * RichText / etc.) and generalized to accept arbitrary children instead
 * of the original's fixed "title number + description" layout.
 *
 * Structure: a blurred, tinted glass panel (border + translucent fill +
 * backdrop blur) with a soft colored glow blob bleeding through from one
 * corner, and a subtle lift/skew on hover.
 */

type GlassmorphismCardProps = {
  glowColor?: string;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function GlassmorphismCard({
  glowColor = "rgb(139, 92, 246)",
  borderRadius = 22,
  className,
  style,
  children,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        skewY: -2,
        transition: { duration: 0.4, ease: [0.44, 0, 0.56, 1] },
      }}
      className={className}
      style={{
        position: "relative",
        borderRadius,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.08)",
        boxShadow: "0px 12px 45px 5px rgba(0,0,0,0.2)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        ...style,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -left-8 h-16 w-16 rounded-full"
        style={{
          background: glowColor,
          boxShadow: `0px 0px 90px 60px ${glowColor}`,
          filter: "blur(8px)",
          opacity: 0.35,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
