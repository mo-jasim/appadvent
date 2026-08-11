'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Cooperation {
    title: string;
    Icon: string;
    desc: string;
}

const cards: Cooperation[] = [
    {
        title: 'IT team augmentation',
        Icon: "/SVG5/1.svg",
        desc: "Our employees temporarily join your technical team managed by your project manager. Fully staffed with the required skills, your project can move faster 1.5–2 times. Best: for Businesses that need to augment established development teams with extra resources to face a tight project deadline or skill deficiency.",
    },
    {
        title: 'Dedicated team',
        Icon: "/SVG5/2.svg",
        desc: "You entrust end-to-end software development project to Appadvent. This way, you can save up to 30% in development costs as you don't hire, onboard, and train full-time tech staff. Best for: Businesses with overloaded/absent tech teams that want to minimize involvement in project management."
    },
    {
        title: 'Full project outsourcing',
        Icon: "/SVG5/3.svg",
        desc: "You entrust end-to-end software development project to Appadvent. This way, you can save up to 30% in development costs as you don't hire, onboard, and train full-time tech staff. Best for: Businesses with overloaded/absent tech teams that want to minimize involvement in project management."
    },
    {
        title: 'Managed IT Services',
        Icon: "/SVG5/4.svg",
        desc: "Appadvent ensures the stability of your IT infrastructure through routine monitoring and manages IT operations (help desk, security) of your company. Best for: Businesses with overloaded/absent tech teams that want to minimize involvement in project management."
    },
];

const Cooperation: React.FC = () => {
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
        <section className="text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-THICCCBOI overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
                        Outsourcing Cooperation Models We Support
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
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
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-gray-200/80 hover:border-[#32B9E9] rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300 group">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src={mounted && imageKeys[index] ? `${item.Icon}?v=${imageKeys[index]}` : item.Icon}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain shrink-0"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center items-center">
                                    <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#32B9E9] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Cooperation;

