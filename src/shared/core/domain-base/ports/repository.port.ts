import type { MaybePromise, StringEnum } from '@/typings'

export interface RepositoryPort<Entity> {
  findById(id: string): MaybePromise<Entity>
  findByKey(key: StringEnum<keyof Entity>): MaybePromise<Entity>
  findAll(): MaybePromise<Entity[]>
  existsById(id: string): MaybePromise<boolean>
  count(): MaybePromise<bigint | number>

  insert(entity: Entity): MaybePromise<Entity>
  update(entity: Entity): MaybePromise<void | Entity>

  delete(entity: Entity): MaybePromise<boolean>
  deleteById(id: string): MaybePromise<boolean>
  deleteAll(): MaybePromise<void>
}
