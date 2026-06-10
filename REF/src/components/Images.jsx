import React from 'react';
import image5 from '../assets/image/Group 1.png';
import img1 from "../assets/image/Polygon 2.png"
import img2 from "../assets/image/Polygon 3.png"
function Images() {
  return (
    <div 
       className="w-full lg:h-[617px]  mt-1 md:-mt-[1040px] lg:mt-1  px-4 py-6 sm:py-8 md:py-6 bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${img1}), url(${img2})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "left center, right center",
        backgroundSize: "40% auto, 40% auto",
      }}
    >
      <div className="text-center">
        <h1 className=" font-thicccboi font-bold text-[24px] md:text-[48px] lg:text-[48px] leading-snug sm:leading-tight lg:leading-[60px] text-gray-900 mt-6 lg:mt-9">
          Software Development Process
        </h1>
      </div>

      <div className="max-w-5xl mx-auto mt-6 sm:mt-8 lg:mt-14 px-2">
        <img
          src={image5}
          alt="Software Development Process"
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Images;
