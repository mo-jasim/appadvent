"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, Star, Play } from 'lucide-react';
import image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'Marty fontaine',
        role: 'CEO, FreshUp Automotive Inc.',
        image: '/images/mobimg.png',
        rating: 5,
        quote: "Appadvent Technologies Pvt Ltd’s work has been met with positive acclaim, as they're able to consistently perform ongoing testing and development. The team is highly communicative, and internal stakeholders are particularly impressed with the service provider's receptiveness to feedback and requirements."
    },
    {
        id: 2,
        name: 'Kevin S',
        role: 'President, Streamline Factory Inc.',
        image: '/images/mobimg.png', // Duplicating for demo, user can change
        rating: 5,
        quote: "Appadvent Technologies Pvt Ltd successfully delivered the app on time, meeting all required standards. The team organized the project well, set clear milestones, and kept the client updated throughout the process. Overall, the team's responsiveness, technical expertise, and commitment stood out."
    },
    {
        id: 3,
        name: 'Fatema Abdullah',
        role: 'Owner, Wsltk Sales',
        image: '/images/mobimg.png',
        rating: 5,
        quote: "Thanks to Appadvent Technologies Pvt Ltd, the client achieved a 20% rise in revenue, a 15% jump in average order value, and a 25% increase in active users. They also achieved a 40% user retention rate and a 30% increase in sessions per user. Overall, the team delivered truly impressive results."
    },
    {
        id: 4,
        name: 'Paul Quinones',
        role: 'Owner, SK2 Nutrition',
        image: '/images/mobimg.png',
        rating: 4,
        quote: "Thanks to Appadvent Technologies Pvt Ltd's efforts, the client's website concept has launched. The team ensures the client's requirements are fulfilled. Appadvent Technologies Pvt Ltd's flexibility when faced with a problem is impressive. The client is happy with the team's performance."
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

        <div className="max-w-9xl mb-[80px] font-THICCCBOI overflow-hidden">

            <h2 className="font-bold mb-10 pl-0 sm:pl-10 px-4 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px]">
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