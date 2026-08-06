import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Container from '../Container'
import { COMPANY_NAME, NAV_LINKS } from '../../config/siteConfig'
import { MenuIcon, CloseIcon } from '../decor/Icons'
import { useTab } from '../../context/TabContext'

const DISPLAY_NAME = COMPANY_NAME.replace(', Inc.', '')

type IndicatorRect = {
  left: number
  width: number
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
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_8px_24px_-16px_rgba(8,42,67,0.35)] backdrop-blur-sm">
      <Container paddingX="22px">
        <div ref={rowRef} className="relative flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => setActiveTab('intro')}
            aria-current={activeTab === 'intro' ? 'true' : undefined}
            aria-label={`${COMPANY_NAME} — return to intro`}
            className="text-[1.3125rem] font-extrabold tracking-[0.08em] text-brand transition-opacity hover:opacity-80 sm:text-[1.5rem]"
          >
            {DISPLAY_NAME.toUpperCase()}
          </button>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.id
              return (
                <button
                  key={link.id}
                  ref={(el) => {
                    buttonRefs.current[link.id] = el
                  }}
                  type="button"
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-sm font-bold transition-colors hover:text-brand ${
                    isActive ? 'text-brand' : 'text-ink'
                  }`}
                >
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
              className="pointer-events-none absolute bottom-0 hidden h-[3px] rounded-full bg-brand shadow-[0_6px_10px_-2px_rgba(47,85,231,0.75)] transition-all duration-300 ease-out lg:block"
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
                return (
                  <button
                    key={link.id}
                    type="button"
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => {
                      setActiveTab(link.id)
                      setIsMenuOpen(false)
                    }}
                    className={`rounded-lg px-2 py-3 text-left text-base font-bold hover:bg-surface ${
                      isActive ? 'text-brand' : 'text-ink'
                    }`}
                  >
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
