import { useChatListStore } from '@/store/chat-list/chat-list.store'
import type { ChatListStore } from '@/store/chat-list/chat-list.store.types'

export function useChatList(): ChatListStore {
  const chatListStore = useChatListStore()
  return chatListStore
}
