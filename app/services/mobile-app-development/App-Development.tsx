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
        desc: 'Native applications are built specifically for iOS or Android platforms, delivering superior performance, enhanced security, and seamless access to device features. They provide the best possible user experience and reliability.'
    },
    {
        title: 'Near-native mobile apps',
        Icon: '/SVG3/icon_near-native.svg',
        desc: 'Near-native applications combine the advantages of native performance with faster development cycles. This approach helps businesses achieve high-quality user experiences while optimizing development costs and timelines.'
    },
    {
        title: 'Hybrid mobile apps',
        Icon: '/SVG3/icon_hybrid.svg',
        desc: 'Hybrid applications use a single codebase to run across multiple platforms. They offer a cost-effective solution for businesses looking to reach a wider audience while maintaining consistent functionality and design.'
    },
    {
        title: 'Responsive web apps',
        Icon: '/SVG3/icon_responsive.svg',
        desc: 'Responsive web applications adapt seamlessly to different screen sizes and devices. They provide a consistent user experience across smartphones, tablets, and desktops without requiring separate platform-specific development. '
    },
    {
        title: 'Progressive web apps (PWA)',
        Icon: '/SVG3/icon_progressive.svg',
        desc: 'Progressive Web Apps combine the accessibility of websites with the functionality of mobile applications. PWAs offer fast loading speeds, offline access, push notifications, and a highly engaging user experience.'
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
        <section className="text-black mt-[160px] mb-[160px] px-4 font-THICCCBOI max-w-7xl mx-auto">
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
                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI mt-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AppDevelopment;


