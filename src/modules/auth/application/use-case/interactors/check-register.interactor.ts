import { InvalidAddressException } from '@/modules/auth/domain/auth.exceptions'
import type { AuthContractPort } from '@/modules/auth/domain/repository/auth-contract.port'
import type { CheckRegisterCommand, CheckRegisterInPort } from '../port/check-register.in-port'

export class CheckRegisterInteractor implements CheckRegisterInPort {
  constructor(private readonly authContract: AuthContractPort) {}
  async execute(request?: CheckRegisterCommand | undefined): Promise<boolean> {
    try {
      if (!request || !request.address) throw new InvalidAddressException('Wallet address is missing.')
      const isRegisted = await this.authContract.checkWalletRegistered(request.address)
      return isRegisted
    } catch (error) {
      return false
    }
  }
}
