'use client';
import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import CompaniesLove from '../services/website-designing-development/Companies-Love'
import OurProjectsSection from '../services/website-designing-development/Our-Projects-Section'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   FLOATING BACKGROUND ORBS — gives depth & motion feel
   ═══════════════════════════════════════════════════════ */
const FloatingOrbs = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[
            { size: 200, color: 'rgba(50,185,233,0.12)', top: '10%', left: '5%', dur: 18 },
            { size: 280, color: 'rgba(50,185,233,0.08)', top: '55%', left: '80%', dur: 22 },
            { size: 160, color: 'rgba(100,200,240,0.1)', top: '30%', left: '65%', dur: 16 },
            { size: 220, color: 'rgba(50,185,233,0.06)', top: '75%', left: '15%', dur: 20 },
            { size: 140, color: 'rgba(80,190,235,0.09)', top: '15%', left: '88%', dur: 14 },
        ].map((orb, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                    width: orb.size,
                    height: orb.size,
                    background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                    top: orb.top,
                    left: orb.left,
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: [0, 40, -30, 20, 0],
                    y: [0, -35, 25, -15, 0],
                }}
                transition={{
                    duration: orb.dur,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        ))}
    </div>
);

/* ═══════════════════════════════════════════════════════
   3D TILT CARD — subtle perspective on mouse move
   ═══════════════════════════════════════════════════════ */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const xVal = useMotionValue(0);
    const yVal = useMotionValue(0);
    const rotateX = useSpring(useTransform(yVal, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(xVal, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        xVal.set((e.clientX - rect.left) / rect.width - 0.5);
        yVal.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        xVal.set(0);
        yVal.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const industries = [
    {
        img: "/images/I6.png",
        icon: "/images/Cpu.svg",
        title: "Fintech & Crypto",
        href: "/industries/Fintech-Crypto",
        desc: "Building secure, scalable fintech and crypto solutions focused on seamless transactions, real-time analytics, compliance, user trust, and high-performance digital financial experiences.",
    },
    {
        img: "/images/I1.png",
        icon: "/images/eCommerce.svg",
        title: "Retail & E-commerce",
        href: "/industries/Ecommerce",
        desc: "Creating modern retail and e-commerce platforms that enhance customer engagement, simplify purchasing journeys, improve inventory management, and drive sustainable business growth.",
    },
    {
        img: "/images/I2.png",
        icon: "/images/health.svg",
        title: "Health & Pharmacy",
        href: "/industries/Health-&-pharmacy",
        desc: "Developing reliable healthcare and pharmacy solutions that improve patient experiences, streamline operations, ensure secure data management, and support accessible digital healthcare services.",
    },
    {
        img: "/images/I3.png",
        icon: "/images/Bank.svg",
        title: "Finance & Banking",
        href: "/industries/Finance-&-Banking",
        desc: "Delivering smart finance and banking solutions with secure transactions, advanced analytics, regulatory compliance, and seamless digital experiences tailored for modern financial institutions.",
    },
    {
        img: "/images/I4.png",
        icon: "/images/social.svg",
        title: "Social & Community",
        href: "/industries/Social-&-Community",
        desc: "Creating engaging social and community platforms that encourage real-time interaction, user engagement, content sharing, collaboration, and meaningful digital connections across audiences.",
    },
    {
        img: "/images/I5.png",
        icon: "/images/media.svg",
        title: "Media & Entertainment",
        href: "/industries/Media-&-Entertainment",
        desc: "Developing immersive media and entertainment solutions with seamless streaming, personalized experiences, interactive content delivery, and scalable platforms for modern digital audiences.",
    },
    {
        img: "/staf-images/Rectangle 81.svg",
        icon: "/images/iconoir_internet.svg",
        title: "Consumer Internet",
        href: "/industries/Consumer-internet",
        desc: "Building fast, user-focused consumer internet platforms designed to improve accessibility, engagement, scalability, and seamless digital experiences for everyday online users.",
    },
]

const IndustriesPage = () => {
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>(new Array(industries.length).fill(0));

    useEffect(() => {
        setMounted(true);
        setImageKeys(industries.map(() => Date.now()));
    }, [industries.length]);

    const handleHover = (index: number): void => {
        if (!mounted) return;
        setImageKeys((prev) => {
            const updated = [...prev];
            updated[index] = Date.now();
            return updated;
        });
    };

    return (
        <div className='relative overflow-hidden' style={{
            backgroundImage: "url('/images/polygon.png')",
        }}>
            <FloatingOrbs />
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
            <div className="font-THICCCBOI mb-[60px] md:mb-[80px]">
                <main>
                    <section className="relative py-8 md:py-10 overflow-hidden">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{
                                    hidden: { opacity: 0, y: -30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >

                                {/* Heading */}
                                <motion.p
                                    className='text-black font-extrabold text-[32px] sm:text-[44px] md:text-[60px] text-center leading-tight mb-[12px] md:mb-[16px] mt-[60px]'
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {"Industries We Cater To".split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block mr-[0.3em]"
                                            variants={{
                                                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    filter: "blur(0px)",
                                                    transition: {
                                                        duration: 0.5,
                                                        ease: [0.25, 0.46, 0.45, 0.94],
                                                    },
                                                },
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.p>
                                <p className='text-gray-600 text-[14px] sm:text-[16px] md:text-[20px] py-3 md:py-6 max-w-6xl mx-auto text-center leading-relaxed mb-[80px]'>
                                    We proudly serve a wide range of industries by delivering tailored solutions that address their unique challenges. From retail and e-commerce to healthcare, education, manufacturing, and hospitality, our services are designed to streamline operations, enhance customer experiences, and drive growth.
                                </p>
                            </motion.div>
                            {/* Cards Grid */}
                            <motion.div
                                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-[20px]"
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
                                {industries.map((item, index) => (
                                    <motion.div
                                        className="block h-full group w-full max-w-[630px] mx-auto min-h-[599px]"
                                        onMouseEnter={() => handleHover(index)}
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                        }}
                                    >
                                        <TiltCard className="h-full">
                                            <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                                                <div
                                                    className="relative h-full rounded-[18px] bg-white p-3 md:p-6 flex flex-col items-center text-center shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                                                    style={{ transformStyle: "preserve-3d" }}
                                                >
                                                    <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                                                    </div>

                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                                                    <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center w-full">
                                                        <Link href={item.href} className="w-full">
                                                            {/* Image */}
                                                            <div className="w-full h-[250px] sm:h-[270px] md:h-[290px] rounded-xl overflow-hidden relative">
                                                                <img
                                                                    src={item.img}
                                                                    alt={item.title}
                                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                            </div>

                                                            {/* Icon */}
                                                            <div className="w-full flex items-center justify-center relative -mt-6 mb-4 z-10">
                                                                <div className="relative inline-flex">
                                                                    <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                                                                    <div className="w-[68px] h-[68px] md:w-[78px] md:h-[78px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)] border-[6px] border-white">
                                                                        <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                                                                            <Image
                                                                                src={mounted && imageKeys[index] ? `${item.icon}?v=${imageKeys[index]}` : item.icon}
                                                                                alt={item.title}
                                                                                width={40}
                                                                                height={40}
                                                                                className="object-contain shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Content */}
                                                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0F172A] group-hover:text-[#0d2a3a] transition-colors duration-300">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-500 mt-2 max-w-2xl mx-auto mb-[24px] leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                            <div className="flex items-center justify-center gap-2 text-[#32B9E9] text-[15px] font-semibold">
                                                                Learn More <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </TiltCard>
                                    </motion.div>
                                ))}
                            </motion.div>

                        </div>
                    </section>
                    <OurProjectsSection />
                    <CompaniesLove />
                </main>
            </div>
        </div>
    )
};

export default IndustriesPage;