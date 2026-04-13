"use client";

import React from 'react'
import PortfolioCard from '../../components/PortfolioCard'
import Link from 'next/link'
import ConsultationModal from '@/components/ConsultationModal';
import { useState } from 'react';



export default function PortfolioPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <main
                className="relative min-h-screen pb-20"
                style={{
                    backgroundImage: "url('/images/polygon.png')",
                }}
            >
                <section className="relative overflow-hidden font-THICCCBOI">

                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 mt-[80px] mb-[80px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                            <h1 className="text-[36px] sm:text-[45px] lg:text-[55px] font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                                Our Latest Work
                            </h1>

                            <p className="text-black text-[16px] sm:text-[18px] max-w-lg mb-8 leading-relaxed">
                                We specialize in delivering innovative IT solutions that drive growth and efficiency
                                for businesses of all sizes.
                            </p>

                            {/* STATS */}
                            <div className="flex justify-center lg:justify-start items-center gap-8 sm:gap-16 mb-8 lg:mb-12">
                                {/* First Stat */}
                                <div className='flex items-center gap-3'>
                                    <p className="text-[36px] sm:text-[42px] font-bold text-gray-900 leading-none mb-1">45+</p>
                                    <p className="text-[15px] sm:text-[16px] text-gray-700 font-medium leading-[1.3] text-left">
                                        Successful<br />Projects
                                    </p>
                                </div>
                                {/* Second Stat */}
                                <div className='flex items-center gap-3'>
                                    <p className="text-[36px] sm:text-[42px] font-bold text-gray-900 leading-none mb-1">4+</p>
                                    <p className="text-[15px] sm:text-[16px] text-gray-700 font-medium leading-[1.3] text-left">
                                        Years of<br />Experience
                                    </p>
                                </div>
                            </div>

                            <p
                                onClick={() => setIsModalOpen(true)}
                                className="text-[#32B9E9] font-medium underline cursor-pointer hover:text-[#2aa8d6] transition-colors"
                            >
                                Have a project in mind?
                            </p>
                        </div>

                        <div className="relative flex justify-center order-1 lg:order-2 w-full">
                            <img src="/images/p1.png" alt="Illustration" className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px]" />
                        </div>
                    </div>

                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] sm:gap-[32px] lg:gap-[32px]">
                            <PortfolioCard
                                image="/images/p9.png"
                                title="Freshup – Social networking app"
                                duration="3 Months"
                                platform="Application"
                                slug="Freshup – Social networking app"
                                href=""
                            />
                            <PortfolioCard
                                image="/images/p8.png"
                                title="Goalkick – Social networking app"
                                duration="3 Months"
                                platform="Application"
                                slug="goalKick"
                                href="/services/case-study/Goalkick"
                            />

                            <PortfolioCard
                                image="/images/p2.png"
                                title="Claim 360"
                                duration="3 Months"
                                platform="Web application"
                                slug="claim360"
                                href="/services/case-study/CRMcase"
                            />

                            <PortfolioCard
                                image="/images/p3.png"
                                title="Privicam – storage privacy app"
                                duration="3 Months"
                                platform="Application"
                                slug="Privicam – storage privacy app"
                            />

                            <PortfolioCard
                                image="/images/p4.png"
                                title="Letramway"
                                duration="3 Months"
                                platform="Website"
                                slug="Letramway"
                                href="/services/case-study/Letramway"
                            />

                            <PortfolioCard
                                image="/images/p5.png"
                                title="Detect microplastic"
                                duration="3 Months"
                                platform="Application"
                                slug="Detect microplastic"
                            />

                            <PortfolioCard
                                image="/images/p6.png"
                                title="Niotek"
                                duration="3 Months"
                                platform="Application"
                                slug="Niotek"
                            />

                            <PortfolioCard
                                image="/images/p7.png"
                                title="Droneverse"
                                duration="3 Months"
                                platform="Application"
                                slug="Droneverse"
                            />
                        </div>
                    </div>
                </section >
                {isModalOpen && (
                    <ConsultationModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </main>
        </>
    )
};
