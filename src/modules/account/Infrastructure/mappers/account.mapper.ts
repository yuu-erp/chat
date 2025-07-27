import type { Mapper } from '@/shared/core/Infrastructure-base/mapper.base'
import { AccountEntity } from '../../domain'
import { AccountModelSchema, type AccountModel } from '../../domain/model/account.model'

export class AccountMapper implements Mapper<AccountEntity, AccountModel, AccountModel> {
  toResponse(entity: AccountEntity): AccountModel {
    const props = entity.getProps()

    const model: AccountModel = {
      id: props.id.toString(),
      address: props.address,
      name: props.name,
      userID: props.userID,
      avatar: props.avatar,
      isActive: props.isActive
    }
    return AccountModelSchema.parse(model)
  }

  toDb(entity: AccountEntity): AccountModel {
    return this.toResponse(entity)
  }

  toDomain(record: AccountModel): AccountEntity {
    return AccountEntity.create({
      address: record.address,
      name: record.name,
      userID: record.userID,
      avatar: record.avatar ?? '',
      isActive: record.isActive
    })
  }
}
