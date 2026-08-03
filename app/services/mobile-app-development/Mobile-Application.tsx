'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AppType from './App-type';
import HowWeEnsure from './How-We-Ensure';
import AppDevelopment from './App-Development';
import { motion } from 'framer-motion';

interface MobileApplication {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MobileApplication[] = [
    {
        title: 'Product Design',
        Icon: "/SVG7/icon_prototype ag.svg",
        desc: 'We transform your ideas into user-focused mobile products through research, wireframing, and prototyping. Our design process ensures intuitive experiences that align with business goals and customer expectations.'
    },
    {
        title: 'Mobile App Consulting ',
        Icon: "/SVG7/icon_2.svg",
        desc: 'Our experts help define the right mobile strategy, technology stack, and development roadmap. We provide valuable insights that reduce risks, optimize costs, and accelerate project success.'
    },
    {
        title: 'Mobile App Design',
        Icon: "/SVG7/icon_3.svg",
        desc: 'We create visually appealing and user-friendly mobile interfaces that enhance engagement and usability. Every design is crafted to deliver seamless experiences across different devices and platforms.'
    },
    {
        title: 'Mobile App Development',
        Icon: "/SVG7/icon_4.svg",
        desc: 'We develop secure, scalable, and high-performing mobile applications tailored to your business requirements. Our solutions combine modern technologies with robust functionality to deliver exceptional user experiences. '
    },
    {
        title: 'Mobile App Integration',
        Icon: "/SVG7/icon_5.svg",
        desc: 'Connect your mobile application with third-party services, APIs, cloud platforms, and enterprise systems. We ensure seamless data exchange, enhanced functionality, and efficient business operations.'
    },
    {
        title: 'Testing & QA',
        Icon: "/SVG7/icon_6.svg",
        desc: 'Our quality assurance process ensures that your application performs flawlessly across devices and operating systems. We identify and resolve issues early to deliver a reliable and bug-free product.'
    },
    {
        title: 'Maintenance & Support',
        Icon: "/SVG7/icon_7.svg",
        desc: 'Keep your mobile application secure, updated, and optimized with our ongoing support services. We provide monitoring, maintenance, bug fixes, and performance enhancements to ensure long-term success.'
    },
    {
        title: 'Mobile App Modernization',
        Icon: "/SVG7/icon_8.svg",
        desc: 'Upgrade legacy mobile applications with modern technologies, improved performance, and enhanced user experiences. We help businesses stay competitive by adapting their apps to evolving market demands.'
    },
];

const MobileApplication: React.FC = () => {
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
        <>
            <section className="text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-THICCCBOI overflow-hidden">
                <div className="max-w-7xl mx-auto">
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight">
                            Our Mobile Application Development Services
                        </h2>
                        <p className="text-black text-sm sm:text-base md:text-[18px] leading-relaxed max-w-6xl mx-auto">
                            We assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
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
                                    <div className="relative h-full rounded-[20px] p-[1.5px] transition-all duration-300">
                                        <div
                                            className="relative h-full rounded-[19px] bg-white p-6 sm:p-8 flex flex-col shadow-sm border border-gray-100 overflow-hidden"
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
            {/* Mobile App Development Approaches We Use */}
            <AppDevelopment />

            {/* App Types We Develop: Industry & Use Cases */}
            <AppType />
            <HowWeEnsure />
        </>
    );
};


export default MobileApplication;
