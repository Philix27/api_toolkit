"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/app/comps"
import { NavItem, cn } from "@/app/lib"

import { siteConfig } from "./site"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  // const { user, isLoggedIn, isLoading } = useUser()
  // const address = useAddress()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {/* <Link
              href={"/dashboard"}
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground"
              )}
            >
              Dashboard
            </Link> */}
        </nav>
      ) : null}
    </div>
  )
}
