
export interface AuthContractPort {
  checkWalletRegistered(address: string): Promise<boolean>
}