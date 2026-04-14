'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

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
        title: 'Market Analyzing ',
        Icon: "/Digimark.img/icons_2.svg",
        desc: 'We support both short-term and long-term team augmentation. You can hire our experts for a specific time-bound task or to do ongoing work with no firm time boundaries.'
    },
    {
        title: 'Planning',
        Icon: "/Digimark.img/icons_3.svg",
        desc: 'To collaborate effectively, we establish frequent and direct communication with your team members and ensure timely exchange of the latest project knowledge.'
    },
    {
        title: 'Competition research',
        Icon: "/Digimark.img/icons_4.svg",
        desc: 'Even if we are temporarily involved in your project, we accurately document our work and fully comply with your requirements for documentation.'
    },
    {
        title: 'Ad Setup',
        Icon: "/Digimark.img/icons_5.svg",
        desc: 'ScienceSoft’s engineers stick to our ISO-certified quality management principles to ensure that our contributions meet the highest standards of technology excellence.'
    },
    {
        title: 'Tracking Results',
        Icon: "/Digimark.img/icons_6.svg",
        desc: 'ScienceSoft’s engineers stick to our ISO-certified quality management principles to ensure that our contributions meet the highest standards of technology excellence.'
    },
    {
        title: 'Continous Monitoring',
        Icon: "/Digimark.img/icons_7.svg",
        desc: 'Even if we are temporarily involved in your project, we accurately document our work and fully comply with your requirements for documentation.'
    },
];

const CircularProgress = ({ value, title }: { value: number; title: string }) => {
    const radius = 60; // Increased radius to fit text inside
    const circumference = 2 * Math.PI * radius;

    // In the image, the grey background is top-left, yellow is top-right, green is bottom.
    // We'll simulate this with stroke-dasharray.
    // Grey track (full circle as background)
    // Yellow segment (starts at top, goes right) ~30%
    // Green segment (starts below yellow, goes to bottom-left) ~40%
    // These values are arbitrary representations of the image's layout.

    // For a more exact match to the image (where yellow is ~25%, green is ~45%):
    const yellowPercent = 25;
    const greenPercent = 45;

    const yellowOffset = circumference - (yellowPercent / 100) * circumference;
    const greenOffset = circumference - (greenPercent / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-6">
            <h3 className="text-[18px] font-bold text-[#374151]">{title}</h3>

            <div className="relative w-[180px] h-[180px]">
                {/* SVG container rotated so 0 degrees is at the top */}
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 140 140">

                    {/* 1. Background Gray Track (left side) */}
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#E5E7EB" // tailwind gray-200
                        strokeWidth="10" fill="none"
                        strokeLinecap="round"
                    />

                    {/* 2. Green Track (Bottom & Left) */}
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#4ADE80" // tailwind green-400
                        strokeWidth="10" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={greenOffset}
                        // Start the green segment offset by the yellow segment's length
                        className="origin-center rotate-[90deg] transition-all duration-1000 ease-out"
                    />

                    {/* 3. Yellow/Orange Track (Top Right) */}
                    <circle
                        cx="70" cy="70" r={radius}
                        stroke="#F59E0B" // tailwind amber-500
                        strokeWidth="10" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={yellowOffset}
                        className="origin-center transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Inner Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-[24px] font-bold text-[#111827] mb-1">{value}%</span>
                    <span className="text-[12px] text-gray-500 leading-tight">
                        increase rate with<br />digital marketing
                    </span>
                </div>
            </div>
        </div>
    );
};

const providingProcess: React.FC = () => {
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

                    <div className="text-center mb-16 max-w-6xl mx-auto">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2">
                            Our Digital Marketing Service Providing Process
                        </h2>
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
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <h3 className="font-bold text-[20px] md:text-[24px] mb-3">{item.title}</h3>
                                <p className="text-black text-[14px] leading-relaxed font-THICCCBOI">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                        {/* Statistics Card (Spans 2 columns on large screens) */}
                        <div className="col-span-1 lg:col-span-2 bg-white rounded-[20px] p-8 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-center items-center gap-6">
                            <div className="flex flex-col sm:flex-row justify-around w-full items-center gap-8 mt-4">
                                <CircularProgress value={50} title="SEO Growth" />
                                <CircularProgress value={50} title="SEO Growth" />
                                <CircularProgress value={50} title="SEO Growth" />
                            </div>

                            {/* Legend */}
                            <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#4ADE80]"></div>
                                    <span className="text-[14px] text-gray-700">With digital marketing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                                    <span className="text-[14px] text-gray-700">Without digital marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};


export default providingProcess;
