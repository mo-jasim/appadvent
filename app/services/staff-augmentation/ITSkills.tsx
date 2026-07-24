"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';
import { motion } from 'framer-motion';

const ITSkills = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        {
            title: ".Net Developer",
            description: "Scale enterprise applications with experienced .NET developers skilled in ASP.NET, C#, APIs, cloud integration, and backend architecture. Build secure, high-performance solutions tailored for business operations, automation, and long-term digital scalability requirements.",
        },
        {
            title: "Java",
            description: "Hire dedicated Java developers to create robust, scalable, and secure enterprise-grade applications. Expertise includes Spring Boot, microservices, backend systems, and cross-platform development optimized for performance, flexibility, and seamless business integration needs.",
        },
        {
            title: "Python",
            description: "Strengthen development teams with Python experts specializing in web applications, automation, AI integrations, data processing, and scalable backend systems. Deliver efficient, clean, and reliable solutions supporting modern digital transformation and innovation goals.",
        },
        {
            title: "Node.js",
            description: "Expand your engineering capabilities with Node.js developers experienced in real-time applications, APIs, microservices, and scalable backend architectures. Build fast, lightweight, and high-performing digital platforms optimized for seamless user experiences and growth.",
        },
        {
            title: "React Native",
            description: "Develop cross-platform mobile applications faster with React Native specialists delivering native-like performance, reusable components, and smooth user experiences. Ideal for startups and enterprises seeking cost-effective, scalable, and visually engaging mobile solutions.",
        },
        {
            title: "IOS(obj-c / Swift)",
            description: "Hire iOS developers proficient in Swift and Objective-C to create secure, high-performance Apple applications. Deliver intuitive user experiences, seamless functionality, and scalable mobile solutions aligned with modern iOS ecosystem standards and expectations.",
        },
        {
            title: "Android(Kotlin / Java)",
            description: "Build feature-rich Android applications with skilled Java and Kotlin developers focused on performance, scalability, and user-centric experiences. Create reliable mobile solutions compatible across devices while ensuring security, responsiveness, and long-term maintainability standards.",
        },
        {
            title: "Flutter",
            description: "Accelerate mobile development using Flutter experts who build visually consistent, high-performance applications from a single codebase. Deliver seamless cross-platform experiences with faster deployment, scalable architecture, and modern UI design optimized for engagement.",
        },
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(Math.ceil(scrollLeft) > 0);
            setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 font-THICCCBOI relative overflow-hidden w-full">
            {/* Header with Navigation Buttons */}
            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <div className="md:w-2/3">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 sm:mb-6 text-black leading-tight">
                            IT skills available for hiring
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-[18px] max-w-3xl leading-relaxed">
                            We assist in specific development stages as well as provide full-cycle application
                            implementation. Our staff augmentation services include:
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 md:mt-0 pb-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 group ${!canScrollLeft
                                ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                : 'border-[#32B9E9]/30 bg-white hover:bg-[#32B9E9] hover:border-[#32B9E9] hover:shadow-[0_4px_15px_rgba(50,185,233,0.3)]'
                                }`}
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className={`w-5 h-5 transition-colors duration-300 ${!canScrollLeft ? 'text-gray-400' : 'text-[#32B9E9] group-hover:text-white'
                                }`} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 group ${!canScrollRight
                                ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                : 'border-[#32B9E9]/30 bg-white hover:bg-[#32B9E9] hover:border-[#32B9E9] hover:shadow-[0_4px_15px_rgba(50,185,233,0.3)]'
                                }`}
                            aria-label="Scroll right"
                        >
                            <ArrowRight className={`w-5 h-5 transition-colors duration-300 ${!canScrollRight ? 'text-gray-400' : 'text-[#32B9E9] group-hover:text-white'
                                }`} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Cards Carousel */}
            <div className="relative z-10 w-full">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory pl-3 sm:pl-5 lg:pl-[max(1.75rem,calc((100%-1280px)/2+1.75rem))] pr-3 sm:pr-5 lg:pr-7 scroll-pl-3 sm:scroll-pl-5 lg:scroll-pl-[max(1.75rem,calc((100%-1280px)/2+1.75rem))] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: 50, scale: 0.95 },
                                    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                                className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white p-8 sm:p-10 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(50,185,233,0.12)] hover:border-[#32B9E9]/30 hover:-translate-y-2 transition-all duration-300 flex flex-col snap-center h-auto group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#32B9E9]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-[22px] md:text-[26px] font-bold text-[#050a15] mb-5 group-hover:text-[#32B9E9] transition-colors duration-300 relative inline-block">
                                    {skill.title}
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-gradient-to-r from-[#32B9E9] to-transparent rounded-full group-hover:w-full transition-all duration-500" />
                                </h3>
                                <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-8 flex-grow group-hover:text-gray-800 transition-colors duration-300 relative z-10 mt-2">
                                    {skill.description}
                                </p>
                                {/* Hire now */}
                                <div className="mt-auto pt-4 relative z-10">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="flex items-center gap-2 text-[#050a15] hover:text-[#32B9E9] font-bold hover:gap-3 transition-all duration-300 bg-transparent border-none cursor-pointer p-0 group/btn"
                                    >
                                        Hire now
                                        <ArrowRight className="w-5 h-5 text-[#32B9E9] group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default ITSkills;
