import mitt, { type Emitter, type EventHandlerMap, type Handler, type WildcardHandler } from "mitt"

export type EmitDomainEvents = {
  UserCreatedDomainEvent: { userId: string; email: string }
  // Thêm các event khác tại đây
}

export interface AsyncEventBus extends Emitter<EmitDomainEvents> {
  emitAsync<Key extends keyof EmitDomainEvents>(
    type: Key,
    event: EmitDomainEvents[Key]
  ): Promise<void>
}

export function createMittAsync(all?: EventHandlerMap<EmitDomainEvents>): AsyncEventBus {
  const emitter = mitt<EmitDomainEvents>(all) as AsyncEventBus

  emitter.emitAsync = async function (type, event) {
    const handlers = this.all.get(type) as Handler<any>[] | undefined
    if (handlers) {
      for (const handler of handlers) {
        await handler(event)
      }
    }

    const wildcardHandlers = this.all.get("*") as WildcardHandler<EmitDomainEvents>[] | undefined
    if (wildcardHandlers) {
      for (const handler of wildcardHandlers) {
        await handler(type, event)
      }
    }
  }

  return emitter
}

// Singleton export
export const emitter = createMittAsync()
