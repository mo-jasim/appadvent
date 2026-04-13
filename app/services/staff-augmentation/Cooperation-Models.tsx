'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface Cooperation {
    title: string;
    Icon: string;
    desc: string;
}

const cards: Cooperation[] = [
    {
        title: 'IT team augmentation',
        Icon: "/SVG5/1.svg",
        desc: "Our employees temporarily join your technical team managed by your project manager. Fully staffed with the required skills, your project can move faster 1.5–2 times. Best: for Businesses that need to augment established development teams with extra resources to face a tight project deadline or skill deficiency.",
    },
    {
        title: 'Dedicated team',
        Icon: "/SVG5/2.svg",
        desc: "You entrust end-to-end software development project to Appadvent. This way, you can save up to 30% in development costs as you don’t hire, onboard, and train full-time tech staff.Best for: Businesses with overloaded/absent tech teams that want to minimize involvement in project management."
    },
    {
        title: 'Full project outsourcing',
        Icon: "/SVG5/3.svg",
        desc: "You entrust end-to-end software development project to ScienceSoft. This way, you can save up to 30% in development costs as you don’t hire, onboard, and train full-time tech staff.Best for: Businesses with overloaded/absent tech teams that want to minimize involvement in project management."
    },
    {
        title: 'Managed IT Services',
        Icon: "/SVG5/4.svg",
        desc: "Appadvent ensures the stability of your IT infrastructure through routine monitoring and manages IT operations (help desk, security) of your company. Best for: Businesses with overloaded/absent tech teams that want to minimize involvement in project management."
    },
];

const Cooperation: React.FC = () => {
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
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2 leading-tight">
                        Outsourcing Cooperation Models We Support                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
                            <p className="text-gray-500 text-[14px] md:text-[16px] font-THICCCBOI">
                                {item.desc}
                            </p>                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default Cooperation;
