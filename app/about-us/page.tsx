"use client";

import Carts from './carts';
import Specialists from './Specialists';
import ClientTestimonial from './ClientTestimonial';
import Aboutfoot from './aboutfoot';
import OurProjectsSection from '../services/website-designing-development/Our-Projects-Section';
import { useState, useEffect } from 'react';
import ConsultationModal from '@/components/ConsultationModal';

function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stats = [
    { value: '4+', label: 'Years of experience' },
    { value: '20+', label: 'Team member' },
    { value: '25+', label: 'Product Delivered' },
    { value: '4+', label: 'Rating on Clutch' }
  ];
  const title = "About Us: The Minds Behind AppAdvent"
  const heading = "We Build Digital Products That Actually Work";
  const description = " Appadvent is dedicated to providing a wide array of digital marketing services tailored to meet the diverse needs of modern businesses. Whether you need a comprehensive digital marketing strategy from scratch or support to augment your existing marketing efforts, Appadvent has the expertise to help you succeed.";
  const question = "Have a project in mind?"
  return (
    <div className='overflow-hidden' style={{
      backgroundImage: "url('/images/polygon.png')",
    }}>
      <div className="font-THICCCBOI">
        <div className="flex flex-col items-center">
          <div className="bg-[url('/images/bgimg.png')] bg-cover bg-center w-full min-h-96 sm:min-h-[500px] lg:min-h-[600px] py-8 sm:py-12 lg:py-16 text-center flex flex-col justify-center items-center px-4">
            <h1 className='text-[50px] sm:text-[55px] lg:text-[60px] font-bold mb-6 gradient-text font-THICCCBOI leading-tight'>{title}</h1>
            <h1 className='text-white text-[35px] sm:text-[40px] lg:text-[48px] font-bold mb-6 px-2 font-THICCCBOI'>{heading}</h1>
            <h5 className='max-w-6xl mb-8 text-center text-white text-[20px] sm:text-base lg:text-lg font-medium px-2 sm:px-4 font-THICCCBOI leading-relaxed'>
              {description}
            </h5>
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#32B9E9] text-semibold text-[20px]
        px-5 py-2 sm:px-6 sm:py-2.5 cursor-pointer underline font-THICCCBOI"
              >
                Have a project in mind?
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="
      grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4
      gap-4 sm:gap-6
      max-w-7xl mx-auto mt-12 md:mt-16 mb-[120px]
    ">
          {[
            ["4+", "Years of experience"],
            ["20+", "Team members"],
            ["25+", "Product Delivered"],
            ["4+", "Rating on Clutch"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="
            flex flex-col items-center justify-center
             shadow-md hover:bg-white rounded-[16px] h-auto min-h-[140px] w-full max-w-[305px] mx-auto
            py-4 sm:py-6 hover:text-[#32B9E9]
          "
            >
              <p className="font-bold text-[28px] sm:text-[32px]">{value}</p>
              <p className="text-[14px] sm:text-[16px] text-gray-700 text-center">{label}</p>
            </div>
          ))}
        </div>

        <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-center px-4 mt-10 font-THICCCBOI mt-[80px]">Welcome the journey of Digital Transformation.</h1>

        <Carts />

        <Specialists />

        <Aboutfoot />

        <OurProjectsSection />

        <ClientTestimonial />
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