import { ExceptionBase } from "@/shared/core/exceptions/exception.base";

const AUTH_ADDRESS_INVALID = "AUTH.ADDRESS_INVALID"
const AUTH_PUBLIC_KEY_INVALID = "AUTH.PUBLIC_KEY_INVALID"
const AUTH_USER_ID_INVALID = "AUTH.USER_ID_INVALID"

export class AuthUserIdInvalidException extends ExceptionBase {
  readonly code = AUTH_USER_ID_INVALID

  constructor(userID?: string) {
    super(
      userID
        ? `Invalid user ID: ${userID}`
        : "User ID is required",
      { context: { userID } }
    )
  }
}
export class AuthAddressInvalidException extends ExceptionBase {
  readonly code = AUTH_ADDRESS_INVALID

  constructor(address?: string) {
    super(
      address
        ? `Invalid address format: ${address}`
        : "Invalid address format",
      { context: { address } }
    )
  }
}
export class AuthPublicKeyInvalidException extends ExceptionBase {
  readonly code = AUTH_PUBLIC_KEY_INVALID

  constructor(publicKey?: string) {
    super(
      publicKey
        ? `Invalid public key format: ${publicKey}`
        : "Invalid public key format",
      { context: { publicKey } }
    )
  }
}