import { z } from 'zod'

// 1. Khai báo schema
export const AccountModelSchema = z.object({
  id: z.string(),
  address: z.string().min(42).max(42), // địa chỉ ví Ethereum thường dài 42 ký tự
  name: z.string(),
  userID: z.string(),
  avatar: z.string().url().optional(),
  isActive: z.boolean()
})

// 2. Infer type dùng cho DbModel
export type AccountModel = z.infer<typeof AccountModelSchema>
