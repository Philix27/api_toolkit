import React from "react"
import { AppStore } from "@/lib"

export function BodyTab(): JSX.Element {
  const store = AppStore.useApiClientStore()
  return (
    <div className="px-4 py-3 overflow-y-scroll h-full">
      <textarea className="w-full bg-card outline-none max-h-fit"></textarea>
    </div>
  )
}
