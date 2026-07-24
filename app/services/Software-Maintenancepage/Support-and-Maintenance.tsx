'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SoftwareMaintenance {
    title: string;
    icon: string;
    points: string[];
}

const cards: SoftwareMaintenance[] = [
    {
        title: 'In-house maintenance and support',
        icon: "/images/in-house 1.svg",
        points: [
            "Reduced development time, Agile methodology implementation. Sprint-based delivery system",
            "No recruitment overhead, No infrastructure cost, Pay only for required hours/resources",
            "No recruitment overhead, No infrastructure cost, Pay only for required hours/resources"
        ]
    },
    {
        title: 'Fully outsourced maintenance and support',
        icon: "/images/outsourced 1.svg",
        points: [
            "Complete ownership of application, server, and infrastructure",
            "Real-time system monitoring. Automated alerts for downtime or failures",
            "No need for in-house IT team. Predictable monthly maintenance cost. Reduced operational risk"
        ]
    },
];

const SupportAndMaintenance: React.FC = () => {
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
        <section className="text-black py-12 sm:py-16 md:py-20 font-THICCCBOI overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
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
                        Support and Maintenance Activities
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-7xl mx-auto">
                        Apart from technical expertise, many other factors influence project success and software quality. Appadvent's teams approach all of them seriously.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
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
                                        className="relative h-full rounded-[22px] bg-white p-8 sm:p-10 flex flex-col items-center text-center shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center flex-grow w-full">
                                            <div className="relative mb-8 inline-flex">
                                                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                    <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                        <Image
                                                            src={mounted && imageKeys[index] ? `${item.icon}?v=${imageKeys[index]}` : item.icon}
                                                            alt={item.title}
                                                            width={52}
                                                            height={52}
                                                            className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-xl sm:text-2xl md:text-[26px] mb-4 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-12 h-[3px] bg-[#32B9E9]/30 group-hover:w-20 group-hover:bg-[#32B9E9]/60 rounded-full mb-6 transition-all duration-500 mx-auto" />

                                            <div className="flex flex-col gap-4 w-full text-left">
                                                {item.points.map((point, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 group/item">
                                                        <FaRegStar className="text-[#32B9E9]/60 group-hover/item:text-[#32B9E9] w-[20px] h-[20px] flex-shrink-0 mt-1 transition-colors duration-300" />
                                                        <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
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

export default SupportAndMaintenance;
