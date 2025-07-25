import type { Mapper } from '@/shared/core/Infrastructure-base/mapper.base'
import type { AuthSessionEntity } from '../../domain/entities/auth-session.entity'
import type { AuthSessionViewModel } from '../dtos/auth-session.viewmodel'

export class AuthSessionMapper implements Mapper<AuthSessionEntity, unknown, AuthSessionViewModel> {
  toDomain(_record: unknown): AuthSessionEntity {
    throw new Error('Method not implemented.')
  }
  toDb(_entity: AuthSessionEntity): unknown {
    throw new Error('Method not implemented.')
  }
  toResponse(entity: AuthSessionEntity): AuthSessionViewModel {
    const { address } = entity.getProps()
    return {
      address
    }
  }
}
