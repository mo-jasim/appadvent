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

               <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center gap-4 px-3 sm:px-5 lg:px-7 md:-mt-32">
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

               {/* ── MOBILE: Single centered image ── */}
               <div className="sm:hidden relative w-full px-3 sm:px-5 lg:px-7 mt-8 z-10">
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
               <div className="hidden sm:block relative w-full px-3 sm:px-5 lg:px-7 max-w-7xl mx-auto aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] mt-8 mb-16 lg:mt-12 z-10">

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
               <div className="relative w-full pb-16 sm:pb-20 pt-8 sm:pt-10 px-3 sm:px-5 lg:px-7">
                  <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-center">

                     {/* OVERVIEW Watermark */}
                     <div className="w-full text-center text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-black text-[#939192]/10 whitespace-nowrap pointer-events-none select-none leading-none tracking-tight overflow-hidden">
                        OVERVIEW
                     </div>

                     <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black mb-4 sm:mb-6 -mt-[30px] sm:-mt-[45px] md:-mt-[60px]">
                        About Le Tramway Website
                     </motion.h2>
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
                           { title: "Online Reservation Integration:-", desc: "Adding a direct reservation feature would allow customers to book tables easily through the website. This can improve the dining experience and help the restaurant manage customer flow more efficiently." },
                           { title: "Digital Gift Cards:-", desc: "Offering digital gift cards would allow customers to share the dining experience with friends and family. It can also attract new visitors and create additional revenue opportunities for the restaurant." },
                           { title: "Online Ordering System:-", desc: "Introducing an online ordering option for pickup or delivery could make it more convenient for customers to enjoy their favorite dishes. This would also help expand the restaurant&apos;s reach beyond in-house dining." },
                           { title: "Local SEO Optimization:-", desc: "Enhancing local SEO strategies could help the restaurant appear more prominently in search results. This would make it easier for people in Edmonton to discover the cafe when looking for nearby dining options." }
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
                                    <img src="/caseimg/ic_round-restaurant-menu.svg" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" alt="" />
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
                           <Image src="/Letimg/PCimg.svg" alt="Opportunities Await" width={1600} height={800} className="w-full h-auto drop-shadow-2xl" />
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
                           <Image src="/Letimg/Group 184464.svg" alt="App Solution" width={700} height={700} className="w-full h-auto drop-shadow-2xl" />
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
                           { title: "Clear and Intuitive Navigation", desc: "We designed a simple and structured navigation system so visitors can easily find important sections like the menu and location." },
                           { title: "Mobile-Responsive Design", desc: "Optimized for mobile devices to ensure a smooth browsing experience for users on smartphones and tablets." },
                           { title: "Visually Engaging Presentation", desc: "High-quality images and clean layouts highlight the restaurant’s dishes, helping visitors explore the menu effectively." },
                           { title: "Easy Access to Information", desc: "Key details like opening hours and contact info are placed prominently to help customers plan their visit." }
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
                                    <img src="/Letimg/ic_round-restaurant-menu.svg" alt="icon" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                 </div>
                              </div>
                              <div>
                                 <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#32B9E9] transition-colors">{item.title}</h3>
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
            <Technology projectName="Letramway website" projectType="web" />

            <Designing1 />

            {/* 8. GLIMPSES OF APP UI SCREENS */}
            <section className="w-full py-20 md:py-32 text-center bg-white px-3 sm:px-5 lg:px-7">
               <div className="max-w-7xl mx-auto">
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
                           className="w-full h-auto relative z-10"
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
                              <source src="/Letimg/letramway-website-video.mp4" type="video/mp4" />
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
