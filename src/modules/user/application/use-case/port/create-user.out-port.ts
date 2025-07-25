import type { UserEntity } from "@/modules/user/domain/entities/user.entity";
import type { MaybePromise } from "@/typings";

export abstract class CreateUserOutPort {
  abstract insert(user: UserEntity): MaybePromise<UserEntity>;
}
