type InfrastructureSceneProps = {
  className?: string
}

/**
 * Architectural line illustration standing in for photography of civic and
 * postal infrastructure — building massing, a grid facade, and a route/network
 * motif rendered in the site's blue palette.
 */
export default function InfrastructureScene({ className = '' }: InfrastructureSceneProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      role="img"
      aria-label="Line illustration of civic and postal infrastructure buildings connected by a network of routes"
    >
      <rect width="640" height="480" fill="#DDE2FA" />
      <rect x="0" y="360" width="640" height="120" fill="#c9d2f5" />

      {/* skyline massing */}
      <g fill="#FFFFFF" stroke="#2F55E7" strokeWidth="2">
        <rect x="60" y="200" width="90" height="180" />
        <rect x="170" y="150" width="110" height="230" />
        <rect x="300" y="230" width="80" height="150" />
        <rect x="400" y="120" width="120" height="260" />
        <rect x="540" y="190" width="70" height="190" />
      </g>

      {/* window grid */}
      <g stroke="#2F55E7" strokeWidth="1.4" opacity="0.55">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 3 }).map((_, col) => (
            <rect
              key={`w1-${row}-${col}`}
              x={80 + col * 22}
              y={220 + row * 24}
              width="12"
              height="14"
              fill="none"
            />
          )),
        )}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <rect
              key={`w2-${row}-${col}`}
              x={186 + col * 22}
              y={170 + row * 24}
              width="12"
              height="14"
              fill="none"
            />
          )),
        )}
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <rect
              key={`w3-${row}-${col}`}
              x={416 + col * 24}
              y={140 + row * 24}
              width="14"
              height="14"
              fill="none"
            />
          )),
        )}
      </g>

      {/* civic facade columns */}
      <g fill="#FFFFFF" stroke="#082A43" strokeWidth="2">
        <rect x="0" y="380" width="640" height="14" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={20 + i * 62} y="330" width="16" height="50" />
        ))}
        <polygon points="0,330 640,330 610,296 30,296" />
      </g>

      {/* route / network motif */}
      <g stroke="#2F55E7" strokeWidth="2.5" fill="none" opacity="0.85">
        <path d="M10 430 C 160 410, 220 460, 340 420 S 520 380, 630 410" />
        <circle cx="10" cy="430" r="5" fill="#2F55E7" stroke="none" />
        <circle cx="340" cy="420" r="5" fill="#2F55E7" stroke="none" />
        <circle cx="630" cy="410" r="5" fill="#2F55E7" stroke="none" />
      </g>
    </svg>
  )
}
