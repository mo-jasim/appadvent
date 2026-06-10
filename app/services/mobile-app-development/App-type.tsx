'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface AppTypeitem {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AppTypeitem[] = [
    {
        title: 'Enterprises apps',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'Communication & social media apps ',
        Icon: "/SVG-motion2/icons_communication.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Supply chain management and logistics apps',
        Icon: "/SVG-motion2/icons_supply chain.svg",
        desc: 'Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full.'
    },
    {
        title: 'mCommerce apps',
        Icon: "/SVG-motion2/icons_commerce.svg",
        desc: 'Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all of the most-used JavaScript '
    },
    {
        title: 'Secure medical apps',
        Icon: "/SVG-motion2/icons_healthcare.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Health and fitness apps',
        Icon: "/SVG-motion2/icons_fitness.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Banking and financial self-service apps',
        Icon: "/SVG-motion2/icons_bank.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Manufacturing and production control apps',
        Icon: "/SVG-motion2/icons_manufacturing.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Travel, navigation, and hospitality apps',
        Icon: "/SVG-motion2/icons_travel.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Booking and reservation apps',
        Icon: "/SVG-motion2/icons_ticket.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Real estate apps',
        Icon: "/SVG-motion2/icons_real-esate.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'e-Government and citizen apps',
        Icon: "/SVG-motion2/icons_citizen.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Public safety and emergency services',
        Icon: "/SVG-motion2/icons_emeregency.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Nonprofit and humanitarian aid apps',
        Icon: "/SVG-motion2/icons_charity.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
    {
        title: 'Entertainment and media apps',
        Icon: "/SVG-motion2/icons_entertainment.svg",
        desc: 'Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.'
    },
];

const AppType: React.FC = () => {
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
        <section className="text-black mt-[80px] mb-[80px] px-4 font-THICCCBOI max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto text-center justify-center mb-[50px]">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        App Types We Develop: Industry & Use Cases                    </h2>
                    <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                    </p>
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


export default AppType;
