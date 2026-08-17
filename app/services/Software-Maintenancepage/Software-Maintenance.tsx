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
        <section className="text-black py-16 sm:py-20 md:py-24 font-THICCCBOI overflow-hidden bg-white">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
                        Our Software Maintenance Teams
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-6xl mx-auto">
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
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-gray-200/80  rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-sm transition-all duration-300 group">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.icon}?v=${imageKeys[index]}` : item.icon}
                                        alt={item.title}
                                        width={56}
                                        height={56}
                                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center items-center">
                                    <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-gray-900 mb-5 leading-tight  transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <div className="flex flex-col gap-3 w-full text-left flex-grow">
                                        {item.points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3 group/item">
                                                <FaRegStar className="text-[#32B9E9]/60 group-hover/item:text-[#32B9E9] w-[18px] h-[18px] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                                                <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
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

export default SoftwareMaintenance;

