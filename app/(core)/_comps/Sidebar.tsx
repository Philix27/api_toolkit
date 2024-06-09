"use client"

import { useState } from "react"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"

import { TextH } from "@/app/comps"
import { AppPages, AppStore, StylesUtils, cn } from "@/app/lib"

import { data } from "./SidebarData"
import { SidebarGroup } from "./SidebarGroup"

export function Sidebar(props: { className?: string }) {
  const state = AppStore.useSettingsStore((state) => state)
  return (
    <div className={`fixed w-full bg-slate-800/40 flex`}>
      <div
        className={cn(
          `w-[250px] border-l-[2px] bg-background pt-4 hidden md:block
        border-r-2 border-secondary mt-[${StylesUtils.navbarHeight}]`,
          props.className
        )}
        style={{ height: `calc(100vh - ${StylesUtils.navbarHeight})` }}
        onClick={(e) => {}}
      >
        <Link href={AppPages.dashboard}>
          <div
            className={`
            px-4 pb-2 flex items-center
            justify-between mb-2
            border-b-2 border-secondary 
          `}
          >
            <TextH className={"text-muted-foreground"} v="h5">
              Dashboard
            </TextH>
            <LayoutDashboard size={13.5} />
          </div>
        </Link>

        {data.map((item, i) => (
          <div key={i}>
            <SidebarGroup section={item} />
          </div>
        ))}
      </div>
      <div
        className="h-screen w-full"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          state.setIsSidebarOpen(false)
        }}
      ></div>
    </div>
  )
}
