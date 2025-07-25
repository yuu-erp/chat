import type { AuthSessionEntity } from "@/modules/auth/domain/entities/auth-session.entity";
import type { AuthSessionProps } from "@/modules/auth/domain/types/auth-session-props.type";
import type { UseCase } from "@/shared/core/domain-base/use-cases.port.base";
import type { MaybePromise } from "@/typings";

export interface LoginCommand extends AuthSessionProps {}

export abstract class LoginInPort implements UseCase<LoginCommand, AuthSessionEntity> {
  abstract execute(loginCommand: LoginCommand): MaybePromise<AuthSessionEntity>;
}
