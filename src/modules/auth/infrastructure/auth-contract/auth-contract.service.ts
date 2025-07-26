import { delay } from '@/shared/core/utils'
import type { AuthContractPort } from '../../domain/repository/auth-contract.port'

export class AuthContractService implements AuthContractPort {
  async checkWalletRegistered(address: string): Promise<boolean> {
    console.log('checkWalletRegistered', { address })
    await delay(1000)
    return true
  }
}
