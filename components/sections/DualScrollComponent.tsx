"use client";

import React from 'react';

// Define the shape of an item
interface Item {
    id: number;
    image: string;
}

// Define props for ScrollRow component
interface ScrollRowProps {
    items: Item[];
    direction: 'left' | 'right';
    speed?: number; // Animation speed in seconds
}

const DualScrollComponent = () => {
    // Sample data - replace with your own images
    const topRowItems: Item[] = [
        { id: 1, image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop' },
        { id: 2, image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b07d?w=400&h=300&fit=crop' },
        { id: 3, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
        { id: 4, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
        { id: 5, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop' },
        { id: 6, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
        { id: 7, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
        { id: 8, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    ];

    const bottomRowItems: Item[] = [
        { id: 9, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop' },
        { id: 10, image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=300&fit=crop' },
        { id: 11, image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop' },
        { id: 12, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop' },
        { id: 13, image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop' },
        { id: 14, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
        { id: 15, image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop' },
        { id: 16, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
    ];

    const ScrollRow: React.FC<ScrollRowProps> = ({ items, direction, speed = 30 }) => {
        // Duplicate items for seamless infinite scroll
        const duplicatedItems = [...items, ...items];

        return (
            <div className="relative overflow-hidden">
                {/* Left fade overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10 pointer-events-none" />

                {/* Right fade overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-gray-900 via-gray-900/70 to-transparent z-10 pointer-events-none" />

                {/* Scrolling container */}
                <div
                    className={`flex flex-nowrap gap-2 sm:gap-3 lg:gap-4 min-w-[200%] scroll-container ${
                        direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
                    }`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {duplicatedItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex-shrink-0 w-48 sm:w-60 lg:w-72 h-28 sm:h-36 lg:h-44 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={`Image ${item.id}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {/* Top Row - Scrolls Right */}
                    <ScrollRow items={topRowItems} direction="right" speed={25} />

                    {/* Bottom Row - Scrolls Left */}
                    <ScrollRow items={bottomRowItems} direction="left" speed={25} />
                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll-right {
                    animation: scroll-right linear infinite;
                    animation-duration: inherit;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform: translateZ(0);
                }

                .animate-scroll-left {
                    animation: scroll-left linear infinite;
                    animation-duration: inherit;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform: translateZ(0);
                }

                .scroll-container:hover .animate-scroll-right,
                .scroll-container:hover .animate-scroll-left {
                    animation-play-state: paused;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll-right,
                    .animate-scroll-left {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default DualScrollComponent;