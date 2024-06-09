"use client"

import React from "react"
import { AppStore } from "@/lib"

import { TopSearch } from "./address"
import { TabTitle } from "../page"
import { RequestTabs } from "../tabs"

export default function RequestSection() {
  const store = AppStore.useApiClientStore()
  return (
    <div className={"w-1/2 flex-grow h-[calc(100vh-152px)]"}>
      <TopSearch />
      <div className="flex w-full items-center justify-between mt-2 border-b">
        <TabTitle
          title={"Query"}
          onClick={() => store.update({ activeTab: "QUERY" })}
        />
        <TabTitle
          title={"Header"}
          onClick={() => store.update({ activeTab: "HEADER" })}
        />
        <TabTitle
          title={"Body"}
          onClick={() => store.update({ activeTab: "BODY" })}
        />
        <TabTitle
          title={"Auth"}
          onClick={() => store.update({ activeTab: "AUTH" })}
        />
        <TabTitle
          title={"Test"}
          onClick={() => store.update({ activeTab: "TEST" })}
        />
      </div>
      <div className={"h-full overflow-y-hidden"}>
        {RequestTabs[store.activeTab]}
      </div>
    </div>
  )
}
