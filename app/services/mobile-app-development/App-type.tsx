'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
// const TIMER_SEC = 10 * 1000; // 10 sec

interface AppTypeitem {
    title: string;
    Icon: string;
    desc: string;
}

const cards: AppTypeitem[] = [
    {
        title: 'Enterprises apps',
        Icon: "/SVG-motion2/icons_enterprises.svg",
        desc: 'Empower your organization with enterprise-grade mobile applications that streamline workflows, improve collaboration, and enhance productivity while maintaining security and scalability across business operations.'
    },
    {
        title: 'Communication & social media apps ',
        Icon: "/SVG-motion2/icons_communication.svg",
        desc: 'Build engaging communication and social networking platforms that connect users in real time. We create feature-rich solutions with messaging, media sharing, notifications, and community-building capabilities.'
    },
    {
        title: 'Supply chain management and logistics apps',
        Icon: "/SVG-motion2/icons_supply chain.svg",
        desc: 'Optimize logistics operations with mobile solutions that improve inventory tracking, shipment monitoring, route management, and real-time visibility across the entire supply chain.'
    },
    {
        title: 'eCommerce apps',
        Icon: "/SVG-motion2/icons_commerce.svg",
        desc: 'Deliver seamless shopping experiences with secure, user-friendly eCommerce applications. Our solutions include product catalogs, payment integration, order management, and personalized customer experiences.'
    },
    {
        title: 'Secure medical apps',
        Icon: "/SVG-motion2/icons_healthcare.svg",
        desc: 'Develop HIPAA-compliant and secure healthcare applications that support patient engagement, telemedicine, appointment scheduling, health monitoring, and secure medical data management.'
    },
    {
        title: 'Health and fitness apps',
        Icon: "/SVG-motion2/icons_fitness.svg",
        desc: 'Create innovative fitness and wellness applications that help users track activities, monitor health metrics, set goals, and stay motivated through personalized experiences.'
    },
    {
        title: 'Banking and financial self-service apps',
        Icon: "/SVG-motion2/icons_bank.svg",
        desc: 'Enable secure digital banking and financial management through mobile applications that offer account access, payments, transaction tracking, budgeting tools, and advanced security features.'
    },
    {
        title: 'Manufacturing and production control apps',
        Icon: "/SVG-motion2/icons_manufacturing.svg",
        desc: 'Improve manufacturing efficiency with applications that support production monitoring, quality control, inventory management, equipment tracking, and real-time operational insights.'
    },
    {
        title: 'Travel, navigation, and hospitality apps',
        Icon: "/SVG-motion2/icons_travel.svg",
        desc: 'Enhance customer experiences with travel and hospitality applications that offer booking services, navigation assistance, itinerary planning, location-based features, and personalized recommendations.'
    },
    {
        title: 'Booking and reservation apps',
        Icon: "/SVG-motion2/icons_ticket.svg",
        desc: 'Simplify appointment scheduling and reservation management with intuitive mobile applications designed for hotels, restaurants, healthcare providers, service businesses, and event organizers.'
    },
    {
        title: 'Real estate apps',
        Icon: "/SVG-motion2/icons_real-esate.svg",
        desc: 'Transform property management and real estate transactions with applications that enable property listings, virtual tours, lead management, location search, and customer engagement.'
    },
    {
        title: 'e-Government and citizen apps',
        Icon: "/SVG-motion2/icons_citizen.svg",
        desc: 'Support digital transformation in the public sector through citizen-centric applications that provide easy access to government services, information, requests, and online transactions.'
    },
    {
        title: 'Public safety and emergency services',
        Icon: "/SVG-motion2/icons_emeregency.svg",
        desc: 'Develop reliable applications for emergency response, incident reporting, public alerts, crisis management, and communication between authorities and citizens during critical situations.'
    },
    {
        title: 'Nonprofit and humanitarian aid apps',
        Icon: "/SVG-motion2/icons_charity.svg",
        desc: 'Help nonprofit organizations improve outreach, fundraising, volunteer management, and community engagement through scalable and user-friendly mobile solutions.'
    },
    {
        title: 'Entertainment and media apps',
        Icon: "/SVG-motion2/icons_entertainment.svg",
        desc: 'Create engaging media and entertainment applications with features such as video streaming, music playback, live content, social interaction, subscriptions, and personalized recommendations.'
    },
];

const AppType: React.FC = () => {
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
        <section className="text-black mt-[80px] mb-[80px] px-4 font-THICCCBOI max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-7xl mx-auto text-center justify-center mb-[50px]">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        App Types We Develop: Industry & Use Cases                   </h2>
                    <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] font-THICCCBOI">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case                    </p>
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
                            <p className="text-black text-sm md:text-[16px] font-THICCCBOI">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default AppType;
