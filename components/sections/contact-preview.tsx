"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactPreview() {
    const [showLine, setShowLine] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLine(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden font-['Poppins',sans-serif]">
            {/* Background Blurs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Headline */}
                <div className="max-w-4xl">
                    <h2
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-10 tracking-[-0.02em]"
                        style={{ color: "#EBD6A4", lineHeight: "1.2" }}
                    >
                        Ready to Build<br />
                        Something<br />
                        <span>Unstoppaaaaable?</span>
                    </h2>

                    {/* CTA Button */}
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="inline-flex items-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium backdrop-blur-sm border rounded-full transition-all duration-300"
                            style={{
                                color: "#000000",
                                backgroundColor: "#EBD6A4",
                                borderColor: "#EBD6A4",
                                boxShadow: "0 4px 15px rgba(235, 214, 164, 0.3)",
                            }}
                            onMouseEnter={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = "#D4C291";
                                target.style.borderColor = "#D4C291";
                                target.style.transform = "translateY(-2px)";
                                target.style.boxShadow = "0 6px 20px rgba(235, 214, 164, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = "#EBD6A4";
                                target.style.borderColor = "#EBD6A4";
                                target.style.transform = "translateY(0px)";
                                target.style.boxShadow = "0 4px 15px rgba(235, 214, 164, 0.3)";
                            }}
                        >
                            <Mail className="mr-3 h-5 w-5" />
                            Start Now
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </Link>
                </div>

                {/* Transition Line */}
                <div className="mt-12 sm:mt-16 md:mt-20 mb-8">
                    <div
                        className={`transition-all duration-1000 ease-out ${
                            showLine ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                        style={{
                            height: "1px",
                            background:
                                "linear-gradient(to right, transparent, #A7A7A7, #666666, #FFFFFF)",
                            width: "100%",
                            transformOrigin: "left center",
                        }}
                    />
                </div>

                {/* Footer Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-20">
                    {/* LEFT SIDE — NAME */}
                    <div className="w-full lg:w-auto text-left">
                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#EBD6A4] leading-tight">
                            <span className="block">ARAVIND</span>
                            <span className="block">KUMAR</span>
                        </h3>
                    </div>

                    {/* RIGHT SIDE — NAV + CONNECT */}
                    <div className="w-full flex flex-row-reverse justify-end gap-4 mr-2 sm:mr-10 lg:flex-row lg:mr-48 lg:gap-16">
                        {/* NAVIGATION LINKS */}
                        <div className="flex flex-row justify-between gap-6 flex-wrap sm:flex-nowrap">
                            <div className="flex flex-col gap-1.5 min-w-[140px]">
                                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-1">
                                    Navigation
                                </h4>
                                <Link
                                    href="/"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    Contact
                                </Link>
                            </div>

                            {/* CONNECT LINKS */}
                            <div className="flex flex-col gap-1.5 min-w-[140px]">
                                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-1">
                                    Connect
                                </h4>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    LinkedIn
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    Twitter
                                </Link>
                                <Link
                                    href="mailto:aravind@example.com"
                                    className="text-gray-400 hover:text-white text-sm transition"
                                >
                                    Email
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-12 sm:mt-16 lg:mt-20 mb-0">
                    <div className="w-full h-[0.5px] bg-neutral-800" />
                </div>

                {/* Copyright */}
                <div className="pt-4 pb-0">
                    <p className="text-center text-gray-500 text-xs sm:text-sm">
                        © {new Date().getFullYear()} Aravind Chamakuri. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
