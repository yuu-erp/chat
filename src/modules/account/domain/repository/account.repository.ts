import type { RepositoryPort } from "@/shared/core/domain-base";
import type { AccountEntity } from "../entities/account.entity";

export interface IAccountRepository extends RepositoryPort<AccountEntity> {}
