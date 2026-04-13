import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "..//images/img4.png";

import "../assets/style/HeroSection.css";
function LogoMarquee() {
  return (
    // <div className="relative w-full h-[60vh] overflow-hidden flex justify-center items-center">
    //   <div className="absolute top-[-480%] left-1/2 w-[400%] h-[500%] bg-white rounded-full -translate-x-1/2 z-20" />
    //   <div className="absolute bottom-[-480%] left-1/2 w-[400%] h-[500%] bg-white rounded-full -translate-x-1/2 z-20" />

    //   <div className="relative flex justify-center items-center w-full gap-4 animate-customScroll overflow-hidden">
    //     {[img1, img2, img2, img2, img3, img2, img2, img2, img2, img1, img2, img2].map((img, i) => (
    //       <div
    //         key={i}
    //         className="relative flex-shrink-0 w-[300px] snap-center"
    //       >
    //         <div className="w-full h-full border-[3px] border-white overflow-hidden rounded-[20px]">
    //           <img
    //             src={img}
    //             alt={`slide-${i}`}
    //             className="w-full h-full object-cover"
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="backdrop-blur-2xl">
      <div>
        <div className="text-center">
          <h1 className="text-5xl py-3   text-gray-900  font-thicccboi font-extrabold text-[60px] leading-[100%] tracking-[0] text-center">
            Custom Application 3 & Website <br />
            Development Services
          </h1>

          <button className=" bg-slate-50 mt-8 px-6 py-3 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
            Get a Free Consultation
          </button>
        </div>
      </div>
      <div className="outer-main">
        <div className="main">
          <div className="outer">
            <div className="inner">
              <div className="slide">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="inner">
              <div className="slide">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="inner">
              <div className="slide">
                <img src={img1} alt="" />
              </div>{" "}
              <div className="inner">
                <div className="slide">
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="inner">
                <div className="slide">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee;
