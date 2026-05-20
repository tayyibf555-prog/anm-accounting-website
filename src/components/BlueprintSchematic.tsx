export function BlueprintSchematic({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      role="presentation"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
        </pattern>
        <pattern id="finegrid" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.12" />
        </pattern>
      </defs>

      <rect width="600" height="600" fill="url(#grid)" />

      {/* Corner registration marks */}
      {[
        [40, 40],
        [560, 40],
        [40, 560],
        [560, 560],
      ].map(([cx, cy], i) => (
        <g key={i} stroke="currentColor" strokeWidth="1" fill="none">
          <circle cx={cx} cy={cy} r="6" />
          <line x1={cx - 14} y1={cy} x2={cx - 8} y2={cy} />
          <line x1={cx + 8} y1={cy} x2={cx + 14} y2={cy} />
          <line x1={cx} y1={cy - 14} x2={cx} y2={cy - 8} />
          <line x1={cx} y1={cy + 8} x2={cx} y2={cy + 14} />
        </g>
      ))}

      {/* Central "ledger" frame */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        transform="translate(120, 110)"
      >
        <rect width="360" height="380" fill="url(#finegrid)" opacity="0.6" />
        <rect width="360" height="380" />

        {/* Horizontal rules — the ledger lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={32 + i * 28}
            x2="360"
            y2={32 + i * 28}
            strokeWidth="0.5"
            opacity="0.4"
          />
        ))}

        {/* Vertical dividers */}
        <line x1="240" y1="0" x2="240" y2="380" strokeWidth="0.5" opacity="0.5" />
        <line x1="300" y1="0" x2="300" y2="380" strokeWidth="0.5" opacity="0.5" />

        {/* Header */}
        <line x1="0" y1="32" x2="360" y2="32" strokeWidth="1" />
        <text
          x="12"
          y="22"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          letterSpacing="0.18em"
          opacity="0.85"
        >
          SCHEDULE / FIG. 01
        </text>
        <text
          x="252"
          y="22"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          letterSpacing="0.18em"
          opacity="0.85"
        >
          DR
        </text>
        <text
          x="312"
          y="22"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          letterSpacing="0.18em"
          opacity="0.85"
        >
          CR
        </text>

        {/* Sample entries */}
        {[
          ["Engagement", "01.04", "—"],
          ["Q2 review", "01.07", "—"],
          ["Q3 review", "01.10", "Plan"],
          ["Year-end", "31.03", "File"],
          ["Tax due", "01.01", "Settle"],
        ].map(([label, date, action], i) => (
          <g key={i} fontFamily="ui-monospace, monospace" fontSize="9" opacity="0.85">
            <text x="12" y={56 + i * 28} fill="currentColor">
              {label}
            </text>
            <text x="248" y={56 + i * 28} fill="currentColor">
              {date}
            </text>
            <text x="308" y={56 + i * 28} fill="currentColor">
              {action}
            </text>
          </g>
        ))}

        {/* Total line */}
        <line x1="0" y1="200" x2="360" y2="200" strokeWidth="1.2" />
        <text
          x="12"
          y="220"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          letterSpacing="0.14em"
          opacity="0.9"
        >
          C / F
        </text>

        {/* Dimension marks (architectural feel) */}
        <g opacity="0.7">
          <line x1="0" y1="-20" x2="360" y2="-20" strokeWidth="0.5" />
          <line x1="0" y1="-24" x2="0" y2="-16" strokeWidth="0.5" />
          <line x1="360" y1="-24" x2="360" y2="-16" strokeWidth="0.5" />
          <text
            x="180"
            y="-26"
            fill="currentColor"
            fontFamily="ui-monospace, monospace"
            fontSize="8"
            letterSpacing="0.14em"
            textAnchor="middle"
          >
            FY 26/27
          </text>
        </g>
      </g>

      {/* Compass / north mark */}
      <g
        transform="translate(520, 90)"
        stroke="currentColor"
        fill="none"
        strokeWidth="0.8"
      >
        <circle r="22" />
        <line x1="0" y1="-22" x2="0" y2="22" />
        <line x1="-22" y1="0" x2="22" y2="0" />
        <polygon points="0,-18 -3,0 0,2 3,0" fill="currentColor" opacity="0.85" />
        <text
          y="32"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          letterSpacing="0.18em"
          textAnchor="middle"
          opacity="0.85"
        >
          N
        </text>
      </g>

      {/* Scale bar */}
      <g
        transform="translate(120, 530)"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0.8"
      >
        <line x1="0" y1="0" x2="120" y2="0" />
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="60" y1="-3" x2="60" y2="3" />
        <line x1="120" y1="-4" x2="120" y2="4" />
        <text
          x="0"
          y="18"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          letterSpacing="0.14em"
          opacity="0.85"
        >
          0
        </text>
        <text
          x="56"
          y="18"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          letterSpacing="0.14em"
          opacity="0.85"
        >
          06
        </text>
        <text
          x="112"
          y="18"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          letterSpacing="0.14em"
          opacity="0.85"
        >
          12 MO
        </text>
      </g>

      {/* Reference labels */}
      <text
        x="40"
        y="100"
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        letterSpacing="0.18em"
        opacity="0.9"
      >
        DOC. 001 / REV B
      </text>
      <text
        x="40"
        y="570"
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        letterSpacing="0.18em"
        opacity="0.85"
      >
        ANM ACCOUNTING / GLASGOW
      </text>
      <text
        x="560"
        y="570"
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        letterSpacing="0.18em"
        opacity="0.85"
        textAnchor="end"
      >
        DRAWN BY A.M.
      </text>
    </svg>
  );
}
