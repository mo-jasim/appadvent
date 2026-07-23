'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface ServiceGridCard {
    title: string;
    icon: string;
    description: string;
}

const cards: ServiceGridCard[] = [
    {
        title: 'Web Portals',
        icon: '/SVG-motion/s1.svg',
        description: 'Build secure and interactive portals that connect customers, employees, vendors, and partners. Our solutions simplify communication, centralize information, and improve operational efficiency across your organization.'
    },
    {
        title: 'UX and UI Design',
        icon: '/SVG-motion/s2.svg',
        description: 'Design intuitive and engaging user experiences that align with your business goals. We create user-centered interfaces that improve usability, accessibility, and customer satisfaction.'
    },
    {
        title: 'Architecture',
        icon: '/SVG-motion/s3.svg',
        description: 'Plan scalable and reliable system architectures that support long-term growth. We focus on performance, security, maintainability, and seamless integration with your business processes.'
    },
    {
        title: 'Front-end Development',
        icon: '/SVG-motion/s4.svg',
        description: 'Create responsive and interactive user interfaces using modern web technologies. Our front-end solutions deliver fast performance, accessibility, and consistent experiences across devices and browsers. '
    },
    {
        title: 'Back-end Development',
        icon: '/SVG-motion/s5.svg',
        description: 'Develop secure and efficient server-side systems that power your applications. We build APIs, databases, and business logic designed for reliability, scalability, and smooth performance.'
    },
    {
        title: 'Integration',
        icon: '/SVG-motion/s6.svg',
        description: 'Connect your web solutions with third-party services, enterprise systems, and cloud platforms. We ensure secure, reliable, and efficient data flow across your digital ecosystem.'
    },
    {
        title: 'Testing & QA',
        icon: '/SVG-motion/s7.svg',
        description: 'Ensure quality through comprehensive testing and quality assurance practices. We identify issues early, improve reliability, and deliver software that performs consistently in real-world environments.'
    },
    {
        title: 'Helpdesk',
        icon: '/SVG-motion/s8.svg',
        description: 'Provide quick, reliable assistance for your web product. Our support team resolves issues efficiently, answers questions, and ensures users can fully leverage the solution.'
    },
    {
        title: 'Continuous Support and evolution',
        icon: '/SVG-motion/s9.svg',
        description: 'Keep your web product secure, optimized, and aligned with changing business needs. We provide maintenance, updates, enhancements, and ongoing technical support for long-term success.'
    },
];

const ServiceGridCard: React.FC = () => {
    // const [timer, setTimer] = useState<number>(0); // <------------ timer 
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>([0, 0, 0, 0]);

    // setInterval(() => { // <------------ timer 
    //     setTimer((prev) => prev + 1);// <------------ timer 
    // }, TIMER_SEC);// <------------ timer 

    // 👇 Runs only on client AFTER hydration
    useEffect(() => {
        setMounted(true);
        setImageKeys(cards.map(() => Date.now()));
    }, []); // <------------ timer, [] -> [timer]

    const handleHover = (index: number): void => {
        if (!mounted) return;

        setImageKeys((prev) => {
            const updated = [...prev];
            updated[index] = Date.now();
            return updated;
        });
    };

    return (
        <section className="text-black py-10 md:py-20 px-4 font-THICCCBOI max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Full-Scale Web Development by <span className="text-[#32B9E9]">Appadvent</span>
                    </h2>
                    <p className="max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-black leading-tight px-4">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                    </p>
                </div>

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
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    {cards.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.92 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.55,
                                        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                                    },
                                },
                            }}
                        >
                            <div
                                className="block h-full group"
                                onMouseEnter={() => handleHover(index)}
                            >
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[19px] bg-white p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[19px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent"
                                                style={{
                                                    animation: "shimmer 2s ease-in-out infinite",
                                                }}
                                            />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />
                                        <div style={{ transform: "translateZ(30px)" }}>
                                            <div className="relative mb-6 inline-flex self-start">
                                                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                    <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                        <Image
                                                            src={
                                                                mounted && imageKeys[index]
                                                                    ? `${item.icon}?v=${imageKeys[index]}`
                                                                    : item.icon
                                                            }
                                                            alt={item.title}
                                                            width={48}
                                                            height={48}
                                                            className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-[20px] md:text-[24px] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
                                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI leading-relaxed">
                                                {item.description}
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

export default ServiceGridCard;
