"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlightsData = [
    {
        id: "01",
        title: "Smart Claim Configuration",
        desc: "Manage inspection timing, routing preferences, addresses, and claim-related settings through a centralized and user-friendly interface.",
        phone: "/Letimg/360-iPhone1.svg",
    },
    {
        id: "02",
        title: "Real-Time Claim Dashboard",
        desc: "Track claim status, schedules, completed tasks, cancellations, alerts, and operational analytics through visual dashboards.",
        phone: "/Letimg/360-iPhone2.svg",
    },
    {
        id: "03",
        title: "Property Damage Documentation",
        desc: "Capture and organize property images, inspection details, and supporting evidence for accurate claim verification.",
        phone: "/Letimg/360-iPhone3.svg",
    },
    {
        id: "04",
        title: "Flexible Subscription & SaaS Management",
        desc: "Offer scalable subscription plans and cloud-based access designed for insurance companies, agents, and enterprise operations.",
        phone: "/Letimg/360-iPhone4.svg",
    },
    {
        id: "05",
        title: "Client & Policy Information Management",
        desc: "Access complete policyholder details, claim information, schedules, and risk-related data from a structured digital system.",
        phone: "/Letimg/360-iPhone5.svg",
    },
    {
        id: "06",
        title: "Contact & Team Assignment",
        desc: "Add surveyors, contractors, agents, and contacts easily to streamline collaboration and claim handling workflows.",
        phone: "/Letimg/360-iPhone6.svg",
    }
];

export default function Highlights() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Group data into pages of 2 items each
    const pages = [];
    for (let i = 0; i < highlightsData.length; i += 2) {
        pages.push({
            left: highlightsData[i],
            right: highlightsData[i + 1]
        });
    }

    const nextSlide = () => setActiveIndex((p) => p === pages.length - 1 ? 0 : p + 1);
    const prevSlide = () => setActiveIndex((p) => p === 0 ? pages.length - 1 : p - 1);

    // Autoplay functionality - slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex, pages.length]);

    return (
        <section className="relative w-full font-THICCCBOI mt-[80px] mb-[80px] overflow-hidden">
            <div>
                <div className="w-full max-w-[1400px] mx-auto relative mt-[80px] mb-[80px]">
                    {/* Huge Faint Watermark Text */}
                    <motion.div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[110px] lg:text-[110px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[50px]"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        ESSENTIAL HIGHLIGHTS
                    </motion.div>
                    {/* Title */}
                    <motion.h2 
                        className="text-[40px] font-bold text-[#111827] mb-12 relative z-20 xl:ml-10 -pt-[100px] whitespace-nowrap"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Essential Highlights
                    </motion.h2>

                    {/* Global wrapper for absolute positioning (desktop) */}
                    <div className="hidden lg:block relative w-full h-[700px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <div className="w-full h-full relative">
                                    {/* ---------- LEFT ITEM ---------- */}
                                    {pages[activeIndex].left && (
                                        <>
                                            <motion.div 
                                                className="absolute top-[32%] left-[2%] w-[25%] z-10"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <div className="relative group">
                                                    <span className="absolute -top-[80px] -left-[10px] text-[160px] font-bold text-[#939192]/20 z-[-1] leading-none select-none tracking-tighter transition-colors duration-500 group-hover:text-[#32B9E9]/20">
                                                        {pages[activeIndex].left.id}
                                                    </span>
                                                    <h3 className="text-[22px] font-bold text-gray-900 mb-4 group-hover:text-[#32B9E9] transition-colors">
                                                        {pages[activeIndex].left.title}
                                                    </h3>
                                                    <p className="text-[15px] text-gray-600 leading-relaxed pr-6 group-hover:text-gray-900 transition-colors">
                                                        {pages[activeIndex].left.desc}
                                                    </p>
                                                </div>
                                            </motion.div>

                                            {/* Left Dashed Line matched perfectly to reference */}
                                            <motion.div 
                                                className="absolute top-[18%] left-[10%] w-[21%] h-[15%] border-t-[2px] border-l-[2px] border-dashed border-[#32B9E9]/50 opacity-80 rounded-tl-lg pointer-events-none"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.8 }}
                                                transition={{ duration: 1, delay: 0.4 }}
                                            />

                                            <motion.div 
                                                className="absolute top-[3%] left-[26%] z-20 w-[24%] max-w-[290px]"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
                                            >
                                                <div className="hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                                    <Image
                                                        src={pages[activeIndex].left.phone}
                                                        alt={`Phone for ${pages[activeIndex].left.title}`}
                                                        width={290}
                                                        height={600}
                                                        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:drop-shadow-[0_30px_50px_rgba(50,185,233,0.3)] transition-all duration-500"
                                                        priority={true}
                                                    />
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                    {/* ---------- RIGHT ITEM ---------- */}
                                    {pages[activeIndex].right && (
                                        <>
                                            <motion.div 
                                                className="absolute top-[18%] left-[49%] z-30 w-[24%] max-w-[290px]"
                                                initial={{ opacity: 0, y: -50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                                            >
                                                <div className="hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                                    <Image
                                                        src={pages[activeIndex].right.phone}
                                                        alt={`Phone for ${pages[activeIndex].right.title}`}
                                                        width={290}
                                                        height={600}
                                                        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:drop-shadow-[0_30px_50px_rgba(50,185,233,0.3)] transition-all duration-500"
                                                        priority={true}
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Right Dashed Line matched perfectly to reference */}
                                            <motion.div 
                                                className="absolute top-[84%] left-[60%] w-[25%] h-[10%] border-b-[2px] border-r-[2px] border-dashed border-[#32B9E9]/50 opacity-80 rounded-br-lg pointer-events-none transform -translate-y-full"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.8 }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                            />

                                            <motion.div 
                                                className="absolute top-[52%] left-[74%] w-[25%] z-10"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                            >
                                                <div className="relative group">
                                                    <span className="absolute -top-[80px] -left-[10px] text-[160px] font-bold text-[#939192]/20 z-[-1] leading-none select-none tracking-tighter transition-colors duration-500 group-hover:text-[#32B9E9]/20">
                                                        {pages[activeIndex].right.id}
                                                    </span>
                                                    <h3 className="text-[22px] font-bold text-gray-900 mb-4 group-hover:text-[#32B9E9] transition-colors">
                                                        {pages[activeIndex].right.title}
                                                    </h3>
                                                    <p className="text-[15px] text-gray-600 leading-relaxed pr-6 group-hover:text-gray-900 transition-colors">
                                                        {pages[activeIndex].right.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </>
                                    )}

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile / Tablet Fallback Layout (Visible only on smaller screens) */}
                    <div className="lg:hidden relative w-full overflow-hidden mt-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex-shrink-0 flex flex-col items-center gap-16 px-4 pb-10"
                            >
                                {/* Left Item stacked */}
                                {pages[activeIndex].left && (
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-8 text-center pt-8">
                                            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100/60 z-[-1] leading-none">
                                                {pages[activeIndex].left.id}
                                            </span>
                                            <h3 className="text-[24px] font-bold text-gray-900 mb-3">{pages[activeIndex].left.title}</h3>
                                            <p className="text-[15px] text-gray-600 max-w-sm">{pages[activeIndex].left.desc}</p>
                                        </div>
                                        <Image src={pages[activeIndex].left.phone} alt={pages[activeIndex].left.title} width={300} height={600} className="w-[85%] max-w-[320px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                                    </div>
                                )}
                                {/* Right Item stacked */}
                                {pages[activeIndex].right && (
                                    <div className="flex flex-col items-center text-center mt-12">
                                        <div className="relative mb-8 text-center pt-8">
                                            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100/60 z-[-1] leading-none">
                                                {pages[activeIndex].right.id}
                                            </span>
                                            <h3 className="text-[24px] font-bold text-gray-900 mb-3">{pages[activeIndex].right.title}</h3>
                                            <p className="text-[15px] text-gray-600 max-w-sm">{pages[activeIndex].right.desc}</p>
                                        </div>
                                        <Image src={pages[activeIndex].right.phone} alt={pages[activeIndex].right.title} width={300} height={600} className="w-[85%] max-w-[320px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-16 pb-12 flex justify-center items-center z-40 relative">

                        {/* Prev Arrow Button */}
                        <button
                            onClick={prevSlide}
                            className={`mr-4 w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:bg-[#32B9E9] hover:border-[#32B9E9] hover:text-white hover:scale-110 border-gray-200 text-gray-500`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)] rounded-full py-2 px-4 border border-gray-100">
                            {pages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`transition-all duration-500 rounded-full ${i === activeIndex ? "w-6 h-2 bg-[#32B9E9]" : "w-2 h-2 bg-gray-200 hover:bg-gray-400 hover:scale-125"
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Arrow Button */}
                        <button
                            onClick={nextSlide}
                            className={`ml-4 w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:bg-[#32B9E9] hover:border-[#32B9E9] hover:text-white hover:scale-110 border-gray-200 text-gray-500`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {/* Background Bottom Blue Gradient */}
            <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-[#32B9E9]/20 blur-[150px] rounded-[100%] z-[-2] pointer-events-none"></div>
        </section>
    );
}
