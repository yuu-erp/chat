import { create } from 'zustand'
import type { AuthStore } from './auth.store.types'
export const useAuthStore = create<AuthStore>(() => ({}))
