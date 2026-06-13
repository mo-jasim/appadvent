'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface WebSolutionCard {
    title: string;
    icon: string;
    description: string;
}

const cards: WebSolutionCard[] = [
    {
        title: 'Web Portals',
        icon: '/images/wp1.svg',
        description: 'We build secure and scalable web portals that connect users, customers, employees, and partners through a centralized platform. Our solutions streamline communication, data management, and business operations efficiently.'
    },
    {
        title: 'Websites',
        icon: '/images/wp2.svg',
        description: 'We create modern, responsive, and user-friendly websites that strengthen your online presence. Designed for performance and engagement, our websites help attract visitors and convert them into loyal customers.'
    },
    {
        title: 'E-commerce',
        icon: '/images/wp3.svg',
        description: 'Our e-commerce solutions deliver seamless shopping experiences with secure payments, intuitive navigation, and efficient order management. We help businesses increase sales, improve customer satisfaction, and grow online revenue.'
    },
    {
        title: 'Web Apps',
        icon: '/images/wp4.svg',
        description: 'We develop powerful web applications tailored to your business requirements. Combining functionality, scalability, and intuitive user experiences, our web apps help automate processes and improve overall productivity.'
    },
];

const WebSolutionSection: React.FC = () => {
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
        <section className="text-black mb-[80px] px-4 font-THICCCBOI max-w-7xl mx-auto ">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2 leading-tight">
                        What <span className="text-[#32B9E9]">Web Solutions</span> Do You Need?
                    </h2>
                    <p className='max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-black leading-tight px-2'>
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[20px] flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div
                                className="mb-4 rounded-full cursor-pointer"
                                onMouseEnter={() => handleHover(index)}
                            >
                                <Image
                                    src={
                                        mounted && imageKeys[index]
                                            ? `${item.icon}?v=${imageKeys[index]}`
                                            : item.icon
                                    }
                                    alt={item.title}
                                    width={62}
                                    height={62}
                                />
                            </div>

                            <h3 className="font-bold text-[20px] md:text-[24px] mb-2">{item.title}</h3>
                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebSolutionSection;
