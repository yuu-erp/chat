import type { TransactionSenderPort } from "@/shared/core/domain-base/ports";

export class Web3Service implements TransactionSenderPort {
    // @ts-ignore
    sendTransaction<T = any>(params: { method: string; args: any[]; contractName: string; }): Promise<T> {}
}