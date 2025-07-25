import { create } from 'zustand'
import type { ChatListStore } from './chat-list.store.types'

export const useChatListStore = create<ChatListStore>(() => ({}))
