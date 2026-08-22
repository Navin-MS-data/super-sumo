import { Compass, Handshake, Target, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure success by the impact our software has on your business, not lines of code shipped.",
  },
  {
    icon: Zap,
    title: "Move with intent",
    description:
      "Fast doesn't mean careless. We ship quickly because we plan carefully.",
  },
  {
    icon: Handshake,
    title: "Partnership, not vendorship",
    description:
      "We embed with your team, share context, and stay accountable long after launch.",
  },
  {
    icon: Compass,
    title: "Engineering judgment",
    description:
      "Every technical decision is weighed against your product's real constraints — not trends.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,_rgba(139,92,246,0.14),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            About Super Sumo
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Software built with
            <span className="gradient-text"> purpose behind it</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            Super Sumo is a modern software solutions company pioneering the
            future of digital transformation. We craft extraordinary
            software that turns schools into digital powerhouses and
            businesses into market leaders.
          </p>
        </div>
      </div>

      <div className="relative border-y border-border bg-surface">
        <div className="gradient-divider absolute inset-x-0 top-0" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h3 className="text-3xl font-bold sm:text-4xl">Our mission</h3>
            <p className="mt-4 leading-relaxed text-foreground-muted">
              Pioneering the future of digital transformation through
              innovative software solutions that empower organizations
              worldwide — from schools and hospitals to hospitality and
              business.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold sm:text-4xl">Our story</h3>
            <p className="mt-4 leading-relaxed text-foreground-muted">
              Super Sumo started with a single product built for a single
              school. Today our platforms serve 200+ schools, 50K+ students,
              and 500+ organizations across education, transportation,
              hospitality, and business intelligence.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            What drives us
          </span>
          <h3 className="mt-3 text-4xl font-bold sm:text-[40px]">
            Our values
          </h3>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="liquid-glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/0 blur-2xl transition-colors duration-300 group-hover:bg-violet/20" />
              <div className="gradient-accent relative flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <value.icon size={20} />
              </div>
              <h4 className="relative mt-5 text-lg font-bold">
                {value.title}
              </h4>
              <p className="relative mt-2 text-sm text-foreground-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
