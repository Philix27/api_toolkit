"use client"

import { ReactNode } from "react"
import { IApiRequestTab } from "@/lib"

import { BodyTab } from "./BodyTab"
import { HeadersTab } from "./HeadersTab"
import { QueryTab } from "./QueryTab"

export * from "./BodyTab"
export * from "./HeadersTab"
export * from "./QueryTab"

export const RequestTabs: Record<IApiRequestTab, ReactNode> = {
  QUERY: <QueryTab />,
  HEADER: <HeadersTab />,
  BODY: <BodyTab />,
  AUTH: <BodyTab />,
}
