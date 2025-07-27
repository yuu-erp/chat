import type { MaybePromise } from '@/typings'
import type { AuthEntity } from '../entities/auth.entity'

export interface ContractPort {
  isRegister: (entity: AuthEntity) => MaybePromise<boolean>
}
