"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
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
            <main className="min-h-screen bg-[#F8FAFC] font-THICCCBOI text-[#4B5563]">
                <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content Column with Border */}
                        <div className="lg:w-[75%] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-4 md:p-6">
                                {/* Hero Image / Banner */}
                                <div className="flex items-center justify-center">
                                    <img className="bg-[#060d26] rounded-[2rem] max-w-full h-auto" src="/images/Software-Development-Performance.webp" alt="App Development Company Case Study" />
                                </div>

                                {/* Post Title */}
                                <div className="mb-6 mt-4">
                                    <h2 id="main-title" className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        App Development Company Case Study: Importance of Software Development Performance Metrics
                                    </h2>
                                    <p className="text-gray-500 font-bold text-[13px]">January 18, 2025</p>
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
                                            <ul className="space-y-3 text-[15px] text-[#4B5563] font-medium">
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">1.</span>
                                                    <span
                                                        className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('main-title')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        App Development Company Case Study: Importance of Software Development Performance Metrics
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">2.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('importance-of-metrics')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Importance of software development performance metrics
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">3.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('healthcare-app-by-appadvent')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        App development company case study: Healthcare app by Appadvent
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">4.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('integral-part')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        How the healthcare app became an integral part of patients’ lives: an app case study
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">5.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('development-process')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Healthcare mobile app development case study: the process
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">6.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('impact-study')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        App development company Appadvent case study: Impact
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">7.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('lessons-learned')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Lessons learned from the case study of successful app development by Appadvent
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">8.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('concluding-study')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        Concluding the app development company case study
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 ml-4">
                                                    <span className="text-gray-400">8.1.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors font-semibold"
                                                        onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        FAQs:
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 ml-8">
                                                    <span className="text-gray-400">9.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('faq-1')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        1. What does the app development company case study reflect?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 ml-8">
                                                    <span className="text-gray-400">10.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('faq-2')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        2. Is software development performance metrics so essential?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 ml-8">
                                                    <span className="text-gray-400">11.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('faq-3')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        3. What are the examples of software development performance metrics?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">12.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors font-bold"
                                                        onClick={() => document.getElementById('sharing-section')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        What we’ve learned is yours for sharing!
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">13.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => window.location.href = '/blog/Healthcare'}
                                                    >
                                                        How Future Healthcare Technology Is Improving At-Home Care
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">14.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => window.location.href = '/blog/How-to-Plan'}
                                                    >
                                                        How to Plan Web Application Development Services for Scalable Business Growth
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">15.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => window.location.href = '/blog/How-to-Choose'}
                                                    >
                                                        How to Choose a Reputable AI Development Services Provider?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">16.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => window.location.href = '/blog/EMR-Vs-EHR'}
                                                    >
                                                        EMR Vs EHR Development: What should you choose for your healthcare business?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">17.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => window.location.href = '/blog/Google-Word-Coach'}
                                                    >
                                                        Google Word Coach
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">18.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('main-title')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        App Development Company Case Study: Importance of Software Development Performance Metrics
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    {/* Post Content */}
                                    <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                        <p>
                                            Why do we develop an application? To streamline our business operations, of course! So, isn’t it smart to know the performance of your app?
                                        </p>
                                        <p>
                                            Our <span className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors">mobile app development case study</span> will give you an insight into the why’s and how’s of app development and software development performance metrics.
                                        </p>
                                        <p className="font-medium">
                                            Before that, think about this:
                                        </p>
                                        <p>
                                            You developed an app to make your business operations become more efficient; you must know how your app is performing and how exactly it is helping you improvise your business. Most importantly, you must know whether your user is receiving a great experience and, if not, how you can enhance the user experience.
                                        </p>
                                        <p>
                                            If we look at app development company case study, we would realize how incredibly helpful are applications in today’s times. They benefit the business and the end user. In this context, it becomes all the more important to develop software development performance metrics to measure the performance of the software and its quantifiable characteristics.
                                        </p>
                                    </div>
                                    <div id="importance-of-metrics">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Importance of software development performance metrics
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                To put it in simple words, software metrics lets you know the quality of your app and gives you scope for improvement.
                                            </p>
                                            <p className="font-medium">
                                                Software development performance metrics is important for:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Measuring performance of the software
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Measuring the overall productivity of the business through software
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Planning more features and working on the weak points
                                                </li>
                                            </ul>
                                            <p>
                                                Software development performance metrics help you plan, organize, control, and improve your application for enhancing the performance and for developing a better version of your app.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="healthcare-app-by-appadvent">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            App development company case study: Healthcare app by Appadvent
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Appadvent’s AI-powered healthcare application is a fine example of how an app can benefit the healthcare service provider and the patients. This you will realize as you read the app development company case study. The app offers personalized guidance to users in matters related to health, medicines, and daily lifestyle. It provides an easy platform to schedule consultation with their healthcare provider and keep a track on their follow-ups, medication routine, and health checkups.
                                            </p>
                                            <p>
                                                This mobile app development case study provides an insight into how apps make life easier for the user and offers a winning edge to the product/service provider.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="integral-part">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            How the healthcare app became an integral part of patients’ lives: an app case study
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The success of the app can be reflected from the way it changed patients’ lives, making the daily routine easier and more convenient.
                                            </p>
                                            <p className="font-medium">
                                                Appadvent’s successful app development helps users:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Share their problem through the AI chatbot
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Find the best doctor nearby
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Book a consultation or follow-up visit
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Keep track of their medication routine and refills
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    Maintain bill transparency and much more
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="development-process">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Healthcare mobile app development case study: the process
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Initiating successful app development requires thorough analysis of the needs and the scope, along with sound planning, extensive research, and rigorous testing of the app for authenticating the features and determining accuracy and efficiency.
                                            </p>
                                            <p>
                                                Appadvent’s competent app developing team sat with the qualified healthcare providers and data scientists. The team also worked on software development performance metrics to track the performance of the app.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="impact-study">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            App development company Appadvent case study: Impact
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                After successfully implementing the software development performance metrics, the Appadvent team could refine the features of the app and determine how their app impacted the lives of millions of users and healthcare service providers.
                                            </p>
                                            <p>
                                                The team, through successful software development performance metrics, could identify, track, prioritize, and improve the issues for better productivity and performance.
                                            </p>
                                            <p>
                                                Software metrics is no less than a boon for software developers. It helps the team catch the problems on time and manage them better through appropriate troubleshooting process. The earlier the problems are detected in app development, the more cost-effective it is to find solutions for them.
                                            </p>
                                            <p>
                                                As per this mobile app development case study, we can say that a well-coordinated team force can lead to a successful app development and management.
                                            </p>
                                            <p className="font-medium">
                                                This case study of successful app development by Appadvent shows that:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    The app rendered greater satisfaction among the service providers, as they could get more appointments and streamline their process of offering healthcare.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    They were better able to serve their patients by being available to them more and giving them a convenient, easy-to-use app.
                                                </li>
                                                <li className="flex items-center gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]"></span>
                                                    The app helped the healthcare providers increase the retention rates and this could be determined by the software development performance metrics deployed by the Appadvent team
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="lessons-learned">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Lessons learned from the case study of successful app development by Appadvent
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Looking at the app development company case study, it is not wrong to say that AI-driven app technology has simplified the complicated app development and presentation process.
                                            </p>
                                            <p>
                                                At the same time, user feedback is an indispensable component of software development performance. It can help in enhancing user experience and refining the features and the functionality of the app.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="concluding-study">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Concluding the app development company case study
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The brilliant healthcare app developed by Appadvent has given a ray of hope to patients who were in need for a convenient “assistant” that could connect them with proper healthcare.
                                            </p>
                                            <p>
                                                Appadvent’s healthcare app is a case study of successful app development. That doesn’t mean the team didn’t face challenges. Ultimately, it’s all about proper management and troubleshooting that leads to a success story. This includes an intelligent use of software development performance metrics.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="faqs" className="pt-5 border-t border-gray-100">
                                        <h3 className="text-[22px] font-bold text-[#0A1A2E] mb-6">
                                            FAQs:
                                        </h3>
                                        <div className="space-y-6">
                                            <div id="faq-1" className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                                                <h4 className="text-[16px] font-bold text-[#0A1A2E] mb-2">
                                                    1. What does the app development company case study reflect?
                                                </h4>
                                                <p className="text-black text-[15px] leading-[1.7]">
                                                    Appadvent’s healthcare app has created a deep impact in the lives of people, especially those who need healthcare services regularly. The app development reflects that such technologies can significantly attract users and give them a great experience. This can help to improve lives of users and enhance service capability of the provider.
                                                </p>
                                            </div>

                                            <div id="faq-2" className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                                                <h4 className="text-[16px] font-bold text-[#0A1A2E] mb-2">
                                                    2. Is software development performance metrics so essential?
                                                </h4>
                                                <p className="text-black text-[15px] leading-[1.7]">
                                                    Yes. Software metrics gives a quantifiable premise to the clients. They get a kind of assurance that the app will be monitored, giving scope for improvement and enhancement of quality.
                                                </p>
                                            </div>

                                            <div id="faq-3" className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                                                <h4 className="text-[16px] font-bold text-[#0A1A2E] mb-2">
                                                    3. What are the examples of software development performance metrics?
                                                </h4>
                                                <p className="text-black text-[15px] leading-[1.7]">
                                                    There is no one-size-fits-all metrics. It depends on the goal. For example, as per the case study of successful app development mentioned here, for healthcare app, the metrics can include application crash rate, endpoint incidents, efficiency, function-oriented metrics, and others.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Related Posts Section */}
                                <div id="sharing-section" className="-mt-8 pt-5 border-t border-gray-100">
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
                                                            className="text-[#0052FF] font-bold text-[12px] uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
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
                                        { title: "3 Undebatable Reasons to Hire ...", img: "/images/img1.png", slug: "#" },
                                        { title: "10 Smartest Tips For Hiring A ...", img: "/images/img2.png", slug: "#" },
                                        { title: "App Development Company Case S...", img: "/images/img3.png", slug: "/blog/App-Performance" }
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
