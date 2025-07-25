import { create } from "zustand"
import type { SettingStore } from "./setting.store.types"
import { DeviceType } from "@/typings/enum"

export const useSettingStore = create<SettingStore>(() => ({
    deviceType: DeviceType.ANDROID
}))

