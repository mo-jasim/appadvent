"use client";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function MobileAppBlogPage() {
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
            <main className="min-h-screen bg-[#F8FAFC] font-THICCCBOI text-[#4B5563] px-3 sm:px-5 lg:px-7">
                <div className="max-w-7xl mx-auto py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content Column with Border */}
                        <div className="lg:w-[76%] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-4 md:p-6">
                                {/* Hero Image / Banner */}
                                <div className="flex items-center justify-center">
                                    <img
                                        className="bg-[#060d26] rounded-[2rem] w-full object-cover"
                                        src="/images/Mobile-App-Development-Special-in-2025.webp"
                                        alt="Why is Mobile App Development Special"
                                    />
                                </div>

                                {/* Post Title */}
                                <motion.div className="mb-6 mt-4" id="main-title" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        Why is Mobile App Development Special in 2026 and beyond?
                                    </h2>
                                    <p className="text-gray-500 font-bold text-[13px]">January 12, 2025</p>
                                </motion.div>

                                {/* Post Content */}
                                <motion.div className="space-y-5 text-black text-[16px] leading-[1.7]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                    <p>
                                        It does not matter whether you are a startup, small business, or a big corporate house, mobile applications are a must-have for you. It has become a crucial aspect of doing business in the modern digital age.
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
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors font-bold"
                                                            onClick={() => document.getElementById('how-it-benefits-you')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            How it benefits you?
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('how-it-benefits-users')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            How it benefits your users?
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('what-stats-say')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            What the stats say
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">4.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('multi-channel')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Gives users a multi-channel experience:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">5.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('quick-notifications')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Quick notifications about new launches:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">6.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('boost-sales')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Boost in sales:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">7.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('promote-brand')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Promote your brand better:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">8.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('fingertip-access')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Fingertip access to your brand:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">9.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('direct-marketing')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Apps give you a chance for direct marketing:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">10.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('easy-payment')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Easy payment:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">11.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('impact-industries')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Impact of mobile apps on various industries
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">12.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors "
                                                            onClick={() => document.getElementById('create-successful-app')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            How to create a successful mobile app?
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <motion.div id="how-it-benefits-you" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            How it benefits you?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <ul className="space-y-3.5 ml-4">
                                                <li className="flex items-start gap-3 text-[15px] text-[#4B5563]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0"></span>
                                                    It allows you to enter new markets and reach wider audience.
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px] text-[#4B5563]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0"></span>
                                                    It enhances efficiency of operating your business by streamlining your business operations.
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px] text-[#4B5563]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0"></span>
                                                    It contributes to building your brand (if you are startup or small business) and strengthening your brand (if you are already an established business).
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>

                                    <motion.div id="how-it-benefits-users" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            How it benefits your users?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <ul className="space-y-3.5 ml-4">
                                                <li className="flex items-start gap-3 text-[15px] text-[#4B5563]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0"></span>
                                                    Your users can access your brand products/services, information about your business, and other useful details in a few clicks right on their mobile device.
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px] text-[#4B5563]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0"></span>
                                                    Mobile app breaks barriers of geography and time. Your users can connect with your business anytime, anywhere.
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px] text-[#4B5563]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2.5 flex-shrink-0"></span>
                                                    It enhances customer loyalty and satisfaction.
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>

                                    <motion.div id="what-stats-say" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            What the stats say
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                As per the statistics by a renowned market research company, the total revenue generated by the app market is estimated to grow yearly with a “CAGR 2022 to 2027 of 8.83%” worth USD 673.809 billion by the year 2027.
                                            </p>
                                            <p>
                                                This clearly defines the need for development of mobile applications that run seamlessly on tabs and smartphones, both Android and iOS.
                                            </p>
                                            <p>
                                                Here’s why mobile app development holds a special position in the SEO strategy of 2026 and the years to come.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="multi-channel" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Gives users a multi-channel experience:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                When you develop a mobile application, you give users a personalized experience in browsing your products and services. Users can buy products across several channels and enjoy a smoother and integrated shopping experience.
                                            </p>
                                            <p>
                                                This builds loyalty and brand awareness. You are easily able to fulfill your customers’ requirements through a single platform that can be operated in a hand-held device like smartphone or tablet. Greater convenience and easy accessibility to your brand attracts and retains more customers towards your business.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="quick-notifications" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Quick notifications about new launches:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Launching a new product or service? Organizing an event? How would your audience know this? Through your app! Mobile app can send notifications to your customers and keep them updated about your recent launches or events. This helps you develop good relationship with your customers, increasing your credibility and connect.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="boost-sales" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Boost in sales:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                When you provide a convenient and easy-to-use application that can be operated seamlessly on Android and iOS platforms, you automatically increase the chance of getting more conversions. Apps increase user engagement. An app lets a user access your product/service whenever they want and wherever they are located.
                                            </p>
                                            <p>
                                                Suppose your customer suddenly remembers about a particular service or product and your business deals in it. You have an app that works on all platforms. Your customer can easily place an order for the product then and there without going anywhere else. This is how your customer gets retained better. Your efficiently-working, well-designed app helps them become more loyal towards your brand.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="promote-brand" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Promote your brand better:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Mobile applications give businesses a chance to promote their brand more effectively. You can post important updates like festival sales, coupons and codes, new arrivals, best sellers, and so on. You get to use various app tools for promotion, such as push notifications, in-app marketing, gamification, multimedia, social features, feedback, and others.
                                            </p>
                                            <p>
                                                Features like booking an appointment, virtual tour, chat, direct call, filling forms, and others give users an interactive experience that helps to strengthen the connect between you and your users.
                                            </p>
                                            <p>
                                                What’s more? You can also conduct webinars, video conferencing, video consultations, short trainings, chats and forums, and other such engaging activities on your app.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="fingertip-access" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Fingertip access to your brand:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                By developing a mobile application for your business, you are giving your users access to your brand on their fingertips. What can be better than this? As they browse your app, they get a customized experience while checking for latest updates, fresh arrivals, sales, and more. Keep your app updated with the latest trends in the industry and you can attract visitors like honeybees to the hive.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="direct-marketing" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Apps give you a chance for direct marketing:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                When you enable features like video conferencing and consultation, webinars, chats, forums, feedback, and others, you are actually indulging in direct marketing of your brand.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="easy-payment" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Easy payment:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                With online transactions gaining momentum worldwide, having an app that allows secure and quick payments can give a big boost to your business. Mobiles, today, are not just devices; they are wallets too. So, developing an app that gives your customers a secure transaction platform is a recipe for getting more sales.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="impact-industries" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Impact of mobile apps on various industries
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Mobile apps have revolutionized the way people do business. From local and national to international businesses, apps have eased the way of working. Today, apps are popular in a range of industries, including (but not limited to):
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4B5563]">
                                                <li>Banking and finance</li>
                                                <li>Food and grocery</li>
                                                <li>Entertainment</li>
                                                <li>Retail</li>
                                                <li>Travel and tourism</li>
                                                <li>Gaming industry</li>
                                                <li>Healthcare</li>
                                            </ul>
                                            <p className="font-semibold text-[#0A1A2E] mt-3">
                                                The point is: you have a business, you better have an app!
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="create-successful-app" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            How to create a successful mobile app?
                                        </h3>
                                        <div className="space-y-8 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Here’s a quick glance on how to create a successful mobile application that functions seamlessly over various devices and platforms and gives a great user experience.
                                            </p>
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="text-[17px]  text-gray-600 mb-1.5">
                                                        <li>  <span className="text-[#0A1A2E] font-bold">Know your target audience:</span> Who should use your app? This will help you customize it better.
                                                        </li>
                                                    </h4>
                                                    <h4 className="text-[17px]  text-gray-600 mb-1.5">
                                                        <li>  <span className="text-[#0A1A2E] font-bold">Make your app useful: </span> Why should anybody use your app? Ensure your app solves the users’ problem or fulfills their need (for information, product, service, entertainment, and so on).
                                                        </li>
                                                    </h4>
                                                    <h4 className="text-[17px]  text-gray-600 mb-1.5">
                                                        <li>  <span className="text-[#0A1A2E] font-bold">Determine a revenue model for your app:</span> It could be subscription-based model, downloading fee, premium version purchase, in-app ads, and so on. This renders value to your app. Don’t give everything free.
                                                        </li>
                                                    </h4>
                                                    <h4 className="text-[17px]  text-gray-600 mb-1.5">
                                                        <li>  <span className="text-[#0A1A2E] font-bold">Choosing features intelligently:</span> It feels nice to fill up your app with abundant features, but that’s not always a smart idea. It is better to focus on the core feature, lest you may lose quality. (Tip: You can add more features in the premium version of your app.)
                                                        </li>
                                                    </h4>
                                                    <h4 className="text-[17px]  text-gray-600 mb-1.5">
                                                        <li>  <span className="text-[#0A1A2E] font-bold">Ensure your app is safe, intuitive, and built for high performance:</span> No glitch, no bug – that’s what your app should be. As per a survey of 1000 app users in USA, about 88% of them said they would stop using the app, if they experience a single glitch or bug.
                                                        </li>
                                                    </h4>
                                                </div>
                                            </div>
                                            <p className="font-semibold text-[#0A1A2E] text-[17px] mt-6">
                                                So, ladies and gentlemen, gear up for 2026 and make it a magnificent year for your business by developing a fiery mobile app.
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
                        <aside className="lg:w-[24%] space-y-6">
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
