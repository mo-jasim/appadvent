import { configureStore } from '@reduxjs/toolkit'

// Minimal store setup. This project currently uses Redux types/hooks
// but has no active feature slices configured.
export const store = configureStore({
  reducer: {},
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
