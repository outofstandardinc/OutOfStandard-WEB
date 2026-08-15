import { NAV_LINKS } from '../../config/siteConfig'
import { useTab } from '../../context/TabContext'
import { ChevronNextIcon, ChevronDoubleLeftIcon } from '../decor/Icons'

const CAPSULE_CLASS =
  'absolute inset-0 flex items-center justify-center rounded-full border border-white/40 bg-surface-alt/20 text-brand shadow-[0_9px_25px_-10px_rgba(8,42,67,0.55)] backdrop-blur-[6px] backdrop-saturate-[1.4] transition-transform hover:scale-[1.02]'

export default function NextSectionButton() {
  const { activeTab, setActiveTab } = useTab()
  const currentIndex = NAV_LINKS.findIndex((link) => link.id === activeTab)
  const isLast = currentIndex === NAV_LINKS.length - 1
  const upcoming = NAV_LINKS.slice(currentIndex + 1)
  const peeking = upcoming.slice(1)

  return (
    <>
      {/* Reserves horizontal space in the layout so the main content narrows
          to make room. The visible button below is viewport-fixed, so its
          own position never depends on how tall the active panel is. */}
      <div className="hidden w-24 flex-shrink-0 sm:block" aria-hidden="true" />

      <div className="fixed bottom-12 right-8 top-20 z-50 hidden w-14 sm:flex sm:items-center sm:justify-center">
        <div className="relative h-[calc(100vh-161px)] w-14">
          {isLast ? (
            <button
              type="button"
              onClick={() => setActiveTab(NAV_LINKS[0].id)}
              aria-label={`Back to ${NAV_LINKS[0].label}`}
              className={CAPSULE_CLASS}
            >
              <ChevronDoubleLeftIcon className="h-6 w-6" />
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setActiveTab(upcoming[0].id)}
                aria-label={`Next section: ${upcoming[0].label}`}
                className={`${CAPSULE_CLASS} z-10`}
              >
                <ChevronNextIcon className="h-6 w-6" />
              </button>

              {peeking.map((link, i) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => setActiveTab(link.id)}
                  aria-label={`Go to: ${link.label}`}
                  title={link.label}
                  style={{
                    bottom: `${8 + i * 17}px`,
                    right: `${-(7 * (i + 1))}px`,
                    opacity: 1 - i * 0.14,
                    zIndex: peeking.length - i,
                  }}
                  className="absolute h-7 w-9 rounded-full border border-white/40 bg-surface-alt/20 backdrop-blur-[4px] transition-transform hover:translate-x-0.5"
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
