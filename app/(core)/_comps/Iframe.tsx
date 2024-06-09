"use client"

import React from "react"

import { StylesUtils } from "@/app/lib"

export function AppIFrame(props: { url: string }) {
  return (
    <div
      className={`w-full`}
      style={{ height: `calc(100vh - ${StylesUtils.navbarHeight})` }}
    >
      <iframe className="h-full w-full" src={props.url} />
    </div>
  )
}
