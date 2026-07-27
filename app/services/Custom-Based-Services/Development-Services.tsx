'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MobileApplication {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MobileApplication[] = [
    {
        title: 'WebApp Development',
        Icon: "/SVG7/icon_2.svg",
        desc: 'Build scalable and responsive web applications tailored to your business goals. We create secure, high-performance digital platforms with seamless functionality, modern UI/UX, and optimized user experiences across all devices and industries.'
    },
    {
        title: 'Mobile App Development ',
        Icon: "/SVG7/icon_4.svg",
        desc: 'Develop feature-rich mobile applications for Android and iOS with intuitive interfaces and smooth performance. Our mobile solutions focus on scalability, user engagement, security, and delivering exceptional digital experiences for modern businesses.'
    },
    {
        title: 'Software Software',
        Icon: "/SVG7/icon_prototype ag.svg",
        desc: 'Create custom software solutions designed to streamline operations, automate workflows, and improve business efficiency. Our development team delivers secure, scalable, and high-performing software aligned with your unique operational requirements and goals.'
    },
    {
        title: 'Enterprise Application Integration',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'Integrate enterprise systems, applications, and workflows seamlessly to improve business productivity and operational efficiency. We ensure secure data flow, system compatibility, and scalable integrations that support long-term digital transformation initiatives.'
    },
    {
        title: 'Cloud-Based Solutions',
        Icon: "/SVG7/icon_5.svg",
        desc: 'Leverage cloud technologies to build flexible, scalable, and secure digital infrastructures. Our cloud-based solutions improve accessibility, performance, collaboration, and operational efficiency while supporting modern business growth and remote accessibility requirements.'
    },
    {
        title: 'Microservices Architecture',
        Icon: "/SVG7/icon_6.svg",
        desc: 'Develop scalable applications using microservices architecture for improved flexibility, faster deployment, and seamless system management. We build modular solutions that enhance performance, simplify maintenance, and support continuous business scalability efficiently.'
    },
    {
        title: 'DevOps Services',
        Icon: "/SVG7/icon_7.svg",
        desc: 'Optimize software development and deployment processes with reliable DevOps solutions. We streamline collaboration, automation, testing, and infrastructure management to improve delivery speed, operational efficiency, and overall software performance consistency.'
    }
];

const DevelopmentServices: React.FC = () => {
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
        <section className="text-black mt-[80px] mb-[160px] font-THICCCBOI max-w-7xl mx-auto overflow-hidden">
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
                    className="text-center mb-12 md:mb-16 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Custom-Based Software Development Services
                    </h2>
                    <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI leading-relaxed">
                        We build tailored digital solutions designed around your unique business goals, workflows, and customer needs. From strategy and development to deployment and support, Appadvent delivers scalable, high-performance services that drive measurable business growth
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-8"
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
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-6 md:p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col flex-grow">
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

                                            <h3 className="font-bold text-[18px] md:text-[20px] text-[#050A15] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
                                            <p className="text-black text-sm md:text-[15px] font-THICCCBOI leading-relaxed flex-grow">
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
}

export default DevelopmentServices;
