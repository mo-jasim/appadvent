"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    CheckCircle2,
    MapPin,
    Building2,
    Database,
    Clock,
    Briefcase,
    ArrowDownToLine,
    Users,
    Star,
    Link as LinkIcon,
    UtensilsCrossed
} from "lucide-react";
import CompaniesLove from "../../services/website-designing-development/Companies-Love";
import OurProjectsSection from "../../services/website-designing-development/Our-Projects-Section";
import Highlights from "./Highlights";
import ConsultationModal from "@/components/ConsultationModal";
import Technology from "../Goalkick/technology";
import Designing1 from "@/components/Designing1";

export default function Letramway() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-full font-THICCCBOI overflow-x-hidden">
            <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
                {/* 1. HERO SECTION */}
                <section className="relative w-full min-h-[550px] md:h-[500px] lg:h-[600px] flex items-center justify-center pt-15 md:pt-0 mb-[40px] md:mb-[80px]">
                    {/* Background Video */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/Letimg/bg.video.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/60 z-10"></div>  Dark Overlay
                    </div>

                    <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center gap-4 px-4 md:-mt-10">
                        {/* Logo */}
                        <div className="flex justify-center w-44 md:w-52 h-auto mb-2">
                            <img src="/Letimg/Queue-logo.svg" alt="Le tramway Logo" className="w-full h-auto" />
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-4 md:mb-6">
                            QMS — Smart Queue Management System
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF] max-w-7xl text-center leading-relaxed px-2 md:px-0 opacity-90">
                            A powerful SaaS-based queue management platform designed for banks, hospitals, and service centers to streamline customer flow, reduce waiting time, and eliminate physical queue hassle through smart digital ticketing, kiosk integration, real-time tracking, and centralized management.
                        </p>

                        <div className="mt-8">
                            {/* Have a project in mind? */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-[#32B9E9] font-semibold text-lg md:text-xl underline underline-offset-4 cursor-pointer hover:text-[#2aa8d6] transition-colors"
                            >
                                Have a project in mind?
                            </button>
                        </div>
                    </div>
                </section>
                {/* About */}
                <section className="relative w-full mt-[80px] mb-[40px] overflow-x-hidden">
                    {/* Background light glow */}
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#b8deff]/30 blur-[150px] rounded-full z-0 pointer-events-none"></div>

                    {/* ── MOBILE: Single centered image ── */}
                    <div className="sm:hidden relative w-full px-6 mt-8 z-10">
                        <Image
                            src="/Letimg/Queue-about-img.svg"
                            alt="Desktop Preview"
                            width={1000}
                            height={800}
                            className="w-full h-auto drop-shadow-xl"
                            priority
                        />
                    </div>

                    {/* ── SM+: Full overlapping device layout ── */}
                    <div className="hidden sm:block relative w-full px-4 max-w-[1200px] mx-auto aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] mt-8 mb-16 lg:mt-12 z-10">

                        {/* Desktop (bigpc) */}
                        <div className="absolute top-[0%] left-[20%] w-[60%] z-10 hover:translate-y-2 transition-transform duration-500 will-change-transform">
                            <Image src="/Letimg/Queue-about-img.svg" alt="Desktop" width={1000} height={800} className="w-full h-auto drop-shadow-2xl" priority />
                        </div>

                        {/* iPad */}
                        <div className="absolute top-[10%] left-[5%] w-[25%] z-20 hover:translate-y-2 transition-transform duration-500 delay-75 will-change-transform">
                            <Image src="/Letimg/IPad.svg" alt="iPad" width={300} height={200} className="w-full h-auto drop-shadow-xl" priority />
                        </div>

                        {/* Laptop */}
                        <div className="absolute top-[60%] left-[55%] w-[47%] z-20 hover:translate-y-2 transition-transform duration-500 delay-100 will-change-transform">
                            <Image src="/Letimg/Queue-laptop-img.svg" alt="Laptop" width={800} height={600} className="w-full h-auto drop-shadow-xl" priority />
                        </div>

                        {/* iPhone */}
                        <div className="absolute top-[50%] -left-[3%] w-[20%] z-30 hover:translate-y-2 transition-transform duration-500 delay-150 will-change-transform">
                            <Image src="/Letimg/iPhone 12 _ 12 Pro.svg" alt="iPhone" width={200} height={400} className="w-full h-auto drop-shadow-lg" priority />
                        </div>

                        {/* Bugman */}
                        <div className="absolute top-[25%] right-[-5%] lg:right-[-5%] w-[35%] z-30 hover:translate-y-2 transition-transform duration-500 delay-200 will-change-transform origin-bottom">
                            <Image src="/Letimg/Queue-man-img.svg" alt="Bugman" width={400} height={600} className="w-full h-auto" priority />
                        </div>

                    </div>

                    {/* 2. ABOUT LE TRAMWAY WEBSITE */}
                    <div className="relative w-full pb-16 sm:pb-20 pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center">

                            {/* OVERVIEW Watermark */}
                            <div className="w-full text-center text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap pointer-events-none select-none leading-none tracking-tight overflow-hidden">
                                OVERVIEW
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black mb-4 sm:mb-6 -mt-[30px] sm:-mt-[45px] md:-mt-[60px]">
                                About Queue Management System
                            </h2>
                            <p className="text-[#010F14] leading-relaxed mb-10 text-sm sm:text-base md:text-lg max-w-7xl">
                                QMS is a smart SaaS-based Queue Management System designed for banks, hospitals, clinics, and service centers to reduce long waiting lines and improve customer flow. The platform uses digital token generation through kiosks and mobile apps, allowing customers to track queue status in real time without standing in physical queues.
                            </p>
                            <p className="text-[#010F14] leading-relaxed mb-10 text-sm sm:text-base md:text-lg max-w-7xl">
                                The system includes a kiosk interface, admin panel, super admin dashboard, and mobile application for complete queue and service management. Administrators can manage counters, staff, departments, and token flow efficiently, while super admins control branches, users, and analytics. QMS delivers a faster, organized, and more convenient customer service experience.
                            </p>

                            {/* Stat Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-30">
                                <div className="flex gap-4 items-start justify-start">
                                    <img src="/caseimg/About-img1.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                    <div className="text-left">
                                        <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Industry</h4>
                                        <p className="text-black text-lg font-medium">SaaS Project</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start justify-start">
                                    <img src="/caseimg/About-img2.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                    <div className="text-left">
                                        <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Platform</h4>
                                        <p className="text-black text-lg font-medium">Andriod & Kiosk System</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start justify-start">
                                    <img src="/caseimg/About-img3.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                                    <div className="text-left">
                                        <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Duration</h4>
                                        <p className="text-black text-lg font-medium">7 Months</p>
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
                </section>


                {/* --- THE RESULTS SECTION --- */}
                <section className="w-full bg-[#9C162E] py-6 md:py-15 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 md:mb-16 text-center md:text-left">The Results</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                            {[
                                { icon: "/images/downloadicon.svg", stat: "600+", label: "Revenue Generated" },
                                { icon: "/Letimg/Frame387.svg", stat: "500+", label: "Users" },
                                { icon: "/Letimg/Reviews.svg", stat: "300+", label: "Growth Rate" },
                                { icon: "/Letimg/Starimg.svg", stat: "4.2", label: "Increased User Engagement" },
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
                        OPPORTUNITIES AWAIT
                    </div>
                    <div className="max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 md:mb-8 text-center">
                            Opportunities await
                        </h2>

                        {/* Central Image with Glow */}
                        <div className="relative w-full hover:translate-y-2 transition-transform duration-500 will-change-transform max-w-[1600px] mx-auto -mt-10 md:-mt-20">
                            {/*pcimg*/}
                            <img src="/Letimg/Queue-Opportunities-img.svg" alt="" width={500} height={500} className='w-[100%]' />
                        </div>

                        {/* 2x2 Grid */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl flex  justify-center shrink-0">
                                    <img src="/Letimg/Opportunities-imgblack.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base text-black  leading-relaxed">
                                        Eliminate long physical waiting lines using intelligent digital token generation, automated queue handling, and real-time customer flow management designed for banks, hospitals, and high-traffic service environments.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl flex  justify-center shrink-0 transition-colors duration-300">
                                    <img src="/Letimg/Opportunities-imgblack.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base text-black leading-relaxed">
                                        Improve overall customer experience by providing faster service processing, organized queue operations, reduced waiting frustration, and smooth interaction across hospitals, banks, clinics, and customer service centers.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl flex justify-center shrink-0 transition-colors duration-300">
                                    <img src="/Letimg/Opportunities-imgblack.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base text-black leading-relaxed">
                                        Monitor queue activity, customer waiting time, counter performance, staff productivity, and operational efficiency through centralized dashboards with real-time analytics, reporting tools, and performance tracking capabilities.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl flex justify-center shrink-0  transition-colors duration-300">
                                    <img src="/Letimg/Opportunities-imgblack.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base text-black leading-relaxed">
                                        Enable seamless customer engagement through integrated kiosks, mobile applications, digital displays, and admin management systems that create a fully connected and efficient queue management ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OUR BEST SOLUTIONS */}
                <section className="w-full py-20 md:py-32 bg-gradient-to-br from-[#1E2541] via-[#35254A] to-[#601A33] overflow-hidden text-white relative">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>

                    <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                        {/* Watermark */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-10 md:-mt-20">
                            SOLUTIONS
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Left Image Graphic */}
                            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                                <div className="w-full max-w-[600px] relative transition-transform hover:-translate-y-2 duration-500">
                                    <Image src="/Letimg/Queue-solution-img.svg" alt="App Solution" width={700} height={700} className="w-full h-auto drop-shadow-2xl" />
                                </div>
                            </div>

                            {/* Right List Content */}
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center lg:text-left">Our Best Solutions</h2>
                                <div className="space-y-8">
                                    {[
                                        { desc: "Smart kiosk-based ticket generation system designed to automate customer queue handling efficiently while reducing waiting time and improving service experiences." },
                                        { desc: "Advanced admin and super admin dashboards for managing branches, counters, departments, staff operations, customer flow, and analytics centrally.." },
                                        { desc: "Real-time queue tracking and notification system allowing customers to monitor token progress remotely through mobile applications and digital displays." },
                                        { desc: "Scalable SaaS architecture with web, mobile, and kiosk integration built for banks, hospitals, enterprises, and multi-branch operational environments." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 group">
                                            <div className="w-12 h-12 rounded-xl flex ">
                                                <img src="/Letimg/Opportunities-imgwhite.svg" alt="icon" className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm md:text-base leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. ESSENTIAL HIGHLIGHTS */}
                <Highlights />

                {/* 7. TECHNOLOGY STACK */}
                <Technology />

                <Designing1 />

                {/* 8. GLIMPSES OF APP UI SCREENS */}
                <section className="w-full py-20 md:py-32 text-center bg-white">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <div className="relative mb-20">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                                UI SCREENS
                            </div>
                            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-[#0f172a]">
                                Glimpses of App UI Screens
                            </h2>
                        </div>

                        <div className="relative max-w-[1000px] mx-auto group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#32B9E9] to-[#9C162E] rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-[2rem] overflow-hidden bg-white">
                                <Image
                                    src="/Letimg/381127576_11472844 copy 3.svg"
                                    alt="Glimpses of App UI Screens"
                                    width={1000}
                                    height={800}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. OUR PROJECTS */}
                <OurProjectsSection />

                {/* 9. COMPANIES WHO LOVED OUR WORK */}
                <CompaniesLove />

            </div>
            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
