import type { UserViewModel } from "@/modules/user";
import type { RepositoryPort } from "@/shared/core/domain-base/repository/repository.port";

export interface ChatListStore extends RepositoryPort<UserViewModel> {
    chatList: UserViewModel[]
}