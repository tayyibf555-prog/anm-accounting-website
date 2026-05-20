import Link from "next/link";

export function SiteFooter() {
  return (
    <>
      {/* MAP BAND — paper-coloured, sits above the blue footer */}
      <section className="hairline-top bg-paper-deep">
        <div className="container-edit py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <p className="eyebrow section-rule">Visit us</p>
              <h2
                className="mt-6 font-display"
                style={{
                  fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  fontWeight: 600,
                }}
              >
                Lancefield Street,<br />
                Glasgow's Finnieston<br />
                quarter.
              </h2>
              <address className="not-italic mt-8 text-[0.9375rem] leading-relaxed text-ink-soft">
                ANM Accounting Ltd<br />
                {/* REPLACE */}
                95–107 Lancefield Street<br />
                Glasgow G3 8HZ<br />
                United Kingdom
              </address>
              <div className="mt-6 space-y-1 text-[0.9375rem] text-ink-soft">
                <p>
                  <a href="tel:+441413000000" className="hover:text-ink">+44 (0)141 300 0000</a>
                </p>
                <p>
                  <a href="mailto:hello@anmaccounting.co.uk" className="hover:text-ink">hello@anmaccounting.co.uk</a>
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-[0.8125rem] text-ink-mute">
                <div>
                  <p className="font-mono uppercase tracking-[0.14em] text-[0.6875rem] text-ink-mute mb-1">Hours</p>
                  <p>Mon–Fri<br />09:00–17:30</p>
                </div>
                <div>
                  <p className="font-mono uppercase tracking-[0.14em] text-[0.6875rem] text-ink-mute mb-1">Nearest stop</p>
                  <p>Anderston Rail<br />3 min walk</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "16 / 11",
                  border: "1px solid var(--color-rule)",
                  background: "var(--color-paper)",
                }}
              >
                <iframe
                  title="ANM Accounting — Glasgow office location"
                  src="https://maps.google.com/maps?q=95-107+Lancefield+St+Glasgow+G3+8HZ&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                    filter: "grayscale(0.25) contrast(1.02)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.8125rem] text-ink-mute">
                <span className="font-mono uppercase tracking-[0.14em] text-[0.6875rem]">
                  55.8617° N · 4.2789° W
                </span>
                <a
                  href="https://www.google.com/maps/place/A+N+M+Accountants/data=!4m2!3m1!1s0x0:0x62b176008200e6f"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-ink border-b border-blue-ink/30 hover:border-blue-ink pb-[2px]"
                >
                  Open in Google Maps <span className="text-amber">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="blue-band">
      <div className="container-edit pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <div className="md:col-span-5">
            <div
              className="font-display text-[3.5rem] leading-none"
              style={{ fontWeight: 700, letterSpacing: "-0.04em" }}
            >
              ANM<span className="text-amber">.</span>
            </div>
            <p className="deck mt-6" style={{ color: "oklch(0.90 0.02 250)" }}>
              Chartered accountants for owner-managed businesses across Glasgow
              and the central belt.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-paper border-b border-paper/40 pb-1 hover:border-paper transition-colors">
              A 30-minute call to see how we can help you
              <span className="text-amber">→</span>
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Office</p>
            <address className="not-italic text-[0.9375rem] leading-relaxed text-paper/90">
              ANM Accounting Ltd<br />
              95–107 Lancefield Street<br />
              Glasgow G3 8HZ<br />
              United Kingdom
            </address>
            <p className="mt-6 text-[0.9375rem] text-paper/90">
              <a href="tel:+441413000000" className="hover:text-paper">
                +44 (0)141 300 0000
              </a>
              <br />
              <a href="mailto:hello@anmaccounting.co.uk" className="hover:text-paper">
                hello@anmaccounting.co.uk
              </a>
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Sitemap</p>
            <ul className="space-y-3 text-[0.9375rem] text-paper/90">
              <li><Link href="/services" className="hover:text-paper">Services</Link></li>
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Regulatory</p>
            <ul className="space-y-3 text-[0.8125rem] text-paper/80 leading-relaxed">
              {/* REPLACE — these are placeholder regulatory IDs */}
              <li>ICAS member firm<br />No. 12345</li>
              <li>ICO registered<br />ZA987654</li>
              <li>Company No.<br />SC555444</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[0.75rem] uppercase tracking-[0.12em] text-paper/70">
            © {new Date().getFullYear()} ANM Accounting Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-[0.8125rem] text-paper/70">
            <Link href="/privacy" className="hover:text-paper">Privacy</Link>
            <Link href="/terms" className="hover:text-paper">Terms of engagement</Link>
            <Link href="/complaints" className="hover:text-paper">Complaints procedure</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
