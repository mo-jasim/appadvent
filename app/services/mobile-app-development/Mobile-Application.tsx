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
                                    <div className="relative h-full rounded-[20px] p-[1.5px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                        <div
                                            className="relative h-full rounded-[19px] bg-white p-6 sm:p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                            style={{ transformStyle: "preserve-3d" }}
                                        >
                                            <div className="absolute inset-0 overflow-hidden rounded-[19px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                            </div>
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                            <div style={{ transform: "translateZ(30px)" }} className="flex flex-col flex-grow">
                                                <div className="relative mb-6 inline-flex self-start">
                                                    <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                    <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                        <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                            <Image
                                                                src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                                                alt={item.title}
                                                                width={36}
                                                                height={36}
                                                                className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
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
