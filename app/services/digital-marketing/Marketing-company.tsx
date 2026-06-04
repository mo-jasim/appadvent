'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface MarketingCompany {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MarketingCompany[] = [
    {
        title: 'Cost effective',
        Icon: "/images/Costestimate.svg",
        desc: 'We work with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'Guaranteed Results',
        Icon: "/images/Security.svg",
        desc: 'We work with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors.'
    },
    {
        title: 'Great Customer Support',
        Icon: "/images/common.svg",
        desc: 'We work with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.'
    },
    {
        title: 'Top Rated',
        Icon: "/images/QA.svg",
        desc: 'We work with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors.'
    },
];

const MarketingCompany: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>([0, 0, 0, 0]);

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
        <section className="w-full bg-[#001F26] py-12 sm:py-16 md:py-20 font-THICCCBOI px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4">
                        Why You Choose our Digital Marketing company?
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-[18px] font-THICCCBOI max-w-4xl mx-auto">
                        We assist in specific development stages as well as provide full-cycle mobile app implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-5 sm:p-6 rounded-[20px] flex flex-col items-start text-start gap-3 border-2 border-transparent hover:border-[#32B9E9]/40 hover:shadow-[0_20px_40px_rgba(50,185,233,0.15)] hover:-translate-y-2 cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <div
                                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-start justify-start transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                                onMouseEnter={() => handleHover(index)}
                            >
                                <Image
                                    src={
                                        mounted && imageKeys[index]
                                            ? `${item.Icon}?v=${imageKeys[index]}`
                                            : item.Icon
                                    }
                                    alt={item.title}
                                    width={56}
                                    height={56}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] text-gray-900 leading-tight group-hover:text-[#32B9E9] transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-black text-sm sm:text-[15px] font-THICCCBOI leading-relaxed">
                                Our base, robust, and extensible arch allows our team to perform custom requirements implementing custom features.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MarketingCompany;
