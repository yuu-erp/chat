import type { RepositoryPort } from '@/shared/core/domain-base'
import type { AggregateRoot } from '@/shared/core/domain-base/entities/aggregate.base'
import type { AsyncEventBus } from '@/shared/core/domain-base/events/domain-event.helper'
import type { MaybePromise, StringEnum } from '@/typings'
import type { LoggerPort } from '../../logger/logger.port'
import type { Mapper } from '../../mapper.base'

export abstract class NativeRepositoryBase<
  Aggregate extends AggregateRoot<unknown>,
  DbModel extends Record<string, unknown>
> implements RepositoryPort<Aggregate>
{
  protected abstract keylocal: string
  protected constructor(
    protected readonly mapper: Mapper<Aggregate, DbModel>,
    protected readonly emitter: AsyncEventBus,
    protected readonly logger: LoggerPort
  ) {}

  findById(id: string): MaybePromise<Aggregate> {
    throw new Error('Method not implemented.')
  }
  findByKey(key: StringEnum<keyof Aggregate>): MaybePromise<Aggregate> {
    throw new Error('Method not implemented.')
  }
  findAll(): MaybePromise<Aggregate[]> {
    throw new Error('Method not implemented.')
  }
  existsById(id: string): MaybePromise<boolean> {
    throw new Error('Method not implemented.')
  }
  count(): MaybePromise<bigint | number> {
    throw new Error('Method not implemented.')
  }
  insert(entity: Aggregate): MaybePromise<Aggregate> {
    throw new Error('Method not implemented.')
  }
  update(entity: Aggregate): MaybePromise<void | Aggregate> {
    throw new Error('Method not implemented.')
  }

  delete(entity: Aggregate): MaybePromise<boolean> {
    throw new Error('Method not implemented.')
  }
  deleteById(id: string): MaybePromise<boolean> {
    throw new Error('Method not implemented.')
  }
  deleteAll(): MaybePromise<void> {
    throw new Error('Method not implemented.')
  }
}
