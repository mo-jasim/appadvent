"use client";

import React, { use } from 'react';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
        image: '/Letimg/streamline-review.png',
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

    return (
        <section className="font-THICCCBOI w-full overflow-hidden bg-white w-full">
            {/* Header */}
            <div className="mb-10">
                <h2 className="pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100%-1280px)/2+2rem))] pr-4 sm:pr-6 lg:pr-8 font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#061C3D]">
                    Words from Our Clients
                </h2>
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
                            className="w-[85vw] md:w-[650px] lg:w-[800px] xl:w-[900px] max-w-full flex-shrink-0 snap-start rounded-[24px] shadow-sm flex flex-col lg:flex-row border border-gray-100 bg-white overflow-hidden"
                        >
                            {/* Left Side - Content */}
                            <div className="w-full lg:w-3/5 p-6 sm:p-10 flex flex-col justify-between bg-white">
                                <div>
                                    {/* Header Row: Quote mark & Stars */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="relative w-[36px] h-[29px] sm:w-9 sm:h-9">
                                            <Image
                                                src="/images/”.svg"
                                                alt="quote mark"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star
                                                    key={`star-${testimonial.id}-${i}`}
                                                    className={`w-6 h-6 ${i <= testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Person Details */}
                                    <div className="mb-4 flex flex-col items-start">
                                        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#061C3D] mb-1">{testimonial.name}</h3>
                                        <p className="text-[#64748B] font-semibold text-[13px] tracking-wider uppercase">{testimonial.role}</p>
                                    </div>

                                    {/* Testimonial Text */}
                                    <div className="relative mt-3">
                                        <p className="text-[#475569] text-[15px] sm:text-[16px] leading-[1.6] font-regular">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="w-full lg:w-2/5 relative min-h-[280px] sm:min-h-[340px] bg-gray-100 flex-shrink-0 overflow-hidden">
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

