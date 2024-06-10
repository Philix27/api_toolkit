"use client"

import React from "react"
import { AppStore } from "@/lib"

import { TabTitle } from "../page"
import { TopSearch } from "./address"
import { RequestTabs } from "./tabs"

export default function RequestSection() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"w-1/2 flex-grow h-[calc(100vh-152px)]  overflow-y-hidden"}>
      <TopSearch />
      <div className="flex w-full items-center justify-around mt-2 border-b">
        <div className={"w-[80%] flex items-center justify-center"}>
          <TabTitle
            title={"Query"}
            onClick={() => store.update({ activeReqTab: "QUERY" })}
            isActive={store.activeReqTab === "QUERY"}
          />
          <TabTitle
            title={"Header"}
            onClick={() => store.update({ activeReqTab: "HEADER" })}
            isActive={store.activeReqTab === "HEADER"}
          />
          <TabTitle
            title={"Body"}
            onClick={() => store.update({ activeReqTab: "BODY" })}
            isActive={store.activeReqTab === "BODY"}
          />
          <TabTitle
            title={"Auth"}
            onClick={() => store.update({ activeReqTab: "AUTH" })}
            isActive={store.activeReqTab === "AUTH"}
          />
        </div>
      </div>
      <div className={"h-full overflow-y-hidden"}>
        {RequestTabs[store.activeReqTab]}
      </div>
    </div>
  )
}
