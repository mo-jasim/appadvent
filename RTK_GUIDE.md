# Redux Toolkit (RTK) Usage Guide

This guide explains how to use Redux Toolkit (RTK) and RTK Query in the iWish application with practical examples.

## Table of Contents

1. [What is Redux Toolkit?](#what-is-redux-toolkit)
2. [Project Setup](#project-setup)
3. [Store Configuration](#store-configuration)
4. [RTK Query - API Management](#rtk-query---api-management)
5. [Creating API Slices](#creating-api-slices)
6. [Using RTK Query Hooks](#using-rtk-query-hooks)
7. [Creating Regular Redux Slices](#creating-regular-redux-slices)
8. [TypeScript Support](#typescript-support)
9. [Best Practices](#best-practices)
10. [Complete Examples](#complete-examples)

---

## What is Redux Toolkit?

Redux Toolkit (RTK) is the official, opinionated, batteries-included toolset for efficient Redux development. It includes:

- **RTK Query**: Powerful data fetching and caching library
- **createSlice**: Simplified reducer creation
- **configureStore**: Simplified store setup
- **TypeScript support**: Full type safety out of the box

---

## Project Setup

### Installation

Redux Toolkit is already installed in this project:

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.11.1",
    "react-redux": "^9.2.0"
  }
}
```

### Store Provider

The Redux store is provided at the app level in `components/providers.tsx`:

```tsx
'use client'

import { useMemo } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/store'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => makeStore(), [])

  return <Provider store={store}>{children}</Provider>
}
```

---

## Store Configuration

The Redux store is configured in `lib/store.ts`:

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add your reducers here
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: [],
        },
      }).concat(baseApi.middleware),
  })
}

// Type inference helpers
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
```

### Adding a New Reducer

To add a new reducer to the store:

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { counterSlice } from './slices/counterSlice' // Example slice

export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      counter: counterSlice.reducer, // Add your reducer here
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
        },
      }).concat(baseApi.middleware),
  })
}
```

---

## RTK Query - API Management

RTK Query is a powerful data fetching and caching tool built on top of Redux Toolkit. It eliminates the need to write data fetching logic manually.

### Base API Configuration

The base API is configured in `lib/api/baseApi.ts`:

```typescript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_CONFIG, AUTH_CONFIG } from '@/config'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.baseUrl,
    prepareHeaders: headers => {
      // Add authentication token if available
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem(AUTH_CONFIG.tokenKey)
        if (token) {
          headers.set('authorization', `${AUTH_CONFIG.tokenPrefix} ${token}`)
        }
      }
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      return headers
    },
  }),
  tagTypes: ['User', 'Wishlist', 'Product'], // For cache invalidation
  endpoints: () => ({}),
})
```

### Key Features

- **Automatic caching**: Responses are cached automatically
- **Request deduplication**: Duplicate requests are automatically deduplicated
- **Cache invalidation**: Use tags to invalidate related data
- **Loading states**: Built-in loading, error, and success states

---

## Creating API Slices

### Example: Authentication API

Here's how the authentication API is structured in `lib/api/authApi.ts`:

```typescript
import { baseApi } from './baseApi'
import { API_ENDPOINTS } from '@/config'

// Define request/response types
export interface LoginRequest {
  email: string
  password: string
}

export interface AuthResponse {
  token?: string
  accessToken?: string
  user?: {
    id: string
    email: string
    firstName?: string
    lastName?: string
  }
  message?: string
}

// Create API slice by injecting endpoints
const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // Mutation (POST, PUT, DELETE, PATCH)
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: credentials => ({
        url: API_ENDPOINTS.auth.login,
        method: 'POST',
        body: credentials,
      }),
    }),

    // Query (GET)
    getUserProfile: builder.query<User, void>({
      query: () => ({
        url: API_ENDPOINTS.user.profile,
        method: 'GET',
      }),
      providesTags: ['User'], // Cache tag
    }),

    // Mutation with cache invalidation
    updateProfile: builder.mutation<User, UpdateProfileRequest>({
      query: data => ({
        url: API_ENDPOINTS.user.updateProfile,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'], // Invalidate User cache
    }),
  }),
})

// Export hooks for use in components
export const { useLoginMutation, useGetUserProfileQuery, useUpdateProfileMutation } = authApi
```

### Creating a New API Slice

**Step 1: Create the API file** (`lib/api/wishlistApi.ts`):

```typescript
import { baseApi } from './baseApi'
import { API_ENDPOINTS } from '@/config'

// Define types
export interface Wishlist {
  id: string
  title: string
  description?: string
  items: WishlistItem[]
  createdAt: string
}

export interface CreateWishlistRequest {
  title: string
  description?: string
  isPrivate?: boolean
}

// Create the API slice
const wishlistApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // GET all wishlists
    getWishlists: builder.query<Wishlist[], void>({
      query: () => ({
        url: API_ENDPOINTS.wishlist.list,
        method: 'GET',
      }),
      providesTags: ['Wishlist'],
    }),

    // GET single wishlist
    getWishlist: builder.query<Wishlist, string>({
      query: id => ({
        url: API_ENDPOINTS.wishlist.get(id),
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Wishlist', id }],
    }),

    // POST create wishlist
    createWishlist: builder.mutation<Wishlist, CreateWishlistRequest>({
      query: data => ({
        url: API_ENDPOINTS.wishlist.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Wishlist'],
    }),

    // PUT update wishlist
    updateWishlist: builder.mutation<
      Wishlist,
      { id: string; data: Partial<CreateWishlistRequest> }
    >({
      query: ({ id, data }) => ({
        url: API_ENDPOINTS.wishlist.update(id),
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Wishlist', id }],
    }),

    // DELETE wishlist
    deleteWishlist: builder.mutation<void, string>({
      query: id => ({
        url: API_ENDPOINTS.wishlist.delete(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
})

// Export hooks
export const {
  useGetWishlistsQuery,
  useGetWishlistQuery,
  useCreateWishlistMutation,
  useUpdateWishlistMutation,
  useDeleteWishlistMutation,
} = wishlistApi
```

**Step 2: Add tag type to baseApi** (if not already added):

```typescript
// lib/api/baseApi.ts
export const baseApi = createApi({
  // ... other config
  tagTypes: ['User', 'Wishlist', 'Product'], // Add 'Wishlist'
  // ...
})
```

---

## Using RTK Query Hooks

### Using Mutations

Mutations are used for POST, PUT, DELETE, and PATCH requests:

```tsx
'use client'

import { useState } from 'react'
import { useLoginMutation } from '@/lib/api/authApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Mutation hook returns [trigger function, result object]
  const [login, { isLoading, error, isSuccess }] = useLoginMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Call the mutation
      const result = await login({ email, password }).unwrap()

      // Handle success
      console.log('Login successful:', result)

      // Save token if provided
      if (result.token) {
        localStorage.setItem('token', result.token)
      }
    } catch (err) {
      // Error is already handled by RTK Query
      console.error('Login failed:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
      {error && <p className="text-red-500">Login failed</p>}
      {isSuccess && <p className="text-green-500">Login successful!</p>}
    </form>
  )
}
```

### Using Queries

Queries are used for GET requests and automatically refetch when needed:

```tsx
'use client'

import { useGetWishlistsQuery } from '@/lib/api/wishlistApi'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WishlistList() {
  // Query hook automatically fetches data
  const { data, isLoading, error, refetch } = useGetWishlistsQuery()

  if (isLoading) {
    return <div>Loading wishlists...</div>
  }

  if (error) {
    return (
      <div>
        <p>Error loading wishlists</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      <h2>My Wishlists</h2>
      {data?.map(wishlist => (
        <Card key={wishlist.id}>
          <CardHeader>
            <CardTitle>{wishlist.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{wishlist.description}</p>
            <p>Items: {wishlist.items.length}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

### Query with Parameters

```tsx
'use client'

import { useGetWishlistQuery } from '@/lib/api/wishlistApi'

export default function WishlistDetail({ wishlistId }: { wishlistId: string }) {
  // Pass parameters to the query
  const { data: wishlist, isLoading, error } = useGetWishlistQuery(wishlistId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading wishlist</div>
  if (!wishlist) return <div>Wishlist not found</div>

  return (
    <div>
      <h1>{wishlist.title}</h1>
      <p>{wishlist.description}</p>
      {/* ... */}
    </div>
  )
}
```

### Conditional Queries

Skip queries conditionally:

```tsx
'use client'

import { useGetWishlistQuery } from '@/lib/api/wishlistApi'

export default function WishlistDetail({ wishlistId }: { wishlistId?: string }) {
  // Skip the query if wishlistId is not provided
  const { data, isLoading } = useGetWishlistQuery(wishlistId!, {
    skip: !wishlistId, // Skip if wishlistId is undefined
  })

  if (!wishlistId) {
    return <div>Please select a wishlist</div>
  }

  // ... rest of component
}
```

### Polling (Auto-refresh)

Automatically refetch data at intervals:

```tsx
'use client'

import { useGetWishlistsQuery } from '@/lib/api/wishlistApi'

export default function LiveWishlistList() {
  // Poll every 30 seconds
  const { data, isLoading } = useGetWishlistsQuery(undefined, {
    pollingInterval: 30000, // 30 seconds
  })

  // ... rest of component
}
```

---

## Creating Regular Redux Slices

For local state management (not API calls), use `createSlice`:

### Example: Counter Slice

```typescript
// lib/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: state => {
      state.value = 0
    },
  },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer
```

### Using the Slice in Components

```tsx
'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { increment, decrement, incrementByAmount, reset } from '@/lib/slices/counterSlice'
import { Button } from '@/components/ui/button'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>Add 5</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </div>
  )
}
```

### Example: UI State Slice

```typescript
// lib/slices/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  sidebarOpen: boolean
  theme: 'light' | 'dark'
  notifications: Notification[]
}

const initialState: UIState = {
  sidebarOpen: false,
  theme: 'light',
  notifications: [],
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload)
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload)
    },
  },
})

export const { toggleSidebar, setTheme, addNotification, removeNotification } = uiSlice.actions
export default uiSlice.reducer
```

---

## TypeScript Support

### Typed Hooks

Use the typed hooks from `lib/hooks.ts`:

```typescript
// lib/hooks.ts
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
```

### Using Typed Hooks

```tsx
'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { increment } from '@/lib/slices/counterSlice'

export default function Component() {
  // Fully typed - TypeScript knows the shape of RootState
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  // TypeScript ensures only valid actions can be dispatched
  dispatch(increment())
}
```

---

## Best Practices

### 1. Organize API Slices by Feature

```
lib/
  api/
    authApi.ts      # Authentication endpoints
    wishlistApi.ts  # Wishlist endpoints
    userApi.ts      # User profile endpoints
    productApi.ts   # Product search endpoints
```

### 2. Use Tags for Cache Invalidation

```typescript
// When creating a wishlist, invalidate the wishlist list
createWishlist: builder.mutation<Wishlist, CreateWishlistRequest>({
  query: data => ({
    url: API_ENDPOINTS.wishlist.create,
    method: 'POST',
    body: data,
  }),
  invalidatesTags: ['Wishlist'], // Invalidates all Wishlist queries
}),

// When updating a specific wishlist
updateWishlist: builder.mutation<Wishlist, UpdateRequest>({
  query: ({ id, data }) => ({
    url: API_ENDPOINTS.wishlist.update(id),
    method: 'PUT',
    body: data,
  }),
  invalidatesTags: (result, error, { id }) => [
    { type: 'Wishlist', id }, // Invalidate specific wishlist
    'Wishlist', // And the list
  ],
}),
```

### 3. Handle Errors Properly

```tsx
const [login, { error, isError }] = useLoginMutation()

const handleLogin = async () => {
  try {
    const result = await login({ email, password }).unwrap()
    // Success handling
  } catch (err) {
    // Type-safe error handling
    if ('status' in err) {
      // RTK Query error
      if (err.status === 401) {
        // Handle unauthorized
      } else if (err.status === 500) {
        // Handle server error
      }
    }
  }
}
```

### 4. Use Transform Responses

Transform API responses to match your app's data structure:

```typescript
getWishlists: builder.query<Wishlist[], void>({
  query: () => ({
    url: API_ENDPOINTS.wishlist.list,
    method: 'GET',
  }),
  transformResponse: (response: ApiWishlistResponse) => {
    // Transform the API response to match your Wishlist type
    return response.data.map(item => ({
      id: item.id,
      title: item.title,
      // ... transform fields
    }))
  },
  providesTags: ['Wishlist'],
}),
```

### 5. Optimistic Updates

Update the UI immediately, then revert if the request fails:

```typescript
updateWishlist: builder.mutation<Wishlist, UpdateRequest>({
  query: ({ id, data }) => ({
    url: API_ENDPOINTS.wishlist.update(id),
    method: 'PUT',
    body: data,
  }),
  // Optimistically update the cache
  onQueryStarted: async ({ id, data }, { dispatch, queryFulfilled }) => {
    // Optimistic update
    const patchResult = dispatch(
      wishlistApi.util.updateQueryData('getWishlist', id, draft => {
        Object.assign(draft, data)
      })
    )

    try {
      await queryFulfilled
    } catch {
      // Revert on error
      patchResult.undo()
    }
  },
  invalidatesTags: (result, error, { id }) => [{ type: 'Wishlist', id }],
}),
```

---

## Complete Examples

### Example 1: Complete Login Flow

```tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/lib/api/authApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AUTH_CONFIG } from '@/config'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [login, { isLoading }] = useLoginMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    try {
      const result = await login({ email, password }).unwrap()

      // Save token
      if (result.token || result.accessToken) {
        const token = result.token || result.accessToken
        localStorage.setItem(AUTH_CONFIG.tokenKey, token!)
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } catch (err: any) {
      setErrorMessage(err?.data?.message || err?.message || 'Login failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}
```

### Example 2: Wishlist Management

```tsx
'use client'

import { useState } from 'react'
import {
  useGetWishlistsQuery,
  useCreateWishlistMutation,
  useDeleteWishlistMutation,
} from '@/lib/api/wishlistApi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function WishlistManager() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Queries
  const { data: wishlists, isLoading, error, refetch } = useGetWishlistsQuery()

  // Mutations
  const [createWishlist, { isLoading: isCreating }] = useCreateWishlistMutation()
  const [deleteWishlist, { isLoading: isDeleting }] = useDeleteWishlistMutation()

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createWishlist({ title, description }).unwrap()
      setTitle('')
      setDescription('')
      // Cache is automatically updated via invalidatesTags
    } catch (err) {
      console.error('Failed to create wishlist:', err)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this wishlist?')) {
      try {
        await deleteWishlist(id).unwrap()
        // Cache is automatically updated
      } catch (err) {
        console.error('Failed to delete wishlist:', err)
      }
    }
  }

  if (isLoading) {
    return <div>Loading wishlists...</div>
  }

  if (error) {
    return (
      <div>
        <p>Error loading wishlists</p>
        <Button onClick={() => refetch()}>Retry</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Create Form */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Wishlist</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="space-y-4">
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Wishlist title"
              required
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description (optional)"
            />
            <Button type="submit" disabled={isCreating}>
              {isCreating ? 'Creating...' : 'Create Wishlist'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Wishlist List */}
      <div className="grid gap-4">
        {wishlists?.map(wishlist => (
          <Card key={wishlist.id}>
            <CardHeader>
              <CardTitle>{wishlist.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{wishlist.description}</p>
              <p className="text-sm text-gray-500">{wishlist.items.length} items</p>
              <Button
                variant="destructive"
                onClick={() => handleDelete(wishlist.id)}
                disabled={isDeleting}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
```

### Example 3: Combining Queries and Local State

```tsx
'use client'

import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { useGetWishlistQuery } from '@/lib/api/wishlistApi'
import { toggleSidebar } from '@/lib/slices/uiSlice'

export default function WishlistPage({ wishlistId }: { wishlistId: string }) {
  const dispatch = useAppDispatch()
  const sidebarOpen = useAppSelector(state => state.ui.sidebarOpen)

  const { data: wishlist, isLoading } = useGetWishlistQuery(wishlistId)

  return (
    <div>
      <button onClick={() => dispatch(toggleSidebar())}>
        {sidebarOpen ? 'Close' : 'Open'} Sidebar
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{wishlist?.title}</h1>
          {/* ... */}
        </div>
      )}
    </div>
  )
}
```

---

## Summary

- **RTK Query** is perfect for API calls - automatic caching, loading states, and error handling
- **createSlice** is great for local state management
- Always use typed hooks (`useAppSelector`, `useAppDispatch`) for TypeScript support
- Use tags for cache invalidation to keep data fresh
- Handle errors properly with try/catch and error states
- Organize API slices by feature for better maintainability

For more information, visit the [Redux Toolkit documentation](https://redux-toolkit.js.org/).
