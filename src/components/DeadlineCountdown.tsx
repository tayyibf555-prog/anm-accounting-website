"use client";

import { useEffect, useState } from "react";

type Deadline = { date: string; label: string; consequence: string };

// UK tax-year recurring deadlines (month/day). Order matters — we pick the next.
const DEADLINES: { md: [number, number]; label: string; consequence: string }[] = [
  { md: [1, 31], label: "Self-assessment online filing", consequence: "£100 fixed penalty + interest" },
  { md: [3, 31], label: "Corporation tax for Mar y/e companies", consequence: "Interest at 7.5% accrues" },
  { md: [4, 5], label: "End of UK tax year", consequence: "Last chance to use allowances" },
  { md: [4, 19], label: "Final RTI submission for prior year", consequence: "£100 per 50 employees" },
  { md: [5, 19], label: "P11D filing", consequence: "£100 per month, per 50 employees" },
  { md: [5, 31], label: "P60s issued to all employees", consequence: "Employee complaint risk" },
  { md: [7, 6], label: "P11D & Class 1A NICs due", consequence: "Interest from 7th July" },
  { md: [7, 31], label: "Second self-assessment payment on account", consequence: "Interest at 7.5% accrues" },
  { md: [10, 5], label: "Register for self-assessment", consequence: "Failure-to-notify penalty" },
  { md: [10, 31], label: "Paper self-assessment filing", consequence: "Must switch to online or £100" },
  { md: [12, 30], label: "Online filing for PAYE collection", consequence: "Cannot collect via tax code" },
];

function nextDeadline(): Deadline {
  const now = new Date();
  const y = now.getFullYear();

  for (const d of DEADLINES) {
    const date = new Date(y, d.md[0] - 1, d.md[1]);
    if (date.getTime() > now.getTime()) {
      return {
        date: formatDate(date),
        label: d.label,
        consequence: d.consequence,
      };
    }
  }
  // Wrap to next year's first deadline
  const wrap = DEADLINES[0];
  const date = new Date(y + 1, wrap.md[0] - 1, wrap.md[1]);
  return {
    date: formatDate(date),
    label: wrap.label,
    consequence: wrap.consequence,
  };
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function daysUntil(dateLabel: string) {
  const target = new Date(dateLabel);
  const now = new Date();
  const ms = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function DeadlineCountdown() {
  const [deadline, setDeadline] = useState<Deadline | null>(null);
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    const d = nextDeadline();
    setDeadline(d);
    setDays(daysUntil(d.date));
    const interval = setInterval(() => {
      const fresh = nextDeadline();
      setDeadline(fresh);
      setDays(daysUntil(fresh.date));
    }, 1000 * 60 * 60); // refresh hourly
    return () => clearInterval(interval);
  }, []);

  if (!deadline) {
    // SSR placeholder so layout doesn't shift
    return (
      <div className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] opacity-60">
        Loading deadline…
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="flex items-center gap-3 mb-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em]"
        style={{ color: "oklch(0.78 0.06 245)" }}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-amber animate-pulse" />
        Live · Next UK tax deadline
      </div>

      <div className="grid grid-cols-12 gap-3 md:gap-5 items-start">
        <div className="col-span-4 md:col-span-3">
          <p
            className="font-display tabular text-paper leading-none font-semibold"
            style={{ fontSize: "clamp(3rem, 5.2vw, 4.5rem)", letterSpacing: "-0.05em" }}
          >
            {days}
          </p>
          <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/70">
            Days
          </p>
        </div>
        <div className="col-span-8 md:col-span-9 pl-4 md:pl-6" style={{ borderLeft: "1px solid oklch(0.55 0.14 245)" }}>
          <p className="font-mono tabular text-[0.875rem] text-paper" style={{ letterSpacing: "0.04em" }}>
            {deadline.date}
          </p>
          <p
            className="mt-1 text-paper font-medium"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", letterSpacing: "-0.01em" }}
          >
            {deadline.label}
          </p>
          <p className="mt-3 text-[0.8125rem] text-paper/70 leading-snug max-w-[40ch]">
            <span className="font-mono uppercase tracking-[0.12em] text-[0.6875rem] text-amber/90">
              Miss it ·
            </span>{" "}
            {deadline.consequence}
          </p>
        </div>
      </div>
    </div>
  );
}
