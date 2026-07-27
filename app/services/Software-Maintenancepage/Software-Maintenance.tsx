'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SoftwareMaintenanceItem {
    title: string;
    icon: string;
    points: string[];
}

const cards: SoftwareMaintenanceItem[] = [
    {
        title: 'Mobile app developers',
        icon: "/SVG-motion/s1.svg",
        points: [
            "Continuous software monitoring and health checks.",
            "Fixing application performance issues.",
            "Resolving software configuration and account administration issues.",
            "Database administration."
        ]
    },
    {
        title: 'Back-end Developers',
        icon: "/SVG-motion/s5.svg",
        points: [
            "Functional, regression, integration, and other types of testing to validate the quality and security of software after introducing the required changes.",
            "Unit testing."
        ]
    },
    {
        title: 'Frontend Developers',
        icon: "/SVG-motion/s4.svg",
        points: [
            "Functional, regression, integration, and other types of testing to validate the quality and security of software after introducing the required changes.",
            "Unit testing."
        ]
    },
    {
        title: 'Test engineers',
        icon: "/SVG-motion/s7.svg",
        points: [
            "Functional, regression, integration, and other types of testing to validate the quality and security of software after introducing the required changes.",
            "Unit testing."
        ]
    },
    {
        title: 'DevOps Engineers',
        icon: "/SVG-motion/s6.svg",
        points: [
            "Fixing issues on the code and database levels.",
            "Creating new software components or features.",
            "Implementing software customizations, integrations, and performing migrations.",
            "Unit testing."
        ]
    },
    {
        title: 'Help desk specialists',
        icon: "/SVG-motion/s8.svg",
        points: [
            "Receiving, registering, and tracking queries from software users.",
            "Solving simple and repeating issues (e.g., username and password problems, installing newly released patches and service packs).",
            "Escalating unsolved issues to L2/L3."
        ]
    },
];

const SoftwareMaintenance: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>(new Array(cards.length).fill(0));

    useEffect(() => {
        setMounted(true);
        setImageKeys(cards.map(() => Date.now()));
    }, []);

    const handleHover = (index: number): void => {
        if (!mounted) return;
        setImageKeys((prev) => {
            const updated = [...prev];
            updated[index] = Date.now();
            return updated;
        });
    };

    return (
        <section className="text-black py-16 sm:py-20 md:py-24 font-THICCCBOI overflow-hidden">
            <style>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              @keyframes iconFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-7">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight">
                        Our Software Maintenance Teams
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-6xl mx-auto">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
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
                    {cards.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >
                            <div className="block h-full group" onMouseEnter={() => handleHover(index)}>
                                <div className="relative h-full rounded-[24px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[22px] bg-white p-6 sm:p-8 flex flex-col items-center text-center shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center flex-grow w-full">
                                            <div className="relative mb-6 inline-flex self-center lg:self-start">
                                                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                    <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                        <Image
                                                            src={mounted && imageKeys[index] ? `${item.icon}?v=${imageKeys[index]}` : item.icon}
                                                            alt={item.title}
                                                            width={40}
                                                            height={40}
                                                            className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[3px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-5 transition-all duration-500 mx-auto" />

                                            <div className="flex flex-col gap-3 w-full text-left flex-grow">
                                                {item.points.map((point, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 group/item">
                                                        <FaRegStar className="text-[#32B9E9]/60 group-hover/item:text-[#32B9E9] w-[18px] h-[18px] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                                                        <p className="text-gray-700 text-sm sm:text-[15px] font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                                                            {point}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default SoftwareMaintenance;
