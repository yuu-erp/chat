import type { AuthSessionEntity } from "@/modules/auth/domain/entities/auth-session.entity";

export interface AuthContractPort {
  checkWalletRegistered(session: AuthSessionEntity): Promise<boolean>
}