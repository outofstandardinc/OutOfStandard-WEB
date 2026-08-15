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

function ActivePanel() {
  const { activeTab } = useTab()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  // All sections stay mounted so the prerendered HTML contains the full
  // content of every tab (for SEO / social / AI crawlers). Only the active
  // tab is shown; the rest are hidden with `display: none`.
  return (
    <div id="content-panel" className={activeTab === 'intro' ? '' : 'pb-24'}>
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
  return (
    <TabProvider>
      <BackgroundMap />
      <Header />
      <main>
        <ActivePanel />
      </main>
      <NextSectionButton />
      <Footer />
    </TabProvider>
  )
}

export default App
