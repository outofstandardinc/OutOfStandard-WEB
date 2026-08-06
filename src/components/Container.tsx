import type { ReactNode } from 'react'

export default function Container({
  children,
  className = '',
  paddingX = '44px',
}: {
  children: ReactNode
  className?: string
  paddingX?: string
}) {
  return (
    <div
      className={`w-full ${className}`}
      style={{ paddingLeft: paddingX, paddingRight: paddingX }}
    >
      {children}
    </div>
  )
}
