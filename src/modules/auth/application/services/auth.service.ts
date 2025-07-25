import { AuthContractService } from '../../infrastructure/auth-contract/auth-contract.service'
import type { AuthSessionViewModel } from '../dtos/auth-session.viewmodel'
import type { LoginCommandDTO } from '../dtos/login-command.dto'
import { AuthSessionMapper } from '../mappers/auth-session.mapper'
import { LoginInteractor } from '../use-case/interactors/login.interactor'

export class AuthService {
  private readonly loginInteractor: LoginInteractor
  private readonly mapper: AuthSessionMapper
  constructor() {
    const authContract = new AuthContractService()

    this.mapper = new AuthSessionMapper()
    
    this.loginInteractor = new LoginInteractor(authContract)
  }

  async login(command: LoginCommandDTO): Promise<AuthSessionViewModel> {
    const entity = await this.loginInteractor.execute(command)
    return this.mapper.toResponse(entity)
  }
}
