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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 hover:shadow-sm"
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
                            <div className="h-full rounded-[20px] bg-white p-6 sm:p-8 flex flex-col shadow-sm">
                                <div className="mb-6 flex justify-start">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                        alt={item.title}
                                        width={56}
                                        height={56}
                                        className="object-contain w-14 h-14 sm:w-16 sm:h-16 shrink-0"
                                    />
                                </div>

                                <h3 className="font-bold text-lg sm:text-xl md:text-[22px] text-black mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-black text-sm sm:text-[15px] font-THICCCBOI leading-relaxed flex-grow">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default MarketingCompany;

