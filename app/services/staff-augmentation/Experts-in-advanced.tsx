import Image from 'next/image';

interface ServiceItem {
    title: string;
    titleIcon: string;
    // description: string;


}

const ExpertsInAdvanced: React.FC = () => {
    const services: ServiceItem[] = [
        {
            title: 'Location Services',
            titleIcon: "/staf-images/staf1.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices.",
        },
        {
            title: 'Secure Payments',
            titleIcon: "/staf-images/staf2.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Real-Time Messaging',
            titleIcon: "/staf-images/staf3.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Cross-Device Sync',
            titleIcon: "/staf-images/staf4.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Chatbot Integration',
            titleIcon: "/staf-images/staf5.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Immersive Experience',
            titleIcon: "/staf-images/staf6.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Smart Scheduling',
            titleIcon: "/staf-images/staf7.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Image Recognition',
            titleIcon: "/staf-images/staf8.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
    ];

    return (
        <div className="w-full bg-[#001F26] pt-[40px] pb-[40px] mt-[80px] mb-[80px] font-THICCCBOI">
            <div className="max-w-7xl mx-auto mt-[80px] mb-[80px]">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 md:mb-6 text-white leading-tight">
                        Experts in advanced techs
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-6 rounded-[20px] flex flex-col items-center text-center gap-4 border-2 border-transparent hover:border-[#32B9E9]/40 hover:shadow-[0_20px_40px_rgba(50,185,233,0.15)] hover:-translate-y-2 cursor-pointer transition-all duration-300 ease-in-out h-full justify-center min-h-[180px]"
                        >
                            {/* Icon Container */}
                            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                                <Image
                                    src={item.titleIcon}
                                    alt={item.title}
                                    width={140}
                                    height={140}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content Container */}
                            <h3 className="text-[20px] text-medium text-gray-900 leading-tight group-hover:text-[#32B9E9] transition-colors duration-300 ease-in-out">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
};

export default ExpertsInAdvanced;
