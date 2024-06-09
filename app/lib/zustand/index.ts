import { useApiClientStore } from "./apiClient"
import { useSettingsStore } from "./settings"

export const AppStore = {
  useSettingsStore,
  useApiClientStore,
}


export * from "./apiClient"