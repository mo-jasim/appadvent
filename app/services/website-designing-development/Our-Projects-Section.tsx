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
        completionTime: "3 Months",
        platform: "Website",
        viewText: "Full details",
        viewLink: "/portfolio/Letramway",
        category: "Website",
    },
    {
        image: "/Letimg/Newness.svg",
        title: "Newness",
        completionTime: "3 Months",
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
        completionTime: "3 Months",
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
        <section className="text-black font-THICCCBOI mt-[80px] mb-[80px]">
            <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="w-full md:max-w-[70%]">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 text-center md:text-left leading-tight">
                            <span className="text-[#32B9E9]">Our Projects</span> : New
                            Launches and App Makeover
                        </h2>
                        <p className="text-black text-[16px] md:text-[20px] text-center md:text-left leading-relaxed">
                            Explore our web development case studies to see how we deliver
                            transformative solutions that drive real results. Each project
                            highlights our strategic approach and the value we bring to
                            clients.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6 md:mt-0 pb-2 mx-auto md:mx-0">
                        <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#32B9E9] hover:text-white hover:border-[#32B9E9] transition-colors text-black" aria-label="Previous project">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#32B9E9] hover:text-white hover:border-[#32B9E9] transition-colors text-black" aria-label="Next project">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative w-full">
                    <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                        <div
                            ref={scrollContainerRef}
                            className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 px-4 sm:px-6 lg:px-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
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
            </div>
        </section>
    );
};

export default OurProjectsSection;
