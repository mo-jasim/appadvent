"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const highlightsData = [
    {
        id: "01",
        title: "Friendship & Networking",
        desc: "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
        phone: "/images/casephone1.svg",
    },
    {
        id: "02",
        title: "Football Community & Groups",
        desc: "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
        phone: "/images/casephone2.svg",
    },
    {
        id: "03",
        title: "Match Discussion & Banter",
        desc: "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
        phone: "/images/casephone1.svg",
    },
    {
        id: "04",
        title: "Real Time Updates",
        desc: "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
        phone: "/images/casephone2.svg",
    },
    {
        id: "05",
        title: "Personalised Feed",
        desc: "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
        phone: "/images/casephone1.svg",
    },
    {
        id: "06",
        title: "Interactive Engagement",
        desc: "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
        phone: "/images/casephone2.svg",
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

    // Autoplay functionality - slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, pages.length]);

    return (
        <section className="relative w-full overflow-hidden py-24 font-THICCCBOI border-b border-gray-100">
            <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
                <div className="w-full max-w-[1400px] mx-auto relative px-4 sm:px-6 lg:px-8">
                    {/* Huge Faint Watermark Text */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[70px] sm:text-[110px] md:text-[150px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                        Highlights
                    </div>
                    {/* Title */}
                    <h2 className="text-[40px] font-bold text-[#111827] mb-12 relative z-20 xl:ml-10">
                        Essential Highlights
                    </h2>

                    {/* Global wrapper for absolute positioning (desktop) */}
                    <div className="hidden lg:block relative w-full h-[700px] overflow-hidden">
                        <div
                            className="flex w-full h-full transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {pages.map((page, index) => (
                                <div key={index} className="w-full h-full flex-shrink-0 relative">

                                    {/* ---------- LEFT ITEM ---------- */}
                                    {page.left && (
                                        <>
                                            <div className="absolute top-[32%] left-[2%] w-[25%] z-10">
                                                <div className="relative">
                                                    <span className="absolute -top-[80px] -left-[10px] text-[160px] font-bold text-gray-100/70 z-[-1] leading-none select-none tracking-tighter">
                                                        {page.left.id}
                                                    </span>
                                                    <h3 className="text-[22px] font-bold text-gray-900 mb-4 xl:whitespace-nowrap">
                                                        {page.left.title}
                                                    </h3>
                                                    <p className="text-[15px] text-gray-500 leading-relaxed pr-6">
                                                        {page.left.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Left Dashed Line matched perfectly to reference */}
                                            <div className="absolute top-[18%] left-[10%] w-[21%] h-[15%] border-t-[2px] border-l-[2px] border-dashed border-[#111827] opacity-80 rounded-tl-lg pointer-events-none"></div>

                                            <div className="absolute top-[3%] left-[26%] z-20 w-[24%] max-w-[290px]">
                                                <Image
                                                    src={page.left.phone}
                                                    alt={`Phone for ${page.left.title}`}
                                                    width={290}
                                                    height={600}
                                                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </>
                                    )}
                                    {/* ---------- RIGHT ITEM ---------- */}
                                    {page.right && (
                                        <>
                                            <div className="absolute top-[18%] left-[49%] z-30 w-[24%] max-w-[290px]">
                                                <Image
                                                    src={page.right.phone}
                                                    alt={`Phone for ${page.right.title}`}
                                                    width={290}
                                                    height={600}
                                                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                                                    priority={index === 0}
                                                />
                                            </div>

                                            {/* Right Dashed Line matched perfectly to reference */}
                                            <div className="absolute top-[84%] left-[60%] w-[25%] h-[10%] border-b-[2px] border-r-[2px] border-dashed border-[#111827] opacity-80 rounded-br-lg pointer-events-none transform -translate-y-full"></div>

                                            <div className="absolute top-[52%] left-[74%] w-[25%] z-10">
                                                <div className="relative">
                                                    <span className="absolute -top-[80px] -left-[10px] text-[160px] font-bold text-gray-100/70 z-[-1] leading-none select-none tracking-tighter">
                                                        {page.right.id}
                                                    </span>
                                                    <h3 className="text-[22px] font-bold text-gray-900 mb-4 xl:whitespace-nowrap">
                                                        {page.right.title}
                                                    </h3>
                                                    <p className="text-[15px] text-gray-500 leading-relaxed pr-6">
                                                        {page.right.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile / Tablet Fallback Layout (Visible only on smaller screens) */}
                    <div className="lg:hidden relative w-full overflow-hidden mt-8">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {pages.map((page, i) => (
                                <div key={i} className="w-full flex-shrink-0 flex flex-col items-center gap-16 px-4 pb-10">
                                    {/* Left Item stacked */}
                                    {page.left && (
                                        <div className="flex flex-col items-center text-center">
                                            <div className="relative mb-8 text-center pt-8">
                                                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100/60 z-[-1] leading-none">
                                                    {page.left.id}
                                                </span>
                                                <h3 className="text-[24px] font-bold text-gray-900 mb-3">{page.left.title}</h3>
                                                <p className="text-[15px] text-gray-500 max-w-sm">{page.left.desc}</p>
                                            </div>
                                            <Image src={page.left.phone} alt={page.left.title} width={300} height={600} className="w-[85%] max-w-[320px] drop-shadow-2xl" />
                                        </div>
                                    )}
                                    {/* Right Item stacked */}
                                    {page.right && (
                                        <div className="flex flex-col items-center text-center mt-12">
                                            <div className="relative mb-8 text-center pt-8">
                                                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100/60 z-[-1] leading-none">
                                                    {page.right.id}
                                                </span>
                                                <h3 className="text-[24px] font-bold text-gray-900 mb-3">{page.right.title}</h3>
                                                <p className="text-[15px] text-gray-500 max-w-sm">{page.right.desc}</p>
                                            </div>
                                            <Image src={page.right.phone} alt={page.right.title} width={300} height={600} className="w-[85%] max-w-[320px] drop-shadow-2xl" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-16 pb-12 flex justify-center items-center z-40 relative">

                        {/* Prev Arrow Button */}
                        <button
                            onClick={prevSlide}
                            disabled={activeIndex === 0}
                            className={`mr-3 w-8 h-8 flex items-center justify-center border rounded-full transition-colors bg-white/80 backdrop-blur-sm shadow-sm
              ${activeIndex === 0 ? "border-gray-100 text-gray-200 cursor-not-allowed" : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400"}
            `}
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-1.5 border border-gray-200 rounded-full py-1.5 px-3 bg-white/80 backdrop-blur-sm shadow-sm">
                            {pages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`transition-all duration-300 rounded-full ${i === activeIndex ? "w-4 h-[6px] bg-[#1a1a2e]" : "w-[6px] h-[6px] bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Arrow Button */}
                        <button
                            onClick={nextSlide}
                            disabled={activeIndex === pages.length - 1}
                            className={`ml-3 w-8 h-8 flex items-center justify-center border rounded-full transition-colors bg-white/80 backdrop-blur-sm shadow-sm
              ${activeIndex === pages.length - 1 ? "border-gray-100 text-gray-200 cursor-not-allowed" : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400"}
            `}
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {/* Background Bottom Blue Gradient */}
            <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-blue-300/30 blur-[120px] rounded-[100%] z-[-2] pointer-events-none"></div>
        </section>
    );
}
