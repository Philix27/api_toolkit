import { AppStore } from "@/lib"
import React from "react"

export function CookiesTab() {
  const store = AppStore.useApiClientStore()
  return <div className="">{store.responseCookies.toString()}</div>
}
