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
    <div className="flex flex-col min-h-screen">
      <div className="flex h-full">
        {openNav && <SidebarMobile />}
        {isSidebarOpen && <Sidebar />}
        {children}
      </div>
    </div>
  )
}
