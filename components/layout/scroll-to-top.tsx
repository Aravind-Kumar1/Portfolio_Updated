// "use client"
//
// import { useEffect } from "react"
// import { usePathname } from "next/navigation"
//
// export default function ScrollToTop() {
//   const pathname = usePathname()
//
//   useEffect(() => {
//     // Scroll to top immediately when route changes
//     window.scrollTo(0, 0)
//
//     // Also ensure it stays at top after a small delay
//     const timer = setTimeout(() => {
//       window.scrollTo(0, 0)
//     }, 50)
//
//     return () => clearTimeout(timer)
//   }, [pathname])
//
//   return null
// }
