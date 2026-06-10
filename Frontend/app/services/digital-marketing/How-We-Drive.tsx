import React from 'react';
import Image from 'next/image';

const HowWeDrive = () => {
    return (
        <section className="font-THICCCBOI py-16 sm:py-20 md:py-24 relative overflow-hidden px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-[#111827] leading-tight">
                            How We Drive <span className="text-[#32B9E9]">Growth</span> for Your Business?
                        </h2>

                        <div className="flex flex-col gap-4 sm:gap-5 text-sm sm:text-base md:text-[16px] text-black leading-relaxed">
                            <p>
                                At Appadvent, growth happens when real customer challenges are
                                understood and solved with the right digital strategy. Our approach
                                blends <span className="text-[#ef4444] font-medium">AI insights, Performance tracking,</span> and{' '}
                                <span className="text-[#ef4444] font-medium">Proven digital frameworks</span> to help businesses overcome visibility issues, low
                                conversions, and rising competition.
                            </p>
                            <p>
                                Many brands struggle to turn website traffic into qualified leads.
                                Companies that use data-driven strategies are 40% more likely to
                                achieve <span className="text-[#ef4444] font-medium">consistent growth</span>. We identify gaps across your digital
                                ecosystem and fix them with targeted solutions delivering measurable
                                results.
                            </p>
                            <p>
                                As a leading performance marketing agency, we know how difficult it
                                is for businesses to achieve <span className="text-[#ef4444] font-medium">real growth</span> in today's fast evolving digital
                                environment. Many brands struggle with no clear digital strategy,
                                inefficient ad spend that results in poor ROAS, limited visibility across
                                search engines and LLM powered platforms, and a steady flow of
                                unqualified or low intent leads.
                            </p>
                            <p>
                                Our <span className="text-[#ef4444] font-medium">Digital marketing solutions</span> create a clear, results-focused
                                strategy that aligns all channels to grow your business with
                                confidence.
                            </p>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-full aspect-square flex items-center justify-center">
                            <Image
                                src="/images/OBJECTS.svg"
                                alt="Marketing Growth Illustration"
                                width={600}
                                height={600}
                                className="object-contain w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowWeDrive;
