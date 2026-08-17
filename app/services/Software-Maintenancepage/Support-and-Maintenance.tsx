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
        <section className="text-black py-12 sm:py-16 md:py-20 font-THICCCBOI overflow-hidden bg-white">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
                        Support and Maintenance Activities
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-7xl mx-auto">
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
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-gray-200/80  rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full hover:shadow-sm transition-all duration-300 group">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.icon}?v=${imageKeys[index]}` : item.icon}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain shrink-0"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center items-center">
                                    <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold text-gray-900 mb-6 leading-tight transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <div className="flex flex-col gap-4 w-full text-left">
                                        {item.points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3 group/item">
                                                <FaRegStar className="text-[#32B9E9]/60 group-hover/item:text-[#32B9E9] w-[20px] h-[20px] flex-shrink-0 mt-1 transition-colors duration-300" />
                                                <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
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

