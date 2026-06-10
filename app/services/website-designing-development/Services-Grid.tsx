'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
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
        description: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'UX and UI Design',
        icon: '/SVG-motion/s2.svg',
        description: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Architecture',
        icon: '/SVG-motion/s3.svg',
        description: 'Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full.'
    },
    {
        title: 'Front-end Development',
        icon: '/SVG-motion/s4.svg',
        description: 'Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all of the most-used JavaScript '
    },
    {
        title: 'Back-end Development',
        icon: '/SVG-motion/s5.svg',
        description: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Integration',
        icon: '/SVG-motion/s6.svg',
        description: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Testing & QA',
        icon: '/SVG-motion/s7.svg',
        description: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Helpdesk',
        icon: '/SVG-motion/s8.svg',
        description: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Continuous Support and evolution',
        icon: '/SVG-motion/s9.svg',
        description: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
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
        <section className="text-black py-10 md:py-20 px-4 font-THICCCBOI max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Full-Scale Web Development by <span className="text-[#32B9E9]">Appadvent</span>
                    </h2>
                    <p className="max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-black leading-tight px-4">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[20px] flex flex-col items-center text-center shadow-sm  hover:shadow-2xl transition-all duration-500"
                        >
                            <div
                                className="p-3 rounded-full cursor-pointer"
                                onMouseEnter={() => handleHover(index)}
                            >
                                <Image
                                    src={
                                        mounted && imageKeys[index]
                                            ? `${item.icon}?v=${imageKeys[index]}`
                                            : item.icon
                                    }
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                />
                            </div>

                            <h3 className="font-bold text-[20px] md:text-[24px] mb-2">{item.title}</h3>
                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI">
                                Our base, robust, and extensible arch allows our team to perform custom requirements implementing custom features for custom needs.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceGridCard;
