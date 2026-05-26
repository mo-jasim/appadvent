/**
 * Configuration Module Exports
 *
 * Central export point for all configuration and constants
 */

export * from './constants'

// Re-export commonly used configs for convenience
export {
  API_CONFIG,
  APP_CONFIG,
  AUTH_CONFIG,
  OAUTH_CONFIG,
  FEATURE_FLAGS,
  ANALYTICS_CONFIG,
  I18N_CONFIG,
  API_ENDPOINTS,
  ROUTES,
  STORAGE_KEYS,
  VALIDATION,
  UI_CONFIG,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from './constants'

export type { SupportedLocale, Environment, OAuthProvider } from './constants'
