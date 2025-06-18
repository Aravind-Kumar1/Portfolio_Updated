"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function HeroSection() {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Trigger animations on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    // Navigation functions
    const navigateToProjects = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/projects';
        }
    };

    const navigateToContact = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/contact';
        }
    };

    const handleEmailClick = () => {
        try {
            // Create mailto link with proper formatting
            const mailtoLink = `mailto:aravindchamaakuri@gmail.com?subject=Let's Connect&body=Hi Aravind,%0D%0A%0D%0AI'd like to discuss a potential collaboration.%0D%0A%0D%0ABest regards`;

            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = mailtoLink;
            link.style.display = 'none';

            // Add to DOM, click, then remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            // Fallback - direct window open
            const fallbackLink = `mailto:aravindchamaakuri@gmail.com?subject=Let's Connect`;
            window.open(fallbackLink);
        }
    };

    const handleDownloadCV = () => {
        // Convert Google Drive view link to direct download link
        const driveFileId = '17HFobAr_wy47zYo6mKdm61dGMFVsn3go';
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

        // Open in new tab for better user experience
        window.open(downloadUrl, '_blank');
    };

    return (
        <div
            className="mt-24 sm:mt-24 md:mt-16 bg-black text-white min-h-fit md:min-h-[100vh] relative overflow-hidden"
            style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}
        >
            {/* Hero Section */}
            <div className="min-h-fit md:min-h-[100vh] flex items-center justify-center relative z-10 py-8 sm:py-10 md:pt-10">
                <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
                    {/* Top Label */}
                    <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-4">
                        <div
                            className={`bg-black border-2 border-blue-500 px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-[15px] transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                                isLoaded
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-6 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.05s' }}
                        >
                            <span className="text-white text-xs sm:text-sm md:text-sm tracking-wider">
                                Craft, Code, Create
                            </span>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-12">
                        {/* Hero Text */}
                        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-6 md:mt-8">
                            <h1
                                className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white leading-tight mb-4 sm:mb-5 md:mb-7 transition-all duration-900 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                                    isLoaded
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: '0.15s' }}
                            >
                                <span className="block lg:block">Transforming Ideas into</span>
                                <span className="block text-white mt-0.5 sm:mt-1.5 md:mt-2">Digital Masterpieces</span>
                            </h1>
                            <p
                                className={`text-gray-300 lg:text-gray-300 leading-relaxed font-light max-w-[90%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4 md:px-0 text-base sm:text-lg md:text-lg lg:whitespace-normal transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                                    isLoaded
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-6 opacity-0'
                                }`}
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 1.395rem)',
                                    transitionDelay: '0.25s'
                                }}
                            >
                                {(() => {
                                    const isLgOrAbove = typeof window !== 'undefined' && window.innerWidth >= 1024;
                                    return isLgOrAbove ? (
                                        "Delivering modern, high-quality web solutions that drive user engagement."
                                    ) : (
                                        <>
                                            Delivering modern, high-quality{"\n"}
                                            web solutions that drive user engagement.
                                        </>
                                    );
                                })()}
                            </p>
                        </div>

                        {/* CTA Buttons - Side by Side for All Screens */}
                        <div
                            className={`flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center mt-6 sm:mt-8 md:mt-12 px-2 sm:px-0 transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                                isLoaded
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-6 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.35s' }}
                        >
                            <button
                                onClick={navigateToProjects}
                                className="group relative px-2 py-2.5 sm:px-4 sm:py-2.5 md:px-8 md:py-4 bg-blue-600 text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-2xl min-w-[145px] sm:min-w-[160px] md:min-w-[180px] transform hover:scale-105 cursor-pointer"
                                onMouseEnter={() => setHoveredButton('primary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                <span className="flex items-center">
                                    View My Work
                                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                            <button
                                onClick={navigateToContact}
                                className="px-2 py-2.5 sm:px-4 sm:py-2.5 md:px-8 md:py-4 border-2 border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center min-w-[145px] sm:min-w-[160px] md:min-w-[180px] transform hover:scale-105 cursor-pointer"
                                onMouseEnter={() => setHoveredButton('secondary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                Let's Collaborate
                            </button>
                        </div>

                        {/* Social Links - Better Mobile Spacing */}
                        <div
                            className={`flex justify-center items-center mt-8 sm:mt-10 md:mt-2 mb-6 sm:mb-8 md:mb-4 transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                                isLoaded
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-6 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.45s' }}
                        >
                            <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-2">
                                <div className="w-px h-4 sm:h-5 md:h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                                <p className="text-white/70 text-xs sm:text-xs md:text-sm font-medium tracking-wider uppercase">
                                    Connect
                                </p>
                                <div className="flex gap-3 sm:gap-3.5 md:gap-3">
                                    <a
                                        href="https://github.com/Aravind-Kumar1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-white/20 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group transform hover:scale-110"
                                        title="GitHub"
                                    >
                                        <Github
                                            size={16}
                                            className="sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80 group-hover:text-white transition-all duration-300"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/aravind-chamaakuri/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-white/20 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group transform hover:scale-110"
                                        title="LinkedIn"
                                    >
                                        <Linkedin
                                            size={16}
                                            className="sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80 group-hover:text-white transition-all duration-300"
                                        />
                                    </a>
                                    <button
                                        onClick={handleEmailClick}
                                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-white/20 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group transform hover:scale-110 cursor-pointer"
                                        title="Email"
                                    >
                                        <Mail
                                            size={16}
                                            className="sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80 group-hover:text-white transition-all duration-300"
                                        />
                                    </button>
                                    <button
                                        onClick={handleDownloadCV}
                                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-white/20 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group transform hover:scale-110 cursor-pointer"
                                        title="Download CV"
                                    >
                                        <Download
                                            size={16}
                                            className="sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80 group-hover:text-white transition-all duration-300"
                                        />
                                    </button>
                                </div>
                                <div className="w-px h-3 sm:h-3 md:h-3 bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}