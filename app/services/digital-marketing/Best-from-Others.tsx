'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BestFromOthers {
    title: string;
    Icon: string;
    desc: string;
}

const cards: BestFromOthers[] = [
    {
        title: 'Industry Expertise',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: "Our experienced digital marketing professionals understand diverse industries, audience behavior, and market trends. This expertise helps us create targeted strategies that improve brand visibility, customer engagement, and business performance effectively.",
    },
    {
        title: 'Custom Solutions',
        Icon: "/Digimark.img/managed icon.svg",
        desc: "Every business has different goals and challenges. We create personalized marketing strategies based on your industry, audience, competitors, and objectives to deliver maximum impact and long-term digital growth opportunities."
    },
    {
        title: 'Agile Methodology',
        Icon: "/SVG4/icons_professional-growth.svg",
        desc: "We follow a flexible and performance-driven marketing process that allows quick strategy adjustments based on campaign insights, trends, and analytics. This helps improve efficiency, adaptability, and overall marketing performance consistently."
    },
    {
        title: 'Proven Track Record',
        Icon: "/SVG5/3.svg",
        desc: "Our successful campaigns across SEO, advertising, branding, and social media marketing have helped businesses increase traffic, generate leads, and improve conversions through result-oriented digital marketing strategies."
    },
    {
        title: 'Dedicated Support',
        Icon: "/SVG-motion/s9.svg",
        desc: "We provide continuous support, regular reporting, strategy discussions, and campaign monitoring to ensure smooth execution. Our team stays connected throughout the process to maintain transparency and achieve better marketing outcomes."
    },
    {
        title: 'Scalable Solutions',
        Icon: "/Digimark.img/icon_Scalable.svg",
        desc: "Our digital marketing services are designed to scale with your business growth. Whether targeting local customers or global markets, we build adaptable strategies that support long-term expansion and sustainable success."
    },
];

const BestFromOthers: React.FC = () => {
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
        <section className="text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-THICCCBOI overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
                        How our Digital Marketing are Best from Others
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-[16px] leading-relaxed max-w-6xl mx-auto">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
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
                            <div className="bg-white border border-gray-200/80 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-sm transition-all duration-300 group">
                                {/* Icon */}
                                <div className="flex justify-center mb-5 sm:mb-6">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                        alt={item.title}
                                        width={56}
                                        height={56}
                                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center">
                                    <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default BestFromOthers;

