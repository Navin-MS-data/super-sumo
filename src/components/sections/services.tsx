"use client";

import dynamic from "next/dynamic";

const ProductStack = dynamic(
  () => import("@/components/sections/product-stack").then((m) => m.ProductStack),
  { ssr: false }
);

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
    </section>
  );
}
