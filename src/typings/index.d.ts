export type UserID = string
export type EntityId = string | number
export type StringEnum<T> = T | (string & Record<never, never>);
export type MaybePromise<T> = T | Promise<T>

