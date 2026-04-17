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
import Highlights from "../CRMcase/HIghtlights";
import Technology from "../Goalkick/technology";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import Designing from "../Goalkick/Designing";
import ConsultationModal from "@/components/ConsultationModal";

export default function Letramway() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   return (
      <div className="w-full font-THICCCBOI overflow-x-hidden">
         <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center pt-16 md:pt-0 mb-[80px]">
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
                  <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark Overlay */}
               </div>

               <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                  <div className="mb-4">
                     {/* Decorative logo or text above if needed */}
                     <div className="text-white/80 italic font-serif text-2xl tracking-widest mb-6 hover:scale-100 transition-transform duration-300">
                        <img src="/Letimg/LETlogo.svg" alt="img" className="w-full h-auto mt-10" />
                     </div>
                  </div>

                  <h1 className="text-[60px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-[#FFFFFF] leading-tight mb-4 md:mb-6">
                     Le tramway- A Cozy Edmonton Cafe Bistro
                  </h1>
                  <p className="text-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF] max-w-7xl text-center leading-relaxed px-4 md:px-0">
                     A beautiful and responsive website built for Le Tramway, a cozy cafe bistro in Edmonton. The website features a warm and inviting design, a comprehensive menu, and an easy-to-use ordering system for customers to place pickup orders.
                  </p>

                  <div className="mt-6">
                     {/* Have a project in mind? */}
                     <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-[#32B9E9] font-semibold text-base sm:text-lg underline cursor-pointer mt-1 hover:text-[#2aa8d6] transition-colors"
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
               <div className="hidden sm:block relative w-full px-4 sm:px-0 max-w-[1200px] mx-auto aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] xl:aspect-[2.2/1] mt-8 mb-8 lg:mt-12 z-10">

                  {/* Desktop (bigpc) */}
                  <div className="absolute top-[0%] left-[22%] w-[56%] z-10 transition-transform hover:-translate-y-3 hover:scale-[1.02] duration-500 will-change-transform">
                     <Image src="/Letimg/bigpc.svg" alt="Desktop" width={1000} height={800} className="w-full h-auto" priority />
                  </div>

                  {/* iPad */}
                  <div className="absolute top-[34%] left-[8%] w-[28%] z-20 transition-transform hover:-translate-y-3 hover:scale-[1.02] duration-500 delay-75 will-change-transform">
                     <Image src="/Letimg/Group.svg" alt="iPad" width={500} height={600} className="w-full h-auto" priority />
                  </div>

                  {/* Laptop */}
                  <div className="absolute top-[42%] left-[52%] w-[44%] z-20 transition-transform hover:-translate-y-3 hover:scale-[1.02] duration-500 delay-100 will-change-transform">
                     <Image src="/Letimg/381127576_11472844 copy 3.svg" alt="Laptop" width={800} height={600} className="w-full h-auto" priority />
                  </div>

                  {/* iPhone */}
                  <div className="absolute top-[46%] left-[3%] w-[10%] sm:w-[11%] md:w-[12%] z-30 transition-transform hover:-translate-y-3 hover:scale-[1.05] duration-500 delay-150 will-change-transform">
                     <Image src="/Letimg/iPhone12.svg" alt="iPhone" width={200} height={400} className="w-full h-auto" priority />
                  </div>

                  {/* Bugman */}
                  <div className="absolute top-[32%] lg:top-[26%] right-[-5%] sm:right-[-8%] lg:right-[-12%] w-[40%] sm:w-[44%] lg:w-[48%] z-30 transition-transform hover:-translate-y-4 hover:scale-[1.05] duration-500 delay-200 will-change-transform origin-bottom">
                     <Image src="/Letimg/bugman.svg" alt="Bugman" width={400} height={600} className="w-full h-auto" priority />
                  </div>

               </div>

               {/* 2. ABOUT LE TRAMWAY WEBSITE */}
               <div className="relative w-full pb-16 sm:pb-20 pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-[900px] mx-auto flex flex-col items-center text-center">

                     {/* OVERVIEW Watermark */}
                     <div className="w-full text-center text-[40px] sm:text-[60px] md:text-[90px] lg:text-[110px] font-black text-[#939192]/20 whitespace-nowrap pointer-events-none select-none leading-none tracking-tight overflow-hidden">
                        OVERVIEW
                     </div>

                     <h2 className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold text-black mb-3 sm:mb-5 -mt-[55px] sm:-mt-[55px] md:-mt-[55px]">
                        About Le Tramway Website
                     </h2>
                     <p className="text-[#010F14] leading-relaxed mb-8 text-sm sm:text-base md:text-lg max-w-7xl">
                        Le Tramway Cafe Bistro is a charming local spot in Edmonton, Alberta, known for its welcoming atmosphere and delightful culinary offerings. The bistro offers a variety of fresh, high-quality dishes, making it a favorite among locals that appreciate good food in a cozy setting.
                     </p>

                     {/* Stat Grid */}
                     <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-gray-100 pt-8 sm:pt-10 max-w-7xl">
                        <div className="flex gap-3 items-start justify-start">
                           <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-[18px] sm:text-[16px] lg:text-[18px]">Industry</h4>
                              <p className="text-black text-[20px] sm:text-[18px] lg:text-[20px]">Food &amp; Dining</p>
                           </div>
                        </div>
                        <div className="flex gap-3 items-start justify-start">
                           <Database className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-[18px] sm:text-[16px] lg:text-[18px]">Database</h4>
                              <p className="text-black text-[20px] sm:text-[18px] lg:text-[20px]">MongoDB</p>
                           </div>
                        </div>
                        <div className="flex gap-3 items-start justify-start">
                           <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-[18px] sm:text-[16px] lg:text-[18px]">Developed Time</h4>
                              <p className="text-black text-[20px] sm:text-[18px] lg:text-[20px]">2 Months</p>
                           </div>
                        </div>
                        <div className="flex gap-3 items-start justify-start">
                           <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                           <div className="text-left">
                              <h4 className="font-bold text-black text-[18px] sm:text-[16px] lg:text-[18px]">Service</h4>
                              <p className="text-black text-[20px] sm:text-[18px] lg:text-[20px] whitespace-nowrap">Design &amp; Web Development</p>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </section>


            {/* --- THE RESULTS SECTION --- */}
            <section className="w-full bg-[#9C162E] pt-[60px] pb-[60px] px-4 sm:px-6 lg:px-8">
               <div className="max-w-[1200px] mx-auto">
                  <h2 className="text-[48px] sm:text-[32px] font-bold text-white mb-6 sm:mb-8 md:mb-10">The Results</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                     {[
                        { icon: "/images/downloadicon.svg", stat: "600+", label: "Revenue Generated" },
                        { icon: "/Letimg/Frame387.svg", stat: "500+", label: "Users" },
                        { icon: "/Letimg/Reviews.svg", stat: "300+", label: "Growth Rate" },
                        { icon: "/Letimg/Starimg.svg", stat: "4.2", label: "Increased User Engagement" },
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

            {/* 4. OPPORTUNITIES AWAIT */}
            <section className="relative w-full mb-[80px] overflow-hidden">
               {/* Watermark */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none mt-[50px]">
                  OPPORTUNITIES AWAIT
               </div>
               <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
                  <h2 className="text-[48px] sm:text-[40px] md:text-[48px] font-bold text-black mb-10 md:mb-16 text-center mt-[92px]">
                     Opportunities await
                  </h2>

                  {/* Central Image with Glow */}
                  <div className="relative w-full max-w-[1000px] flex justify-center mb-10 md:mb-16 -mt-4 md:-mt-8">
                     {/* Blue Glow Behind Image */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-400/30 blur-[100px] rounded-full z-0 pointer-events-none"></div>

                     {/* Used scale to massively increase the image size visually without pushing the layout to create gaps */}
                     <div className="relative w-full z-10 flex justify-center items-center sm:scale-[1.15] md:scale-[1.25] lg:scale-[1.35] origin-center -mt-4 md:-mt-8 mb-4 md:mb-8 transition-transform duration-300 hover:scale-[1.08] sm:hover:scale-[1.2] md:hover:scale-[1.3] lg:hover:scale-[1.4] cursor-pointer">
                        <Image src="/Letimg/PCimg.svg" alt="Opportunities Mockup" width={1000} height={500} className="w-full h-auto drop-shadow-2xl" priority />
                     </div>
                  </div>

                  {/* 2x2 Grid */}
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12 px-2 md:px-0">
                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-[#323A3E]">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-[#323A3E] mb-2">Online Reservation Integration:-</h3>
                           <p className="text-sm md:text-base text-[#323A3E] leading-relaxed">
                              Adding a direct reservation feature would allow customers to book tables easily through the website. This can improve the dining experience and help the restaurant manage customer flow more efficiently.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-[#323A3E]">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-[#323A3E] mb-2">Digital Gift Cards:-</h3>
                           <p className="text-sm md:text-base text-[#323A3E] leading-relaxed">
                              Offering digital gift cards would allow customers to share the dining experience with friends and family. It can also attract new visitors and create additional revenue opportunities for the restaurant.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-[#323A3E]">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-[#323A3E] mb-2">Online Ordering System:-</h3>
                           <p className="text-sm md:text-base text-[#323A3E] leading-relaxed">
                              Introducing an online ordering option for pickup or delivery could make it more convenient for customers to enjoy their favorite dishes. This would also help expand the restaurant&apos;s reach beyond in-house dining.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-[#323A3E]">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-[#323A3E] mb-2">Local SEO Optimization:-</h3>
                           <p className="text-sm md:text-base text-[#323A3E] leading-relaxed">
                              Enhancing local SEO strategies could help the restaurant appear more prominently in search results. This would make it easier for people in Edmonton to discover the cafe when looking for nearby dining options.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. OUR BEST SOLUTIONS */}
            <section className="w-full pt-[80px] pb-[80px] bg-gradient-to-r from-[#1E2541] via-[#35254A] to-[#601A33] overflow-hidden text-white relative">
               {/* Subtle background glow */}
               <div className="absolute inset-0 bg-blue-500/10 blur-[100px] mix-blend-screen pointer-events-none"></div>

               <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

                  {/* Left Image Graphic */}
                  {/* Watermark */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#939192]/20 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[55px]">
                     OUR BEST SOLUTIONS
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-center relative h-auto">
                     <div className="w-full max-w-[700px] relative z-20 transition-transform hover:-translate-y-2 duration-300">
                        <Image src="/Letimg/Group 184464.svg" alt="App Solution" width={700} height={700} className="w-full h-auto drop-shadow-2xl" />
                     </div>
                  </div>

                  {/* Right List Content */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
                     <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-8 md:mb-10">Our Best Solutions</h2>
                     <div className="space-y-6 text-left">
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              <span className="font-bold"> Clear and Intuitive Navigation:-</span> We designed a simple and structured navigation system so visitors can easily find important sections such as the menu, location, and contact details without confusion.                           </p>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              <span className="font-bold"> Mobile-Responsive Design:-</span> The website was optimized for mobile devices to ensure a smooth browsing experience for users accessing the site from smartphones and tablets.                           </p>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              <span className="font-bold"> Visually Engaging Food Presentation:-</span> High-quality images and clean layouts were used to highlight the restaurant’s dishes, helping visitors quickly explore the menu and get a better sense of the dining experience.                           </p>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              <span className="font-bold"> Easy Access to Key Information:-</span> Important details such as opening hours, location, and contact information were placed prominently to help customers quickly plan their visit.                           </p>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

            {/* 6. ESSENTIAL HIGHLIGHTS */}
            <Highlights />

            {/* 7. TECHNOLOGY STACK */}
            <Technology />

            <Designing />

            {/* 8. GLIMPSES OF APP UI SCREENS */}
            <section className="w-full mt-[80px] mb-[80px] text-center">
               {/* Watermark */}
               <div className="relative mt-[80px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[50px] sm:text-[80px] md:text-[110px] lg:text-[150px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[85px]">
                     UI Screens
                  </div>
               </div>
               <h2 className="relative text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0f172a] mb-10 md:mb-16">
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
