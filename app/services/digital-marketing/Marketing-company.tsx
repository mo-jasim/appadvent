'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface MarketingCompany {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MarketingCompany[] = [
    {
        title: 'Cost effective',
        Icon: "/images/Costestimate.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'Gauranteed Results',
        Icon: "/images/Security.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors,'
    },
    {
        title: 'Great Customer Support',
        Icon: "/images/common.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. '
    },
    {
        title: 'Top Rated',
        Icon: "/images/QA.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors'
    },
];

const MarketingCompany: React.FC = () => {
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
            <section className="text-black py-10 md:py-20 px-4 font-THICCCBOI max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12 md:mb-16 max-w-6xl mx-auto">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4">
                            Why You Choose our Digital Marketing company ?                   </h2>
                        <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                            We assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[20px] flex flex-col text-center shadow-sm hover:shadow-2xl transition-all"
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
                                        width={64}
                                        height={64}
                                    />
                                </div>

                                <h3 className="font-bold text-[24px]">{item.title}</h3>
                                <p className="text-gray-500 text-[16px] font-THICCCBOI">
                                    Our base, robust, and extensible arch allows our team to perform custom requirements implementing custom features for custom needs.
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};


export default MarketingCompany;
