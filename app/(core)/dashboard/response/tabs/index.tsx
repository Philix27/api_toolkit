"use client"

import { ReactNode } from "react"
import { IApiResponseTab } from "@/lib"

import { CookiesTab } from "./CookiesTab"
import { HeadersTab } from "./HeadersTab"
import { ResponseTab } from "./ResTab"
import { SessionsTab } from "./Session"

export * from "./ResTab"
export * from "./HeadersTab"
export * from "./CookiesTab"

export const ResponseTabs: Record<IApiResponseTab, ReactNode> = {
  RESPONSE: <ResponseTab />,
  HEADER: <HeadersTab />,
  COOKIES: <CookiesTab />,
  SESSION: <SessionsTab />,
}
