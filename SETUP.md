# iWish Frontend Setup

This project includes:

## ✅ Installed & Configured

### 1. **shadcn/ui Components**

- Button, Input, Card, Label, Separator components
- Custom PasswordInput component with visibility toggle
- Configured with Tailwind CSS 4

### 2. **Redux Toolkit & RTK Query**

- Redux store configured in `lib/store.ts`
- RTK Query base API setup in `lib/api/baseApi.ts`
- Authentication API slice in `lib/api/authApi.ts`
- Typed hooks in `lib/hooks.ts`
- Redux Provider in `components/providers.tsx`

### 3. **Login Page**

- Complete login page at `/app/login/page.tsx`
- Features:
  - Email and password inputs
  - Password visibility toggle
  - Forgot password functionality
  - Social login buttons (Facebook, Google, Apple)
  - Gift box pattern background
  - Responsive design

## 🚀 Getting Started

1. **Install dependencies** (already done):

```bash
npm install
```

2. **Run development server**:

```bash
npm run dev
```

3. **Build for production**:

```bash
npm run build
```

## 📁 Project Structure

```
iwish/
├── app/
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── layout.tsx            # Root layout with Redux Provider
│   ├── page.tsx              # Home (redirects to login)
│   └── globals.css           # Global styles with shadcn/ui theme
├── components/
│   ├── providers.tsx         # Redux Provider wrapper
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── password-input.tsx
│       └── separator.tsx
├── lib/
│   ├── api/
│   │   ├── authApi.ts        # Authentication API with RTK Query
│   │   ├── baseApi.ts        # RTK Query base configuration
│   │   └── exampleApi.ts     # Example API slice
│   ├── hooks.ts              # Typed Redux hooks
│   ├── store.ts              # Redux store configuration
│   └── utils.ts              # Utility functions (cn helper)
└── components.json           # shadcn/ui configuration
```

## 🔧 Usage Examples

### Using RTK Query Hooks

```tsx
import { useLoginMutation } from '@/lib/api/authApi'

function LoginForm() {
  const [login, { isLoading }] = useLoginMutation()

  const handleLogin = async () => {
    try {
      const result = await login({ email, password }).unwrap()
      // Handle success
    } catch (error) {
      // Handle error
    }
  }
}
```

### Using Redux Store

```tsx
import { useAppSelector, useAppDispatch } from '@/lib/hooks'

function Component() {
  const data = useAppSelector(state => state.someSlice.data)
  const dispatch = useAppDispatch()
  // Use dispatch to dispatch actions
}
```

### Using shadcn/ui Components

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🌐 API Configuration

Update the base URL in `lib/api/baseApi.ts`:

```typescript
baseQuery: fetchBaseQuery({
  baseUrl: https://iwish.appadvent.in || '/api',
  // ...
})
```

Set `NEXT_PUBLIC_API_URL` in your `.env.local` file.

## 🎨 Customization

- **Theme colors**: Edit CSS variables in `app/globals.css`
- **Components**: All shadcn/ui components in `components/ui/` can be customized
- **Add more components**: Run `npx shadcn@latest add [component-name]`

## 📝 Next Steps

1. Configure your API endpoints in `lib/api/authApi.ts`
2. Implement social login OAuth flows
3. Add authentication state management (persist tokens, etc.)
4. Create protected routes
5. Add more pages and features
