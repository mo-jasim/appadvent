'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    const [mounted, setMounted] = useState(false);
    const [imageKeys, setImageKeys] = useState<number[]>(new Array(cards.length).fill(0));

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
        <section className="text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-THICCCBOI overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight">
                        App Types We Develop: Industry & Use Cases
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-7xl mx-auto">
                        Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {cards.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >
                            <div className="block h-full group" onMouseEnter={() => handleHover(index)}>
                                <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-300">
                                    <div
                                        className="relative h-full rounded-[18px] bg-white p-6 sm:p-8 flex flex-col shadow-none border-1 hover:shadow-lg border-gray-100 overflow-hidden"
                                    >
                                        <div className="flex flex-col flex-grow">
                                            <div className="relative mb-6 inline-flex self-start">
                                                <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center">
                                                    <Image
                                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                                        alt={item.title}
                                                        width={64}
                                                        height={64}
                                                        className="object-contain shrink-0"
                                                    />
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-lg sm:text-xl md:text-[22px] mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-black text-sm sm:text-base font-THICCCBOI leading-relaxed flex-grow">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default AppType;
