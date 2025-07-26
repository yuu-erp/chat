import { AuthSessionEntity } from '@/modules/auth/domain/entities/auth-session.entity'
import type { LoginCommand, LoginInPort } from '../port/login.in-port'

export class LoginInteractor implements LoginInPort {
  async execute(loginCommand: LoginCommand): Promise<AuthSessionEntity> {
    const session = AuthSessionEntity.create(loginCommand)
    return session
  }
}
