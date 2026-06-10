import React from "react";
import video from "../assets/image/vid.png";
import icon1 from "../assets/image/aa.svg";
import Slider from "react-slick";

function Clients() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container py-14 mt-1 sm:mt-40  lg:-mt-0  md:mt-0 px-2 md:px- bg-">
      <h1 className="font-thicccboi font-bold text-[24px] sm:text-[48px] leading-[120%] text-center mb-10 whitespace-nowrap">
        Words from Our Clients
      </h1>

      <Slider {...settings}>
        <div className="px-3">
          <div className="bg-white flex flex-col md:flex-row rounded-[24px] shadow-sm w-full max-w-[847px]  mx-auto relative">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between mt-4 ml-4 p-4 items-start">
                <img src={icon1} className="h-[29px]" alt="" />
                <div className="text-[32px] text-orange-400">
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
              <div className="p-3">
                <h2 className="ml-4 text-start text-[20px] lg:text-[24px] font-thicccboi font-bold mt-2">
                  David Miller
                </h2>
                <p className="text-start ml-4 text-[16px] text-gray-700 mt-2 font-thicccboi font-bold">
                  CEO
                </p>
                <p className="sm:text-[16px] ml-1 px-3 text-[16px] text-start mt-4 font-thicccboi font-Regular leading-[150%] tracking-[0]">
                  Sam exceeded my expectations in website support. I came in without a
                  clear direction. After hearing about my endgoal, he was able to give
                  me examples that allowed me to make better choices and shape the
                  direction of my website, and company, going forward.
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0">
              <img
                src={video}
                alt="App Screenshot"
                className="w-[367px] h-full object-cover rounded-tr-[24px] rounded-br-[24px]"
              />
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="bg-white flex flex-col md:flex-row rounded-[24px] shadow-sm w-full max-w-[847px] mx-auto relative">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between mt-4 ml-4 p-4 items-start">
                <img src={icon1} className="h-[29px]" alt="" />
                <div className="text-[32px] text-orange-400">
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
              <div className="p-3">
                <h2 className="text-start text-[20px] ml-4 lg:text-[24px] font-thicccboi font-bold mt-2">
                  David Miller
                </h2>
                <p className="text-start text-[16px] text-gray-700 ml-4 mt-2 font-thicccboi font-bold">
                  CEO
                </p>
                <p className="sm:text-[16px] px-4 ml-1 text-[16px] text-start mt-4 font-thicccboi font-Regular leading-[150%] tracking-[0]">
                  Sam exceeded my expectations in website support. I came in without a
                  clear direction. After hearing about my endgoal, he was able to give
                  me examples that allowed me to make better choices and shape the
                  direction of my website, and company, going forward.
                </p>
              </div>
            </div>

            <div className="relative flex-shrink-0">
              <img
                src={video}
                alt="App Screenshot"
                className="w-[367px] h-full object-cover rounded-tr-[24px] rounded-br-[24px]"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Clients;




// import React from "react";
// import video from "../assets/image/vid.png";
// import icon1 from "../assets/image/aa.svg";
// import Slider from "react-slick";

// function Clients() {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     speed: 5000,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     slidesToShow: 1.5,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="slider-container bg-gray-50 py-12 px-2 md:px-12">
//       <h1 className="font-thicccboi font-bold text-[24px] sm:text-[48px] leading-[120%] text-center mb-10 whitespace-nowrap">
//         Words from Our Clients
//       </h1>

//      <Slider {...settings}>
//   <div className="px-3">
//     <div className="bg-white flex flex-col md:flex-row justify-between rounded-[12px] shadow-sm w-[847px] max-w-full mx-auto gap-6 relative">
//       <div className="flex-1">
//         <div className="flex justify-between mt-4 p-3 items-start">
//           <img src={icon1} className="h-[29px]" alt="" />
//           <div className="text-[32px] text-orange-400">
//             <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
//           </div>
//         </div>
//         <div className="p-3">
//           <h3 className="text-start text-[20px] lg:text-[24px] font-thicccboi font-bold mt-2">
//             David Miller
//           </h3>
//           <p className="text-start text-[16px] text-gray-700 mt-2 font-thicccboi font-bold">
//             CEO
//           </p>
//           <p className="sm:text-[17px] text-[16px] text-start mt-4 font-thicccboi font-Regular leading-[150%] tracking-[0]">
//             Sam exceeded my expectations in website support. I came in without a
//             clear direction. After hearing about my endgoal, he was able to give
//             me examples that allowed me to make better choices and shape the
//             direction of my website, and company, going forward.
//           </p>
//         </div>
//       </div>
//       <div className="relative flex-shrink-0">
//         <img
//           src={video}
//           alt="App Screenshot"
//           className="w-[367px] sm:w-[280px] md:w-[340px] md:h-[388px] h-[405px] rounded-tr-[16px] rounded-br-[16px] shadow-lg"
//         />
//       </div>
//     </div>
//   </div>

//   <div className="px-3">
//     <div className="bg-white flex flex-col md:flex-row justify-between rounded-[12px] shadow-sm w-[847px] max-w-full mx-auto gap-6 relative">
//       <div className="flex-1">
//         <div className="flex justify-between mt-4 p-3 items-start">
//           <img src={icon1} className="h-[29px]" alt="" />
//           <div className="text-[32px] text-orange-400">
//             <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
//           </div>
//         </div>
//         <div className="p-3">
//           <h3 className="text-[20px] lg:text-[24px] font-thicccboi font-semibold mt-2">
//             David Miller
//           </h3>
//           <p className="text-start text-[16px] text-gray-700 mt-2 font-thicccboi font-bold">
//             CEO
//           </p>
//           <p className="sm:text-[17px] text-[16px] text-start mt-4 font-thicccboi font-Regular leading-[150%] tracking-[0]">
//             Sam exceeded my expectations in website support. I came in without a
//             clear direction. After hearing about my endgoal, he was able to give
//             me examples that allowed me to make better choices and shape the
//             direction of my website, and company, going forward.
//           </p>
//         </div>
//       </div>
//       <div className="relative flex-shrink-0">
//         <img
//           src={video}
//           alt="App Screenshot"
//           className="w-[367px] sm:w-[280px] md:w-[340px] md:h-[388px] h-[405px] rounded-tr-[16px] rounded-br-[16px] shadow-lg"
//         />
//       </div>
//     </div>
//   </div>
// </Slider>
//     </div>
//   );
// }

// export default Clients;

