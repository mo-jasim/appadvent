
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const ITSkills = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        {
            title: ".Net Developer",
            description: "helps our clients in designing dynamic and secure applications using the Microsoft .NET framework. With a keen eye for detail and a commitment to excellence, our developers develop enterprise-level solutions. Our dedicated team of .NET developers ensures the delivery of high-performance applications tailored to meet the unique requirements of your projects.",
        },
        {
            title: "Java",
            description: "empowers businesses to create robust, cross-platform applications with the Java programming language. Our skilled developers leverage the extensive Java ecosystem to build scalable solutions that enhance productivity and performance. By focusing on best practices and innovative design, we deliver applications that stand the test of time.",
        },
        {
            title: "Python",
            description: "enables rapid application development through its simple syntax and powerful libraries. Our Python experts specialize in crafting data-driven applications, leveraging frameworks like Django and Flask to create dynamic web solutions. We prioritize clean coding and modular design to ensure maintainability and scalability for your business needs.  coding and modular design.",
        },
        {
            title: "Node.js",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
        {
            title: "IOS(obj-c / Swift)",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
        {
            title: "Android(Kotlin / Java)",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
        {
            title: "Flutter",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
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
        <section className="mt-[80px] mb-[80px] font-THICCCBOI relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                    <div className="md:w-2/3">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 text-black leading-tight">
                            IT skills available for hiring
                        </h2>
                        <p className="text-black text-[16px] sm:text-[18px] max-w-3xl leading-relaxed">
                            We assists in specific development stages as well as provides full-cycle mobile app
                            implementation. Our mobile app development services include:
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors group ${!canScrollLeft
                                ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                : 'border-gray-300 bg-white hover:bg-gray-100'
                                }`}
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className={`w-5 h-5 transition-colors ${!canScrollLeft ? 'text-gray-400' : 'text-gray-500 group-hover:text-black'
                                }`} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors group ${!canScrollRight
                                ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                : 'border-gray-300 bg-white hover:bg-gray-100'
                                }`}
                            aria-label="Scroll right"
                        >
                            <ArrowRight className={`w-5 h-5 transition-colors ${!canScrollRight ? 'text-gray-400' : 'text-gray-500 group-hover:text-black'
                                }`} />
                        </button>
                    </div>
                </div>

                {/* Cards Carousel */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white p-6 sm:p-8 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col snap-center h-auto"
                        >
                            <h3 className="text-[20px] md:text-[24px] font-bold text-[#050a15] mb-4">
                                {skill.title}
                            </h3>
                            <p className="text-gray-500 text-[16px] leading-relaxed mb-8 flex-grow">
                                {skill.description}
                            </p>
                            {/* Hire now */}
                            <div className="mt-auto pt-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex items-center gap-2 hover:text-[#32B9E9] font-medium hover:gap-3 transition-all duration-200 hover:text-[#1a9fd4] bg-transparent border-none cursor-pointer p-0"
                                >
                                    Hire now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default ITSkills;
