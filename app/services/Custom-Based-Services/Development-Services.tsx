'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MobileApplication {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MobileApplication[] = [
    {
        title: 'WebApp Development',
        Icon: "/SVG7/icon_2.svg",
        desc: 'Build scalable and responsive web applications tailored to your business goals. We create secure, high-performance digital platforms with seamless functionality, modern UI/UX, and optimized user experiences across all devices and industries.'
    },
    {
        title: 'Mobile App Development ',
        Icon: "/SVG7/icon_4.svg",
        desc: 'Develop feature-rich mobile applications for Android and iOS with intuitive interfaces and smooth performance. Our mobile solutions focus on scalability, user engagement, security, and delivering exceptional digital experiences for modern businesses.'
    },
    {
        title: 'Software Software',
        Icon: "/SVG7/icon_prototype ag.svg",
        desc: 'Create custom software solutions designed to streamline operations, automate workflows, and improve business efficiency. Our development team delivers secure, scalable, and high-performing software aligned with your unique operational requirements and goals.'
    },
    {
        title: 'Enterprise Application Integration',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'Integrate enterprise systems, applications, and workflows seamlessly to improve business productivity and operational efficiency. We ensure secure data flow, system compatibility, and scalable integrations that support long-term digital transformation initiatives.'
    },
    {
        title: 'Cloud-Based Solutions',
        Icon: "/SVG7/icon_5.svg",
        desc: 'Leverage cloud technologies to build flexible, scalable, and secure digital infrastructures. Our cloud-based solutions improve accessibility, performance, collaboration, and operational efficiency while supporting modern business growth and remote accessibility requirements.'
    },
    {
        title: 'Microservices Architecture',
        Icon: "/SVG7/icon_6.svg",
        desc: 'Develop scalable applications using microservices architecture for improved flexibility, faster deployment, and seamless system management. We build modular solutions that enhance performance, simplify maintenance, and support continuous business scalability efficiently.'
    },
    {
        title: 'DevOps Services',
        Icon: "/SVG7/icon_7.svg",
        desc: 'Optimize software development and deployment processes with reliable DevOps solutions. We streamline collaboration, automation, testing, and infrastructure management to improve delivery speed, operational efficiency, and overall software performance consistency.'
    }
];

const DevelopmentServices: React.FC = () => {
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
        <section className="text-black py-16 sm:py-20 md:py-24 font-THICCCBOI max-w-7xl mx-auto overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
                <motion.div
                    className="text-center mb-12 md:mb-16 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight text-gray-900">
                        Custom-Based Software Development Services
                    </h2>
                    <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI leading-relaxed">
                        We build tailored digital solutions designed around your unique business goals, workflows, and customer needs. From strategy and development to deployment and support, Appadvent delivers scalable, high-performance services that drive measurable business growth
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-8"
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
                            <div className="bg-white border border-gray-200/80 hover:border-[#32B9E9] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300 group">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                        alt={item.title}
                                        width={56}
                                        height={56}
                                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center items-center">
                                    <h3 className="font-bold text-[18px] md:text-[20px] text-gray-900 mb-3 leading-tight group-hover:text-[#32B9E9] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-[15px] font-THICCCBOI leading-relaxed flex-grow">
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
}

export default DevelopmentServices;

