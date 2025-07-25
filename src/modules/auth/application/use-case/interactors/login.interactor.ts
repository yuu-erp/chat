import { AuthSessionEntity } from '@/modules/auth/domain/entities/auth-session.entity'
import type { LoginCommand, LoginInPort } from '../port/login.in-port'
import type { AuthContractPort } from '@/modules/auth/domain/repository/auth-contract.port'

export class LoginInteractor implements LoginInPort {
  constructor(private readonly authContract: AuthContractPort) {}
  async execute(loginCommand: LoginCommand): Promise<AuthSessionEntity> {
    const session = AuthSessionEntity.create(loginCommand)
    const isRegisted = await this.authContract.checkWalletRegistered(session)
    console.log({ isRegisted })
    return session
  }
}
