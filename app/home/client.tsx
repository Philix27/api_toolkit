"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/app/comps"
import { AppImg, AppPages, StylesUtils } from "@/app/lib"
import { TauriFn } from "@/app/lib/tauri/fn"

import { SiteHeader } from "./_comps"
import FooterSection from "./footer"
import HeroSection from "./hero"
import HeroCenter from "./heroC"
import JumbutronSection from "./jumbutron"

export default function HomeClient() {
  const router = useRouter()
  const fn = new TauriFn()
  return (
    <section
      className={`
        container flex flex-col items-center justify-between 
        pb-8 pt-6 w-full h-screen
      `}
      style={{ height: `calc(100vh - ${StylesUtils.navbarHeight})` }}
    >
      <HeroCenter
        title={"Resource manager"}
        subtitle={`
          Manage your Servers resources in one place`}
      />
      <Button
        onClick={() => router.push(AppPages.dashboard)}
        // onClick={() => {
        //   fn.greet({ name: "Philix" })
        // }}
      >
        Get started
      </Button>

      <FooterSection />
    </section>
  )
}
