declare module 'mitt' {
    type EventType = string | symbol
  
    export type Handler<T = unknown> = (event: T) => void | Promise<void>
    export type WildcardHandler<T = Record<string, unknown>> = (
      type: keyof T,
      event: T[keyof T]
    ) => void | Promise<void>
  
    export type EventHandlerList<T = unknown> = Array<Handler<T>>
    export type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>
  
    export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
      keyof Events | '*',
      EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>
    >
  
    export interface Emitter<Events extends Record<EventType, unknown>> {
      all: EventHandlerMap<Events>
  
      on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void
      on(type: '*', handler: WildcardHandler<Events>): void
  
      off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void
      off(type: '*', handler: WildcardHandler<Events>): void
  
      emit<Key extends keyof Events>(type: Key, event: Events[Key]): void
      emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void
  
      emitAsync<Key extends keyof Events>(type: Key, event: Events[Key]): Promise<void>
    }
  
    export default function mitt<Events extends Record<EventType, unknown>>(
      all?: EventHandlerMap<Events>
    ): Emitter<Events>
  }
  