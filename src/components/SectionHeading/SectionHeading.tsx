import type { ComponentType } from 'react'

type IconProps = {
  className?: string
  strokeWidth?: number
}

type SectionHeadingProps = {
  icon: ComponentType<IconProps>
  label: string
  title: string
}

// Replaces the old "floating glass card per tab" pattern. The kicker icon
// ties each tab to its place in the address → object → verification →
// person/business → infrastructure sequence (same glyph as the header
// stepper), so switching tabs reads as moving along one path instead of
// flipping to an unrelated slide.
export default function SectionHeading({ icon: Icon, label, title }: SectionHeadingProps) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">
        <Icon className="h-4 w-4 text-brand" strokeWidth={2} />
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        <span>{label}</span>
      </div>
      <h2 className="mt-4 text-[clamp(2.1rem,4.2vw,3.4rem)] font-extrabold leading-[1.06] text-brand">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-6 block h-[2px] w-14 rounded-full bg-brand"
      />
    </div>
  )
}
