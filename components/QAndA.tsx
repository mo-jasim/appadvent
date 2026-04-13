"use client";

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
    {
        question: "Vestibulum dictum ex sit amet pulvinar laoreet.",
        answer: "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper."
    },
    {
        question: "What we like to do & what we don't like to do",
        answer: "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper."
    },
    {
        question: "Integer tristique nisi sit amet consequat pharetra.",
        answer: "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper."
    },
    {
        question: "Quisque quis ex eleifend dolor maximus lacinia.",
        answer: "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper."
    },
    {
        question: "Mauris ullamcorper tortor sed purus interdum.",
        answer: "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper."
    },
    {
        question: "Fermentum efficitur est dictum.",
        answer: "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper."
    }
];

const QAndA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // Match the image where the 2nd item is open

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 relative overflow-hidden flex items-center justify-center min-h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center -z-20 opacity-30"
                style={{ backgroundImage: "url('/images/polygon.png')" }}
            ></div>

            {/* Soft background gradient blob */}
            <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#fdf2f8] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                        <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.08)]">
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
                                                    : 'bg-white text-[#1e293b] py-4 px-2 hover:text-[#31AEE7]'
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
                                                <div className="p-4 sm:p-6 bg-[#EEF8FB] text-[#64748b] text-sm md:text-base leading-[1.8] rounded-b-xl border-t-0">
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
