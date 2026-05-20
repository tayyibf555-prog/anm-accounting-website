type Deadline = {
  month: number; // 1-12
  day: number;
  label: string;
  category: "personal" | "corporate" | "payroll" | "vat";
};

const deadlines: Deadline[] = [
  { month: 1, day: 31, label: "SA online filing", category: "personal" },
  { month: 3, day: 31, label: "CT due (Mar y/e)", category: "corporate" },
  { month: 4, day: 5, label: "Tax year ends", category: "personal" },
  { month: 4, day: 19, label: "Final RTI", category: "payroll" },
  { month: 5, day: 19, label: "P11D filing", category: "payroll" },
  { month: 5, day: 31, label: "P60s issued", category: "payroll" },
  { month: 7, day: 6, label: "P11D & NICs", category: "payroll" },
  { month: 7, day: 31, label: "SA payment 2", category: "personal" },
  { month: 10, day: 5, label: "SA registration", category: "personal" },
  { month: 10, day: 31, label: "Paper SA filing", category: "personal" },
  { month: 12, day: 30, label: "PAYE coding", category: "payroll" },
];

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const categoryColor = {
  personal: "var(--color-blue)",
  corporate: "var(--color-amber)",
  payroll: "var(--color-ink)",
  vat: "var(--color-blue-ink)",
};

const categoryLabel = {
  personal: "Personal tax",
  corporate: "Corporation tax",
  payroll: "Payroll",
  vat: "VAT",
};

export function YearCalendar() {
  // Current date — gives us a "today" marker
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  const monthProgress = (currentDay - 1) / 30;
  const todayX = ((currentMonth - 1) + monthProgress) / 12;

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

      {/* Calendar timeline */}
      <div className="px-6 md:px-10 pt-10 md:pt-12 pb-6 md:pb-8">
        <div className="relative">
          {/* Track */}
          <div
            className="relative h-px w-full"
            style={{ backgroundColor: "var(--color-ink-faint)" }}
          >
            {/* Month ticks */}
            {months.map((m, i) => {
              const x = i / 12;
              return (
                <div
                  key={m}
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: `${x * 100}%` }}
                >
                  <span className="block w-px h-3 bg-ink-faint -mt-1" />
                  <span className="block mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute -translate-x-1/2 absolute left-1/2">
                    {m}
                  </span>
                </div>
              );
            })}

            {/* End cap */}
            <div className="absolute top-0 right-0">
              <span className="block w-px h-3 bg-ink-faint -mt-1" />
            </div>

            {/* Today marker */}
            <div
              className="absolute -top-12"
              style={{ left: `${todayX * 100}%`, transform: "translateX(-50%)" }}
            >
              <div className="relative flex flex-col items-center">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-amber whitespace-nowrap">
                  Today
                </span>
                <span
                  className="block w-[2px] mt-1"
                  style={{
                    height: "44px",
                    backgroundColor: "var(--color-amber)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Deadline pins */}
          <div className="relative h-32 mt-8">
            {deadlines.map((d, i) => {
              const x = ((d.month - 1) + (d.day - 1) / 30) / 12;
              const isPast =
                d.month < currentMonth ||
                (d.month === currentMonth && d.day < currentDay);
              const alternate = i % 2 === 0 ? 0 : 60;

              return (
                <div
                  key={`${d.month}-${d.day}`}
                  className="absolute top-0"
                  style={{
                    left: `${x * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {/* Lead line */}
                  <span
                    className="block w-px"
                    style={{
                      height: `${20 + alternate}px`,
                      backgroundColor: isPast
                        ? "var(--color-ink-faint)"
                        : categoryColor[d.category],
                      opacity: isPast ? 0.4 : 1,
                    }}
                  />
                  {/* Dot */}
                  <span
                    className="block w-2 h-2 -mt-1 -ml-[3.5px]"
                    style={{
                      backgroundColor: isPast
                        ? "var(--color-ink-faint)"
                        : categoryColor[d.category],
                      borderRadius: "50%",
                    }}
                  />
                  {/* Label */}
                  <div
                    className="mt-1 whitespace-nowrap text-[0.6875rem] leading-tight"
                    style={{
                      transform: "translateX(-50%) translateX(8px)",
                      opacity: isPast ? 0.4 : 1,
                    }}
                  >
                    <p className="font-mono tabular text-ink">
                      {d.day.toString().padStart(2, "0")} {months[d.month - 1]}
                    </p>
                    <p className="text-ink-soft mt-0.5 max-w-[100px] whitespace-normal">
                      {d.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div
          className="mt-8 pt-6 flex flex-wrap gap-x-8 gap-y-3 text-[0.8125rem] text-ink-soft"
          style={{ borderTop: "1px solid var(--color-rule)" }}
        >
          {(Object.keys(categoryLabel) as (keyof typeof categoryLabel)[]).map(
            (k) => (
              <div key={k} className="flex items-center gap-2.5">
                <span
                  className="inline-block w-2.5 h-2.5"
                  style={{
                    backgroundColor: categoryColor[k],
                    borderRadius: "50%",
                  }}
                />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
                  {categoryLabel[k]}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
