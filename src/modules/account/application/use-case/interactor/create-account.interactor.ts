import { AccountEntity } from "@/modules/account/domain/entities/account.entity";
import type { CreateAccountCommand, CreateAccountInPort } from "../port/create-account.in-port";
import type { CreateAccountOutPort } from "../port/create-account.out-port";

export class CreateAccountInteractor implements CreateAccountInPort {
    constructor(
        private readonly outPort: CreateAccountOutPort
    ) {

    }

    async execute(createAccountCommand: CreateAccountCommand): Promise<AccountEntity> {
        const accountEntiry = AccountEntity.create(createAccountCommand)
        return this.outPort.insert(accountEntiry)
    }
}