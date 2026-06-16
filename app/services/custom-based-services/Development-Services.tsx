'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface MobileApplication {
    title: string;
    Icon: string;
    desc: string;
}

const cards: MobileApplication[] = [
    {
        title: 'WebApp Development',
        Icon: "/SVG7/icon_2.svg",
        desc: 'Build scalable and responsive web applications tailored to your business goals. We create secure, high-performance digital platforms with seamless functionality, modern UI/UX, and optimized user experiences across all devices and industries.'
    },
    {
        title: 'Mobile App Development ',
        Icon: "/SVG7/icon_4.svg",
        desc: 'Develop feature-rich mobile applications for Android and iOS with intuitive interfaces and smooth performance. Our mobile solutions focus on scalability, user engagement, security, and delivering exceptional digital experiences for modern businesses.'
    },
    {
        title: 'Software Software',
        Icon: "/SVG7/icon_prototype ag.svg",
        desc: 'Create custom software solutions designed to streamline operations, automate workflows, and improve business efficiency. Our development team delivers secure, scalable, and high-performing software aligned with your unique operational requirements and goals.'
    },
    {
        title: 'Enterprise Application Integration',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'Integrate enterprise systems, applications, and workflows seamlessly to improve business productivity and operational efficiency. We ensure secure data flow, system compatibility, and scalable integrations that support long-term digital transformation initiatives.'
    },
    {
        title: 'Cloud-Based Solutions',
        Icon: "/SVG7/icon_5.svg",
        desc: 'Leverage cloud technologies to build flexible, scalable, and secure digital infrastructures. Our cloud-based solutions improve accessibility, performance, collaboration, and operational efficiency while supporting modern business growth and remote accessibility requirements.'
    },
    {
        title: 'Microservices Architecture',
        Icon: "/SVG7/icon_6.svg",
        desc: 'Develop scalable applications using microservices architecture for improved flexibility, faster deployment, and seamless system management. We build modular solutions that enhance performance, simplify maintenance, and support continuous business scalability efficiently.'
    },
    {
        title: 'DevOps Services',
        Icon: "/SVG7/icon_7.svg",
        desc: 'Optimize software development and deployment processes with reliable DevOps solutions. We streamline collaboration, automation, testing, and infrastructure management to improve delivery speed, operational efficiency, and overall software performance consistency.'
    }
];

const DevelopmentServices: React.FC = () => {
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
            <section className="text-black mt-[80px] mb-[160px] px-4 font-THICCCBOI max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12 md:mb-16 max-w-6xl mx-auto">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                            Custom-Based Software Development Services
                        </h2>
                        <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                            We build tailored digital solutions designed around your unique business goals, workflows, and customer needs. From strategy and development to deployment and support, Appadvent delivers scalable, high-performance services that drive measurable business growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                            >
                                <div
                                    className="mb-6 cursor-pointer flex items-center h-[65px]"
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
                                        className="object-contain max-h-[65px]"
                                    />
                                </div>

                                <h3 className="font-bold text-[18px] md:text-[20px] text-[#050A15] mb-3">{item.title}</h3>
                                <p className="text-black text-sm md:text-[16px] font-THICCCBOI">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default DevelopmentServices;