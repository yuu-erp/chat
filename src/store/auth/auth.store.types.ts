import type { AuthSessionViewModel, LoginCommandDTO } from '@/modules/auth'

export interface AuthStore {
  session: null | AuthSessionViewModel
  login: (command: LoginCommandDTO) => void
}
