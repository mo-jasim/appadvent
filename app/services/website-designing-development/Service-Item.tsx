'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceItem {
    title: string;
    titleIcon: string;
    description: string;

}

const ServiceCards: React.FC = () => {
    const services: ServiceItem[] = [
        {
            title: 'Scoping',
            titleIcon: "/images/wdp1.svg",
            description: "We carefully analyze project requirements, objectives, and technical needs to define a clear roadmap. Proper scoping helps prevent misunderstandings, reduces risks, and ensures successful project execution.",
        },
        {
            title: 'Cost Estimate',
            titleIcon: "/images/wdp2.svg",
            description: "Our team provides accurate and transparent cost estimates based on project complexity, scope, and requirements. This helps businesses plan investments effectively and avoid unexpected expenses."
        },
        {
            title: 'Quality Assurance',
            titleIcon: "/images/wdp3.svg",
            description: "Quality is embedded throughout the development lifecycle. Through continuous testing, reviews, and validation processes, we ensure reliable, secure, and high-performing digital solutions."
        },
        {
            title: 'Collaboration',
            titleIcon: "/images/wdp4.svg",
            description: "We maintain open communication and close collaboration with stakeholders throughout the project. Regular updates and feedback cycles ensure alignment with business goals and expectations."
        },
        {
            title: 'Security Management',
            titleIcon: "/images/wdp5.svg",
            description: "Security is a priority in every solution we develop. We implement industry best practices, secure coding standards, and risk mitigation strategies to protect data and systems."
        },
        {
            title: 'Budget Management',
            titleIcon: "/images/wdp6.svg",
            description: "Our project management approach focuses on controlling costs while maintaining quality. We monitor resources efficiently to ensure projects remain within budget and deliver maximum value."
        },
        {
            title: 'Knowledge Management',
            titleIcon: "/images/wdp7.svg",
            description: "We document processes, decisions, and technical information to ensure knowledge retention and seamless project continuity. This enables easier maintenance and future enhancements."
        },
        {
            title: 'Deadline Management',
            titleIcon: "/images/wdp8.svg",
            description: "We follow well-defined schedules and agile workflows to ensure timely delivery. Our proactive planning and progress tracking help keep projects on schedule without compromising quality."
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
        <div className="px-4 sm:px-6 lg:px-8 font-THICCCBOI max-w-7xl mx-auto">
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8"
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
                {services.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        <div
                            className="block h-full group"
                            onMouseEnter={() => handleHover(index)}
                        >
                            <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                <div
                                    className="relative h-full rounded-[19px] bg-white p-6 sm:p-10 flex flex-col items-start text-left transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Shimmer sweep on hover */}
                                    <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent"
                                            style={{
                                                animation: "shimmer 2s ease-in-out infinite",
                                            }}
                                        />
                                    </div>

                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                    <div className="flex flex-col items-start text-left gap-6 w-full" style={{ transform: "translateZ(30px)" }}>
                                        {/* Icon Container - Top Aligned */}
                                        <div className="relative flex-shrink-0 flex items-center justify-center">
                                            <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                            <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                                                <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                    <Image
                                                        src={
                                                            mounted && imageKeys[index]
                                                                ? `${item.titleIcon}?v=${imageKeys[index]}`
                                                                : item.titleIcon
                                                        }
                                                        alt={item.title}
                                                        width={40}
                                                        height={40}
                                                        className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Container - Bottom */}
                                        <div className="flex flex-col gap-2 flex-grow">
                                            <h3 className="font-bold text-[18px] sm:text-[20px] text-black leading-tight group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-2 transition-all duration-500" />
                                            <p className="text-black text-[15px] sm:text-[16px] leading-relaxed font-normal">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceCards;
