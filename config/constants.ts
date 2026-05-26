/**
 * Application Constants and Configuration
 *
 * Centralized configuration management for the iWish application.
 * All environment variables should be accessed through this file.
 */

// ============================================
// API Configuration
// ============================================

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4003/api/v1',
  timeout: 30000, // 30 seconds
  retryAttempts: 3,
} as const

// ============================================
// Application Configuration
// ============================================

export const APP_CONFIG = {
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://iwish.appadvent.in/api/v1',
  name: 'iWish',
  version: '1.0.0',
  environment: (process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const

// ============================================
// Authentication Configuration
// ============================================

export const AUTH_CONFIG = {
  tokenKey: process.env.NEXT_PUBLIC_TOKEN_KEY || 'token',
  sessionTimeout: parseInt(process.env.NEXT_PUBLIC_SESSION_TIMEOUT || '60', 10), // minutes
  refreshTokenKey: 'refreshToken',
  tokenPrefix: 'Bearer',
} as const

// ============================================
// OAuth / Social Login Configuration
// ============================================

export const OAUTH_CONFIG = {
  google: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    enabled: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_LOGIN === 'true',
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
    appSecret: process.env.FACEBOOK_APP_SECRET || '',
    enabled: process.env.NEXT_PUBLIC_ENABLE_FACEBOOK_LOGIN === 'true',
  },
  apple: {
    clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || '',
    teamId: process.env.APPLE_TEAM_ID || '',
    keyId: process.env.APPLE_KEY_ID || '',
    privateKey: process.env.APPLE_PRIVATE_KEY || '',
    enabled: process.env.NEXT_PUBLIC_ENABLE_APPLE_LOGIN === 'true',
  },
} as const

// ============================================
// Feature Flags
// ============================================

export const FEATURE_FLAGS = {
  socialLogin: process.env.NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN === 'true',
  analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  debug: process.env.NEXT_PUBLIC_DEBUG === 'true' && APP_CONFIG.isDevelopment,
} as const

// ============================================
// Analytics & Monitoring
// ============================================

export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
} as const

// ============================================
// Internationalization Configuration
// ============================================

export const I18N_CONFIG = {
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en',
  supportedLocales: ['en', 'sk'] as const,
  localeStorageKey: 'i18n-locale',
} as const

// ============================================
// API Endpoints
// ============================================

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    socialLogin: '/auth/social-login',
    verifyEmail: '/auth/verify-email',
    sendOTP: '/auth/send-otp',
    verifyOTP: '/auth/verify-otp',
    resendOTP: '/auth/resend-otp',
    changePassword: '/auth/change-password',
  },
  user: {
    profile: '/auth/profile',
    updateProfile: '/auth/profile',
    uploadAvatar: '/upload/avatar',
  },
  theme: {
    list: '/themes',
    get: (id: string) => `/themes/${id}`,
  },
  wishlist: {
    list: '/wishlist',
    create: '/wishlist',
    get: (id: string) => `/wishlist/${id}`,
    update: (id: string) => `/wishlist/${id}`,
    delete: (id: string) => `/wishlist/${id}`,
    addProducts: (id: string) => `/wishlist/${id}/products`,
  },
  giftInspiration: {
    list: '/gift-inspirations',
    get: (id: string) => `/gift-inspirations/${id}`,
  },
  kids: {
    list: '/kids',
    create: '/kids',
    updateStatus: (id: string) => `/kids/${id}/status`,
  },
} as const

// ============================================
// Routes
// ============================================

export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  dashboard: '/dashboard',
  profile: '/profile',
  settings: '/settings',
  wishlist: '/wishlist',
  wishlistDetail: (id: string) => `/wishlist/${id}`,
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
} as const

// ============================================
// Storage Keys
// ============================================

export const STORAGE_KEYS = {
  token: AUTH_CONFIG.tokenKey,
  refreshToken: AUTH_CONFIG.refreshTokenKey,
  locale: I18N_CONFIG.localeStorageKey,
  theme: 'theme',
  userPreferences: 'userPreferences',
} as const

// ============================================
// Validation Rules
// ============================================

export const VALIDATION = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 255,
  },
  password: {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: false,
  },
  name: {
    minLength: 2,
    maxLength: 50,
  },
} as const

// ============================================
// UI Constants
// ============================================

export const UI_CONFIG = {
  itemsPerPage: 20,
  debounceDelay: 300, // milliseconds
  toastDuration: 5000, // milliseconds
  animationDuration: 200, // milliseconds
} as const

// ============================================
// Error Messages
// ============================================

export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  unauthorized: 'You are not authorized to perform this action.',
  forbidden: 'Access forbidden.',
  notFound: 'Resource not found.',
  serverError: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
  default: 'An error occurred. Please try again.',
} as const

// ============================================
// Success Messages
// ============================================

export const SUCCESS_MESSAGES = {
  login: 'Login successful!',
  logout: 'Logged out successfully.',
  register: 'Registration successful!',
  update: 'Updated successfully!',
  delete: 'Deleted successfully!',
  create: 'Created successfully!',
} as const

// ============================================
// Type Exports
// ============================================

export type SupportedLocale = (typeof I18N_CONFIG.supportedLocales)[number]
export type Environment = typeof APP_CONFIG.environment
export type OAuthProvider = 'google' | 'facebook' | 'apple'

// ============================================
// Helper Functions
// ============================================

/**
 * Get full API URL for an endpoint
 */
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
  return `${API_CONFIG.baseUrl}/${cleanEndpoint}`
}

/**
 * Get localized route
 */
export const getLocalizedRoute = (route: string, locale?: string): string => {
  const currentLocale = locale || I18N_CONFIG.defaultLocale
  return `/${currentLocale}${route}`
}

/**
 * Check if OAuth provider is enabled
 */
export const isOAuthEnabled = (provider: OAuthProvider): boolean => {
  switch (provider) {
    case 'google':
      return OAUTH_CONFIG.google.enabled
    case 'facebook':
      return OAUTH_CONFIG.facebook.enabled
    case 'apple':
      return OAUTH_CONFIG.apple.enabled
    default:
      return false
  }
}

/**
 * Validate environment configuration
 */
export const validateConfig = (): { valid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!API_CONFIG.baseUrl) {
    errors.push('NEXT_PUBLIC_API_URL is required')
  }

  if (APP_CONFIG.isProduction && !APP_CONFIG.url.startsWith('https://')) {
    errors.push('APP_URL must use HTTPS in production')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
