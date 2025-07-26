import type { UseCase } from "@/shared/core/domain-base/use-cases.port.base";

export interface CheckRegisterCommand {
    address: string
}

export abstract class CheckRegisterInPort implements UseCase<CheckRegisterCommand, boolean> {
    abstract execute(request?: CheckRegisterCommand | undefined): boolean | Promise<boolean>;
}