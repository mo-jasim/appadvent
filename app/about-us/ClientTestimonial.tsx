"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, Star, Play } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Marty fontaine',
        role: 'CEO',
        image: '/images/mobimg.png',
        quote: "Sam exceeded my expectations in website support. I came in without a clear direction. After hearing about my endgoal, he was able to give me examples that allowed me to make better choices and shape the direction of my website, and company, going forward."
    },
    {
        id: 2,
        name: 'David Miller',
        role: 'CEO',
        image: '/images/mobimg.png', // Duplicating for demo, user can change
        quote: "Sam exceeded my expectations in website support. I came in without a clear direction. After hearing about my endgoal, he was able to give me examples that allowed me to make better choices and shape the direction of my website, and company, going forward."
    },
    {
        id: 3,
        name: 'Sarah Jenkins',
        role: 'Marketing Head',
        image: '/images/mobimg.png',
        quote: "Sam exceeded my expectations in website support. I came in without a clear direction. After hearing about my endgoal, he was able to give me examples that allowed me to make better choices and shape the direction of my website, and company, going forward."
    },
];

const ClientTestimonial = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollInterval: NodeJS.Timeout;

        const startAutoScroll = () => {
            // Clear any existing interval just in case
            clearInterval(scrollInterval);
            scrollInterval = setInterval(() => {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
                // If we're at the end (or close to it), scroll back to start
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll to the next slide
                    scrollContainer.scrollBy({ left: clientWidth, behavior: 'smooth' });
                }
            }, 3000); // Scroll every 3 seconds
        };

        startAutoScroll();

        // Pause on hover
        const handleMouseEnter = () => clearInterval(scrollInterval);
        const handleMouseLeave = () => startAutoScroll();

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearInterval(scrollInterval);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px] font-THICCCBOI overflow-hidden">

            <h2 className="font-bold mb-10 pl-0 sm:pl-10 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px]">
                Why <span className="text-[#32B9E9]">Companies Love</span> Working with Our Web <br className="hidden sm:block" /> Development Team
            </h2>
            <div
                ref={scrollContainerRef}
                className="flex flex-col gap-8 lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:gap-6 lg:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="w-full lg:flex-shrink-0 lg:w-[90%] max-w-[75rem] lg:snap-center mx-auto rounded-[20px] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
                    >

                        {/* Left Side - Content */}
                        <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">

                            {/* Header Row: Quotes & Stars */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="relative w-[36px] h-[29px] sm:w-10 sm:h-10">
                                    <Image
                                        src="/images/”.svg"
                                        alt="quote mark"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-6 h-6 sm:w-7 sm:h-7 text-[#F98A00] fill-[#F98A00]" />
                                    ))}
                                </div>
                            </div>

                            {/* Person Details */}
                            <div className="mb-6 flex flex-col items-start">
                                <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-extrabold text-[#111827] mb-1.5">{testimonial.name}</h3>
                                <p className="text-[#475569] font-bold text-[16px] tracking-wider uppercase font-THICCCBOI">{testimonial.role}</p>
                            </div>

                            {/* Testimonial Text */}
                            <div className="relative mt-2">
                                <p className="text-[#475569] text-[16px] sm:text-[16px] leading-[1.5] lg:leading-[1.6] font-regular max-w-[150%] font-THICCCBOI">
                                    {testimonial.quote}
                                </p>
                            </div>

                        </div>

                        {/* Right Side - Image */}
                        <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-gray-100 flex-shrink-0">
                            <Image
                                src={testimonial.image}
                                alt={`Testimonial from ${testimonial.name}`}
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-full p-4 sm:p-6 lg:p-7 shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center group z-10">
                                    <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black fill-black ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientTestimonial;