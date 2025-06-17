"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone } from "lucide-react";

const services = [
    {
        title: "Web Design",
        icon: Palette,
        image: "/design.jpg",
        description: "Beautiful, user-centered designs that convert",
    },
    {
        title: "Web Development",
        icon: Code,
        image: "/dev.jpg",
        description: "Custom web applications built with modern technologies",
    },
    {
        title: "App Development",
        icon: Smartphone,
        image: "/app.jpeg",
        description: "Native and cross-platform mobile applications",
    },
];

export default function MyServices() {
    return (
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-900/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-6 sm:mb-6 md:mb-8 lg:mb-12">
                    <div
                        className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 md:mb-4">
                        <span
                            className="text-white text-xs sm:text-sm font-medium"
                            style={{fontFamily: "'Poppins', 'Inter', 'SF Pro Display', sans-serif"}}
                        >
                            My Services
                        </span>
                    </div>

                    <h2
                        className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight sm:leading-normal lg:whitespace-pre-line"
                        style={{fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2}}
                    >
            <span className="block sm:hidden leading-tight">
              Crafting Modern Digital<br/>Experiences with Design<br/>and Development
            </span>
                        <span className="hidden sm:block lg:hidden">
             Crafting Modern Digital Experiences<br/> with Design and Development
            </span>
                        <span className="hidden lg:block">
              Crafting Modern Digital Experiences<br/> with Design and Development
            </span>
                    </h2>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-black/40 border-white/10 hover:border-blue-400/30 transition-all duration-500 group overflow-hidden relative h-[260px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[12px] sm:rounded-[14px] w-full max-w-[350px] sm:max-w-none mx-auto"
                            >
                                <CardContent className="p-0 h-full relative">
                                    <div className="relative h-full overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 lg:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 sm:from-black/80 sm:via-black/20 sm:to-transparent" />

                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                                            <div className="bg-black/80 backdrop-blur-md px-4 py-2 sm:px-4 sm:py-3 rounded-full border border-white/30 shadow-2xl">
                                                <h3 className="text-base sm:text-base md:text-lg font-bold text-white whitespace-nowrap drop-shadow-lg">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                                            <div className="bg-black/95 backdrop-blur-md px-6 py-5 rounded-lg sm:rounded-xl border border-blue-400/40 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] text-center shadow-2xl">
                                                <IconComponent className="h-8 w-8 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-400 mx-auto mb-3 drop-shadow-lg" />
                                                <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 drop-shadow-lg">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-100 text-sm sm:text-sm md:text-base leading-relaxed drop-shadow-md font-medium">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
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