"use client";
import React, { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import MobileApplication from './Mobile-Application'
import MobileTechnologies from './MobileTechnologies'
import OurProjectsSection from '../website-designing-development/Our-Projects-Section'
import CompaniesLove from '../website-designing-development/Companies-Love'
import AverageCostMobile from './AverageCostMobile'
import { motion } from 'framer-motion';
import Image from "next/image";

const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="font-THICCCBOI w-full overflow-x-hidden">
            <section className="relative py-12 sm:py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}>
                <motion.div
                    className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            },
                        },
                    }}
                >
                    {/* <motion.p
                        className='gradient-text text-3xl sm:text-5xl lg:text-[60px] font-bold text-center pb-2 mt-4 sm:mt-[80px]'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Your Growth, Our Services
                    </motion.p> */}
                    <motion.p
                        className='text-white text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-center leading-tight mt-8 sm:mt-16 pt-4'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Mobile App Development
                    </motion.p>
                    <motion.p
                        className='max-w-7xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-white leading-relaxed px-2'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        We design, develop, and scale apps that turn your vision into reality. From MVPs to full-fledged products, our services cover every step. We create custom mobile applications that help businesses connect with customers, streamline operations, and accelerate growth. Our services go beyond coding—we help startups and businesses design, build, and grow apps that drive impact and ROI.
                    </motion.p>
                    <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="flex justify-center mb-[80px] mt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="
                                flex items-center gap-2.5 bg-[#E8354B] text-white
                                px-4 py-2.5 sm:px-6 sm:py-3
                                rounded-full text-sm sm:text-base font-medium cursor-pointer
                                hover:bg-[#c92c40] transition-colors duration-300
                              "
                        >
                            Book a free consultant
                            <Image src="/images/arrowicon2.svg" alt="icon" width={27} height={27} />
                        </button>
                    </motion.div>
                </motion.div>
            </section>
            <div className="" >
                <div className='w-full'>
                    {/* Mobile Application */}
                    <MobileApplication />
                    {/* Technologies We Work With */}
                    <MobileTechnologies />
                    {/* Average-Cost of Different Mobile Solutions */}
                    <AverageCostMobile />
                    {/* Our-Projects-Section */}
                    {/* <OurProjectsSection /> */}
                    {/* Companies-Love */}
                    {/* <CompaniesLove /> */}
                </div>
            </div>

            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default page;