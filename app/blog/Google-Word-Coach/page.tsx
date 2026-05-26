"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, Plus, Minus } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function GoogleWordCoachBlogPage() {
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

    const faqs = [
        {
            question: "What is Google Word Coach?",
            answer: "Google word coach game is a tool or application that helps non-English speakers learn English in an easy and interesting manner. It also helps the English-learning people reinforce their language speaking skills."
        },
        {
            question: "Benefits of Google Word Coach",
            answer: "Google word coach quiz is a free application, designed for all ages and English language proficiency levels. The quiz game gives you instant feedback so that you know how well you did the quiz and what your mistakes were. This helps you improve them. The word coach of Google can complement formal English learning classes and help students speed up their language learning process. It can serve as a great tool for students preparing for examinations and for those looking to polish their English language."
        },
        {
            question: "How To Download Google Word Coach App?",
            answer: "You cannot download this application. You can use it directly on Google search engine or Chrome browser."
        },
        {
            question: "How to Play Google Word Coach?",
            answer: (
                <ul className="space-y-2 list-disc pl-5 mt-2 text-[#4B5563]">
                    <li>Open the Google or Chrome browser on your laptop or smartphone.</li>
                    <li>Search for the words "word coach Google".</li>
                    <li>As the game appears on the search results, click on “Play.”</li>
                    <li>Start playing and enjoy learning!</li>
                </ul>
            )
        },
        {
            question: "Future of Google Word Coach",
            answer: "In the future, Google may upgrade its Googly questions and include other languages. It might offer gifts and prizes to top performers and so on. The future of Google Word Coach holds great promise, as the world has many interesting languages and people who are eager to learn new languages. At present, this amazing game is winning hearts. It wouldn’t be a surprise to see Google word coach game becoming a household name."
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
                                        src="/images/Google-Word-Coach.webp" 
                                        alt="Google Word Coach" 
                                    />
                                </div>

                                {/* Post Title */}
                                <div className="mb-6 mt-4" id="main-title">
                                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        Google Word Coach
                                    </h2>
                                    <p className="text-gray-500 font-bold text-[13px]">February 28, 2025</p>
                                </div>

                                {/* Post Content */}
                                <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                    <p>
                                        Google is one of the most popular search engines. In fact, its name has become synonymous with browsing the internet. People usually say, “Google it!” This outstanding search engine never fails to amaze people. In 2018, it added another feather to its cap by launching the game-changing Google Word Coach.
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
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('main-title')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Google Word Coach
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">2.</span>
                                                        <span
                                                            className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('what-is-google-word-coach')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            What is Google Word Coach?
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">3.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('how-to-get-google-word-coach')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            How to get Google Word Coach Game?
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">4.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('whats-there-for-you')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            What’s there for you in Google’s word coach?
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">5.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('playing-google-word-coach')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Playing Google Word Coach Quiz
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">6.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('advantages-of-using-word-coach')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Advantages of using word coach Google
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">7.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('whats-you-get')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Here’s what you get by using Google word coach game:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">8.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('crux')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Crux:
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-2.5 items-start">
                                                        <span className="text-[#BBA380] w-4 font-normal text-left">9.</span>
                                                        <span
                                                            className="text-[#4B5563] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                                                        >
                                                            Frequently Asked Questions
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <div id="what-is-google-word-coach">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            What is Google Word Coach?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                This is a vocabulary-building game designed for non-English speaking population to help them improve their English. Even the English-speaking population can also benefit from this game, as it enhances their English speaking skills.
                                            </p>
                                            <p>
                                                Google Word Coach game is an interactive platform featuring synonyms, antonyms, word-based quizzes, definitions, and more. The game is engaging and transforms the otherwise arduous process of learning a new language into a fun-based one.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="how-to-get-google-word-coach">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            How to get Google Word Coach Game?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The beautiful thing about this game is that it is integrated within the search engine. Whenever you use Google Translation and its dictionary, this game pops up. It also appears when you simply type the words Word Coach Google on Google search engine.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="whats-there-for-you">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            What’s there for you in Google’s word coach?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                A lot! And the search engine promises to give you a delightful language learning experience. Those who swear by their English can also find Google Word Coach to be a gem, as it helps them expand their vocabulary and learn new phrases and words. You can even test your English through the fantastic Google word coach quiz.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="playing-google-word-coach">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Playing Google Word Coach Quiz
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Google’s word coach quiz features multiple-choice questions. You must choose the right option. As you do well in the quiz, you earn points. In case your answer is wrong, then Google word coach quiz would give you the correct answer and explain to you the reason for your answer to be wrong. So, this isn’t merely a quiz; it’s a wonderful platform for learning.
                                            </p>
                                            <p>
                                                As you go further in the Google word coach game, you advance to higher levels where you encounter more challenging questions. This helps to increase your proficiency in English language and widens your knowledge.
                                            </p>
                                            <p>
                                                Undoubtedly, Google word coach is a great tool to expand your English vocabulary and to reinforce your existing vocabulary.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="advantages-of-using-word-coach">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Advantages of using word coach Google
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Forget learning English the traditional way. Let’s do the Google way! The intriguing Googly questions will not only help you master your English, but also give you a delightful experience in language learning, something you may not have experienced before.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="whats-you-get">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Here’s what you get by using Google word coach game:
                                        </h3>
                                        <div className="space-y-8 text-black text-[16px] leading-[1.7]">
                                            
                                            <div>
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">1.</span>
                                                    You learn new words easily:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>You learn synonyms and antonyms of words.</li>
                                                    <li>You learn how to use a word in different ways.</li>
                                                    <li>You explore the vast treasure of English words, at times, surprising yourselves upon coming across a new word that you thought did not exist!</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">2.</span>
                                                    You can avoid those daunting English classes:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>Traditional English classes can be boring and make English seem difficult to learn.</li>
                                                    <li>The Googly questions make English an interesting language to learn.</li>
                                                    <li>The game’s engaging format keeps you hooked and wanting for more.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">3.</span>
                                                    Easy access anytime, anywhere:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>Google word coach is mobile-friendly game, integrated in the search engine itself. This makes it an easily accessible tool.</li>
                                                    <li>You can use it while traveling, cooking, taking a walk, or doing just anything.</li>
                                                    <li>During your free time, you can answer the Googly questions and learn during leisure.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">4.</span>
                                                    Step-by-step learning:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>Google word coach game gives you the freedom to learn English at your own pace, step by step.</li>
                                                    <li>As you cross various levels in the quiz, the questions become difficult. This challenges you and chisels your language.</li>
                                                    <li>This is a great game for beginners and for people who know English and want to take their language proficiency to the next level.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-[17px] font-bold text-[#0A1A2E] mb-3">
                                                    <span className="text-[#BBA380] font-normal mr-1.5">5.</span>
                                                    You learn English through a combination of question types:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-[#4B5563]">
                                                    <li>You come across definitions, extended meanings of words, different usage of words, and so on.</li>
                                                    <li>You get illustration, hints, and other clues to answer the questions, making the quiz interesting.</li>
                                                    <li>Google word coach quiz is filled with questions in varying formats, making it an engaging English learning platform.</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div id="crux">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            Crux:
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                In spite of a few pitfalls of Google word coach game, this marvelous application is drawing huge attention, especially from people who want to master English language in a easier manner.
                                            </p>
                                            <p>
                                                You may be wondering what the pitfalls are. Well, not that profound, just that Google word coach quiz is, at present, limited to only English language. Another pitfall is that once you close the browser, Google forgets your score card and you must start all over again.
                                            </p>
                                            <p>
                                                But these pitfalls are nothing compared to the tremendous benefits of this game.
                                            </p>
                                        </div>
                                    </div>

                                    {/* FAQ Accordion Section */}
                                    <div id="faq" className="pt-6 border-t border-gray-100">
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
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                            openFaq === i ? 'max-h-[500px] border-t border-gray-150 p-4 bg-white' : 'max-h-0'
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
                                    <h3 className="text-[24px] font-bold text-[#0A1A2E] mb-10">
                                        What we’ve learned is yours for sharing!
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedPosts.filter(post => post.title !== "Google Word Coach").slice(0, 3).map((post, i) => (
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
                                        { title: "3 Undebatable Reasons to Hire ...", img: "/images/web-design-concept-with-drawings-1.webp" },
                                        { title: "10 Smartest Tips For Hiring A ...", img: "/images/Digital-Marketing-Agency.webp" },
                                        { title: "App Development Company Case S...", img: "/images/Software-Development-Performance.webp" }
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
