"use client";
import { useState, useEffect } from 'react';
import React from "react";
import Image from "next/image";
import Technology from '../../../portfolio/Goalkick/technology';
import {
    Apple,
    PlayCircle,
} from "lucide-react";
import Highlights from "./HIghtlights";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import ConsultationModal from "@/components/ConsultationModal";
import Designing1 from '@/components/Designing1';
import { motion } from 'framer-motion';



export default function CRMcasePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="font-THICCCBOI text-slate-800 min-h-screen w-full overflow-x-hidden">
                <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
                    <section className="relative w-full h-[900px] md:h-[700px] flex items-center justify-center pt-24 md:pt-0">
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/caseimg/vecteezy.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/70 z-10"></div>
                        </div>

                        <motion.div
                            className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Logo Badge */}
                            <div className="w-24 md:w-32 h-auto rounded-xl flex items-center justify-center overflow-hidden">
                                <Image src="/Letimg/claimlogo.svg" alt="Claim 360 Logo" width={120} height={120} className="object-contain" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-8xl">
                                Claim 360 – Your All-in-One CRM for Seamless Client Management
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-7xl text-center leading-relaxed">
                                Claim360 is a comprehensive web application designed to simplify insurance claims after natural disasters. From reporting damage to final settlement — ensuring speed, transparency, and peace of mind.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                                <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]" />
                                    <Apple className="w-7 h-7 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col items-start leading-none text-left">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Download on</span>
                                        <span className="text-base font-semibold">App Store</span>
                                    </div>
                                </button>
                                <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]" />
                                    <PlayCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col items-start leading-none text-left">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Get it on</span>
                                        <span className="text-base font-semibold">Google Play</span>
                                    </div>
                                </button>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-4 text-[#32B9E9] font-bold text-lg md:text-xl underline underline-offset-8 hover:text-[#2aa8d6] transition-colors"
                            >
                                Have a project in mind?
                            </button>
                        </motion.div>

                    </section>
                    {/* Hero Devices Mockup Image Placeholder */}
                    <motion.div
                        className="flex items-center justify-center px-4 max-w-5xl mx-auto mt-[80px] mb-[80px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]">
                            <img src="/images/img1.svg" alt="img" className="w-full h-auto mt-10" />
                        </div>
                    </motion.div>

                    {/* ABOUT SECTION */}
                    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
                        <div className="max-w-6xl mx-auto relative z-10 text-center">
                            {/* OVERVIEW Watermark */}
                            <motion.div
                                className="absolute -top-12 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                OVERVIEW
                            </motion.div>

                            <motion.div
                                className="relative z-10 mb-16"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                                    About Claim 360 WebApp
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                                    Claim360 is a web application designed to simplify and automate home insurance claims during natural disasters. With features like email parsing, smart routing, and manual entry, it ensures faster processing and total transparency.
                                </p>
                            </motion.div>

                            {/* Stat Grid */}
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.1 }
                                    }
                                }}
                            >
                                {[
                                    { icon: "/caseimg/About-img1.svg", label: "Industry", value: "Sports & Social" },
                                    { icon: "/caseimg/About-img2.svg", label: "Platform", value: "PostgreSQL (AWS)" },
                                    { icon: "/caseimg/About-img3.svg", label: "Duration", value: "4 Months" },
                                    { icon: "/caseimg/About-img4.svg", label: "Service", value: "Design & Dev" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                        }}
                                        className="bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(50,185,233,0.15)] border-2 border-transparent hover:border-[#32B9E9]/30 transition-all duration-300 flex items-center gap-4 group hover:-translate-y-2 cursor-pointer"
                                    >
                                        <div className="w-14 h-14 bg-gray-50 group-hover:bg-[#E8F7FC] rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                                            <img src={stat.icon} className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300" alt={stat.label} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 group-hover:text-[#32B9E9] transition-colors">{stat.label}</h4>
                                            <p className="text-gray-900 text-lg font-bold">{stat.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>


                    {/* ─────────────────────────────────────────────
                   3. THE RESULTS BANNER
               ───────────────────────────────────────────── */}
                    {/* --- THE RESULTS BANNER --- */}
                    <section className="relative w-full bg-gradient-to-br from-[#0a3a87] via-[#0D57C7] to-[#126deb] py-6 md:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/polygon.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                        <div className="max-w-[1200px] mx-auto relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 md:mb-16 text-center md:text-left">The Results</h2>
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
                                    { icon: "/images/downloadicon.svg", stat: "600+", label: "Downloads" },
                                    { icon: "/Letimg/Frame387.svg", stat: "500+", label: "Users" },
                                    { icon: "/Letimg/Reviews.svg", stat: "300+", label: "Positive Reviews" },
                                    { icon: "/Letimg/Starimg.svg", stat: "4.2", label: "Average rating" },
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


                    {/* --- OPPORTUNITIES AWAIT SECTION --- */}
                    <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden">
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
                                        { title: "Digital Transformation in Insurance:-", desc: "The insurance sector is still transitioning from paper-based systems to digital workflows. Claim360 can become a flagship platform for digital claim management, reducing manual work and improving efficiency for insurers." },
                                        { title: "Enhanced Customer Experience:-", desc: "By offering transparency, instant updates, and guided claim filing, Claim360 positions itself as a customer-centric solution — a major differentiator in an industry known for slow, confusing processes." },
                                        { title: "Integration with Smart Technologies:-", desc: "There’s an opportunity to integrate AI and IoT features — such as automated damage detection using photos or drone footage, or predictive analytics to assess claim risks. These innovations can significantly improve claim accuracy and speed." }
                                    ].map((item, i) => (
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
                                                    <img src="/Letimg/family_group.svg" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#32B9E9] transition-colors">{item.title}</h3>
                                                <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition-colors">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Right Illustration */}
                                <motion.div
                                    className="lg:w-1/2 w-full flex justify-center"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="relative w-full max-w-[480px]">
                                        <div className="absolute inset-0 bg-[#32B9E9]/20 blur-[100px] rounded-full -z-10" />
                                        <img src="/images/phoneimg.svg" alt="App Preview" className="w-full h-auto drop-shadow-2xl hover:-translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- OUR BEST SOLUTIONS SECTION --- */}
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

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                            <motion.h2
                                className="text-3xl md:text-5xl font-bold mb-16 md:mb-24 text-center text-white"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Our Best Solutions
                            </motion.h2>

                            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
                                {/* Left Side Mockup */}
                                <motion.div
                                    className="lg:w-1/2 w-full flex justify-center items-center"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="relative w-full max-w-[700px]">
                                        <div className="absolute inset-0 bg-[#32B9E9]/20 blur-[100px] rounded-full -z-10" />
                                        <img src="/images/gmail-icon.svg" alt="Email Parsing Mockup" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(50,185,233,0.3)] hover:-translate-y-4 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                                    </div>
                                </motion.div>

                                {/* Right Side Features */}
                                <motion.div
                                    className="lg:w-1/2 space-y-4 md:space-y-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-60px" }}
                                    variants={{
                                        hidden: {},
                                        visible: { transition: { staggerChildren: 0.12 } }
                                    }}
                                >
                                    {[
                                        { title: "Email Parsing:- ", desc: "Automatically extract claim details from incoming emails to create new cases instantly. This feature reduces manual data entry, minimizes human error, and ensures no claim request is ever missed." },
                                        { title: "Smart Routing System:-", desc: " Incoming claims are intelligently routed to the right department or agent based on region, claim type, or priority level. It saves time and ensures faster response and resolution." },
                                        { title: "Manual Claim Entry:-", desc: " Agents can manually add claims through a simple, guided interface — useful for offline requests or verbal submissions. This ensures every claim, regardless of source, is recorded and tracked digitally." },
                                        { title: "Integrated CRM Dashboard:- ", desc: "Claim360 comes with a built-in CRM system for managing client data, communication history, and claim interactions. It helps insurers build stronger relationships with policyholders through organized and personalized service" },
                                        { title: "Real-Time Claim Tracking:- ", desc: "Both insurers and policyholders can monitor claim progress through visual timelines and instant status updates — improving transparency and trust." },
                                    ].map((sol, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, x: 30 },
                                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                            }}
                                            className="flex gap-5 group hover:bg-white/10 p-5 md:p-6 rounded-2xl hover:border-[#32B9E9]/50 transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <div className="shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#32B9E9]/20 flex items-center justify-center transition-colors duration-300">
                                                    <img src="/caseimg/family_group_white.svg" alt="check" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#32B9E9] transition-colors">{sol.title}</h3>
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-100 transition-colors">{sol.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <Highlights />
                    <Technology />
                    <Designing1 />
                    {/* 8. GLIMPSES OF APP UI SCREENS */}
                    <section className="relative w-full py-20 md:py-32 px-4 text-center overflow-hidden">
                        {/* Watermark */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            UI SCREENS
                        </motion.div>

                        <motion.h2
                            className="relative z-10 text-3xl md:text-5xl font-bold text-[#0f172a] mb-12 md:mb-20"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Glimpses of App UI Screens
                        </motion.h2>

                        <motion.div
                            className="max-w-6xl mx-auto flex justify-center relative z-10"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="w-full max-w-[1000px] rounded-3xl overflow-hidden transition-transform duration-700 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(50,185,233,0.15)] bg-white p-2 md:p-4 border border-gray-100">
                                <div className="relative rounded-2xl overflow-hidden bg-gray-50">
                                    <Image
                                        src="/Letimg/381127576_11472844 copy 3.svg"
                                        alt="Claim 360 UI Screens"
                                        width={1200}
                                        height={900}
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
                                            <source src="/Letimg/360-video.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                    <OurProjectsSection />
                    <CompaniesLove />
                </div >
            </div>
            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
