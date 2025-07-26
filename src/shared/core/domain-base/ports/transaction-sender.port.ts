export interface TransactionSenderPort {
  sendTransaction<T = any>(params: { method: string; args: any[]; contractName: string }): Promise<T>
}
