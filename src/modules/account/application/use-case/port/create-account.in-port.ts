import type { AccountEntity, CreateAccountProps } from "@/modules/account/domain";
import type { UseCase } from "@/shared/core/domain-base/use-cases.port.base";
import type { MaybePromise } from "@/typings";

export interface CreateAccountCommand extends CreateAccountProps {}

export abstract class CreateAccountInPort implements UseCase<CreateAccountCommand, AccountEntity> {
  abstract execute(createUserCommand: CreateAccountCommand): MaybePromise<AccountEntity>
}
