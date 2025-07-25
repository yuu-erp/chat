import { Entity } from "../domain-base/entities/entity.base";

export interface Mapper<
  DomainEntity extends Entity<unknown>,
  DbRecord = unknown,
  Response = unknown
> {
  toDomain(record: DbRecord): DomainEntity;
  toDb(entity: DomainEntity): DbRecord;
  toResponse?(entity: DomainEntity): Response;
}
