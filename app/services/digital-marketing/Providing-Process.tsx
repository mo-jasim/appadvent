'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface providingProcess {
    title: string;
    Icon: string;
    desc: string;
}

const cards: providingProcess[] = [
    {
        title: 'Collecting the requirement',
        Icon: "/Digimark.img/icons_1.svg",
        desc: 'We recommend a fixed-price model if you have well-defined requirements and the scope of work is clear at the start.'
    },
    {
        title: 'Market Analyzing',
        Icon: "/Digimark.img/icons_2.svg",
        desc: 'We support both short-term and long-term team augmentation for specific tasks or ongoing work with no firm time boundaries.'
    },
    {
        title: 'Planning',
        Icon: "/Digimark.img/icons_3.svg",
        desc: 'To collaborate effectively, we establish frequent and direct communication with your team and ensure timely exchange of project knowledge.'
    },
    {
        title: 'Competition research',
        Icon: "/Digimark.img/icons_4.svg",
        desc: 'Even if we are temporarily involved in your project, we accurately document our work and fully comply with your requirements.'
    },
    {
        title: 'Ad Setup',
        Icon: "/Digimark.img/icons_5.svg",
        desc: "Our engineers stick to ISO-certified quality management principles to ensure contributions meet the highest standards of technology excellence."
    },
    {
        title: 'Tracking Results',
        Icon: "/Digimark.img/icons_6.svg",
        desc: "Our engineers stick to ISO-certified quality management principles to ensure contributions meet the highest standards of technology excellence."
    },
    {
        title: 'Continuous Monitoring',
        Icon: "/Digimark.img/icons_7.svg",
        desc: 'Even if we are temporarily involved in your project, we accurately document our work and fully comply with your requirements.'
    },
];

const CircularProgress = ({ value, title }: { value: number; title: string }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const yellowPercent = 25;
    const greenPercent = 45;
    const yellowOffset = circumference - (yellowPercent / 100) * circumference;
    const greenOffset = circumference - (greenPercent / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h3 className="text-[16px] sm:text-[18px] font-bold text-[#374151]">{title}</h3>
            <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r={radius} stroke="#E5E7EB" strokeWidth="10" fill="none" strokeLinecap="round" />
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#4ADE80" strokeWidth="10" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={greenOffset}
                        className="origin-center rotate-[90deg] transition-all duration-1000 ease-out"
                    />
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#F59E0B" strokeWidth="10" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={yellowOffset}
                        className="origin-center transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
                    <span className="text-xl sm:text-[24px] font-bold text-[#111827] mb-1">{value}%</span>
                    <span className="text-[11px] sm:text-[12px] text-gray-500 leading-tight">
                        increase rate with<br />digital marketing
                    </span>
                </div>
            </div>
        </div>
    );
};

const ProvidingProcess: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>(cards.map(() => 0));

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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-2">
                        Our Digital Marketing Service Providing Process
                    </h2>
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
                                    width={70}
                                    height={70}
                                    className="w-14 h-14 sm:w-[70px] sm:h-[70px] object-contain"
                                />
                            </div>
                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-2 mt-1">{item.title}</h3>
                            <p className="text-black text-sm sm:text-[14px] leading-relaxed font-THICCCBOI">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                    {/* Statistics Card — spans 2 cols on lg */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-center items-center gap-6">
                        <div className="flex flex-col sm:flex-row justify-around w-full items-center gap-6 sm:gap-8">
                            <CircularProgress value={50} title="SEO Growth" />
                            <CircularProgress value={50} title="SEO Growth" />
                            <CircularProgress value={50} title="SEO Growth" />
                        </div>
                        {/* Legend */}
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#4ADE80]" />
                                <span className="text-[13px] sm:text-[14px] text-gray-700">With digital marketing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                                <span className="text-[13px] sm:text-[14px] text-gray-700">Without digital marketing</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProvidingProcess;
