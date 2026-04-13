
import React from 'react';
import { FaRegStar } from "react-icons/fa";
import OurProjectsSection from '../website-designing-development/Our-Projects-Section';
import CompaniesLove from '../website-designing-development/Companies-Love';

const AverageCost = () => {
    const pricingPlans = [
        {
            price: "From $20/ticket",
            features: [
                "L1 support for end users",
                "200–300 L1 tickets per month",
                "24/7 time coverage."
            ]
        },
        {
            price: "From $40/ticket",
            features: [
                "L2 support for end users.",
                "40–160 L2 tickets per month.",
                "24/7 time coverage."
            ]
        },
        {
            price: "From $2k to 3k /month",
            features: [
                "Maintenance of customer-facing software",
                "Software availability, performance, security etc.",
                "a high number of change requests is expected."
            ]
        }
    ];

    return (
        <>
            <section className="py-10 md:py-20 font-THICCCBOI bg-[#001F26] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 md:mb-6 leading-tight">
                            Average Cost of Different Web Solutions
                        </h2>
                        <p className="text-white/80 text-[16px] md:text-[18px] max-w-4xl mx-auto leading-relaxed">
                            Web solutions are very different in functionality and scale, from simple corporate websites to complex enterprise systems.
                            Logically, the range of costs is wide too. Take a look at several examples from our practices and don't hesitate to request a free
                            quote that will be tailored to your specific solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className="bg-white text-black p-8 rounded-[24px] flex flex-col items-start text-left h-full shadow-lg"
                            >
                                <h3 className="text-[20px] md:text-[24px] font-bold mb-4 md:mb-6">
                                    {plan.price}
                                </h3>

                                <div className="flex flex-col gap-4 w-full">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <FaRegStar className="text-[#FF6B6B] w-5 h-5 flex-shrink-0 mt-1" />
                                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <OurProjectsSection />
            <CompaniesLove />
        </>
    );
};

export default AverageCost;
