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
                            <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-300">
                                <div className="relative h-full rounded-[19px] bg-white p-6 sm:p-10 flex flex-col items-start text-left shadow-none border-1 border-gray-100 hover:shadow-sm overflow-hidden">
                                    <div className="flex flex-col items-start text-left gap-6 w-full">
                                        {/* Icon Container - Top Aligned */}
                                        <div className="relative flex-shrink-0 flex items-center justify-center">
                                            <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center">
                                                <Image
                                                    src={
                                                        mounted && imageKeys[index]
                                                            ? `${item.titleIcon}?v=${imageKeys[index]}`
                                                            : item.titleIcon
                                                    }
                                                    alt={item.title}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain shrink-0"
                                                />
                                            </div>
                                        </div>

                                        {/* Content Container - Bottom */}
                                        <div className="flex flex-col gap-2 flex-grow">
                                            <h3 className="font-bold text-[18px] sm:text-[20px] text-black leading-tight">
                                                {item.title}
                                            </h3>
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
