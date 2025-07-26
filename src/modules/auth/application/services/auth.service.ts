import { AuthContractService } from '../../infrastructure/auth-contract/auth-contract.service'
import type { AuthSessionViewModel, CheckRegisterDTO, LoginCommandDTO } from '../dtos'
import { AuthSessionMapper } from '../mappers/auth-session.mapper'
import { CheckRegisterInteractor } from '../use-case/interactors/check-register.interactor'
import { LoginInteractor } from '../use-case/interactors/login.interactor'

export class AuthService {
  private readonly loginInteractor: LoginInteractor
  private readonly checkRegisterInteractor: CheckRegisterInteractor
  private readonly mapper: AuthSessionMapper
  constructor() {
    const authContract = new AuthContractService()

    this.mapper = new AuthSessionMapper()

    this.loginInteractor = new LoginInteractor()
    this.checkRegisterInteractor = new CheckRegisterInteractor(authContract)
  }

  async login(command: LoginCommandDTO): Promise<AuthSessionViewModel> {
    const entity = await this.loginInteractor.execute(command)
    return this.mapper.toResponse(entity)
  }

  async checkRegister(payload: CheckRegisterDTO): Promise<boolean> {
    return await this.checkRegisterInteractor.execute(payload)
  }
}
