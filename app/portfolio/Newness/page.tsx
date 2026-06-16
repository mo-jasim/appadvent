"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    MapPin,
    Building2,
    Clock,
    Briefcase,
    Apple,
    PlayCircle,
} from "lucide-react";
import OurProjectsSection from "../../services/website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../services/website-designing-development/Companies-Love";
import ConsultationModal from "@/components/ConsultationModal";
import Technology from "../Goalkick/technology";
import Designing1 from "@/components/Designing1";
import Highlights from "./Highlights";

export default function GoalkickCaseStudy() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="w-full" style={{ backgroundImage: "url('/images/polygon.png')" }}>
                <div className="w-full font-THICCCBOI overflow-x-hidden max-w-[1600px] mx-auto">

                    {/* ─────────────────────────────────────────────
                   1. HERO SECTION
               ───────────────────────────────────────────── */}
                    <section className="relative w-full min-h-[500px] md:h-[700px] flex items-center justify-center pt-24 md:pt-0 mb-[40px] md:mb-[80px] font-THICCCBOI">
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/caseimg/Newness-video.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/60 z-10" />
                        </div>

                        <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center gap-4 px-4">
                            {/* Logo */}
                            <div className="flex justify-center w-44 md:w-52 h-auto mb-2">
                                <img src="/caseimg/Newnesslogo.svg" alt="Goalkick Logo" className="w-full h-auto" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight max-w-7xl">
                                Newness Plant- Bring Nature Closer to You
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF] max-w-7xl text-center opacity-90">
                                Discover a complete online marketplace for natural plants and gardening essentials designed to make your home, office, and outdoor spaces more fresh, vibrant, and beautiful. Newnessplant helps plant lovers explore greenery with convenience, quality, and care.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto group">
                                    <Apple className="w-7 h-7 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Download on</span>
                                        <span className="text-base font-semibold">App Store</span>
                                    </div>
                                </button>
                                <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto group">
                                    <PlayCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Get it on</span>
                                        <span className="text-base font-semibold">Google Play</span>
                                    </div>
                                </button>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-6 text-[#32B9E9] font-semibold text-lg underline underline-offset-4 cursor-pointer hover:text-[#2aa8d6] transition-colors"
                            >
                                Have a project in mind?
                            </button>
                        </div>
                    </section>

                    {/* 2. ABOUT APP SECTION */}
                    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
                        {/* Glow */}
                        <div className="absolute left-[-10%] top-[20%] w-[40%] h-[60%] bg-blue-100/60 blur-[120px] rounded-full z-0 pointer-events-none" />

                        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
                            {/* Left Image */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[3/4] transition-all duration-500 hover:scale-[1.02]">
                                    <Image src="/caseimg/Newnessabout.svg" alt="About Goalkick" fill className="object-contain drop-shadow-2xl" />
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 relative">
                                {/* OVERVIEW Watermark */}
                                <div className="absolute -top-10 sm:-top-16 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                                    OVERVIEW
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight text-center lg:text-left">
                                        About Newness Plant App
                                    </h2>
                                    <p className="text-[#010F14] text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-center lg:text-left">
                                        Newnessplant is an online plant marketplace established in 2019 that focuses on providing natural plants and gardening accessories through a digital shopping platform. The application is designed for users who want to purchase plants conveniently from their mobile devices while also exploring products that improve home décor, office environments, gardens, balconies, and indoor spaces
                                    </p>
                                    <p className="text-[#010F14] text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-center lg:text-left">
                                        The core purpose of the application is to simplify plant shopping and make greenery more accessible to everyone, regardless of gardening experience
                                    </p>

                                    {/* Stat Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 border-t border-gray-100 pt-10">
                                        <div className="flex gap-4 items-start justify-start">
                                            <img src="/caseimg/About-img1.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                            <div className="text-left">
                                                <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Industry</h4>
                                                <p className="text-black text-lg font-medium">E-Commerce Gardening Marketplace</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start justify-start">
                                            <img src="/caseimg/About-img2.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                            <div className="text-left">
                                                <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Platform</h4>
                                                <p className="text-black text-lg font-medium">Andriod & IOS</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start justify-start">
                                            <img src="/caseimg/About-img3.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                            <div className="text-left">
                                                <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Duration</h4>
                                                <p className="text-black text-lg font-medium">6 Months</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start justify-start">
                                            <img src="/caseimg/About-img4.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                            <div className="text-left">
                                                <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Service</h4>
                                                <p className="text-black text-lg font-medium">Design & Development</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- THE RESULTS BANNER --- */}
                    <section className="w-full bg-gradient-to-r from-[#38B24D] via-[#90C04C] to-[#185A30] py-6 md:py-15 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-[1200px] mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 md:mb-16 text-center md:text-left">The Results</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                                {[
                                    { icon: "/images/downloadicon.svg", stat: "5k+", label: "Downloads" },
                                    { icon: "/Letimg/Frame387.svg", stat: "3k+", label: "Users" },
                                    { icon: "/Letimg/Reviews.svg", stat: "620", label: "Positive Reviews" },
                                    { icon: "/Letimg/Starimg.svg", stat: "4.5", label: "Average rating" },
                                ].map(({ icon, stat, label }) => (
                                    <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shrink-0 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                            <img src={icon} alt={label} className="w-10 h-10 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">{stat}</h3>
                                            <p className="text-white/70 text-sm md:text-base font-medium leading-tight">{label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. OPPORTUNITIES AWAIT */}
                    <section className="relative w-full py-20 md:py-32 overflow-hidden">
                        {/* Watermark */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                            OPPORTUNITIES
                        </div>

                        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 text-center lg:text-left">
                                    Opportunities await
                                </h2>
                                <div className="space-y-6 md:space-y-8">
                                    {[
                                        "Protect your personal photos and videos with advanced password and biometric security for complete privacy and peace of mind.",
                                        "Store all captured media directly on your device without any cloud uploads, third-party access, or unwanted tracking.",
                                        "Organize your private content inside secure folders designed to keep sensitive memories safe from unauthorized access.",
                                        "Enjoy a clean, fast, and privacy-first camera experience built for users who value security, control, and confidentiality.",
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="shrink-0 w-8 h-8 flex">
                                                <img src="/caseimg/Newnessplant.svg" alt="" className="w-5 h-5 object-contain" />
                                            </div>
                                            <p className="text-[#010F14] text-sm sm:text-base md:text-lg leading-relaxed">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[360px] transition-all duration-500 hover:scale-[1.02]">
                                    {/* Back/Right Phone */}
                                    <div className="absolute -right-8 sm:-right-[80px] top-[20%] w-[55%] z-0">
                                        <Image src="/caseimg/NewnessiPhone2.svg" alt="App Preview Back" width={300} height={600} className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]" priority />
                                    </div>
                                    {/* Front/Left Phone */}
                                    <div className="relative -left-8 sm:-left-[80px] w-[55%] z-10">
                                        <Image src="/caseimg/NewnessiPhone1.svg" alt="App Preview Front" width={300} height={600} className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]" priority />
                                    </div>
                                    {/* Spacer to prevent overlap clipping */}
                                    <div className="pb-[10%]"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. OUR BEST SOLUTIONS */}
                    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#0d1627] via-[#21163a] to-[#451631] overflow-hidden text-white">
                        <div className="absolute inset-0 bg-blue-900/5 blur-[100px] pointer-events-none" />

                        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            {/* Watermark */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-10 md:-mt-20">
                                SOLUTIONS
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                {/* Left Image */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-[280px] sm:max-w-[360px] transition-all duration-500 hover:scale-[1.02]">
                                        {/* Back/Right Phone */}
                                        <div className="absolute -right-8 sm:-right-[80px] top-[20%] w-[55%] z-0">
                                            <Image src="/caseimg/NewnessiPhone3.svg" alt="App Preview Back" width={300} height={600} className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]" priority />
                                        </div>
                                        {/* Front/Left Phone */}
                                        <div className="relative -left-8 sm:-left-[80px] w-[55%] z-10">
                                            <Image src="/caseimg/NewnessiPhone4.svg" alt="App Preview Front" width={300} height={600} className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]" priority />
                                        </div>
                                        {/* Spacer to prevent overlap clipping */}
                                        <div className="pb-[10%]"></div>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center lg:text-left">
                                        Our Best Solutions
                                    </h2>
                                    <div className="space-y-8">
                                        {[
                                            "A user-friendly online platform offering a diverse range of natural plants suitable for homes, offices, gardens, and decorative spaces.",
                                            "High-quality gardening tools and accessories designed to support plant care, maintenance, and creative landscaping needs.",
                                            "Convenient online ordering experience with carefully curated products focused on freshness, beauty, and customer satisfaction.",
                                            "A nature-focused marketplace committed to helping users transform ordinary spaces into greener, healthier, and more attractive environments.",
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-start gap-4 group">
                                                <div className="shrink-0 transition-colors">
                                                    <img src="/caseimg/Newnessplant1.svg" alt="" className="w-5 h-5" />
                                                </div>
                                                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ─────────────────────────────────────────────
                   6. Newness HIGHLIGHTS
               ───────────────────────────────────────────── */}
                    <Highlights />

                    {/* ─────────────────────────────────────────────
                   7. TECHNOLOGY STACK
               ───────────────────────────────────────────── */}
                    <Technology />

                    {/* ─────────────────────────────────────────────
                   8. DESIGNING
               ───────────────────────────────────────────── */}
                    <Designing1 />
                    {/* 9. GLIMPSES OF APP UI SCREENS */}
                    <section className="relative w-full py-20 md:py-32 text-center overflow-hidden font-THICCCBOI">
                        {/* Glow Blob */}
                        <div className="absolute top-[30%] left-[-10%] w-[80%] md:w-[45%] h-[50%] bg-[#baddfc] blur-[120px] rounded-full z-0 pointer-events-none" />

                        {/* Inline keyframes for infinite scroll */}
                        <style>{`
                     @keyframes scrollUp {
                        0%   { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                     }
                     @keyframes scrollDown {
                        0%   { transform: translateY(-50%); }
                        100% { transform: translateY(0); }
                     }
                     .col-scroll-up {
                        animation: scrollUp 20s linear infinite;
                        will-change: transform;
                     }
                     .col-scroll-down {
                        animation: scrollDown 20s linear infinite;
                        will-change: transform;
                     }
                  `}</style>

                        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
                            {/* Watermark */}
                            <div className="relative mb-20">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                                    UI SCREENS
                                </div>
                                <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-[#0f172a]">
                                    Glimpses of App UI Screens
                                </h2>
                            </div>

                            {/* Infinite-scroll grid */}
                            <div className="relative h-[500px] md:h-[700px] overflow-hidden">
                                {/* Fade masks */}
                                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-center items-start w-full h-full">

                                    {/* Column 1 — scroll UP */}
                                    <div className="h-full">
                                        <div className="col-scroll-up flex flex-col gap-4 md:gap-8">
                                            {[1, 4, 7].map(num => (
                                                <Image key={`c1-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="UI Screen" width={300} height={600} className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                            {[1, 4, 7].map(num => (
                                                <Image key={`c1-dup-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="" width={300} height={600} aria-hidden className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2 — scroll DOWN */}
                                    <div className="h-full">
                                        <div className="col-scroll-down flex flex-col gap-4 md:gap-8">
                                            {[2, 7, 1].map(num => (
                                                <Image key={`c2-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="UI Screen" width={300} height={600} className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                            {[2, 7, 1].map(num => (
                                                <Image key={`c2-dup-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="" width={300} height={600} aria-hidden className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 3 — scroll UP */}
                                    <div className="hidden sm:block h-full">
                                        <div className="col-scroll-up flex flex-col gap-4 md:gap-8">
                                            {[3, 5, 8].map(num => (
                                                <Image key={`c3-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="UI Screen" width={300} height={600} className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                            {[3, 5, 8].map(num => (
                                                <Image key={`c3-dup-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="" width={300} height={600} aria-hidden className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 4 — hidden on mobile */}
                                    <div className="hidden md:block h-full">
                                        <div className="col-scroll-down flex flex-col gap-4 md:gap-8">
                                            {[4, 6, 1].map(num => (
                                                <Image key={`c4-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="UI Screen" width={300} height={600} className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                            {[4, 6, 1].map(num => (
                                                <Image key={`c4-dup-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="" width={300} height={600} aria-hidden className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 5 — visible only on lg */}
                                    <div className="hidden lg:block h-full">
                                        <div className="col-scroll-up flex flex-col gap-4 md:gap-8">
                                            {[5, 7, 3].map(num => (
                                                <Image key={`c5-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="UI Screen" width={300} height={600} className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                            {[5, 7, 3].map(num => (
                                                <Image key={`c5-dup-${num}`} src={`/Newness-UI-screen-img/iPhone${num}.svg`} alt="" width={300} height={600} aria-hidden className="w-full h-auto drop-shadow-xl rounded-2xl md:rounded-[2rem]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <OurProjectsSection />
                    <CompaniesLove />

                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
