import React from "react";
import ima1 from "../../assets/image/bgnew.png";

function Servicespage1() {
  return (
    <div
      className="w-full h-[500px] lg:h-[630px]  relative flex flex-col justify-center items-center text-center px-4 py-20 
      bg-black overflow-hidden"
    >
      <img
        src={ima1}
        alt="Background shape"
        className="
          absolute 
          object-cover 
          pointer-events-none 
          select-none 
          -rotate-[14.7deg]
          opacity-70
         w-[500px] h-[580px] -top-[0px] -left-[40px]
     
         md:w-[1200px] md:h-[800px] md:-top-[140px] md:-left-[90px]
          lg:w-[1327px] lg:h-[1357px] lg:-top-[213px] lg:-left-[125px]
        "
      />

     
      <div
        className="  absolute -top-[213px] -left-[125px] w-[1327px] h-[1357px] -rotate-[14.7deg] opacity-60"
        style={{
          background:
            "linear-gradient(205.02deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.75) 80%)",
        }}
      ></div>

      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1
          className="text-2xl  md:text-5xl lg:text-6xl  font-extrabold bg-clip-text text-transparent font-[THICCCBOI]   leading-[100%] tracking-[0%] text-center 
          bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
        >
          Your Growth, Our Services
        </h1>

        <h2 className="mt-8 text-xl sm:text-2xl md:text-4xl  lg:text-5xl font-semibold text-white">
          Website Designing & Development
        </h2>

        <p className="mt-6 text-gray-300  text-sm sm:text-base md:text-[20px]  mx-auto font-[THICCCBOI] font-medium  lg:leading-[130%] tracking-[0%] text-center">
          We design, develop, and scale apps that turn your vision into reality. From MVPs to
          full-fledged products, our services cover every step of your digital journey.
          Our services go beyond coding — we help startups and businesses design, build,
          and grow apps that drive impact and ROI.
        </p>

        <a
          href="#"
          className="mt-8 inline-block text-cyan-400 text-sm sm:text-base font-THICCCBOI  text-[24px] leading-[100%] text-center  decoration-solid font-medium underline"
        >
          Have a project in mind?
        </a>
      </div>
    </div>
  );
}

export default Servicespage1;
