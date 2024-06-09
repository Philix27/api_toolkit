"use client"

import React from "react"

import { AppIFrame } from "@/app/(core)/_comps/Iframe"
import { StylesUtils } from "@/app/lib"

export default function StorybookPage() {
  return <AppIFrame url="http://localhost:5100/" />
}
