'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface AppDevelopmentItem {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AppDevelopmentItem[] = [
    {
        title: 'Native mobile apps',
        Icon: '/SVG3/icon_native.svg',
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'Near-native mobile apps',
        Icon: '/SVG3/icon_near-native.svg',
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Hybrid mobile apps',
        Icon: '/SVG3/icon_hybrid.svg',
        desc: 'Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full.'
    },
    {
        title: 'Responsive web apps',
        Icon: '/SVG3/icon_responsive.svg',
        desc: 'Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all of the most-used JavaScript '
    },
    {
        title: 'Progressive web apps (PWA)',
        Icon: '/SVG3/icon_progressive.svg',
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
];

const AppDevelopment: React.FC = () => {
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

                <div className="text-center mb-12 md:mb-16 max-w-7xl mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Mobile App Development Approaches We Use                   </h2>
                    <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[20px] flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-all"
                        >
                            <div
                                className="p-3 rounded-full cursor-pointer"
                                onMouseEnter={() => handleHover(index)}
                            >
                                <Image
                                    src={
                                        mounted && imageKeys[index]
                                            ? `${item.Icon}?v=${imageKeys[index]}`
                                            : item.Icon
                                    }
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                />
                            </div>

                            <h3 className="font-bold text-[20px] md:text-[24px] mt-2">{item.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AppDevelopment;


