"use client"

import { SidebarClose, SidebarOpen } from "lucide-react"

import { ThemeToggle } from "@/app/comps"
import { AppStores, StylesUtils } from "@/app/lib"

import { MainNav } from "./main-nav"
import { siteConfig } from "./site"

export function SiteHeader() {
  const state = AppStores.useSettingsStore((state) => state)

  return (
    <header className="bg-secondary sticky top-0 z-40 w-full border-b">
      <div
        className={`
        container flex h-[${StylesUtils.navbarHeight}] 
        items-center space-x-4 sm:justify-between sm:space-x-0
      `}
      >
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {state.isSidebarOpen ? (
            <SidebarOpen
              onClick={() => {
                state.setIsSidebarOpen(!state.isSidebarOpen)
              }}
            />
          ) : (
            <SidebarClose
              onClick={() => {
                state.setIsSidebarOpen(!state.isSidebarOpen)
              }}
            />
          )}
          <nav className="items-center space-x-1 md:flex">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
