"use client";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
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

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center gap-4 px-3 sm:px-5 lg:px-7 md:-mt-10">
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
                    </motion.div>
                </section>
                {/* About */}
                <section className="relative w-full mt-[80px] mb-[40px] overflow-x-hidden">
                    {/* Background light glow */}
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#b8deff]/30 blur-[150px] rounded-full z-0 pointer-events-none"></div>

                    {/* ── MOBILE: Single centered image ── */}
                    <div className="sm:hidden relative w-full px-3 sm:px-5 lg:px-7 mt-8 z-10">
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
                    <div className="hidden sm:block w-full px-2 sm:px-4 lg:px-7 mt-8 mb-16 lg:mt-12">
                        <div className="relative max-w-7xl mx-auto aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] z-10">

                            {/* Desktop (bigpc) */}
                            <div className="absolute top-[0%] left-[20%] w-[60%] z-10 hover:translate-y-2 transition-transform duration-500 delay-75 will-change-transform">
                                <Image src="/Letimg/Queue-about-img.svg" alt="Desktop" width={1000} height={800} className="w-full h-auto drop-shadow-2xl" priority />
                            </div>

                            {/* iPad */}
                            <div className="absolute top-[10%] left-[5%] w-[25%] z-20 hover:translate-y-2 transition-transform duration-500 delay-75 will-change-transform">
                                <Image src="/Letimg/IPad.svg" alt="iPad" width={300} height={200} className="w-full h-auto drop-shadow-xl" priority />
                            </div>

                            {/* Laptop */}
                            <div className="absolute top-[60%] left-[54%] w-[46%] z-20 hover:translate-y-2 transition-transform duration-500 delay-100 will-change-transform">
                                <Image src="/Letimg/Queue-laptop-img.svg" alt="Laptop" width={800} height={600} className="w-full h-auto drop-shadow-xl" priority />
                            </div>

                            {/* iPhone */}
                            <div className="absolute top-[50%] -left-6 w-[18%] z-30 hover:translate-y-2 transition-transform duration-500 delay-150 will-change-transform">
                                <Image src="/Letimg/iPhone 12 _ 12 Pro.svg" alt="iPhone" width={200} height={400} className="w-full h-auto drop-shadow-lg" priority />
                            </div>

                            {/* Bugman */}
                            <div className="absolute top-[25%] -right-12 w-[32%] z-30 hover:translate-y-2 transition-transform duration-500 delay-200 will-change-transform origin-bottom">
                                <Image src="/Letimg/Queue-man-img.svg" alt="Bugman" width={400} height={600} className="w-full h-auto" priority />
                            </div>

                        </div>
                    </div>

                    {/* 2. ABOUT LE TRAMWAY WEBSITE */}
                    <div className="relative w-full pb-16 sm:pb-20 pt-8 sm:pt-10 px-3 sm:px-5 lg:px-7">
                        <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-center">

                            {/* OVERVIEW Watermark */}
                            <div className="w-full text-center text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap pointer-events-none select-none leading-none tracking-tight overflow-hidden">
                                OVERVIEW
                            </div>

                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black mb-4 sm:mb-6 -mt-[30px] sm:-mt-[45px] md:-mt-[60px]">
                                About Queue Management System
                            </motion.h2>
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
                <section className="w-full bg-[#9C162E] py-6 md:py-15 px-3 sm:px-5 lg:px-7">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="text-3xl md:text-5xl font-bold text-white mb-10 md:mb-16 text-center md:text-left">The Results</motion.h2>
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12,
                                    },
                                },
                            }}
                        >
                            {[
                                { icon: "/images/downloadicon.svg", stat: "600+", label: "Revenue Generated" },
                                { icon: "/Letimg/Frame387.svg", stat: "500+", label: "Users" },
                                { icon: "/Letimg/Reviews.svg", stat: "300+", label: "Growth Rate" },
                                { icon: "/Letimg/Starimg.svg", stat: "4.2", label: "Increased User Engagement" },
                            ].map(({ icon, stat, label }) => (
                                <motion.div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group" variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } }}>
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shrink-0 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                        <img src={icon} alt={label} className="w-10 h-10 object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">{stat}</h3>
                                        <p className="text-white/70 text-sm md:text-base font-medium leading-tight">{label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 4. OPPORTUNITIES AWAIT */}
                <section className="relative w-full py-20 md:py-32 px-3 sm:px-5 lg:px-7 overflow-hidden">
                    {/* Watermark */}
                    <motion.div
                        className="absolute top-10 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        OPPORTUNITIES
                    </motion.div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-black text-center lg:text-left mb-16 md:mb-24"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Opportunities await
                        </motion.h2>

                        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
                            {/* Left Content */}
                            <motion.div
                                className="lg:w-1/2 space-y-6 md:space-y-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.15 } }
                                }}
                            >
                                {[
                                    "Eliminate long physical waiting lines using intelligent digital token generation, automated queue handling, and real-time customer flow management designed for banks, hospitals, and high-traffic service environments.",
                                    "Improve overall customer experience by providing faster service processing, organized queue operations, reduced waiting frustration, and smooth interaction across hospitals, banks, clinics, and customer service centers.",
                                    "Monitor queue activity, customer waiting time, counter performance, staff productivity, and operational efficiency through centralized dashboards with real-time analytics, reporting tools, and performance tracking capabilities.",
                                    "Enable seamless customer engagement through integrated kiosks, mobile applications, digital displays, and admin management systems that create a fully connected and efficient queue management ecosystem."
                                ].map((text, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: -30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                                        }}
                                        className="flex gap-5 group bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 hover:border-[#32B9E9]/30 hover:shadow-[0_8px_30px_rgba(50,185,233,0.1)] transition-all duration-300"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-[#E8F7FC] flex items-center justify-center transition-colors duration-300">
                                                <img src="/Letimg/Opportunities-imgblack.svg" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition-colors">
                                                {text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                className="lg:w-1/2 w-full flex justify-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="relative w-full max-w-[540px] hover:-translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                    <div className="absolute inset-0 bg-[#32B9E9]/20 blur-[100px] rounded-full -z-10" />
                                    <img src="/Letimg/Queue-Opportunities-img.svg" alt="" width={500} height={500} className='w-[100%] drop-shadow-2xl' />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. OUR BEST SOLUTIONS */}
                <section className="relative w-full py-8 md:py-12 bg-gradient-to-br from-[#0B1E4A] via-[#091535] to-[#120505] text-white overflow-hidden">
                    {/* Background mesh/grid pattern */}
                    <div className="absolute inset-0 bg-[url('/images/polygon.png')] opacity-10 mix-blend-overlay pointer-events-none" />

                    {/* Watermark */}
                    <motion.div
                        className="absolute top-10 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-white/5 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        SOLUTIONS
                    </motion.div>

                    <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold mb-16 md:mb-24 text-center text-white"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Our Best Solutions
                        </motion.h2>

                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Left Image Graphic */}
                            <motion.div
                                className="lg:w-1/2 w-full flex justify-center items-center order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="w-full max-w-[600px] relative hover:-translate-y-4 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                    <div className="absolute inset-0 bg-[#32B9E9]/20 blur-[100px] rounded-full -z-10" />
                                    <Image src="/Letimg/Queue-solution-img.svg" alt="App Solution" width={700} height={700} className="w-full h-auto drop-shadow-2xl" />
                                </div>
                            </motion.div>

                            {/* Right List Content */}
                            <motion.div
                                className="lg:w-1/2 space-y-4 md:space-y-6 order-1 lg:order-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.12 } }
                                }}
                            >
                                {[
                                    { desc: "Smart kiosk-based ticket generation system designed to automate customer queue handling efficiently while reducing waiting time and improving service experiences." },
                                    { desc: "Advanced admin and super admin dashboards for managing branches, counters, departments, staff operations, customer flow, and analytics centrally.." },
                                    { desc: "Real-time queue tracking and notification system allowing customers to monitor token progress remotely through mobile applications and digital displays." },
                                    { desc: "Scalable SaaS architecture with web, mobile, and kiosk integration built for banks, hospitals, enterprises, and multi-branch operational environments." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, x: 30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                        }}
                                        className="flex gap-5 group hover:bg-white/10 p-5 md:p-6 rounded-2xl hover:border-[#32B9E9]/50 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#32B9E9]/20 flex items-center justify-center transition-colors duration-300">
                                                <img src="/Letimg/Opportunities-imgwhite.svg" alt="icon" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-100 transition-colors">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
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
                    <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
                        <div className="relative mb-20">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                                UI SCREENS
                            </div>
                            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-[#0f172a]">
                                Glimpses of App UI Screens
                            </h2>
                        </div>

                        <div className="relative max-w-[1000px] mx-auto group">
                            <div className="relative rounded-[2rem] overflow-hidden bg-white">
                                <Image
                                    src="/Letimg/381127576_11472844 copy 3.svg"
                                    alt="Glimpses of App UI Screens"
                                    width={1000}
                                    height={800}
                                    priority
                                    className="w-full h-auto"
                                />
                                {/* Video overlay on laptop screen - adjust positioning percentages if needed */}
                                <div className="absolute top-[2.6%] left-[7%] w-[83.5%] h-[78.5%] z-20 bg-transparent rounded-sm md:rounded-md overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute top-0 left-0 w-full h-[106%] object-fill"
                                    >
                                        <source src="/Letimg/QMS-video.mp4" type="video/mp4" />
                                    </video>
                                </div>
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
