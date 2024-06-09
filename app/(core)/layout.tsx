"use client"

import { useState } from "react"

import { AppStore } from "@/app/lib"

import { Sidebar } from "./_comps"
import { SidebarMobile } from "./_comps/SidebarMobile"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  const [openNav, setOpenNav] = useState(false)
  const isSidebarOpen = AppStore.useSettingsStore(
    (state) => state.isSidebarOpen
  )

  return (
    <div className="flex flex-col flex-grow h-[calc(100vh-70px)]">
      {openNav && <SidebarMobile />}
      {isSidebarOpen && <Sidebar />}
      <div className={"flex-1 h-full"}>
        {children}
      </div>
    </div>
  )
}
