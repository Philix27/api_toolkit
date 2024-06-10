import React from "react"
import { AppStore } from "@/lib"

export function SessionsTab() {
  const store = AppStore.useApiClientStore()
  return <div className="">{store.responseCookies}</div>
}
