import { NAV_LINKS } from '../../config/siteConfig'
import { useTab } from '../../context/TabContext'
import { ArrowRightIcon } from '../decor/Icons'

export default function NextSectionButton() {
  const { activeTab, setActiveTab } = useTab()
  const currentIndex = NAV_LINKS.findIndex((link) => link.id === activeTab)
  const nextLink = NAV_LINKS[currentIndex + 1]

  if (!nextLink) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => setActiveTab(nextLink.id)}
      aria-label={`Next section: ${nextLink.label}`}
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-surface-alt/20 text-brand shadow-[0_9px_25px_-10px_rgba(8,42,67,0.55)] backdrop-blur-[6px] backdrop-saturate-[1.4] transition-transform hover:scale-105 hover:bg-surface-alt/30 sm:bottom-10 sm:right-8"
    >
      <ArrowRightIcon className="h-6 w-6" />
    </button>
  )
}
