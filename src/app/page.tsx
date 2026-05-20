import Link from "next/link";
import { TaxTicker } from "@/components/TaxTicker";

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

const figures = [
  { label: "Email response, business hours", value: "< 24", unit: "hours guaranteed" },
  { label: "Annual fee proposals honoured", value: "100", unit: "%" },
  { label: "Quarterly reviews per engagement, scheduled", value: "4", unit: "written, calendared, not optional" },
  { label: "Glasgow-based clients served since 2014", value: "240", unit: "and counting" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — monumental, with watermark */}
      <section className="relative overflow-hidden">
        <div className="watermark" aria-hidden>
          <span className="watermark__text">ANM.</span>
        </div>

        <div className="relative container-edit pt-24 md:pt-36 pb-24 md:pb-28">
          <p className="eyebrow section-rule">
            Chartered accountants · Established Glasgow 2014
          </p>

          <h1
            className="mt-10 font-display"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              maxWidth: "16ch",
              fontWeight: 600,
            }}
          >
            Accountants for{" "}
            <span className="text-blue-ink" style={{ fontWeight: 600 }}>
              ambitious
            </span>{" "}
            businesses.
          </h1>

          <p className="deck mt-10" style={{ maxWidth: "58ch" }}>
            We are a small Glasgow firm built around a specific idea: that an
            accountant should be the person you call{" "}
            <span className="amber-underline">before a decision</span>, not the
            one who reconciles its consequences.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            <Link href="/contact" className="btn-primary">
              A 30-minute call to see how we can help you{" "}
              <span className="arrow">→</span>
            </Link>
            <Link href="/services" className="btn-secondary">
              See services <span className="arrow">→</span>
            </Link>
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

      {/* FIGURE BAND — full-bleed, monumental numerals */}
      <section className="blue-band">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8 md:mb-10">
            <div className="md:col-span-7">
              <p className="eyebrow section-rule" style={{ color: "oklch(0.78 0.06 245)" }}>
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
              <p className="deck" style={{ color: "oklch(0.92 0.03 245)", maxWidth: "42ch" }}>
                We publish these because they make us accountable, and because
                vague claims are easy to make and impossible to verify.
              </p>
            </div>
          </div>

          {/* Methodology strip — sits between heading and figures */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-6 md:py-7 mb-10"
            style={{ borderTop: "1px solid oklch(0.45 0.12 245)", borderBottom: "1px solid oklch(0.45 0.12 245)" }}
          >
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.06 245)" }}>
                Last verified
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                {/* REPLACE */}Q1 2026
              </span>
            </div>
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.06 245)" }}>
                Reviewed
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                Quarterly
              </span>
            </div>
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.06 245)" }}>
                Sourced
              </span>
              <span className="font-mono tabular text-paper text-[0.875rem]" style={{ letterSpacing: "0.04em" }}>
                Practice records
              </span>
            </div>
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: "oklch(0.78 0.06 245)" }}>
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
                  borderTop: "1px solid oklch(0.45 0.12 245)",
                  borderBottom: i === figures.length - 1 ? "1px solid oklch(0.45 0.12 245)" : "none",
                }}
              >
                <span className="col-span-2 md:col-span-1 font-mono tabular text-[0.75rem] tracking-[0.08em] uppercase opacity-70" style={{ color: "oklch(0.78 0.06 245)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="col-span-10 md:col-span-4 text-[0.875rem] uppercase tracking-[0.08em] text-paper/80 self-center leading-snug">
                  {f.label}
                </dt>
                <dd className="col-span-12 md:col-span-7 flex items-baseline gap-4 md:gap-6 flex-wrap">
                  <span className="display-num">{f.value}</span>
                  <span className="text-[0.875rem] uppercase tracking-[0.08em] text-paper/70 leading-snug max-w-[20ch]">
                    {f.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WORKED EXAMPLE */}
      <section className="container-edit py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
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
            <p className="deck mt-6">
              The phrase appears on every accountant's website. Here is what we
              mean by it, in a single composite case.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 prose-narrow">
            <p>
              A Glasgow construction company, two directors, turnover £1.8m,
              eight employees, came to us in October from a larger firm. Their
              previous accountant filed accurate accounts every March and sent
              a corporation tax bill of £64,000.
            </p>
            <p>
              At engagement we scheduled a Q3 review. In that meeting we
              identified £180,000 of capital expenditure on plant and machinery
              that qualified for full expensing, R&amp;D-adjacent process work
              that met HMRC's enhanced relief criteria, and a director
              remuneration mix that had been left on default rather than
              optimised against the dividend allowance and threshold.
            </p>
            <p>
              The work was finished in November. The next year's corporation
              tax fell to £21,500. The directors took the same combined
              household income with a materially lower personal tax exposure.
              None of this required aggressive planning, offshore structures,
              or schemes. It required{" "}
              <span className="amber-underline">a phone call in October</span>{" "}
              rather than a reconciliation in March.
            </p>
            <p className="text-ink-mute text-[0.875rem] italic mt-8">
              Composite case study drawn from the experience of multiple
              clients. Figures illustrative.
            </p>
          </div>
        </div>
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
