import type { AccountEntity } from '@/modules/account/domain/entities/account.entity'
import type { CreateAccountProps } from '@/modules/account/domain/types/account-props.type'
import type { UseCase } from '@/shared/core/domain-base/use-cases.port.base'
import type { MaybePromise } from '@/typings'

export interface CreateAccountCommand extends CreateAccountProps {}

export abstract class CreateAccountInPort implements UseCase<CreateAccountCommand, AccountEntity> {
  abstract execute(createAccountCommand: CreateAccountCommand): MaybePromise<AccountEntity>
}
