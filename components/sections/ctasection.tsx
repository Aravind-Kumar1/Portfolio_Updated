"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Sai Charan",
        role: "Designer",
        image: "/nadim.jpg",
        content: "Aravind’s designs are always on point. He has a great eye for detail and always delivers creative and user-friendly solutions.",
        rating: 5,
    },
    {
        name: "Bobburi Umesh",
        role: "SDE at Possible Works",
        image: "/umesh.jpg",
        content: "Aravind is a talented developer. His attention to detail and problem-solving skills made the project smooth and efficient.",
        rating: 5,
    },
    {
        name: "Dhruv Y.Y. Thacker",
        role: "Software Engineer at Pixelvide",
        image: "/dhruv.jpg",
        content: "Working with Aravind was great. He’s a skilled developer who ensures quality and delivers results on time.",
        rating: 5,
    },
    {
        name: "Achampeta Jayanth",
        role: "Software Developer at Bees",
        image: "/jay.jpg",
        content: "Aravind is efficient and professional. He quickly grasps challenges and consistently delivers high-quality solutions.",
        rating: 5,
    },
    {
        name: "Anas",
        role: "Fellow Developer in College",
        image: "/anas.jpg",
        content: "Aravind is a great collaborator. He’s always helpful and makes projects enjoyable to work on.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate total width for seamless looping
    const totalCards = testimonials.length;
    const cardWidth = isMobile ? 250 : 300; // Base card width in pixels
    const animationDistance = -(cardWidth * totalCards);

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:p-8 xl:py-12 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="inline-block px-3 py-1 sm:p-2 bg-white/10 rounded-full border border-white/20 mb-3 md:mb-4">
                    <span className="text-white text-xs sm:text-sm font-medium" style={{ fontFamily: "'Poppins', 'Inter', 'SF Pro Display', sans-serif" }}>
                        Testimonials
                    </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight sm:leading-normal" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2 }}>
                    <span className="block">Real Feedback from<br /> Transformative Collaborations</span>
                </h2>

                <motion.div
                    className="flex gap-4 sm:gap-6"
                    animate={{ x: [0, animationDistance] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: isMobile ? 18 : 35, // Slower animation for all screens
                            ease: "linear",
                        },
                    }}
                    style={{ display: "flex", flexWrap: "nowrap", width: `${cardWidth * totalCards * 2}px` }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <motion.div
                            key={`testimonial-${index}`}
                            className="min-w-[250px] sm:min-w-[300px] max-w-[300px] sm:max-w-[340px] flex-shrink-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                opacity: { duration: 0.5, delay: index * 0.1 },
                                y: { duration: 0.5, delay: index * 0.1 },
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                            }}
                            whileHover={{
                                scale: 1.03,
                                rotateY: 3,
                                zIndex: 10,
                                boxShadow: "0 12px 40px rgba(255, 255, 255, 0.2)",
                            }}
                        >
                            <Card className="bg-black/80 border-white/10 hover:border-white/30 transition-all duration-300 h-full overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                                    <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base flex-grow" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center mt-auto">
                                        <Image
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={60}
                                            height={60}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-white/20 flex-shrink-0"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-white font-semibold text-sm sm:text-base truncate" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-400 text-xs sm:text-sm leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}