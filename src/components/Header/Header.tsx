import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Container from '../Container'
import { COMPANY_NAME, NAV_LINKS } from '../../config/siteConfig'
import {
  MenuIcon,
  CloseIcon,
  PinIcon,
  MailIcon,
  ShieldIcon,
  UserCheckIcon,
  LayersIcon,
} from '../decor/Icons'
import { useTab } from '../../context/TabContext'

type IndicatorRect = {
  left: number
  width: number
}

// One glyph per stage of the product's underlying model — address, the
// physical object tied to it, verification, the person/business behind it,
// and the infrastructure layer that connects them. Reused as a persistent
// motif so moving between tabs reads as one path, not five unrelated slides.
const STAGE_ICON: Record<(typeof NAV_LINKS)[number]['id'], typeof PinIcon> = {
  intro: PinIcon,
  problem: MailIcon,
  sources: ShieldIcon,
  impact: UserCheckIcon,
  contact: LayersIcon,
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeTab, setActiveTab } = useTab()
  const rowRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [indicator, setIndicator] = useState<IndicatorRect | null>(null)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const rowEl = rowRef.current
      const activeEl = buttonRefs.current[activeTab]
      if (rowEl && activeEl) {
        const rowRect = rowEl.getBoundingClientRect()
        const activeRect = activeEl.getBoundingClientRect()
        setIndicator({
          left: activeRect.left - rowRect.left,
          width: activeRect.width,
        })
      } else {
        setIndicator(null)
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTab])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-sm">
      <Container paddingX="22px">
        <div ref={rowRef} className="relative flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => setActiveTab('intro')}
            aria-current={activeTab === 'intro' ? 'true' : undefined}
            aria-label={`${COMPANY_NAME} — return to intro`}
            className="text-[1.3125rem] font-extrabold tracking-[0.08em] text-brand transition-opacity hover:opacity-80 sm:text-[1.5rem]"
          >
            {COMPANY_NAME.toUpperCase()}
          </button>

          <nav
            className="relative z-10 hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.id
              const StageIcon = STAGE_ICON[link.id]
              return (
                <button
                  key={link.id}
                  ref={(el) => {
                    buttonRefs.current[link.id] = el
                  }}
                  type="button"
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center gap-2 pb-1 text-sm font-bold transition-colors hover:text-brand ${
                    isActive ? 'text-brand' : 'text-ink'
                  }`}
                >
                  <StageIcon
                    className={`h-3.5 w-3.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}
                    strokeWidth={2}
                  />
                  {link.label}
                </button>
              )
            })}
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-light bg-surface-alt text-ink lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>

          {indicator ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 z-10 hidden h-[2px] rounded-full bg-brand transition-all duration-300 ease-out lg:block"
              style={{ left: indicator.left, width: indicator.width }}
            />
          ) : null}
        </div>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-accent-light bg-surface-alt lg:hidden"
        >
          <Container paddingX="22px">
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Mobile primary"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.id
                const StageIcon = STAGE_ICON[link.id]
                return (
                  <button
                    key={link.id}
                    type="button"
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => {
                      setActiveTab(link.id)
                      setIsMenuOpen(false)
                    }}
                    className={`flex items-center gap-3 rounded-lg px-2 py-3 text-left text-base font-bold hover:bg-surface ${
                      isActive ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    <StageIcon
                      className={`h-4 w-4 flex-shrink-0 ${isActive ? 'opacity-100' : 'opacity-40'}`}
                      strokeWidth={2}
                    />
                    {link.label}
                  </button>
                )
              })}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
