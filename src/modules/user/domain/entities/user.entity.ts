import { AggregateRoot } from '@/shared/core/domain-base/entities/aggregate.base'
import { UserRoles, type CreateUserProps, type UserProps } from '../types/user-props.type'
import { UniqueEntityID } from '@/shared/core/domain-base/entities/unique-entity'
import { UserCreatedDomainEvent } from '../events/user-created.event'

export class UserEntity extends AggregateRoot<UserProps> {
  static create(createProps: CreateUserProps) {
    const id = new UniqueEntityID()
    const props: UserProps = { role: UserRoles.MEMBER, ...createProps }
    const user = new UserEntity({ id, props })
    user.addEvent(
      new UserCreatedDomainEvent({
        aggregateId: id,
        ...props,
        ...props?.metadata?.raw()
      })
    )
    return user
  }

  validate(): void {
    throw new Error('Method not implemented.')
  }
}
