import * as v from 'valibot'
import { UserRoles } from '../../domain/types/user-props.type'


export const userSchema = v.object({
  role: v.enum_(UserRoles),
  createdAt: v.optional(v.date(), new Date()),
  updatedAt: v.optional(v.date(), new Date())
})

export type UserViewModel = v.InferInput<typeof userSchema>
