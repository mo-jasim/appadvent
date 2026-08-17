import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Saurabh Dutta',
        role: 'Technical Sales Head',
        image: '/images/pageimg3.svg',
    },
    {
        name: 'Marty Fontaine',
        role: 'VP Sales',
        image: '/images/pageimg2.svg',
    },
    {
        name: 'Sanjeev Kumar',
        role: 'Senior UI/UX Designer',
        image: '/images/about_sanjeevimg.jpg',
    },
];

const Specialists = () => {
    return (
        <div className="w-full px-3 sm:px-5 lg:px-12 py-7 mb-[80px] font-THICCCBOI">
            <style>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `}</style>

            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-center text-black mb-6 mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    Experts Dedicated to Your Success
                </motion.h2>
                <p className='text-center text-gray-500 text-[16px] mb-12 max-w-6xl mx-auto font-[16px] leading-[26px]'>Our team begins by identifying the values and strategies of your company to achieve the goals. We create a well-structured strategic plan that meets not only your specifications but also addresses your needs. We tend towards giving you all the services that could boost your online presence.</p>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
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
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.92 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
                                }
                            }}
                        >
                            <div className="relative h-full rounded-[19.5px] group">
                                <div className="relative h-full rounded-[19.5px] p-[8px] flex flex-col shadow-sm transition-all duration-500 hover:shadow-md bg-white overflow-hidden" style={{ transformStyle: "preserve-3d" }}>

                                    <div className="relative aspect-[5/6] w-full mb-2 rounded-2xl overflow-hidden bg-gray-100 z-10">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                    </div>

                                    <div className="pb-2 relative z-10">
                                        <h3 className="text-[20px] md:text-[24px] font-bold text-black group-hover:text-[#0d2a3a] transition-colors duration-300">{member.name}</h3>
                                        <p className="text-gray-500 font-medium text-[16px]">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Specialists;
