import Link from "next/link";
import { TaxTicker } from "@/components/TaxTicker";
import { BlueprintSchematic } from "@/components/BlueprintSchematic";
import { DeadlineCountdown } from "@/components/DeadlineCountdown";
import { CountUp } from "@/components/CountUp";
import { EngagementDiagram } from "@/components/EngagementDiagram";
import { YearCalendar } from "@/components/YearCalendar";

const services = [
  {
    n: "01",
    title: "Annual accounts & corporation tax",
    body: "Statutory accounts and CT600 filings for limited companies. We don't just file what's owed; we identify what shouldn't be.",
  },
  {
    n: "02",
    title: "Self-assessment & personal tax",
    body: "For directors, contractors, landlords, and high-earners with complex affairs. Filed on time, every time, with the planning that should have happened first.",
  },
  {
    n: "03",
    title: "VAT & Making Tax Digital",
    body: "Quarterly returns, scheme selection (flat-rate, cash, margin), and digital-link compliance. The least exciting part of running a business, handled.",
  },
  {
    n: "04",
    title: "Payroll & CIS",
    body: "Weekly, fortnightly, or monthly payrolls. Auto-enrolment pension administration. Subcontractor verifications and CIS returns for the trades.",
  },
  {
    n: "05",
    title: "Bookkeeping",
    body: "Xero and QuickBooks certified. Real-time books, not a once-a-year shoebox reconciliation. You'll know your numbers in the month, not the year.",
  },
  {
    n: "06",
    title: "Advisory & cashflow",
    body: "Quarterly business reviews, 13-week cashflow forecasts, scenario modelling for hires, acquisitions, and exits. The work that compliance can't.",
  },
];

const principles = [
  {
    n: "01",
    title: "We call you first.",
    body: "Most accountants are reactive. They respond when you ask. We schedule quarterly reviews on the calendar at engagement so the conversation about your tax bill happens before it's a bill.",
  },
  {
    n: "02",
    title: "Fixed monthly fees. No timesheet roulette.",
    body: "Every engagement starts with a written fee proposal that doesn't change unless your business does. You'll never receive an invoice that says 'professional services rendered' and a number you can't reconcile.",
  },
  {
    n: "03",
    title: "We pick up the phone.",
    body: "If you ring during business hours you reach a chartered accountant, not a gatekeeper. Direct lines to your engagement partner. A guaranteed 24-hour response on email, with most replies inside the same working day.",
  },
];

const figures: { label: string; prefix?: string; num: number; suffix?: string; unit: string }[] = [
  { label: "Email response, business hours", prefix: "< ", num: 24, unit: "hours guaranteed" },
  { label: "Annual fee proposals honoured", num: 100, suffix: "%", unit: "no exceptions, written first" },
  { label: "Quarterly reviews per engagement, scheduled", num: 4, unit: "written, calendared, not optional" },
  { label: "Glasgow-based clients served since 2014", num: 240, suffix: "+", unit: "and counting" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — drenched-blue broadsheet, schematic illustration, live countdown */}
      <section className="blue-band relative overflow-hidden">
        {/* Blueprint schematic — sits absolute on the right, paper-tinted lines */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 hidden lg:block pointer-events-none"
          style={{
            width: "min(58%, 760px)",
            color: "oklch(0.82 0.06 250)",
            opacity: 0.6,
            transform: "translate(8%, 4%)",
          }}
        >
          <BlueprintSchematic className="w-full h-full" />
        </div>

        <div className="relative container-edit pt-8 md:pt-10 pb-20 md:pb-28">
          {/* Masthead — broadsheet flag */}
          <div
            className="grid grid-cols-2 md:grid-cols-12 gap-4 py-5 mb-12 md:mb-20"
            style={{
              borderTop: "2px solid var(--color-paper)",
              borderBottom: "1px solid oklch(0.48 0.12 262)",
            }}
          >
            <div className="col-span-2 md:col-span-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper/70 flex items-center gap-3">
              <span className="text-amber">●</span>
              Issue No. {new Date().getFullYear() - 2013}
            </div>
            <div className="hidden md:block md:col-span-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper/70">
              Est. Glasgow 2014
            </div>
            <div className="hidden md:block md:col-span-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper/70">
              ICAS member firm
            </div>
            <div className="col-span-2 md:col-span-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper/70 md:text-right">
              {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-amber mb-6">
                Vol. 12  /  Chartered accountants  /  Glasgow
              </p>

              <h1
                className="font-display text-paper"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.05em",
                  maxWidth: "14ch",
                  fontWeight: 600,
                }}
              >
                Accountants for{" "}
                <span className="text-amber" style={{ fontWeight: 600 }}>
                  ambitious
                </span>{" "}
                businesses.
              </h1>

              <p
                className="mt-10 text-paper/85 leading-relaxed"
                style={{
                  fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
                  maxWidth: "52ch",
                  letterSpacing: "-0.005em",
                }}
              >
                We are a small Glasgow firm built around a specific idea: that
                an accountant should be the person you call before a decision,
                not the one who reconciles its consequences.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-paper text-ink px-7 py-[1.0625rem] text-[0.9375rem] font-medium rounded-[2px] hover:bg-paper-deep transition-colors"
                >
                  A 30-minute call to see how we can help you
                  <span className="text-amber">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-paper border-b border-paper/40 hover:border-paper pb-1 transition-colors text-[0.9375rem]"
                >
                  See services <span className="text-amber">→</span>
                </Link>
              </div>
            </div>

            {/* Countdown panel — sits to right of headline on lg, below on mobile */}
            <div className="lg:col-span-5 xl:col-span-5 relative">
              <div
                className="relative p-7 md:p-9"
                style={{
                  background: "oklch(0.28 0.14 264)",
                  border: "1px solid oklch(0.48 0.12 262)",
                }}
              >
                <DeadlineCountdown />

                <div
                  className="mt-8 pt-6 grid grid-cols-3 gap-4"
                  style={{ borderTop: "1px solid oklch(0.42 0.10 262)" }}
                >
                  <div>
                    <p className="font-display tabular text-paper text-[1.5rem] md:text-[1.875rem] leading-none font-semibold" style={{ letterSpacing: "-0.04em" }}>
                      <CountUp to={240} suffix="+" />
                    </p>
                    <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/65 leading-snug">
                      Clients<br />served
                    </p>
                  </div>
                  <div>
                    <p className="font-display tabular text-paper text-[1.5rem] md:text-[1.875rem] leading-none font-semibold" style={{ letterSpacing: "-0.04em" }}>
                      <CountUp to={11} />
                    </p>
                    <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/65 leading-snug">
                      Years in<br />practice
                    </p>
                  </div>
                  <div>
                    <p className="font-display tabular text-paper text-[1.5rem] md:text-[1.875rem] leading-none font-semibold" style={{ letterSpacing: "-0.04em" }}>
                      <CountUp to={100} suffix="%" />
                    </p>
                    <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/65 leading-snug">
                      Fees<br />honoured
                    </p>
                  </div>
                </div>

                {/* Corner registration marks */}
                <span
                  className="absolute top-3 left-3 w-3 h-3 border-l border-t"
                  style={{ borderColor: "var(--color-amber)" }}
                  aria-hidden
                />
                <span
                  className="absolute bottom-3 right-3 w-3 h-3 border-r border-b"
                  style={{ borderColor: "var(--color-amber)" }}
                  aria-hidden
                />
              </div>
              <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/55">
                Updated hourly · Based on UK tax-year cycle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAX TICKER — brand signature */}
      <TaxTicker />

      {/* PRINCIPLES — louder, alternating layout */}
      <section className="bg-paper-deep hairline-bottom">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
            <div className="md:col-span-7">
              <p className="eyebrow section-rule">Practice</p>
              <h2
                className="mt-6 font-display"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                  maxWidth: "18ch",
                }}
              >
                Three principles. Written down so we can be held to them.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 self-end">
              <p className="text-ink-soft text-[1.0625rem] leading-relaxed max-w-[42ch]">
                Most accounting firms describe themselves in the same way using
                the same words. Below is what we actually do, written so a
                prospective client can decide in two minutes whether we're a
                fit.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {principles.map((p, i) => (
              <article
                key={p.n}
                className="reveal grid grid-cols-12 gap-6 md:gap-10 items-baseline py-12 md:py-16 hairline-top"
              >
                <div className="col-span-12 md:col-span-2">
                  <span
                    className="font-mono tabular text-amber"
                    style={{
                      fontSize: "0.8125rem",
                      letterSpacing: "0.08em",
                      fontWeight: 500,
                      display: "block",
                    }}
                  >
                    Principle / {p.n}
                  </span>
                </div>
                <h3
                  className="col-span-12 md:col-span-6 font-display"
                  style={{
                    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    fontWeight: 600,
                  }}
                >
                  {p.title}
                </h3>
                <p className="col-span-12 md:col-span-4 text-ink-soft text-[1rem] leading-relaxed">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO — single statement, paper, dramatic scale */}
      <section className="hairline-bottom">
        <div className="container-edit py-20 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <p className="col-span-12 md:col-span-1 eyebrow self-start">
              ¶ 001
            </p>
            <blockquote className="col-span-12 md:col-span-10 md:col-start-2 reveal">
              <p className="manifesto">
                Most accountants are paid for{" "}
                <span className="text-ink font-semibold">accuracy</span>.
                We're paid to ring you{" "}
                <span className="amber-underline text-ink font-semibold">
                  in October
                </span>
                .
              </p>
              <footer className="mt-12 flex items-center gap-4">
                <span className="block w-12 h-px bg-ink-faint" />
                <cite className="not-italic font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
                  {/* REPLACE */}A. MacDonald, CA · Founding Partner
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT DIAGRAM — fills the gap between manifesto and services */}
      <section className="container-edit pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-6">
            <p className="eyebrow section-rule">How it works</p>
            <h2
              className="mt-6 font-display"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                fontWeight: 600,
                maxWidth: "20ch",
              }}
            >
              From first call to first review, in fourteen working days.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 self-end">
            <p className="deck">
              The same four steps for every engagement. Written, dated, signed.
              No discovery sales funnel.
            </p>
          </div>
        </div>

        <EngagementDiagram />
      </section>

      {/* SERVICES — numbered editorial rows */}
      <section className="container-edit py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-7">
            <p className="eyebrow section-rule">Services</p>
            <h2
              className="mt-6 font-display"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              The full ledger of what we do.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end">
            <p className="deck">
              Compliance is the floor. Advisory is the work. Most clients
              engage us for both.
            </p>
          </div>
        </div>

        {/* Stat strip — adds substance between intro and services list */}
        <div className="hairline-top hairline-bottom grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 md:py-10 mb-14">
          <div>
            <p
              className="font-display tabular text-ink leading-none font-semibold"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", letterSpacing: "-0.04em" }}
            >
              09
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute leading-snug">
              Service lines, fully scoped
            </p>
          </div>
          <div>
            <p
              className="font-display tabular text-ink leading-none font-semibold"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", letterSpacing: "-0.04em" }}
            >
              £120<span className="text-ink-mute text-[0.55em] align-baseline ml-1">+ VAT</span>
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute leading-snug">
              Starting fee, monthly
            </p>
          </div>
          <div>
            <p
              className="font-display text-ink leading-none font-semibold"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", letterSpacing: "-0.04em" }}
            >
              Fixed
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute leading-snug">
              Written proposal, no timesheets
            </p>
          </div>
          <div>
            <p
              className="font-display text-ink leading-none font-semibold"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", letterSpacing: "-0.04em" }}
            >
              ICAS
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute leading-snug">
              Member firm, regulated
            </p>
          </div>
        </div>

        <div>
          {services.map((s, i) => (
            <div
              key={s.n}
              className="reveal editorial-row"
              style={{
                borderTop: i === 0 ? "1px solid var(--color-rule)" : "none",
              }}
            >
              <div className="row-number">{s.n}</div>
              <h3 className="font-display text-[1.375rem] md:text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.025em]">
                {s.title}
              </h3>
              <p className="text-ink-soft text-[0.9375rem] leading-relaxed max-w-[48ch]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-8">
          <Link href="/services" className="btn-secondary">
            Full services & fee guide <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* YEAR CALENDAR — visual fills the gap between services and figures */}
      <section className="hairline-top bg-paper-deep">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-6">
              <p className="eyebrow section-rule">The accountant's year</p>
              <h2
                className="mt-6 font-display"
                style={{
                  fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                  maxWidth: "22ch",
                }}
              >
                Every UK deadline that matters, on one page.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="deck">
                We track these so you don't have to. The next eleven dates that
                shape every owner-managed business in the UK.
              </p>
            </div>
          </div>

          <YearCalendar />
        </div>
      </section>

      {/* FIGURE BAND — full-bleed, monumental numerals */}
      <section className="blue-band">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8 md:mb-10">
            <div className="md:col-span-7">
              <p className="eyebrow section-rule" style={{ color: "oklch(0.78 0.07 250)" }}>
                In figures
              </p>
              <h2
                className="mt-6 font-display"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                  maxWidth: "18ch",
                }}
              >
                The numbers we set ourselves against.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 self-end">
              <p className="deck" style={{ color: "oklch(0.90 0.04 250)", maxWidth: "42ch" }}>
                We publish these because they make us accountable, and because
                vague claims are easy to make and impossible to verify.
              </p>
            </div>
          </div>

          {/* Methodology strip — sits between heading and figures */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-6 md:py-7 mb-10"
            style={{ borderTop: "1px solid oklch(0.42 0.10 262)", borderBottom: "1px solid oklch(0.42 0.10 262)" }}
          >
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.07 250)" }}>
                Last verified
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                {/* REPLACE */}Q1 2026
              </span>
            </div>
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.07 250)" }}>
                Reviewed
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                Quarterly
              </span>
            </div>
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.07 250)" }}>
                Sourced
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                Practice records
              </span>
            </div>
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.07 250)" }}>
                Open to
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                Client verification
              </span>
            </div>
          </div>

          <dl>
            {figures.map((f, i) => (
              <div
                key={i}
                className="reveal grid grid-cols-12 gap-6 md:gap-10 items-baseline py-10 md:py-12"
                style={{
                  borderTop: "1px solid oklch(0.42 0.10 262)",
                  borderBottom: i === figures.length - 1 ? "1px solid oklch(0.42 0.10 262)" : "none",
                }}
              >
                <span className="col-span-2 md:col-span-1 font-mono tabular text-[0.75rem] tracking-[0.08em] uppercase opacity-70" style={{ color: "oklch(0.78 0.07 250)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="col-span-10 md:col-span-4 text-[0.875rem] uppercase tracking-[0.08em] text-paper/80 self-center leading-snug">
                  {f.label}
                </dt>
                <dd className="col-span-12 md:col-span-7 flex items-baseline gap-4 md:gap-6 flex-wrap">
                  <CountUp
                    to={f.num}
                    prefix={f.prefix}
                    suffix={f.suffix}
                    className="display-num"
                  />
                  <span className="text-[0.875rem] uppercase tracking-[0.08em] text-paper/70 leading-snug max-w-[20ch]">
                    {f.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WORKED PAPER — composite client schedule */}
      <section className="container-edit py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <p className="eyebrow section-rule">A worked example</p>
            <h2
              className="mt-6 font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                fontWeight: 600,
              }}
            >
              What "proactive tax planning" actually looks like.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="deck">
              The phrase appears on every accountant's website. Below is what
              we mean by it, written as a composite client schedule.
            </p>
          </div>
        </div>

        {/* Working paper masthead */}
        <div
          className="relative bg-paper-deep"
          style={{ border: "1px solid var(--color-rule)" }}
        >
          {/* Top header bar */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 px-6 md:px-8 py-4 md:py-5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute"
            style={{ borderBottom: "1px solid var(--color-rule)" }}
          >
            <div className="flex gap-6">
              <span>
                <span className="text-ink-faint">Client</span>{" "}
                <span className="text-ink">ANM/0142</span>
              </span>
              <span>
                <span className="text-ink-faint">Sector</span>{" "}
                <span className="text-ink">Construction</span>
              </span>
            </div>
            <div className="flex gap-6">
              <span>
                <span className="text-ink-faint">Y/E</span>{" "}
                <span className="text-ink">31 Mar</span>
              </span>
              <span>
                <span className="text-ink-faint">Prepared</span>{" "}
                <span className="text-ink">A.M.</span>
              </span>
              <span>
                <span className="text-ink-faint">Doc</span>{" "}
                <span className="text-ink">CT-SCH-001</span>
              </span>
            </div>
          </div>

          {/* Two-column schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--color-rule)" }}>
            {/* Before */}
            <div className="p-6 md:p-8">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                  Col. A
                </span>
                <h3 className="font-display text-[1.125rem] md:text-[1.25rem] font-semibold tracking-[-0.02em]">
                  Before — previous accountant
                </h3>
              </div>

              <dl className="space-y-0 font-mono text-[0.875rem]">
                {[
                  ["Turnover", "1,800,000"],
                  ["Operating profit", "342,000"],
                  ["Capital allowances claimed", "12,400"],
                  ["R&D relief", "—"],
                  ["Director remuneration mix", "Default"],
                  ["Taxable profit", "329,600"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between items-baseline py-2.5 hairline-top"
                  >
                    <dt className="text-ink-soft">{k}</dt>
                    <dd className="tabular text-ink">{v.startsWith("—") ? v : k.includes("mix") ? v : `£${v}`}</dd>
                  </div>
                ))}
              </dl>

              <div
                className="mt-6 pt-5 flex justify-between items-baseline"
                style={{ borderTop: "2px solid var(--color-ink)" }}
              >
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                  CT due
                </p>
                <p
                  className="font-display tabular font-semibold text-ink"
                  style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)", letterSpacing: "-0.04em" }}
                >
                  £64,000
                </p>
              </div>
              <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
                Effective rate <span className="text-ink">19.4%</span>
              </p>
            </div>

            {/* After */}
            <div className="p-6 md:p-8 relative" style={{ backgroundColor: "oklch(0.94 0.012 85)" }}>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-amber">
                  Col. B
                </span>
                <h3 className="font-display text-[1.125rem] md:text-[1.25rem] font-semibold tracking-[-0.02em]">
                  After — with ANM, Q3 review
                </h3>
              </div>

              <dl className="space-y-0 font-mono text-[0.875rem]">
                {[
                  ["Turnover", "1,800,000", "—"],
                  ["Operating profit", "342,000", "—"],
                  ["Capital allowances (full expensing)", "180,000", "+£167,600"],
                  ["R&D enhanced relief", "47,200", "+£47,200"],
                  ["Director remuneration mix", "Optimised", "↓"],
                  ["Taxable profit", "114,800", "−£214,800"],
                ].map(([k, v, delta]) => (
                  <div
                    key={k}
                    className="grid grid-cols-12 gap-2 items-baseline py-2.5 hairline-top"
                  >
                    <dt className="col-span-7 text-ink-soft">{k}</dt>
                    <dd className="col-span-3 tabular text-ink text-right">
                      {v === "—" || k.includes("mix") || k.includes("Optimised") ? v : `£${v}`}
                    </dd>
                    <dd className="col-span-2 tabular text-amber text-right text-[0.75rem]">{delta}</dd>
                  </div>
                ))}
              </dl>

              <div
                className="mt-6 pt-5 flex justify-between items-baseline"
                style={{ borderTop: "2px solid var(--color-blue)" }}
              >
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                  CT due
                </p>
                <p
                  className="font-display tabular font-semibold text-blue"
                  style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)", letterSpacing: "-0.04em" }}
                >
                  £21,500
                </p>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
                  Effective rate <span className="text-ink">6.5%</span>
                </p>
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-amber">
                  Saving <span className="text-ink tabular">£42,500</span>
                </p>
              </div>

              {/* Amber registration tick */}
              <span
                className="absolute top-6 right-6 w-2 h-2 bg-amber"
                aria-hidden
              />
            </div>
          </div>

          {/* Footnote bar */}
          <div
            className="px-6 md:px-8 py-4 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[0.75rem] font-mono uppercase tracking-[0.14em] text-ink-mute"
            style={{ borderTop: "1px solid var(--color-rule)", backgroundColor: "var(--color-paper)" }}
          >
            <span>
              Composite case. Figures illustrative. Methods conventional, properly
              applied.
            </span>
            <span className="text-ink">Reviewed · Approved · Filed</span>
          </div>
        </div>

        <p className="mt-8 text-ink-soft text-[1rem] leading-relaxed max-w-[68ch]">
          The work was finished in November. The directors took the same
          combined household income with materially lower personal tax exposure.
          No aggressive planning, no offshore structures, no schemes.{" "}
          <span className="amber-underline">A phone call in October</span>,
          rather than a reconciliation in March.
        </p>
      </section>

      {/* CTA BAND */}
      <section className="hairline-top bg-paper-deep">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow section-rule">Next step</p>
              <h2
                className="mt-6 font-display"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                  maxWidth: "22ch",
                }}
              >
                A 30-minute call to see how we can help you.
              </h2>
              <p className="deck mt-6">
                You describe the business. We tell you, plainly, whether we're
                the right firm and what an engagement would look like.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary self-start">
                A 30-minute call to see how we can help you{" "}
                <span className="arrow">→</span>
              </Link>
              <p className="text-[0.875rem] text-ink-mute">
                Or call{" "}
                <a
                  href="tel:+441413000000"
                  className="text-blue-ink hover:underline"
                >
                  0141 300 0000
                </a>{" "}
                during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
