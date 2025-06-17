'use client';
import React, { useEffect, useRef, useState } from 'react';

const achievementData = [
    {
        number: '1',
        title: '1st Place in Project Expo',
        description: 'Won 1st Place in Project Expo at Avazya event, CMR College, Hyderabad. Showcased innovative technical solutions and demonstrated exceptional project development skills.',
        year: '2024',
        category: 'Technical Excellence',
        bgColor: '#FFE5B4', // Peach
        imagePath: '/pjt_expo.jpg', // Add your image path here
    },
    {
        number: '2',
        title: 'National Level Hackathon Winner',
        description: 'Ranked 1st out of 150 teams in National Level Hackathon (HACKTOPIA), GNIT College, Hyderabad. Demonstrated exceptional problem-solving and coding skills under pressure.',
        year: '2024',
        category: 'Competitive Programming',
        bgColor: '#E6E6FA', // Lavender
        imagePath: '/hacathon.jpg', // Add your image path here
    },
    {
        number: '3',
        title: 'National Sports Championship',
        description: 'Represented Telangana team at National Level Cesto Ball Championship, Hyderabad. Showcased athletic excellence and team leadership at the highest competitive level.',
        year: '2024',
        category: 'Sports Excellence',
        bgColor: '#98FB98', // Pale Green
        imagePath: '/nation.webp', // Add your image path here
    },
    {
        number: '4',
        title: 'Quiz Competition Winner',
        description: 'Won 2nd Prize in Quiz Competition, demonstrating exceptional knowledge and quick thinking abilities across diverse academic and general knowledge topics.',
        year: '2024',
        category: 'Academic Achievement',
        bgColor: '#87CEEB', // Sky Blue
        imagePath: '/a.jpg', // Add your image path here
    },
    {
        number: '5',
        title: 'Basketball Championship',
        description: 'Won 1st Prize in Basketball Competition, showcasing athletic prowess, team coordination, and strategic gameplay in a highly competitive sporting environment.',
        year: '2023',
        category: 'Sports Achievement',
        bgColor: '#F0E68C', // Khaki
        imagePath: '/basket.jpg', // Add your image path here
    },
];

const AchievementsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const sections = containerRef.current.querySelectorAll('.card-section') as NodeListOf<Element>;
            let current = 0;

            sections.forEach((section: Element, i: number) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    current = i;
                }
            });

            setActiveIndex(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full bg-black">
            {/* Sticky Heading Section */}
            <div className="sticky top-0 w-full px-4 md:px-20 pt-12 pb-8 bg-black z-50 shadow-md">
                <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide font-bold text-left font-['Poppins'] text-white">
                    Excellence in Every Endeavor
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left font-['Poppins'] text-gray-300 mt-4 max-w-3xl">
                    From technical innovation to competitive sports, each achievement represents dedication, skill, and the relentless pursuit of greatness.
                </p>
            </div>

            {/* Card Container */}
            <div ref={containerRef} className="w-full mt-12">
                {/* Cards Section */}
                {achievementData.map((achievement, index) => (
                    <div
                        key={index}
                        className="card-section h-screen w-full sticky top-32 flex items-center justify-center px-4 sm:px-6"
                        style={{
                            backgroundColor: achievement.bgColor,
                            zIndex: index,
                        }}
                    >
                        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7">
                            <div className="text-gray-900 w-full md:w-1/2 mt-16 md:mt-20 text-center md:text-left">
                                <span
                                    className="text-4xl md:text-6xl font-bold leading-none tracking-wide font-['Poppins'] block transition-all duration-500"
                                    style={{
                                        color: activeIndex === index ? '#000000' : 'transparent',
                                        WebkitTextStroke: activeIndex === index ? '0px #000000' : '1px #000000',
                                    }}
                                >
                                    {achievement.number}
                                </span>
                                <div className="flex items-center gap-2 mt-2 md:mt-4 justify-center md:justify-start">
                                    <span className="text-xs md:text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-['Poppins']">
                                        {achievement.year}
                                    </span>
                                    <span className="text-xs md:text-sm font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full font-['Poppins']">
                                        {achievement.category}
                                    </span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4 leading-tight tracking-wide font-['Poppins'] text-black">
                                    {achievement.title}
                                </h2>
                                <p className="text-xs md:text-sm font-medium leading-relaxed tracking-wide font-['Poppins'] text-gray-700 mt-2">
                                    {achievement.description}
                                </p>
                            </div>
                            <div className="w-60 h-60 md:w-96 md:h-72 flex items-center justify-center">
                                <img
                                    src={achievement.imagePath}
                                    alt={achievement.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;