'use client';

import React from 'react';
import { FaRegStar } from "react-icons/fa";
import OurProjectsSection from '../website-designing-development/Our-Projects-Section';
import CompaniesLove from '../website-designing-development/Companies-Love';
import { motion } from 'framer-motion';

const AverageCost = () => {
    const pricingPlans = [
        {
            price: "From $20/ticket",
            features: [
                "L1 support for end users",
                "200–300 L1 tickets per month",
                "24/7 time coverage."
            ]
        },
        {
            price: "From $40/ticket",
            features: [
                "L2 support for end users.",
                "40–160 L2 tickets per month.",
                "24/7 time coverage."
            ]
        },
        {
            price: "From $2k to 3k /month",
            features: [
                "Maintenance of customer-facing software",
                "Software availability, performance, security etc.",
                "a high number of change requests is expected."
            ]
        }
    ];

    return (
        <>
            <section className="py-16 sm:py-20 md:py-24 font-THICCCBOI bg-[#001F26] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/polygon.png')] opacity-10 bg-cover bg-center pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        className="text-center mb-10 sm:mb-12 md:mb-16 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 md:mb-6 leading-tight">
                            Average Cost of Different Web Solutions
                        </h2>
                        <p className="text-white/80 text-sm sm:text-base md:text-[18px] max-w-6xl mx-auto leading-relaxed">
                            Web solutions are very different in functionality and scale, from simple corporate websites to complex enterprise systems.
                            Logically, the range of costs is wide too. Take a look at several examples from our practices and don't hesitate to request a free
                            quote that will be tailored to your specific solution.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                                className="bg-white text-black p-8 sm:p-10 rounded-[24px] flex flex-col items-start text-left h-full shadow-lg border-2 border-transparent hover:border-[#32B9E9]/30 hover:shadow-[0_20px_50px_rgba(50,185,233,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#32B9E9]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold mb-6 sm:mb-8 text-[#050A15] relative inline-block">
                                    {plan.price}
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-gradient-to-r from-[#32B9E9] to-transparent rounded-full group-hover:w-full transition-all duration-500" />
                                </h3>

                                <div className="flex flex-col gap-4 sm:gap-5 w-full mt-4 flex-grow relative z-10">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 group/item">
                                            <div className="bg-[#FF6B6B]/10 p-1.5 rounded-full group-hover/item:bg-[#FF6B6B]/20 transition-colors duration-300 mt-0.5">
                                                <FaRegStar className="text-[#FF6B6B] w-[16px] h-[16px] flex-shrink-0" />
                                            </div>
                                            <p className="text-gray-700 text-[15px] sm:text-[16px] font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* <OurProjectsSection /> */}
            {/* <CompaniesLove /> */}
        </>
    );
};

export default AverageCost;
