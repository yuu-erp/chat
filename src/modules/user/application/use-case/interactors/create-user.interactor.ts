import { UserEntity } from '@/modules/user/domain/entities/user.entity'
import type { CreateUserCommand, CreateUserInPort } from '../port/create-user.in-port'
import type { CreateUserOutPort } from '../port/create-user.out-port'
import type { MaybePromise } from '@/typings'

export class CreateUserInteractor implements CreateUserInPort {
  constructor(private readonly createUserPort: CreateUserOutPort) {}

  execute(createUserCommand: CreateUserCommand): MaybePromise<UserEntity> {
    const user = UserEntity.create(createUserCommand)
    return this.createUserPort.insert(user)
  }
}
