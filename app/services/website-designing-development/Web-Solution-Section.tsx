'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface WebSolutionCard {
    title: string;
    icon: string;
    description: string;
}

const cards: WebSolutionCard[] = [
    {
        title: 'Web Portals',
        icon: '/images/wp1.svg',
        description: 'Our base, robust, and extensible arch allows our team to perform custom requirements implementing custom features for custom needs.'
    },
    {
        title: 'Websites',
        icon: '/images/wp2.svg',
        description: 'We create stunning websites that capture your brand\'s essence and provide an exceptional user experience.'
    },
    {
        title: 'E-commerce',
        icon: '/images/wp3.svg',
        description: 'Drive sales with our comprehensive e-commerce solutions designed to convert visitors into loyal customers.'
    },
    {
        title: 'Web Apps',
        icon: '/images/wp4.svg',
        description: 'Custom web applications tailored to your specific business needs, ensuring scalability and performance.'
    },
];

const WebSolutionSection: React.FC = () => {
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
        <section className="text-black py-5 px-4 font-THICCCBOI max-w-7xl mx-auto ">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2 leading-tight">
                        What <span className="text-[#32B9E9]">Web Solutions</span> Do You Need
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[20px] flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div
                                className="mb-4 rounded-full cursor-pointer"
                                onMouseEnter={() => handleHover(index)}
                            >
                                <Image
                                    src={
                                        mounted && imageKeys[index]
                                            ? `${item.icon}?v=${imageKeys[index]}`
                                            : item.icon
                                    }
                                    alt={item.title}
                                    width={62}
                                    height={62}
                                />
                            </div>

                            <h3 className="font-bold text-[20px] md:text-[24px] mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm md:text-[16px] font-THICCCBOI">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebSolutionSection;
