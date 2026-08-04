"use client";
import React from 'react';
import Image from 'next/image';

const CoreValues = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-THICCCBOI bg-[#EAF8FD]"

        >
            <div className="text-center mb-16">
                <h2 className="text-[40px] md:text-[48px] font-bold">
                    <span className="text-[#0d2a3a]">Our Core</span>{" "}
                    <span className="text-[#0d2a3a]">Values</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Card 1 */}
                <div className="relative overflow-hidden bg-white rounded-[18px] border border-gray-100 p-8 shadow-sm flex flex-col h-full min-h-[420px]">
                    <div className="relative z-10">
                        <h3 className="text-[24px] font-bold mb-4 leading-tight">
                            <span className="">Innovation</span>
                            <span className="text-[#0d2a3a]"> at the Forefront</span>
                        </h3>
                        <p className="text-gray-600 text-[16px] leading-relaxed">
                            Innovation is one of our main values. Our company is determined to provide only the most innovative and inventive services and products, thus maximizing customer satisfaction.
                        </p>
                    </div>
                    <div className="absolute bottom-6 -left-1 w-[100%] h-[100%] sm:h-[100%] z-0 opacity-30 mix-blend-multiply">
                        <Image
                            src="/images/aboutcard_bgimg3.png"
                            alt="Innovation Illustration"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative overflow-hidden bg-white rounded-[18px] border border-gray-100 p-8 shadow-sm flex flex-col h-full min-h-[420px]">
                    <div className="relative z-10">
                        <h3 className="text-[24px] font-bold mb-4 leading-tight">
                            <span className="text-[#0d2a3a]">Integrity</span>
                            <span className="text-[#0d2a3a]"> and Trust</span>
                        </h3>
                        <p className="text-gray-600 text-[16px] leading-relaxed">
                            Our business is based on the principles of trust and trustworthiness. Ethical business practices complimented by the dedicated goal of providing accurate information strengthen the business relations between us and our clients and stakeholders.
                        </p>
                    </div>
                    <div className="absolute bottom-2 -right-4 w-[50%] h-[50%] z-0 opacity-80 mix-blend-multiply">
                        <Image
                            src="/images/aboutcard_bgimg2.png"
                            alt="Integrity Illustration"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative overflow-hidden bg-white rounded-[18px] border border-gray-100 p-8 shadow-sm flex flex-col h-full min-h-[420px]">
                    <div className="relative z-10">
                        <h3 className="text-[24px] font-bold mb-4 leading-tight">
                            <span className="text-[#0d2a3a]">Collaborative</span>
                            <span className="text-[#0d2a3a]"> Spirit</span>
                        </h3>
                        <p className="text-gray-600 text-[16px] leading-relaxed">
                            So when we work together, we raise the chances of the success of the organization. This way owning knowledge and information we provide an ambiance of cooperation and collaboration among members.
                        </p>
                    </div>
                    <div className="absolute bottom-6 -left-1 w-[100%] h-[100%] sm:h-[100%] z-0 opacity-30 mix-blend-multiply">
                        <Image
                            src="/images/aboutcard_bgimg.png"
                            alt="Collaboration Illustration"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreValues;
