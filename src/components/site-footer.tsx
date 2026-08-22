import Link from "next/link";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [{ href: "#services", label: "Services" }],
  },
  {
    heading: "Get in touch",
    links: [
      { href: "#contact", label: "Contact" },
      { href: "mailto:support@supersumo.in", label: "support@supersumo.in" },
      { href: "tel:8148159801", label: "814 815 9801" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="gradient-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="max-w-sm">
            <Link href="#home" className="font-display text-base font-bold tracking-tight">
              Super<span className="gradient-text">Sumo</span>
            </Link>
            <p className="mt-2 text-xs text-foreground-muted">
              Modern software solutions revolutionizing digital experiences
              — School ERP, Smart Bus, Sumo Kids, Book Sumo, and Sumo360°.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {FOOTER_LINKS.map((group) => (
              <div key={group.heading}>
                <h3 className="font-display text-xs font-bold uppercase tracking-wide text-foreground-muted">
                  {group.heading}
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-foreground-muted transition-colors hover:text-violet"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-4 text-xs text-foreground-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Super Sumo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
