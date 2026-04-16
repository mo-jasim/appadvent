'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure the business logic is feasible and full."
    },
    {
        title: 'Proven Track Record',
        Icon: "/SVG5/3.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure the business logic is feasible and full."
    },
    {
        title: 'Dedicated Support',
        Icon: "/SVG-motion/s9.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure the business logic is feasible and full."
    },
    {
        title: 'Scalable Solutions',
        Icon: "/Digimark.img/icon_Scalable.svg",
        desc: "Our solution architects will plan all functional components and select optimal techs for them to ensure the business logic is feasible and full."
    },
];

const BestFromOthers: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>([0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        setMounted(true);
        setImageKeys(cards.map(() => Date.now()));
    }, []);

    const handleHover = (index: number): void => {
        if (!mounted) return;
        setImageKeys((prev) => {
            const updated = [...prev];
            updated[index] = Date.now();
            return updated;
        });
    };

    return (
        <section className="text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-THICCCBOI">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4">
                        How our Digital Marketing are Best from Others
                    </h2>
                    <p className="text-black text-sm sm:text-base md:text-[16px] leading-relaxed max-w-4xl mx-auto">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 sm:p-8 rounded-[20px] flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-all duration-300"
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
                                    width={80}
                                    height={80}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                            </div>

                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-2 mt-2">{item.title}</h3>
                            <p className="text-black text-sm sm:text-base font-THICCCBOI leading-relaxed">
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
