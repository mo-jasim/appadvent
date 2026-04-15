"use client";
import React from "react";
import Image from "next/image";
import {
   CheckCircle2,
   MapPin,
   Settings,
   Building2,
   Clock,
   Database,
   Briefcase,
   Download,
   Users,
   Star,
   TrendingUp,
   Apple,
   PlayCircle,
   MessageSquare
} from "lucide-react";
import Highlights from "../CRMcase/HIghtlights";
import Designing from "./Designing";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import Technology from "./technology";

export default function GoalkickCaseStudy() {
   return (
      <>
         <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >
            <div className="w-full font-THICCCBOI overflow-x-hidden">
               {/* 1. HERO SECTION */}
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
                        <source src="/caseimg/vecteezy.mp4" type="video/mp4" />
                     </video>
                     <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark Overlay */}
                  </div>

                  <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                     {/* Logo Badge */}
                     <div className="text-white/80 italic font-serif text-2xl tracking-widest mb-6 flex justify-center w-full">
                        <img src="/Letimg/goallogo.svg" alt="img" className="w-full max-w-[150px] md:max-w-[200px] h-auto mt-6 md:mt-10" />
                     </div>

                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4 md:mb-6 px-2">
                        Goalkick - Social App for Football Fans
                     </h1>
                     <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-4xl text-center px-4">
                        The ultimate social network platform designed to connect, engage, and elevate the experience for football fans. It allows users to create groups, log matches, and chat seamlessly within a community-driven environment tailored to real fans.
                     </p>

                     <div className="flex flex-col sm:flex-row items-center gap-4">
                        <p className="text-white/80 sm:mr-2 text-sm sm:text-base">Available on Android and iOS</p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
                        <button className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 border border-white/20 text-white px-5 py-2.5 rounded-lg transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">
                           <Apple className="w-6 h-6" />
                           <div className="flex flex-col items-start leading-none">
                              <span className="text-[10px] text-gray-300">Download on the</span>
                              <span className="text-[15px] font-semibold">App Store</span>
                           </div>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 border border-white/20 text-white px-5 py-2.5 rounded-lg transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">
                           <PlayCircle className="w-6 h-6" />
                           <div className="flex flex-col items-start leading-none">
                              <span className="text-[10px] text-gray-300">GET IT ON</span>
                              <span className="text-[15px] font-semibold">Google Play</span>
                           </div>
                        </button>
                     </div>
                     <div className="">
                        <p
                           className="text-[#32B9E9] font-medium underline text-center text-sm sm:text-base lg:text-lg cursor-pointer hover:text-[#2aa8d6] transition-colors"
                        >
                           Have a project in mind?
                        </p>
                     </div>
                  </div>
               </section>

               {/* 2. ABOUT APP SECTION */}
               <section className="relative w-full mt-[80px] mb-[80px] overflow-hidden">
                  {/* Glow Background */}
                  <div className="absolute left-[-10%] top-[20%] w-[40%] h-[60%] bg-blue-100/60 blur-[120px] rounded-full z-0 pointer-events-none"></div>

                  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                     {/* Left Image Graphic */}
                     <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-[300px] h-[450px] lg:w-[400px] lg:h-[550px]">
                           {/* Using goal7.png assuming it might be the large 3D graphic. Will fallback if not. */}
                           <Image src="/caseimg/Frame-239.svg" alt="About Goalkick" fill className="object-contain drop-shadow-2xl" />
                        </div>
                     </div>

                     {/* Right Content */}
                     <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Goalkick App</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                           It's an online stadium where fans from around the world can unite, chat, and immerse themselves in the excitement of football. Dive into discussions about upcoming league matches, share your insights on the latest football news, and predict game outcomes with fellow fans.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                           Connect with others who share your passion, and build lasting friendships with people who love football just as much as you do. Explore various features designed to enhance your football experience. Join clubs, create your own groups, and participate in lively discussions.                  </p>

                        {/* Stat Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
                           <div className="flex gap-4 items-start">
                              <Building2 className="w-8 h-8 text-blue-600 mt-1" />
                              <div>
                                 <h4 className="font-bold text-gray-900 text-[15px]">Industry</h4>
                                 <p className="text-gray-500 text-[14px]">Sports & Social</p>
                              </div>
                           </div>
                           <div className="flex gap-4 items-start">
                              <MapPin className="w-8 h-8 text-blue-600 mt-1" />
                              <div>
                                 <h4 className="font-bold text-gray-900 text-[15px]">DB Platform</h4>
                                 <p className="text-gray-500 text-[14px]">PostgreSQL (AWS)</p>
                              </div>
                           </div>
                           <div className="flex gap-4 items-start">
                              <Clock className="w-8 h-8 text-blue-600 mt-1" />
                              <div>
                                 <h4 className="font-bold text-gray-900 text-[15px]">Developed Time</h4>
                                 <p className="text-gray-500 text-[14px]">4 Months</p>
                              </div>
                           </div>
                           <div className="flex gap-4 items-start">
                              <Briefcase className="w-8 h-8 text-blue-600 mt-1" />
                              <div>
                                 <h4 className="font-bold text-gray-900 text-[15px]">Service</h4>
                                 <p className="text-gray-500 text-[14px]">Design & Development</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* 3. THE RESULTS BANNER */}
               <section className="w-full bg-[#2a3e47] pb-[30px] pt-[20px] mt-[80px] mb-[80px]">
                  <div className="max-w-[1200px] mx-auto">
                     <h2 className="text-2xl font-bold text-white mb-8 md:mb-10 border-l-4 border-blue-400 pl-4">The Results</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                              <img src="/images/downloadicon.svg" alt="img" className="w-14 h-14 text-white" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold text-white">600+</h3>
                              <p className="text-white/70 text-sm">Downloads</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                              <img src="/Letimg/Frame387.svg" alt="img" className="w-14 h-14 text-white" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold text-white">500+</h3>
                              <p className="text-white/70 text-sm">Users</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                              <img src="/Letimg/Reviews.svg" alt="img" className="w-14 h-14 text-white" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold text-white">300+</h3>
                              <p className="text-white/70 text-sm">Premium Members</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                              <img src="/Letimg/Starimg.svg" alt="img" className="w-14 h-14 text-white" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold text-white">4.2</h3>
                              <p className="text-white/70 text-sm">Average rating</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* 4. OPPORTUNITIES AWAIT */}
               <section className="w-full mt-[80px] mb-[80px] overflow-hidden">
                  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

                     {/* Left List Content */}
                     <div className="w-full lg:w-1/2">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-gray-900 mb-6 md:mb-8 tracking-tight text-center lg:text-left">Opportunities await</h2>
                        <div className="space-y-6 md:space-y-8">
                           <div className="flex items-start gap-4">
                              <div className="mt-[2px] flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                 <img src="/Letimg/football.svg" alt="img" className="w-5 h-5 object-contain" />
                              </div>
                              <p className="text-[#5f6368] leading-[1.7] text-[14px] md:text-[15px]">
                                 Football is the most popular sport globally, yet existing fan engagement is fragmented across social media, news apps, and club-specific platforms.                        </p>
                           </div>
                           <div className="flex items-start gap-4">
                              <div className="mt-[2px] flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                 <img src="/Letimg/football.svg" alt="img" className="w-5 h-5 object-contain" />
                              </div>
                              <p className="text-[#5f6368] leading-[1.7] text-[14px] md:text-[15px]">
                                 Fans often lack a dedicated space to connect with like-minded supporters, discuss matches in real time, participate in interactive activities (like trivia, predictions, and polls), and build meaningful football communities.                        </p>
                           </div>
                           <div className="flex items-start gap-4">
                              <div className="mt-[2px] flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                 <img src="/Letimg/football.svg" alt="img" className="w-5 h-5 object-contain" />
                              </div>
                              <p className="text-[#5f6368] leading-[1.7] text-[14px] md:text-[15px]">
                                 There’s also a gap in reward-driven engagement where fans feel recognized and appreciated for their participation.                        </p>
                           </div>
                           <div className="flex items-start gap-4">
                              <div className="mt-[2px] flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                 <img src="/Letimg/football.svg" alt="img" className="w-5 h-5 object-contain" />
                              </div>
                              <p className="text-[#5f6368] leading-[1.7] text-[14px] md:text-[15px]">
                                 There’s also a gap in reward-driven engagement where fans feel recognized and appreciated for their participation.                        </p>
                           </div>
                        </div>
                     </div>

                     {/* Right Overlapping Phones */}
                     <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="w-full max-w-[480px]">
                           <Image src="/caseimg/Frame 242.svg" alt="App Preview 2" width={471} height={511} className="w-full h-auto drop-shadow-xl p-2" priority />
                        </div>
                     </div>
                  </div>
               </section>

               {/* 5. OUR BEST SOLUTIONS */}
               <section className="w-full mt-[80px] mb-[80px] pt-[80px] pb-[80px] bg-gradient-to-r from-[#0d1627] via-[#21163a] to-[#451631] overflow-hidden text-white relative">
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-blue-900/10 blur-[100px] mix-blend-screen pointer-events-none"></div>

                  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-16 relative z-10">

                     {/* Left Overlapping Phones */}
                     <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative h-auto sm:h-[400px] md:h-[600px] mb-8 lg:mb-0">
                        {/* Phone Left */}
                        <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[680px]">
                           <Image src="/caseimg/Frame 243.svg" alt="App Preview 2" width={771} height={811} className="w-full h-auto drop-shadow-xl p-2" priority />
                        </div>
                     </div>

                     {/* Right List Content */}
                     <div className="w-full max-w-lg lg:w-1/2">
                        <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-8 md:mb-10 text-center lg:text-left">Our Best Solutions</h2>
                        <div className="space-y-6 md:space-y-8">
                           <div className="flex items-start gap-4">
                              <div className="mt-1 flex-shrink-0">
                                 <img src="/Letimg/football1.svg" alt="img" className="w-5 h-5 text-blue-400" />
                              </div>
                              <p className="text-gray-300 leading-relaxed text-[15px]">
                                 Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.                        </p>
                           </div>
                           <div className="flex items-start gap-4">
                              <div className="mt-1 flex-shrink-0">
                                 <img src="/Letimg/football1.svg" alt="img" className="w-5 h-5 text-blue-400" />
                              </div>
                              <p className="text-gray-300 leading-relaxed text-[15px]">
                                 It allows users to join groups, discuss matches, share opinions, and make friends while staying updated with live scores and news.                        </p>
                           </div>
                           <div className="flex items-start gap-4">
                              <div className="mt-1 flex-shrink-0">
                                 <img src="/Letimg/football1.svg" alt="img" className="w-5 h-5 text-blue-400" />
                              </div>
                              <p className="text-gray-300 leading-relaxed text-[15px]">
                                 The platform goes beyond typical fan forums by offering interactive games, predictions, trivia, and a reward system that motivates continuous engagement.                        </p>
                           </div>
                           <div className="flex items-start gap-4">
                              <div className="mt-1 flex-shrink-0">
                                 <img src="/Letimg/football1.svg" alt="img" className="w-5 h-5 text-blue-400" />
                              </div>
                              <p className="text-gray-300 leading-relaxed text-[15px]">
                                 With personalized feeds, real-time notifications, and recognition through points and badges, Goalkick delivers a unique, rewarding, and all-in-one football fan experience.                        </p>
                           </div>
                        </div>
                     </div>

                  </div>
               </section>

               {/* 6. ESSENTIAL HIGHLIGHTS */}
               {/* Reusing the exact complex, animated slider component from CRMcase */}
               <Highlights />

               {/* 7. TECHNOLOGY STACK IN GOALKICK */}
               <Technology />

               <Designing />

               {/* 8. GLIMPSES OF APP UI SCREENS */}
               <section className="relative w-full mt-[80px] mb-[80px] text-center overflow-hidden font-THICCCBOI">
                  {/* Left Edge Neon Glow Blob (Matching image design) */}
                  <div className="absolute top-[30%] left-[-10%] w-[80%] md:w-[45%] h-[50%] bg-[#baddfc] blur-[120px] rounded-full z-0 pointer-events-none"></div>

                  {/* Huge Faint Watermark Text */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[50px] sm:text-[80px] md:text-[110px] lg:text-[150px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none mt-8 md:mt-0">
                     UI Screens
                  </div>

                  <div className="w-full max-w-[1400px] mx-auto h-auto relative z-10 pb-10">
                     <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold text-[#0f172a] mb-10 md:mb-16 lg:mb-24 tracking-tighter">
                        Glimpses of App UI Screens
                     </h2>

                     {/* 5-Column Staggered Grid Layout for Phone Mockups */}
                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-7 justify-center items-start w-full perspective-1000">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 lg:mt-24">
                           <Image src="/gip/iPhone 11 Pro1.svg" alt="App UI Screen 1" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                           <Image src="/gip/iPhone 11 Pro4.svg" alt="App UI Screen 2" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12 lg:mt-0">
                           <Image src="/gip/iPhone 11 Pro2.svg" alt="App UI Screen 3" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                           <Image src="/gip/iPhone 11 Pro7.svg" alt="App UI Screen 4" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 mt-4 sm:mt-0 lg:mt-32">
                           <Image src="/gip/iPhone 11 Pro3.svg" alt="App UI Screen 5" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                           <Image src="/gip/iPhone 11 Pro5.svg" alt="App UI Screen 6" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 mt-12 sm:mt-16 lg:mt-4">
                           <Image src="/gip/iPhone 11 Pro4.svg" alt="App UI Screen 7" width={300} height={600} priority className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                           <Image src="/gip/iPhone 11 Pro9.svg" alt="App UI Screen 8" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                        </div>

                        {/* Column 5 */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-8 lg:mt-20">
                           <Image src="/gip/iPhone 11 Pro5.svg" alt="App UI Screen 9" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                           <Image src="/gip/iPhone 11 Pro10.svg" alt="App UI Screen 10" width={300} height={600} className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 rounded-[20px] sm:rounded-[30px]" />
                        </div>

                     </div>
                  </div>
               </section>

               <OurProjectsSection />
               <CompaniesLove />

            </div>
         </div>
      </>
   );
}
