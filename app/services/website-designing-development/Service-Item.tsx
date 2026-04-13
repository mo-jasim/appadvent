import Image from 'next/image';

interface ServiceItem {
    title: string;
    titleIcon: string;
    description: string;

}

const ServiceCards: React.FC = () => {
    const services: ServiceItem[] = [
        {
            title: 'Scoping',
            titleIcon: "/images/wdp1.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices.",
        },
        {
            title: 'Cost Estimate',
            titleIcon: "/images/wdp2.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Quality Assurance',
            titleIcon: "/images/wdp3.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Collaboration',
            titleIcon: "/images/wdp4.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Security Management',
            titleIcon: "/images/wdp5.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Budget Management',
            titleIcon: "/images/wdp6.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Knowledge Management',
            titleIcon: "/images/wdp7.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Deadline Management',
            titleIcon: "/images/wdp8.svg",
            description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 px-4 font-THICCCBOI max-w-7xl mx-auto">
            {services.map((item, index) => (
                <div
                    key={index}
                    className="bg-white relative group border border-gray-100 p-6 sm:p-10 rounded-[20px] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 hover:shadow-2xl transition-all duration-500 overflow-hidden font-THICCCBOI"
                >
                    {/* Icon Container - Left Aligned */}
                    <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                        <Image
                            src={item.titleIcon}
                            alt={item.title}
                            width={52}
                            height={52}
                            className="object-contain"
                        />
                    </div>

                    {/* Content Container - Right Side */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-[18px] text-black leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-black text-[16px] leading-relaxed font-normal">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;
