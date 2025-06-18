"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Define the props interface
interface CTASectionProps {
    labelText?: string;
    heroText?: string;
}

export default function CTASection({ labelText, heroText }: CTASectionProps) {
    // Default values for props
    const defaultLabelText = "Digital Innovation Made Simple";
    const defaultHeroText = "I create responsive websites and designs that drive growth, with expertise in mobile apps for seamless experiences";
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-900/30" style={{ fontFamily: "Poppins, sans-serif" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="w-full">
                    <Card
                        className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-blue-500/20 shadow-2xl rounded-2xl sm:rounded-3xl">
                        <CardContent
                            className="p-6 sm:p-10 md:p-16 text-left min-h-[320px] sm:min-h-[400px] md:min-h-[630px] flex flex-col justify-center font-light">
                            {/* Label */}
                            <div className="inline-block mb-4 sm:mb-6">
                                <span
                                    className="bg-blue-100/10 text-blue-100 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-light tracking-wide uppercase backdrop-blur-sm border border-blue-400/20">
                                    {labelText || defaultLabelText}
                                </span>
                            </div>

                            {/* Hero Text */}
                            <h2
                                className="font-light text-white mt-4 mb-3 sm:mb-8 md:mb-10 lg:mb-2
             text-[1.35rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[5rem] xl:text-[3.5rem]
             leading-[1.6] sm:leading-[1.8] md:leading-[2.25] lg:leading-[2.2] xl:leading-[1.3]">
                                {heroText || defaultHeroText}
                            </h2>

                            <div
                                className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-start mt-4 sm:mt-6 md:mt-8 w-full">
                                {/* Start Your Project Button */}
                                <Link href="/contact" className="flex-1 min-w-[120px] max-w-[150px] sm:max-w-[180px] md:max-w-[220px]">
                                    <button
                                        className="group w-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-white text-blue-600 font-semibold text-xs sm:text-sm md:text-base tracking-wide rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-2xl"
                                        onMouseEnter={() => setHoveredButton('primary')}
                                        onMouseLeave={() => setHoveredButton(null)}
                                    >
                                        <span className="flex items-center">
                                            Start Project
                                            <ArrowRight className="ml-1.5 w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </Link>

                                {/* See My Work Button */}
                                <Link href="/projects" className="flex-1 min-w-[120px] max-w-[150px] sm:max-w-[180px] md:max-w-[220px]">
                                    <button
                                        className="group w-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-transparent border-2 border-blue-600 text-blue-100 font-semibold text-xs sm:text-sm md:text-base tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600"
                                        onMouseEnter={() => setHoveredButton('secondary')}
                                        onMouseLeave={() => setHoveredButton(null)}
                                    >
                                        <span className="flex items-center">
                                            See My Work
                                            <ArrowRight
                                                className="ml-1.5 w-4 h-4 sm:w-5 sm:h-5 text-blue-100 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 lg:hidden"
                                            />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}