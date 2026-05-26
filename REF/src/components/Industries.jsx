import React from "react";
import { Link } from "react-router-dom";
import img22 from "../assets/image/Rectangle 63.png"; 
import imagebg from "../assets/image/Polygon 1.png"; 
import imgic1 from "../assets/image/Cpu.svg";
import imgic2 from "../assets/image/ShoppingCart.svg";
import imgic3 from "../assets/image/FirstAidKit.svg";
import imgic4 from "../assets/image/Bank.svg";
import arro from "../assets/image/ArrowRight.png";

function Industries() {
  return (
    <div
      className="relative w-full min-h-[664px]  py-10 px-4 lg:px-16 bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage:
          window.innerWidth >= 1024
            ? `url(${img22}), url(${imagebg})` 
            : `url(${imagebg})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition:
          window.innerWidth >= 1024
            ? "left center, center center"
            : "center center",
        backgroundSize:
          window.innerWidth >= 1024
            ? "40% 100%, contain" 
            : "contain",
      }}
    >
     
   <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/70 to-black/100"></div>




      <div className="relative max-w-7xl mx-auto text-white mt-3 sm:mt-16">
        <div className="text-center lg:text-end lg:ml-auto lg:max-w-3xl px-5">
          <h2 className="font-[THICCCBOI] font-bold leading-[60px] text-[24px] md:text-[48px] lg:text-[48px] mb-2 md:text-center lg:text-start">
            Industries We Cater To
          </h2>

          <p className="text-sm md:text-[20px] lg:text-[20px] lg:mt-7 mb-2 text-center lg:text-start lg:ml-4 sm:text-center font-thicccboi leading-[24px] sm:leading-[36px]">
            At Appadvent, we blend innovation with technical expertise to
            provide exceptional web and app development solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-[rgba(234,248,253,1)] h-[220px] lg:w-[305px] rounded-xl p-6 text-black shadow hover:shadow-lg transition">
            <img src={imgic1} alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-xl font-semibold mb-12 font-thicccboi">
              Fintech & Crypto
            </h3>
            <Link
              to="/ecommerce"
              className="relative text-[rgba(50,185,233,1)] inline-flex items-center group transition-all duration-300 w-36 py-1"
            >
              <span className="relative flex items-center font-thicccboi text-[16px]">
                Learn More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                  <img src={arro} alt="" />
                </span>
              </span>
            </Link>
          </div>

          <div className="bg-[rgba(251,253,234,1)] h-[220px] lg:w-[305px] rounded-xl p-6 text-black shadow hover:shadow-lg transition">
            <img src={imgic2} alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-xl font-semibold mb-12 font-thicccboi">
              Retail & E-commerce
            </h3>
            <Link
              to="/ecommerce"
              className="relative text-[rgba(50,185,233,1)] inline-flex items-center group transition-all duration-300 w-36 py-1"
            >
              <span className="relative flex items-center font-thicccboi text-[16px]">
                Learn More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                  <img src={arro} alt="" />
                </span>
              </span>
            </Link>
          </div>

          <div className="bg-[rgba(253,234,234,1)] h-[220px] lg:w-[305px] rounded-xl p-6 text-black shadow hover:shadow-lg transition">
            <img src={imgic3} alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-xl font-semibold mb-12 font-thicccboi">
              Healthcare
            </h3>
            <Link
              to="/ecommerce"
              className="relative text-[rgba(50,185,233,1)] inline-flex items-center group transition-all duration-300 w-36 py-1"
            >
              <span className="relative flex items-center font-thicccboi text-[16px]">
                Learn More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                  <img src={arro} alt="" />
                </span>
              </span>
            </Link>
          </div>

          <div className="bg-[rgba(234,253,250,1)] h-[220px] lg:w-[305px] rounded-xl p-6 text-black shadow hover:shadow-lg transition">
            <img src={imgic4} alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-xl font-semibold mb-12 font-thicccboi">
              Finance & Banking
            </h3>
            <Link
              to="/ecommerce"
              className="relative text-[rgba(50,185,233,1)] inline-flex items-center group transition-all duration-300 w-36 py-1"
            >
              <span className="relative flex items-center font-thicccboi text-[16px]">
                Learn More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                  <img src={arro} alt="" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
