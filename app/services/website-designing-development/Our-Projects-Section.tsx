"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isHovered, projects.length]);

    // Logic to show circular items
    const visibleProjects = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleProjects.push(projects[(currentIndex + i) % projects.length]);
    }

    return (
        <section className="text-black font-THICCCBOI mt-[80px] mb-[80px]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 text-center md:text-left leading-tight">
                            <span className="text-[#32B9E9]">Our Projects</span> : New
                            Launches and App Makeover
                        </h2>
                        <p className="text-black text-[16px] md:text-[20px] text-center leading-relaxed">
                            Explore our web development case studies to see how we deliver
                            transformative solutions that drive real results. Each project
                            highlights our strategic approach and the value we bring to
                            clients.
                        </p>
                    </div>
                    {/* Optional: Add navigation buttons here if needed */}
                </div>

                <div
                    className="relative w-full overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="flex gap-6">
                        <AnimatePresence mode="popLayout">
                            {visibleProjects.map((project, index) => (
                                <motion.div
                                    key={`${project.title}-${currentIndex}-${index}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`w-full ${itemsToShow === 1
                                        ? "min-w-full"
                                        : itemsToShow === 2
                                            ? "min-w-[calc(50%-12px)]"
                                            : "min-w-[calc(33.333%-16px)]"
                                        } border border-gray-300 rounded-[20px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300`}
                                >
                                    <Link href={project.viewLink} className="flex flex-col flex-grow">
                                        <div className="p-4 pb-0 bg-white">
                                            <div className="relative h-[250px] w-full rounded-[16px] overflow-hidden bg-gray-30">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow bg-white">
                                            <h3 className="font-bold text-[20px] md:text-[22px] mb-6 line-clamp-1">
                                                {project.title}
                                            </h3>

                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-300 mt-auto gap-4 sm:gap-0">
                                                <div className="flex flex-col sm:pr-4 sm:border-r border-gray-300 w-full sm:w-auto">
                                                    <span className="text-black mb-1 whitespace-nowrap">
                                                        Completion Time
                                                    </span>
                                                    <span className="font-bold text-black">{project.completionTime}</span>
                                                </div>
                                                <div className="flex flex-col sm:px-4 sm:border-r border-gray-300 w-full sm:w-auto">
                                                    <span className="text-black mb-1 whitespace-nowrap">
                                                        Platform
                                                    </span>
                                                    <span className="font-bold text-black">{project.platform}</span>
                                                </div>
                                                <div className="flex flex-col sm:pl-4 items-start w-full sm:w-auto">
                                                    <span className="text-black mb-1 whitespace-nowrap">
                                                        View
                                                    </span>
                                                    <span
                                                        className="text-[#32B9E9] underline font-medium hover:text-[#2da8d5] whitespace-nowrap"
                                                    >
                                                        <span className="font-bold text-black">{project.viewText}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex % projects.length ? "bg-[#32B9E9] w-6" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProjectsSection;
