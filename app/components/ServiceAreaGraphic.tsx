const cityLabels = [
  { name: "Westminster", x: 220, y: 86, anchor: "middle" },
  { name: "Thornton", x: 365, y: 94, anchor: "middle" },
  { name: "Arvada", x: 125, y: 145, anchor: "middle" },
  { name: "Aurora", x: 485, y: 218, anchor: "middle" },
  { name: "Lakewood", x: 95, y: 255, anchor: "middle" },
  { name: "Englewood", x: 295, y: 300, anchor: "middle" },
  { name: "Littleton", x: 190, y: 365, anchor: "middle" },
  { name: "Centennial", x: 420, y: 350, anchor: "middle" },
] as const;

export default function ServiceAreaGraphic() {
  return (
    <div
      data-reveal
      className="rounded-[2rem] border border-[color:rgba(199,163,90,0.3)] bg-[#21191a] p-3 shadow-[0_20px_60px_rgba(31,23,21,0.18)] md:p-5"
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#291e20]">
        <svg
          viewBox="0 0 580 430"
          role="img"
          aria-label="Illustrative Denver Metro service area centered on Denver and including nearby communities. Coverage is approximate and availability varies by address."
          className="block h-auto min-h-[280px] w-full"
        >
          <defs>
            <pattern
              id="service-area-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#f4e7cf"
                strokeOpacity=".07"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="service-area-coverage" cx="50%" cy="48%" r="55%">
              <stop offset="0%" stopColor="#c7a35a" stopOpacity=".28" />
              <stop offset="70%" stopColor="#8b2735" stopOpacity=".2" />
              <stop offset="100%" stopColor="#8b2735" stopOpacity=".06" />
            </radialGradient>
            <filter id="service-area-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          <rect width="580" height="430" fill="#291e20" />
          <rect width="580" height="430" fill="url(#service-area-grid)" />

          <path
            d="M28 122 C128 102 160 132 235 112 S390 78 552 112"
            fill="none"
            stroke="#f4e7cf"
            strokeOpacity=".055"
            strokeWidth="18"
          />
          <path
            d="M50 330 C150 288 225 340 310 315 S440 265 550 292"
            fill="none"
            stroke="#f4e7cf"
            strokeOpacity=".045"
            strokeWidth="12"
          />

          <ellipse
            cx="290"
            cy="225"
            rx="228"
            ry="164"
            fill="url(#service-area-coverage)"
            stroke="#c7a35a"
            strokeOpacity=".48"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />
          <ellipse
            cx="290"
            cy="225"
            rx="180"
            ry="108"
            fill="none"
            stroke="#f4e7cf"
            strokeOpacity=".12"
          />

          {cityLabels.map((city) => (
            <g key={city.name}>
              <circle cx={city.x} cy={city.y - 15} r="3" fill="#c7a35a" opacity=".8" />
              <text
                x={city.x}
                y={city.y}
                textAnchor={city.anchor}
                fill="#f4e7cf"
                fillOpacity=".8"
                fontSize="13"
                fontWeight="600"
                letterSpacing=".2"
              >
                {city.name}
              </text>
            </g>
          ))}

          <circle
            cx="290"
            cy="220"
            r="24"
            fill="#c7a35a"
            opacity=".18"
            filter="url(#service-area-glow)"
          />
          <circle cx="290" cy="220" r="12" fill="#6f1d28" stroke="#f4e7cf" strokeWidth="3" />
          <circle cx="290" cy="220" r="3.5" fill="#f4e7cf" />
          <text
            x="290"
            y="252"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="18"
            fontWeight="700"
            letterSpacing=".3"
          >
            Denver
          </text>

          <g transform="translate(24 24)">
            <rect width="214" height="44" rx="12" fill="#1b1516" fillOpacity=".82" />
            <rect x="12" y="12" width="3" height="20" rx="1.5" fill="#c7a35a" />
            <text x="26" y="28" fill="#ffffff" fontSize="14" fontWeight="700">
              Denver Metro Service Area
            </text>
          </g>

          <text
            x="290"
            y="414"
            textAnchor="middle"
            fill="#f4e7cf"
            fillOpacity=".55"
            fontSize="10"
            letterSpacing=".8"
          >
            APPROXIMATE COVERAGE · AVAILABILITY VARIES BY ADDRESS
          </text>
        </svg>
      </div>
    </div>
  );
}
