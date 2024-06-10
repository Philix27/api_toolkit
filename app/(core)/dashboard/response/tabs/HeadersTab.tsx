import React from "react"
import { TextB, TextH } from "@/comps"
import { AppStore } from "@/lib"

export function HeadersTab() {
  const store = AppStore.useApiClientStore()

  const data: { key: string; value?: string }[] = [
    {
      key: "Cache control:",
      value: store.responseHeaders["cache-control"]?.toString(),
    },
    {
      key: "Cache Length:",
      value: store.responseHeaders["content-length"]?.toString(),
    },
    {
      key: "Cache Type:",
      value: store.responseHeaders["content-type"]?.toString(),
    },
    {
      key: "Encoding:",
      value: store.responseHeaders["content-encoding"]?.toString(),
    },
    {
      key: "Server:",
      value: store.responseHeaders["server"]?.toString(),
    },
    {
      key: "Date:",
      value: store.responseHeaders["date"]?.toString(),
    },
    // {
    //   key: "General:",
    //   value: store.responseHeaders?.toString(),
    // },
  ]
  return (
    <div className="w-full overflow-y-scroll h-fit">
      {data.map((val, i) => (
        <div
          className="bg-card my-2 mx-4 p-3 flex items-center justify-between "
          key={i}
        >
          <TextB className={"tracking-wider"}>{val.key}</TextB>
          <TextB>{val.value}</TextB>
        </div>
      ))}
    </div>
  )
}
