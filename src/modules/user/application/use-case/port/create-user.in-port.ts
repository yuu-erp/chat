import type { UserEntity } from "@/modules/user/domain/entities/user.entity";
import type { CreateUserProps } from "@/modules/user/domain/types/user-props.type";
import type { UseCase } from "@/shared/core/domain-base/use-cases.port.base";
import type { MaybePromise } from "@/typings";

export interface CreateUserCommand extends CreateUserProps {}

export abstract class CreateUserInPort implements UseCase<CreateUserCommand, UserEntity> {
  abstract execute(createUserCommand: CreateUserCommand): MaybePromise<UserEntity>;
}
