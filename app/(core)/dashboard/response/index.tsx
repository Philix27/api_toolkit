"use client"

import React from "react"
import { AppStore } from "@/lib"

import { TabTitle } from "../page"

export default function ResponseSection() {
  const store = AppStore.useApiClientStore()
  return (
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
  )
}
