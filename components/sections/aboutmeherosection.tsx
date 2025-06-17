"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutMeHeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width,
                    y: (e.clientY - rect.top) / rect.height,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white min-h-fit sm:min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                        transition: 'transform 0.3s ease-out',
                        animationDelay: '1s'
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-6 md:py-8 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Side - Image and Badge */}
                    <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-4 md:space-y-6 order-1 lg:order-1 sm:-mt-4 md:-mt-8 lg:-mt-20">
                        {/* Animated Badge */}
                        <div
                            className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm transform transition-all duration-1000 ease-out ${
                                isVisible
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : '-translate-y-8 opacity-0 scale-95'
                            }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <span className="text-white text-xs sm:text-sm md:text-base font-semibold font-['Poppins'] tracking-wide text-center">
                                The Face Behind the Code
                            </span>
                        </div>

                        {/* Enhanced Image with Multiple Animations */}
                        <div
                            ref={imageRef}
                            className={`group cursor-pointer transform transition-all duration-1200 ease-out ${
                                isVisible
                                    ? 'translate-y-0 opacity-100 scale-100 rotate-0'
                                    : 'translate-y-16 opacity-0 scale-90 rotate-3'
                            }`}
                            style={{
                                transitionDelay: '0.4s',
                                transform: `${isVisible ? 'translateY(0)' : 'translateY(64px)'} scale(${isVisible ? 1 : 0.9}) rotateZ(${isVisible ? 0 : 3}deg) perspective(1000px) rotateX(${mousePosition.y * 5 - 2.5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`
                            }}
                        >
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-[1.05] group-hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] group-hover:rotate-1">
                                {/* Animated Border Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm animate-pulse" />

                                {/* Floating Particles Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                                            style={{
                                                left: `${20 + (i * 10)}%`,
                                                top: `${15 + (i * 8)}%`,
                                                animationDelay: `${i * 0.2}s`,
                                                animationDuration: '2s'
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                <Image
                                    src="/hero.png"
                                    alt="Aravind Chamaakuri"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out transform rotate-12" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content with Staggered Animations */}
                    <div className="flex flex-col justify-center space-y-2 sm:space-y-4 md:space-y-6 order-2 lg:order-2 text-center lg:text-left">
                        <div className="space-y-1 sm:space-y-3 md:space-y-4">
                            {/* Greeting with Wave Animation */}
                            <p
                                className={`text-base sm:text-lg md:text-xl lg:text-2xl font-['Poppins'] text-white leading-relaxed px-4 sm:px-0 transform transition-all duration-1000 ease-out ${
                                    isVisible
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-8 opacity-0'
                                }`}
                                style={{ transitionDelay: '0.6s' }}
                            >
                                Hey there! <span className="inline-block animate-bounce">👋</span>
                            </p>

                            {/* Main Description */}
                            <p
                                className={`text-sm sm:text-base md:text-lg font-['Poppins'] text-gray-300 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 transform transition-all duration-1000 ease-out ${
                                    isVisible
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-8 opacity-0'
                                }`}
                                style={{ transitionDelay: '0.8s' }}
                            >
                                CS Engineering student passionate about building scalable web applications. I've shipped 4 production-grade apps and won hackathons, specializing in React, TypeScript, and modern frontend technologies.
                            </p>

                            {/* Secondary Description */}
                            <p
                                className={`hidden sm:block text-xs sm:text-sm md:text-base font-['Poppins'] text-gray-400 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 transform transition-all duration-1000 ease-out ${
                                    isVisible
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-8 opacity-0'
                                }`}
                                style={{ transitionDelay: '1s' }}
                            >
                                When I'm not coding, you'll find me solving problems, exploring new tech, or thinking about the next big idea. I believe great software comes from understanding people, not just technology.
                            </p>
                        </div>

                        {/* Animated Skills Tags */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0">
                            {[
                                { text: "React & TypeScript", delay: "1.2s" },
                                { text: "Hackathon Winner", delay: "1.4s" },
                                { text: "Frontend", delay: "1.6s" }
                            ].map((skill, index) => (
                                <div
                                    key={skill.text}
                                    className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg border border-white/10 flex-shrink-0 transform transition-all duration-1000 ease-out hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                                        isVisible
                                            ? 'translate-y-0 opacity-100 scale-100'
                                            : 'translate-y-8 opacity-0 scale-95'
                                    }`}
                                    style={{ transitionDelay: skill.delay }}
                                >
                                    <span className="text-xs sm:text-sm font-medium text-gray-300 font-['Poppins'] transition-colors duration-300 hover:text-white">
                                        {skill.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1.8s' }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" style={{ animationDelay: '2s' }} />
                </div>
            </div>
        </section>
    );
};

export default AboutMeHeroSection;