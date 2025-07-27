import type { MarkOptional } from "ts-essentials"

export interface AccountProps {
  address: string
  name: string
  userID: string
  avatar: string
  isActive: boolean
}

export interface CreateAccountProps extends MarkOptional<AccountProps, "isActive"> {}
