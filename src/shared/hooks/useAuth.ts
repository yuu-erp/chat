import { useAuthStore } from '@/store/auth/auth.store'
import type { AuthStore } from '@/store/auth/auth.store.types'

export function useAuth(): AuthStore {
  const authStore = useAuthStore()
  return authStore
}
