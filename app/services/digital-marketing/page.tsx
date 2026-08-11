"use client";
import React, { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import MarketingServices from "./Marketing-Services";
import ProvidingProcess from "./Providing-Process";
import MarketingCompany from "./Marketing-company";
import HowWeDrive from "./How-We-Drive";
import BestFromOthers from "./Best-from-Others";
import CompaniesLove from "../website-designing-development/Companies-Love";
import { motion } from 'framer-motion';
import Image from "next/image";

const DigitalMarketing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="font-THICCCBOI w-full overflow-x-hidden">
            {/* <div className="overflow-hidden" style={{ backgroundImage: "url('/images/polygon.png')" }}> */}

            {/* ── HERO SECTION ── */}
            <section
                className="relative py-20 sm:py-24 md:py-28 lg:py-40 overflow-hidden px-4"
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
                        className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold pb-2"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Our Digital Marketing Services
                    </motion.p>
                    {/* <motion.p
                            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold leading-tight"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >
                            Visibility That Drives Sales
                        </motion.p> */}
                    <motion.p
                        className="text-sm sm:text-base lg:text-[18px] mx-auto w-full text-white leading-relaxed max-w-7xl px-2"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        Grow your business with data-driven digital marketing strategies designed to increase visibility, attract qualified leads, and maximize conversions. From SEO and PPC to social media marketing, content creation, and email campaigns, we deliver customized solutions that help your brand reach the right audience and achieve measurable results.
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

            <MarketingServices />
            <ProvidingProcess />
            <MarketingCompany />
            <HowWeDrive />
            <BestFromOthers />
            {/* <CompaniesLove /> */}
            {/* </div> */}
            {/* {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )} */}
        </div>
    );
}

export default DigitalMarketing;