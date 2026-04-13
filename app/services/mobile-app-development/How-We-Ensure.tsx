import Image from 'next/image';

interface ServiceItem {
    title: string;
    titleIcon: string;
    // description: string;


}

const HowWeEnsure: React.FC = () => {
    const services: ServiceItem[] = [
        {
            title: 'Location Services',
            titleIcon: "/MA-images/MAimg24.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices.",
        },
        {
            title: 'Secure Payments',
            titleIcon: "/MA-images/MAimg25.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Real-Time Messaging',
            titleIcon: "/MA-images/MAimg26.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Cross-Device Sync',
            titleIcon: "/MA-images/MAimg27.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Chatbot Integration',
            titleIcon: "/MA-images/MAimg28.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Immersive Experience',
            titleIcon: "/MA-images/MAimg29.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Smart Scheduling',
            titleIcon: "/MA-images/MAimg30.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Image Recognition',
            titleIcon: "/MA-images/MAimg31.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'QR code scanning',
            titleIcon: "/MA-images/MAimg32.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Push Notifications',
            titleIcon: "/MA-images/MAimg33.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },

        {
            title: 'IoT device Integration',
            titleIcon: "/MA-images/MAimg34.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
        {
            title: 'Mobile business intelligence',
            titleIcon: "/MA-images/MAimg35.svg",
            // description: "The page describes our approach to requirements engineering, feasibility assessment, and scoping. It also outlines our scope change management and scope creep control practices."
        },
    ];

    return (
        <div className="w-full bg-[#001F26] mt-[80px] mb-[80px] pt-[80px] pb-[80px] font-THICCCBOI">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 md:mb-6 text-white leading-tight">
                        Building All Mobile Features Modern Users Need
                    </h2>
                    <p className="text-white/90 max-w-5xl mx-auto text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed font-THICCCBOI">
                        Apart from technical expertise, many other factors influence project success and software quality. Appadvent teams approach
                        all of them seriously. You are welcome to check the descriptions of processes and practices we rely on to deliver on goal,
                        quality, schedule, and budget:
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
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
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content Container */}
                            <h3 className="font-bold text-[16px] text-gray-900 leading-tight group-hover:text-[#32B9E9] transition-colors duration-300 ease-in-out">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
};

export default HowWeEnsure;
