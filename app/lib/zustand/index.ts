import { useApiClientStore } from "./apiClient"
import { useSettingsStore } from "./settings"

export const AppStores = {
  useSettingsStore,
  useApiClientStore,
}


export * from "./apiClient"