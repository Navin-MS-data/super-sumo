"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="liquid-glass flex flex-col items-center justify-center rounded-2xl p-8 text-center sm:p-12">
        <CheckCircle2 size={40} className="text-violet" />
        <h3 className="mt-4 text-xl font-bold">Message sent</h3>
        <p className="mt-2 text-sm text-foreground-muted">
          Thanks for reaching out — our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="liquid-glass rounded-2xl p-5 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're building..."
          className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet"
        />
      </div>

      <Button type="submit" className="mt-8 w-full justify-center">
        Send Message
      </Button>
    </form>
  );
}
