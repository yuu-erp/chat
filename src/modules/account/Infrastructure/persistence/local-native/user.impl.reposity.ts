import type { AccountEntity, IAccountRepository } from '@/modules/account/domain'
import type { AccountModel } from '@/modules/account/domain/model/account.model'
import type { AsyncEventBus } from '@/shared/core/domain-base/events/domain-event.helper'
import type { LoggerPort } from '@/shared/core/Infrastructure-base/logger/logger.port'
import type { Mapper } from '@/shared/core/Infrastructure-base/mapper.base'
import { NativeRepositoryBase } from '@/shared/core/Infrastructure-base/persistence/repository/repository.native.base'

export class AccountLocalNativeRepository
  extends NativeRepositoryBase<AccountEntity, AccountModel>
  implements IAccountRepository
{
  protected keylocal = 'accountChat'

  constructor(
    mapper: Mapper<AccountEntity, AccountModel>,
    emitter: AsyncEventBus,
    logger: LoggerPort
  ) {
    super(mapper, emitter, logger)
  }

  // Bạn có thể implement các phương thức tùy theo logic localStorage / IndexedDB
  // Ví dụ:
  // override async findById(id: string): Promise<AccountEntity | undefined> { ... }
}
