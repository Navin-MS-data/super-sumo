"use client";

import dynamic from "next/dynamic";
import { Cpu, Headphones, Rocket, Wrench, Workflow } from "lucide-react";

const ProductStack = dynamic(
  () => import("@/components/sections/product-stack").then((m) => m.ProductStack),
  { ssr: false }
);

const SERVICES = [
  { icon: Wrench, title: "Custom Development" },
  { icon: Cpu, title: "AI Integration" },
  { icon: Workflow, title: "Digital Transformation" },
  { icon: Rocket, title: "Technical Consulting" },
  { icon: Headphones, title: "24/7 Support" },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_50%_at_20%_0%,_rgba(79,70,229,0.16),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            Products & Services
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            One suite, built for
            <span className="gradient-text"> every industry</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            From schools to hotels, our product suite and services help
            organizations run smarter — backed by custom development, AI
            integration, and round-the-clock support.
          </p>
        </div>
      </div>

      <ProductStack />

      <div className="relative border-t border-border bg-surface">
        <div className="gradient-divider absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
              Services
            </span>
            <h3 className="mt-3 text-4xl font-bold sm:text-[40px]">
              Beyond the product suite
            </h3>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="liquid-glass rounded-2xl p-6 text-center"
              >
                <div className="gradient-accent mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <service.icon size={20} />
                </div>
                <h4 className="mt-4 text-sm font-bold">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
