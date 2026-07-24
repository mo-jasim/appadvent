'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AppTypeitem {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AppTypeitem[] = [
    {
        title: 'Enterprise resource & process management',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'Streamline business operations with enterprise management software designed to automate workflows, improve collaboration, and enhance productivity. We build scalable solutions that simplify complex business processes and support organizational growth efficiently.'
    },
    {
        title: 'Supply chain management',
        Icon: "/SVG-motion2/icons_communication.svg",
        desc: 'Optimize supply chain operations with smart software solutions that improve inventory tracking, logistics management, vendor coordination, and operational transparency. Our systems help businesses increase efficiency, reduce delays, and improve decision-making processes.'
    },
    {
        title: 'Financial management & accounting',
        Icon: "/SVG-motion2/icons_supply chain.svg",
        desc: 'Develop secure financial management software for accounting, reporting, expense tracking, invoicing, and transaction management. We create reliable solutions that improve financial accuracy, operational efficiency, and business decision-making capabilities.'
    },
    {
        title: 'Customer-centered software',
        Icon: "/SVG-motion2/icons_commerce.svg",
        desc: 'Build customer-focused software solutions that improve user engagement, satisfaction, and experience. Our applications are designed with intuitive interfaces, personalized workflows, and seamless functionality to strengthen customer relationships and business performance.'
    },
    {
        title: 'Business analytics',
        Icon: "/SVG-motion2/icons_healthcare.svg",
        desc: 'Transform raw business data into actionable insights with advanced analytics solutions. We develop systems that support reporting, performance tracking, forecasting, and strategic decision-making to improve operational efficiency and business growth.'
    },
    {
        title: 'HR management',
        Icon: "/SVG-motion2/icons_fitness.svg",
        desc: 'Simplify human resource operations with HR management software for employee tracking, payroll, attendance, recruitment, and performance management. Our solutions improve workforce efficiency, communication, and organizational productivity effectively.'
    },
    {
        title: 'IoT-connected solutions',
        Icon: "/SVG-motion2/icons_bank.svg",
        desc: 'Create intelligent IoT-powered software solutions that connect devices, automate processes, and enable real-time monitoring. We develop secure and scalable systems that improve operational efficiency, automation, and data-driven business management.'
    },
    {
        title: 'Communication & collaboration software',
        Icon: "/SVG-motion2/icons_travel.svg",
        desc: 'Enhance team productivity with communication and collaboration platforms designed for seamless interaction, file sharing, project management, and workflow coordination. Our solutions improve business communication and operational efficiency across organizations.'
    },
    {
        title: 'Emergency & security',
        Icon: "/SVG-motion2/icons_manufacturing.svg",
        desc: 'Develop secure emergency and safety management solutions with real-time monitoring, alerts, reporting, and incident management capabilities. Our systems help businesses improve security operations, response efficiency, and organizational safety standards.'
    }
];

const Software: React.FC = () => {
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
        <section className="text-black mt-[80px] mb-[80px] font-THICCCBOI max-w-7xl mx-auto overflow-hidden">
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
                    className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto text-center justify-center mb-[50px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        App Types We Develop: Industry & Use Cases
                    </h2>
                    <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI leading-relaxed">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                                hidden: { opacity: 0, y: 50, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >
                            <div className="block h-full group" onMouseEnter={() => handleHover(index)}>
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center flex-grow">
                                            <div className="relative mb-6 inline-flex self-start">
                                                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                    <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                        <Image
                                                            src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                                            alt={item.title}
                                                            width={48}
                                                            height={48}
                                                            className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-[20px] md:text-[24px] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300 text-center">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500 mx-auto" />
                                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI leading-relaxed flex-grow text-center">
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


export default Software;
