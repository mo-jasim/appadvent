"use client";
import React from "react";
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

export default function Letramway() {
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
                     <div className="text-white/80 italic font-serif text-2xl tracking-widest mb-6">
                        <img src="/Letimg/LETlogo.svg" alt="img" className="w-full h-auto mt-10" />
                     </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4 md:mb-6">
                     Le tramway- A Cozy Edmonton Cafe Bistro
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-4xl text-center leading-relaxed px-4 md:px-0">
                     A beautiful and responsive website built for Le Tramway, a cozy cafe bistro in Edmonton. The website features a warm and inviting design, a comprehensive menu, and an easy-to-use ordering system for customers to place pickup orders.
                  </p>

                  <div className="mt-6">
                     <p className="text-[#32B9E9] font-medium underline text-center text-sm md:text-base lg:text-lg cursor-pointer hover:text-[#2aa8d6] transition-colors rounded-full uppercase tracking-wider">
                        HAVE A PROJECT IN MIND?
                     </p>
                  </div>
               </div>
            </section>
            {/* About */}
            <section className="relative w-full  mt-[80px] mb-[80px]">
               {/* Background light glow */}
               <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#b8deff]/30 blur-[150px] rounded-full z-0 pointer-events-none"></div>

               {/* Container using aspect ratio so height dynamically snaps to screen width, killing the gap entirely! */}
               <div className="relative w-full px-4 sm:px-0 max-w-[1200px] mx-auto aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] xl:aspect-[2.2/1] mt-8 lg:mt-12 z-10 overflow-visible">

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
                  <div className="absolute top-[46%] left-[3%] w-[12%] sm:w-[13%] z-30 transition-transform hover:-translate-y-3 hover:scale-[1.05] duration-500 delay-150 will-change-transform">
                     <Image src="/Letimg/iPhone12.svg" alt="iPhone" width={200} height={400} className="w-full h-auto" priority />
                  </div>

                  {/* Bugman - Scaled up organically using width% and tuned top% to maintain baseline alignment */}
                  <div className="absolute top-[32%] lg:top-[26%] right-[-15%] lg:right-[-20%] w-[48%] lg:w-[52%] z-30 transition-transform hover:-translate-y-4 hover:scale-[1.05] duration-500 delay-200 will-change-transform origin-bottom">
                     <Image src="/Letimg/bugman.svg" alt="Bugman" width={400} height={600} className="w-full h-auto" priority />
                  </div>

               </div>
               {/* 2. ABOUT LE TRAMWAY WEBSITE */}
               <div className="relative w-full pb-20 pt-10 px-4 sm:px-6 lg:px-8 overflow-hidden pointer-events-none">
                  <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center relative z-10 pointer-events-auto text-center">

                     <div className="max-w-5xl mx-auto px-4 md:px-0 mt-8 md:mt-12">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-4 md:mb-6">About Le Tramway Website</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
                           Le Tramway Cafe Bistro is a charming local spot in Edmonton, Alberta, known for its welcoming atmosphere and delightful culinary offerings. The bistro offers a variety of fresh, high-quality dishes, making it a favorite among locals that appreciate good food in a cozy setting.
                        </p>

                        {/* Stat Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 border-t border-gray-100 pt-10 place-items-start sm:place-items-center lg:place-items-start">
                           <div className="flex gap-2 lg:gap-4 items-start justify-start w-full">
                              <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                              <div className="text-left">
                                 <h4 className="font-bold text-gray-900 text-[14px] lg:text-[15px]">Industry</h4>
                                 <p className="text-gray-500 text-[13px] lg:text-[14px]">Food & Dining</p>
                              </div>
                           </div>
                           <div className="flex gap-2 lg:gap-4 items-start justify-start w-full">
                              <Database className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                              <div className="text-left">
                                 <h4 className="font-bold text-gray-900 text-[14px] lg:text-[15px]">Database</h4>
                                 <p className="text-gray-500 text-[13px] lg:text-[14px]">MongoDB</p>
                              </div>
                           </div>
                           <div className="flex gap-2 lg:gap-4 items-start justify-start w-full">
                              <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                              <div className="text-left">
                                 <h4 className="font-bold text-gray-900 text-[14px] lg:text-[15px]">Developed <br />Time</h4>
                                 <p className="text-gray-500 text-[13px] lg:text-[14px]">2 Months</p>
                              </div>
                           </div>
                           <div className="flex gap-2 lg:gap-4 items-start justify-start w-full">
                              <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 mt-1 shrink-0" />
                              <div className="text-left">
                                 <h4 className="font-bold text-gray-900 text-[14px] lg:text-[15px]">Service</h4>
                                 <p className="text-gray-500 text-[13px] lg:text-[14px]">Design & Web <br className="hidden lg:block" /> Development</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* --- THE RESULTS SECTION --- */}
            <section className="w-full bg-gradient-to-r from-[#1E293B] via-[#471536] to-[#7F1D1D] text-white  mt-[80px] mb-[80px] pb-[30px]">
               <div className="max-w-6xl mx-auto px-4 md:px-0">
                  <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold mb-8 md:mb-10 text-center md:text-left md:ml-8">The Results</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

                     <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
                        <div className="inline-flex flex-col items-center md:items-start">
                           <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                              <img src="/images/downloadicon.svg" alt="img" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">600+</span>
                           </div>
                           <p className="text-[14px] sm:text-[16px] text-white/70 md:ml-[36px]">Downloads</p>
                        </div>
                     </div>

                     <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
                        <div className="inline-flex flex-col items-center md:items-start">
                           <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                              <img src="/images/downloadicon.svg" alt="img" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">500+</span>
                           </div>
                           <p className="text-[14px] sm:text-[16px] text-white/70 md:ml-[36px]">Users</p>
                        </div>
                     </div>

                     <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left border-r-0 md:border-r border-white/10">
                        <div className="inline-flex flex-col items-center md:items-start">
                           <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                              <img src="/images/downloadicon.svg" alt="img" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">300+</span>
                           </div>
                           <p className="text-[14px] sm:text-[16px] text-white/70 md:ml-[36px]">Positive Reviews</p>
                        </div>
                     </div>

                     <div className="flex flex-col items-center md:items-start md:pl-8 text-center md:text-left">
                        <div className="inline-flex flex-col items-center md:items-start">
                           <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                              <img src="/images/downloadicon.svg" alt="img" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">4.2</span>
                           </div>
                           <p className="text-[14px] sm:text-[16px] text-white/70 md:ml-[36px]">Rating</p>
                        </div>
                     </div>

                  </div>
               </div>
            </section>

            {/* 4. OPPORTUNITIES AWAIT */}
            <section className="relative w-full  mt-[80px] mb-[80px] overflow-hidden">
               {/* Huge Faint Watermark Text */}
               <div className="absolute top-[8%] lg:top-[5%] left-1/2 -translate-x-1/2 text-[45px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none max-w-none">
                  OPPORTUNITIES AWAIT
               </div>

               <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
                  <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 mb-10 md:mb-16 text-center">
                     Opportunities await
                  </h2>

                  {/* Central Image with Glow */}
                  <div className="relative w-full max-w-[1000px] flex justify-center mb-10 md:mb-16 -mt-4 md:-mt-8">
                     {/* Blue Glow Behind Image */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-400/30 blur-[100px] rounded-full z-0 pointer-events-none"></div>

                     {/* Used scale to massively increase the image size visually without pushing the layout to create gaps */}
                     <div className="relative w-full z-10 flex justify-center items-center scale-100 sm:scale-[1.15] md:scale-[1.25] lg:scale-[1.35] origin-center pointer-events-none -mt-4 md:-mt-8 mb-4 md:mb-8">
                        <Image src="/Letimg/PCimg.svg" alt="Opportunities Mockup" width={1000} height={500} className="w-full h-auto drop-shadow-2xl" priority />
                     </div>
                  </div>

                  {/* 2x2 Grid */}
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12 px-2 md:px-0">
                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-gray-800">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Online Reservation Integration:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Adding a direct reservation feature would allow customers to book tables easily through the website. This can improve the dining experience and help the restaurant manage customer flow more efficiently.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-gray-800">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Digital Gift Cards:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Offering digital gift cards would allow customers to share the dining experience with friends and family. It can also attract new visitors and create additional revenue opportunities for the restaurant.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-gray-800">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Online Ordering System:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Introducing an online ordering option for pickup or delivery could make it more convenient for customers to enjoy their favorite dishes. This would also help expand the restaurant&apos;s reach beyond in-house dining.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 text-gray-800">
                           <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Local SEO Optimization:-</h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              Enhancing local SEO strategies could help the restaurant appear more prominently in search results. This would make it easier for people in Edmonton to discover the cafe when looking for nearby dining options.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. OUR BEST SOLUTIONS */}
            <section className="w-full mt-[80px] mb-[80px] bg-gradient-to-r from-[#1E2541] via-[#35254A] to-[#601A33] overflow-hidden text-white relative">
               {/* Subtle background glow */}
               <div className="absolute inset-0 bg-blue-500/10 blur-[100px] mix-blend-screen pointer-events-none"></div>

               <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

                  {/* Left Image Graphic */}
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
                              Implemented real-time highly scalable ordering architecture supporting thousands of concurrent menu browsers and immediate payment verifications.
                           </p>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              Delivered a performance optimized food selection algorithm which processes modifier criteria to recommend optimal add-ons in under 50ms.
                           </p>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              The dynamic asset pipeline securely handles rich media food photography perfectly within fast-loading web galleries without degrading performance.
                           </p>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <img src="/Letimg/restaurant-menu.svg" alt="App Solution" width={500} height={500} className="w-5 h-5 text-white/90" />
                           </div>
                           <p className="text-gray-300 leading-relaxed text-[15px]">
                              All cart total calculations handled by a seamless integration allowing error-free tax and service updates instantly upon item addition.
                           </p>
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

            {/* 10. OUR PROJECTS */}
            <OurProjectsSection />

            {/* 9. COMPANIES WHO LOVED OUR WORK */}
            <CompaniesLove />

         </div>
      </div>
   );
}
