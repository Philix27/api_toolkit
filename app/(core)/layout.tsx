"use client"

import { useState } from "react"

import { AppStores } from "@/app/lib"

import { Sidebar } from "./_comps"
import { SidebarMobile } from "./_comps/SidebarMobile"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  const [openNav, setOpenNav] = useState(false)
  const isSidebarOpen = AppStores.useSettingsStore(
    (state) => state.isSidebarOpen
  )

  return (
    <div className="flex flex-col flex-grow h-[calc(100vh-70px)]">
      {openNav && <SidebarMobile />}
      {isSidebarOpen && <Sidebar />}
      <div className={"flex-1"} style={{ height: "100%" }}>
        {children}
      </div>
    </div>
  )
}
