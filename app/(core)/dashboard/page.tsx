"use client"

import React from "react"
import { TextB, TextH } from "@/comps"
import { AppStore } from "@/lib"

import RequestSection from "./request"

export default function Page() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"flex size-full"}>
      <RequestSection />
      <div className={"w-1/2 border-l h-full"}>
        <div className="h-[50px] flex items-center mb-4">
          <TabTitle title={"Status"} onClick={() => {}} />
          <TabTitle title={"Size"} onClick={() => {}} />
          <TabTitle title={"Time"} onClick={() => {}} />
        </div>
        <div className="flex w-full items-center justify-between mt-2 border-b">
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

export function TabTitle(params: { title: string; onClick: VoidFunction }) {
  return (
    <div className="px-6 py-2 hover:bg-primary" onClick={params.onClick}>
      <TextB>{params.title}</TextB>
    </div>
  )
}
