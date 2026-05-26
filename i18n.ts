// i18n configuration - now using localStorage instead of URL routing
import { I18N_CONFIG } from './config'
import type { SupportedLocale } from './config'

// Re-export for backward compatibility
export const locales = I18N_CONFIG.supportedLocales
export const defaultLocale = I18N_CONFIG.defaultLocale as SupportedLocale

export type Locale = SupportedLocale
