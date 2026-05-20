"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

const services = [
  "Annual accounts & corporation tax",
  "Self-assessment / personal tax",
  "VAT & MTD",
  "Payroll & CIS",
  "Bookkeeping",
  "Advisory & cashflow",
  "Tax planning",
  "HMRC enquiry support",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState(services[8]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder submission. Wire this to a real endpoint (Resend, Formspree,
    // or a Next.js Server Action) before shipping. {/* REPLACE */}
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="py-10">
        <p className="eyebrow mb-5">Received</p>
        <h2 className="font-display text-[1.875rem] md:text-[2.25rem] leading-tight font-medium">
          Thank you. We'll be in touch within one working day.
        </h2>
        <p className="deck mt-6">
          A chartered partner will read your note personally and reply to
          schedule the call at a time that suits you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Field label="Your name" htmlFor="name">
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="form-input"
        />
      </Field>

      <Field label="Business name" htmlFor="business" optional>
        <input
          id="business"
          name="business"
          autoComplete="organization"
          className="form-input"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="What do you need help with?" htmlFor="service">
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const selected = service === s;
            return (
              <button
                type="button"
                key={s}
                onClick={() => setService(s)}
                className={`px-4 py-2 text-[0.875rem] rounded-[2px] border transition-colors ${
                  selected
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-ink-soft border-rule hover:border-ink"
                }`}
              >
                {s}
              </button>
            );
          })}
          <input type="hidden" name="service" value={service} />
        </div>
      </Field>

      <Field
        label="A few sentences on the business"
        htmlFor="message"
        helper="Turnover, headcount, current accountant if any, and what's prompting the conversation."
      >
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="form-input resize-y"
        />
      </Field>

      <div className="flex items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send my enquiry"}{" "}
          <span className="arrow">→</span>
        </button>
        <p className="text-[0.8125rem] text-ink-mute max-w-[28ch]">
          We reply to every enquiry within one working day.
        </p>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--color-ink);
          background-color: var(--color-paper);
          border: 1px solid var(--color-rule);
          border-radius: 2px;
          transition: border-color 180ms var(--ease-out-quart);
        }
        .form-input:hover {
          border-color: var(--color-ink-faint);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-blue);
          box-shadow: 0 0 0 3px var(--color-blue-soft);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  helper,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute mb-3"
      >
        {label}
        {optional && (
          <span className="ml-2 normal-case tracking-normal text-ink-faint">
            (optional)
          </span>
        )}
      </label>
      {children}
      {helper && (
        <p className="mt-2 text-[0.8125rem] text-ink-mute">{helper}</p>
      )}
    </div>
  );
}
