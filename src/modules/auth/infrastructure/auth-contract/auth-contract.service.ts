import { delay } from '@/shared/core/utils'
import type { AuthSessionEntity } from '../../domain/entities/auth-session.entity'
import type { AuthContractPort } from '../../domain/repository/auth-contract.port'

export class AuthContractService implements AuthContractPort {
  async checkWalletRegistered(session: AuthSessionEntity): Promise<boolean> {
    const { address } = session.getProps()
    console.log('checkWalletRegistered', { address })
    // Gọi smart contract ở đây (giả sử là contractUser)
    await delay(1000)
    return true
  }
}
