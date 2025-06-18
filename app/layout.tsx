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
    title: "Aravind Chamaakuri - Frontend Developer",
    description: "A world-class portfolio showcasing cutting-edge web development expertise, specializing in front-end design, React.js, TypeScript, UI/UX design, and modern web applications. Explore innovative, responsive, and user-centered digital solutions crafted to elevate your online presence and drive user engagement. This version includes essential keywords like \"web development,\" \"front-end design,\" \"React.js,\" \"TypeScript,\" \"UI/UX design,\" \"responsive,\" and \"user-centered digital solutions,\" which will improve visibility and ranking for related search queries.",
    icons: [
        {
            url: "/hero-cir.png",  // This is the correct field for the image URL
            rel: "icon",
            sizes: "452x45",  // Specify size for the favicon
        },
        {
            url: "/hero-cir.png",  // This is the correct field for the image URL
            rel: "icon",
            sizes: "64x64",
        },
        {
            url: "/hero-cir.png",  // This is the correct field for the image URL
            rel: "icon",
            sizes: "128x128",
        },
    ],
};


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