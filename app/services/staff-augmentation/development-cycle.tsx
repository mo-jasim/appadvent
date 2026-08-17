'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DevelopmentCycle = () => {
    const experts = [
        {
            title: "IT Consulting",
            description: "40+ consultants with 5–7 years of experience on average."
        },
        {
            title: "Database Architecture",
            description: "Architects skilled in SQL, NoSQL, and cloud databases."
        },
        {
            title: "Project Management",
            description: "45 certified PMs with 7–9 years of experience on average."
        },
        {
            title: "UX and UI",
            description: "Conversion-driven UX experts and UI designers."
        },
        {
            title: "Data Science",
            description: "Data scientists with 8 years of expertise on average."
        },
        {
            title: "Testing",
            description: "QA experts and testing automation engineers."
        },
        {
            title: "DevOps",
            description: "DevOps engineers with experience in 25+ CI/CD tools."
        },
        {
            title: "Security",
            description: "Certified ethical hackers, cloud security specialists, and SIEM professionals."
        },
        {
            title: "Support",
            description: "L1–L3 specialists. 25% of them provide 24/7 services."
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 font-THICCCBOI relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-50 bg-[radial-gradient(circle_at_top_left,rgba(50,185,233,0.05),transparent_70%)]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-50 bg-[radial-gradient(circle_at_bottom_right,rgba(50,185,233,0.05),transparent_70%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black mb-4 leading-tight">
                        Experts to complete a software
                        <br className="hidden md:block" /> development cycle
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {experts.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                            className="bg-white p-8 rounded-[24px]  border border-gray-100 hover:shadow-sm   transition-all duration-300 group"
                        >
                            <h3 className="text-[20px] md:text-[22px] font-bold text-black mb-3 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-[16px] leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default DevelopmentCycle;
