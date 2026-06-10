import React from 'react';
import Image from 'next/image';

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
        image: '/images/pageimg1.svg',
    },
];

const Specialists = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-[80px] font-THICCCBOI">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-center text-black mb-12 mt-0">
                    Specialists Who <span className="text-[#32B9E9]">Deliver</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="rounded-[20px] p-3 shadow-sm hover:shadow-xl transition-all duration-300 w-full border border-gray-200 bg-white"
                        >
                            <div className="relative aspect-[5/6] w-full mb-2 rounded-2xl overflow-hidden bg-gray-100">
                                {/* Using object-cover to ensure images look good even if dimensions vary */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            <div className="pb-2">
                                <h3 className="text-[20px] md:text-[24px] font-bold text-black">{member.name}</h3>
                                <p className="text-gray-500 font-medium text-[16px]">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Specialists;
