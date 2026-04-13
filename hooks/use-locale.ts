'use client'

import { useLocaleContext } from '@/contexts/locale-context'
import type { SupportedLocale } from '@/config'

/**
 * Hook to get the current locale
 * @returns The current locale
 */
export function useLocale(): SupportedLocale {
  const { locale } = useLocaleContext()
  return locale
}

/**
 * Hook to set the locale
 * @returns Function to update the locale
 */
export function useSetLocale() {
  const { setLocale } = useLocaleContext()
  return setLocale
}
