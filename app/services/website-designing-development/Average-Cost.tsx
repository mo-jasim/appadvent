'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface AverageCost {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AverageCost[] = [
    {
        title: 'From $20,000',
        Icon: "/SVG6/icons_price 1.svg",
        desc: 'Ideal for startups and small businesses seeking a professional online presence. Includes responsive design, essential pages, contact forms, and basic content management functionality. '
    },
    {
        title: 'From $70,000',
        Icon: "/SVG6/icons_price 2.svg",
        desc: 'Designed for organizations that require user authentication, role-based access, workflow automation, and centralized information management for customers, employees, or partners. '
    },
    {
        title: 'From $200,000',
        Icon: "/SVG6/icons_price 3.svg",
        desc: 'Built for growing businesses that need robust online selling capabilities, secure payment processing, inventory management, customer accounts, and seamless shopping experiences. '
    },
    {
        title: 'From $400,000',
        Icon: "/SVG6/icons_price 4.svg",
        desc: 'Comprehensive enterprise-grade systems with advanced integrations, custom workflows, high scalability, enhanced security, and complex business process automation tailored to large organizations. '
    },


];

const AverageCost: React.FC = () => {
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
        <section className="text-black mt-[100px] mb-[100px] font-THICCCBOI max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-4 text-center items-center justify-center sm:gap-5 relative z-10 max-w-7xl mx-auto mt-[80px]">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Average Cost of Different Web Solutions                    </h2>
                    <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] text-regular font-THICCCBOI leading-tight">
                        Web solutions are very different in functionality and scale, from simple corporate websites to complex enterprise systems. Logically, the range of costs is wide too. Take a look at several examples from our practices and don't hesitate to request a free quote that will be tailored to your specific solution.                  </p>
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8"
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
                                        className="relative h-full rounded-[19px] bg-white p-6 md:p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
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
                                                                    ? `${item.Icon}?v=${imageKeys[index]}`
                                                                    : item.Icon
                                                            }
                                                            alt={item.title}
                                                            width={48}
                                                            height={48}
                                                            className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-[18px] md:text-[20px] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
                                            <p className="text-black text-[13px] sm:text-[14px] font-THICCCBOI leading-relaxed">
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


export default AverageCost;
