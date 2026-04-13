'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { I18N_CONFIG } from '@/config'
import type { SupportedLocale } from '@/config'

interface LocaleContextType {
  locale: SupportedLocale
  setLocale: (locale: SupportedLocale) => void
  isLoading: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

function getInitialLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    return I18N_CONFIG.defaultLocale as SupportedLocale
  }
  const storedLocale = localStorage.getItem(I18N_CONFIG.localeStorageKey)
  if (storedLocale && I18N_CONFIG.supportedLocales.includes(storedLocale as SupportedLocale)) {
    return storedLocale as SupportedLocale
  }
  localStorage.setItem(I18N_CONFIG.localeStorageKey, I18N_CONFIG.defaultLocale)
  return I18N_CONFIG.defaultLocale as SupportedLocale
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(getInitialLocale)
  const [isLoading] = useState(false)

  // Update localStorage when locale changes (but not on initial mount)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentStored = localStorage.getItem(I18N_CONFIG.localeStorageKey)
      if (currentStored !== locale) {
        localStorage.setItem(I18N_CONFIG.localeStorageKey, locale)
      }
    }
  }, [locale])

  // Update localStorage when locale changes
  const setLocale = (newLocale: SupportedLocale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(I18N_CONFIG.localeStorageKey, newLocale)
      setLocaleState(newLocale)
    }
  }

  // Update HTML lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isLoading }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within a LocaleProvider')
  }
  return context
}
