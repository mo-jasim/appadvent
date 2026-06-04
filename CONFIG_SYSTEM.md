# Configuration System Overview

This document explains the centralized configuration system implemented in the iWish application.

## What Changed?

Previously, environment variables were accessed directly throughout the codebase:

```typescript
// ❌ Old way
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://64.227.188.123:3000'
const token = localStorage.getItem('token')
```

Now, all configuration is centralized in `config/constants.ts`:

```typescript
// ✅ New way
import { API_CONFIG, AUTH_CONFIG } from '@/config'
const apiUrl = API_CONFIG.baseUrl
const token = localStorage.getItem(AUTH_CONFIG.tokenKey)
```

## Benefits

1. **Type Safety** - All configurations are typed with TypeScript
2. **Single Source of Truth** - All config in one place
3. **Better Defaults** - Sensible defaults for all values
4. **Easier Maintenance** - Change config in one place
5. **Self-Documenting** - Clear structure shows what's available
6. **Easier Testing** - Mock configurations easily

## Files Updated

### Core Configuration

- ✅ `config/constants.ts` - Main configuration file
- ✅ `config/index.ts` - Export file
- ✅ `config/README.md` - Detailed usage guide

### Updated Files to Use Config

- ✅ `lib/api/baseApi.ts` - Uses `API_CONFIG` and `AUTH_CONFIG`
- ✅ `lib/api/authApi.ts` - Uses `API_ENDPOINTS`
- ✅ `i18n.ts` - Uses `I18N_CONFIG`
- ✅ `components/language-switcher.tsx` - Uses `I18N_CONFIG`
- ✅ `app/[locale]/login/page.tsx` - Uses `VALIDATION` and `AUTH_CONFIG`

## Quick Reference

### Import Configuration

```typescript
import { API_CONFIG, AUTH_CONFIG, ROUTES } from '@/config'
```

### Common Usage Patterns

**API Calls:**

```typescript
import { API_CONFIG, getApiUrl } from '@/config'
const url = getApiUrl('/auth/login')
```

**Authentication:**

```typescript
import { AUTH_CONFIG, STORAGE_KEYS } from '@/config'
localStorage.setItem(AUTH_CONFIG.tokenKey, token)
```

**Routes:**

```typescript
import { ROUTES, getLocalizedRoute } from '@/config'
router.push(getLocalizedRoute(ROUTES.dashboard, locale))
```

**Validation:**

```typescript
import { VALIDATION } from '@/config'
z.string().regex(VALIDATION.email.regex)
```

**Feature Flags:**

```typescript
import { FEATURE_FLAGS } from '@/config'
if (FEATURE_FLAGS.socialLogin) { ... }
```

## Configuration Categories

1. **API_CONFIG** - API base URL, timeout, retry attempts
2. **APP_CONFIG** - App URL, name, version, environment
3. **AUTH_CONFIG** - Token storage, session timeout
4. **OAUTH_CONFIG** - Google, Facebook, Apple OAuth settings
5. **FEATURE_FLAGS** - Feature toggles
6. **I18N_CONFIG** - Internationalization settings
7. **API_ENDPOINTS** - All API endpoint paths
8. **ROUTES** - Application routes
9. **STORAGE_KEYS** - localStorage/sessionStorage keys
10. **VALIDATION** - Validation rules and regex patterns
11. **UI_CONFIG** - UI constants (pagination, delays, etc.)
12. **ERROR_MESSAGES** - Standardized error messages
13. **SUCCESS_MESSAGES** - Standardized success messages

## Next Steps

1. **Update remaining files** to use the config system
2. **Add new configurations** as needed in `config/constants.ts`
3. **Use helper functions** like `getApiUrl()` and `getLocalizedRoute()`
4. **Check feature flags** before enabling features

## Documentation

- **Detailed Guide:** See `config/README.md`
- **Environment Variables:** See `ENV_VARIABLES.md`
- **Usage Examples:** See code in updated files

## Migration Guide

To migrate existing code:

1. **Find direct env variable usage:**

   ```typescript
   process.env.NEXT_PUBLIC_API_URL
   ```

2. **Replace with config:**

   ```typescript
   import { API_CONFIG } from '@/config'
   API_CONFIG.baseUrl
   ```

3. **Update hardcoded values:**

   ```typescript
   // Before
   localStorage.setItem('token', token)

   // After
   import { AUTH_CONFIG } from '@/config'
   localStorage.setItem(AUTH_CONFIG.tokenKey, token)
   ```

## Type Safety

All configurations are fully typed:

```typescript
import type { SupportedLocale, OAuthProvider, Environment } from '@/config'

const locale: SupportedLocale = 'en' // ✅ Type-safe
const provider: OAuthProvider = 'google' // ✅ Type-safe
```

## Helper Functions

- `getApiUrl(endpoint)` - Get full API URL
- `getLocalizedRoute(route, locale?)` - Get localized route
- `isOAuthEnabled(provider)` - Check if OAuth is enabled
- `validateConfig()` - Validate environment configuration

See `config/README.md` for detailed usage examples.
