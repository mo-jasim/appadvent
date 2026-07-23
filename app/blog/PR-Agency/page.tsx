"use client";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function PRAgencyBlogPage() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const relatedPosts = [
        {
            title: "How Future Healthcare Technology Is Improving At-Home Care",
            category: "DIGITAL MARKETING",
            date: "March 28, 2026",
            image: "/images/bloglgimag.png"
        },
        {
            title: "How to Plan Web Application Development Services for Scalable Business Growth",
            category: "SOFTWARE",
            date: "March 13, 2026",
            image: "/images/Blogcard-2.webp"
        },
        {
            title: "How to Choose a Reputable AI Development Services Provider?",
            category: "DEVELOPMENT",
            date: "February 21, 2026",
            image: "/images/Blog-img.webp"
        },
        {
            title: "EMR Vs EHR Development: What should you choose for your healthcare business?",
            category: "SOFTWARE",
            date: "April 1, 2025",
            image: "/images/EMR-VS-EHR.webp"
        },
        {
            title: "Google Word Coach",
            category: "SOFTWARE",
            date: "February 28, 2025",
            image: "/images/Google-Word-Coach.webp"
        },
        {
            title: "App Development Company Case Study: Importance of Software Development Performance Metrics",
            category: "SOFTWARE",
            date: "January 18, 2025",
            image: "/images/Software-Development-Performance.webp"
        }
    ];

    const handleRecentPostClick = (slug: string) => {
        window.location.href = slug;
    };

    return (
        <>
            <main className="min-h-screen bg-[#F8FAFC] font-THICCCBOI text-[#4B5563]">
                <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content Column with Border */}
                        <div className="lg:w-[75%] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-4 md:p-6">
                                {/* Hero Image / Banner */}
                                <div className="flex items-center justify-center">
                                    <img
                                        className="bg-[#060d26] rounded-[2rem] w-full object-cover"
                                        src="/images/Digital-Marketing-Agency.webp"
                                        alt="10 Smartest Tips For Hiring A Digital PR Agency"
                                    />
                                </div>

                                {/* Post Title */}
                                <motion.div className="mb-6 mt-4" id="main-title" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                    <h1 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        10 Smartest Tips For Hiring A Digital PR Agency
                                    </h1>
                                    <p className="text-gray-500 font-bold text-[13px]">January 18, 2025</p>
                                </motion.div>

                                {/* Post Content */}
                                <motion.div className="space-y-5 text-black text-[16px] leading-[1.7]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                    <p>
                                        Digital marketing may seem complex. Buzzwords like SEO, ROI, PPC, and more can feel overwhelming—but at <span className="font-bold">Appadvent,</span> we simplify them with expert <span className="font-bold">SEO services</span> and <span className="font-bold">PPC services</span>, turning complex strategies into clear, results-driven growth for your business. Well, you must not worry about things like deploying the best digital marketing strategy or using the right keywords for better ranking. This is because the world has many high quality digital marketing experts and their very job is to devise strategies and help your business dominate the online world.
                                    </p>
                                    <p className="font-bold">
                                        However, a few questions that arise are:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-[15px] text-black">
                                        <li>How to hire the best digital marketing and advertising agency?</li>
                                        <li>What are the things to consider when choosing an agency?</li>
                                        <li>Moreover, how do you know that the agency is right for you?</li>
                                    </ul>
                                    <p>
                                        Seems like a lot of questions!
                                        <br />
                                        Worry not. We have the best answers for you.
                                    </p>
                                    <p>
                                        Here are 10 smartest tips to find the right digital PR agency to take your business to newer heights.
                                    </p>

                                    {/* Table of Contents */}
                                    <div className="mt-10 mb-8 overflow-hidden shadow-sm border border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => setIsTocOpen(!isTocOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-white text-black transition-all border-b border-gray-200"
                                        >
                                            <span className="font-bold text-[17px] text-[#0A1A2E]">Table of Contents</span>
                                            <ChevronDown className={`w-5 h-5 text-black stroke-[2.5] transition-transform duration-300 cursor-pointer ${isTocOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        {isTocOpen && (
                                            <div className="p-6 bg-white animate-in slide-in-from-top duration-300">
                                                <ul className="space-y-3.5 text-[15px] font-medium">
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">1.</span>
                                                        <span
                                                            className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('analyze-needs')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Analyze your digital marketing needs
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('industry-experience')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Check the industry experience of the agency
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('upgradation-level')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Look for their upgradation level
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">4.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('digital-presence')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Check their digital presence
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">5.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('price-to-pay')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Price to pay
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">6.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('transparency')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Transparency in work
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">7.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('using-tools')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Using the best tools
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">8.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('check-reviews')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Check the reviews
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">9.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('extension-team')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Ensure the agency serves as an extension of your own team
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">10.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors font-bold"
                                                            onClick={() => document.getElementById('feel-vibes')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Feel the vibes – are you comfortable with them?
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <motion.div id="analyze-needs" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            1. Analyze your digital marketing needs
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                What exactly are you looking to achieve through digital marketing? Is it brand awareness, wider reach, stronger SEO, better conversion, generating more leads, or boosting sales? What are your expectations with creative marketing agency? Also, you must consider your niche market. Besides, are you a startup who is stepping into the online world for the first time? Or are you an established business simply looking to strengthen your online visibility through a better digital marketing strategy? Is your marketing goal etched towards beating your competition or is it just simple promotion you need?
                                            </p>
                                            <p>
                                                Answers to these (and some more) questions may help you find the right digital PR agency that fits your business marketing needs.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="industry-experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            2. Check the industry experience of the agency
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                You don’t want an amateur to work for you, do you? You aren’t here for trial and error marketing; you are here for hitting the jackpot and increasing your sales, leads, visibility, ranking, reputation, brand awareness, or whatever you are looking for. For this, you need a pro creative marketing agency. They must boast of a proven track record of excellent results. More important, the agency must be a pro in your niche. This makes things all the better.
                                            </p>
                                            <p>
                                                Check the agency’s work portfolio. Ask if they have won awards and accolades for their work. Look for excellence.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="upgradation-level" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            3. Look for their upgradation level
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The digital world is constantly evolving. You must get associated with an upgraded digital marketing consulting service. Only an agency that stays ahead of its competition can help you do the same. Check whether they use the latest tools and technologies like automation software, advanced analytical platforms, AI-driven tools, and others. These aren’t fancy tools to be used occasionally. They have become an essential part of <span className="font-bold">digital marketing</span> strategy in the modern times.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="digital-presence" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            4. Check their digital presence
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                You wish to hire an online marketing consulting service so that your business can have a strong online presence. But, does the service have a strong online presence for themselves? If not, then they may not be worth your time and money. Check out the online presence of the digital PR agency that you wish to hire. If it doesn’t impress you, perhaps you must continue your search.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="price-to-pay" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            5. Price to pay
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Well, ultimately, you must pay a price for the excellent results your full service marketing agency delivers. So, what’s the price? It is good to be clear about the entire cost that may incur in your branding. Also, you mustn’t always go for the cheapest agency just to save money. At the same time, you need not break the bank to get the best results delivered. First, know your needs and chart out a budget. Discuss with the marketing team. Choose an agency that complements your marketing budget.
                                            </p>
                                            <p>
                                                Wondering whether it is possible to get excellent service at reasonable prices? Yes, it is possible. A little search and compare can get you to the best creative marketing agency in terms of cost and quality.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="transparency" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            6. Transparency in work
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The best agencies communicate with the clients regularly with regard to progress of work, challenges, and so on. They are transparent about the entire process. You shouldn’t be the one calling them always to know the status of your work. Also, if an issue arises, the agency must inform you immediately. The best digital marketing consulting service keeps their client updated about each digital move.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="using-tools" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            7. Using the best tools
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                When it comes to digital marketing, tools and techniques may differ with businesses. Tools suited for an educational website may be different from the tools for an e-commerce website. A competent creative marketing agency must know what tools to choose and how to use them optimally to deliver the best results.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="check-reviews" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            8. Check the reviews
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                As you go about filtering your options for digital PR agency, don’t forget to dig into the reviews and client testimonials. Furthermore, read their case studies. You can even ask around. A little effort on your part can help you get associated with the best agency in town.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="extension-team" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            9. Ensure the agency serves as an extension of your own team
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The right <span className="font-bold">digital marketing and advertising agency</span> can feel like an extension of your own team. When your way of thinking and the level of expertise “click” with each other, you can expect stellar performance.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="feel-vibes" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            10. Feel the vibes – are you comfortable with them?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Everything looks good. You are just about to hire full service marketing agency. However, is there something missing between you and the agency experts? In spite of the fact that your skills, price, niche, and expertise match, there can be a communication gap or a certain level of discomfort between you two. If this is the case, drop the digital PR agency at once! You might think this is a trivial point to consider. Wrong! You ought to match each other in vibes and communication, if you are looking for a long-term association and expecting some outstanding results together.
                                            </p>
                                            <p className="font-semibold text-[#0A1A2E] text-[17px] mt-6">
                                                Remember, the world is full of expertise; but not everyone fits the bill.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Related Posts Section */}
                                <div className="-mt-8 pt-5 border-t border-gray-100">
                                    <h3 className="text-[24px] font-bold text-[#0A1A2E] mb-10" id="sharing-section">
                                        What we’ve learned is yours for sharing!
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedPosts.slice(0, 3).map((post, i) => (
                                            <div key={i} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                                                <div className="relative h-44 w-full">
                                                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                                                    <div className="absolute top-3 right-3 bg-[#0052FF] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                                                        {post.category}
                                                    </div>
                                                </div>
                                                <div className="p-5 flex flex-col flex-1">
                                                    <h4 className="text-[15px] font-bold text-[#0A1A2E] mb-4 line-clamp-3 leading-tight group-hover:text-[#32B9E9] transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <div className="mt-auto">
                                                        <button
                                                            onClick={() => {
                                                                const slugMap: Record<string, string> = {
                                                                    "How Future Healthcare Technology Is Improving At-Home Care": "/blog/Healthcare",
                                                                    "How to Plan Web Application Development Services for Scalable Business Growth": "/blog/How-to-Plan",
                                                                    "How to Choose a Reputable AI Development Services Provider?": "/blog/How-to-Choose",
                                                                    "EMR Vs EHR Development: What should you choose for your healthcare business?": "/blog/EMR-Vs-EHR",
                                                                    "Google Word Coach": "/blog/Google-Word-Coach",
                                                                    "App Development Company Case Study: Importance of Software Development Performance Metrics": "/blog/App-Performance"
                                                                };
                                                                const slug = slugMap[post.title] || "#";
                                                                window.location.href = slug;
                                                            }}
                                                            className="text-[#0052FF] font-bold text-[12px] uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-none text-left"
                                                        >
                                                            READ MORE »
                                                        </button>
                                                        <div className="mt-4 pt-4 border-t border-gray-50">
                                                            <span className="text-gray-400 text-[11px] font-medium uppercase tracking-tight">
                                                                {post.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-[20%] space-y-6">
                            {/* Search */}
                            <div className="flex w-full rounded-md border border-gray-200 overflow-hidden h-[45px] bg-[#F1F3F4] shadow-sm">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 px-4 py-2 outline-none text-sm bg-transparent placeholder:text-gray-500"
                                />
                                <button className="bg-[#00AEEF] px-4 flex items-center justify-center text-white transition-colors hover:bg-[#0096ce]">
                                    <Search className="w-4 h-4 stroke-[3]" />
                                </button>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Recent Posts
                                </h4>
                                <div className="space-y-5">
                                    {[
                                        { title: "3 Undebatable Reasons to Hire ...", img: "/images/web-design-concept-with-drawings-1.webp", slug: "#" },
                                        { title: "10 Smartest Tips For Hiring A ...", img: "/images/Digital-Marketing-Agency.webp", slug: "/blog/PR-Agency" },
                                        { title: "App Development Company Case S...", img: "/images/Software-Development-Performance.webp", slug: "/blog/App-Performance" }
                                    ].map((post, i) => (
                                        <div key={i} className="flex gap-3 group cursor-pointer items-start" onClick={() => handleRecentPostClick(post.slug)}>
                                            <div className="relative w-[60px] h-[60px] flex-shrink-0 rounded-md overflow-hidden border border-gray-100 shadow-sm">
                                                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="text-[13px] font-bold text-[#0A1A2E] group-hover:text-[#32B9E9] transition-colors line-clamp-2 leading-snug">
                                                    {post.title}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Catagory
                                </h4>
                                <div className="flex items-center gap-2 text-[14px] text-[#32B9E9] font-bold cursor-pointer group">
                                    <Image src="/images/web-design-concept-with-drawings-1.webp" width={16} height={16} alt="icon" className="rounded-sm" />
                                    Software
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Contact Us
                                </h4>
                                <form className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        rows={3}
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white resize-none"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#1E4DFF] text-white font-bold py-2 rounded-full transition-all active:scale-95 mt-1 text-md tracking-wide"
                                    >
                                        Submit Details
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <FloatingContactButtons />
        </>
    );
}
