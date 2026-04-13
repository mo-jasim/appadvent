import React from 'react';
import Image from 'next/image';

const HowWeDrive = () => {
    return (
        <section className="font-THICCCBOI py-20 bg-gradient-to-br from-white via-indigo-50/30 to-blue-100/40 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-100/50 to-transparent -z-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/50 to-transparent -z-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h2 className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-[#111827] leading-tight max-w-lg">
                            How We Drive <span className="text-[#32B9E9]">Growth</span> for Your Business?
                        </h2>

                        <div className="flex flex-col gap-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
                            <p>
                                At Appadvent, growth happens when real customer challenges are
                                understood and solved with the right digital strategy. Our approach
                                blends <span className="text-[#ef4444] font-medium">AI insights, Performance tracking,</span>, and <span className="text-[#ef4444] font-medium">Proven digital frameworks</span> to help businesses overcome visibility issues, low
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
                                unqualified or low intent leads. These problems waste time and
                                money.
                            </p>

                            <p>
                                Our <span className="text-[#ef4444] font-medium">Digital marketing solutions</span> create a clear, results-focused
                                strategy that aligns all channels to grow your business with
                                confidence.
                            </p>
                        </div>
                    </div>

                    {/* Right Illustration Area */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                        {/* We will use a placeholder or image if available. Since it's a complex illustration, putting the best fitting image from public/images if there is one, or a placeholder if none strictly matches illustration style. From the list, "Illustration.png" seems most likely. */}
                        <div className="relative w-full max-wlg aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
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
