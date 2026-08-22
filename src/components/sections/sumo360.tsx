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

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            Sumo 360°
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            The Ultimate
            <span className="gradient-text"> Business Intelligence Platform</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            Harness the power of AI, automation, and analytics in one
            revolutionary platform that adapts to your business needs.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((feature) => (
            <GlassmorphismCard
              key={feature.title}
              glowColor={feature.color}
              className="p-6 text-center text-white"
            >
              <div
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon size={20} />
              </div>
              <h4 className="mt-4 text-sm font-bold">{feature.title}</h4>
            </GlassmorphismCard>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <ButtonLink href="#contact">Unleash Sumo360 Power</ButtonLink>
        </div>
      </div>
    </section>
  );
}
