import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceItem {
    title: string;
    titleIcon: string;
}

const ExpertsInAdvanced: React.FC = () => {
    const services: ServiceItem[] = [
        {
            title: 'Location Services',
            titleIcon: "/staf-images/staf1.svg",
        },
        {
            title: 'Secure Payments',
            titleIcon: "/staf-images/staf2.svg",
        },
        {
            title: 'Real-Time Messaging',
            titleIcon: "/staf-images/staf3.svg",
        },
        {
            title: 'Cross-Device Sync',
            titleIcon: "/staf-images/staf4.svg",
        },
        {
            title: 'Chatbot Integration',
            titleIcon: "/staf-images/staf5.svg",
        },
        {
            title: 'Immersive Experience',
            titleIcon: "/staf-images/staf6.svg",
        },
        {
            title: 'Smart Scheduling',
            titleIcon: "/staf-images/staf7.svg",
        },
        {
            title: 'Image Recognition',
            titleIcon: "/staf-images/staf8.svg",
        },
    ];

    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>(new Array(services.length).fill(0));

    useEffect(() => {
        setMounted(true);
        setImageKeys(services.map(() => Date.now()));
    }, [services.length]);

    const handleHover = (index: number): void => {
        if (!mounted) return;
        setImageKeys((prev) => {
            const updated = [...prev];
            updated[index] = Date.now();
            return updated;
        });
    };

    return (
        <div className="w-full bg-[#001F26] py-16 sm:py-20 md:py-24 font-THICCCBOI relative overflow-hidden">
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
            <div className="absolute inset-0 bg-[url('/images/polygon.png')] opacity-10 bg-cover bg-center pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 md:mb-6 text-white leading-tight">
                        Experts in advanced techs
                    </h2>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >
                            <div className="block h-full group" onMouseEnter={() => handleHover(index)}>
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-4 sm:p-6 flex flex-col items-center text-center justify-center min-h-[160px] sm:min-h-[180px] shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                        </div>

                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center w-full">
                                            <div className="relative mb-4 inline-flex">
                                                <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                    <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                        <Image
                                                            src={mounted && imageKeys[index] ? `${item.titleIcon}?v=${imageKeys[index]}` : item.titleIcon}
                                                            alt={item.title}
                                                            width={50}
                                                            height={50}
                                                            className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 leading-tight group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ExpertsInAdvanced;
