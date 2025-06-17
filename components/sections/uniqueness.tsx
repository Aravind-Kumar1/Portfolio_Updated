"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Code, Users, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Service {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const services: Service[] = [
    {
        number: "01",
        title: "Tailored Solutions",
        description: "Building apps that align with your business and meet user needs.",
        icon: Target,
    },
    {
        number: "02",
        title: "Cross-Platform Expertise",
        description: "Delivering scalable solutions across web and mobile.",
        icon: Code,
    },
    {
        number: "03",
        title: "Collaborative Development",
        description: "Bringing your vision to life through teamwork and technical expertise.",
        icon: Users,
    },
    {
        number: "04",
        title: "Innovative Tech",
        description: "Utilizing cutting-edge tools for future-ready, reliable applications.",
        icon: Rocket,
    },
];

export default function Uniqueness() {
    return (
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-black font-poppins">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 md:mb-4">
                    <span
                        className="text-white text-xs sm:text-sm font-medium"
                        style={{fontFamily: "'Poppins', 'Inter', 'SF Pro Display', sans-serif"}}
                    >
                        uniqueness
                    </span>
                </div>

                <h2
                    className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight sm:leading-normal lg:whitespace-pre-line"
                    style={{fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2}}
                >
                    <span className="block sm:hidden leading-tight">
                        Discover the unique blend of<br/>creativity and expertise
                    </span>
                    <span className="hidden sm:block lg:hidden">
                        Discover the unique blend of<br/>creativity and expertise
                    </span>
                    <span className="hidden lg:block">
                        Discover the unique blend of<br/>creativity and expertise
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-gray-900/80 border-white/20 transition-all duration-500 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl group hover:bg-gray-800/80"
                            >
                                <CardContent className="p-4 sm:p-6 lg:p-8">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 border-2 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg
                      bg-blue-600 border-blue-600
                      lg:bg-black lg:border-white/20
                      lg:group-hover:bg-blue-600 lg:group-hover:border-blue-600
                    ">
                                            <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-white transition-all duration-500
                        group-hover:scale-110"/>
                                        </div>
                                        <div
                                            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-400 opacity-80">
                                            {service.number}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}