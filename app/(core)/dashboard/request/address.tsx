"use client"

import { useState } from "react"
import { AppStore, IApiMethods, runApi } from "@/lib"

export function TopSearch() {
  const store = AppStore.useApiClientStore()

  const onSend = async () => {
    let startTimestamp = Date.now()
    await runApi({
      url: store.requestBasePath,
      method: store.requestApiMethod,
      data: store.responseBody,
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
    let endTimestamp = Date.now()
    store.update({
      responseTime: endTimestamp - startTimestamp,
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
          <select
            className="bg-transparent pr-2 p-2 outline-none"
            value={store.requestApiMethod}
            onChange={(e) =>
              store.update({
                requestApiMethod: e.target.value as IApiMethods,
              })
            }
          >
            <option value={"GET"}>GET</option>
            <option value={"POST"}>POST</option>
            <option value={"DELETE"}>DELETE</option>
            <option value={"PUT"}>PUT</option>
            <option value={"PATCH"}>PATCH</option>
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
