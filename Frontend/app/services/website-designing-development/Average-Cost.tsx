'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface AverageCost {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AverageCost[] = [
    {
        title: 'From $20,000',
        Icon: "/SVG6/icons_price 1.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. '
    },
    {
        title: 'From $70,000',
        Icon: "/SVG6/icons_price 2.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. '
    },
    {
        title: 'From $200,000',
        Icon: "/SVG6/icons_price 3.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. '
    },
    {
        title: 'From $400,000',
        Icon: "/SVG6/icons_price 4.svg",
        desc: 'we works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. '
    },


];

const AverageCost: React.FC = () => {
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
        <section className="text-black mt-[100px] mb-[100px] font-THICCCBOI max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-4 text-center items-center justify-center sm:gap-5 relative z-10 max-w-7xl mx-auto mt-[80px]">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        Average Cost of Different Web Solutions                    </h2>
                    <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] text-regular font-THICCCBOI leading-tight">
                        Web solutions are very different in functionality and scale, from simple corporate websites to complex enterprise systems. Logically, the range of costs is wide too. Take a look at several examples from our practices and don't hesitate to request a free quote that will be tailored to your specific solution.                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className="mb-6 cursor-pointer"
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
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="font-bold text-[18px] md:text-[20px] text-[#050A15] mb-3">{item.title}</h3>
                            <p className="text-[#6b7280] text-[13px] sm:text-[14px] leading-[1.6] font-normal">{item.desc}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default AverageCost;
