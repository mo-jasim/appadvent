'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface BestFromOthers {
    title: string;
    Icon: string;
    desc: string;
}

const cards: BestFromOthers[] = [
    {
        title: 'Industry Expertise',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: "We work with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.",
    },
    {
        title: 'Custom Solutions',
        Icon: "/Digimark.img/managed icon.svg",
        desc: "Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution."
    },
    {
        title: 'Agile Methodology',
        Icon: "/SVG4/icons_professional-growth.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full."
    },
    {
        title: 'Proven Track Record',
        Icon: "/SVG5/3.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full."
    },
    {
        title: 'Dedicated Support',
        Icon: "/SVG-motion/s9.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full."
    },
    {
        title: 'Scalable Solutions',
        Icon: "/Digimark.img/icon_Scalable.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full."
    },
];

const BestFromOthers: React.FC = () => {
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
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4">
                        How our Digital Marketing are Best from Others                   </h2>
                    <p className="text-black text-sm md:text-[16px] leading-relaxed">
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


export default BestFromOthers;
