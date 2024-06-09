"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { CiBrightnessUp } from "react-icons/ci"
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
      {theme === "light" ? (
        <IoMoonOutline size={20} className="h-[1.5rem] w-[1.3rem" />
      ) : (
        <CiBrightnessUp size={20} className="h-[1.5rem] w-[1.3rem" />
      )}
    </Button>
  )
}
