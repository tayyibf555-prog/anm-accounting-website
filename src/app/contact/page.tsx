import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Book a discovery call, call our office directly, or visit us on Lancefield Street in Glasgow's Finnieston quarter.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="watermark" aria-hidden>
          <span
            className="watermark__text"
            style={{ fontSize: "clamp(14rem, 32vw, 28rem)", bottom: "-10%" }}
          >
            ↘
          </span>
        </div>
        <div className="relative container-edit pt-24 md:pt-32 pb-12">
          <p className="eyebrow section-rule">Contact</p>
          <h1
            className="mt-8 font-display"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              maxWidth: "18ch",
              fontWeight: 600,
            }}
          >
            A 30-minute call. Then a{" "}
            <span className="text-blue-ink">decision</span>, either way.
          </h1>
          <p className="deck mt-10 max-w-[58ch]">
            Discovery calls are with a chartered partner, not a gatekeeper. We
            listen, we ask, and within five working days you receive a written
            fee proposal or an honest note that we are not the right firm for
            the work.
          </p>
        </div>
      </section>

      {/* Form + direct */}
      <section className="container-edit pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 hairline-top pt-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-8">Request a discovery call</p>
            <ContactForm />
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <p className="eyebrow mb-8">Or reach us directly</p>

            <div className="space-y-10">
              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">By phone</p>
                <a
                  href="tel:+441413000000"
                  className="block mt-3 font-display tabular text-[2.25rem] md:text-[2.5rem] leading-none font-semibold tracking-[-0.04em] text-ink hover:text-blue-ink transition-colors"
                >
                  0141 300 0000
                </a>
                <p className="mt-2 text-[0.875rem] text-ink-mute">
                  Mon–Fri, 09:00–17:30
                </p>
              </div>

              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">By email</p>
                <a
                  href="mailto:hello@anmaccounting.co.uk"
                  className="block mt-3 text-[1.125rem] text-ink hover:text-blue-ink transition-colors break-all"
                >
                  hello@anmaccounting.co.uk
                </a>
                <p className="mt-2 text-[0.875rem] text-ink-mute">
                  &lt; 24-hour response guaranteed
                </p>
              </div>

              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">In person</p>
                <address className="not-italic mt-3 text-[1rem] text-ink leading-relaxed">
                  ANM Accounting Ltd<br />
                  {/* REPLACE */}
                  95–107 Lancefield Street<br />
                  Glasgow G3 8HZ
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=St+Vincent+Street+Glasgow"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-ink text-[0.9375rem] border-b border-blue-ink/30 hover:border-blue-ink pb-[2px]"
                >
                  Open in maps <span className="text-amber">→</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Visit notes */}
      <section className="bg-paper-deep hairline-top">
        <div className="container-edit py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Practical</p>
              <h2
                className="mt-5 font-display"
                style={{
                  fontSize: "var(--text-display-3)",
                  lineHeight: "var(--text-display-3--line-height)",
                  letterSpacing: "var(--text-display-3--letter-spacing)",
                  fontWeight: 600,
                }}
              >
                Getting to the office.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="eyebrow mb-3">Subway</p>
                <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
                  Exhibition Centre or St Enoch, both around ten minutes on foot.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Rail</p>
                <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
                  Anderston (three minutes) or Charing Cross (six minutes) on foot.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Parking</p>
                <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
                  On-site visitor bays and metered street parking on Lancefield
                  Street and Stobcross Road.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Access</p>
                <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
                  Level entrance, lift to all client floors, accessible WC on
                  the ground floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
