'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface ScienceSoft {
    title: string;
    Icon: string;
    desc: string;
}

const cards: ScienceSoft[] = [
    {
        title: 'Optimal pricing models',
        Icon: "/SVG4/icons_cost-estimation.svg",
        desc: "We recommend a fixed-price model if you have well-defined requirements and the scope of work is clear at the start.",
    },
    {
        title: 'Flexibility in cooperation duration',
        Icon: "/SVG4/icons_modify.svg",
        desc: "We support both short-term and long-term team augmentation. You can hire our experts for a specific time-bound task or to do ongoing work with no firm time boundaries."
    },
    {
        title: 'Smooth integration into your team',
        Icon: "/SVG4/icons_integr.svg",
        desc: "To collaborate effectively, we establish frequent and direct communication with your team members and ensure timely exchange of the latest project knowledge."
    },
    {
        title: 'Work transparency',
        Icon: "/SVG4/icons_search svg.svg",
        desc: "We use a tailored suite of KPI metrics (e.g., lead time, cycle time, deployment frequency) that meet your unique requirements and adjust the reporting format and schedule to your preferences."
    },
    {
        title: 'Dedication to quality',
        Icon: "/SVG4/icons_professional-growth.svg",
        desc: "ScienceSoft’s engineers stick to our ISO-certified quality management principles to ensure that our contributions meet the highest standards of technology excellence."
    },
    {
        title: 'Attention to documentation',
        Icon: "/SVG4/icons_documentation_.svg",
        desc: "Even if we are temporarily involved in your project, we accurately document our work and fully comply with your requirements for documentation."
    },
];

const ScienceSoft: React.FC = () => {
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
                        How Appadvent’s Approach Works to Your Benefit                   </h2>
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
                            <p className="text-black text-[14px] md:text-[16px] font-THICCCBOI">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default ScienceSoft;
