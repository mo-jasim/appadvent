"use client";
import React, { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import DevelopmentServices from './Development-Services';
import BuildingAll from './Building-All';
import Software from './Software-for-different';
import { motion } from 'framer-motion';

const CustomBasedServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="font-THICCCBOI w-full overflow-x-hidden">
                <div className="overflow-hidden" style={{ backgroundImage: "url('/images/polygon.png')" }}>

                    {/* ── HERO SECTION ── */}
                    <section
                        className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden px-4"
                        style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}
                    >
                        <motion.div 
                            className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto text-center"
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
                                className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold pb-2"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                Your Growth, Our Services
                            </motion.p>
                            <motion.p 
                                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold leading-tight"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                Custom Base Services
                            </motion.p>
                            <motion.p 
                                className="text-sm sm:text-base lg:text-[18px] mx-auto w-full text-white leading-relaxed max-w-7xl px-2"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                Appadvent provides custom-based software development solutions to meet your specific corporate needs. Our skilled team transforms your ideas into robust, user-friendly initiatives, raising production and interaction. We guarantee that every solution, from conception to execution, will precisely align with your requirements, be scalable, and maintain security. Modern technologies give you a competitive edge using creative features and seamless integration.
                            </motion.p>
                            <motion.div 
                                className="flex justify-center mt-4 mb-4"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-[#32B9E9] font-semibold text-base sm:text-lg underline cursor-pointer hover:text-[#2aa8d6] transition-colors"
                                >
                                    Have a project in mind?
                                </button>
                            </motion.div>
                        </motion.div>
                    </section>

                </div>
                {isModalOpen && (
                    <ConsultationModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
            <DevelopmentServices />
            <BuildingAll />
            <Software />
        </>
    );
}

export default CustomBasedServices;