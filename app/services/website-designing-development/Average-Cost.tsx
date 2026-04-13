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
        desc: 'For a custom branded corporate website.'
    },
    {
        title: 'From $70,000',
        Icon: "/SVG6/icons_price 2.svg",
        desc: 'For a self-service customer web portal.'
    },
    {
        title: 'From $200,000',
        Icon: "/SVG6/icons_price 3.svg",
        desc: 'For an ecommerce solution with custom visual interface and business logic, integrated into a corporate IT infrastructure.'
    },
    {
        title: 'From $400,000',
        Icon: "/SVG6/icons_price 4.svg",
        desc: 'For complex enterprise web software, e.g., a custom EHR system.'
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
        <section className="text-black py-10 md:py-20 px-4 font-THICCCBOI max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16 max-w-6xl mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        App Types We Develop: Industry & Use Cases                    </h2>
                    <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[20px] flex flex-col shadow-sm  hover:shadow-2xl transition-all duration-500"
                        >
                            <div
                                className="mb-4 rounded-full cursor-pointer"
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

                            <h3 className="font-bold text-[20px] md:text-[24px]">{item.title}</h3>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default AverageCost;
