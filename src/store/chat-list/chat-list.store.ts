import { create } from "zustand"
import type { ChatListStore } from "./chat-list.store.types"
import type { MaybePromise } from "@/typings"
import type { UserViewModel } from "@/modules/user"

export const useChatListStore = create<ChatListStore>(() => ({
  chatList: [],

  findById: (): MaybePromise<UserViewModel> => {
    throw new Error("Method not implemented.")
  },

  findByKey: (): MaybePromise<UserViewModel> => {
    throw new Error("Method not implemented.")
  },

  findAll: (): MaybePromise<UserViewModel[]> => {
    throw new Error("Method not implemented.")
  },

  existsById: (): MaybePromise<boolean> => {
    throw new Error("Method not implemented.")
  },

  count: (): MaybePromise<bigint | number> => {
    throw new Error("Method not implemented.")
  },

  insert: (): MaybePromise<void | UserViewModel> => {
    throw new Error("Method not implemented.")
  },

  update: (): MaybePromise<void | UserViewModel> => {
    throw new Error("Method not implemented.")
  },

  delete: (): MaybePromise<boolean> => {
    throw new Error("Method not implemented.")
  },

  deleteById: (): MaybePromise<boolean> => {
    throw new Error("Method not implemented.")
  },

  deleteAll: (): MaybePromise<void> => {
    throw new Error("Method not implemented.")
  },
}))
