"use client";
import React, { useState, useRef } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import { motion } from 'framer-motion';

const ITSkills = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        {
            title: ".Net Developer",
            description: "Scale enterprise applications with experienced .NET developers skilled in ASP.NET, C#, APIs, cloud integration, and backend architecture. Build secure, high-performance solutions tailored for business operations, automation, and long-term digital scalability requirements.",
        },
        {
            title: "Java",
            description: "Hire dedicated Java developers to create robust, scalable, and secure enterprise-grade applications. Expertise includes Spring Boot, microservices, backend systems, and cross-platform development optimized for performance, flexibility, and seamless business integration needs.",
        },
        {
            title: "Python",
            description: "Strengthen development teams with Python experts specializing in web applications, automation, AI integrations, data processing, and scalable backend systems. Deliver efficient, clean, and reliable solutions supporting modern digital transformation and innovation goals.",
        },
        {
            title: "Node.js",
            description: "Expand your engineering capabilities with Node.js developers experienced in real-time applications, APIs, microservices, and scalable backend architectures. Build fast, lightweight, and high-performing digital platforms optimized for seamless user experiences and growth.",
        },
        {
            title: "React Native",
            description: "Develop cross-platform mobile applications faster with React Native specialists delivering native-like performance, reusable components, and smooth user experiences. Ideal for startups and enterprises seeking cost-effective, scalable, and visually engaging mobile solutions.",
        },
        {
            title: "IOS(obj-c / Swift)",
            description: "Hire iOS developers proficient in Swift and Objective-C to create secure, high-performance Apple applications. Deliver intuitive user experiences, seamless functionality, and scalable mobile solutions aligned with modern iOS ecosystem standards and expectations.",
        },
        {
            title: "Android(Kotlin / Java)",
            description: "Build feature-rich Android applications with skilled Java and Kotlin developers focused on performance, scalability, and user-centric experiences. Create reliable mobile solutions compatible across devices while ensuring security, responsiveness, and long-term maintainability standards.",
        },
        {
            title: "Flutter",
            description: "Accelerate mobile development using Flutter experts who build visually consistent, high-performance applications from a single codebase. Deliver seamless cross-platform experiences with faster deployment, scalable architecture, and modern UI design optimized for engagement.",
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 font-THICCCBOI relative overflow-hidden w-full bg-white">
            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-gray-900 leading-tight mb-3 sm:mb-4 font-THICCCBOI">
                        IT skills available for hiring
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-3xl mx-auto font-THICCCBOI">
                        We assist in specific development stages as well as provide full-cycle application implementation. Our staff augmentation services include:
                    </p>
                </motion.div>
            </div>

            {/* Cards Carousel */}
            <div className="relative z-10 w-full">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100%-1280px)/2+2rem))] pr-4 sm:pr-6 lg:pr-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100%-1280px)/2+2rem))] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30, scale: 0.96 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                                className="w-[290px] sm:w-[340px] md:w-[380px] snap-center shrink-0 flex flex-col"
                            >
                                <div className="bg-white border border-gray-200/80 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300 group">
                                    {/* Content */}
                                    <div className="flex flex-col flex-grow text-center">
                                        <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                                            {skill.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                                            {skill.description}
                                        </p>
                                    </div>

                                    {/* Action Button (without arrow icon) */}
                                    <div className="text-center pt-2">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="font-semibold text-[#E63946] text-sm sm:text-base hover:underline bg-transparent border-none cursor-pointer p-0 transition-colors"
                                        >
                                            Hire now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default ITSkills;

