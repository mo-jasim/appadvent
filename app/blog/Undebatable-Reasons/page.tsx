"use client";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Plus, Minus } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function UndebatableReasonsBlogPage() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        // eslint-disable-next-line react-hooks/immutability
        window.location.href = slug;
    };

    const faqs = [
        {
            question: "What services do I get from Appadvent?",
            answer: "Appadvent offers website design development, mobile app development, staff augmentation, digital marketing, support and maintenance, and custom-based services."
        },
        {
            question: "Why do I need an app for my business? Isn’t a website enough?",
            answer: "Website showcases your brand; an app helps you connect directly to your customers and gives them an efficient way to fulfill their product or service needs."
        },
        {
            question: "My business is already well established; do I still need a website or app?",
            answer: "For a business to stay ahead of the competition, it needs to constantly upgrade itself. Websites and apps are today’s needs and trends. If you don’t have an app, your competitor will, and may sooner or later overshadow you. It’s a cut-throat competitive world out there, remember."
        },
        {
            question: "What is a recommended eCommerce website development company in India?",
            answer: "Appadvent is a highly recommended e-commerce website development company in India. Renowned for crafting exceptional web and mobile experiences, Appadvent designs secure, fast, visually striking, and conversion-optimized online stores customized precisely for your business needs."
        },
        {
            question: "Is website design development costly?",
            answer: "No. Website agency like Appadvent provides a package of web solutions at competitive rates. You can contact them today for a quote."
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
                                    <img
                                        className="bg-[#060d26] rounded-[2rem] w-full object-cover"
                                        src="/images/web-design-concept-with-drawings-1.webp"
                                        alt="3 Undebatable Reasons to Hire a Website Agency for Your Business"
                                    />
                                </div>

                                {/* Post Title */}
                                <motion.div className="mb-6 mt-4" id="main-title" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                    <h1 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        3 Undebatable Reasons to Hire a Website Agency for Your Business
                                    </h1>
                                    <p className="text-gray-500 font-bold text-[13px]">April 13, 2024</p>
                                </motion.div>

                                {/* Post Content */}
                                <motion.div className="space-y-5 text-black text-[16px] leading-[1.7]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                    <p>
                                        We may feel it or not, but our lives are getting deeply impacted by the rapid advancement in technology. In fact, the world is not the same post-Covid 19 pandemic, which propelled almost the entire world to go online. Today, IT professionals are constantly learning, un-learning, and re-learning techniques for modern software development.
                                    </p>
                                    <p>
                                        The latest technologies playing a substantial role in transforming software development include artificial intelligence (AI), cyber security, internet of things, blockchain, quantum computing, 5G, and more. These are only a few examples and as you read this, technologies continue to advance across the world.
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
                                                            3 Undebatable Reasons to Hire a Website Agency for Your Business
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">1.1.</span>
                                                        <span
                                                            className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('rise-of-automation')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            The rise of automation in software development
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('seo-tactics')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Are you aware of the SEO tactics to increase your search engine rankings?
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('reasons-to-contact')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Here are 3 undebatable reasons to contact a professional web design company:
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.1.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('custom-web')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Custom web development makes a great first impression
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('professional-web')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Professional website design development is search-engine-optimized
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">3.3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('brand-value')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            A professional web design company can enhance your brand value, save you time and money
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-6 font-normal text-left flex-shrink-0">4.</span>
                                                        <span
                                                            className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Frequently Asked Questions
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">4.1.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            What services do I get from Appadvent?
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">4.2.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Why do I need an app for my business? Isn’t a website enough?
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">4.3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            My business is already well established; do I still need a website or app?
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">4.4.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            What is a recommended eCommerce website development company in India?
                                                        </span>
                                                    </li>
                                                    <li className="pl-6 flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-8 font-normal text-left flex-shrink-0">4.5.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Is website design development costly?
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <motion.div id="rise-of-automation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            The rise of automation in software development
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The very idea of having software is to minimize manual labor and optimize efficiency. Automation can help the developers focus more on high-impact tasks and not worry about the tedious and repetitive tasks that can easily be automated to save time and efforts. It helps organizations reduce their cost of developing the software, testing the software, and deploying the app. No wonder &ldquo;automation&rdquo; is the buzz word in the world of software development.
                                            </p>
                                            <p>
                                                Automation in software development makes use of tools and technologies combined with a certain set of processes to automate certain tasks in a software development cycle. These usually include automating repetitive tasks like code generation, deployment, testing, and others. The ultimate aim is to remove errors and omissions, to enhance efficiency, and to fasten the overall development process of the software.
                                            </p>
                                            <p>
                                                One of the most powerful ways to establish a strong online business presence is to design a website that discusses your brand. However, designing and developing a visually appealing website isn&rsquo;t child&rsquo;s play. It would help if you had expertise and experience. But not every business person may have the skill and knowledge of web development and design.
                                            </p>
                                            <p>
                                                A specialist website design company can assist you in creating a user-friendly and attractive website for your business.
                                            </p>
                                            <p>
                                                Well, some of you may think you can do without a specialist website agency. You can do the designing on your own.
                                            </p>
                                            <p>
                                                That&rsquo;s great, but let us tell you that the digital world is highly competitive and search engine algorithms are highly dynamic.
                                            </p>
                                            <p>
                                                Do you have a strategy for website design development to stand out amongst millions of websites that arrive online every day?
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="seo-tactics" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Are you aware of the SEO tactics to increase your search engine rankings?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Can you spare enough time regularly to maintain your website and keep it updated?
                                            </p>
                                            <p>
                                                If you are a growing business, then you would probably answer &ldquo;no&rdquo; to most of the questions. And if you are a roaring business, you certainly have no time to spare on website activities, right?
                                            </p>
                                            <p>
                                                So, isn&rsquo;t it a good idea to hire a reputable website agency and let the experts do the task while you focus on your business activities?
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div id="reasons-to-contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            Here are 3 undebatable reasons to contact a professional web design company:
                                        </h3>

                                        <div className="space-y-8 mt-6">
                                            <div id="custom-web">
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">1.</span>
                                                    Custom web development makes a great first impression
                                                </h4>
                                                <div className="space-y-4 text-black text-[16px] leading-[1.7] mb-4">
                                                    <p>
                                                        Nowadays, people usually visit a business&rsquo;s website to have an idea of what the brand is all about. If your website is not up to the mark, it can make you lose important leads.
                                                    </p>
                                                    <p>
                                                        On the other hand, a well-designed website can increase your conversion rates. Custom web development plays an important role in helping a business expand its clientele through online presence.
                                                    </p>
                                                    <p>
                                                        So, what exactly does a &ldquo;well-designed website&rdquo; mean?
                                                    </p>
                                                    <p>
                                                        When somebody visits your website, he/she should be greeted with a neat and attractive design that reflects your business. A professional web design company does exactly that.
                                                    </p>
                                                </div>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>The website layout should be clear and easy to navigate.</li>
                                                    <li>Web pages should load fast.</li>
                                                    <li>A website should have the relevant information that visitors are looking for. You can also choose for custom web app development and let your website know about your app.</li>
                                                    <li>It should have a clear CTA (Call-To-Action).</li>
                                                    <li>If it&rsquo;s a commercial website, the payment portal must be safe and secure, hassle-free and efficient.</li>
                                                    <li>Overall web development and design, including the use of colors and theme, should be appealing to the eyes; content should be updated; and all elements should be in place to create a &ldquo;wow&rdquo; factor for a visitor.</li>
                                                </ul>
                                            </div>

                                            <div id="professional-web" className="pt-4">
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">2.</span>
                                                    Professional website design development is search-engine-optimized
                                                </h4>
                                                <div className="space-y-4 text-black text-[16px] leading-[1.7]">
                                                    <p>
                                                        Search engine optimization (SEO) of a website is a must. It is a crucial aspect of good website design development.
                                                    </p>
                                                    <p>
                                                        Skipping SEO is like painting a beautiful picture, but not letting the world know about it. You simply keep it in a corner of your house instead of exhibiting it in an art gallery.
                                                    </p>
                                                    <p>
                                                        Similarly, when a website is not SEO-rich, it gets &ldquo;lost&rdquo; in an &ldquo;ocean&rdquo; of websites on search engines, making it hard for your relevant audience to find it.
                                                    </p>
                                                    <p>
                                                        A professional web design company knows the importance of SEO and deploys techniques to help your website rank high in search engine results. SEO includes tasks like developing optimized content with the use of the right keywords, developing meta tags and descriptions, proper linking, enhancing the speed of the website, and more.
                                                    </p>
                                                    <p>
                                                        &ldquo;Content is king&rdquo; in terms of SEO. Besides, this aspect of web development and design is time-consuming. So, it is better to leave it to the experts while you continue with your business activities. Content planning, content creation, developing content marketing strategies, updating content regularly, researching for keywords, and other such activities define proper SEO of a website.
                                                    </p>
                                                    <p>
                                                        A search engine-optimized website designed by a premium website agency can improve your online visibility by leaps and bounds. It can help you generate more leads, ultimately, leading to more sales.
                                                    </p>
                                                </div>
                                            </div>

                                            <div id="brand-value" className="pt-4">
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">3.</span>
                                                    A professional web design company can enhance your brand value, save you time and money
                                                </h4>
                                                <div className="space-y-4 text-black text-[16px] leading-[1.7]">
                                                    <p>
                                                        Time is money, and web design professionals can save you both! Remember, the website is the face of your business. So, when a visitor arrives at your website, he or she is actually looking at your business and conjuring up an impression about it. So, make sure you send the right message through proper custom web development. That&rsquo;s where professionalism sneaks in and does its role.
                                                    </p>
                                                    <p>
                                                        Names like Appadvent are renowned in the world of web design development. Whether you are looking to strengthen your online presence or make your debut in the digital world, the Appadvent team is here to help you.
                                                    </p>
                                                    <p>
                                                        Being a top-notch e-commerce website development company in India, Appadvent is known for crafting exceptional web and mobile experiences.
                                                    </p>
                                                    <p>
                                                        Get in touch with the team today and start your online journey.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* FAQ Accordion Section */}
                                    <div id="faq" className="pt-6 border-t border-gray-100 mt-10">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-6">
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, i) => (
                                                <div
                                                    key={i}
                                                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
                                                >
                                                    <button
                                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/70 text-left transition-colors duration-200"
                                                    >
                                                        <span className="font-bold text-[#0A1A2E] text-[15px] md:text-[16px]">
                                                            {faq.question}
                                                        </span>
                                                        <span className="text-[#32B9E9]">
                                                            {openFaq === i ? (
                                                                <Minus className="w-5 h-5 transition-transform" />
                                                            ) : (
                                                                <Plus className="w-5 h-5 transition-transform" />
                                                            )}
                                                        </span>
                                                    </button>
                                                    <div
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[500px] border-t border-gray-150 p-4 bg-white' : 'max-h-0'
                                                            }`}
                                                    >
                                                        <div className="text-black text-[15px] leading-[1.6]">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Related Posts Section */}
                                <div className="-mt-8 pt-5 border-t border-gray-100">
                                    <h3 className="text-[24px] font-bold text-[#0A1A2E] mb-10" id="sharing-section">
                                        What we&rsquo;ve learned is yours for sharing!
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
                                        { title: "3 Undebatable Reasons to Hire ...", img: "/images/web-design-concept-with-drawings-1.webp", slug: "/blog/Undebatable-Reasons" },
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
