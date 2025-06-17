"use client";

import { projects } from "@/lib/data/project";
import { notFound } from "next/navigation";
import { ExternalLink, Calendar, Tag, Users, Code, Github, Globe, Clock, CheckCircle2, PlayCircle, Download, Share2, BookOpen, Target, Layers, ArrowRight, Eye, Lightbulb, Zap, Heart } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import ContactPreview from "@/components/sections/contact-preview";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: Props) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    // Black color for all tags
    const getTagColor = () => {
        return "bg-black text-white border-gray-600";
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section with New Layout */}
            <section className="pt-32 pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* My Work Label */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 mb-6">
                            <Eye className="w-4 h-4" />
                            MY WORK
                        </div>

                        {/* Project Name */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                {project.subtitle}
                            </p>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {project.category && (
                                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor()}`}>
                                    {project.category}
                                </span>
                            )}
                            {project.projectType && (
                                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor()}`}>
                                    {project.projectType}
                                </span>
                            )}
                            {project.status && (
                                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor()}`}>
                                    {project.status}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Full Width Hero Image */}
                    <div className="relative mb-20">
                        <div className="overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Action Buttons */}
                        <div className="absolute bottom-6 left-6 flex gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                                >
                                    <PlayCircle className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-800/90 hover:bg-gray-700 backdrop-blur-sm border border-gray-600/50 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections with Better Layout */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Introduction Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-gray-300" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Introduction</h2>
                            </div>
                            <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
                                {project.fullDescription?.split('\n').slice(0, 1).map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4">
                                {project.technologies?.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-gray-700/50">
                            <img
                                src={project.image}
                                alt="Project preview"
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                    </div>

                    {/* Purpose Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative overflow-hidden rounded-xl border border-gray-700/50">
                            <img
                                src={project.image}
                                alt="Purpose illustration"
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <Target className="w-5 h-5 text-gray-300" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Purpose</h2>
                            </div>
                            <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
                                <p>This project was designed to address specific challenges in {project.category?.toLowerCase()} by providing innovative solutions that enhance user experience and streamline processes.</p>
                                <p>The main goal was to create a platform that not only meets current needs but also scales for future requirements, ensuring long-term value and sustainability.</p>
                            </div>
                            {project.duration && (
                                <div className="flex items-center gap-2 text-gray-400 pt-4">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-base">Development Period: {project.duration}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Why This Project Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-gray-300" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Why This Project</h2>
                            </div>
                            <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
                                <p>The inspiration behind this project came from recognizing gaps in existing solutions and the opportunity to create something more intuitive and powerful.</p>
                                <p>By leveraging modern technologies and focusing on user-centric design, this project demonstrates my ability to transform ideas into functional, scalable applications.</p>
                            </div>
                            {project.features && (
                                <div className="space-y-3 pt-4">
                                    {project.features?.slice(0, 3).map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                            <CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" />
                                            <span className="text-gray-300 text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-gray-700/50">
                            <img
                                src={project.image}
                                alt="Project impact"
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                    </div>

                    {/* Impact & Results Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative overflow-hidden rounded-xl border border-gray-700/50">
                            <img
                                src={project.image}
                                alt="Results showcase"
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-gray-300" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Impact & Results</h2>
                            </div>
                            <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
                                <p>This project successfully delivered measurable improvements in user engagement and operational efficiency, showcasing the power of thoughtful design and robust development.</p>
                                <p>The implementation resulted in enhanced user satisfaction and provided valuable insights for future development projects.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                    <div className="text-2xl font-bold text-white mb-1">99%</div>
                                    <div className="text-sm text-gray-400">Uptime</div>
                                </div>
                                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                    <div className="text-2xl font-bold text-white mb-1">40%</div>
                                    <div className="text-sm text-gray-400">Engagement</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Tech Stack and Contributors Section - Moved to Bottom */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                        {/* Tech Stack with Better Design */}
                        {project.technologies && (
                            <div className="w-full">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Layers className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-white">Technology Stack</h2>
                                </div>

                                {/* Enhanced Tech Stack Grid */}
                                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                                    {project.technologies.map((tech, index) => (
                                        <div key={index} className="group w-full">
                                            <div className="relative p-4 sm:p-5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-gray-700/60 hover:to-gray-800/60 border border-gray-600/40 hover:border-gray-500/60 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/20 min-h-[70px] sm:min-h-[80px] flex items-center justify-center backdrop-blur-sm">
                                                <span
                                                    className="text-white text-sm sm:text-base font-semibold leading-tight tracking-wide"
                                                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                                                >
                                                    {tech}
                                                </span>

                                                {/* Enhanced glow effect on hover */}
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                {/* Subtle border animation */}
                                                <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack Count - Mobile Only */}
                                <div className="mt-4 sm:mt-6 lg:hidden">
                                    <div className="text-center text-gray-400 text-sm">
                                        {project.technologies.length} Technologies Used
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contributors - Stacked Animated Avatars */}
                        {project.contributors && (
                            <div className="w-full mt-8 lg:mt-0">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-white">Contributors</h2>
                                </div>

                                {/* Contributors Section - Responsive Layout */}
                                <div className="space-y-6">
                                    {/* Stacked Avatars */}
                                    <div className="flex items-center justify-center sm:justify-start">
                                        <div className="flex -space-x-3 sm:-space-x-4">
                                            {project.contributors.map((contributor, index) => (
                                                <div key={index} className="relative group">
                                                    <div className="relative">
                                                        <img
                                                            src={contributor.avatar}
                                                            alt={contributor.name}
                                                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-600 group-hover:border-white object-cover transition-all duration-300 group-hover:scale-110 group-hover:z-10 relative bg-gray-800 cursor-pointer"
                                                            style={{ zIndex: project.contributors.length - index }}
                                                        />

                                                        {/* Hover tooltip - Responsive positioning */}
                                                        <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 border border-gray-600 pointer-events-none">
                                                            {contributor.name}
                                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-r border-b border-gray-600"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Contributor count - Desktop */}
                                        <div className="hidden sm:block ml-4 lg:ml-6 text-gray-400 text-sm lg:text-base">
                                            {project.contributors.length} contributor{project.contributors.length > 1 ? 's' : ''}
                                        </div>
                                    </div>

                                    {/* Contributor count - Mobile */}
                                    <div className="sm:hidden text-center text-gray-400 text-sm">
                                        {project.contributors.length} contributor{project.contributors.length > 1 ? 's' : ''}
                                    </div>

                                    {/* Contributors List - Mobile Friendly */}
                                    <div className="block sm:hidden">
                                        <div className="text-center text-gray-400 text-xs">
                                            Hover on avatars to see names
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


        </div>
    );
}