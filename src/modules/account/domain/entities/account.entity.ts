import { AggregateRoot } from '@/shared/core/domain-base/entities/aggregate.base'
import type { AccountProps, CreateAccountProps } from '../types/account-props.type'
import { UniqueEntityID } from '@/shared/core/domain-base/entities/unique-entity'

export class AccountEntity extends AggregateRoot<AccountProps> {
  static create(createProps: CreateAccountProps) {
    const id = new UniqueEntityID()
    const props: AccountProps = { ...createProps, isActive: false }
    const account = new AccountEntity({ id, props })
    return account
  }

  validate(): void {}
}
