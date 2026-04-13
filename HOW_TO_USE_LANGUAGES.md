# How to Use Multi-Language Features

This guide explains how to use the multi-language (i18n) functionality in your iWish application.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Using Translations in Components](#using-translations-in-components)
3. [Adding New Translation Keys](#adding-new-translation-keys)
4. [Navigation with Locales](#navigation-with-locales)
5. [Form Validation Messages](#form-validation-messages)
6. [Best Practices](#best-practices)
7. [Examples](#examples)

---

## Quick Start

### Accessing Different Languages

Your application supports three languages:

- **English (EN)** - Default: `http://localhost:3000/en/login`
- **German (DE)**: `http://localhost:3000/de/login`
- **Hindi (HI)**: `http://localhost:3000/hi/login`

The root URL (`/`) automatically redirects to the default language (English).

### Language Switcher

A language switcher is available in the top-right corner of pages. Click the language buttons (EN, DE, HI) to switch languages instantly.

---

## Using Translations in Components

### Client Components

For components marked with `"use client"`:

```typescript
"use client"

import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

export default function MyComponent() {
  const t = useTranslations("login")  // Access login namespace
  const tCommon = useTranslations("common")  // Access common namespace
  const locale = useLocale()  // Get current locale (en, de, hi)

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{tCommon("welcome")}</p>
      <p>Current language: {locale}</p>
    </div>
  )
}
```

### Server Components

For server components (no `"use client"`):

```typescript
import { useTranslations } from "next-intl"

export default async function MyServerComponent({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await useTranslations("login")

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Current locale: {locale}</p>
    </div>
  )
}
```

### Accessing Nested Translation Keys

```typescript
const t = useTranslations('login')

// Direct access
t('title') // "Log In with iWish.sk"

// Nested access (if you have nested objects)
t('form.email.label') // For nested structures
```

---

## Adding New Translation Keys

### Step 1: Add to English Translation File

Edit `lang-message/en.json`:

```json
{
  "login": {
    "title": "Log In with iWish.sk",
    "newKey": "New translation text"
  },
  "dashboard": {
    "welcome": "Welcome to Dashboard",
    "stats": "Statistics"
  }
}
```

### Step 2: Add to Other Languages

**German (`lang-message/de.json`):**

```json
{
  "login": {
    "title": "Bei iWish.sk anmelden",
    "newKey": "Neuer Übersetzungstext"
  },
  "dashboard": {
    "welcome": "Willkommen im Dashboard",
    "stats": "Statistiken"
  }
}
```

**Hindi (`lang-message/hi.json`):**

```json
{
  "login": {
    "title": "iWish.sk के साथ लॉग इन करें",
    "newKey": "नया अनुवाद पाठ"
  },
  "dashboard": {
    "welcome": "डैशबोर्ड में आपका स्वागत है",
    "stats": "आंकड़े"
  }
}
```

### Step 3: Use in Your Component

```typescript
"use client"

import { useTranslations } from "next-intl"

export default function Dashboard() {
  const t = useTranslations("dashboard")

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("stats")}</p>
    </div>
  )
}
```

---

## Navigation with Locales

### Using Link Component

Always include the locale in your links:

```typescript
"use client"

import Link from "next/link"
import { useLocale } from "next-intl"

export default function Navigation() {
  const locale = useLocale()

  return (
    <nav>
      <Link href={`/${locale}/dashboard`}>Dashboard</Link>
      <Link href={`/${locale}/profile`}>Profile</Link>
      <Link href={`/${locale}/settings`}>Settings</Link>
    </nav>
  )
}
```

### Using Router Navigation

```typescript
"use client"

import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

export default function MyComponent() {
  const router = useRouter()
  const locale = useLocale()

  const handleNavigation = () => {
    router.push(`/${locale}/dashboard`)
  }

  return <button onClick={handleNavigation}>Go to Dashboard</button>
}
```

### Programmatic Redirects

```typescript
import { redirect } from 'next/navigation'

export default async function MyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  // Redirect to another page
  redirect(`/${locale}/login`)
}
```

---

## Form Validation Messages

### Using Translations in Zod Schemas

```typescript
'use client'

import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function MyForm() {
  const t = useTranslations('login')

  // Create schema with translated messages
  const formSchema = z.object({
    email: z.string().regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      t('emailRequired') // Use translation for error message
    ),
    password: z.string().min(1, t('passwordRequired')),
  })

  type FormData = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  // ... rest of form
}
```

### Dynamic Validation Messages

For more complex validation:

```typescript
const t = useTranslations('validation')

const schema = z.object({
  age: z.number().min(18, t('ageMinimum', { min: 18 })),
  // If your translation supports parameters:
  // "ageMinimum": "You must be at least {min} years old"
})
```

---

## Best Practices

### 1. Organize Translation Keys by Feature

Group related translations together:

```json
{
  "login": { ... },
  "signup": { ... },
  "dashboard": { ... },
  "profile": { ... },
  "common": { ... }
}
```

### 2. Use Descriptive Key Names

**Good:**

```json
{
  "login": {
    "emailPlaceholder": "Enter your email",
    "passwordLabel": "Password"
  }
}
```

**Bad:**

```json
{
  "login": {
    "text1": "Enter your email",
    "text2": "Password"
  }
}
```

### 3. Keep Common Translations Separate

Use a `common` namespace for reusable translations:

```json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "loading": "Loading...",
    "error": "Error"
  }
}
```

### 4. Always Include All Languages

When adding a new key, add it to **all** language files (en, de, hi) to avoid missing translations.

### 5. Use TypeScript for Type Safety

```typescript
// This ensures you're using valid translation keys
const t = useTranslations('login')
t('title') // ✅ Valid
t('invalidKey') // ⚠️ TypeScript will warn if key doesn't exist
```

---

## Examples

### Example 1: Simple Component with Translations

```typescript
"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function WelcomeBanner() {
  const t = useTranslations("common")

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <Button>{t("getStarted")}</Button>
    </div>
  )
}
```

### Example 2: Form with Localized Validation

```typescript
"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const t = useTranslations("contact")

  const schema = z.object({
    name: z.string().min(1, t("nameRequired")),
    email: z.string().regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      t("emailInvalid")
    ),
    message: z.string().min(10, t("messageTooShort")),
  })

  type FormData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <Label>{t("nameLabel")}</Label>
        <Input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <Label>{t("emailLabel")}</Label>
        <Input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <Label>{t("messageLabel")}</Label>
        <Input {...register("message")} />
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button type="submit">{t("submit")}</button>
    </form>
  )
}
```

### Example 3: Conditional Translations

```typescript
"use client"

import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

export default function Greeting() {
  const t = useTranslations("common")
  const locale = useLocale()

  // Use different translations based on locale
  const greeting = locale === "hi"
    ? "नमस्ते"
    : locale === "de"
    ? "Guten Tag"
    : "Hello"

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{t("welcome")}</p>
    </div>
  )
}
```

### Example 4: Language Switcher Component

```typescript
"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { locales } from "@/i18n"

export default function CustomLanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <Button
          key={loc}
          onClick={() => switchLanguage(loc)}
          variant={locale === loc ? "default" : "outline"}
        >
          {loc.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}
```

---

## Common Translation Keys Reference

### Login Page (`login.*`)

```typescript
t('title') // "Log In with iWish.sk"
t('email') // "Email id"
t('emailPlaceholder') // "Enter your email"
t('password') // "Password"
t('passwordPlaceholder') // "Enter your password"
t('forgotPassword') // "Forgot Password?"
t('submit') // "Log In"
t('submitting') // "Logging in..."
t('noAccount') // "Don't have an account?"
t('signUp') // "Sign up"
t('continueWith') // "Continue with"
t('emailRequired') // "Please enter a valid email address"
t('passwordRequired') // "Password is required"
```

### Common (`common.*`)

```typescript
tCommon('welcome') // "Welcome"
tCommon('loading') // "Loading..."
tCommon('error') // "Error"
tCommon('success') // "Success"
tCommon('close') // "Close"
```

---

## Troubleshooting

### Issue: Translation not showing

**Solution:**

- Check that the key exists in all language files
- Verify you're using the correct namespace: `useTranslations("namespace")`
- Ensure the translation file is saved

### Issue: Wrong language displayed

**Solution:**

- Check the URL includes the locale: `/en/...`, `/de/...`, `/hi/...`
- Verify middleware is working correctly
- Clear browser cache

### Issue: Navigation breaks after language switch

**Solution:**

- Always include locale in links: `href={`/${locale}/page`}`
- Use `useLocale()` hook to get current locale
- Don't hardcode paths without locale

### Issue: Form validation messages not translated

**Solution:**

- Pass translation function to Zod schema
- Use `t("errorKey")` in validation rules
- Ensure translation key exists in all language files

---

## Quick Reference

```typescript
// Get translations
const t = useTranslations("namespace")

// Get current locale
const locale = useLocale()  // "en" | "de" | "hi"

// Navigate with locale
router.push(`/${locale}/page`)

// Link with locale
<Link href={`/${locale}/page`}>Link</Link>

// Server component translations
const t = await useTranslations("namespace")
const { locale } = await params
```

---

## Adding a New Language

1. **Add locale to `i18n.ts`:**

```typescript
export const locales = ['en', 'de', 'hi', 'fr'] as const
```

2. **Create translation file:** `lang-message/fr.json`

3. **Update middleware:** Add to matcher pattern

4. **Update language switcher:** Add language name

5. **Test:** Visit `http://localhost:3000/fr/login`

---

For more details, see `I18N_SETUP.md` for technical setup information.
