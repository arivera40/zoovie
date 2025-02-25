import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import TheaterCurtain from "@/components/TheaterCurtain"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Zoovie App",
  description: "Your premium movie theater experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(montserrat.className, "bg-[#121212] text-[#e0e0e0] min-h-screen")}>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <Navigation />
          <div className="flex flex-col">
            <TheaterCurtain />
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 animate-fadeIn">{children}</main>
            <footer className="border-t border-[#333] p-4 text-center text-sm text-[#999]">
              <div className="film-strip h-2 mb-4"></div>
              <p>© {new Date().getFullYear()} Zoovie App. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'