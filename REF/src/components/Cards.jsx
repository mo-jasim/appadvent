import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img10 from "../assets/image/cards1.png";
import img11 from "../assets/image/cards2.png";
import img12 from "../assets/image/card13.png";
import "./card.css";
function Cards() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="max-w-8xl lg:mt-10 mt-[650px] sm:-mt-32 md:mt-52 h-[600px]  ">
    <div className="max-w-8xl lg:h-[630px] md:h-[630px] md:mt-36 mt-[580px] sm:mt-1  bg- lg:-mt-1  ">
      {/* <div className="text-center mb-6 sm:mb-10">
        <h1 className="font-[THICCCBOI]  text-[24px]  tracking-[0] mt-2  lg:mt-20   md:text-[48px] lg:text-[48px] py-2 sm:py-3 font-bold text-gray-900 leading-snug sm:leading-tight">
          Some of our Best works
        </h1>
      </div> */}
      <div className="text-center pt-14 pb-10">
        <h1 className="font-[THICCCBOI] text-[24px] md:text-[48px] lg:text-[48px] font-bold text-gray-900 leading-snug sm:leading-tight">
          Some of our Best works
        </h1>
      </div>
      <Slider {...settings}>
        <div className="px-2 lg:px-1 mb-4">
          <div className=" md:w-[380px] lg:w-[523px] xl:w-[500px] w-[368px] h-auto rounded-[16px] bg-white border border-gray-300 p-4  shadow-md">
            <img
              src={img10}
              alt=""
              className="w-full h-[300px] mb-4 rounded-[13px] object-cover"
            />

            <h3 className="font-thicccboi font-bold text-[20px] lg:text-[24px] leading-[100%] tracking-normal mb-7">
              1 Freshup - Social Networking App
            </h3>

            <div className="flex items-center p-2 text-sm font-semibold text-gray-900">
              <div className="flex-1  ">
                <p className="  font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] mb-2  text-start">
                  Completion Time
                </p>
                <p className="font-bold font-thicccboi  text-[16px] leading-[100%] tracking-[0] text-start">
                  3 Months
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              {/* <div className="flex-1 text-start">
        <p className="mb-2 font-thicccboi font-medium text-[14px] leading-[100%] text-center">
          Platform
        </p>
        <p className="font-bold font-thicccboi ml-6 text-center">Application</p>
      </div> */}
              <div className="flex-1 ml-3 ">
                <p className="mb-2 font-[THICCCBOI] font-medium text-[14px] bg-white leading-[100%] tracking-[0] text-start">
                  Platform
                </p>
                <p className=" font-[THICCCBOI] font-bold text-[16px] leading-[100%] tracking-[0]  text-start">
                  Application
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              {/* <div className="flex-1 ">
        <p className="mb-2 ml-9  font-thicccboi font-medium text-[12px] leading-[100%] text-start">
          View
        </p>
        <p className=" flex justify-center font-bold font-thicccboi"> Full details</p>
      </div> */}
              <div className="flex-1 ml-3 ">
                <p className="mb-2 font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] text-start">
                  View
                </p>
                <p className="font-bold font-thicccboi text-start text-[rgba(50,185,233,1)]  text-[16px]  inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">
                  Full details
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 lg:px-1 mb-4">
          <div className=" md:w-[380px] lg:w-[523px] xl:w-[500px] w-[368px] h-auto rounded-[16px] border border-gray-300 p-4 bg-white shadow-md">
            <img
              src={img11}
              alt=""
              className="w-full h-[300px] mb-4 rounded-[13px] object-cover"
            />

            <h3 className="font-thicccboi font-bold text-[20px] lg:text-[24px] leading-[100%] tracking-normal mb-7">
              2 North-East Gym
            </h3>

            <div className="flex items-center p-2 text-sm font-semibold text-gray-900">
              <div className="flex-1">
                <p className="  font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] mb-2  text-start">
                  Completion Time
                </p>
                <p className="font-bold font-thicccboi  text-[16px] leading-[100%] tracking-[0] text-start">
                  3 Months
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              <div className="flex-1 ml-3 ">
                <p className="mb-2 font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] text-start">
                  Platform
                </p>
                <p className=" font-[THICCCBOI] font-bold text-[16px] leading-[100%] tracking-[0]  text-start">
                  Application
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              <div className="flex-1 ml-3 ">
                <p className="mb-2 font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] text-start">
                  View
                </p>
                <p className="font-bold font-thicccboi text-start text-[rgba(50,185,233,1)]  text-[16px]  inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">
                  Full details
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 lg:px-1 mb-4">
          <div className=" md:w-[380px] lg:w-[523px] xl:w-[500px]  w-[368px] h-auto rounded-[16px] border border-gray-300 p-4 bg-white shadow-md">
            <img
              src={img12}
              alt=""
              className="w-full h-[300px] mb-4 rounded-[13px] object-cover"
            />

            <h3 className="font-thicccboi font-bold text-[20px] lg:text-[24px] leading-[100%] tracking-normal mb-7">
              3 Freshup - Social Networking App
            </h3>

            <div className="flex items-center p-2 text-sm font-semibold text-gray-900">
              <div className="flex-1">
                <p className="  font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] mb-2  text-start">
                  Completion Time
                </p>
                <p className="font-bold font-thicccboi  text-[16px] leading-[100%] tracking-[0] text-start">
                  3 Months
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              <div className="flex-1 ml-3 ">
                <p className="mb-2 font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] text-start">
                  Platform
                </p>
                <p className=" font-[THICCCBOI] font-bold text-[16px] leading-[100%] tracking-[0]  text-start">
                  Application
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              <div className="flex-1 ml-3 ">
                <p className="mb-2 font-[THICCCBOI] font-medium text-[14px] leading-[100%] tracking-[0] text-start">
                  View
                </p>
                <p className="font-bold font-thicccboi text-start text-[rgba(50,185,233,1)]  text-[16px]  inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">
                  Full details
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default Cards;


// export default Cards;
// import React from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img10 from "../assets/image/cards1.png";
// import img11 from "../assets/image/cards2.png";
// import img12 from "../assets/image/card13.png";
// import "./card.css"

// function Cards() {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     speed: 4000,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-8xl h-[600px] md:h-[500px] md:mt-48 mt-[650px] sm:mt-1 lg:-mt-1  ">

//       <div className="text-center pt-16 pb-6">
//         <h1 className="font-[THICCCBOI] text-[24px] md:text-[48px] lg:text-[48px] font-bold text-gray-900 leading-snug sm:leading-tight">
//           Some of our Best works
//         </h1>
//       </div>

//       <Slider {...settings}>
//         <div className="px-2 lg:px-1 mb-6">
//           <div className="md:w-[380px] lg:w-[523px] xl:w-[500px] w-[368px] h-auto rounded-[16px] bg-white border border-gray-300 p-4 shadow-md">
//             <img src={img10} alt="" className="w-full h-[300px] mb-4 rounded-[13px] object-cover"/>
//             <h3 className="font-thicccboi font-bold text-[20px] lg:text-[24px] mb-7">1 Freshup - Social Networking App</h3>

//           </div>
//         </div>

//         <div className="px-2 lg:px-1 mb-4">
//           <div className="md:w-[380px] lg:w-[523px] xl:w-[500px] w-[368px] h-auto rounded-[16px] bg-white border border-gray-300 p-4 shadow-md">
//             <img src={img11} alt="" className="w-full h-[300px] mb-4 rounded-[13px] object-cover"/>
//             <h3 className="font-thicccboi font-bold text-[20px] lg:text-[24px] mb-7">2 North-East Gym</h3>

//           </div>
//         </div>

//         <div className="px-2 lg:px-1 mb-4">
//           <div className="md:w-[380px] lg:w-[523px] xl:w-[500px] w-[368px] h-auto rounded-[16px] bg-white border border-gray-300 p-4 shadow-md">
//             <img src={img12} alt="" className="w-full h-[300px] mb-4 rounded-[13px] object-cover"/>
//             <h3 className="font-thicccboi font-bold text-[20px] lg:text-[24px] mb-7">3 Freshup - Social Networking App</h3>

//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Cards;
