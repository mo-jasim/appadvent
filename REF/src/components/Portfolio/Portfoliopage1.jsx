import React from "react";
import pot1 from "../../assets/image/Frame 76.png";

function Portfoliopage1() {
  return (
    <div className="max-w-7xl mx-auto min-h-[580px] mt-20 md:mt- px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      <div className="space-y-6">
        <h1 className="font-[THICCCBOI] font-bold text-[28px] sm:text-[30px] md:text-[40px] lg:text-[60px] leading-[100%] text-gray-900">
          Our Latest Work
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-[18px]   leading-[140%] text-start">
          We specialize in delivering innovative IT solutions that drive growth 
          and efficiency for businesses of all sizes.
        </p>

        <div className="flex flex-wrap gap-10 mt-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">45+</h2>
            <p className="text-gray-500">Successful Projects</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">4+</h2>
            <p className="text-gray-500">Years of Experience</p>
          </div>
        </div>

        <a href="#" className="text-blue-700 font-medium inline-block mt-4">
          Have a project in mind?
        </a>
      </div>

      <div className="flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={pot1}
          alt="Portfolio"
          className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[443px] 
                     h-[220px] sm:h-[260px] md:h-[300px] lg:h-[357px] 
                     rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default Portfoliopage1;
