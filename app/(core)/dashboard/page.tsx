"use client"

import React from "react"
import { TextB, TextH } from "@/comps"
import { AppStore, cn } from "@/lib"

import RequestSection from "./request"

export default function Page() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"flex size-full"}>
      <RequestSection />
      <div className={"h-full w-1/2 border-l"}>
        <div className="mb-4 flex h-[50px] items-center">
          <TabTitle title={"Status"} onClick={() => {}} />
          <TabTitle title={"Size"} onClick={() => {}} />
          <TabTitle title={"Time"} onClick={() => {}} />
        </div>
        <div className="mt-2 flex w-full items-center justify-between border-b">
          <TabTitle title={"Response"} onClick={() => {}} />
          <TabTitle title={"Headers"} onClick={() => {}} />
          <TabTitle title={"Cookies"} onClick={() => {}} />
          <TabTitle title={"Result"} onClick={() => {}} />
          <TabTitle title={"Docs"} onClick={() => {}} />
        </div>
      </div>
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
