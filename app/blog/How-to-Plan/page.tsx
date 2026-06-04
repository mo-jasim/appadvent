"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, HeartPulse } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function HealthcareBlogPage() {
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

    return (
        <>
            <main className="min-h-screen bg-[#F8FAFC] font-sans text-[#4B5563]">
                <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content Column with Border */}
                        <div className="lg:w-[75%] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-4 md:p-6">
                                {/* Hero Image / Banner */}
                                <div className="flex items-center justify-center">
                                    <img className="bg-[#060d26] rounded-[2rem]" src="/images/Blogcard-2.webp" alt="" />
                                </div>

                                {/* Post Title */}
                                <div className="mb-6 mt-4">
                                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        How to Plan Web Application Development Services for Scalable Business Growth
                                    </h2>
                                    <p className="text-gray-500 font-bold text-[13px]">March 13, 2026</p>
                                </div>

                                {/* Post Content */}
                                <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                    <p>
                                        You need to build a digital solution which extends beyond website development because you want to create a web application that will grow while serving users and incorporating new business operations. Most founders underestimate how quickly requirements change after launch. The initial planning stage of web application development services will help businesses avoid expensive reconstruction work and scaling problems which emerge during later stages. Businesses and end users who need scalable web applications should follow these steps to get started.                                    </p>
                                </div>

                                {/* Table of Contents */}
                                <div className="mt-10 mb-8 overflow-hidden shadow-md border border-gray-100 rounded-md">
                                    <button
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                        className="w-full flex items-center justify-between p-4 text-white transition-all"
                                    >
                                        <span className="font-bold text-base text-black">Table of Contents</span>
                                        <ChevronDown className={`w-5 h-5 text-black transition-transform duration-300 cursor-pointer ${isTocOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isTocOpen && (
                                        <div className="p-6 bg-white border-x border-b border-gray-100 animate-in slide-in-from-top duration-300">
                                            <ul className="space-y-3 text-[15px] text-[#4B5563] hover:text-[#0A1A2E] font-medium">
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">1.</span>
                                                    <span
                                                        className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('role-of-custom-web-app')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Start With Business Goals, Not Features
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">2.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('managed-it-services')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Choose Scalable Technology (Even If MVP Is Small)
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">3.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('home-care-focus')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Design for Growth in Users and Data
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">4.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('disrupted-by-startups')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Think Multi-Channel From Day One
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">5.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('combining-smart-devices')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Choose the Right Development Partner (Not Just Cheapest)
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">6.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('data-security')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Prioritize User Experience and Structure
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">7.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('patient-engagement')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Demand Performance and Security Planning
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">8.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('cost-effectiveness')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Plan Ongoing Development, Not Just Launch
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">9.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('tech-ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Align App Roadmap With Business Expansion
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">10.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('future-outlook')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Final Takeaway for Business Owners
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">11.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('final-thoughts')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Final Thoughts
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <div id="role-of-custom-web-app">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Start With Business Goals, Not Features
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Before contacting providers of web application development services, define what success looks like for your business. The definition of business growth includes expanding customer base and increasing sales volume and adding new business locations and expanding product offerings. Developers cannot support system expansion because they do not understand system components which results in their building features that fail to support scalability.                                            </p>
                                            <p className="font-medium">
                                                Be specific about:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Expected users in year 1–3
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Revenue model (subscriptions, marketplace, SaaS, etc.)
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Expansion plans (regions, services, partners)
                                                </li>
                                            </ul>
                                            <p>
                                                You should create your web application development services plan based on the specific growth targets which your business wants to achieve. Otherwise, you’ll outgrow the system quickly.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="managed-it-services">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Choose Scalable Technology (Even If MVP Is Small)
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Organizations select minimal viable product (MVP) solutions through basic technical systems which help them reduce their initial expenditure. Organizations need systems that enable them to conduct future rebuilds because this process becomes a common occurrence. Web application development services based on scalable technology platforms allow developers to build applications which start small and grow into larger systems without requiring core system alterations.                                            </p>
                                            <p className="font-medium">
                                                Ask vendors:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Can this architecture handle 10× users?                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Businesses need to add new modules to their systems without facing the requirement for total system reconstruction.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    The database system allows for expansion of its capacity.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    The system has cloud deployment capabilities which enable users to work with it through remote access.
                                                </li>
                                            </ul>
                                            <p>
                                                Businesses who select expandable technology at their initial stage will build permanent service applications instead of creating short-term solutions.                                            </p>
                                        </div>
                                    </div>

                                    <div id="home-care-focus">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Plan Integrations Early (Payments, CRM, ERP, etc.)                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Business web applications require integration with multiple systems which include payment processing and accounting systems and CRM software and logistics tracking systems and analytical tools. The process of integrating web applications becomes more expensive and unstable when developers fail to plan for integration during their initial development of web applications.                                            </p>
                                            <p className="font-medium">
                                                You should identify:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Tools you already use
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Tools you’ll adopt later
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    The systems need to exchange all their data through synchronized operations.
                                                </li>
                                            </ul>
                                            <p>
                                                Enterprise application integration planning at its core allows web applications to expand alongside business systems instead of becoming separate from them.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="disrupted-by-startups">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Design for Growth in Users and Data
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Business owners tend to believe that growth only results from increased user numbers. The amount of data expands at a rapid pace while its complexity becomes more complex. Web application development services should build their database systems and infrastructure components to maintain performance when handling larger amounts of data and user interactions and system operations.                                            </p>
                                            <p className="font-medium">
                                                Ensure your vendor plans:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Database scaling
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Performance optimization
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Load handling   s
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Caching and speed improvements
                                                </li>
                                            </ul>
                                            <p>
                                                Your application needs to operate with equal speed when you have 100 users and 100,000 users because this standard defines professional web application development services.                                            </p>

                                        </div>
                                    </div>

                                    <div id="combining-smart-devices">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Think Multi-Channel From Day One                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Your business will need to develop mobile apps and partner portals and APIs in addition to web applications after you begin with a web app. Organizations need to plan web application development services which should include multi-channel functionality to avoid duplicate work during future stages.                                            </p>
                                            <p className="font-medium">
                                                Ask:                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Can mobile apps reuse this backend?
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Can partners connect via API?
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Can features extend to other platforms?
                                                </li>
                                            </ul>
                                            <p>
                                                Mobile Application Development Solutions need a unified backend strategy because it lets them build on their current foundation instead of creating new ones from scratch.                                            </p>
                                        </div>
                                    </div>

                                    <div id="data-security">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Choose the Right Development Partner (Not Just Cheapest)                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Organizations which develop applications tend to concentrate their efforts on launching features quickly instead of creating platforms which can handle large-scale operations. The method functions well for creating prototypes but it becomes dangerous when businesses want to grow their operations.                                            </p>
                                            <p className="font-medium">
                                                Evaluate providers of web application development services based on:                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Experience with scaling products

                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Architecture quality
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Integration capability
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Long-term support
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Performance expertise
                                                </li>
                                            </ul>
                                            <p>
                                                The right partner treats your product as evolving Software Development Solutions, not a one-time project.                                            </p>

                                        </div>
                                    </div>

                                    <div id="patient-engagement">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Prioritize User Experience and Structure                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The ability to handle increasing business demands requires both customer loyalty and product functionality. The success of technology adoption disappears completely when users encounter poor user experience design. Strong <span className="font-bold"> Web Design and Development Services</span> maintain clear navigation and workflow and interface design through all feature expansions.                                            </p>
                                            <p className="font-medium">
                                                Ensure:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Modular UI structure

                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Consistent design system                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Expandable navigation
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Role-based dashboards
                                                </li>
                                            </ul>
                                            <p>
                                                Web application development services can incorporate additional features through good UX architecture design which protects users from getting lost in complex systems.                                            </p>
                                        </div>
                                    </div>

                                    <div id="cost-effectiveness">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Demand Performance and Security Planning                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Most organizations fail to focus on performance and security until their systems experience failures. People need to wait for their appointments until the last possible moment. Web application development services through professional teams start their work by optimizing speed and building security systems.                                            </p>
                                            <p className="font-medium">
                                                You should expect:                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Fast loading standards
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Secure authentication
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Data protection
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Scalability testing
                                                </li>
                                            </ul>
                                            <p>
                                                The vendor fails to show their web application development services deliver enterprise-level performance which proves their service lacks proper scalability.                                            </p>
                                        </div>
                                    </div>

                                    <div id="tech-ecosystem">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Plan Ongoing Development, Not Just Launch                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Web applications exist as ongoing projects because they never reach their final state. The development of web applications requires businesses to assign budget resources for their continuous maintenance after the initial launch.                                            </p>
                                            <p className="font-medium">
                                                The process will continue with these activities:                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Develop new features
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Optimize system performance
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Update system integration
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Enhance security measures

                                                </li>
                                            </ul>
                                            <p>
                                                A platform needs to function as a product which actively operates. Sustainable services application development needs continuous growth instead of constructing a one-time solution.                                            </p>
                                        </div>
                                    </div>

                                    <div id="future-outlook">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Align App Roadmap With Business Expansion                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Your web application needs to support business expansion because it should not block your growth potential. The development of web applications needs to work with business plans to create technology systems which will support business growth.                                            </p>
                                            <p className="font-medium">
                                                Validate:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Organizations should perform basic service expansion.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    Organizations need to modify their pricing strategies to handle future market developments.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    The business needs to expand its international operations to serve different market regions.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1 h-1 rounded-full bg-[#4B5563]"></span>
                                                    The system needs to allow partners for seamless integration.
                                                </li>
                                            </ul>
                                            <p>
                                                The web application development service planning process becomes incorrect when the platform blocks any of these functions.                                            </p>
                                        </div>
                                    </div>

                                    <div id="final-thoughts">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-2">
                                            Final Takeaway for Business Owners
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                A business ready web application foundation requires more than software development because it needs a digital base which supports growth. Web application development services require businesses to develop strategic plans which include selecting scalable technology and designing integration systems and focusing on user experience and budgeting for future development to prevent costly system replacements while enabling business growth.                                            </p>

                                            <p>
                                                Companies who wish to develop apps should select developers who provide scalable <span className="font-bold">Software Development Solutions</span> and Web Design and Development Services and create architectures which support future <span className="font-bold">Mobile Application Development Solutions</span>. User interfaces in web applications need proper design to make them valuable business resources.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Related Posts Section */}
                                <div className="-mt-8 pt-5 border-t border-gray-100">
                                    <h3 className="text-[24px] font-bold text-[#0A1A2E] mb-10">
                                        What we’ve learned is yours for sharing!
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedPosts.map((post, i) => (
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
                                                        <button className="text-[#0052FF] font-bold text-[12px] uppercase tracking-wider flex items-center gap-1 hover:underline">
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
                                        { title: "3 Undebatable Reasons to Hire ...", img: "/images/img1.png" },
                                        { title: "10 Smartest Tips For Hiring A ...", img: "/images/img2.png" },
                                        { title: "App Development Company Case S...", img: "/images/img3.png" }
                                    ].map((post, i) => (
                                        <div key={i} className="flex gap-3 group cursor-pointer items-start">
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

                            {/* Category (Spelled 'Catagory' as per image) */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Catagory
                                </h4>
                                <div className="flex items-center gap-2 text-[14px] text-[#32B9E9] font-bold cursor-pointer group">
                                    <Image src="/images/img1.png" width={16} height={16} alt="icon" className="rounded-sm" />
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
