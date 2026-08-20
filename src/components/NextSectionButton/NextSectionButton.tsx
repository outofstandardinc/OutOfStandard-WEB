import { NAV_LINKS } from '../../config/siteConfig'
import { useTab } from '../../context/TabContext'
import { ChevronNextIcon, ChevronDoubleLeftIcon } from '../decor/Icons'

const CAPSULE_CLASS =
  'absolute inset-0 flex items-center justify-center rounded-full border border-line bg-surface-alt/70 text-brand backdrop-blur-[6px] backdrop-saturate-[1.4] transition-transform hover:scale-[1.02]'

export default function NextSectionButton() {
  const { activeTab, setActiveTab } = useTab()
  const currentIndex = NAV_LINKS.findIndex((link) => link.id === activeTab)
  const isLast = currentIndex === NAV_LINKS.length - 1
  const upcoming = NAV_LINKS.slice(currentIndex + 1)

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
            <button
              type="button"
              onClick={() => setActiveTab(upcoming[0].id)}
              aria-label={`Next section: ${upcoming[0].label}`}
              className={CAPSULE_CLASS}
            >
              <ChevronNextIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </>
  )
}
