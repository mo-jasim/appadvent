import React from "react";
import img1 from "../assets/image/Rectangle 20.png";
import img2 from "../assets/image/Rectangle 21.png";
import img3 from "../assets/image/Rectangle 22.png";
import img4 from "../assets/image/Rectangle 23.svg";
import img5 from "../assets/image/Polygon 1 (2) - Copy.png";

import "../assets/style/Hero.css";

function Hero() {
  return (
    <div className="  hero-containe w-full min-h-screen  relative">
      {/* <img
        src={img5}
        alt="Industry Background"
        className="absolute inset-0 mx-auto w-[950px] h-[1300px] ml-80 opacity-120"
      />
       */}

      <div className="heroSection pt-36 w-full">
        <div className="text-center">
          <h1 className="font-[THICCCBOI] font-extrabold text-[26px] sm:text-[26px] md:text-[48px] lg:text-[60px] 
            text-gray-900 lg:py-5 sm:py-3">
            Custom Application 2 & Website <br />
            Development Services
          </h1>

          <button className="text-[16px] w-[232px] h-[48px] opacity-100 rounded-[80px] border-[1px] bg-slate-50 mt-6 sm:mt-4 font-thicccboi 
            px-4 sm:px-6 py-2 sm:py-3 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white 
            transition-all duration-300 text-sm sm:text-base font-medium leading-none tracking-normal text-center">
            Get a Free Consultation
          </button>
        </div>

        <div className="curve-bg max-w-8xl mx-auto w-full h-[300px] lg:h-80 responsive-img mt-10 lg:mt-4">
          <div className="flex gap-4 justify-center box">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img3} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
