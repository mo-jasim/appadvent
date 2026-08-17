"use client";

import React, { use } from 'react';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Marty fontaine',
        role: 'CEO, FreshUp Automotive Inc.',
        image: '/Letimg/Freshup-review.png',
        rating: 5,
        reviewPlatform: 'clutch',
        reviewUrl: 'https://clutch.co/profile/appadvent-technologies#reviews',
        quote: "Appadvent Technologies Pvt Ltd’s work has been met with positive acclaim, as they're able to consistently perform ongoing testing and development. The team is highly communicative, and internal stakeholders are particularly impressed with the service provider's receptiveness to feedback and requirements."
    },
    {
        id: 2,
        name: 'Kevin S',
        role: 'President, Streamline Factory Inc.',
        image: '/Letimg/streamline-review.png',
        rating: 5,
        reviewPlatform: 'clutch',
        reviewUrl: 'https://clutch.co/profile/appadvent-technologies#reviews',
        quote: "Appadvent Technologies Pvt Ltd successfully delivered the app on time, meeting all required standards. The team organized the project well, set clear milestones, and kept the client updated throughout the process. Overall, the team's responsiveness, technical expertise, and commitment stood out."
    },
    {
        id: 3,
        name: 'Sukanta Das',
        role: 'Owner, Wsltk Sales',
        image: '/Letimg/Newness-review.png',
        rating: 5,
        reviewPlatform: 'trustpilot',
        reviewUrl: 'https://www.trustpilot.com/review/appadvent.com',
        quote: "Very good service. The team was professional, responsive, and easy to work with throughout the project. I'm happy with the final result and would definitely recommend them."
    },
    {
        id: 4,
        name: 'Paul Quinones',
        role: 'Owner, SK2 Nutrition',
        image: '/Letimg/Sk-review.png',
        rating: 4,
        reviewPlatform: 'clutch',
        reviewUrl: 'https://clutch.co/profile/appadvent-technologies#reviews',
        quote: "Thanks to Appadvent Technologies Pvt Ltd's efforts, the client's website concept has launched. The team ensures the client's requirements are fulfilled. Appadvent Technologies Pvt Ltd's flexibility when faced with a problem is impressive. The client is happy with the team's performance."
    },
];

const ClientTestimonial = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    return (
        <section className="font-THICCCBOI w-full overflow-hidden bg-white w-full">
            {/* Header */}
            <div className="mb-10 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100%-1280px)/2+2rem))] pr-4 sm:pr-6 lg:pr-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#061C3D]">
                    Words from Our Clients
                </h2>

                {/* Trustpilot & Clutch Redirect Badges */}
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    {/* Trustpilot */}
                    <a
                        href="https://www.trustpilot.com/review/appadvent.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#F4F4F5] hover:bg-[#E4E4E7] border border-gray-200 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
                    >
                        <span className="text-xs font-semibold text-gray-700">Review us on</span>
                        <div className="flex items-center gap-1">
                            <span className="text-[#00B67A] text-base font-bold">★</span>
                            <span className="font-bold text-sm text-[#191919] group-hover:text-[#00B67A] transition-colors">Trustpilot</span>
                        </div>
                    </a>

                    {/* Clutch */}
                    <a
                        href="https://clutch.co/profile/appadvent-technologies#reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
                    >
                        <span className="font-extrabold text-base tracking-tight text-[#0B2545] group-hover:text-[#184672] transition-colors">Clutch</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D] inline-block -ml-1 animate-pulse"></span>
                    </a>
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
                            className="w-[85vw] sm:w-[480px] md:w-[540px] lg:w-[580px] max-w-full flex-shrink-0 snap-start rounded-[24px] bg-white border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between"
                        >
                            <div>
                                {/* Top Bar: Company Logo Badge + Star Rating */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-16 sm:h-20 w-48 sm:w-56 relative flex items-center justify-start overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={`Logo for ${testimonial.name}`}
                                            fill
                                            className="object-contain object-left mix-blend-multiply scale-125 origin-left"
                                            priority
                                        />
                                    </div>
                                    <div className="flex gap-1 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-100/80">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star
                                                key={`star-${testimonial.id}-${i}`}
                                                className={`w-4 h-4 ${i <= testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Quote Text */}
                                <div className="relative mb-6">
                                    <p className="text-[#334155] text-[15px] sm:text-[16px] leading-relaxed font-normal italic">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Author Section */}
                            <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#061C3D]">{testimonial.name}</h3>
                                    <p className="text-[#32B9E9] font-semibold text-[12px] tracking-wider uppercase mt-0.5">{testimonial.role}</p>
                                </div>
                                <a
                                    href={testimonial.reviewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-200 shrink-0 text-xs font-semibold group/review cursor-pointer"
                                    title={`View ${testimonial.name}'s verified review on ${testimonial.reviewPlatform}`}
                                >
                                    {testimonial.reviewPlatform === 'clutch' ? (
                                        <>
                                            <span className="text-[#0B2545] font-extrabold text-[12px]">Clutch</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D]"></span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-[#00B67A] font-bold text-[12px]">★ Trustpilot</span>
                                        </>
                                    )}
                                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover/review:text-gray-700 transition-colors ml-0.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonial;

