# Multi-Language Setup Guide

Your iWish application now supports multiple languages: **English** (default), **German**, and **Hindi**.

## How It Works

### URL Structure

- English: `http://localhost:3000/en/login`
- German: `http://localhost:3000/de/login`
- Hindi: `http://localhost:3000/hi/login`

The default language (English) is automatically used when accessing the root URL.

### Language Switcher

A language switcher component is available in the top-right corner of the login page. Click on the language buttons (EN, DE, HI) to switch languages.

## Adding New Translations

### 1. Update Translation Files

Edit the JSON files in the `lang-message/` directory:

- `lang-message/en.json` - English translations
- `lang-message/de.json` - German translations
- `lang-message/hi.json` - Hindi translations

### 2. Use Translations in Components

For **Client Components**:

```typescript
"use client"
import { useTranslations } from "next-intl"

export default function MyComponent() {
  const t = useTranslations("login")

  return <h1>{t("title")}</h1>
}
```

For **Server Components**:

```typescript
import { useTranslations } from "next-intl"

export default async function MyComponent() {
  const t = await useTranslations("login")

  return <h1>{t("title")}</h1>
}
```

### 3. Translation File Structure

```json
{
  "login": {
    "title": "Log In with iWish.sk",
    "email": "Email id",
    ...
  },
  "common": {
    "welcome": "Welcome",
    ...
  }
}
```

Access translations using: `t("login.title")` or `useTranslations("login")` then `t("title")`

## Adding a New Language

1. Add the locale to `i18n.ts`:

```typescript
export const locales = ['en', 'de', 'hi', 'fr'] as const
```

2. Create a new translation file: `lang-message/fr.json`

3. Update the middleware matcher in `middleware.ts`:

```typescript
matcher: ['/', '/(de|en|hi|fr)/:path*', ...]
```

4. Add the language name to `components/language-switcher.tsx`:

```typescript
const languageNames: Record<string, string> = {
  en: 'EN',
  de: 'DE',
  hi: 'HI',
  fr: 'FR', // Add new language
}
```

## Current Translation Keys

### Login Page (`login.*`)

- `title` - Login page title
- `email` - Email label
- `emailPlaceholder` - Email input placeholder
- `password` - Password label
- `passwordPlaceholder` - Password input placeholder
- `forgotPassword` - Forgot password link
- `submit` - Submit button text
- `submitting` - Loading state text
- `noAccount` - Sign up prompt
- `signUp` - Sign up link text
- `continueWith` - Social login text
- `emailRequired` - Email validation error
- `passwordRequired` - Password validation error

### Common (`common.*`)

- `welcome` - Welcome message
- `loading` - Loading text
- `error` - Error text
- `success` - Success text
- `close` - Close button

## Navigation with Locales

When using `Link` or `router.push()`, always include the locale:

```typescript
import { useLocale } from "next-intl"
import Link from "next/link"

const locale = useLocale()
<Link href={`/${locale}/signup`}>Sign Up</Link>
```

## Testing

1. Start your dev server: `npm run dev`
2. Visit `http://localhost:3000` - should redirect to `/en/login`
3. Click the language switcher buttons to test different languages
4. Verify all text changes correctly

## Notes

- The `html` lang attribute is automatically set based on the current locale
- All routes must include the locale prefix: `/[locale]/...`
- The middleware automatically handles locale detection and routing
