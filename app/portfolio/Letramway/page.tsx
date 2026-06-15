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

               <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center gap-4 px-4 md:-mt-32">
                  {/* Logo */}
                  <div className="flex justify-center w-44 md:w-52 h-auto mb-2">
                     <img src="/Letimg/LETlogo.svg" alt="Le tramway Logo" className="w-full h-auto md:mt-25" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-4 md:mb-6">
                     Le tramway- A Cozy Edmonton Cafe Bistro
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF] max-w-7xl text-center leading-relaxed px-2 md:px-0 opacity-90">
                     A beautiful and responsive website built for Le Tramway, a cozy cafe bistro in Edmonton. The website features a warm and inviting design, a comprehensive menu, and an easy-to-use ordering system for customers to place pickup orders.
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
                     src="/Letimg/bigpc.svg"
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
                  <div className="absolute top-[0%] left-[20%] w-[60%] z-10 hover:-translate-y-[15px] transition-transform duration-500 delay-75 will-change-transform">
                     <Image src="/Letimg/bigpc.svg" alt="Desktop" width={1000} height={800} className="w-full h-auto drop-shadow-2xl" priority />
                  </div>

                  {/* iPad */}
                  <div className="absolute top-[30%] left-[5%] w-[30%] z-20 hover:-translate-y-[15px] transition-transform duration-500 delay-75 will-change-transform">
                     <Image src="/Letimg/Group.svg" alt="iPad" width={500} height={600} className="w-full h-auto drop-shadow-xl" priority />
                  </div>

                  {/* Laptop */}
                  <div className="absolute top-[40%] left-[50%] w-[45%] z-20 hover:-translate-y-[15px] transition-transform duration-500 delay-100 will-change-transform">
                     <Image src="/Letimg/381127576_11472844 copy 3.svg" alt="Laptop" width={800} height={600} className="w-full h-auto drop-shadow-xl" priority />
                  </div>

                  {/* iPhone */}
                  <div className="absolute top-[45%] left-[2%] w-[12%] z-30 hover:-translate-y-[15px] transition-transform duration-500 delay-150 will-change-transform">
                     <Image src="/Letimg/iPhone12.svg" alt="iPhone" width={200} height={400} className="w-full h-auto drop-shadow-lg" priority />
                  </div>

                  {/* Bugman */}
                  <div className="absolute top-[25%] right-[-5%] lg:right-[-10%] w-[45%] z-30 hover:-translate-y-[15px] transition-transform duration-500 delay-200 will-change-transform origin-bottom">
                     <Image src="/Letimg/bugman.svg" alt="Bugman" width={400} height={600} className="w-full h-auto" priority />
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
                        About Le Tramway Website
                     </h2>
                     <p className="text-[#010F14] leading-relaxed mb-10 text-sm sm:text-base md:text-lg max-w-7xl">
                        Le Tramway Cafe Bistro is a charming local spot in Edmonton, Alberta, known for its welcoming atmosphere and delightful culinary offerings. The bistro offers a variety of fresh, high-quality dishes, making it a favorite among locals that appreciate good food in a cozy setting.
                     </p>

                     {/* Stat Grid */}
                     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-30">
                        <div className="flex gap-4 items-start justify-start">
                           <img src="/caseimg/About-img1.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Industry</h4>
                              <p className="text-black text-lg font-medium">Restaurant</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-start justify-start">
                           <img src="/caseimg/About-img2.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Platform</h4>
                              <p className="text-black text-lg font-medium">Responsive Website</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-start justify-start">
                           <img src="/caseimg/About-img3.svg" className="w-10 h-10 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-sm uppercase tracking-wider text-gray-500">Duration</h4>
                              <p className="text-black text-lg font-medium">4 Months</p>
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
                  <div className="relative w-full transition-transform hover:-translate-y-2 duration-500 max-w-[1600px] mx-auto -mt-10 md:-mt-20">
                     {/*pcimg*/}
                     <Image src="/Letimg/PCimg.svg" alt="Opportunities Await" width={1600} height={800} className="w-full h-auto drop-shadow-2xl" />
                  </div>

                  {/* 2x2 Grid */}
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
                     <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-xl flex shrink-0 transition-colors duration-300">
                           <img src="/caseimg/ic_round-restaurant-menu.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-lg md:text-xl font-bold text-[#323A3E] mb-2">Online Reservation Integration:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Adding a direct reservation feature would allow customers to book tables easily through the website. This can improve the dining experience and help the restaurant manage customer flow more efficiently.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-xl flex shrink-0 transition-colors duration-300">
                           <img src="/caseimg/ic_round-restaurant-menu.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-lg md:text-xl font-bold text-[#323A3E] mb-2">Digital Gift Cards:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Offering digital gift cards would allow customers to share the dining experience with friends and family. It can also attract new visitors and create additional revenue opportunities for the restaurant.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-xl flex shrink-0 transition-colors duration-300">
                           <img src="/caseimg/ic_round-restaurant-menu.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-lg md:text-xl font-bold text-[#323A3E] mb-2">Online Ordering System:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Introducing an online ordering option for pickup or delivery could make it more convenient for customers to enjoy their favorite dishes. This would also help expand the restaurant&apos;s reach beyond in-house dining.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-xl flex shrink-0 transition-colors duration-300">
                           <img src="/caseimg/ic_round-restaurant-menu.svg" alt="Online Reservation Integration" className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-lg md:text-xl font-bold text-[#323A3E] mb-2">Local SEO Optimization:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Enhancing local SEO strategies could help the restaurant appear more prominently in search results. This would make it easier for people in Edmonton to discover the cafe when looking for nearby dining options.
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
                           <Image src="/Letimg/Group 184464.svg" alt="App Solution" width={700} height={700} className="w-full h-auto drop-shadow-2xl" />
                        </div>
                     </div>

                     {/* Right List Content */}
                     <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center lg:text-left">Our Best Solutions</h2>
                        <div className="space-y-8">
                           {[
                              { title: "Clear and Intuitive Navigation", desc: "We designed a simple and structured navigation system so visitors can easily find important sections like the menu and location." },
                              { title: "Mobile-Responsive Design", desc: "Optimized for mobile devices to ensure a smooth browsing experience for users on smartphones and tablets." },
                              { title: "Visually Engaging Presentation", desc: "High-quality images and clean layouts highlight the restaurant’s dishes, helping visitors explore the menu effectively." },
                              { title: "Easy Access to Information", desc: "Key details like opening hours and contact info are placed prominently to help customers plan their visit." }
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-4 group">
                                 <div className="w-6 h-6 rounded-xl flex shrink-0 -mt-3">
                                    <img src="/Letimg/ic_round-restaurant-menu.svg" alt="icon" className="w-12 h-12" />
                                 </div>
                                 <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
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
