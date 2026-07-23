'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface providingProcess {
    title: string;
    Icon: string;
    desc: string;
}

const cards: providingProcess[] = [
    {
        title: 'Collecting the requirement',
        Icon: "/Digimark.img/icons_1.svg",
        desc: 'We understand your business goals, target audience, and digital marketing needs to create a tailored strategy. Our team ensures clear communication, project transparency, and a result-focused approach from the beginning.'
    },
    {
        title: 'Market Analyzing',
        Icon: "/Digimark.img/icons_2.svg",
        desc: 'Our experts analyze competitors, audience behavior, industry trends, and market opportunities to build effective marketing strategies. This research-driven approach helps maximize brand visibility, engagement, and overall digital growth performance.'
    },
    {
        title: 'Planning',
        Icon: "/Digimark.img/icons_3.svg",
        desc: 'We create a structured digital marketing roadmap including SEO, social media, advertising, and branding strategies. Every campaign is planned carefully to align with your business objectives and measurable growth targets.'
    },
    {
        title: 'Competition research',
        Icon: "/Digimark.img/icons_4.svg",
        desc: 'We perform detailed competitor analysis to identify strengths, weaknesses, opportunities, and market gaps. This helps us create stronger marketing strategies that improve brand positioning and give your business a competitive advantage.'
    },
    {
        title: 'Ad Setup',
        Icon: "/Digimark.img/icons_5.svg",
        desc: "Our team sets up optimized marketing campaigns across search engines, social media platforms, and advertising networks. We focus on audience targeting, performance optimization, and creating impactful customer engagement strategies."
    },
    {
        title: 'Tracking Results',
        Icon: "/Digimark.img/icons_6.svg",
        desc: "We continuously monitor campaign performance using advanced analytics and reporting tools. From traffic growth to conversion tracking, we measure every key metric to ensure consistent marketing improvements and better ROI."
    },
    {
        title: 'Continuous Monitoring',
        Icon: "/Digimark.img/icons_7.svg",
        desc: 'Digital marketing requires constant improvement. We regularly optimize campaigns, content, keywords, and audience targeting strategies to improve visibility, engagement, lead generation, and long-term business growth results.'
    },
];

const CircularProgress = ({
    value,
    title,
    subtitle,
    greenPercent = 45,
    yellowPercent = 25,
    rotationCount = 0
}: {
    value: number;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    greenPercent?: number;
    yellowPercent?: number;
    rotationCount?: number;
}) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const yellowOffset = circumference - (yellowPercent / 100) * circumference;
    const greenOffset = circumference - (greenPercent / 100) * circumference;

    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (rotationCount > 0) {
            let startTimestamp: number | null = null;
            const duration = 2000;
            let animationFrameId: number;

            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                setCurrentValue(Math.floor(easeOut * value));
                if (progress < 1) {
                    animationFrameId = window.requestAnimationFrame(step);
                }
            };
            animationFrameId = window.requestAnimationFrame(step);

            return () => window.cancelAnimationFrame(animationFrameId);
        } else {
            setCurrentValue(0);
        }
    }, [rotationCount, value]);

    return (
        <div className="flex flex-col items-center gap-4 sm:gap-6 flex-1 w-full group">
            <div className="min-h-[48px] sm:min-h-[56px] flex items-end justify-center w-full">
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#374151] group-hover:text-[#32B9E9] transition-colors duration-300">{title}</h3>
            </div>
            <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] transform group-hover:scale-105 transition-transform duration-500">
                <svg
                    className="w-full h-full -rotate-90 transform"
                    viewBox="0 0 140 140"
                >
                    <circle cx="70" cy="70" r={radius} stroke="#E5E7EB" strokeWidth="10" fill="none" strokeLinecap="round" />
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#4ADE80" strokeWidth="10" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={(rotationCount ?? 0) > 0 ? greenOffset : circumference}
                        className="origin-center rotate-[90deg] transition-all ease-out"
                        style={{ transitionDuration: '2000ms' }}
                    />
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#F59E0B" strokeWidth="10" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={(rotationCount ?? 0) > 0 ? yellowOffset : circumference}
                        className="origin-center transition-all ease-out"
                        style={{ transitionDuration: '2000ms' }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
                    <span className="text-xl sm:text-[24px] font-bold text-[#111827] mb-1">{currentValue}%</span>
                    <span className="text-[11px] sm:text-[12px] text-gray-500 leading-tight">
                        {subtitle || (
                            <>
                                increase rate with<br />digital marketing
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

const ProvidingProcess: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>(new Array(cards.length).fill(0));
    const [statsRotation, setStatsRotation] = useState(0);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        setImageKeys(cards.map(() => Date.now()));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStatsRotation(1);
                } else {
                    setStatsRotation(0);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.disconnect();
        };
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
        <section className="text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-THICCCBOI overflow-hidden">
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
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-2">
                        Our Digital Marketing Service Providing Process
                    </h2>
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
                        >
                            <div className="block h-full group" onMouseEnter={() => handleHover(index)}>
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-6 sm:p-8 flex flex-col items-center text-center shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
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
                                                            width={40}
                                                            height={40}
                                                            className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500 mx-auto" />
                                            <p className="text-black text-sm sm:text-[14px] leading-relaxed font-THICCCBOI flex-grow">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Statistics Card — spans 2 cols on lg */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                        className="col-span-1 sm:col-span-2 lg:col-span-2"
                    >
                        <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-gradient-to-br hover:from-[#32B9E9]/40 hover:via-[#6DD5FA]/40 hover:to-[#2193b0]/40">
                            <div
                                ref={statsRef}
                                className="h-full bg-white rounded-[18px] p-6 sm:p-8 shadow-sm transition-all duration-500 hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] flex flex-col justify-center items-center gap-6 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/5 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                </div>
                                
                                <div className="flex flex-col sm:flex-row justify-between text-center w-full items-start gap-6 sm:gap-8 relative z-10">
                                    <CircularProgress
                                        value={72}
                                        title={<>Organic Traffic <br /> Growth</>}
                                        subtitle={<>increase in website traffic <br /> through SEO <br />optimization</>}
                                        greenPercent={46}
                                        yellowPercent={24}
                                        rotationCount={statsRotation}
                                    />
                                    <CircularProgress
                                        value={58}
                                        title={<>Lead Generation <br /> Improvement</>}
                                        subtitle={<>more qualified leads<br />from search engines</>}
                                        greenPercent={30}
                                        yellowPercent={24}
                                        rotationCount={statsRotation}
                                    />
                                    <CircularProgress
                                        value={85}
                                        title={<>Search Ranking <br /> Performance</>}
                                        subtitle={<>higher visibility<br />on Google search</>}
                                        greenPercent={55}
                                        yellowPercent={24}
                                        rotationCount={statsRotation}
                                    />
                                </div>
                                {/* Legend */}
                                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-2 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                                        <span className="text-[13px] sm:text-[14px] text-gray-700 font-medium">With digital marketing</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                                        <span className="text-[13px] sm:text-[14px] text-gray-700 font-medium">Without digital marketing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProvidingProcess;
