import type { ReactNode } from 'react'

// Frosted glass panel: a semi-transparent tint over a blurred backdrop, a thin
// light edge, and a soft drop shadow. Placed behind text so it stays readable
// over the background map.
export default function GlassPanel({
  children,
  className = '',
  shadow = true,
}: {
  children: ReactNode
  className?: string
  shadow?: boolean
}) {
  return (
    <div
      className={`rounded-xl border border-white/40 bg-surface-alt/5 p-6 backdrop-blur-[4px] backdrop-saturate-[1.2] sm:p-10 ${shadow ? 'shadow-[0_9px_25px_-12px_rgba(8,42,67,0.55)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
