"use client"

import React from "react"
import { TextH } from "@/comps"
import { AppStore } from "@/lib"

import { TabTitle } from "../page"
import { ResponseTabs } from "./tabs"

export default function ResponseSection() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"h-full w-1/2 border-l overflow-y-hidden"}>
      <div className="mb-4 flex h-[50px] items-center">
        <TextH v="h5" className={"font-extrabold tracking-wide mx-4"}>
          Status: {store.responseStatus}
        </TextH>
        <TextH v="h5" className={"font-extrabold tracking-wide mx-4"}>
          Size: {store.responseSize}
        </TextH>
        <TextH v="h5" className={"font-extrabold tracking-wide mx-4"}>
          Time: {store.responseTime}ms
        </TextH>
      </div>
      <div className="mt-2 flex w-full items-center justify-center border-b">
        <div className={"w-[80%] flex items-center justify-center"}>
          <TabTitle
            title={"Response"}
            onClick={() => store.update({ activeResTab: "RESPONSE" })}
            isActive={store.activeResTab === "RESPONSE"}
          />
          <TabTitle
            title={"Headers"}
            onClick={() => store.update({ activeResTab: "HEADER" })}
            isActive={store.activeResTab === "HEADER"}
          />
          <TabTitle
            title={"Cookies"}
            onClick={() => store.update({ activeResTab: "COOKIES" })}
            isActive={store.activeResTab === "COOKIES"}
          />
          <TabTitle
            title={"Session"}
            onClick={() => store.update({ activeResTab: "SESSION" })}
            isActive={store.activeResTab === "SESSION"}
          />
        </div>
      </div>
      <div className={"h-full max-h-full "}>
        {ResponseTabs[store.activeResTab]}
      </div>
    </div>
  )
}
