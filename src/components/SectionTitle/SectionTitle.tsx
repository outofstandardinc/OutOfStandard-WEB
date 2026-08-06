import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  as?: 'h1' | 'h2'
  children?: ReactNode
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  as = 'h2',
  children,
  className = '',
}: SectionTitleProps) {
  const Heading = as

  return (
    <div className={`text-left ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.12] text-brand">
        {title}
      </Heading>
      {children ? (
        <div className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">
          {children}
        </div>
      ) : null}
    </div>
  )
}
