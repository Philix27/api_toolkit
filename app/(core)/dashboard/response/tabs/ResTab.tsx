import React from "react"
import { AppStore } from "@/lib"

export function ResponseTab(): JSX.Element {
  const store = AppStore.useApiClientStore()
  return (
    <div className="bg-card px-4 py-3 overflow-y-scroll h-full">
      {store.responseBody}
    </div>
  )
}
