# React Hook Form + Zod Integration Guide

This guide explains how to use React Hook Form with Zod for form validation in your Next.js application.

## Table of Contents

1. [Installation](#installation)
2. [Basic Setup](#basic-setup)
3. [Form Validation with Zod](#form-validation-with-zod)
4. [Error Handling](#error-handling)
5. [Advanced Features](#advanced-features)
6. [Complete Example](#complete-example)

---

## Installation

First, install the required packages:

```bash
npm install react-hook-form @hookform/resolvers zod
```

**Packages:**

- `react-hook-form`: Lightweight form library with minimal re-renders
- `@hookform/resolvers`: Resolvers to integrate validation libraries (Zod, Yup, etc.)
- `zod`: TypeScript-first schema validation library

---

## Basic Setup

### 1. Import Required Dependencies

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
```

### 2. Define Your Validation Schema

Create a Zod schema that defines the shape and validation rules for your form:

```typescript
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})
```

### 3. Infer TypeScript Type from Schema

```typescript
type LoginFormData = z.infer<typeof loginSchema>
```

This automatically creates a TypeScript type based on your schema, ensuring type safety.

### 4. Initialize the Form Hook

```typescript
const {
  register,
  handleSubmit,
  formState: { errors },
  getValues,
  setValue,
  watch,
  reset,
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
  defaultValues: {
    email: '',
    password: '',
  },
})
```

**Key Properties:**

- `register`: Function to register form inputs
- `handleSubmit`: Wrapper for form submission
- `formState.errors`: Object containing validation errors
- `getValues`: Get current form values
- `setValue`: Programmatically set form values
- `watch`: Watch specific form fields
- `reset`: Reset form to default values

---

## Form Validation with Zod

### Common Zod Validation Methods

```typescript
const userSchema = z
  .object({
    // String validations
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),

    // Number validations
    age: z.number().min(18, 'Must be 18 or older').max(100, 'Invalid age'),

    // Optional fields
    phone: z.string().optional(),

    // Custom validation
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),

    // Confirm password (must match password)
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // Error will be attached to confirmPassword field
  })

// Array validations
const tagsSchema = z.object({
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
})

// Enum validations
const statusSchema = z.object({
  status: z.enum(['active', 'inactive', 'pending'], {
    errorMap: () => ({ message: 'Please select a valid status' }),
  }),
})
```

### Advanced Zod Features

```typescript
// Conditional validation
const conditionalSchema = z
  .object({
    hasAccount: z.boolean(),
    email: z.string().email().optional(),
  })
  .refine(
    data => {
      if (data.hasAccount) {
        return !!data.email
      }
      return true
    },
    {
      message: 'Email is required when you have an account',
      path: ['email'],
    }
  )

// Transform data
const transformSchema = z.object({
  price: z.string().transform(val => parseFloat(val)),
})

// Preprocess data
const preprocessSchema = z.object({
  date: z.preprocess(arg => {
    if (typeof arg === 'string') {
      return new Date(arg)
    }
    return arg
  }, z.date()),
})
```

---

## Error Handling

### Displaying Errors

React Hook Form automatically provides error messages from your Zod schema:

```typescript
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    {...register("email")}
    className={cn(errors.email && "border-red-500")}
  />
  {errors.email && (
    <p className="text-sm text-red-500">{errors.email.message}</p>
  )}
</div>
```

### Error Object Structure

```typescript
// errors.email structure:
{
  type: "validation", // or "required", "pattern", etc.
  message: "Please enter a valid email address",
  ref: <input element>
}
```

### Accessing Nested Errors

For nested objects:

```typescript
const nestedSchema = z.object({
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
  }),
})

// Access nested errors
{errors.address?.street && (
  <p>{errors.address.street.message}</p>
)}
```

---

## Advanced Features

### 1. Custom Input Components

For custom components (like `PasswordInput`), use the spread operator with `register`:

```typescript
<PasswordInput
  id="password"
  {...register("password")}
  showPassword={showPassword}
  onTogglePassword={() => setShowPassword(!showPassword)}
/>
```

**Note:** Custom components must forward refs using `React.forwardRef` to work with React Hook Form.

### 2. Using Controller for Complex Components

For components that don't work with `register` (e.g., custom select, date pickers):

```typescript
import { Controller } from "react-hook-form"

<Controller
  name="status"
  control={control}
  render={({ field }) => (
    <Select
      value={field.value}
      onValueChange={field.onChange}
    >
      <SelectItem value="active">Active</SelectItem>
      <SelectItem value="inactive">Inactive</SelectItem>
    </Select>
  )}
/>
```

### 3. Watching Fields

Watch specific fields for real-time updates:

```typescript
// Watch single field
const email = watch('email')

// Watch multiple fields
const { email, password } = watch(['email', 'password'])

// Watch all fields
const formData = watch()
```

### 4. Programmatic Updates

```typescript
// Set a value
setValue('email', 'new@example.com', {
  shouldValidate: true, // Trigger validation
  shouldDirty: true, // Mark field as dirty
})

// Get values
const email = getValues('email')
const allValues = getValues()

// Reset form
reset() // Reset to default values
reset({ email: '', password: '' }) // Reset with new values
```

### 5. Form State

Access form state for UI updates:

```typescript
const {
  formState: {
    errors, // Validation errors
    isDirty, // Form has been modified
    isValid, // Form is valid
    isSubmitting, // Form is being submitted
    touchedFields, // Fields that have been touched
    dirtyFields, // Fields that have been modified
  },
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
})
```

---

## Complete Example

Here's a complete example based on your login page:

```typescript
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PasswordInput } from "@/components/ui/password-input"
import { cn } from "@/lib/utils"

// 1. Define validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

// 2. Infer TypeScript type
type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  // 3. Initialize form hook
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 4. Handle form submission
  const onSubmit = async (data: LoginFormData) => {
    try {
      // data.email and data.password are type-safe
      const result = await login({ email: data.email, password: data.password })
      console.log("Login successful:", result)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  // 5. Access form values programmatically
  const handleForgotPassword = async () => {
    const email = getValues("email")
    if (!email) {
      alert("Please enter your email address")
      return
    }
    // Use email value
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className={cn(errors.email && "border-red-500")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          id="password"
          placeholder="Enter your password"
          {...register("password")}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          className={cn(errors.password && "border-red-500")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Log In"}
      </Button>
    </form>
  )
}
```

---

## Best Practices

### 1. Type Safety

Always use `z.infer<typeof schema>` to get TypeScript types from your Zod schema. This ensures your form data is type-safe.

### 2. Validation Messages

Provide clear, user-friendly error messages in your Zod schema:

```typescript
z.string().email('Please enter a valid email address') // Good
z.string().email() // Less helpful
```

### 3. Default Values

Set default values in `useForm` to avoid undefined values:

```typescript
defaultValues: {
  email: "",
  password: "",
}
```

### 4. Error Display

Always display errors below form fields for better UX:

```typescript
{errors.fieldName && (
  <p className="text-sm text-red-500">{errors.fieldName.message}</p>
)}
```

### 5. Loading States

Use `isSubmitting` from `formState` to disable submit buttons during submission:

```typescript
<Button disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit"}
</Button>
```

### 6. Custom Validation

Use Zod's `.refine()` for complex validation logic that can't be expressed with built-in methods.

---

## Common Patterns

### Pattern 1: Form with Nested Objects

```typescript
const addressSchema = z.object({
  user: z.object({
    name: z.string().min(1),
    email: z.string().email(),
  }),
  address: z.object({
    street: z.string(),
    city: z.string(),
  }),
})

// Access nested values
{errors.user?.name && <p>{errors.user.name.message}</p>}
```

### Pattern 2: Dynamic Fields

```typescript
const dynamicSchema = z.object({
  items: z.array(
    z.object({
      name: z.string().min(1),
      quantity: z.number().min(1),
    })
  ),
})

// Use useFieldArray for dynamic arrays
import { useFieldArray } from 'react-hook-form'

const { fields, append, remove } = useFieldArray({
  control,
  name: 'items',
})
```

### Pattern 3: Conditional Validation

```typescript
const conditionalSchema = z
  .object({
    type: z.enum(['email', 'phone']),
    email: z.string().email().optional(),
    phone: z.string().optional(),
  })
  .refine(data => {
    if (data.type === 'email') return !!data.email
    if (data.type === 'phone') return !!data.phone
    return true
  })
```

---

## Troubleshooting

### Issue: Errors not showing

**Solution:** Make sure you're accessing `errors.fieldName` and the field is registered with `{...register("fieldName")}`

### Issue: Type errors with custom components

**Solution:** Ensure custom components use `React.forwardRef` and spread props correctly

### Issue: Validation not triggering

**Solution:** Check that `resolver: zodResolver(schema)` is set in `useForm` options

### Issue: Form not resetting

**Solution:** Use `reset()` function from `useForm`, not manual state updates

---

## Resources

- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [React Hook Form + Zod Example](https://react-hook-form.com/get-started#SchemaValidation)

---

## Summary

React Hook Form + Zod provides:

- ✅ Type-safe forms with TypeScript
- ✅ Minimal re-renders (better performance)
- ✅ Built-in validation with clear error messages
- ✅ Easy integration with custom components
- ✅ Simple API for complex forms

Happy coding! 🚀
