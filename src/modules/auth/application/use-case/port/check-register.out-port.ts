import type { AuthEntity } from "@/modules/auth/domain/entities/auth.entity";
import type { MaybePromise } from "@/typings";

export abstract class CheckRegisterOutPort {
  abstract isRegister(user: AuthEntity): MaybePromise<boolean>;
}
