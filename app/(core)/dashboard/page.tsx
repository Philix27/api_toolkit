"use client"

import React from "react"
import { TextB } from "@/comps"
import { AppStore, cn } from "@/lib"

import RequestSection from "./request"
import ResponseSection from "./response"

export default function Page() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"flex size-full"}>
      <RequestSection />
      <ResponseSection />
    </div>
  )
}

export function TabTitle(params: {
  title: string
  onClick: VoidFunction
  isActive?: boolean
}) {
  return (
    <div
      className={cn(
        "px-6 pt-2 pb-2 hover:bg-primary",
        params.isActive && "bg-card",
        params.isActive && "border-x-2 border-primary"
      )}
      onClick={params.onClick}
    >
      <TextB>{params.title}</TextB>
    </div>
  )
}
