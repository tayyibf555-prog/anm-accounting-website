const steps = [
  {
    n: "01",
    label: "Discovery",
    duration: "30 min",
    detail: "Phone call with a chartered partner. Free, no obligation.",
  },
  {
    n: "02",
    label: "Proposal",
    duration: "5 days",
    detail: "Written, fixed-fee proposal. No timesheet billing.",
  },
  {
    n: "03",
    label: "Engagement",
    duration: "2 weeks",
    detail: "Letter, software handover, prior-accountant clearance.",
  },
  {
    n: "04",
    label: "Quarterly review",
    duration: "Recurring",
    detail: "Scheduled at engagement, four per year, calendared.",
  },
];

export function EngagementDiagram() {
  return (
    <div
      className="relative bg-paper-deep"
      style={{ border: "1px solid var(--color-rule)" }}
    >
      {/* Top schedule bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-8 py-4 md:py-5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-amber" />
          Engagement schedule · Fig. 02
        </div>
        <div className="flex gap-6">
          <span>
            <span className="text-ink-faint">Total</span>{" "}
            <span className="text-ink">≤ 14 working days</span>
          </span>
          <span className="hidden sm:inline">
            <span className="text-ink-faint">Rev</span>{" "}
            <span className="text-ink">C</span>
          </span>
        </div>
      </div>

      {/* Diagram body */}
      <div className="p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-y-8 md:gap-x-4 items-stretch">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="md:col-span-2 contents md:block"
              style={{
                gridColumn: i < 3 ? `${i * 2 + 1} / span 2` : undefined,
              }}
            >
              <div className="relative md:h-full flex md:block items-start gap-4">
                {/* Step block */}
                <div
                  className="w-full relative bg-paper"
                  style={{ border: "1px solid var(--color-rule)" }}
                >
                  <div
                    className="flex items-baseline justify-between px-4 py-3"
                    style={{ borderBottom: "1px solid var(--color-rule)" }}
                  >
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                      Step / {s.n}
                    </span>
                    <span className="font-mono tabular text-[0.6875rem] uppercase tracking-[0.14em] text-amber">
                      {s.duration}
                    </span>
                  </div>
                  <div className="px-4 py-4">
                    <p
                      className="font-display font-semibold tracking-[-0.02em] text-ink"
                      style={{ fontSize: "1.125rem", lineHeight: 1.15 }}
                    >
                      {s.label}
                    </p>
                    <p className="mt-2 text-[0.8125rem] leading-snug text-ink-soft">
                      {s.detail}
                    </p>
                  </div>

                  {/* Corner registration */}
                  <span
                    className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] bg-ink"
                    aria-hidden
                  />
                  <span
                    className="absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] bg-ink"
                    aria-hidden
                  />
                </div>

                {/* Connector — between steps */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop: horizontal arrow on the right */}
                    <div
                      aria-hidden
                      className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center gap-1"
                      style={{
                        left: "calc(100% + 2px)",
                        width: "calc(50% / 2)",
                      }}
                    >
                      <span
                        className="block flex-1 h-px"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, var(--color-ink-faint) 50%, transparent 50%)",
                          backgroundSize: "8px 1px",
                          backgroundRepeat: "repeat-x",
                        }}
                      />
                      <span className="text-amber text-[0.75rem]">→</span>
                    </div>
                    {/* Mobile: vertical arrow below */}
                    <div
                      aria-hidden
                      className="md:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    >
                      <span
                        className="block w-px h-4"
                        style={{
                          backgroundImage:
                            "linear-gradient(to bottom, var(--color-ink-faint) 50%, transparent 50%)",
                          backgroundSize: "1px 4px",
                          backgroundRepeat: "repeat-y",
                        }}
                      />
                      <span className="text-amber text-[0.75rem]">↓</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom annotation */}
        <div
          className="mt-12 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-[0.8125rem] text-ink-soft"
          style={{ borderTop: "1px solid var(--color-rule)" }}
        >
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute mb-1">
              Engagement partner
            </p>
            <p>Assigned by name. Same partner for the lifetime of the engagement.</p>
          </div>
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute mb-1">
              Fee structure
            </p>
            <p>Fixed monthly retainer or fixed project fee. No hourly billing.</p>
          </div>
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute mb-1">
              Cancellation
            </p>
            <p>30 days written notice. We assist with the handover, free of charge.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
