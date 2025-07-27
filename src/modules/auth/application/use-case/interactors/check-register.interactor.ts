import { AuthEntity } from "@/modules/auth/domain/entities/auth.entity";
import type { CheckRegisterCommand, CheckRegisterInPort } from "../port/check-register.in-port";
import type { CheckRegisterOutPort } from "../port/check-register.out-port";

export class CheckRegisterInteractor implements CheckRegisterInPort {
    constructor(
        private readonly outPort: CheckRegisterOutPort
    ) {}

    async execute(checkRegisterCommand: CheckRegisterCommand): Promise<boolean> {
        const authEntity = AuthEntity.create(checkRegisterCommand)
        return this.outPort.isRegister(authEntity)
    }
}