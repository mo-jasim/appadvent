
import React from 'react';

const DevelopmentCycle = () => {
    const experts = [
        {
            title: "IT Consulting",
            description: "40+ consultants with 5–7 years of experience on average."
        },
        {
            title: "Database Architecture",
            description: "Architects skilled in SQL, NoSQL, and cloud databases."
        },
        {
            title: "Project Management",
            description: "45 certified PMs with 7–9 years of experience on average."
        },
        {
            title: "UX and UI",
            description: "Conversion-driven UX experts and UI designers."
        },
        {
            title: "Data Science",
            description: "Data scientists with 8 years of expertise on average."
        },
        {
            title: "Testing",
            description: "QA experts and testing automation engineers."
        },
        {
            title: "DevOps",
            description: "DevOps engineers with experience in 25+ CI/CD tools."
        },
        {
            title: "Security",
            description: "Certified ethical hackers, cloud security specialists, and SIEM professionals."
        },
        {
            title: "Support",
            description: "L1–L3 specialists. 25% of them provide 24/7 services."
        }
    ];

    return (
        <section className="mt-[80px] mb-[80px] font-THICCCBOI relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black mb-4 leading-tight">
                        Experts to complete a software
                        <br className="hidden md:block" /> development cycle
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experts.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[20px] shadow-sm border border-white/50 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-[20px] font-bold text-black mb-3">
                                {item.title}
                            </h3>
                            <p className="text-black text-[16px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentCycle;
