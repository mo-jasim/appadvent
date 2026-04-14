import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AverageCostMobile = () => {
    const plans = [
        {
            title: "Simple app",
            features: [
                "Simple user interface and navigation.",
                "Basic features and functionality; focus on one primary function or task.",
                "Low programming complexity, fast development."
            ],
            price1: "$30,000–$80,000",
            price1Label: "Cost of a mobile app for business needs",
            price2: "$30,000–$80,000",
            price2Label: "Cost of a mobile product for commercial distribution"
        },
        {
            title: "App of medium complexity",
            features: [
                "Interactive interface, multi-step user journeys, more complicated (e.g., layered) navigation.",
                "Support for multiple use cases, a broad range of features and capabilities.",
                "Data storage and integrations with external APIs are likely.",
                "A moderate level of technical expertise is required."
            ],
            price1: "$80,000–$200,000",
            price1Label: "Cost of a mobile app for business needs",
            price2: "$150,000–$300,000",
            price2Label: "Cost of a mobile product for commercial distribution"
        },
        {
            title: "App with high complexity",
            features: [
                "Rich and dynamic interface, advanced interactions, multiple layers of navigation.",
                "Complex business logic and workflows, advanced features.",
                "Likely to involve the development of custom back-end logic and sophisticated data structures and algorithms.",
                "May require compliance with industry standards and regulations.",
                "Senior-level technical expertise is required."
            ],
            price1: "$200,000–$500,000",
            price1Label: "Cost of a mobile app for business needs",
            price2: "$300,000+",
            price2Label: "Cost of a mobile product for commercial distribution"
        }
    ];

    return (
        <section className="mt-[80px] font-THICCCBOI text-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 md:mb-6 text-black leading-tight">
                        Average Cost of Mobile App Development
                    </h2>
                    <p className="text-gray-500 max-w-8xl mx-auto text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                        The development cost of a mobile app of average complexity varies between $80,000 and $200,000. Please note that we are
                        talking about average figures. Surely, there are apps that cost less or more — it all depends on your requirements. In terms of
                        costs, we can roughly group mobile apps by the complexity of functionality and design and the development efforts required.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="flex flex-col border border-gray-200 rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                            {/* Header */}
                            <div className="bg-[#0E5366] py-6 px-4 text-center">
                                <h3 className="text-white text-[24px] font-bold">{plan.title}</h3>
                            </div>

                            {/* Body */}
                            <div className="p-8 flex-grow flex flex-col">
                                <p className="text-gray-500 mb-6 font-medium text-[20px]">Features</p>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                            <span className="text-gray-600 text-[16px] leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Pricing Blocks */}
                                <div className="space-y-4 mt-auto">
                                    <div className="bg-[#EAF8FC] p-6 rounded-[12px] text-center">
                                        <p className="text-[20px] font-bold text-[#1A1A1A] mb-1">{plan.price1}</p>
                                        <p className="text-gray-500 text-[13px]">{plan.price1Label}</p>
                                    </div>
                                    <div className="bg-[#EAF8FC] p-6 rounded-[12px] text-center">
                                        <p className="text-[20px] font-bold text-[#1A1A1A] mb-1">{plan.price2}</p>
                                        <p className="text-gray-500 text-[13px]">{plan.price2Label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AverageCostMobile;
