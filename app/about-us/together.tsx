"use client";
import Image from 'next/image';
import { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';

export default function Together() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full flex justify-center items-center py-6 px-4 sm:px-6 lg:px-8 font-THICCCBOI">
            <div className="max-w-7xl w-full bg-gradient-to-r from-blue-50/50 via-white to-purple-50/30 rounded-[18px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between py-5 px-6 md:py-6 md:px-10 relative overflow-visible">

                {/* Left Side: Content */}
                <div className="w-full md:w-3/5 flex flex-col items-start z-10 text-left">
                    <h2 className="text-[#0B132B] text-[20px] md:text-[22px] font-bold mb-1">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-800 text-[12px] md:text-[13px] leading-[1.5] mb-4 max-w-[480px]">
                        Our team includes various like-minded professionals who have a focus on providing the best solutions in different fields. We are glad to discuss with you the specifics of your requirements and serve you with top-notch services. Team up with us, and make your dream project happen!
                    </p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1C82FF] hover:bg-[#0A66C2] text-white text-[12px] md:text-[13px] font-medium py-2.5 px-6 rounded-full transition-all duration-300 hover:cursor-pointer"
                    >
                        Get a Free Consultation
                    </button>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center md:justify-end relative z-20">
                    <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px]">
                        <Image
                            src="/images/about_footerimag.png"
                            alt="Teamwork Illustration"
                            fill
                            className="object-contain scale-[1.3] md:scale-[1.7] lg:scale-[1.9] origin-center md:origin-right md:-translate-y-2 md:translate-x-2"
                            priority
                        />
                    </div>
                </div>

            </div>

            {isModalOpen && (
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
}
