"use client";
import React, { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import SupportAndMaintenance from "./Support-and-Maintenance";
import SoftwareMaintenance from "./Software-Maintenance";
import AverageCost from "./Average-Cost";
import { motion } from 'framer-motion';
import Image from 'next/image';

const SoftwareMaintenancePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="font-THICCCBOI w-full overflow-x-hidden">
            <section className="relative mb-[80px] pb-[80px] pt-[80px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}>
                <motion.div
                    className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto px-4 mt-[80px]"
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
                        className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center pb-2 flex-wrap'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Software Maintenance and<br />Support Services
                    </motion.p>
                    <motion.p
                        className='max-w-7xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-white leading-relaxed px-2'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Ensure your software stays secure, reliable, and future-ready with our comprehensive maintenance and support services. From bug fixes and performance optimization to security updates, feature enhancements, and proactive monitoring, we keep your applications running smoothly while minimizing downtime and maximizing business continuity.
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
            {/* <div className="" style={{
                backgroundImage: "url('/images/polygon.png')",
            }}> */}
            <SupportAndMaintenance />
            <SoftwareMaintenance />
            <AverageCost />
            {/* </div> */}
            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default SoftwareMaintenancePage;