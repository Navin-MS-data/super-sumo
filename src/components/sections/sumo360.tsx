import {
  BarChart3,
  Bell,
  CalendarCheck,
  ListChecks,
  MessageCircle,
  Package,
  Target,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";
import { GlassmorphismCard } from "@/components/glassmorphism-card";
import { ButtonLink } from "@/components/ui/button";

const FEATURES = [
  { icon: Users, title: "Staff Management", color: "#8b5cf6" },
  { icon: CalendarCheck, title: "Smart Attendance", color: "#4f46e5" },
  { icon: Wallet, title: "Financial Control", color: "#10b981" },
  { icon: UserCircle, title: "Customer 360°", color: "#0ea5e9" },
  { icon: Target, title: "Lead Intelligence", color: "#f43f5e" },
  { icon: MessageCircle, title: "WhatsApp Automation", color: "#22c55e" },
  { icon: Bell, title: "Smart Reminders", color: "#f59e0b" },
  { icon: ListChecks, title: "Task Orchestration", color: "#06b6d4" },
  { icon: BarChart3, title: "Advanced Analytics", color: "#d946ef" },
  { icon: Package, title: "Inventory Intelligence", color: "#f97316" },
];

export function Sumo360() {
  return (
    <section
      id="sumo360"
      className="relative scroll-mt-20 overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_50%_at_50%_0%,_rgba(139,92,246,0.18),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            Sumo 360°
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            The Ultimate
            <span className="gradient-text"> Business Intelligence Platform</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
            Harness the power of AI, automation, and analytics in one
            revolutionary platform that adapts to your business needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {FEATURES.map((feature) => (
            <GlassmorphismCard
              key={feature.title}
              glowColor={feature.color}
              className="p-4 text-center text-white sm:p-6"
            >
              <div
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-white sm:h-11 sm:w-11"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon size={20} />
              </div>
              <h4 className="mt-3 text-xs font-bold sm:mt-4 sm:text-sm">{feature.title}</h4>
            </GlassmorphismCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-14">
          <ButtonLink href="#contact">Unleash Sumo 360° Power</ButtonLink>
        </div>
      </div>
    </section>
  );
}
