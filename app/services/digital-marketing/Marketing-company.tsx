'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MarketingCompany {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MarketingCompany[] = [
    {
        title: 'Cost effective',
        Icon: "/images/Costestimate.svg",
        desc: 'Get high-quality digital marketing solutions at competitive pricing without compromising performance. Our strategies are designed to maximize ROI, reduce unnecessary spending, and deliver sustainable business growth through optimized marketing campaigns.'
    },
    {
        title: 'Guaranteed Results',
        Icon: "/images/Security.svg",
        desc: 'We focus on measurable outcomes including increased traffic, better engagement, qualified leads, and higher conversions. Our data-driven marketing strategies are continuously optimized to achieve consistent and impactful business results.'
    },
    {
        title: 'Great Customer Support',
        Icon: "/images/common.svg",
        desc: 'Our dedicated support team ensures transparent communication, quick assistance, and regular project updates throughout your marketing journey. We work closely with clients to maintain smooth collaboration and long-term business relationships.'
    },
    {
        title: 'Top Rated',
        Icon: "/images/QA.svg",
        desc: 'With proven expertise across industries, we deliver reliable digital marketing services trusted by startups, enterprises, and growing brands. Our focus on quality, innovation, and performance helps businesses achieve long-term digital success.'
    },
];

const MarketingCompany: React.FC = () => {
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
        <section className="w-full bg-[#001F26] py-12 sm:py-16 md:py-20 font-THICCCBOI px-4 sm:px-6 overflow-hidden">
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
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight">
                        Why You Choose our Digital Marketing company?
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base md:text-[18px] font-THICCCBOI max-w-4xl mx-auto leading-relaxed">
                        We assist in specific development stages as well as provide full-cycle mobile app implementation.
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
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-6 sm:p-8 flex flex-col shadow-sm transition-all duration-500 overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/5 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col flex-grow">
                                            <div className="relative mb-6 inline-flex self-start">
                                                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
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

                                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] text-black mb-3 group-hover:text-[#32B9E9] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-black/20 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
                                            <p className="text-black text-sm sm:text-[15px] font-THICCCBOI leading-relaxed flex-grow">
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

export default MarketingCompany;
