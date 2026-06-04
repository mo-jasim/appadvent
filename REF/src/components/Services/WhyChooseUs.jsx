import React from "react";
import bgimg from "../../assets/image/bgnew.png";

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-[#000000] text-white py-20 px-6 md:px-16 lg:px-16 overflow-hidden"
    >
      <img
        src={bgimg}
        alt="Background pattern"
        className="hidden md:block absolute object-cover pointer-events-none"
        style={{
          //  opacity:"70",
          width: "972.1292831671584px",
          height: "882.5077668109367px",
          top: "10px",
          left: "671px",
          transform: "rotate(-0.54deg)",
          opacity: 7.9,
        }}
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['THICCCBOI'] font-bold leading-tight mb-6">
            Why Should You <span className="text-sky-500">Choose Us?</span>
          </h2>
          <p className="text-gray-300 text-[18px] leading-[160%] font-['THICCCBOI'] text-start">
            At Appadvent, we blend creativity with technology to craft apps that truly deliver value. 
            Our team focuses on innovation, user-friendly design, and scalable solutions tailored to your business goals. 
            With us, you don’t just get an app—you get a partner in growth.
          </p>
        </div>

        <div className="  grid grid-cols-2 overflow-hidden  border-gray-700 relative z-10">
          <div className="flex flex-col  justify-center p-10 border-b border-r border-gray-700">
             <p className="text-white  font-['THICCCBOI'] text-start font-THICCCBOI font-bold text-1xl md:text-2xl lg:text-2xl mb-5 ">We Have</p>
            <h3 className="text-sky-400  text-1xl md:text-2xl lg:text-5xl font-bold mb-5 font-['THICCCBOI']">8M+ Hrs</h3>
            <p className="text-white text-1xl md:text-2xl lg:text-5xl font-['THICCCBOI'] text-start font-THICCCBOI font-bold lg:text-[24px] leading-[130%] tracking-[0%]">
              Nurturing App <br /> Experience
            </p>
          </div>

          <div className="flex flex-col  justify-center p-10 border-b border-gray-700">
             <p className="text-white  font-['THICCCBOI'] text-start font-THICCCBOI font-bold text-1xl md:text-2xl lg:text-2xl mb-5 ">We Have</p>
            <h3 className="text-sky-400  text-1xl md:text-2xl lg:text-5xl font-bold mb-5 font-['THICCCBOI']">2M+ Hrs</h3>
            <p className="text-white text-1xl md:text-2xl lg:text-5xl font-['THICCCBOI'] text-start font-THICCCBOI font-bold lg:text-[24px] leading-[130%] tracking-[0%]">
              Nurturing App <br /> Experience
            </p>
          </div>

          <div className="flex flex-col justify-center p-10  border-r border-gray-700">
             <p className="text-white  font-['THICCCBOI'] text-start font-THICCCBOI font-bold text-1xl md:text-2xl lg:text-2xl mb-5 ">We Have</p>
            <h3 className="text-sky-400  text-1xl md:text-2xl lg:text-5xl font-bold mb-5 font-['THICCCBOI']">2M+ Hrs</h3>
            <p className="text-white text-1xl md:text-2xl lg:text-5xl font-['THICCCBOI'] text-start font-THICCCBOI font-bold lg:text-[24px] leading-[130%] tracking-[0%]">
              Nurturing App <br /> Experience
            </p>
          </div>

          <div className="flex flex-col  justify-center p-10  border-gray-700">
            <p className="text-white  font-['THICCCBOI'] text-start font-THICCCBOI font-bold text-1xl md:text-2xl lg:text-2xl mb-5 ">We Have</p>
            <h3 className="text-sky-400  text-1xl md:text-2xl lg:text-5xl font-bold mb-5 font-['THICCCBOI']">2M+ Hrs</h3>
            <p className="text-white text-1xl md:text-2xl lg:text-5xl font-['THICCCBOI'] text-start font-THICCCBOI font-bold lg:text-[24px] leading-[130%] tracking-[0%]">
              Nurturing App <br /> Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
