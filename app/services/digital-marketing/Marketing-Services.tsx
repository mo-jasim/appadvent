
"use client";

import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const MarketingServices = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const skills = [
        {
            title: "360° Digital Marketing",
            description: "helps our clients in designing dynamic and secure applications using the Microsoft .NET framework. With a keen eye for detail and a commitment to excellence, our developers develop enterprise-level solutions. Our dedicated team of .NET developers ensures the delivery of high-performance applications tailored to meet the unique requirements of your projects.",
        },
        {
            title: "Search Engine Optimization",
            description: "empowers businesses to create robust, cross-platform applications with the Java programming language. Our skilled developers leverage the extensive Java ecosystem to build scalable solutions that enhance productivity and performance. By focusing on best practices and innovative design, we deliver applications that stand the test of time.",
        },
        {
            title: "Social Media Marketing",
            description: "enables rapid application development through its simple syntax and powerful libraries. Our Python experts specialize in crafting data-driven applications, leveraging frameworks like Django and Flask to create dynamic web solutions. We prioritize clean coding and modular design to ensure maintainability and scalability for your business needs.  coding and modular design.",
        },
        {
            title: "Email Marketing",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
        {
            title: "Content Marketing",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
        {
            title: "Pay-per-click (PPC) Marketing",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
        {
            title: "Influencer Marketing",
            description: "builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase, ensuring cost-efficiency and rapid time-to-market without compromising on performance or user experience.",
        },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;

            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 font-THICCCBOI relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="md:w-2/3">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 text-black leading-tight">
                            Our Digital Marketing Services
                        </h2>
                        <p className="text-gray-500 text-[18px] max-w-3xl leading-relaxed">
                            We assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white group"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white group"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Cards Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] bg-white p-6 sm:p-8 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col snap-center h-auto"
                        >
                            <h3 className="text-[24px] font-bold text-[#050a15] mb-4">
                                {skill.title}
                            </h3>
                            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed mb-8 flex-grow">
                                {skill.description}
                            </p>
                            <div className="mt-auto pt-4">
                                <a href="#" className="flex items-center gap-2 text-[#32B9E9] font-medium hover:gap-3 transition-all group-hover:text-[#2aa8d6]">
                                    Hire now <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingServices;
