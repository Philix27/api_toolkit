"use client"

import { useState } from "react"
import { AppStore, runApi } from "@/lib"

export function TopSearch() {
  const store = AppStore.useApiClientStore()

  const onSend = async () => {
    await runApi({
      url: store.requestBasePath,
      method: "GET",
    })
      .then((res) => {
        store.update({
          responseBody: res.data,
          responseHeaders: res.headers,
          responseStatus: res.status,
        })
      })
      .catch((err) => {
        store.update({
          responseBody: err.msg,
          responseStatus: err.code,
        })
      })
  }

  return (
    <div className="px-5">
      <div
        className={`
          border border-border flex items-center
          h-[50px] w-full items-center justify-center 
           outline-1 my-2
        `}
      >
        <div className="mr-2 p-2 outline-none border-r-[0.5px]">
          <select className="bg-transparent pr-2 p-2 outline-none">
            <option>GET</option>
            <option>POST</option>
            <option>DELETE</option>
            <option>PUT</option>
            <option>PATCH</option>
          </select>
        </div>
        <div className="flex w-full">
          <input
            onChange={(e) => {
              store.update({ requestBasePath: e.target.value })
            }}
            value={store.requestBasePath}
            type="text"
            placeholder="path"
            className={`
                w-full bg-transparent px-2 
                py-2 
                outline-none outline-1
              `}
          />
        </div>
        <div className="p-2">
          <button
            onClick={onSend}
            className={
              "bg-primary px-4 py-1 rounded-md font-bold text-sm cursor-pointer hover:opacity-85"
            }
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
