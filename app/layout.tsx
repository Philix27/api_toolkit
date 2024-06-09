"use client"

import "@/lib/styles/globals.css"
import { ThemeProvider } from "next-themes"

import { cn, fontSans } from "@/app/lib"

import { SiteHeader } from "./home/_comps"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="no-scrollbar overscroll-none"
    >
      <head />
      <body
        className={cn(
          "no-scrollbar min-h-screen overscroll-none bg-secondary font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex h-screen flex-col">
            <div className="h-full flex flex-col">
              <SiteHeader />
              {children}
            </div>
          </div>

          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
