import type { UseCase } from '@/shared/core/domain-base/use-cases.port.base'
import type { MaybePromise } from '@/typings'
import type { CreateAuthProps } from '../../../domain/types/auth-props.type'

export interface CheckRegisterCommand extends CreateAuthProps {}

export abstract class CheckRegisterInPort implements UseCase<CheckRegisterCommand, boolean> {
  abstract execute(checkRegisterCommand: CheckRegisterCommand): MaybePromise<boolean>
}
