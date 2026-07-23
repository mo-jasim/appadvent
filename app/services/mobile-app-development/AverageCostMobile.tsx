'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AverageCostMobile = () => {
    const plans = [
        {
            title: "Simple app",
            features: [
                "Simple user interface and navigation.",
                "Basic features and functionality; focus on one primary function or task.",
                "Low programming complexity, fast development."
            ],
            price1: "$30,000–$80,000",
            price1Label: "Cost of a mobile app for business needs",
            price2: "$30,000–$80,000",
            price2Label: "Cost of a mobile product for commercial distribution"
        },
        {
            title: "App of medium complexity",
            features: [
                "Interactive interface, multi-step user journeys, more complicated (e.g., layered) navigation.",
                "Support for multiple use cases, a broad range of features and capabilities.",
                "Data storage and integrations with external APIs are likely.",
                "A moderate level of technical expertise is required."
            ],
            price1: "$80,000–$200,000",
            price1Label: "Cost of a mobile app for business needs",
            price2: "$150,000–$300,000",
            price2Label: "Cost of a mobile product for commercial distribution"
        },
        {
            title: "App with high complexity",
            features: [
                "Rich and dynamic interface, advanced interactions, multiple layers of navigation.",
                "Complex business logic and workflows, advanced features.",
                "Likely to involve the development of custom back-end logic and sophisticated data structures and algorithms.",
                "May require compliance with industry standards and regulations.",
                "Senior-level technical expertise is required."
            ],
            price1: "$200,000–$500,000",
            price1Label: "Cost of a mobile app for business needs",
            price2: "$300,000+",
            price2Label: "Cost of a mobile product for commercial distribution"
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 font-THICCCBOI text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 text-black leading-tight">
                        Average Cost of Mobile App Development
                    </h2>
                    <p className="text-gray-500 max-w-7xl mx-auto text-sm sm:text-base md:text-[18px] leading-relaxed">
                        The development cost of a mobile app of average complexity varies between $80,000 and $200,000. Please note that we are
                        talking about average figures. Surely, there are apps that cost less or more — it all depends on your requirements. In terms of
                        costs, we can roughly group mobile apps by the complexity of functionality and design and the development efforts required.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                            className="flex flex-col rounded-[20px] overflow-hidden bg-white shadow-sm border border-gray-100 hover:border-[#32B9E9]/40 hover:shadow-[0_20px_50px_rgba(50,185,233,0.15)] hover:-translate-y-2 transition-all duration-300 group"
                        >
                            {/* Header */}
                            <div className="bg-[#0E5366] py-5 sm:py-6 px-4 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                                <h3 className="text-white text-[22px] sm:text-[24px] font-bold relative z-10">{plan.title}</h3>
                            </div>

                            {/* Body */}
                            <div className="p-6 sm:p-8 flex-grow flex flex-col relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#32B9E9]/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <p className="text-gray-800 mb-5 font-bold text-[18px] sm:text-[20px] flex items-center gap-2">
                                    <span className="w-6 h-[2px] bg-[#32B9E9] rounded-full inline-block" />
                                    Features
                                </p>
                                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group/item">
                                            <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover/item:text-[#32B9E9] mt-0.5 flex-shrink-0 transition-colors duration-300" />
                                            <span className="text-gray-600 text-sm sm:text-[15px] leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Pricing Blocks */}
                                <div className="space-y-3 sm:space-y-4 mt-auto relative z-10">
                                    <div className="bg-[#EAF8FC] p-4 sm:p-5 rounded-[12px] text-center border border-transparent group-hover:border-[#32B9E9]/30 transition-colors duration-300">
                                        <p className="text-[18px] sm:text-[20px] font-bold text-[#1A1A1A] mb-1 group-hover:text-[#32B9E9] transition-colors duration-300">{plan.price1}</p>
                                        <p className="text-gray-500 text-[12px] sm:text-[13px] font-medium">{plan.price1Label}</p>
                                    </div>
                                    <div className="bg-[#EAF8FC] p-4 sm:p-5 rounded-[12px] text-center border border-transparent group-hover:border-[#32B9E9]/30 transition-colors duration-300">
                                        <p className="text-[18px] sm:text-[20px] font-bold text-[#1A1A1A] mb-1 group-hover:text-[#32B9E9] transition-colors duration-300">{plan.price2}</p>
                                        <p className="text-gray-500 text-[12px] sm:text-[13px] font-medium">{plan.price2Label}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AverageCostMobile;
