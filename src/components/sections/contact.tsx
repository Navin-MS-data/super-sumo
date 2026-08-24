import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "support@supersumo.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "814 815 9801",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "No. 84, Rasi Tower, Karuppar Kovil Main Road, Prabhu Nagar, Karaikudi - 630 002",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_55%_50%_at_15%_100%,_rgba(79,70,229,0.16),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-[radial-gradient(ellipse_45%_40%_at_85%_0%,_rgba(139,92,246,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-violet">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let&apos;s talk about
            <span className="gradient-text"> your product</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
            Share a few details about what you&apos;re building and we&apos;ll
            follow up with next steps.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {CONTACT_DETAILS.map((detail) => (
              <div
                key={detail.label}
                className="liquid-glass flex items-start gap-4 rounded-2xl p-4 sm:p-6"
              >
                <div className="gradient-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white">
                  <detail.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground-muted">
                    {detail.label}
                  </p>
                  <p className="mt-1 font-medium">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
