"use client";

import Carts from './carts';
import Specialists from './Specialists';
import ClientTestimonial from './ClientTestimonial';
import Aboutfoot from './aboutfoot';
import CoreValues from './CoreValues';
import OurProjectsSection from '../services/website-designing-development/Our-Projects-Section';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from '@/components/ConsultationModal';
import CompaniesLove from '../services/website-designing-development/Companies-Love';
import Together from './together';
import Image from 'next/image';

function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const title = "Get to know us better"
  const description = "Appadvent is dedicated to providing a wide array of digital marketing services tailored to meet the diverse needs of modern businesses. Whether you need a comprehensive digital marketing strategy from scratch or support to augment your existing marketing efforts, Appadvent has the expertise to help you succeed.";
  const question = "Have a project in mind?"
  return (
    <div className='overflow-hidden' >
      <div className="font-THICCCBOI">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
        >
          <div className="relative bg-[url('/images/about_bg_img.jpg')] bg-cover bg-center w-full min-h-96 sm:min-h-[500px] lg:min-h-[600px] py-16 sm:py-16 lg:py-16 text-center flex flex-col justify-center items-center px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-purple-900/80 to-pink-900/80 z-0 pointer-events-none"></div>
            <h1 className='relative z-10 text-[50px] sm:text-[55px] lg:text-[60px] font-bold mb-[20px] gradient-text font-THICCCBOI leading-tight'>{title}</h1>
            <h5 className='relative z-10 max-w-6xl mb-8 text-center text-white text-[20px] sm:text-base lg:text-lg font-medium px-2 sm:px-4 font-THICCCBOI leading-relaxed'>
              {description}
            </h5>
            <div className="relative z-10 flex items-center justify-center mt-6">
              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#32B9E9] text-semibold text-[20px]
        px-5 py-2 sm:px-6 sm:py-2.5 cursor-pointer underline font-THICCCBOI"
              >
                Have a project in mind?
              </button> */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="
                              flex items-center gap-2.5 bg-[#E8354B] text-white
                              px-4 py-2.5 sm:px-6 sm:py-3
                              rounded-full text-sm sm:text-base font-medium cursor-pointer
                              hover:bg-[#c92c40] transition-colors duration-300
                            "

              >
                Book a free consultant
                <Image src="/images/arrowicon2.svg" alt="icon" width={27} height={27} />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-center px-4 font-THICCCBOI mt-[80px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
        >Welcome the journey of Digital Transformation.</motion.h1>

        <Carts />

        <CoreValues />

        <Specialists />

        <Aboutfoot />

        <Together />

        {/* <OurProjectsSection /> */}

        {/* <CompaniesLove /> */}
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

export default page;