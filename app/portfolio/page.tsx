"use client";

import React from 'react'
import { motion } from 'framer-motion';
import PortfolioCard from '../../components/PortfolioCard'
import Link from 'next/link'
import ConsultationModal from '@/components/ConsultationModal';
import { useState } from 'react';
import Image from 'next/image';



export default function PortfolioPage() {
    const portfolioItems = [
        {
            image: "/images/p9.png",
            title: "Freshup – Social networking app",
            duration: "3 Months",
            platform: "Application",
            slug: "Freshup – Social networking app",
            href: "/portfolio/Freshup"
        },
        {
            image: "/images/p8.png",
            title: "Goalkick – Social networking app",
            duration: "3 Months",
            platform: "Application",
            slug: "Goalkick",
            href: "/portfolio/Goalkick"
        },
        {
            image: "/images/p2.png",
            title: "Claim 360",
            duration: "3 Months",
            platform: "Web application",
            slug: "claim360",
            href: "/services/case-study/CRMcase"
        },
        {
            image: "/images/p3.png",
            title: "Privicam – storage privacy app",
            duration: "3 Months",
            platform: "Application",
            slug: "Privicam – storage privacy app",
            href: '/portfolio/Privicam'
        },
        {
            image: "/images/p4.png",
            title: "Letramway",
            duration: "3 Months",
            platform: "Website",
            slug: "Letramway",
            href: "/portfolio/Letramway"
        },
        {
            image: "/images/p5.png",
            title: "Detect microplastic",
            duration: "3 Months",
            platform: "Application",
            slug: "Detect-microplastic",
        },
        {
            image: "/Letimg/Newness.svg",
            title: "Newness",
            duration: "3 Months",
            platform: "Application",
            slug: "Newness",
        },
        {
            image: "/Letimg/Queue-home-img.svg",
            title: "QMS — Smart Queue Management System",
            duration: "3 Months",
            platform: "Application",
            slug: "Queue Management System",
            href: "/portfolio/Queue-Management-System"
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <main
                className="relative min-h-screen pb-20 pt-20 sm:pt-22 lg:pt-24"
            >
                <section className="relative overflow-hidden font-THICCCBOI" >
                    <style>{`
                      @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                      }
                    `}</style>



                    <div className="relative z-10 max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-6 mt-2 sm:mt-4 mb-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" >
                        <motion.div
                            className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={{
                                hidden: { opacity: 0, y: -30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >

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

                            {/* <p
                                onClick={() => setIsModalOpen(true)}
                                className="text-[#32B9E9] text-semibold text-[20px]
        px-5 py-2 sm:px-6 sm:py-2.5 cursor-pointer underline"
                            >
                                Have a project in mind?
                            </p> */}

                            <motion.div
                                className="flex items-center justify-center mt-8"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                            >
                                <motion.button
                                    onClick={() => setIsModalOpen(true)}
                                    className="
                                            flex items-center gap-2.5 bg-[#E8354B] text-white
                                            px-4 py-2.5 sm:px-6 sm:py-3
                                            rounded-full text-sm sm:text-base font-medium cursor-pointer
                                            hover:bg-[#c92c40] transition-colors duration-300
                                          "
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Book a free consultant
                                    <Image src="/images/arrowicon2.svg" alt="icon" width={27} height={27} />
                                </motion.button>
                            </motion.div>

                        </motion.div>

                        <div className="relative flex justify-center order-1 lg:order-2 w-full">
                            <img src="/images/p1.png" alt="Illustration" className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px]" />
                        </div>
                    </div>

                    <div className="relative z-10 max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-7">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-[32px] sm:gap-[32px] lg:gap-[32px]"
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
                            {portfolioItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                    }}
                                >
                                    <PortfolioCard
                                        image={item.image}
                                        title={item.title}
                                        duration={item.duration}
                                        platform={item.platform}
                                        slug={item.slug}
                                        {...(item.href ? { href: item.href } : {})}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
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
