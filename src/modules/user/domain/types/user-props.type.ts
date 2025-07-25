import type { MarkOptional } from 'ts-essentials'
import type { UserMetadata } from '../value-objects/user-metadata.value-object'
export enum UserRoles {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

export interface UserProps {
  address: string
  addressSC: string
  userName: string
  avatar: string
  bio: string
  role: UserRoles
  metadata?: UserMetadata
}
export interface CreateUserProps extends MarkOptional<UserProps, "role"> {}

export interface IUserCreatedDE extends UserProps {}
