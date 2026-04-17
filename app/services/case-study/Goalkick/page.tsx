"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
   MapPin,
   Building2,
   Clock,
   Briefcase,
   Apple,
   PlayCircle,
} from "lucide-react";
import Highlights from "../CRMcase/HIghtlights";
import Designing from "./Designing";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import Technology from "./technology";
import ConsultationModal from "@/components/ConsultationModal";

export default function GoalkickCaseStudy() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <div className="w-full" style={{ backgroundImage: "url('/images/polygon.png')" }}>
            <div className="w-full font-THICCCBOI overflow-x-hidden max-w-[1600px] mx-auto">

               {/* ─────────────────────────────────────────────
                   1. HERO SECTION
               ───────────────────────────────────────────── */}
               <section className="relative w-full min-h-[560px] sm:min-h-[620px] md:h-[700px] flex items-center justify-center px-4">
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
                     <div className="absolute inset-0 bg-black/60 z-10" />
                  </div>

                  <div className="relative z-20 text-center w-full max-w-5xl mx-auto flex flex-col items-center gap-3 px-4">
                     {/* Logo */}
                     <div className="flex justify-center w-full mb-2 w-[118px] h-[100px]">
                        <img src="/Letimg/goallogo.svg" alt="Goalkick Logo" />
                     </div>

                     <h1 className="text-[60px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-[#FFFFFF] leading-tight">
                        Goalkick - Social App for Football Fans
                     </h1>
                     <p className="text-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF] max-w-7xl text-center">
                        The ultimate social network platform designed to connect, engage, and elevate the experience for football fans. It allows users to create groups, log matches, and chat seamlessly within a community-driven environment tailored to real fans.
                     </p>
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
                     {/* Have a project in mind? */}
                     <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-[#32B9E9] font-semibold text-base sm:text-lg underline cursor-pointer hover:text-[#2aa8d6] transition-colors"
                     >
                        Have a project in mind?
                     </button>
                  </div>
               </section>

               {/* ─────────────────────────────────────────────
                   2. ABOUT APP SECTION
               ───────────────────────────────────────────── */}
               <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
                  {/* Glow */}
                  <div className="absolute left-[-10%] top-[20%] w-[40%] h-[60%] bg-blue-100/60 blur-[120px] rounded-full z-0 pointer-events-none" />

                  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
                     {/* Left Image */}
                     <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-[240px] h-[360px] sm:w-[300px] sm:h-[450px] lg:w-[400px] lg:h-[550px] hover:scale-105 transition-transform duration-300">
                           <Image src="/caseimg/Frame-239.svg" alt="About Goalkick" fill className="object-contain drop-shadow-2xl" />
                        </div>
                     </div>

                     {/* Right Content */}
                     <div className="w-full lg:w-1/2">
                        {/* OVERVIEW Watermark */}
                        <div className="absolute -top-12 left-[620px] text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#ececec]/60 whitespace-nowrap z-0 pointer-events-none select-none leading-none tracking-tight overflow-hidden">
                           OVERVIEW
                        </div>
                        <div className="mb-[40px]">
                           <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 tracking-tight">About Goalkick App</h2>
                           <p className="text-[#010F14] text-base sm:text-lg md:text-[20px] leading-relaxed mb-4">
                              It's an online stadium where fans from around the world can unite, chat, and immerse themselves in the excitement of football. Dive into discussions about upcoming league matches, share your insights on the latest football news, and predict game outcomes with fellow fans.
                           </p>
                           <p className="text-[#010F14] text-base sm:text-lg md:text-[20px] leading-relaxed mb-8 sm:mb-10">
                              Connect with others who share your passion, and build lasting friendships with people who love football just as much as you do. Explore various features designed to enhance your football experience. Join clubs, create your own groups, and participate in lively discussions.
                           </p>
                        </div>

                        {/* Stat Grid */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-[40px] sm:gap-x-8 sm:gap-y-[40px]">
                           <div className="flex gap-3 items-start">
                              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-black mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-bold text-black text-[18px] sm:text-[18px]">Industry</h4>
                                 <p className="text-[#010F14] text-[20px] sm:text-[20px]">Sports & Social</p>
                              </div>
                           </div>
                           <div className="flex gap-3 items-start">
                              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-black mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-bold text-black text-[18px] sm:text-[18px]">DB Platform</h4>
                                 <p className="text-[#010F14] text-[20px] sm:text-[20px]">PostgreSQL (AWS)</p>
                              </div>
                           </div>
                           <div className="flex gap-3 items-start">
                              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-black mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-bold text-black text-[18px] sm:text-[18px]">Developed Time</h4>
                                 <p className="text-[#010F14] text-[20px] sm:text-[20px]">4 Months</p>
                              </div>
                           </div>
                           <div className="flex gap-3 items-start">
                              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-black mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-bold text-black text-[18px] sm:text-[18px]">Service</h4>
                                 <p className="text-[#010F14] text-[20px] sm:text-[20px] word-wrap">Design & Development</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ─────────────────────────────────────────────
                   3. THE RESULTS BANNER
               ───────────────────────────────────────────── */}
               <section className="w-full bg-[#2a3e47] pt-[60px] pb-[60px] px-4 sm:px-6 lg:px-8">
                  <div className="max-w-[1200px] mx-auto">
                     <h2 className="text-[48px] sm:text-[32px] font-bold text-white mb-6 sm:mb-8 md:mb-10">The Results</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {[
                           { icon: "/images/downloadicon.svg", stat: "600+", label: "Downloads" },
                           { icon: "/Letimg/Frame387.svg", stat: "500+", label: "Users" },
                           { icon: "/Letimg/Reviews.svg", stat: "300+", label: "Premium Members" },
                           { icon: "/Letimg/Starimg.svg", stat: "4.2", label: "Average rating" },
                        ].map(({ icon, stat, label }) => (
                           <div key={label} className="flex items-center gap-3 sm:gap-4">
                              <div className="w-[70px] h-[70px] sm:w-14 sm:h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 flex-shrink-0">
                                 <img src={icon} alt={label} className="w-[70px] h-[70px] sm:w-12 sm:h-12" />
                              </div>
                              <div>
                                 <h3 className="text-[48px] sm:text-[32px] font-bold text-white">{stat}</h3>
                                 <p className="text-white/70 text-[20px] sm:text-[16px]">{label}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ─────────────────────────────────────────────
                   4. OPPORTUNITIES AWAIT
               ───────────────────────────────────────────── */}
               <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
                  {/* Watermark */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none mt-[50px]">
                     OPPORTUNITIES AWAIT
                  </div>

                  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
                     {/* Left Content */}
                     <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-6 md:mb-8 tracking-tight text-center lg:text-left">
                           Opportunities await
                        </h2>
                        <div className="space-y-5 sm:space-y-6 md:space-y-8 ">
                           {[
                              "Football is the most popular sport globally, yet existing fan engagement is fragmented across social media, news apps, and club-specific platforms.",
                              "Fans often lack a dedicated space to connect with like-minded supporters, discuss matches in real time, participate in interactive activities (like trivia, predictions, and polls), and build meaningful football communities.",
                              "There's also a gap in reward-driven engagement where fans feel recognized and appreciated for their participation.",
                              "There's also a gap in reward-driven engagement where fans feel recognized and appreciated for their participation.",
                           ].map((text, i) => (
                              <div key={i} className="flex items-start gap-3 sm:gap-4">
                                 <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                    <img src="/Letimg/football.svg" alt="" className="w-5 h-5 object-contain" />
                                 </div>
                                 <p className="text-[#010F14] text-sm sm:text-base md:text-[17px] leading-[1.7]">{text}</p>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Right Image */}
                     <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 hover:scale-105 transition-transform duration-300   ">
                        <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px]">
                           <Image src="/caseimg/Frame 242.svg" alt="App Preview" width={471} height={511} className="w-full h-auto drop-shadow-xl" priority />
                        </div>
                     </div>
                  </div>
               </section>

               {/* ─────────────────────────────────────────────
                   5. OUR BEST SOLUTIONS
               ───────────────────────────────────────────── */}
               <section className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#0d1627] via-[#21163a] to-[#451631] overflow-hidden text-white">
                  <div className="absolute inset-0 bg-blue-900/10 blur-[100px] mix-blend-screen pointer-events-none" />

                  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
                     {/* Left Image */}
                     {/* Watermark */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#939192]/20 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[50px]">
                        OUR BEST SOLUTIONS
                     </div>
                     <div className="w-full lg:w-1/2 flex justify-center hover:scale-105 transition-transform duration-300">
                        <div className="w-full max-w-[320px] sm:max-w-[440px] md:max-w-[580px]">
                           <Image src="/caseimg/Frame 243.svg" alt="App Preview" width={771} height={811} className="w-full h-auto drop-shadow-xl" priority />
                        </div>
                     </div>

                     {/* Right Content */}
                     <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-6 md:mb-8 text-center lg:text-left -mt-[50px]">
                           Our Best Solutions
                        </h2>
                        <div className="space-y-5 sm:space-y-6 md:space-y-8">
                           {[
                              "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
                              "It allows users to join groups, discuss matches, share opinions, and make friends while staying updated with live scores and news.",
                              "The platform goes beyond typical fan forums by offering interactive games, predictions, trivia, and a reward system that motivates continuous engagement.",
                              "With personalized feeds, real-time notifications, and recognition through points and badges, Goalkick delivers a unique, rewarding, and all-in-one football fan experience.",
                           ].map((text, i) => (
                              <div key={i} className="flex items-start gap-3 sm:gap-4">
                                 <div className="mt-1 flex-shrink-0">
                                    <img src="/Letimg/football1.svg" alt="" className="w-5 h-5" />
                                 </div>
                                 <p className="text-white text-sm sm:text-base md:text-[17px] leading-relaxed">{text}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* ─────────────────────────────────────────────
                   6. ESSENTIAL HIGHLIGHTS
               ───────────────────────────────────────────── */}
               <Highlights />

               {/* ─────────────────────────────────────────────
                   7. TECHNOLOGY STACK
               ───────────────────────────────────────────── */}
               <Technology />

               <Designing />

               {/* ─────────────────────────────────────────────
                   8. GLIMPSES OF APP UI SCREENS
               ───────────────────────────────────────────── */}
               <section className="relative w-full text-center overflow-hidden font-THICCCBOI">
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
                        animation: scrollUp 18s linear infinite;
                        will-change: transform;
                     }
                     .col-scroll-down {
                        animation: scrollDown 18s linear infinite;
                        will-change: transform;
                     }
                  `}</style>

                  <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 mb-10">
                     {/* Watermark */}
                     <div className="relative mt-[80px]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[50px] sm:text-[80px] md:text-[110px] lg:text-[150px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[85px]">
                           UI Screens
                        </div>
                        <h2 className="relative text-2xl sm:text-3xl md:text-[40px] lg:text-[46px] font-bold text-[#0f172a] mb-8 sm:mb-12 md:mb-16 lg:mb-24 tracking-tighter">
                           Glimpses of App UI Screens
                        </h2>
                     </div>

                     {/* Infinite-scroll grid — wrapped in fade-masked container */}
                     <div className="relative" style={{ height: "700px" }}>
                        {/* Top white fade */}
                        <div className="absolute -top-1 left-0 right-0 h-22 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }} />

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-7 justify-center items-start w-full h-full">

                           {/* Column 1 — scroll UP */}
                           <div className="overflow-hidden h-full">
                              <div className="col-scroll-up flex flex-col gap-3 sm:gap-6 md:gap-8">
                                 {/* Original set */}
                                 <Image src="/gip/iPhone 11 Pro1.svg" alt="App UI Screen 1" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro4.svg" alt="App UI Screen 2" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro7.svg" alt="App UI Screen 3" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 {/* Duplicate set for seamless loop */}
                                 <Image src="/gip/iPhone 11 Pro1.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro4.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro7.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                              </div>
                           </div>

                           {/* Column 2 — scroll DOWN */}
                           <div className="overflow-hidden h-full">
                              <div className="col-scroll-down flex flex-col gap-3 sm:gap-6 md:gap-8">
                                 {/* Original set */}
                                 <Image src="/gip/iPhone 11 Pro2.svg" alt="App UI Screen 4" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro7.svg" alt="App UI Screen 5" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro9.svg" alt="App UI Screen 6" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 {/* Duplicate set */}
                                 <Image src="/gip/iPhone 11 Pro2.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro7.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro9.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                              </div>
                           </div>

                           {/* Column 3 — scroll UP */}
                           <div className="overflow-hidden h-full">
                              <div className="col-scroll-up flex flex-col gap-3 sm:gap-6 md:gap-8">
                                 {/* Original set */}
                                 <Image src="/gip/iPhone 11 Pro3.svg" alt="App UI Screen 7" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro5.svg" alt="App UI Screen 8" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro10.svg" alt="App UI Screen 9" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 {/* Duplicate set */}
                                 <Image src="/gip/iPhone 11 Pro3.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro5.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro10.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                              </div>
                           </div>

                           {/* Column 4 — hidden on mobile, scroll DOWN */}
                           <div className="hidden sm:block overflow-hidden h-full">
                              <div className="col-scroll-down flex flex-col gap-3 sm:gap-6 md:gap-8">
                                 {/* Original set */}
                                 <Image src="/gip/iPhone 11 Pro4.svg" alt="App UI Screen 10" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro9.svg" alt="App UI Screen 11" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro1.svg" alt="App UI Screen 12" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 {/* Duplicate set */}
                                 <Image src="/gip/iPhone 11 Pro4.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro9.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro1.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[16px] sm:rounded-[30px]" />
                              </div>
                           </div>

                           {/* Column 5 — visible only on lg, scroll UP */}
                           <div className="hidden lg:block overflow-hidden h-full">
                              <div className="col-scroll-up flex flex-col gap-8">
                                 {/* Original set */}
                                 <Image src="/gip/iPhone 11 Pro5.svg" alt="App UI Screen 13" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro10.svg" alt="App UI Screen 14" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro3.svg" alt="App UI Screen 15" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[30px]" />
                                 {/* Duplicate set */}
                                 <Image src="/gip/iPhone 11 Pro5.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro10.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[30px]" />
                                 <Image src="/gip/iPhone 11 Pro3.svg" aria-hidden alt="" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[30px]" />
                              </div>
                           </div>

                        </div>
                     </div>{/* end fade wrapper */}
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
