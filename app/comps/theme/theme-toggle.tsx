"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { CiSun } from "react-icons/ci"
import { FaTwitter } from "react-icons/fa"
import { IoMoonOutline } from "react-icons/io5"

import { Button } from "@/app/comps"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* <Moon className="hidden h-5 w-5 dark:block" />
      <Sun className="h-[1.5rem] w-[1.3rem] block dark:hidden" /> */}
      {theme === "light" ? (
        <IoMoonOutline className="h-[1.5rem] w-[1.3rem" />
      ) : (
        <CiSun className="h-[1.5rem] w-[1.3rem" />
      )}
    </Button>
  )
}
