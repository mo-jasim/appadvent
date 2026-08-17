"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    {
        image: "/images/p5.png",
        title: "Detect microplastic",
        completionTime: "3 Months",
        platform: "Application",
        viewText: "Full details",
        viewLink: "/portfolio/Detect-microplastic",
        category: "Utility",
    },
    {
        image: "/images/p9.png",
        title: "Freshup – Social networking app",
        completionTime: "3 Months",
        platform: "Application",
        viewText: "Full details",
        viewLink: "/portfolio/Freshup",
        category: "Social Network",
    },
    {
        image: "/images/p8.png",
        title: "Goalkick – Social networking app",
        completionTime: "3 Months",
        platform: "Application",
        viewText: "Full details",
        viewLink: "/portfolio/Goalkick",
        category: "Social Network",
    },
    {
        image: "/images/p4.png",
        title: "Letramway",
        completionTime: "1 Month",
        platform: "Website",
        viewText: "Full details",
        viewLink: "/portfolio/Letramway",
        category: "Website",
    },
    {
        image: "/Letimg/Newness.svg",
        title: "Newness",
        completionTime: "6 Months",
        platform: "Application",
        viewText: "Full details",
        viewLink: "/portfolio/Newness",
        category: "E-Commerce",
    },
    {
        image: "/images/p3.png",
        title: "Privicam – storage privacy app",
        completionTime: "3 Months",
        platform: "Application",
        viewText: "Full details",
        viewLink: "/portfolio/Privicam",
        category: "Utility",
    },
    {
        image: "/Letimg/Queue-home-img.svg",
        title: "QMS — Smart Queue Management System",
        completionTime: "9 Months",
        platform: "Application",
        viewText: "Full details",
        viewLink: "/portfolio/Queue-Management-System",
        category: "Management",
    }
];

const OurProjectsSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
            const cardElement = scrollContainerRef.current.children[0] as HTMLElement;
            const cardWidth = cardElement.clientWidth;
            const gap = 24; // gap-6 is 24px
            scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
            const cardElement = scrollContainerRef.current.children[0] as HTMLElement;
            const cardWidth = cardElement.clientWidth;
            const gap = 24;
            scrollContainerRef.current.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full bg-white py-16 md:py-20 text-black font-THICCCBOI overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center max-w-6xl mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#061C3D] mb-4 text-center leading-tight">
                        Our Projects: New Launches and App Makeovers
                    </h2>
                    <p className="text-[#5a6270] text-[15px] sm:text-[17px] text-center max-w-5xl mx-auto leading-relaxed">
                        Explore our web development case studies to see how we deliver transformative solutions that drive real results. Each project highlights our strategic approach and the value we bring to clients. Use the industry.
                    </p>
                </div>
            </div>

            <div className="w-full">
                <div
                    ref={scrollContainerRef}
                    className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100%-1280px)/2+2rem))] pr-4 sm:pr-6 lg:pr-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100%-1280px)/2+2rem))] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {projects.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="w-full md:w-[calc(75%-12px)] lg:w-[calc(40%-16px)] flex-shrink-0 snap-start border border-gray-300 rounded-[32px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link href={project.viewLink} className="flex flex-col flex-grow">
                                <div className="p-4 pb-0 bg-white">
                                    <div className="relative h-[300px] w-full rounded-[16px] overflow-hidden bg-gray-30">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                <div className="p-5 md:p-6 flex flex-col flex-grow bg-white">
                                    <h3 className="font-bold text-[18px] md:text-[20px] mb-4 line-clamp-2 leading-tight">
                                        {project.title}
                                    </h3>

                                    <div className="grid grid-cols-3 items-stretch mt-auto pt-4">
                                        <div className="flex flex-col pr-2 sm:pr-3 border-r border-gray-200">
                                            <span className="text-gray-500 font-normal text-[11px] sm:text-[13px] mb-1.5 whitespace-nowrap">
                                                Completion Time
                                            </span>
                                            <span className="font-semibold text-black text-[12px] sm:text-[14px] truncate">
                                                {project.completionTime}
                                            </span>
                                        </div>

                                        <div className="flex flex-col px-2 sm:px-3 border-r border-gray-200">
                                            <span className="text-gray-500 font-normal text-[11px] sm:text-[13px] mb-1.5 whitespace-nowrap">
                                                Platform
                                            </span>
                                            <span className="font-semibold text-black text-[12px] sm:text-[14px] truncate">
                                                {project.platform}
                                            </span>
                                        </div>

                                        <div className="flex flex-col pl-2 sm:pl-3">
                                            <span className="text-gray-500 font-normal text-[11px] sm:text-[13px] mb-1.5 whitespace-nowrap">
                                                View
                                            </span>
                                            <span className="text-black font-semibold underline decoration-1 decoration-black hover:decoration-[#32B9E9] hover:text-[#32B9E9] underline-offset-2 transition-colors duration-300 text-[12px] sm:text-[14px] truncate">
                                                {project.viewText}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProjectsSection;
