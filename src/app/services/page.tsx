import Link from "next/link";

const sections = [
  {
    eyebrow: "Compliance",
    title: "Annual accounts & corporation tax",
    summary:
      "Statutory accounts to FRS 102 / 105 standard, corporation tax computation and CT600, Companies House filings. Suitable for limited companies of any size.",
    includes: [
      "Year-end statutory accounts",
      "Corporation tax computation and CT600",
      "Companies House filings",
      "Confirmation statement",
      "Director's report",
      "Capital allowance review",
    ],
    fee: "From £950 + VAT",
    feeNote: "annual, fixed by turnover band",
  },
  {
    eyebrow: "Compliance",
    title: "Self-assessment & personal tax",
    summary:
      "For directors, sole traders, contractors, landlords, and individuals with multiple income streams. The return is the smallest part of the work.",
    includes: [
      "Annual self-assessment filing",
      "Capital gains tax computation",
      "Property income schedules",
      "Foreign income & double taxation",
      "Tax code reviews",
      "Pre-year-end planning meeting",
    ],
    fee: "From £350 + VAT",
    feeNote: "annual, scoped by complexity",
  },
  {
    eyebrow: "Compliance",
    title: "VAT & Making Tax Digital",
    summary:
      "Registration, scheme selection, quarterly returns, and full MTD digital-link compliance. Domestic reverse charge handled for construction.",
    includes: [
      "VAT registration / deregistration",
      "Quarterly returns under MTD",
      "Scheme review (flat-rate, cash, margin)",
      "EC sales lists where applicable",
      "Reverse charge (CIS construction)",
      "HMRC enquiry support",
    ],
    fee: "From £120 + VAT",
    feeNote: "per quarter, by transaction volume",
  },
  {
    eyebrow: "Compliance",
    title: "Payroll & CIS",
    summary:
      "Weekly, fortnightly, or monthly payroll runs with auto-enrolment pension administration. CIS returns and subcontractor verification for the trades.",
    includes: [
      "RTI payroll submissions",
      "Payslips and P60s",
      "Auto-enrolment compliance",
      "Statutory pay calculations",
      "CIS monthly returns",
      "Subcontractor verifications",
    ],
    fee: "From £4 + VAT",
    feeNote: "per payslip, monthly minimum applies",
  },
  {
    eyebrow: "Operations",
    title: "Bookkeeping",
    summary:
      "Cloud bookkeeping in Xero or QuickBooks. We are platinum partners on both. Real-time books, monthly reconciliation, and a management report you'll actually read.",
    includes: [
      "Xero / QuickBooks setup or migration",
      "Bank feed reconciliation",
      "Sales and purchase ledger",
      "Monthly management report",
      "Receipt capture (Hubdoc / Dext)",
      "Software training for your team",
    ],
    fee: "From £180 + VAT",
    feeNote: "per month, scaled by volume",
  },
  {
    eyebrow: "Advisory",
    title: "Business advisory & cashflow",
    summary:
      "Quarterly business reviews, 13-week rolling cashflow forecasts, scenario modelling for hires, acquisitions, refinancing, and exit. The work compliance can't do.",
    includes: [
      "Quarterly business review meetings",
      "13-week cashflow forecast",
      "KPI dashboard build",
      "Pricing and margin analysis",
      "Hire and capacity modelling",
      "Bank and lender packaging",
    ],
    fee: "From £400 + VAT",
    feeNote: "per month, retainer engagements",
  },
  {
    eyebrow: "Advisory",
    title: "Tax planning",
    summary:
      "Director remuneration, R&D claims, capital allowances, EIS / SEIS, group structuring, exit planning. Conventional planning, conducted properly and on time.",
    includes: [
      "Director and shareholder remuneration",
      "R&D tax credit claims",
      "Capital allowances and FYAs",
      "EIS / SEIS advance assurance",
      "Group and holdco structuring",
      "Exit and succession planning",
    ],
    fee: "Project-priced",
    feeNote: "fixed-fee proposal before engagement",
  },
  {
    eyebrow: "Special situations",
    title: "Company formation & restructuring",
    summary:
      "Incorporation from sole trader, holding company creation, share reorganisations, and member's voluntary liquidations executed alongside specialist counsel.",
    includes: [
      "Company incorporation",
      "Share class design",
      "Shareholder agreements (with counsel)",
      "Sole trader to limited conversion",
      "Holding company structures",
      "MVL coordination",
    ],
    fee: "From £350 + VAT",
    feeNote: "incorporation; advisory project-priced",
  },
  {
    eyebrow: "Special situations",
    title: "HMRC enquiry & investigation",
    summary:
      "Representation through compliance checks, code of practice 8 and 9 enquiries, and ADR. Optional fee-protection insurance covers professional time.",
    includes: [
      "Compliance check correspondence",
      "Information notice response",
      "Disclosure facility filings",
      "ADR (alternative dispute resolution)",
      "Penalty negotiation",
      "Fee protection insurance",
    ],
    fee: "Hourly or fee-protected",
    feeNote: "scoped at the first review",
  },
];

export const metadata = {
  title: "Services",
  description:
    "Compliance, advisory, and special situations work for Scottish SMEs. Fixed fees, written proposals, no timesheet billing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden">
        <div className="watermark" aria-hidden>
          <span className="watermark__text" style={{ fontSize: "clamp(14rem, 32vw, 30rem)", bottom: "-12%" }}>
            §
          </span>
        </div>
        <div className="relative container-edit pt-24 md:pt-32 pb-16">
          <p className="eyebrow section-rule">Services &amp; fees</p>
          <h1
            className="mt-8 font-display"
            style={{
              fontSize: "clamp(3.75rem, 9vw, 8.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              fontWeight: 600,
            }}
          >
            The full <span className="text-blue-ink" style={{ fontWeight: 600 }}>ledger</span>.
          </h1>
          <p className="deck mt-10 max-w-[58ch]">
            Every service below is offered at a fixed fee or a fixed-fee
            proposal. Hourly billing is reserved for genuine ambiguity, and
            even then we agree a ceiling in writing first. Indicative starting
            prices are published; precise proposals follow a discovery call.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="container-edit pb-24">
        <div className="hairline-top">
          {sections.map((s, i) => (
            <article key={s.title} className="reveal py-12 md:py-16 hairline-bottom grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="eyebrow">{s.eyebrow}</p>
                <div className="font-mono tabular text-ink-mute mt-3" style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}>
                  N° {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="md:col-span-5">
                <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.05] font-semibold tracking-[-0.03em]">
                  {s.title}
                </h2>
                <p className="mt-5 text-ink-soft text-[1.0625rem] leading-relaxed max-w-[42ch]">
                  {s.summary}
                </p>
                <div className="mt-8">
                  <p className="font-display tabular text-ink text-[2rem] md:text-[2.5rem] leading-none font-semibold tracking-[-0.04em]">
                    {s.fee}
                  </p>
                  <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
                    {s.feeNote}
                  </p>
                </div>
              </div>

              <div className="md:col-span-4">
                <p className="eyebrow mb-5">Includes</p>
                <ul className="space-y-2.5 text-[0.9375rem] text-ink-soft">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-amber mt-[2px]" aria-hidden>▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="blue-band">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow">Engagement</p>
              <h2
                className="mt-5 font-display"
                style={{
                  fontSize: "var(--text-display-2)",
                  lineHeight: "var(--text-display-2--line-height)",
                  letterSpacing: "var(--text-display-2--letter-spacing)",
                  fontWeight: 600,
                  maxWidth: "20ch",
                }}
              >
                Discover, propose, engage. Three steps, two weeks.
              </h2>
              <p className="deck mt-6" style={{ color: "oklch(0.90 0.04 250)" }}>
                Discovery call. Written fee proposal within five working days.
                Engagement letter and software handover within a fortnight.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-paper text-ink px-7 py-[1.0625rem] text-[0.9375rem] font-medium rounded-[2px] hover:bg-paper-deep transition-colors"
              >
                A 30-minute call to see how we can help you
                <span className="text-amber">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
