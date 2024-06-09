import React from "react"
import { TextB, TextH } from "@/comps"

import { TopSearch } from "./address"

export default function Page() {
  return (
    <div className={"flex min-h-full w-full"}>
      <div className={"w-1/2"}>
        <TopSearch />
        <div className="flex w-full items-center justify-between mt-2 border-b">
          <TabTitle title={"Query"} />
          <TabTitle title={"Header"} />
          <TabTitle title={"Body"} />
          <TabTitle title={"Auth"} />
          <TabTitle title={"Test"} />
        </div>
      </div>

      <div className={"w-1/2 bg-teal-400"}>
        response header cookies result docs
      </div>
    </div>
  )
}

function TabTitle(params: { title: string }) {
  return (
    <div className="px-6 py-2 hover:bg-primary">
      <TextB>{params.title}</TextB>
    </div>
  )
}
