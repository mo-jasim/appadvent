"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Marty fontaine',
        role: 'CEO, FreshUp Automotive Inc.',
        image: '/Letimg/Freshup-review.png',
        rating: 5,
        quote: "Appadvent Technologies Pvt Ltd’s work has been met with positive acclaim, as they're able to consistently perform ongoing testing and development. The team is highly communicative, and internal stakeholders are particularly impressed with the service provider's receptiveness to feedback and requirements."
    },
    {
        id: 2,
        name: 'Kevin S',
        role: 'President, Streamline Factory Inc.',
        image: '/Letimg/streamline-review.png', // Duplicating for demo, user can change
        rating: 5,
        quote: "Appadvent Technologies Pvt Ltd successfully delivered the app on time, meeting all required standards. The team organized the project well, set clear milestones, and kept the client updated throughout the process. Overall, the team's responsiveness, technical expertise, and commitment stood out."
    },
    {
        id: 3,
        name: 'Sukanta Das',
        role: 'Owner, Wsltk Sales',
        image: '/Letimg/Newness-review.png',
        rating: 5,
        quote: "Very good service. The team was professional, responsive, and easy to work with throughout the project. I'm happy with the final result and would definitely recommend them."
    },
    {
        id: 4,
        name: 'Paul Quinones',
        role: 'Owner, SK2 Nutrition',
        image: '/Letimg/Sk-review.png',
        rating: 4,
        quote: "Thanks to Appadvent Technologies Pvt Ltd's efforts, the client's website concept has launched. The team ensures the client's requirements are fulfilled. Appadvent Technologies Pvt Ltd's flexibility when faced with a problem is impressive. The client is happy with the team's performance."
    },
];

const ClientTestimonial = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
            const cardElement = scrollContainerRef.current.children[0] as HTMLElement;
            const cardWidth = cardElement.clientWidth;
            const gap = 24; // gap-6 is 24px
            scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
            const cardElement = scrollContainerRef.current.children[0] as HTMLElement;
            const cardWidth = cardElement.clientWidth;
            const gap = 24;
            scrollContainerRef.current.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
        }
    };

    return (
        <section className=" font-THICCCBOI w-full overflow-hidden">
            {/* Header with Navigation Buttons */}
            <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px]">
                        Why <span className="text-[#32B9E9]">Companies Love</span> Working with Our Web <br className="hidden sm:block" /> Development Team
                    </h2>
                    <div className="flex gap-4 mt-6 md:mt-0 pb-2">
                        <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#32B9E9] hover:text-white hover:border-[#32B9E9] transition-colors text-black" aria-label="Previous testimonial">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#32B9E9] hover:text-white hover:border-[#32B9E9] transition-colors text-black" aria-label="Next testimonial">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Viewport */}
            <div className="w-full">
                <div
                    ref={scrollContainerRef}
                    className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100%-1280px)/2+2rem))] pr-4 sm:pr-6 lg:pr-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100%-1280px)/2+2rem))] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="w-[85vw] md:w-[650px] lg:w-[800px] xl:w-[960px] max-w-full flex-shrink-0 snap-start rounded-[20px] shadow-xl flex flex-col lg:flex-row border border-gray-100 bg-white"
                        >
                            {/* Left Side - Content */}
                            <div className="w-full lg:w-3/5 p-6 sm:p-10 flex flex-col justify-center bg-white rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none">
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
                                        {/* Clutch Rating */}
                                        <a
                                            href="https://clutch.co/profile/appadvent-technologies"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 flex flex-col gap-1.5 cursor-pointer hover:opacity-80 transition-opacity w-fit"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex gap-[2px]">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <div key={`tp-${testimonial.id}-${i}`} className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                                                            <Star className={`w-8 h-8 sm:w-10 sm:h-10 ${i <= testimonial.rating ? 'text-red-500 fill-red-500' : 'text-gray-300 fill-gray-300'}`} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <span className="text-[18px] sm:text-[20px] font-medium text-[#1C1C1C]">{testimonial.rating}.0</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Person Details */}
                                <div className="mb-6 flex flex-col items-start">
                                    <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-extrabold text-[#111827] mb-1.5">{testimonial.name}</h3>
                                    <p className="text-[#475569] font-bold text-[16px] tracking-wider uppercase font-THICCCBOI">{testimonial.role}</p>
                                </div>

                                {/* Testimonial Text */}
                                <div className="relative mt-2 mb-4">
                                    <p className="text-[#475569] text-[16px] sm:text-[16px] leading-[1.5] lg:leading-[1.6] font-regular w-full font-THICCCBOI">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="w-full lg:w-2/5 relative min-h-[300px] sm:min-h-[350px] bg-gray-100 flex-shrink-0 rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-bl-none overflow-hidden">
                                <Image
                                    src={testimonial.image}
                                    alt={`Testimonial from ${testimonial.name}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonial;