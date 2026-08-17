'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface ServiceGridCard {
    title: string;
    icon: string;
    description: string;
}

const cards: ServiceGridCard[] = [
    {
        title: 'Web Portals',
        icon: '/SVG-motion/s1.svg',
        description: 'Build secure and interactive portals that connect customers, employees, vendors, and partners. Our solutions simplify communication, centralize information, and improve operational efficiency across your organization.'
    },
    {
        title: 'UX and UI Design',
        icon: '/SVG-motion/s2.svg',
        description: 'Design intuitive and engaging user experiences that align with your business goals. We create user-centered interfaces that improve usability, accessibility, and customer satisfaction.'
    },
    {
        title: 'Architecture',
        icon: '/SVG-motion/s3.svg',
        description: 'Plan scalable and reliable system architectures that support long-term growth. We focus on performance, security, maintainability, and seamless integration with your business processes.'
    },
    {
        title: 'Front-end Development',
        icon: '/SVG-motion/s4.svg',
        description: 'Create responsive and interactive user interfaces using modern web technologies. Our front-end solutions deliver fast performance, accessibility, and consistent experiences across devices and browsers. '
    },
    {
        title: 'Back-end Development',
        icon: '/SVG-motion/s5.svg',
        description: 'Develop secure and efficient server-side systems that power your applications. We build APIs, databases, and business logic designed for reliability, scalability, and smooth performance.'
    },
    {
        title: 'Integration',
        icon: '/SVG-motion/s6.svg',
        description: 'Connect your web solutions with third-party services, enterprise systems, and cloud platforms. We ensure secure, reliable, and efficient data flow across your digital ecosystem.'
    },
    {
        title: 'Testing & QA',
        icon: '/SVG-motion/s7.svg',
        description: 'Ensure quality through comprehensive testing and quality assurance practices. We identify issues early, improve reliability, and deliver software that performs consistently in real-world environments.'
    },
    {
        title: 'Helpdesk',
        icon: '/SVG-motion/s8.svg',
        description: 'Provide quick, reliable assistance for your web product. Our support team resolves issues efficiently, answers questions, and ensures users can fully leverage the solution.'
    },
    {
        title: 'Continuous Support and evolution',
        icon: '/SVG-motion/s9.svg',
        description: 'Keep your web product secure, optimized, and aligned with changing business needs. We provide maintenance, updates, enhancements, and ongoing technical support for long-term success.'
    },
];

const ServiceGridCard: React.FC = () => {
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
        <section className="w-full bg-[#EAF8FD] py-10 md:py-20 text-black font-THICCCBOI">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Full-Scale Web Development by <span className="">Appadvent</span>
                    </h2>
                    <p className="max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-black leading-tight px-4">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                    </p>
                </div>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((item, index) => (
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
                                    <div
                                        className="relative h-full rounded-[19px] bg-white p-8 flex flex-col shadow-none border-1 border-gray-100 hover:shadow-sm overflow-hidden"
                                    >
                                        <div>
                                            <div className="relative mb-6 flex justify-start items-start self-start">
                                                <div className="w-[84px] h-[84px] flex items-center justify-start">
                                                    <Image
                                                        src={
                                                            mounted && imageKeys[index]
                                                                ? `${item.icon}?v=${imageKeys[index]}`
                                                                : item.icon
                                                        }
                                                        alt={item.title}
                                                        width={84}
                                                        height={84}
                                                        className="w-[84px] h-[84px] shrink-0 object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-[20px] md:text-[24px] mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI leading-relaxed">
                                                {item.description}
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

export default ServiceGridCard;
