import { ValueObject } from "@/shared/core/domain-base/entities/value-object.base";
import { ArgumentInvalidException, ArgumentNotProvidedException } from "@/shared/core/exceptions/exceptions";
import { invariant } from "@/shared/core/utils";

export interface IUserMetadata {
  openPlatform: string;
  walletAddress: string;
  network: string;
  publicKey: string;
  signature: string;
}

export class UserMetadata extends ValueObject<IUserMetadata> {
  protected validate(props: IUserMetadata): void {
    const USER_METADATA_LENGTH = 5;
    const niceUserKeyMetadata = Object.keys(props).length === USER_METADATA_LENGTH;
    invariant(
      niceUserKeyMetadata,
      new ArgumentNotProvidedException("User metadata keys not correct"),
    );
    const niceValueUserMetadata =
      Object.values(props).filter(Boolean).length === USER_METADATA_LENGTH;
    invariant(
      niceValueUserMetadata,
      new ArgumentInvalidException("User metadata values not correct"),
    );
  }
}
