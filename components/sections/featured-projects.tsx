"use client";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from 'react';

interface Achievement {
  year?: string;
  count?: string;
  title: string;
}

const achievements: Achievement[] = [
  {
    year: "2021",
    title: "Started Dev Journey"
  },
  {
    count: "6+",
    title: "Real-World Projects"
  },
  {
    count: "1",
    title: "Internship Completed"
  },
  {
    count: "3",
    title: "Hackathon Awards"
  }
];

export default function CreativeAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);
          }
        },
        {
          threshold: 0.15,
          rootMargin: '80px 0px -80px 0px'
        }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggered]);

  return (
      <section
          ref={sectionRef}
          className="min-h-[70vh] mt-4 bg-black py-6 sm:py-12 lg:py-16 relative overflow-hidden"
          style={{
            fontFamily: 'Poppins, sans-serif',
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
      >
        {/* Main section animation wrapper */}
        <div
            className="section-content"
            style={{
              transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(0, 80px, 0) scale3d(0.95, 0.95, 1)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform, opacity'
            }}
        >
          {/* Animated background elements with professional easing */}
          <div className="absolute inset-0 overflow-hidden">
            <div
                className="absolute top-1/4 left-1/4 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
                style={{
                  transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(-30px, 30px, 0) scale3d(0.8, 0.8, 1)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.4s cubic-bezier(0.19, 1, 0.22, 1) 0.1s',
                  willChange: 'transform, opacity'
                }}
            ></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"
                style={{
                  transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(30px, -30px, 0) scale3d(0.8, 0.8, 1)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.4s cubic-bezier(0.19, 1, 0.22, 1) 0.25s',
                  willChange: 'transform, opacity'
                }}
            ></div>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-[400px] lg:w-[600px] h-48 sm:h-[400px] lg:h-[600px] bg-gradient-to-r from-white/3 to-white/3 rounded-full blur-3xl"
                style={{
                  transform: `translate(-50%, -50%) ${isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(0, 20px, 0) scale3d(0.9, 0.9, 1)'}`,
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.05s',
                  willChange: 'transform, opacity'
                }}
            ></div>
          </div>

          <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-stretch">
              {/* Left Half - About Me Card with advanced animations */}
              <div
                  style={{
                    transform: isVisible ? 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)' : 'translate3d(-40px, 60px, -20px) rotateX(5deg) rotateY(-2deg)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity'
                  }}
              >
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl relative overflow-hidden rounded-2xl shadow-xl border-0 min-h-[320px] sm:min-h-[400px] lg:min-h-[450px] card-hover-effect">
                  {/* Floating sparkles with advanced animations */}
                  <div className="absolute inset-0 opacity-20">
                    <Sparkles
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 w-3 sm:w-4 h-3 sm:h-4 text-white animate-pulse"
                        style={{
                          transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(10px, -10px, 0) scale3d(0.5, 0.5, 1)',
                          opacity: isVisible ? 0.2 : 0,
                          transition: 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
                          willChange: 'transform, opacity'
                        }}
                    />
                    <Sparkles
                        className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 w-2 sm:w-3 h-2 sm:h-3 text-white animate-pulse delay-700"
                        style={{
                          transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(-10px, 10px, 0) scale3d(0.5, 0.5, 1)',
                          opacity: isVisible ? 0.2 : 0,
                          transition: 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s',
                          willChange: 'transform, opacity'
                        }}
                    />
                    <Sparkles
                        className="absolute top-1/3 left-1/4 w-2 sm:w-2 h-2 sm:h-2 text-white animate-pulse delay-1000"
                        style={{
                          transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(5px, -5px, 0) scale3d(0.3, 0.3, 1)',
                          opacity: isVisible ? 0.2 : 0,
                          transition: 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 1s',
                          willChange: 'transform, opacity'
                        }}
                    />
                  </div>

                  {/* 3D effect shadows */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/20 via-gray-500/10 to-gray-600/20 rounded-2xl blur-lg opacity-50"></div>

                  <CardContent className="p-4 sm:p-8 lg:p-12 relative z-10 h-full flex flex-col">
                    <div className="space-y-4 sm:space-y-6">
                      <div
                          className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-xl border border-white/30"
                          style={{
                            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 30px, 0)',
                            opacity: isVisible ? 1 : 0,
                            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                            willChange: 'transform, opacity'
                          }}
                      >
                        <span className="text-sm sm:text-base font-medium text-white">About Me</span>
                      </div>

                      <h2
                          className="text-lg sm:text-2xl lg:text-5xl font-semibold leading-tight text-gray-300 lg:text-left"
                          style={{
                            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                            opacity: isVisible ? 1 : 0,
                            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                            willChange: 'transform, opacity'
                          }}
                      >
                        Where Passion Meets
                        <br />
                        <span className="text-gray-300">Precision</span>
                      </h2>

                      <div
                          className="space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg lg:text-left"
                          style={{
                            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 35px, 0)',
                            opacity: isVisible ? 1 : 0,
                            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s',
                            willChange: 'transform, opacity'
                          }}
                      >
                        <p>
                          I'm <span className="font-semibold text-white">Aravind Chamaakuri</span>, a front-end developer who doesn't just build web apps — I craft engaging digital experiences. From elegant UI to scalable systems, I fuse creativity and code to deliver real-world solutions.
                        </p>
                      </div>
                    </div>

                    <div
                        className="mt-auto pt-4 sm:pt-6"
                        style={{
                          transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(0, 25px, 0) scale3d(0.95, 0.95, 1)',
                          opacity: isVisible ? 1 : 0,
                          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
                          willChange: 'transform, opacity'
                        }}
                    >
                      <Link href="/about">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 group w-full sm:w-auto button-hover-effect"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Half - Achievement Cards Grid with staggered professional animations */}
              <div
                  className="grid grid-cols-2 mt-[-5px] gap-2 sm:gap-4 lg:gap-6 h-full pt-4 sm:pt-6 lg:pt-8 px-2 sm:px-0"
                  style={{
                    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(40px, 60px, 0)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                    willChange: 'transform, opacity'
                  }}
              >
                {achievements.map((achievement, index) => (
                    <Card
                        key={index}
                        className="relative overflow-hidden flex items-center justify-center h-24 sm:h-36 lg:h-48 mobile-achievement-card achievement-card-hover"
                        style={{
                          background: 'linear-gradient(145deg, #1a73e8, #0d5db8)',
                          borderRadius: '12px',
                          boxShadow: `
                        10px 10px 20px rgba(0,0,0,0.3),
                        -4px -4px 10px rgba(255,255,255,0.05),
                        inset 2px 2px 4px rgba(255,255,255,0.1),
                        inset -2px -2px 4px rgba(0,0,0,0.2)
                      `,
                          perspective: '1000px',
                          transformStyle: 'preserve-3d',
                          transform: isVisible
                              ? 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                              : `translate3d(${20 + index * 5}px, ${40 + index * 10}px, ${-10 - index * 2}px) rotateX(${3 + index}deg) rotateY(${-2 + index}deg) scale3d(0.85, 0.85, 1)`,
                          opacity: isVisible ? 1 : 0,
                          transition: `all ${1.1 + index * 0.1}s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + index * 0.1}s`,
                          willChange: 'transform, opacity'
                        }}
                    >
                      {/* 3D Inner Card Effect */}
                      <div
                          className="absolute inset-1 rounded-lg opacity-60"
                          style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                            backdropFilter: 'blur(8px)'
                          }}
                      ></div>

                      <CardContent className="p-2 sm:p-4 text-center relative z-10 w-full h-full flex flex-col justify-center">
                        <div className="space-y-1 sm:space-y-2">
                          {/* Large Number with enhanced animation */}
                          <div
                              className="text-lg sm:text-3xl lg:text-5xl font-bold text-white achievement-number"
                              style={{
                                fontFamily: "'League Spartan', sans-serif",
                                textShadow: '1px 1px 4px rgba(0,0,0,0.4), 0 0 10px rgba(255,255,255,0.2)',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(0, 15px, 0) scale3d(0.8, 0.8, 1)',
                                opacity: isVisible ? 1 : 0,
                                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + index * 0.1}s`,
                                willChange: 'transform, opacity'
                              }}
                          >
                            {achievement.year || achievement.count}
                          </div>

                          {/* Title with enhanced typography */}
                          <h3
                              className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight achievement-title"
                              style={{
                                textShadow: '0.5px 0.5px 2px rgba(0,0,1,0.3)',
                                letterSpacing: '0.2px',
                                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 10px, 0)',
                                opacity: isVisible ? 1 : 0,
                                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + index * 0.1}s`,
                                willChange: 'transform, opacity'
                              }}
                          >
                            {achievement.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

          /* Professional hover effects with GPU acceleration */
          .card-hover-effect {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;
          }

          .card-hover-effect:hover {
            transform: translate3d(0, -8px, 0) scale3d(1.02, 1.02, 1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
          }

          .achievement-card-hover {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;
          }

          .achievement-card-hover:hover {
            transform: translate3d(0, -6px, 0) scale3d(1.05, 1.05, 1) !important;
            box-shadow: 
              15px 15px 30px rgba(0,0,0,0.4),
              -6px -6px 15px rgba(255,255,255,0.08),
              inset 3px 3px 6px rgba(255,255,255,0.15),
              inset -3px -3px 6px rgba(0,0,0,0.3) !important;
          }

          .achievement-card-hover:hover .achievement-number {
            transform: translate3d(0, -2px, 0) scale3d(1.1, 1.1, 1) !important;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.6), 0 0 15px rgba(255,255,255,0.3) !important;
          }

          .achievement-card-hover:hover .achievement-title {
            transform: translate3d(0, -1px, 0) !important;
          }

          .button-hover-effect {
            will-change: transform;
          }

          .button-hover-effect:hover {
            transform: translate3d(0, -2px, 0) scale3d(1.05, 1.05, 1) !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
          }

          /* Mobile-first responsive adjustments with GPU optimization */
          @media (max-width: 640px) {
            .container {
              padding-left: 12px !important;
              padding-right: 12px !important;
              max-width: 100% !important;
            }

            .lg\\:grid-cols-2 {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }

            .min-h-[320px] {
              min-height: 340px !important;
            }

            .mobile-achievement-card {
              min-height: 90px !important;
              max-width: none !important;
              margin: 0 !important;
            }

            .grid-cols-2 {
              gap: 8px !important;
              padding-left: 8px !important;
              padding-right: 8px !important;
            }

            .text-lg {
              font-size: 1.35rem !important;
              line-height: 1.3 !important;
            }

            .text-sm {
              font-size: 0.9rem !important;
              line-height: 1.4 !important;
            }

            .mobile-achievement-card .text-lg {
              font-size: 1.4rem !important;
            }

            .mobile-achievement-card .text-xs {
              font-size: 0.8rem !important;
              line-height: 1.2 !important;
            }

            .p-4 {
              padding: 16px !important;
            }

            .p-2 {
              padding: 8px !important;
            }

            .rounded-2xl {
              border-radius: 16px !important;
            }

            .rounded-xl {
              border-radius: 12px !important;
            }
          }

          /* Extra small mobile devices */
          @media (max-width: 380px) {
            .container {
              padding-left: 8px !important;
              padding-right: 8px !important;
            }

            .text-lg {
              font-size: 1.2rem !important;
            }

            .mobile-achievement-card {
              min-height: 80px !important;
            }

            .mobile-achievement-card .text-lg {
              font-size: 1.2rem !important;
            }

            .mobile-achievement-card .text-xs {
              font-size: 0.75rem !important;
            }

            .grid-cols-2 {
              gap: 6px !important;
              padding-left: 4px !important;
              padding-right: 4px !important;
            }
          }

          /* Tablet and up - preserve original styling */
          @media (min-width: 768px) {
            .container {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
          }

          /* Performance optimizations for buttery smooth animations */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .section-content {
            contain: layout style paint;
          }

          /* Respect user motion preferences */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }

          /* Hardware acceleration for smooth performance */
          .section-content,
          .card-hover-effect,
          .achievement-card-hover,
          .button-hover-effect {
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
          }
        `}</style>
      </section>
  );
}