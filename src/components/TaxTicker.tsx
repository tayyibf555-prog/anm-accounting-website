const items = [
  { date: "31 Jan", label: "Self-assessment filing deadline" },
  { date: "5 Apr", label: "End of UK tax year" },
  { date: "19 May", label: "P11D filing deadline" },
  { date: "31 May", label: "P60s issued to employees" },
  { date: "31 Jul", label: "Second self-assessment payment on account" },
  { date: "5 Oct", label: "Register for self-assessment" },
  { date: "31 Oct", label: "Paper self-assessment deadline" },
  { date: "19 Apr", label: "Final RTI submission for 24/25" },
  { date: "Quarterly", label: "VAT returns under MTD" },
  { date: "9 months + 1 day", label: "Corporation tax due, after year-end" },
];

export function TaxTicker() {
  // Duplicate for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="ticker" role="region" aria-label="UK tax calendar">
      <div className="ticker__track">
        {loop.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__date">{item.date}</span>
            <span className="ticker__dot" aria-hidden />
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
