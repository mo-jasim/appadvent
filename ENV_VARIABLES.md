# Environment Variables Guide

This document explains all environment variables used in the iWish Frontend application.

## Quick Start

1. **Copy the example file:**

   ```bash
   cp .env.example .env
   ```

2. **Fill in your values** in the `.env` file

3. **Restart your dev server** for changes to take effect

## Required Variables

### API Configuration

| Variable              | Description          | Example                 | Required |
| --------------------- | -------------------- | ----------------------- | -------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `localhost:3000/api/v1` | ✅ Yes   |

**Usage:** Used in `lib/api/baseApi.ts` to configure RTK Query base URL.

---

## Application Configuration

| Variable              | Description              | Example                     | Required     |
| --------------------- | ------------------------ | --------------------------- | ------------ |
| `NEXT_PUBLIC_APP_URL` | Frontend application URL | `http://localhost:3000`     | ⚠️ For OAuth |
| `NODE_ENV`            | Environment mode         | `development`, `production` | ✅ Yes       |

**Usage:**

- `NEXT_PUBLIC_APP_URL`: Used for OAuth redirects and absolute URLs
- `NODE_ENV`: Automatically set by Next.js, but can be overridden

---

## OAuth / Social Login (Optional)

These are required only if you're implementing social login functionality.

### Google OAuth

| Variable                       | Description                | Where to Get                                                              |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth Client ID     | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `GOOGLE_CLIENT_SECRET`         | Google OAuth Client Secret | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |

**Setup Steps:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create OAuth 2.0 Client ID
5. Add authorized redirect URI: `{NEXT_PUBLIC_APP_URL}/api/auth/callback/google`

### Facebook OAuth

| Variable                      | Description         | Where to Get                                                 |
| ----------------------------- | ------------------- | ------------------------------------------------------------ |
| `NEXT_PUBLIC_FACEBOOK_APP_ID` | Facebook App ID     | [Facebook Developers](https://developers.facebook.com/apps/) |
| `FACEBOOK_APP_SECRET`         | Facebook App Secret | [Facebook Developers](https://developers.facebook.com/apps/) |

**Setup Steps:**

1. Go to [Facebook Developers](https://developers.facebook.com/apps/)
2. Create a new app
3. Add Facebook Login product
4. Set Valid OAuth Redirect URIs: `{NEXT_PUBLIC_APP_URL}/api/auth/callback/facebook`

### Apple OAuth

| Variable                      | Description       | Where to Get                                                                      |
| ----------------------------- | ----------------- | --------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_APPLE_CLIENT_ID` | Apple Services ID | [Apple Developer](https://developer.apple.com/account/resources/identifiers/list) |
| `APPLE_TEAM_ID`               | Apple Team ID     | [Apple Developer](https://developer.apple.com/account/)                           |
| `APPLE_KEY_ID`                | Apple Key ID      | [Apple Developer](https://developer.apple.com/account/resources/authkeys/list)    |
| `APPLE_PRIVATE_KEY`           | Apple Private Key | [Apple Developer](https://developer.apple.com/account/resources/authkeys/list)    |

**Setup Steps:**

1. Go to [Apple Developer](https://developer.apple.com/account/)
2. Create a Services ID
3. Create a Key for Sign in with Apple
4. Configure redirect URLs

---

## Authentication Configuration

| Variable                      | Description                     | Default | Required |
| ----------------------------- | ------------------------------- | ------- | -------- |
| `NEXT_PUBLIC_TOKEN_KEY`       | localStorage key for auth token | `token` | ❌ No    |
| `NEXT_PUBLIC_SESSION_TIMEOUT` | Session timeout in minutes      | `60`    | ❌ No    |

**Usage:**

- `NEXT_PUBLIC_TOKEN_KEY`: Used in `lib/api/baseApi.ts` to retrieve auth token from localStorage
- `NEXT_PUBLIC_SESSION_TIMEOUT`: Can be used for session management (not currently implemented)

---

## Feature Flags

| Variable                            | Description                          | Default | Required |
| ----------------------------------- | ------------------------------------ | ------- | -------- |
| `NEXT_PUBLIC_ENABLE_GOOGLE_LOGIN`   | Enable/disable Google login button   | `true`  | ❌ No    |
| `NEXT_PUBLIC_ENABLE_FACEBOOK_LOGIN` | Enable/disable Facebook login button | `true`  | ❌ No    |
| `NEXT_PUBLIC_ENABLE_APPLE_LOGIN`    | Enable/disable Apple login button    | `true`  | ❌ No    |
| `NEXT_PUBLIC_ENABLE_ANALYTICS`      | Enable/disable analytics             | `false` | ❌ No    |

**Usage:** Can be used to conditionally render features:

```typescript
import { OAUTH_CONFIG } from '@/config'

// Check individual providers
if (OAUTH_CONFIG.google.enabled) {
  // Show Google login button
}

if (OAUTH_CONFIG.facebook.enabled) {
  // Show Facebook login button
}

if (OAUTH_CONFIG.apple.enabled) {
  // Show Apple login button
}
```

---

## Optional Variables

### Analytics & Monitoring

| Variable                 | Description               | Example                                |
| ------------------------ | ------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_GA_ID`      | Google Analytics ID       | `G-XXXXXXXXXX`                         |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry error tracking DSN | `https://xxx@xxx.ingest.sentry.io/xxx` |

### Internationalization

| Variable                     | Description             | Default                        |
| ---------------------------- | ----------------------- | ------------------------------ |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Default language locale | `en` (configured in `i18n.ts`) |

### Development

| Variable            | Description       | Default |
| ------------------- | ----------------- | ------- |
| `NEXT_PUBLIC_DEBUG` | Enable debug mode | `false` |

---

## Environment-Specific Files

Next.js supports multiple environment files:

- `.env` - Default for all environments
- `.env.local` - Local overrides (ignored by git)
- `.env.development` - Development environment
- `.env.production` - Production environment
- `.env.development.local` - Local development overrides
- `.env.production.local` - Local production overrides

**Priority:** `.env.local` > `.env.development` / `.env.production` > `.env`

---

## Important Notes

### NEXT*PUBLIC* Prefix

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. **Never put sensitive data in these variables!**

- ✅ Safe: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_APP_URL`
- ❌ Unsafe: `GOOGLE_CLIENT_SECRET`, `FACEBOOK_APP_SECRET`

### Server-Side Only Variables

Variables without `NEXT_PUBLIC_` prefix are only available on the server:

```typescript
// ✅ Works in API routes and server components
const secret = process.env.GOOGLE_CLIENT_SECRET

// ❌ Undefined in client components
const secret = process.env.GOOGLE_CLIENT_SECRET // undefined
```

### Security Best Practices

1. **Never commit `.env` files** - Already in `.gitignore`
2. **Commit `.env.example`** - Template for other developers
3. **Use different values** for development and production
4. **Rotate secrets regularly** - Especially OAuth secrets
5. **Use environment-specific files** for different deployments

---

## Usage Examples

### In Client Components

```typescript
"use client"

export default function MyComponent() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  // ✅ Works - has NEXT_PUBLIC_ prefix

  const secret = process.env.GOOGLE_CLIENT_SECRET
  // ❌ undefined - no NEXT_PUBLIC_ prefix

  return <div>API: {apiUrl}</div>
}
```

### In Server Components / API Routes

```typescript
// app/api/example/route.ts
export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const secret = process.env.GOOGLE_CLIENT_SECRET

  // ✅ Both work on server

  return Response.json({ apiUrl, hasSecret: !!secret })
}
```

### In Configuration Files

```typescript
// lib/api/baseApi.ts
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://iwish.appadvent.in/api/v1',
  }),
})
```

---

## Troubleshooting

### Variable Not Working?

1. **Check the prefix:** Client-side needs `NEXT_PUBLIC_`
2. **Restart dev server:** Environment variables load at startup
3. **Check spelling:** Variable names are case-sensitive
4. **Verify file location:** `.env` should be in project root
5. **Check .gitignore:** Make sure `.env` is ignored

### Variable is Undefined?

- **Client component:** Must have `NEXT_PUBLIC_` prefix
- **Server component:** Can use any variable
- **Build time:** Variables are embedded at build time

### Production Deployment

For production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Don't commit `.env` files
3. Use platform-specific environment variable settings
4. Restart/redeploy after adding new variables

---

## Current Configuration

Based on your current setup:

- ✅ API URL configured: `https://iwish.appadvent.in/api/v1`
- ✅ Token key: `token` (default)
- ⚠️ OAuth credentials: Need to be configured
- ⚠️ Social login: Ready to configure

---

For more information, see:

- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Next.js Deployment Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#environment-variable-loading-order)
