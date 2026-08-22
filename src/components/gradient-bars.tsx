// A full-bleed animated "equalizer" background: vertical gradient bars that
// pulse and drift in a staggered wave, pure CSS (no JS per-frame work).
// Inspired by the Framer "Gradient bars background" component.

const BAR_COUNT = 28;
const STAGGER = 0.08; // seconds between each bar's animation start
const DURATION = 5; // seconds per full pulse cycle

export function GradientBars() {
  const bars = Array.from({ length: BAR_COUNT }, (_, i) => i);

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-end justify-center gap-[clamp(4px,1.2vw,14px)] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to top, black 0%, black 40%, transparent 92%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 0%, black 40%, transparent 92%)",
      }}
    >
      {bars.map((i) => {
        // Bars nearer the center run taller, tapering toward the edges.
        const distanceFromCenter = Math.abs(i - (BAR_COUNT - 1) / 2);
        const heightPct = 45 + (1 - distanceFromCenter / (BAR_COUNT / 2)) * 45;

        return (
          <div
            key={i}
            className="w-[clamp(3px,0.6vw,6px)] rounded-full"
            style={{
              height: `${heightPct}%`,
              background: "linear-gradient(180deg, #8b5cf6, #4f46e5)",
              opacity: 0.35,
              transformOrigin: "bottom",
              animation: `gradient-bar-pulse ${DURATION}s ease-in-out infinite`,
              animationDelay: `${i * STAGGER}s`,
            }}
          />
        );
      })}
    </div>
  );
}
