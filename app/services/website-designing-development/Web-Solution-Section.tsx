'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface WebSolutionCard {
    title: string;
    icon: string;
    description: string;
}

const cards: WebSolutionCard[] = [
    {
        title: 'Web Portals',
        icon: '/images/wp1.svg',
        description: 'We build secure and scalable web portals that connect users, customers, employees, and partners through a centralized platform. Our solutions streamline communication, data management, and business operations efficiently.'
    },
    {
        title: 'Websites',
        icon: '/images/wp2.svg',
        description: 'We create modern, responsive, and user-friendly websites that strengthen your online presence. Designed for performance and engagement, our websites help attract visitors and convert them into loyal customers.'
    },
    {
        title: 'E-commerce',
        icon: '/images/wp3.svg',
        description: 'Our e-commerce solutions deliver seamless shopping experiences with secure payments, intuitive navigation, and efficient order management. We help businesses increase sales, improve customer satisfaction, and grow online revenue.'
    },
    {
        title: 'Web Apps',
        icon: '/images/wp4.svg',
        description: 'We develop powerful web applications tailored to your business requirements. Combining functionality, scalability, and intuitive user experiences, our web apps help automate processes and improve overall productivity.'
    },
];

const WebSolutionSection: React.FC = () => {
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
        <section className="text-black mb-[80px] px-4 sm:px-6 lg:px-8 font-THICCCBOI max-w-7xl mx-auto ">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2 leading-tight">
                        What <span className="text-[#32B9E9]">Web Solutions</span> Do You Need?
                    </h2>
                    <p className='max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-black leading-tight px-2'>
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case
                    </p>
                </motion.div>

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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                                {/* Outer glow wrapper — gradient border on hover */}
                                <div className="relative h-full rounded-[20px] p-[1.5px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    {/* Inner card */}
                                    <div
                                        className="relative h-full rounded-[19px] bg-white p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {/* Shimmer sweep on hover */}
                                        <div className="absolute inset-0 overflow-hidden rounded-[19px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent"
                                                style={{
                                                    animation: "shimmer 2s ease-in-out infinite",
                                                }}
                                            />
                                        </div>

                                        {/* Top accent line */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }}>
                                            {/* Icon with animated circle background */}
                                            <div className="relative mb-6 inline-flex self-center lg:self-start">
                                                {/* Outer ring */}
                                                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                {/* Gradient circle behind icon */}
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

                                            {/* Divider */}
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

export default WebSolutionSection;
