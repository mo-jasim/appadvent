
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const MarketingServices = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        {
            title: "360° Digital Marketing",
            description: "Helps our clients in designing dynamic and secure applications. With a keen eye for detail and commitment to excellence, our team delivers enterprise-level solutions tailored to your unique requirements.",
        },
        {
            title: "Search Engine Optimization",
            description: "Empowers businesses to create robust, cross-platform applications. Our skilled developers leverage the extensive ecosystem to build scalable solutions that enhance productivity and performance.",
        },
        {
            title: "Social Media Marketing",
            description: "Enables rapid application development through simple syntax and powerful libraries. Our experts specialize in crafting data-driven applications, leveraging modern frameworks.",
        },
        {
            title: "Email Marketing",
            description: "Builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase.",
        },
        {
            title: "Content Marketing",
            description: "Builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase.",
        },
        {
            title: "Pay-per-click (PPC) Marketing",
            description: "Builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase.",
        },
        {
            title: "Influencer Marketing",
            description: "Builds native-like mobile applications using React/JavaScript. Our developers create seamless cross-platform experiences for both iOS and Android from a single codebase.",
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
            scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 font-THICCCBOI relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
                    <div className="w-full sm:w-2/3">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 text-black leading-tight">
                            Our Digital Marketing Services
                        </h2>
                        <p className="text-black text-sm sm:text-base md:text-[18px] leading-relaxed">
                            We assist in specific development stages as well as provide full-cycle mobile app implementation.
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors group ${!canScrollLeft ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' : 'border-gray-300 bg-white hover:bg-gray-100'}`}
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${!canScrollLeft ? 'text-gray-400' : 'text-gray-500 group-hover:text-black'}`} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors group ${!canScrollRight ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' : 'border-gray-300 bg-white hover:bg-gray-100'}`}
                            aria-label="Scroll right"
                        >
                            <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${!canScrollRight ? 'text-gray-400' : 'text-gray-500 group-hover:text-black'}`} />
                        </button>
                    </div>
                </div>

                {/* Cards Carousel */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] bg-white p-5 sm:p-6 md:p-8 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col snap-center"
                        >
                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#050a15] mb-3">
                                {skill.title}
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6 flex-grow">
                                {skill.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex items-center gap-2 font-medium hover:gap-3 transition-all duration-200 hover:text-[#32B9E9] bg-transparent border-none cursor-pointer p-0 text-sm sm:text-base"
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

export default MarketingServices;
