"use client";

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
    {
        question: "What services does Appadvent provide?",
        answer: "Appadvent offers website development, mobile app development, UI/UX design, branding, digital solutions, and custom software development tailored to business needs."
    },
    {
        question: "How long does it take to complete a project?",
        answer: "Project timelines depend on the complexity and features required. A basic website may take a few weeks, while custom platforms or applications can take several months."
    },
    {
        question: "Do you provide support after project launch?",
        answer: "Yes. Appadvent provides ongoing maintenance, updates, bug fixes, and technical support to ensure smooth long-term performance."
    },
    {
        question: "Can Appadvent redesign an existing website or application?",
        answer: "Absolutely. Existing websites and apps can be redesigned to improve user experience, modernize visuals, increase speed, and enhance functionality."
    },
    {
        question: "Is the website or application mobile-friendly?",
        answer: "Yes. All products are designed to be fully responsive and optimized for desktops, tablets, and mobile devices."
    },
    {
        question: "How can I start a project with Appadvent?",
        answer: "You can start by contacting the team through the website’s contact form or consultation section to discuss your requirements, goals, and project scope."
    }
];

const QAndA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-[80px] mb-[80px] relative overflow-hidden w-full">

            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Column */}
                    <div className="w-full lg:w-[40%] flex flex-col items-start pt-2 lg:pt-8">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] bg-white mb-10 text-[15px] font-medium text-gray-800">
                            FAQ's
                        </div>

                        {/* Heading */}
                        <h2 className='text-[56px] font-bold text-gray-900'>
                            Frequently asked questions
                        </h2>

                        {/* Description */}
                        <p className="text-[#64748b] text-base md:text-[18px] leading-relaxed max-w-md">
                            There are queries related to Ranking By SEO India and its
                            services that might come to your mind. As stringent
                            professionals, we are always happy to answer your questions
                            and help clear your doubts in person.
                        </p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="w-full lg:w-[60%]">
                        <div className="rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.08)]">
                            <div className="flex flex-col">
                                {faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <div
                                            key={index}
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'my-2 rounded-xl' : 'border-b border-gray-100 last:border-b-0 py-1'
                                                }`}
                                        >
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className={`group w-full flex items-center justify-between text-left transition-colors duration-200 ${isOpen
                                                    ? 'bg-[#31AEE7] text-white py-5 px-6 rounded-t-xl'
                                                    : 'text-[#1e293b] py-4 px-2 hover:text-[#31AEE7]'
                                                    }`}
                                            >
                                                <span className={`font-semibold text-base md:text-[18px] pr-8 ${isOpen ? 'font-medium' : 'font-semibold'}`}>
                                                    {faq.question}
                                                </span>
                                                {isOpen ? (
                                                    <X className="w-5 h-5 flex-shrink-0 text-white font-light" strokeWidth={1.5} />
                                                ) : (
                                                    <Plus className="w-5 h-5 flex-shrink-0 text-[#cbd5e1] group-hover:text-[#31AEE7]" strokeWidth={1.5} />
                                                )}
                                            </button>

                                            {/* Accordion Body */}
                                            <div
                                                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="p-4 sm:p-6 text-[#64748b] text-sm md:text-base leading-[1.8] rounded-b-xl border-t-0">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QAndA;
