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
        desc: "We offer transparent and cost-effective pricing models tailored to your project needs. Whether your requirements are fixed or evolving, our approach ensures maximum value, budget control, and predictable project outcomes.",
    },
    {
        title: 'Flexibility in cooperation duration',
        Icon: "/SVG4/icons_modify.svg",
        desc: "Our engagement models are designed to adapt to your business goals. From short-term assignments to long-term partnerships, we provide the flexibility needed to scale resources efficiently and effectively."
    },
    {
        title: 'Smooth integration into your team',
        Icon: "/SVG4/icons_integr.svg",
        desc: "Our professionals seamlessly integrate with your existing team, workflows, and processes. Through proactive communication and collaboration, we ensure quick onboarding and productive contributions from day one."
    },
    {
        title: 'Work transparency',
        Icon: "/SVG4/icons_search svg.svg",
        desc: "We maintain complete transparency throughout the project lifecycle. Regular updates, clear reporting, and measurable performance indicators keep you informed, enabling better decisions and confidence in project progress."
    },
    {
        title: 'Dedication to quality',
        Icon: "/SVG4/icons_professional-growth.svg",
        desc: "Quality is at the core of everything we do. By following industry best practices and rigorous standards, we deliver reliable, scalable, and high-performing solutions that exceed expectations."
    },
    {
        title: 'Attention to documentation',
        Icon: "/SVG4/icons_documentation_.svg",
        desc: "Comprehensive documentation ensures knowledge retention and project continuity. We carefully document processes, requirements, and deliverables, making future maintenance, onboarding, and collaboration simple and efficient."
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
