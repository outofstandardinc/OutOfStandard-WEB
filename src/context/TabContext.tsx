import { createContext, useContext, useState, type ReactNode } from 'react'
import { NAV_LINKS } from '../config/siteConfig'

export type SectionId = (typeof NAV_LINKS)[number]['id']

type TabContextValue = {
  activeTab: SectionId
  setActiveTab: (id: SectionId) => void
}

const TabContext = createContext<TabContextValue | null>(null)

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<SectionId>('intro')

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab() {
  const ctx = useContext(TabContext)
  if (!ctx) {
    throw new Error('useTab must be used within a TabProvider')
  }
  return ctx
}
