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
            description: "We carefully analyze project requirements, objectives, and technical needs to define a clear roadmap. Proper scoping helps prevent misunderstandings, reduces risks, and ensures successful project execution.",
        },
        {
            title: 'Cost Estimate',
            titleIcon: "/images/wdp2.svg",
            description: "Our team provides accurate and transparent cost estimates based on project complexity, scope, and requirements. This helps businesses plan investments effectively and avoid unexpected expenses."
        },
        {
            title: 'Quality Assurance',
            titleIcon: "/images/wdp3.svg",
            description: "Quality is embedded throughout the development lifecycle. Through continuous testing, reviews, and validation processes, we ensure reliable, secure, and high-performing digital solutions."
        },
        {
            title: 'Collaboration',
            titleIcon: "/images/wdp4.svg",
            description: "We maintain open communication and close collaboration with stakeholders throughout the project. Regular updates and feedback cycles ensure alignment with business goals and expectations."
        },
        {
            title: 'Security Management',
            titleIcon: "/images/wdp5.svg",
            description: "Security is a priority in every solution we develop. We implement industry best practices, secure coding standards, and risk mitigation strategies to protect data and systems."
        },
        {
            title: 'Budget Management',
            titleIcon: "/images/wdp6.svg",
            description: "Our project management approach focuses on controlling costs while maintaining quality. We monitor resources efficiently to ensure projects remain within budget and deliver maximum value."
        },
        {
            title: 'Knowledge Management',
            titleIcon: "/images/wdp7.svg",
            description: "We document processes, decisions, and technical information to ensure knowledge retention and seamless project continuity. This enables easier maintenance and future enhancements."
        },
        {
            title: 'Deadline Management',
            titleIcon: "/images/wdp8.svg",
            description: "We follow well-defined schedules and agile workflows to ensure timely delivery. Our proactive planning and progress tracking help keep projects on schedule without compromising quality."
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
