import React from "react";
import Image from "next/image";
import {
    CheckCircle2,
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
} from "lucide-react";
import Highlights from "./HIghtlights";
import Claim360WebApp from "./360webapp";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import Designing from "../Goalkick/Designing";

export default function CRMcasePage() {
    return (
        <>
            <div className="font-THICCCBOI text-slate-800 min-h-screen w-full overflow-x-hidden">
                <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
                    <section className="relative w-full h-[700px] flex items-center justify-center">
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/caseimg/1110327_Players_Soccer_3840x2160.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark Overlay */}
                        </div>

                        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                            {/* Logo Badge */}
                            <div className="mb-6 w-16 h-16 rounded-lg  flex items-center justify-center overflow-hidden">
                                <Image src="/Letimg/claimlogo.svg" alt="Goalkick Logo" width={100} height={100} className="object-contain" />
                            </div>

                            <h1 className=" max-w-7xl mx-auto px-4 text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-white leading-tight mb-4">
                                Claim 360 – Your All-in-One CRM Web Application for Seamless Client Management
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 max-w-6xl text-center">
                                Claim360 is a comprehensive web app designed to simplify home insurance claims after natural disasters. It streamlines every step — from reporting damage to final settlement — ensuring speed, transparency, and peace of mind. When disaster strikes, Claim360 helps homeowners recover faster.                        </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <p className="text-white/80 mr-2">Available on Android and iOS</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mt-4 mb-4">
                                <button className="flex justify-center items-center gap-2 bg-black hover:bg-gray-900 border border-white/20 text-white px-5 py-2.5 rounded-lg transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">
                                    <Apple className="w-6 h-6" />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] text-gray-300">Download on the</span>
                                        <span className="text-[15px] font-semibold">App Store</span>
                                    </div>
                                </button>
                                <button className="flex justify-center items-center gap-2 bg-black hover:bg-gray-900 border border-white/20 text-white px-5 py-2.5 rounded-lg transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">
                                    <PlayCircle className="w-6 h-6" />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] text-gray-300">GET IT ON</span>
                                        <span className="text-[15px] font-semibold">Google Play</span>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <p
                                    className="text-[#32B9E9] font-medium underline text-center text-sm sm:text-base lg:text-lg cursor-pointer hover:text-[#2aa8d6] transition-colors"
                                >
                                    Have a project in mind?
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Hero Devices Mockup Image Placeholder */}
                    <div className="flex items-center justify-center px-4 max-w-5xl mx-auto mt-[80px] mb-[80px]">
                        <img src="/images/img1.svg" alt="img" className="w-full h-auto mt-10" />
                    </div>

                    {/* ABOUT SECTION inside Hero container */}
                    <div className="max-w-6xl mx-auto  mt-[50px] mb-[80px] pb-12">
                        <h2 className="text-[32px] md:text-[48px] font-bold text-center text-slate-900 mt-10">About Claim 360 WebApp</h2>
                        <p className="text-[16px] md:text-[18px] text-slate-600 mb-10 text-center leading-relaxed">
                            Claim360 is a web application designed to simplify and automate home insurance claims during natural disasters. With features like email parsing, smart routing, manual claim entry, and an integrated CRM, it ensures faster processing and better transparency. The platform bridges the gap between insurers and homeowners, turning a stressful process into a smooth digital experience.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            <div className="flex flex-row gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                <img src="/images/Technology.svg" alt="img" className="w-10 h-10 text-blue-600" />
                                <h3 className="text-[16px] font-semibold text-slate-900">Industry <br />Social App</h3>
                            </div>
                            <div className="flex flex-row gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                <img src="/images/Technology1.svg" alt="img" className="w-10 h-10 text-green-600" />
                                <h3 className="text-[16px] font-semibold text-slate-900">Development Time 4months</h3>
                            </div>
                            <div className="flex flex-row gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                <img src="/images/Technology2.svg" alt="img" className="w-10 h-10 text-amber-500" />
                                <h3 className="text-[16px] font-semibold text-slate-900">OS Platform<br />Andriod & IOS</h3>
                            </div>
                            <div className="flex flex-row gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                <img src="/images/Technology3.svg" alt="img" className="w-10 h-10 text-purple-600" />
                                <h3 className="text-[16px] font-semibold text-slate-900">Services<br />Design & Development</h3>
                            </div>
                        </div>
                    </div>


                    {/* --- THE RESULTS SECTION --- */}
                    <section className="w-full bg-gradient-to-r from-[#1E293B] via-[#471536] to-[#7F1D1D] text-white py-10 px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-[32px] md:text-[48px] font-bold mb-10 text-center md:text-left md:ml-8">The Results</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
                                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                        <img src="/images/downloadicon.svg" alt="img" />
                                        <span className="text-3xl md:text-5xl font-bold tracking-tighter">600+</span>
                                    </div>
                                    <p className="text-[14px] md:text-[16px] text-white/70">Downloads</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
                                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                        <img src="/images/downloadicon.svg" alt="img" />
                                        <span className="text-3xl md:text-5xl font-bold tracking-tighter">500+</span>
                                    </div>
                                    <p className="text-[14px] md:text-[16px] text-white/70">Users</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left border-r-0 md:border-r border-white/10">
                                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                        <img src="/images/downloadicon.svg" alt="img" />
                                        <span className="text-3xl md:text-5xl font-bold tracking-tighter">300+</span>
                                    </div>
                                    <p className="text-[14px] md:text-[16px] text-white/70">Positive Reviews</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left">
                                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                        <img src="/images/downloadicon.svg" alt="img" />
                                        <span className="text-3xl md:text-5xl font-bold tracking-tighter">4.2</span>
                                    </div>
                                    <p className="text-[14px] md:text-[16px] text-white/70">Rating</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* --- OPPORTUNITIES AWAIT SECTION --- */}
                    <section className=" mt-[80px] mb-[80px] max-w-7xl mx-auto">
                        <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-12 text-center lg:text-left">Opportunities await</h2>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                            {/* Left Content */}
                            <div className="lg:w-1/2 space-y-8 lg:space-y-20 max-w-[600px]">
                                <div className="flex gap-4 ">
                                    <img src="/Letimg/family_group.svg" alt="img" className="w-6 h-6 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-[16px] font-bold text-slate-900 mb-2">Digital Transformation in Insurance:-</h3>
                                        <p className="text-[16px] text-slate-600 leading-relaxed">
                                            The insurance sector is still transitioning from paper-based systems to digital workflows. Claim360 can become a flagship platform for digital claim management, reducing manual work and improving efficiency for insurers.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0" style={{ color: "black" }}>
                                        <img src="/Letimg/family_group.svg" alt="img" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-bold text-slate-900 mb-2">Enhanced Customer Experience:-</h3>
                                        <p className="text-[16px] text-slate-600 leading-relaxed">By offering transparency, instant updates, and guided claim filing. Claim360 positions itself as a customer-centric solution — a major differentiator in an industry known for slow, confusing processes.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <img src="/Letimg/family_group.svg" alt="img" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-bold text-slate-900 mb-2">Integration with Smart Technologies:-</h3>
                                        <p className="text-[16px] text-slate-600 leading-relaxed">There's an opportunity to integrate AI and IoT features — such as automated damage detection using photos or drone footage, or predictive analytics to assess claim risks. These innovations can significantly improve claim accuracy and speed.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Illustration Placeholder */}
                            <div className="lg:w-1/2 w-full">
                                <div className="rounded-2xl flex items-center justify-center w-full">
                                    <img src="/images/phoneimg.svg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- OUR BEST SOLUTIONS SECTION --- */}
                    <section className="w-full bg-gradient-to-br from-[#1E3A8A] via-[#1E1B4B] to-[#7F1D1D] text-white pb-10 pt-10 overflow-hidden relative">

                        <div className="max-w-6xl px-4 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                            {/* Left Side UI Mockups */}
                            <div className="lg:w-1/2 w-full flex justify-center items-center relative min-h-[300px] md:min-h-[500px] px-4 md:px-0">
                                {/* Gmail Integration Mockup */}
                                <img src="/images/gmail-icon.svg" alt="img" className="w-full max-w-[400px] md:max-w-[600px] md:w-[120%] h-auto object-contain transform origin-center lg:-translate-x-12" />
                            </div>

                            {/* Right Side Info */}
                            <div className="lg:w-1/2 mt-2">
                                <h2 className="text-[32px] md:text-[48px] font-bold mb-10 text-white text-center lg:text-left">Our Best Solutions</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <img src="/images/family_group.svg" alt="img" className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                        <p className="text-[16px] text-white/90 leading-relaxed"><span className="font-bold text-white">Email Parsing:-</span> Automatically extract claim details from incoming emails to create new cases instantly. This feature reduces manual data entry, minimizes human error, and ensures no claim request is ever missed.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <img src="/images/family_group.svg" alt="img" className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                        <p className="text-[16px] text-white/90 leading-relaxed"><span className="font-bold text-white">Smart Routing System:-</span> Incoming claims are intelligently routed to the right department or agent based on region, claim type, or priority level. It saves time and ensures faster response and resolution.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <img src="/images/family_group.svg" alt="img" className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                        <p className="text-[16px] text-white/90 leading-relaxed"><span className="font-bold text-white">Manual Claim Entry:-</span> Agents can manually add claims through a simple, guided interface — useful for offline requests or verbal submissions. This ensures every claim, regardless of source, is recorded and tracked digitally.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <img src="/images/family_group.svg" alt="img" className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                        <p className="text-[16px] text-white/90 leading-relaxed"><span className="font-bold text-white">Integrated CRM Dashboard:-</span> Claim360 comes with a built-in CRM system for managing client data, communication history, and claim interactions. It helps insurers build stronger relationships with policyholders through organized and personalized service.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <img src="/images/family_group.svg" alt="img" className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                        <p className="text-[16px] text-white/90 leading-relaxed"><span className="font-bold text-white">Real-Time Claim Tracking:-</span> Both insurers and policyholders can monitor claim progress through visual timelines and instant status updates — improving transparency and trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <Highlights />
                    <Claim360WebApp />
                    <Designing />
                    {/* 8. GLIMPSES OF APP UI SCREENS */}
                    <section className="w-full  mt-[80px] mb-[80px] px-4 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0f172a] mb-10 md:mb-16">
                            Glimpses of App UI Screens
                        </h2>
                        <div className="max-w-[1200px] mx-auto flex justify-center">
                            <div className="w-full max-w-[1000px] rounded-3xl overflow-hidden">
                                {/* Letimg/Frame 241.svg */}
                                <Image
                                    src="/Letimg/381127576_11472844 copy 3.svg"
                                    alt="Glimpses of App UI Screens"
                                    width={1000}
                                    height={800}
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
        </>
    );
}
