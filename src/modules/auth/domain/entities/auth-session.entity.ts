import { AggregateRoot } from "@/shared/core/domain-base/entities/aggregate.base"
import { UniqueEntityID } from "@/shared/core/domain-base/entities/unique-entity"
import { invariant } from "@/shared/core/utils"
import { InvalidAddressException, PublicKeyMissingException } from "../auth.exceptions"
import type { AuthSessionProps } from "../types/auth-session-props.type"

export class AuthSessionEntity extends AggregateRoot<AuthSessionProps> {
  static create(createProps: AuthSessionProps): AuthSessionEntity {
    const id = new UniqueEntityID("auth")
    const props: AuthSessionProps = {
      ...createProps,
    }

    return new AuthSessionEntity({ id, props })
  }

  validate(): void {
    const {address, publicKey} = this.getProps()
    invariant(!!address, new InvalidAddressException("Wallet address is missing."))
    invariant(!!publicKey, new PublicKeyMissingException("Wallet address is missing."))
  }
}
