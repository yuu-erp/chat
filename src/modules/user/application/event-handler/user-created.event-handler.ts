import type { ApplicationEventHandler } from "@/shared/core/application-base/event-handler/application-event.handler";
import type { UserCreatedDomainEvent } from "../../domain/events/user-created.event";

export class AfterUserCreated implements ApplicationEventHandler<UserCreatedDomainEvent> {
  handle(domainEvent: UserCreatedDomainEvent): Promise<void> | Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
