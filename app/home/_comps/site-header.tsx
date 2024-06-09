"use client"

import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu"

import { ThemeToggle } from "@/app/comps"
import { AppStores, StylesUtils } from "@/app/lib"

import { MainNav } from "./main-nav"
import { siteConfig } from "./site"

export function SiteHeader() {
  const state = AppStores.useSettingsStore((state) => state)

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div
        className={`
        container flex h-[${StylesUtils.navbarHeight}] 
        items-center space-x-4 sm:justify-between sm:space-x-0
      `}
      >
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {state.isSidebarOpen ? (
            <LuPanelLeftClose
              size={20}
              onClick={() => {
                state.setIsSidebarOpen(!state.isSidebarOpen)
              }}
            />
          ) : (
            <LuPanelRightClose
              size={20}
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
