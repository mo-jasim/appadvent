# Configuration System

This directory contains the centralized configuration system for the iWish application.

## Overview

Instead of accessing environment variables directly throughout the codebase, all configuration is centralized in `config/constants.ts`. This provides:

- ✅ **Type Safety** - TypeScript types for all configurations
- ✅ **Single Source of Truth** - All config in one place
- ✅ **Better Defaults** - Sensible defaults for all values
- ✅ **Easier Testing** - Mock configurations easily
- ✅ **Documentation** - Self-documenting code structure

## Usage

### Import Configuration

```typescript
// Import specific configs
import { API_CONFIG, AUTH_CONFIG, ROUTES } from '@/config'

// Or import everything
import * as Config from '@/config'
```

### API Configuration

```typescript
import { API_CONFIG, getApiUrl } from '@/config'

// Use base URL
const response = await fetch(`${API_CONFIG.baseUrl}/endpoint`)

// Or use helper function
const url = getApiUrl('/auth/login')
```

### Authentication

```typescript
import { AUTH_CONFIG, STORAGE_KEYS } from '@/config'

// Get token from storage
const token = localStorage.getItem(AUTH_CONFIG.tokenKey)

// Use storage keys
localStorage.setItem(STORAGE_KEYS.token, token)
```

### Routes

```typescript
import { ROUTES, getLocalizedRoute } from '@/config'
import { useLocale } from 'next-intl'

const locale = useLocale()

// Simple route
router.push(ROUTES.dashboard)

// Localized route
router.push(getLocalizedRoute(ROUTES.dashboard, locale))

// Dynamic route
router.push(ROUTES.wishlistDetail('123'))
```

### API Endpoints

```typescript
import { API_ENDPOINTS } from '@/config'

// Use in RTK Query
query: id => ({
  url: API_ENDPOINTS.wishlist.get(id),
  method: 'GET',
})
```

### Feature Flags

```typescript
import { FEATURE_FLAGS } from '@/config'

if (FEATURE_FLAGS.socialLogin) {
  // Show social login buttons
}
```

### OAuth Configuration

```typescript
import { OAUTH_CONFIG, isOAuthEnabled } from '@/config'

// Check if provider is enabled
if (isOAuthEnabled('google')) {
  // Initialize Google OAuth
}

// Access OAuth config
const googleClientId = OAUTH_CONFIG.google.clientId
```

### Validation

```typescript
import { VALIDATION } from '@/config'

// Use in Zod schemas
const schema = z.object({
  email: z.string().regex(VALIDATION.email.regex),
  password: z.string().min(VALIDATION.password.minLength),
})
```

### Constants

```typescript
import { UI_CONFIG, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/config'

// UI constants
const itemsPerPage = UI_CONFIG.itemsPerPage

// Error messages
showError(ERROR_MESSAGES.network)

// Success messages
showSuccess(SUCCESS_MESSAGES.login)
```

## Configuration Structure

### API_CONFIG

- `baseUrl` - API base URL
- `timeout` - Request timeout in ms
- `retryAttempts` - Number of retry attempts

### APP_CONFIG

- `url` - Application URL
- `name` - Application name
- `version` - Application version
- `environment` - Current environment
- `isDevelopment` - Development mode flag
- `isProduction` - Production mode flag

### AUTH_CONFIG

- `tokenKey` - localStorage key for token
- `sessionTimeout` - Session timeout in minutes
- `refreshTokenKey` - localStorage key for refresh token
- `tokenPrefix` - Authorization header prefix

### OAUTH_CONFIG

- `google` - Google OAuth configuration
- `facebook` - Facebook OAuth configuration
- `apple` - Apple OAuth configuration

### FEATURE_FLAGS

- `socialLogin` - Enable/disable social login
- `analytics` - Enable/disable analytics
- `debug` - Enable debug mode

### I18N_CONFIG

- `defaultLocale` - Default language
- `supportedLocales` - Array of supported locales
- `localeStorageKey` - localStorage key for locale

### API_ENDPOINTS

- `auth.*` - Authentication endpoints
- `user.*` - User endpoints
- `wishlist.*` - Wishlist endpoints

### ROUTES

- Static routes (home, login, etc.)
- Dynamic route functions (wishlistDetail, etc.)

### STORAGE_KEYS

- All localStorage/sessionStorage keys

### VALIDATION

- Email validation rules
- Password validation rules
- Name validation rules

### UI_CONFIG

- Items per page
- Debounce delays
- Animation durations

### ERROR_MESSAGES

- Standardized error messages

### SUCCESS_MESSAGES

- Standardized success messages

## Helper Functions

### getApiUrl(endpoint: string)

Get full API URL for an endpoint.

```typescript
const url = getApiUrl('/auth/login')
// Returns: http://api.example.com/api/v1/auth/login
```

### getLocalizedRoute(route: string, locale?: string)

Get localized route with locale prefix.

```typescript
const route = getLocalizedRoute('/dashboard', 'de')
// Returns: /de/dashboard
```

### isOAuthEnabled(provider: OAuthProvider)

Check if OAuth provider is enabled.

```typescript
if (isOAuthEnabled('google')) {
  // Google OAuth is enabled
}
```

### validateConfig()

Validate environment configuration.

```typescript
const { valid, errors } = validateConfig()
if (!valid) {
  console.error('Configuration errors:', errors)
}
```

## Best Practices

1. **Always use config constants** instead of hardcoded values
2. **Import only what you need** to keep bundle size small
3. **Use helper functions** for common operations
4. **Check feature flags** before enabling features
5. **Use type exports** for better TypeScript support

## Adding New Configuration

1. Add to `config/constants.ts`:

```typescript
export const NEW_CONFIG = {
  value: process.env.NEXT_PUBLIC_NEW_VALUE || 'default',
} as const
```

2. Export from `config/index.ts`:

```typescript
export { NEW_CONFIG } from './constants'
```

3. Use in your code:

```typescript
import { NEW_CONFIG } from '@/config'
```

## Environment Variables

All environment variables are accessed through the config system. See `ENV_VARIABLES.md` for a complete list of environment variables.

## Type Safety

All configurations are typed with TypeScript:

```typescript
import type { SupportedLocale, OAuthProvider, Environment } from '@/config'

const locale: SupportedLocale = 'en'
const provider: OAuthProvider = 'google'
const env: Environment = 'production'
```
