import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import ContactPreview from "@/components/sections/contact-preview"
// import ScrollToTop from "@/components/layout/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio - Frontend Developer",
  description: "A world-class portfolio showcasing modern web development skills",
  generator: 'v0.dev'
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
      {/*<ScrollToTop />*/}
      <Navbar />
      {children}
      <ContactPreview />
      </body>
      </html>
  )
}