"use client";
import React, { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import MarketingServices from "./Marketing-Services";
import ProvidingProcess from "./Providing-Process";
import MarketingCompany from "./Marketing-company";
import HowWeDrive from "./How-We-Drive";
import BestFromOthers from "./Best-from-Others";
import CompaniesLove from "../website-designing-development/Companies-Love";




const DigitalMarketing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="font-THICCCBOI w-full overflow-x-hidden">
            <div className='overflow-hidden' style={{
                backgroundImage: "url('/images/polygon.png')",
            }}>
                <section className="relative py-12 sm:py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}>
                    <div className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-6xl mx-auto px-4">
                        <p className='gradient-text text-[32px] sm:text-5xl lg:text-[60px] font-bold text-center pb-3'>Our Digital Marketing Services</p>
                        <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-center leading-tight'>Visibility That Drives Sales</p>
                        <p className='max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-gray-400 leading-relaxed px-2'>
                            We design, develop, and scale apps that turn your vision into reality. From MVPs to full-fledged products, our services cover every step of your digital journey. Our services go beyond coding—we help startups and businesses design, build, and grow apps that drive impact and ROI.
                        </p>
                        <div className="flex justify-center mb-[80px] mt-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-[#32B9E9] text-semibold text-[20px]
        px-5 py-2 sm:px-6 sm:py-2.5 cursor-pointer underline font-THICCCBOI"
                            >
                                Have a project in mind?
                            </button>
                        </div>
                    </div>
                </section>
                <MarketingServices />
                <ProvidingProcess />
                <MarketingCompany />
                <HowWeDrive />
                <BestFromOthers />
                <CompaniesLove />
            </div>
            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default DigitalMarketing;