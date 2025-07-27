import { AccountEntity } from '@/modules/account/domain/entities/account.entity'
import type { CreateAccountCommand, CreateAccountInPort } from '../port/create-account.in-port'
import type { CreateAccountOutPort } from '../port/create-account.out-port'

export class CreateAccountInteractor implements CreateAccountInPort {
  constructor(private readonly createAccountPort: CreateAccountOutPort) {}

  async execute(createUserCommand: CreateAccountCommand): Promise<AccountEntity> {
    const accountEntity = AccountEntity.create(createUserCommand)
    return await this.createAccountPort.insert(accountEntity)
  }
}
