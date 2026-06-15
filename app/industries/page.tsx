import React from 'react'
import Link from "next/link"
import CompaniesLove from '../services/website-designing-development/Companies-Love'
import OurProjectsSection from '../services/website-designing-development/Our-Projects-Section'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const industries = [
    {
        img: "/images/I6.png",
        icon: "/images/Cpu.svg",
        title: "Fintech & Crypto",
        href: "/industries/Fintech-Crypto",
        desc: "Building secure, scalable fintech and crypto solutions focused on seamless transactions, real-time analytics, compliance, user trust, and high-performance digital financial experiences.",
    },
    {
        img: "/images/I1.png",
        icon: "/images/eCommerce.svg",
        title: "Retail & E-commerce",
        href: "/industries/Ecommerce",
        desc: "Creating modern retail and e-commerce platforms that enhance customer engagement, simplify purchasing journeys, improve inventory management, and drive sustainable business growth.",
    },
    {
        img: "/images/I2.png",
        icon: "/images/health.svg",
        title: "Health & Pharmacy",
        href: "/industries/Health-&-pharmacy",
        desc: "Developing reliable healthcare and pharmacy solutions that improve patient experiences, streamline operations, ensure secure data management, and support accessible digital healthcare services.",
    },
    {
        img: "/images/I3.png",
        icon: "/images/Bank.svg",
        title: "Finance & Banking",
        href: "/industries/Finance-&-Banking",
        desc: "Delivering smart finance and banking solutions with secure transactions, advanced analytics, regulatory compliance, and seamless digital experiences tailored for modern financial institutions.",
    },
    {
        img: "/images/I4.png",
        icon: "/images/social.svg",
        title: "Social & Community",
        href: "/industries/Social-&-Community",
        desc: "Creating engaging social and community platforms that encourage real-time interaction, user engagement, content sharing, collaboration, and meaningful digital connections across audiences.",
    },
    {
        img: "/images/I5.png",
        icon: "/images/media.svg",
        title: "Media & Entertainment",
        href: "/industries/Media-&-ENtertainment",
        desc: "Developing immersive media and entertainment solutions with seamless streaming, personalized experiences, interactive content delivery, and scalable platforms for modern digital audiences.",
    },
    {
        img: "/staf-images/Rectangle 81.svg",
        icon: "/images/iconoir_internet.svg",
        title: "Consumer Internet",
        href: "/industries/Consumer-internet",
        desc: "Building fast, user-focused consumer internet platforms designed to improve accessibility, engagement, scalability, and seamless digital experiences for everyday online users.",
    },
]

const IndustriesPage = () => {
    return (
        <div className='overflow-hidden' style={{
            backgroundImage: "url('/images/polygon.png')",
        }}>
            <div className="font-THICCCBOI mb-[60px] md:mb-[80px]">
                <main>
                    <section className="relative py-8 md:py-10 overflow-hidden">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                            {/* Heading */}
                            <p className='text-black font-extrabold text-[32px] sm:text-[44px] md:text-[60px] text-center leading-tight mb-[12px] md:mb-[16px] mt-[60px]'>
                                Industries We Cater To
                            </p>
                            <p className='text-gray-600 text-[14px] sm:text-[16px] md:text-[20px] py-3 md:py-6 max-w-6xl mx-auto text-center leading-relaxed mb-[80px]'>
                                We proudly serve a wide range of industries by delivering tailored solutions that address their unique challenges. From retail and e-commerce to healthcare, education, manufacturing, and hospitality, our services are designed to streamline operations, enhance customer experiences, and drive growth.
                            </p>

                            {/* Cards Grid */}
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-[20px]">
                                {industries.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border-2 border-[#E6EAF0] p-5 md:p-6 flex flex-col items-center text-center hover:shadow-md transition group w-full max-w-[630px] mx-auto min-h-[599px]"
                                    >
                                        {/* Image */}
                                        <Link href={item.href} className="w-full">
                                            <div className="w-full h-[250px] sm:h-[270px] md:h-[290px] rounded-xl overflow-hidden">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Icon */}
                                            <div className="w-full flex items-center justify-center">
                                                <div className="w-[68px] h-[68px] md:w-[78px] md:h-[78px] rounded-full bg-[#EAF4FF] flex items-center justify-center -mt-6 mb-4 border border-white border-[8px]">
                                                    <Image src={item.icon} alt={item.title} width={40} height={40} />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0F172A]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-500 mt-2 max-w-2xl mx-auto mb-[24px] leading-relaxed">
                                                {item.desc}
                                            </p>
                                            <div className="flex items-center justify-center gap-2 text-[#32B9E9] text-[15px] font-semibold">
                                                Learn More <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <OurProjectsSection />
                            <CompaniesLove />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
};

export default IndustriesPage;