'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScienceSoft {
    title: string;
    Icon: string;
    desc: string;
}

const cards: ScienceSoft[] = [
    {
        title: 'Optimal pricing models',
        Icon: "/SVG4/icons_cost-estimation.svg",
        desc: "We offer transparent and cost-effective pricing models tailored to your project needs. Whether your requirements are fixed or evolving, our approach ensures maximum value, budget control, and predictable project outcomes.",
    },
    {
        title: 'Flexibility in cooperation duration',
        Icon: "/SVG4/icons_modify.svg",
        desc: "Our engagement models are designed to adapt to your business goals. From short-term assignments to long-term partnerships, we provide the flexibility needed to scale resources efficiently and effectively."
    },
    {
        title: 'Smooth integration into your team',
        Icon: "/SVG4/icons_integr.svg",
        desc: "Our professionals seamlessly integrate with your existing team, workflows, and processes. Through proactive communication and collaboration, we ensure quick onboarding and productive contributions from day one."
    },
    {
        title: 'Work transparency',
        Icon: "/SVG4/icons_search svg.svg",
        desc: "We maintain complete transparency throughout the project lifecycle. Regular updates, clear reporting, and measurable performance indicators keep you informed, enabling better decisions and confidence in project progress."
    },
    {
        title: 'Dedication to quality',
        Icon: "/SVG4/icons_professional-growth.svg",
        desc: "Quality is at the core of everything we do. By following industry best practices and rigorous standards, we deliver reliable, scalable, and high-performing solutions that exceed expectations."
    },
    {
        title: 'Attention to documentation',
        Icon: "/SVG4/icons_documentation_.svg",
        desc: "Comprehensive documentation ensures knowledge retention and project continuity. We carefully document processes, requirements, and deliverables, making future maintenance, onboarding, and collaboration simple and efficient."
    },
];

const ScienceSoft: React.FC = () => {
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
        <section className="text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-THICCCBOI overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
                        How Appadvent's Approach Works to Your Benefit
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
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
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-gray-200/80 hover:border-[#32B9E9] rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300 group">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain shrink-0"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center items-center">
                                    <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#32B9E9] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ScienceSoft;

