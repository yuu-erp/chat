import type { AccountEntity } from "@/modules/account/domain/entities/account.entity";
import type { MaybePromise } from "@/typings";

export abstract class CreateAccountOutPort {
  abstract insert(user: AccountEntity): MaybePromise<AccountEntity>;
}
