"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
]

export default function PremiumNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            <nav
                className="fixed left-1/2 z-50 transition-all duration-400 ease-out"
                style={{
                    fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
                    transform: 'translate(-50%, 0)',
                    willChange: 'transform',
                    top: scrolled ? '12px' : 'clamp(12px, 3vw, 20px)',
                    width: scrolled ? 'auto' : 'clamp(85%, 90vw, 91.666667%)',
                    minWidth: scrolled ? 'clamp(300px, 80vw, 420px)' : 'auto',
                    maxWidth: scrolled ? 'none' : '72rem'
                }}
            >
                <div
                    className="relative bg-black/98 backdrop-blur-xl border border-gray-700/50 rounded-full shadow-2xl shadow-black/40"
                    style={{
                        transform: scrolled ? 'scale(0.95)' : 'scale(1)',
                        padding: scrolled ? 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 24px)' : 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 40px)',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        willChange: 'transform, padding'
                    }}
                >
                    <div className="relative flex items-center justify-between">
                        <Link href="/" className="cursor-pointer group flex-shrink-0" onClick={handleLinkClick}>
                            <h1
                                className="font-regular tracking-tight text-white transition-all duration-300 group-hover:scale-105 whitespace-nowrap"
                                style={{
                                    fontSize: scrolled ? 'clamp(1rem, 4vw, 1.375rem)' : 'clamp(1.125rem, 5vw, 1.75rem)',
                                    transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    willChange: 'font-size, transform'
                                }}
                            >
                                <span className="font-normal">Aravind</span>
                                <span className="font-bold ml-2">Chamaakuri</span>
                            </h1>
                        </Link>

                        <div className={`hidden lg:flex items-center ${scrolled ? 'ml-12 mr-12' : 'justify-center flex-1 max-w-md mx-8'}`}>
                            <div className="flex items-center space-x-10">
                                {scrolled ? (
                                    <Link
                                        href="/projects"
                                        onClick={handleLinkClick}
                                        className={`transition-all duration-300 whitespace-nowrap font-medium ${pathname === "/projects" ? "text-white" : "text-gray-300 hover:text-white"}`}
                                        style={{
                                            fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            letterSpacing: '0.025em'
                                        }}
                                    >
                                        Projects
                                    </Link>
                                ) : (
                                    navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={handleLinkClick}
                                            className={`transition-all duration-300 whitespace-nowrap font-medium ${pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"}`}
                                            style={{
                                                fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                letterSpacing: '0.025em'
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="flex items-center flex-shrink-0" style={{ marginLeft: scrolled ? '16px' : '16px' }}>
                            {/* ✅ Desktop Get In Touch as Link */}
                            <Link
                                href="/contact"
                                onClick={handleLinkClick}
                                className="hidden md:flex items-center space-x-2 bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 group whitespace-nowrap"
                                style={{
                                    borderRadius: 'clamp(8px, 2vw, 12px)',
                                    padding: scrolled ? 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)' : 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 24px)',
                                    fontSize: scrolled ? '0.875rem' : '0.9375rem',
                                    fontWeight: '500',
                                    marginRight: 'clamp(8px, 2vw, 12px)'
                                }}
                            >
                                <span className="font-medium">Get In Touch</span>
                                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="lg:hidden text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 flex-shrink-0"
                                onClick={() => setIsOpen(!isOpen)}
                                style={{ padding: scrolled ? 'clamp(6px, 1.5vw, 8px)' : 'clamp(8px, 2vw, 10px)' }}
                            >
                                <div className="relative w-5 h-5">
                                    <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                                    <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                <div className={`lg:hidden mt-4 transition-all duration-500 ease-out ${isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'} overflow-hidden`}>
                    <div className="bg-black/98 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/40">
                        <div className="p-6 space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className={`block w-full text-left px-5 py-3.5 font-medium transition-all duration-300 rounded-xl ${pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white'} hover:bg-white/5`}
                                    style={{
                                        fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
                                        fontSize: '1.0625rem',
                                        fontWeight: '500',
                                        letterSpacing: '0.025em'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* ✅ Mobile Get In Touch as Link */}
                            <div className="pt-5 border-t border-gray-700/50 mt-5 space-y-3">
                                <Link
                                    href="/contact"
                                    onClick={handleLinkClick}
                                    className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] group"
                                    style={{
                                        borderRadius: '12px',
                                        fontSize: '0.9375rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    <span className="font-medium">Get In Touch</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-all duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
