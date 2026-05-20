type Deadline = {
  month: number;
  day: number;
  label: string;
  category: "personal" | "corporate" | "payroll";
};

const deadlines: Deadline[] = [
  { month: 1, day: 31, label: "SA filing", category: "personal" },
  { month: 3, day: 31, label: "CT due (Mar)", category: "corporate" },
  { month: 4, day: 5, label: "Year end", category: "personal" },
  { month: 4, day: 19, label: "Final RTI", category: "payroll" },
  { month: 5, day: 19, label: "P11D filing", category: "payroll" },
  { month: 5, day: 31, label: "P60s issued", category: "payroll" },
  { month: 7, day: 6, label: "P11D & NICs", category: "payroll" },
  { month: 7, day: 31, label: "SA payment 2", category: "personal" },
  { month: 10, day: 5, label: "SA register", category: "personal" },
  { month: 10, day: 31, label: "Paper SA", category: "personal" },
  { month: 12, day: 30, label: "PAYE coding", category: "payroll" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const categoryColor: Record<Deadline["category"], string> = {
  personal: "var(--color-blue)",
  corporate: "var(--color-amber)",
  payroll: "var(--color-ink)",
};

const categoryLabel: Record<Deadline["category"], string> = {
  personal: "Personal tax",
  corporate: "Corporation tax",
  payroll: "Payroll",
};

const LABEL_WIDTH_PCT = 6.5; // % of chart width per label — used for collision detection

function dayOfYearPct(month: number, day: number) {
  return ((month - 1) * 30 + (day - 1)) / 360;
}

type Placed = Deadline & {
  x: number;
  above: boolean;
  tier: 0 | 1; // 0 = near timeline, 1 = further from timeline
  isPast: boolean;
};

function placeLabels(items: Deadline[], now: Date): Placed[] {
  const sorted = [...items].sort(
    (a, b) => dayOfYearPct(a.month, a.day) - dayOfYearPct(b.month, b.day)
  );

  // Alternate above/below strictly so adjacent items go to different bands.
  // Then within each band, if a label collides with the previous one in the
  // same band, push it to tier 1 (further out).
  const placed: Placed[] = [];
  let lastXAbove = -Infinity;
  let lastXBelow = -Infinity;

  sorted.forEach((d, i) => {
    const x = dayOfYearPct(d.month, d.day);
    const above = i % 2 === 0;
    const lastX = above ? lastXAbove : lastXBelow;
    const tier: 0 | 1 = (x - lastX) * 100 < LABEL_WIDTH_PCT ? 1 : 0;

    placed.push({
      ...d,
      x,
      above,
      tier,
      isPast:
        d.month < now.getMonth() + 1 ||
        (d.month === now.getMonth() + 1 && d.day < now.getDate()),
    });

    if (above) lastXAbove = x;
    else lastXBelow = x;
  });

  return placed;
}

export function YearCalendar() {
  const now = new Date();
  const todayPct = dayOfYearPct(now.getMonth() + 1, now.getDate());
  const placed = placeLabels(deadlines, now);

  return (
    <div className="relative bg-paper-deep" style={{ border: "1px solid var(--color-rule)" }}>
      {/* Top status bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-8 py-4 md:py-5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-amber" />
          UK tax calendar · Fig. 03
        </div>
        <div className="flex gap-6">
          <span>
            <span className="text-ink-faint">Year</span>{" "}
            <span className="text-ink tabular">{now.getFullYear()}</span>
          </span>
          <span className="hidden sm:inline">
            <span className="text-ink-faint">Source</span>{" "}
            <span className="text-ink">HMRC + ICAS</span>
          </span>
        </div>
      </div>

      {/* Timeline body */}
      <div className="px-4 md:px-10 py-10 md:py-14 overflow-x-auto">
        <div
          className="relative mx-auto"
          style={{ minWidth: "780px", height: "260px" }}
        >
          {/* Above-line labels */}
          {placed
            .filter((d) => d.above)
            .map((d) => (
              <Label
                key={`a-${d.month}-${d.day}`}
                deadline={d}
                placement="above"
              />
            ))}

          {/* Timeline (centered vertically) */}
          <div
            className="absolute inset-x-0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <div className="relative">
              {/* Line */}
              <div
                className="w-full"
                style={{ height: "1px", backgroundColor: "var(--color-ink-faint)" }}
              />

              {/* Month labels */}
              {months.map((m, i) => {
                const x = (i + 0.5) / 12;
                return (
                  <div
                    key={m}
                    className="absolute"
                    style={{ left: `${x * 100}%`, top: "0", transform: "translate(-50%, 0)" }}
                  >
                    <span className="block w-px h-1.5 mx-auto bg-ink-faint" />
                    <span
                      className="block mt-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-mute text-center whitespace-nowrap"
                      style={{ transform: "translateY(2px)" }}
                    >
                      {m}
                    </span>
                  </div>
                );
              })}

              {/* Today marker */}
              <div
                className="absolute"
                style={{
                  left: `${todayPct * 100}%`,
                  top: "0",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative flex flex-col items-center">
                  <span
                    className="absolute -top-8 whitespace-nowrap font-mono text-[0.625rem] uppercase tracking-[0.16em] text-paper px-2 py-[3px]"
                    style={{ backgroundColor: "var(--color-amber)" }}
                  >
                    Today
                  </span>
                  <span
                    className="block w-[2px] h-2"
                    style={{ backgroundColor: "var(--color-amber)" }}
                  />
                </div>
              </div>

              {/* Pins */}
              {placed.map((d) => (
                <span
                  key={`pin-${d.month}-${d.day}`}
                  className="absolute"
                  style={{
                    left: `${d.x * 100}%`,
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    className="block rounded-full"
                    style={{
                      width: "7px",
                      height: "7px",
                      backgroundColor: d.isPast
                        ? "var(--color-ink-faint)"
                        : categoryColor[d.category],
                      opacity: d.isPast ? 0.35 : 1,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Below-line labels */}
          {placed
            .filter((d) => !d.above)
            .map((d) => (
              <Label
                key={`b-${d.month}-${d.day}`}
                deadline={d}
                placement="below"
              />
            ))}
        </div>
      </div>

      {/* Legend */}
      <div
        className="px-6 md:px-10 pb-6 md:pb-7 pt-6 flex flex-wrap gap-x-7 gap-y-3 items-center"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      >
        {(Object.keys(categoryLabel) as Deadline["category"][]).map((k) => (
          <div key={k} className="flex items-center gap-2.5">
            <span
              className="inline-block w-[7px] h-[7px] rounded-full"
              style={{ backgroundColor: categoryColor[k] }}
            />
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
              {categoryLabel[k]}
            </span>
          </div>
        ))}
        <div className="ml-auto flex items-center gap-2.5">
          <span
            className="inline-block"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "var(--color-amber)",
            }}
          />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
            Today
          </span>
        </div>
      </div>
    </div>
  );
}

function Label({ deadline, placement }: { deadline: Placed; placement: "above" | "below" }) {
  const isAbove = placement === "above";
  // Tier 0 = closer to timeline, tier 1 = further out
  const baseLineLength = 28;
  const extraLineLength = 38;
  const lineLength = deadline.tier === 0 ? baseLineLength : baseLineLength + extraLineLength;

  return (
    <div
      className="absolute"
      style={{
        left: `${deadline.x * 100}%`,
        [isAbove ? "top" : "bottom"]: 0,
        transform: "translateX(-50%)",
        width: "72px",
      }}
    >
      <div
        className={`relative flex flex-col items-center ${
          isAbove ? "justify-start" : "justify-end"
        }`}
        style={{ height: "120px" }}
      >
        {isAbove && (
          <div className="flex flex-col items-center" style={{ marginTop: deadline.tier === 0 ? "62px" : "24px" }}>
            <Text deadline={deadline} />
            <span
              className="block w-px"
              style={{
                height: `${lineLength}px`,
                marginTop: "6px",
                backgroundColor: "var(--color-ink-faint)",
                opacity: deadline.isPast ? 0.3 : 0.55,
              }}
            />
          </div>
        )}
        {!isAbove && (
          <div className="flex flex-col items-center" style={{ marginBottom: deadline.tier === 0 ? "62px" : "24px" }}>
            <span
              className="block w-px"
              style={{
                height: `${lineLength}px`,
                marginBottom: "6px",
                backgroundColor: "var(--color-ink-faint)",
                opacity: deadline.isPast ? 0.3 : 0.55,
              }}
            />
            <Text deadline={deadline} />
          </div>
        )}
      </div>
    </div>
  );
}

function Text({ deadline }: { deadline: Placed }) {
  return (
    <div
      className="text-center"
      style={{ opacity: deadline.isPast ? 0.4 : 1 }}
    >
      <p
        className="font-mono tabular text-[0.6875rem] text-ink whitespace-nowrap"
        style={{ letterSpacing: "0.04em" }}
      >
        {String(deadline.day).padStart(2, "0")} {months[deadline.month - 1]}
      </p>
      <p
        className="mt-0.5 text-[0.625rem] text-ink-soft leading-tight whitespace-nowrap"
      >
        {deadline.label}
      </p>
    </div>
  );
}
