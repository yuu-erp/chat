import { ExceptionBase } from "@/shared/core/exceptions/exception.base"

/**
 * Mã lỗi định danh cho từng exception liên quan đến Auth
 */
export const AUTH_ERROR_CODES = {
  INVALID_ADDRESS: "AUTH.INVALID_ADDRESS",
  PUBLIC_KEY_MISSING: "AUTH.PUBLIC_KEY_MISSING",
} as const

/**
 * Không đúng định dạng địa chỉ ví (invalid address)
 */
export class InvalidAddressException extends ExceptionBase {
  readonly code = AUTH_ERROR_CODES.INVALID_ADDRESS
}
/**
 * Thiếu public key trong quá trình xác thực
 */
export class PublicKeyMissingException extends ExceptionBase {
  readonly code = AUTH_ERROR_CODES.PUBLIC_KEY_MISSING
}

