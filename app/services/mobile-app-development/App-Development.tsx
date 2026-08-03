'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AppDevelopmentItem {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AppDevelopmentItem[] = [
    {
        title: 'Native mobile apps',
        Icon: '/SVG3/icon_native.svg',
        desc: 'Native applications are built specifically for iOS or Android platforms, delivering superior performance, enhanced security, and seamless access to device features. They provide the best possible user experience and reliability.'
    },
    {
        title: 'Near-native mobile apps',
        Icon: '/SVG3/icon_near-native.svg',
        desc: 'Near-native applications combine the advantages of native performance with faster development cycles. This approach helps businesses achieve high-quality user experiences while optimizing development costs and timelines.'
    },
    {
        title: 'Hybrid mobile apps',
        Icon: '/SVG3/icon_hybrid.svg',
        desc: 'Hybrid applications use a single codebase to run across multiple platforms. They offer a cost-effective solution for businesses looking to reach a wider audience while maintaining consistent functionality and design.'
    },
    {
        title: 'Responsive web apps',
        Icon: '/SVG3/icon_responsive.svg',
        desc: 'Responsive web applications adapt seamlessly to different screen sizes and devices. They provide a consistent user experience across smartphones, tablets, and desktops without requiring separate platform-specific development. '
    },
    {
        title: 'Progressive web apps (PWA)',
        Icon: '/SVG3/icon_progressive.svg',
        desc: 'Progressive Web Apps combine the accessibility of websites with the functionality of mobile applications. PWAs offer fast loading speeds, offline access, push notifications, and a highly engaging user experience.'
    },
];

const AppDevelopment: React.FC = () => {
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
        <section className="text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-THICCCBOI overflow-hidden bg-[#EAF8FD]">
            <div className="max-w-7xl mx-auto">
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
                        Mobile App Development Approaches We Use
                    </h2>
                    <p className="text-black text-sm sm:text-base md:text-[18px] leading-relaxed max-w-7xl mx-auto">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-center"
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
                            className={index >= 3 ? "lg:col-span-1" : ""}
                        >
                            <div className="block h-full group" onMouseEnter={() => handleHover(index)}>
                                <div className="relative h-full rounded-[22px] p-[2px] transition-all duration-300">
                                    <div
                                        className="relative h-full rounded-[19.5px] bg-white p-6 sm:p-8 flex flex-col shadow-sm border border-gray-100 overflow-hidden"
                                    >
                                        <div className="flex flex-col flex-grow">
                                            <div className="relative mb-6 inline-flex self-start">
                                                <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center">
                                                    <Image
                                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                                        alt={item.title}
                                                        width={64}
                                                        height={64}
                                                        className="object-contain shrink-0"
                                                    />
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-black text-sm sm:text-base font-THICCCBOI leading-relaxed flex-grow">
                                                {item.desc}
                                            </p>
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

export default AppDevelopment;


