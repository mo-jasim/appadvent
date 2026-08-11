"use client";
import React, { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import ITSkills from './ITSkills';
import DevelopmentCycle from './development-cycle';
import ExpertsInAdvanced from './Experts-in-advanced';
import DevelopmentSkills from './Development-Skills';
import ScienceSoft from './How-ScienceSoft’s';
import Cooperation from './Cooperation-Models';
import CompaniesLove from '../website-designing-development/Companies-Love';
import { motion } from 'framer-motion';
import Image from 'next/image';


const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="font-THICCCBOI w-full overflow-x-hidden">
            <section className="relative mb-[80px] pb-[80px] pt-[100px] overflow-hidden " style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}>
                <motion.div
                    className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto px-4 mt-4 sm:mt-[80px]"
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
                    <motion.p
                        className='text-white text-3xl sm:text-5xl lg:text-[60px] font-bold text-center pb-2'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        IT Staff Augmentation Services
                    </motion.p>
                    {/* <motion.p
                        className='text-white text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-center leading-tight'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Cost-Effective Staffing Solutions
                    </motion.p> */}
                    <motion.p
                        className='max-w-7xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-gray-400 leading-relaxed px-2'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        We deliver flexible and cost-effective staffing solutions tailored to your business needs. Whether you require temporary, contract, or permanent talent, our recruitment experts help you find qualified professionals faster, reduce hiring costs, and build teams that drive long-term success.
                    </motion.p>
                    {/* <motion.div
                        className="flex justify-center mb-[80px] mt-4"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-[#32B9E9] text-semibold text-[20px] px-5 py-2 sm:px-6 sm:py-2.5 cursor-pointer underline font-THICCCBOI transition-colors hover:text-[#2aa8d6]"
                        >
                            Have a project in mind?
                        </button>
                    </motion.div> */}

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
            {/* <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} > */}

            {/* IT skills available for hiring */}
            <ITSkills />
            {/* Experts to complete a software development cycle */}
            <DevelopmentCycle />
            {/* Experts in advanced techs */}
            <ExpertsInAdvanced />
            {/* Development Skills of Our Node.js Developers */}
            <DevelopmentSkills />
            {/* How Appadvent’s Approach Works to Your Benefit */}
            <ScienceSoft />
            {/* Outsourcing Cooperation Models We Support */}
            <Cooperation />
            {/* <CompaniesLove /> */}
            {/* </div> */}
            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default page;
