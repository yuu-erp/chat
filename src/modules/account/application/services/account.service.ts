import { logger } from '@/shared/core/Infrastructure-base/logger/logger'
import { AccountMapper } from '../../Infrastructure/mappers/account.mapper'
import { AccountLocalNativeRepository } from '../../Infrastructure/persistence/local-native/user.impl.reposity'
import { emitter } from '@/shared/core/domain-base/events/domain-event.helper'
import { CreateAccountInteractor } from '../use-case/interactors/create-user.interactor'
import type { CreateAccountDTO } from '../dtos/create-account.dto'

export class AccountService {
  private accountMapper: AccountMapper
  private createAccountUsecase: CreateAccountInteractor
  constructor() {
    this.accountMapper = new AccountMapper()
    const accountRepo = new AccountLocalNativeRepository(this.accountMapper, emitter, logger)
    this.createAccountUsecase = new CreateAccountInteractor(accountRepo)
  }

  async createAccount(payload: CreateAccountDTO) {
    const entity = await this.createAccountUsecase.execute(payload)
    return this.accountMapper.toResponse(entity)
  }
}

export const accountService = new AccountService()