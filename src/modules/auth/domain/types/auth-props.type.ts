import type { UserID } from '@/typings'

export interface AuthProps {
  address: string
  publicKey: string
  userID: UserID
}

export interface CreateAuthProps extends AuthProps {}