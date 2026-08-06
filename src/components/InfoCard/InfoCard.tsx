import type { ReactNode } from 'react'

type AccentPosition = 'top' | 'bottom' | 'none'
type AccentWeight = 'default' | 'strong' | 'light'

type InfoCardProps = {
  children: ReactNode
  className?: string
  accent?: AccentPosition
  accentWeight?: AccentWeight
  icon?: ReactNode
  padding?: string
}

const accentColor: Record<AccentWeight, string> = {
  default: 'bg-brand',
  strong: 'bg-ink',
  light: 'bg-accent-light',
}

export default function InfoCard({
  children,
  className = '',
  accent = 'top',
  accentWeight = 'default',
  icon,
  padding = 'p-8',
}: InfoCardProps) {
  return (
    <div
      className={`reveal relative overflow-hidden rounded-xl border border-accent-light bg-surface-alt ${padding} shadow-[0_18px_40px_-24px_rgba(8,42,67,0.35)] ${className}`}
    >
      {accent !== 'none' ? (
        <span
          aria-hidden="true"
          className={`absolute inset-x-0 ${accent === 'top' ? 'top-0' : 'bottom-0'} h-[6px] ${accentColor[accentWeight]}`}
        />
      ) : null}
      {icon ? (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-brand">
          {icon}
        </div>
      ) : null}
      {children}
    </div>
  )
}
