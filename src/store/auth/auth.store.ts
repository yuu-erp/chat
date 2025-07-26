import { create } from "zustand"
import { AuthService } from "@/modules/auth"
import type { AuthStore } from "./auth.store.types"
import type { LoginCommandDTO } from "@/modules/auth"

const authService = new AuthService()

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  login: async (command: LoginCommandDTO) => {
    const isRegisted = await authService.checkRegister({ address: command.address })
    console.log({isRegisted})
    const session = await authService.login(command)
    set({ session: session })
  },
}))

