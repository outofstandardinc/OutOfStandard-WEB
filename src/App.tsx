import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import BackgroundMap from './components/BackgroundMap/BackgroundMap'
import EvidenceSources from './components/EvidenceSources/EvidenceSources'
import Problem from './components/Problem/Problem'
import Impact from './components/Impact/Impact'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { TabProvider, useTab } from './context/TabContext'

function ActivePanel() {
  const { activeTab } = useTab()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  return (
    <div id="content-panel" className="pb-24">
      {activeTab === 'intro' && <Hero />}
      {activeTab === 'problem' && <Problem />}
      {activeTab === 'sources' && <EvidenceSources />}
      {activeTab === 'impact' && <Impact />}
      {activeTab === 'contact' && <Contact />}
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
      <Footer />
    </TabProvider>
  )
}

export default App
