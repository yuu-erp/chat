import type { TransactionSenderPort } from '@/shared/core/domain-base/ports'

export class MetanodeService implements TransactionSenderPort {
  constructor() {}
  // @ts-ignore
  sendTransaction<T = any>(params: { method: string; args: any[]; contractName: string }): Promise<T> {}
}
