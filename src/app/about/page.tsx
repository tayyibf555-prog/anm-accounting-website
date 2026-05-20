import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "An independent Glasgow chartered accountancy practice founded in 2014. Our story, our partners, and how we work.",
};

const milestones = [
  { year: "2014", text: "Practice founded above a coffee shop on Bath Street with three clients." },
  { year: "2017", text: "ICAS Practice Quality Review passed without points to action." },
  { year: "2019", text: "Moved to current Lancefield Street offices in Finnieston. Headcount of five." },
  { year: "2022", text: "Xero Platinum Partner status. Bookkeeping practice formalised as a discrete service line." },
  { year: "2024", text: "Advisory practice formalised. Headcount of eleven. 240+ active client engagements." },
];

const team = [
  {
    name: "Alexander Niall MacDonald",
    role: "Founding Partner, CA",
    bio: "Twelve years at one of the mid-tier firms before founding ANM in 2014. Specialises in owner-managed business taxation and corporate restructuring. ICAS member since 2008.",
  },
  {
    name: "Aisha Patel",
    role: "Partner, ACA · Head of Advisory",
    bio: "Joined as a senior in 2017, made partner in 2022. Leads the advisory practice. Background in M&A diligence; now spends her time on quarterly business reviews and cashflow forecasts that clients actually use.",
  },
  {
    name: "Calum Reid",
    role: "Senior Manager, CA · Head of Compliance",
    bio: "Twelve years across two Glasgow practices. Manages the day-to-day compliance workflow and the firm's relationship with HMRC across enquiries and disclosures.",
  },
  {
    name: "Sarah Donnelly",
    role: "Bookkeeping Manager",
    bio: "Xero certified advisor, ten years across construction, hospitality, and creative agencies. Runs the bookkeeping practice and oversees software migrations.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — statement of practice */}
      <section className="relative overflow-hidden">
        <div className="watermark" aria-hidden>
          <span
            className="watermark__text"
            style={{ fontSize: "clamp(14rem, 30vw, 28rem)", bottom: "-10%" }}
          >
            2014
          </span>
        </div>
        <div className="relative container-edit pt-24 md:pt-32 pb-16 md:pb-20">
          <p className="eyebrow section-rule">About the firm</p>
          <h1
            className="mt-8 font-display"
            style={{
              fontSize: "clamp(3.25rem, 8vw, 7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              maxWidth: "17ch",
              fontWeight: 600,
            }}
          >
            A small Glasgow practice.{" "}
            <span className="text-blue-ink">Built deliberately.</span>
          </h1>
        </div>
      </section>

      {/* Statement of practice — long form */}
      <section className="container-edit pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow">Founded</p>
            <p className="mt-3 font-display tabular text-[2.75rem] leading-none font-semibold tracking-[-0.04em]">2014</p>
            <p className="eyebrow mt-12">Headcount</p>
            <p className="mt-3 font-display tabular text-[2.75rem] leading-none font-semibold tracking-[-0.04em]">11</p>
            <p className="eyebrow mt-12">Clients</p>
            <p className="mt-3 font-display tabular text-[2.75rem] leading-none font-semibold tracking-[-0.04em]">240+</p>
            <p className="eyebrow mt-12">Registered with</p>
            <p className="mt-3 text-[0.9375rem] text-ink-soft leading-relaxed">
              The Institute of Chartered Accountants of Scotland (ICAS).<br />
              {/* REPLACE */}Member firm number 12345.
            </p>
          </aside>

          <div className="md:col-span-8 md:col-start-5 prose-narrow">
            <p>
              ANM was founded in 2014 by Alexander MacDonald, who had spent
              twelve years at a mid-tier Glasgow firm and concluded that the
              standard model of accountancy practice was structurally unable to
              do the work clients actually wanted.
            </p>
            <p>
              That model, broadly, is this: a senior partner wins the work, a
              manager scopes it, a junior executes it, and the client receives an
              annual file and an invoice. The advice that would have changed the
              numbers happened nowhere in that chain. Owner-managers were paying
              for accuracy and receiving accuracy. They were not paying for
              counsel and were not receiving counsel either.
            </p>
            <p>
              ANM was built on the opposite premise. Engagement partners are
              expected to be present, by name, on every client matter. Quarterly
              reviews are scheduled at engagement and are not optional. Fees are
              fixed and published before work begins. The firm has grown slowly
              and deliberately for ten years on this principle, and we intend to
              keep growing on it.
            </p>
            <p>
              Today we serve <span className="amber-underline">240 owner-managed businesses</span>{" "}
              across Glasgow and the central belt. Our clients are construction
              firms, restaurants and bars, professional service practices, e-
              commerce operators, creative agencies, and healthcare practitioners.
              Many came to us from larger firms; some have been with us from the
              founding year.
            </p>
          </div>
        </div>
      </section>

      {/* Partners & team */}
      <section className="bg-paper-deep hairline-top hairline-bottom">
        <div className="container-edit py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-6">
              <p className="eyebrow">The team</p>
              <h2
                className="mt-5 font-display"
                style={{
                  fontSize: "var(--text-display-2)",
                  lineHeight: "var(--text-display-2--line-height)",
                  letterSpacing: "var(--text-display-2--letter-spacing)",
                  fontWeight: 600,
                }}
              >
                Who you'll actually work with.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="deck">
                On engagement you are assigned an engagement partner by name.
                That partner remains your point of contact for the duration of
                the relationship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-8">
            {team.map((m, i) => (
              <article key={m.name} className="reveal">
                <p className="font-mono tabular text-ink-mute text-[0.6875rem] uppercase tracking-[0.14em] mb-3">
                  {/* REPLACE: swap placeholder block for a real portrait */}
                  Partner / {String(i + 1).padStart(2, "0")}
                </p>
                <div
                  className="w-full aspect-[4/5] mb-6"
                  style={{
                    background:
                      "linear-gradient(160deg, oklch(0.88 0.012 85), oklch(0.94 0.012 85))",
                    border: "1px solid var(--color-rule)",
                  }}
                  aria-hidden
                />
                <h3 className="font-display text-[1.5rem] leading-tight font-semibold tracking-[-0.025em]">
                  {m.name}
                </h3>
                <p className="mt-2 font-mono text-[0.6875rem] text-blue-ink uppercase tracking-[0.14em]">
                  {m.role}
                </p>
                <p className="mt-5 text-ink-soft text-[0.9375rem] leading-relaxed max-w-[44ch]">
                  {m.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-edit py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">A short history</p>
            <h2
              className="mt-5 font-display"
              style={{
                fontSize: "var(--text-display-3)",
                lineHeight: "var(--text-display-3--line-height)",
                letterSpacing: "var(--text-display-3--letter-spacing)",
                fontWeight: 600,
              }}
            >
              Ten years, deliberately slow growth.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ol>
              {milestones.map((m, i) => (
                <li
                  key={m.year}
                  className="reveal grid grid-cols-12 gap-6 py-7"
                  style={{
                    borderTop: i === 0 ? "1px solid var(--color-rule)" : undefined,
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  <span className="col-span-3 font-display tabular text-[1.5rem] md:text-[2rem] leading-none font-semibold tracking-[-0.04em] text-blue-ink">
                    {m.year}
                  </span>
                  <p className="col-span-9 text-ink-soft text-[1rem] leading-relaxed max-w-[48ch]">
                    {m.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hairline-top">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow">Next step</p>
              <h2
                className="mt-5 font-display"
                style={{
                  fontSize: "var(--text-display-2)",
                  lineHeight: "var(--text-display-2--line-height)",
                  letterSpacing: "var(--text-display-2--letter-spacing)",
                  fontWeight: 600,
                  maxWidth: "18ch",
                }}
              >
                Visit, call, or book a discovery slot.
              </h2>
              <p className="deck mt-6">
                Our offices are on Lancefield Street in Glasgow's Finnieston
                quarter, three minutes from Anderston rail. Walk-ins by
                appointment.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary self-start">
                A 30-minute call to see how we can help you{" "}
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
