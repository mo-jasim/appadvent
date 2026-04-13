import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

/**
 * Typed Redux Hooks
 *
 * NOTE: These hooks are provided for RTK Query API state only.
 * The Redux store is configured to handle ONLY API calls via RTK Query.
 *
 * For local component state, use React's useState/useReducer.
 * For global UI state, use React Context.
 *
 * These hooks should ONLY be used with RTK Query hooks (useQuery, useMutation).
 * Do NOT use these for non-API state management.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
