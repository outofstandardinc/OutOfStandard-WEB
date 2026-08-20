import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import BackgroundMap from './components/BackgroundMap/BackgroundMap'
import EvidenceSources from './components/EvidenceSources/EvidenceSources'
import Problem from './components/Problem/Problem'
import Impact from './components/Impact/Impact'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NextSectionButton from './components/NextSectionButton/NextSectionButton'
import { TabProvider, useTab } from './context/TabContext'
import { useRevealAnimations } from './hooks/useRevealAnimations'

function ActivePanel() {
  const { activeTab } = useTab()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  useRevealAnimations(activeTab)

  // All sections stay mounted so the prerendered HTML contains the full
  // content of every tab (for SEO / social / AI crawlers). Only the active
  // tab is shown; the rest are hidden with `display: none`.
  return (
    <div id="content-panel" className="pb-24">
      <div className={activeTab === 'intro' ? undefined : 'hidden'}>
        <Hero />
      </div>
      <div className={activeTab === 'problem' ? undefined : 'hidden'}>
        <Problem />
      </div>
      <div className={activeTab === 'sources' ? undefined : 'hidden'}>
        <EvidenceSources />
      </div>
      <div className={activeTab === 'impact' ? undefined : 'hidden'}>
        <Impact />
      </div>
      <div className={activeTab === 'contact' ? undefined : 'hidden'}>
        <Contact />
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const isLocalhost = ['localhost', '127.0.0.1'].includes(
      window.location.hostname,
    )
    if (isLocalhost) return

    const params = new URLSearchParams(window.location.search)
    if (params.get('notify') === 'off') {
      localStorage.setItem('notify-muted', '1')
    } else if (params.get('notify') === 'on') {
      localStorage.removeItem('notify-muted')
    }

    if (localStorage.getItem('notify-muted')) return
    if (sessionStorage.getItem('visit-pinged')) return
    sessionStorage.setItem('visit-pinged', '1')

    const device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop'
    const url = `https://muddy-bar-abd3.outofstandardinc.workers.dev/?device=${device}`
    fetch(url, { mode: 'no-cors' }).catch(() => {})
  }, [])

  // Google Analytics: tag every event in this session with a visit_id and
  // report total time on site as duration_seconds when the visitor leaves.
  useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void })
      .gtag
    if (typeof gtag !== 'function') return

    let visitId = sessionStorage.getItem('ga-visit-id')
    if (!visitId) {
      visitId = crypto.randomUUID()
      sessionStorage.setItem('ga-visit-id', visitId)
    }
    gtag('set', 'user_properties', { visit_id: visitId })

    const startTime = Date.now()
    let sent = false
    const sendDuration = () => {
      if (sent) return
      sent = true
      const duration_seconds = Math.round((Date.now() - startTime) / 1000)
      gtag('event', 'session_duration', { visit_id: visitId, duration_seconds })
    }

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') sendDuration()
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('pagehide', sendDuration)

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('pagehide', sendDuration)
    }
  }, [])

  return (
    <TabProvider>
      <BackgroundMap />
      <Header />
      <main className="flex">
        <div className="min-w-0 flex-1">
          <ActivePanel />
        </div>
        <NextSectionButton />
      </main>
      <Footer />
    </TabProvider>
  )
}

export default App
