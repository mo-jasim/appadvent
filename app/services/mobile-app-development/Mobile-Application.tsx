'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
import AppType from './App-type';
import HowWeEnsure from './How-We-Ensure';
import AppDevelopment from './App-Development';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface MobileApplication {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MobileApplication[] = [
    {
        title: 'Product Design',
        Icon: "/SVG7/icon_prototype ag.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'Mobile App Consulting ',
        Icon: "/SVG7/icon_2.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Mobile App Design',
        Icon: "/SVG7/icon_3.svg",
        desc: 'Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full.'
    },
    {
        title: 'Mobile App Development',
        Icon: "/SVG7/icon_4.svg",
        desc: 'Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all of the most-used JavaScript '
    },
    {
        title: 'Mobile App Integration',
        Icon: "/SVG7/icon_5.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Testing & QA',
        Icon: "/SVG7/icon_6.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Maintenance & Support',
        Icon: "/SVG7/icon_7.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Mobile App Modernization',
        Icon: "/SVG7/icon_8.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
];

const MobileApplication: React.FC = () => {
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
        <>
            <section className="text-black mt-[80px] mb-[160px] px-4 font-THICCCBOI max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12 md:mb-16 max-w-6xl mx-auto">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                            Our Mobile Application Development Services                    </h2>
                        <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                            We assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                            >
                                <div
                                    className="mb-6 cursor-pointer flex items-center h-[65px]"
                                    onMouseEnter={() => handleHover(index)}
                                >
                                    <Image
                                        src={
                                            mounted && imageKeys[index]
                                                ? `${item.Icon}?v=${imageKeys[index]}`
                                                : item.Icon
                                        }
                                        alt={item.title}
                                        width={65}
                                        height={65}
                                        className="object-contain max-h-[65px]"
                                    />
                                </div>

                                <h3 className="font-bold text-[18px] md:text-[20px] text-[#050A15] mb-3">{item.title}</h3>
                                <p className="text-black text-sm md:text-[16px] font-THICCCBOI">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* Mobile App Development Approaches We Use */}
            <AppDevelopment />

            {/* App Types We Develop: Industry & Use Cases */}
            <AppType />
            <HowWeEnsure />
        </>
    );
};


export default MobileApplication;
