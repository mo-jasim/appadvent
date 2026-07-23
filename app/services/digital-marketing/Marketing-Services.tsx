"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';
import { motion } from 'framer-motion';

const MarketingServices = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        {
            title: "360° Digital Marketing",
            description: "Drive complete online growth with integrated digital marketing strategies including SEO, social media, paid advertising, branding, and content marketing. Maximize visibility, engagement, conversions, and long-term business performance across digital platforms effectively.",
        },
        {
            title: "Search Engine Optimization",
            description: "Improve search engine rankings with strategic SEO services focused on technical optimization, keyword targeting, content enhancement, and backlink building. Increase organic traffic, online visibility, and sustainable business growth through data-driven strategies.",
        },
        {
            title: "Social Media Marketing",
            description: "Boost brand engagement through result-oriented social media marketing strategies across major platforms. Create impactful campaigns, audience-focused content, and consistent brand communication designed to increase reach, engagement, and customer conversions effectively.",
        },
        {
            title: "Advertising Service",
            description: "Accelerate business growth with targeted advertising campaigns across Google, Meta, YouTube, and other digital platforms. Optimize ad performance, audience targeting, and conversions through data-driven strategies delivering measurable marketing results consistently.",
        },
        {
            title: "Branding Service",
            description: "Build a powerful brand identity through strategic branding services including visual design, messaging, positioning, and digital presence enhancement. Create memorable customer experiences that strengthen trust, recognition, and long-term business credibility effectively.",
        },
        {
            title: "Content Writing Service",
            description: "Deliver compelling content writing solutions tailored for websites, blogs, social media, and marketing campaigns. Create engaging, SEO-friendly, and audience-focused content that strengthens brand communication, improves visibility, and drives meaningful customer engagement.",
        },
        {
            title: "AIO (Artificial Intelligence Optimization",
            description: "Enhance digital visibility with AI Optimization services focused on preparing content for AI-driven search experiences. Improve structured content, contextual relevance, and discoverability across modern AI platforms and intelligent search ecosystems effectively.",
        },
        {
            title: "GEO (Generative Engine Optimization)",
            description: "Optimize digital content for Generative Engine Optimization strategies designed to improve visibility in AI-generated search responses. Strengthen authority, structured information delivery, and brand discoverability across emerging generative search technologies effectively.",
        },
        {
            title: "AEO (Answer Engine Optimization)",
            description: "Improve online discoverability with Answer Engine Optimization services focused on featured snippets, voice search, and direct-answer visibility. Structure content strategically to increase search relevance, authority, and customer engagement across search platforms.",
        },
        {
            title: "Guest Post Service",
            description: "Strengthen online authority and SEO performance with high-quality guest posting services on relevant websites. Build credible backlinks, increase brand exposure, and improve search rankings through strategic content placement and outreach campaigns.",
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
            <style>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `}</style>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header row */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
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
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors group ${!canScrollLeft ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' : 'border-gray-300 bg-white hover:bg-gray-100 hover:border-[#32B9E9] hover:text-[#32B9E9]'}`}
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${!canScrollLeft ? 'text-gray-400' : 'text-gray-500 group-hover:text-[#32B9E9]'}`} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors group ${!canScrollRight ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' : 'border-gray-300 bg-white hover:bg-gray-100 hover:border-[#32B9E9] hover:text-[#32B9E9]'}`}
                            aria-label="Scroll right"
                        >
                            <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${!canScrollRight ? 'text-gray-400' : 'text-gray-500 group-hover:text-[#32B9E9]'}`} />
                        </button>
                    </div>
                </motion.div>

                {/* Cards Carousel */}
                <motion.div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex h-[500px] gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-8 pt-4 px-2 -mx-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: 50, scale: 0.95 },
                                visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                            className="w-[260px] sm:w-[320px] md:w-[380px] snap-center shrink-0"
                        >
                            <div className="block h-full group">
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-6 sm:p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col flex-grow relative z-10">
                                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#050a15] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {skill.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
                                            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                                                {skill.description}
                                            </p>

                                            <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-[#32B9E9]/20 transition-colors duration-300">
                                                <button
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="flex items-center gap-2 font-semibold text-[#050a15] group-hover:text-[#32B9E9] transition-all duration-300 bg-transparent border-none cursor-pointer p-0 text-sm sm:text-base group/btn"
                                                >
                                                    Hire now
                                                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default MarketingServices;
