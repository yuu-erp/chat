import { AggregateRoot } from "@/shared/core/domain-base/entities/aggregate.base";
import type { AuthProps, CreateAuthProps } from "../types/auth-props.type";
import { UniqueEntityID } from "@/shared/core/domain-base/entities/unique-entity";
import { invariant } from "@/shared/core/utils";
import { AuthAddressInvalidException, AuthPublicKeyInvalidException, AuthUserIdInvalidException } from "../auth.exceptions";

export class AuthEntity extends AggregateRoot<AuthProps> {
    static create(createProps: CreateAuthProps) {
        const id = new UniqueEntityID()
        const props: AuthProps = { ...createProps }
        const auth = new AuthEntity({ id, props })
        return auth
    }
    validate(): void {
        const { address, publicKey, userID } = this.getProps()
        invariant(!address, new AuthAddressInvalidException(address))
        invariant(!publicKey, new AuthPublicKeyInvalidException(publicKey))
        invariant(!userID, new AuthUserIdInvalidException(userID))
    }
}
