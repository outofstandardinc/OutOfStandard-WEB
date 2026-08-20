import type { ReactNode } from 'react'

// Frosted glass panel: a semi-transparent tint over a blurred backdrop and a
// thin light edge, with no drop shadow. Placed behind text so it stays
// readable over the background map.
export default function GlassPanel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border border-white/40 bg-surface-alt/5 p-6 backdrop-blur-[4px] backdrop-saturate-[1.2] sm:p-10 ${className}`}
    >
      {children}
    </div>
  )
}
