"use client";
import { useState, useEffect } from 'react';
import React from "react";
import Image from "next/image";
import Technology from '../Goalkick/technology';
import {
    CheckCircle2,
    Building2,
    MapPin,
    Settings,
    Activity,
    ArrowUpRight,
    ArrowRight,
    Users,
    Zap,
    Target,
    BarChart,
    PieChart,
    LineChart,
    Check,
    ChevronDown,
    MonitorSmartphone,
    Apple,
    PlayCircle,
    Clock,
    Briefcase,
} from "lucide-react";
import Highlights from "./HIghtlights";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import Designing from "../Goalkick/Designing";
import ConsultationModal from "@/components/ConsultationModal";



export default function CRMcasePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="font-THICCCBOI text-slate-800 min-h-screen w-full overflow-x-hidden">
                <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
                    <section className="relative w-full min-h-[500px] md:h-[700px] flex items-center justify-center pt-24 md:pt-0">
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

                        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center gap-6">
                            {/* Logo Badge */}
                            <div className="w-24 md:w-32 h-auto rounded-xl flex items-center justify-center overflow-hidden">
                                <Image src="/Letimg/claimlogo.svg" alt="Claim 360 Logo" width={120} height={120} className="object-contain" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl">
                                Claim 360 – Your All-in-One CRM for Seamless Client Management
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl text-center leading-relaxed">
                                Claim360 is a comprehensive web application designed to simplify insurance claims after natural disasters. From reporting damage to final settlement — ensuring speed, transparency, and peace of mind.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto group">
                                    <Apple className="w-7 h-7 group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col items-start leading-none text-left">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Download on</span>
                                        <span className="text-base font-semibold">App Store</span>
                                    </div>
                                </button>
                                <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto group">
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
                        </div>
                    </section>
                    {/* Hero Devices Mockup Image Placeholder */}
                    <div className="flex items-center justify-center px-4 max-w-5xl mx-auto mt-[80px] mb-[80px] hover:scale-105 transition-transform duration-500">
                        <img src="/images/img1.svg" alt="img" className="w-full h-auto mt-10" />
                    </div>

                    {/* ABOUT SECTION */}
                    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
                        <div className="max-w-6xl mx-auto relative z-10 text-center">
                            {/* OVERVIEW Watermark */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                                OVERVIEW
                            </div>
                            
                            <div className="relative z-10 mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                                    About Claim 360 WebApp
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    Claim360 is a web application designed to simplify and automate home insurance claims during natural disasters. With features like email parsing, smart routing, and manual entry, it ensures faster processing and total transparency.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left border-t border-gray-100 pt-16">
                                <div className="flex gap-4 items-start justify-center sm:justify-start group">
                                    <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#32B9E9] transition-colors duration-300">
                                        <Building2 className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Industry</h4>
                                        <p className="text-slate-900 font-semibold text-lg">InsurTech</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start justify-center sm:justify-start group">
                                    <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#32B9E9] transition-colors duration-300">
                                        <MapPin className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">DB Platform</h4>
                                        <p className="text-slate-900 font-semibold text-lg">PostgreSQL (AWS)</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start justify-center sm:justify-start group">
                                    <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#32B9E9] transition-colors duration-300">
                                        <Clock className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Timeline</h4>
                                        <p className="text-slate-900 font-semibold text-lg">4 Months</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start justify-center sm:justify-start group">
                                    <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#32B9E9] transition-colors duration-300">
                                        <Briefcase className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Service</h4>
                                        <p className="text-slate-900 font-semibold text-lg">Product Dev</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* ─────────────────────────────────────────────
                   3. THE RESULTS BANNER
               ───────────────────────────────────────────── */}
                    {/* --- THE RESULTS BANNER --- */}
                    <section className="w-full bg-[#0D57C7] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-[1200px] mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-20 text-center lg:text-left">The Results</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
                                {[
                                    { icon: "/images/downloadicon.svg", stat: "600+", label: "Downloads" },
                                    { icon: "/Letimg/Frame387.svg", stat: "500+", label: "Users" },
                                    { icon: "/Letimg/Reviews.svg", stat: "300+", label: "Premium Members" },
                                    { icon: "/Letimg/Starimg.svg", stat: "4.2", label: "Average rating" },
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


                    {/* --- OPPORTUNITIES AWAIT SECTION --- */}
                    <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden">
                        {/* Watermark */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                            OPPORTUNITIES
                        </div>

                        <div className="max-w-7xl mx-auto relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-black text-center lg:text-left mb-16 md:mb-24">
                                Opportunities await
                            </h2>

                            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
                                {/* Left Content */}
                                <div className="lg:w-1/2 space-y-8 md:space-y-12">
                                    <div className="flex gap-5 group">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#32B9E9] transition-colors duration-300">
                                            <Activity className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-black mb-3">Digital Transformation</h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                Claim360 becomes a flagship platform for digital claim management, reducing manual work and improving efficiency for insurers transitioning from paper-based systems.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 group">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#32B9E9] transition-colors duration-300">
                                            <Users className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-black mb-3">Customer Experience</h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                By offering transparency and guided filing, Claim360 positions itself as a customer-centric solution in an industry known for slow processes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 group">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#32B9E9] transition-colors duration-300">
                                            <Zap className="w-6 h-6 text-gray-700 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-black mb-3">Smart Technologies</h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                Integration with AI for automated damage detection using photos or drone footage, significantly improving claim accuracy and speed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Illustration */}
                                <div className="lg:w-1/2 w-full flex justify-center">
                                    <div className="relative w-full max-w-[480px] transition-all duration-500 hover:scale-[1.02]">
                                        <img src="/images/phoneimg.svg" alt="App Preview" className="w-full h-auto drop-shadow-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- OUR BEST SOLUTIONS SECTION --- */}
                    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#1E3A8A] via-[#1E1B4B] to-[#7F1D1D] text-white overflow-hidden">
                        {/* Watermark */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-white/5 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                            SOLUTIONS
                        </div>

                        <div className="max-w-7xl mx-auto px-4 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-16 md:mb-24 text-center">Our Best Solutions</h2>
                            
                            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
                                {/* Left Side Mockup */}
                                <div className="lg:w-1/2 w-full flex justify-center items-center">
                                    <div className="relative w-full max-w-[500px] transition-transform duration-500 hover:scale-[1.03]">
                                        <img src="/images/gmail-icon.svg" alt="Email Parsing Mockup" className="w-full h-auto drop-shadow-2xl" />
                                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
                                    </div>
                                </div>

                                {/* Right Side Features */}
                                <div className="lg:w-1/2 space-y-8 md:space-y-12">
                                    {[
                                        { title: "Email Parsing", desc: "Automatically extract claim details from incoming emails to create new cases instantly, reducing manual data entry." },
                                        { title: "Smart Routing", desc: "Intelligently route claims to the right department based on region, type, or priority level for faster resolution." },
                                        { title: "Manual Claim Entry", desc: "Agents can manually add claims through a simple interface, ensuring every request is recorded digitally." },
                                        { title: "Integrated CRM", desc: "Built-in system for managing client data, communication history, and interaction tracking." },
                                        { title: "Real-Time Tracking", desc: "Monitor claim progress through visual timelines and instant updates — improving transparency." },
                                    ].map((sol, i) => (
                                        <div key={i} className="flex gap-5 group">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#32B9E9] transition-colors">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                                                <p className="text-white/70 text-sm md:text-base leading-relaxed">{sol.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Highlights />
                    <Technology />
                    <Designing />
                    {/* 8. GLIMPSES OF APP UI SCREENS */}
                    <section className="relative w-full py-20 md:py-32 px-4 text-center overflow-hidden">
                        {/* Watermark */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none">
                            UI SCREENS
                        </div>
                        
                        <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-[#0f172a] mb-12 md:mb-20">
                            Glimpses of App UI Screens
                        </h2>

                        <div className="max-w-6xl mx-auto flex justify-center relative z-10">
                            <div className="w-full max-w-[1000px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]">
                                <Image
                                    src="/Letimg/381127576_11472844 copy 3.svg"
                                    alt="Claim 360 UI Screens"
                                    width={1200}
                                    height={900}
                                    priority
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </div>
                        </div>
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
