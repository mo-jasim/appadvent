'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface SoftwareMaintenance {
    title: string;
    icon: string;
    points: string[];
}

const cards: SoftwareMaintenance[] = [
    {
        title: 'In-house maintenance and support',
        icon: "/images/in-house 1.svg",
        points: [
            "Reduced development time, Agile methodology implementation. Sprint-based delivery system",
            "No recruitment overhead, No infrastructure cost, Pay only for required hours/resources",
            "No recruitment overhead, No infrastructure cost, Pay only for required hours/resources"
        ]
    },
    {
        title: 'Fully outsourced maintenance and support',
        icon: "/images/outsourced 1.svg",
        points: [
            "Complete ownership of application, server, and infrastructure",
            "Real-time system monitoring. Automated alerts for downtime or failures",
            "No need for in-house IT team. Predictable monthly maintenance cost. Reduced operational risk"
        ]
    },

];

const SoftwareMaintenance: React.FC = () => {
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
        <section className="text-black py-10 md:py-20 px-4 font-THICCCBOI max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2 leading-tight">
                        Our Software Maintenance Teams
                    </h2>
                    <p className="text-gray-500 text-[16px] font-THICCCBOI">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
                            <h3 className="font-bold text-[20px] md:text-[24px] mb-4">{item.title}</h3>
                            <div className="flex flex-col gap-5 w-full text-left">
                                {item.points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <FaRegStar className="text-[#FF6B6B] w-5 h-5 flex-shrink-0 mt-1" />
                                        <p className="text-gray-500 text-[15px] leading-relaxed">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SoftwareMaintenance;
