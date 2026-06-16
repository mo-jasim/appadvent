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
        title: 'Enterprise resource & process management',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'Streamline business operations with enterprise management software designed to automate workflows, improve collaboration, and enhance productivity. We build scalable solutions that simplify complex business processes and support organizational growth efficiently.'
    },
    {
        title: 'Supply chain management',
        Icon: "/SVG-motion2/icons_communication.svg",
        desc: 'Optimize supply chain operations with smart software solutions that improve inventory tracking, logistics management, vendor coordination, and operational transparency. Our systems help businesses increase efficiency, reduce delays, and improve decision-making processes.'
    },
    {
        title: 'Financial management & accounting',
        Icon: "/SVG-motion2/icons_supply chain.svg",
        desc: 'Develop secure financial management software for accounting, reporting, expense tracking, invoicing, and transaction management. We create reliable solutions that improve financial accuracy, operational efficiency, and business decision-making capabilities.'
    },
    {
        title: 'Customer-centered software',
        Icon: "/SVG-motion2/icons_commerce.svg",
        desc: 'Build customer-focused software solutions that improve user engagement, satisfaction, and experience. Our applications are designed with intuitive interfaces, personalized workflows, and seamless functionality to strengthen customer relationships and business performance.'
    },
    {
        title: 'Business analytics',
        Icon: "/SVG-motion2/icons_healthcare.svg",
        desc: 'Transform raw business data into actionable insights with advanced analytics solutions. We develop systems that support reporting, performance tracking, forecasting, and strategic decision-making to improve operational efficiency and business growth.'
    },
    {
        title: 'HR management',
        Icon: "/SVG-motion2/icons_fitness.svg",
        desc: 'Simplify human resource operations with HR management software for employee tracking, payroll, attendance, recruitment, and performance management. Our solutions improve workforce efficiency, communication, and organizational productivity effectively.'
    },
    {
        title: 'IoT-connected solutions',
        Icon: "/SVG-motion2/icons_bank.svg",
        desc: 'Create intelligent IoT-powered software solutions that connect devices, automate processes, and enable real-time monitoring. We develop secure and scalable systems that improve operational efficiency, automation, and data-driven business management.'
    },
    {
        title: 'Communication & collaboration software',
        Icon: "/SVG-motion2/icons_travel.svg",
        desc: 'Enhance team productivity with communication and collaboration platforms designed for seamless interaction, file sharing, project management, and workflow coordination. Our solutions improve business communication and operational efficiency across organizations.'
    },
    {
        title: 'Emergency & security',
        Icon: "/SVG-motion2/icons_manufacturing.svg",
        desc: 'Develop secure emergency and safety management solutions with real-time monitoring, alerts, reporting, and incident management capabilities. Our systems help businesses improve security operations, response efficiency, and organizational safety standards.'
    }
];

const Software: React.FC = () => {
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
                        App Types We Develop: Industry & Use Cases                   </h2>
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
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default Software;
