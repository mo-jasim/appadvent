"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function CompleteGuideBlogPage() {
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
                                    <img
                                        className="bg-[#060d26] rounded-[2rem] w-full object-cover"
                                        src="/images/Complete-Guide-for-Mobile-App-Development.webp"
                                        alt="Complete Guide for Mobile Application Development"
                                    />
                                </div>

                                {/* Post Title */}
                                <div className="mb-6 mt-4" id="main-title">
                                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        Complete Guide for Mobile Application Development for Businesses in 2025
                                    </h2>
                                    <p className="text-gray-500 font-bold text-[13px]">January 5, 2025</p>
                                </div>

                                {/* Post Content */}
                                <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                    <p>
                                        As per a recent industry analysis by several reputable market research companies, the number of smartphone users in the world are 4.88 billion at present. This number is forecasted to reach 7.12 billion by 2024 end. A forecast suggests a continuous global rise in the number of smartphone users between the years 2024 and 2029.
                                    </p>
                                    <p>
                                        So, what are these people doing with their smartphones?
                                    </p>
                                    <p className="font-semibold text-[#0A1A2E]">
                                        They are using apps.
                                    </p>
                                    <p>
                                        A study states that smartphone users spend an average of 4.37 hours daily using mobile applications.
                                    </p>
                                    <p>
                                        These apps can be anything from WhatsApp to social media apps like Facebook, LinkedIn, Instagram, X, and more; from music apps, gaming apps, dating apps, health apps, to a range of shopping apps, and lots more.
                                    </p>
                                    <p>
                                        So, if you have decided to create an app, you made a smart decision.
                                    </p>
                                    <p>
                                        This quick guide for mobile app development is created our team of experts especially for all you aspiring app developers.
                                    </p>
                                    <p>
                                        So, let’s get started…
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
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">1.</span>
                                                        <span
                                                            className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('main-title')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Complete Guide for Mobile Application Development for Businesses in 2025
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('overall-processes')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            App Development Happens in Two Overall Processes:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('traditional-vs-mobile')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Difference Between Mobile App Development And Traditional Software Development
                                                        </span>
                                                    </li>
                                                    {/* Sub-items of 3 */}
                                                    <li className="flex gap-2.5 items-start pl-6">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.1.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors font-bold text-[#0A1A2E]"
                                                            onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Step 1: Conceptualize
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start pl-6">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('step-2')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Step 2: Do Market Research
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start pl-6">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('step-3')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Step 3: Design The App
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start pl-6">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.4.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('developing-app')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Developing The App
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start pl-6">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.5.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('testing-app')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Testing of App
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">4.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('preferred-platforms')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            The Most Preferred Platforms For Mobile Application Development
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">5.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('popular-platforms-include')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Some Of The Most Popular Platforms Include:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">6.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('kinds-of-apps')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Kinds of Mobile Applications
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">7.</span>
                                                        <a
                                                            href="/blog/Healthcare"
                                                            className="text-[#4B5563] hover:text-[#32B9E9] transition-colors"
                                                        >
                                                            How Future Healthcare Technology Is Improving At-Home Care
                                                        </a>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">8.</span>
                                                        <a
                                                            href="/blog/How-to-Plan"
                                                            className="text-[#4B5563] hover:text-[#32B9E9] transition-colors"
                                                        >
                                                            How to Plan Web Application Development Services for Scalable Business Growth
                                                        </a>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">9.</span>
                                                        <a
                                                            href="/blog/How-to-Choose"
                                                            className="text-[#4B5563] hover:text-[#32B9E9] transition-colors"
                                                        >
                                                            How to Choose a Reputable AI Development Services Provider?
                                                        </a>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">10.</span>
                                                        <a
                                                            href="/blog/EMR-Vs-EHR"
                                                            className="text-[#4B5563] hover:text-[#32B9E9] transition-colors"
                                                        >
                                                            EMR Vs EHR Development: What should you choose for your healthcare business?
                                                        </a>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">11.</span>
                                                        <a
                                                            href="/blog/Google-Word-Coach"
                                                            className="text-[#4B5563] hover:text-[#32B9E9] transition-colors"
                                                        >
                                                            Google Word Coach
                                                        </a>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">12.</span>
                                                        <a
                                                            href="/blog/App-Performance"
                                                            className="text-[#4B5563] hover:text-[#32B9E9] transition-colors"
                                                        >
                                                            App Development Company Case Study: Importance of Software Development Performance Metrics
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <div id="overall-processes">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            App Development Happens in Two Overall Processes:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <ul className="space-y-3.5 ml-4">
                                                <li className="flex items-start gap-3 text-[15px] text-black">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0 font-bold"></span>
                                                    Writing code for the software
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px] text-black">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0 font-bold"></span>
                                                    Designing the application
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="traditional-vs-mobile">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Difference Between Mobile App Development And Traditional Software Development
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The major difference is that mobile apps are able to use native features of the smartphone. For instance, a mobile app can leverage features like camera, GPS, microphone, and other in-built functions of the device.
                                            </p>
                                            <p>
                                                You can create apps for a range of platforms; however, Apple and Android apps rule the global market share of mobile applications. Furthermore, you can choose from various app development frameworks. So, ladies and gentlemen, you are going to love the whole process of developing a mobile app!
                                            </p>
                                            <p>
                                                Let’s break the mobile app development process into several small steps.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="step-1">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Step 1: Conceptualize
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Some of you may already have an idea for the app, while others may have to brainstorm ideas.
                                            </p>
                                            <p className="font-semibold text-[#0A1A2E]">
                                                Think:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-black">
                                                <li>What do you want the app to do?</li>
                                                <li>How will it benefit your users?</li>
                                                <li>What is your budget for app development and maintenance?</li>
                                                <li>Will you develop app on your own or hire an app developer?</li>
                                            </ul>
                                            <p>
                                                Answer to these questions will help you decide what kind of app you want.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="step-2">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Step 2: Do Market Research
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Nowadays, it’s rare to have no competition. No matter how novice your idea appears to you, somebody somewhere has already implemented it!
                                            </p>
                                            <p className="font-semibold text-[#0A1A2E]">
                                                Find out:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-black">
                                                <li>Your competition</li>
                                                <li>Your target audience (what are people looking for?)</li>
                                                <li>Your app’s USP</li>
                                                <li>The best platform for your app launch</li>
                                                <li>Marketing strategies for your app</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="step-3">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Step 3: Design The App
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Do some sketch work. Create wireframes. Prioritize user experience. You must develop certain prototypes of your app on the basis of the wireframes before you begin the process of developing a fully-functional application.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="developing-app">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Developing The App
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p className="font-semibold text-[#0A1A2E]">
                                                Here’s what you must do:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-black">
                                                <li>Choose the method of developing app</li>
                                                <li>Create a team, consisting of a project manager</li>
                                                <li>Determine a timeline</li>
                                                <li>Stay flexible and be prepared for alterations and challenges along the process</li>
                                            </ul>
                                            <p>
                                                You might need to develop distinct versions of the application – one for Android and one for iOS. Remember, cross-platform development tools can help you create a single version of your application, which would work on iOS and on Android. So, you can use this too.
                                            </p>
                                            <p>
                                                Process of developing an app is not exactly the same for everybody. Certain applications can be developed in 30 days and may require only one developer, whereas certain applications may take more than six months or 12 months and require multiple developers.
                                            </p>
                                            <p>
                                                The cost and the time of developing an app depends on the type and the degree of complexity of the app. For instance, a basic app is quick and cost-effective to develop, while a complex app with advanced features may take time and more money to build.
                                            </p>
                                            <p>
                                                Such apps may need GPS features, user authentication servers, real-time interaction with users, and other such sophisticated features.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="testing-app">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Testing of App
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                You must test the app before making it live. This helps you catch bugs, errors, or any glitch that needs to be corrected before the end user uses your app. You must test the app on both platforms and on various devices like tablets, smart phones, and so on.
                                            </p>
                                            <p>
                                                The objective of testing an app is to see whether it is functional and works seamlessly without crashing so that users get a pleasant experience of using your app.
                                            </p>
                                            <p>
                                                Remember, no app is 100% perfect. So, instead of trying for perfection, focus on making a functional and user-friendly app. You can create newer versions of your application later once your app becomes a hit in the market.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="preferred-platforms">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            The Most Preferred Platforms For Mobile Application Development
                                        </h3>
                                        <div className="space-y-6 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                You can find an array of platforms for mobile app development. Choose one depending on your budget, type of app, skills, and app development goals. It is smarter to choose a platform that not only lets you develop an app, but also lets you test it, debug it, optimize it, and maintain it post-launch.
                                            </p>

                                            <div>
                                                <h4 className="text-[20px] font-bold text-[#00a9e4] mb-3" id="popular-platforms-include">
                                                    Some Of The Most Popular Platforms Include:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>
                                                        <span className="font-bold text-[#0A1A2E]">Microsoft Xamarin:</span> A great platform to develop cross-platform apps through a single shared code. It lets you develop apps for iOS, Android, and Windows.
                                                    </li>
                                                    <li>
                                                        <span className="font-bold text-[#0A1A2E]">Flutter:</span> Lets you develop cross-platform apps with a single codebase.
                                                    </li>
                                                    <li>
                                                        <span className="font-bold text-[#0A1A2E]">Build Fire:</span> A powerful platform, ideal for developers with no coding knowledge or experience; works for both Android and iOS.
                                                    </li>
                                                    <li>
                                                        <span className="font-bold text-[#0A1A2E]">Adobe PhoneGap:</span> This platform is different from others in the sense that it lets you create an app using HTML5, JavaScript, or CSS3.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="kinds-of-apps">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Kinds of Mobile Applications
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                App development has evolved and is much different from how it was done earlier. Today, you can find advanced tools and platforms that allow you to develop apps from scratch despite having little knowledge about coding.
                                            </p>
                                            <p className="font-semibold text-[#0A1A2E]">
                                                The different types of apps include:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2.5 text-[16px] text-black">
                                                <li>
                                                    Native apps, which can be installed directly on mobiles
                                                </li>
                                                <li>
                                                    Cross-platform native apps, which can be installed on both iOS and Android platforms
                                                </li>
                                                <li>
                                                    Hybrid apps, which are similar to cross-platform ones, but less technical, more user-friendly, and great for people with little coding knowledge
                                                </li>
                                                <li>
                                                    Progressive web application, which are apps delivered through web
                                                </li>
                                            </ul>
                                            <p>
                                                Whatever app you develop, always focus on user experience. This means your app must be functional, easy to use, and interesting.
                                            </p>
                                            <p className="font-bold text-[#0A1A2E] text-[17px] mt-6">
                                                Happy coding!
                                            </p>
                                        </div>
                                    </div>
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
                                        <div key={i} className="flex gap-3 group cursor-pointer items-start" onClick={() => window.location.href = post.slug}>
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

                            {/* Catagory */}
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
