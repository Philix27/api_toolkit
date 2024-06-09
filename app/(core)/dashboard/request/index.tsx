"use client"

import React from "react"
import { AppStore } from "@/lib"

import { TabTitle } from "../page"
import { RequestTabs } from "../tabs"
import { TopSearch } from "./address"

export default function RequestSection() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"w-1/2 flex-grow h-[calc(100vh-152px)]"}>
      <TopSearch />
      <div className="flex w-full items-center justify-around mt-2 border-b">
        <TabTitle
          title={"Query"}
          onClick={() => store.update({ activeTab: "QUERY" })}
          isActive={store.activeTab === "QUERY"}
        />
        <TabTitle
          title={"Header"}
          onClick={() => store.update({ activeTab: "HEADER" })}
          isActive={store.activeTab === "HEADER"}
        />
        <TabTitle
          title={"Body"}
          onClick={() => store.update({ activeTab: "BODY" })}
          isActive={store.activeTab === "BODY"}
        />
        <TabTitle
          title={"Auth"}
          onClick={() => store.update({ activeTab: "AUTH" })}
          isActive={store.activeTab === "AUTH"}
        />
      </div>
      <div className={"h-full overflow-y-hidden"}>
        {RequestTabs[store.activeTab]}
      </div>
    </div>
  )
}
