import mitt, { type EventHandlerMap, type Emitter, type Handler, type WildcardHandler } from "mitt";
import type { EmitDomainEvents } from "./domain-event.types";

export function mittAsync(all?: EventHandlerMap<EmitDomainEvents>): Emitter<EmitDomainEvents> {
  const instance = mitt<EmitDomainEvents>(all);

  // Add emitAsync to match the Emitter interface
  instance.emitAsync = async function <Key extends keyof EmitDomainEvents>(
    type: Key,
    event: EmitDomainEvents[Key]
  ): Promise<void> {
    // Get specific handlers for the event type
    const handlersType = this.all.get(type) as Array<Handler<EmitDomainEvents[Key]>> | undefined;
    if (handlersType) {
      for (const handler of handlersType) {
        await handler(event); // Await handler execution
      }
    }

    // Get wildcard handlers
    const handlersWildcard = this.all.get("*") as Array<WildcardHandler<EmitDomainEvents>> | undefined;
    if (handlersWildcard) {
      for (const handler of handlersWildcard) {
        await handler(type, event); // Await wildcard handler execution
      }
    }
  };

  return instance;
}