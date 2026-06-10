
import React from "react";
import { Link } from "react-router-dom";
import ind1 from "../../assets/image/ind1.png";
import ind2 from "../../assets/image/ind2.jpg";
import ind3 from "../../assets/image/ind3.png";
import ind4 from "../../assets/image/ind4.png";
import ind5 from "../../assets/image/ind5.png";
import ind6 from "../../assets/image/ind6.png";
import ico1 from "../../assets/image/Cpu.svg";
import arro1 from "../../assets/image/ArrowRight.png";
import bgnew from "../../assets/image/bgnew.png";

function Industriespage1() {
  const industries = [
    { id: 1, img: ind1, title: "Fintech & Crypto", link: "/fintechCrypto" },
    { id: 2, img: ind2, title: "Retail & E-Commerce", link: "/retail" },
    { id: 3, img: ind3, title: "Healthcare & Wellness", link: "/healthcare" },
    { id: 4, img: ind4, title: "Education & Learning", link: "/education" },
    { id: 5, img: ind5, title: "Manufacturing & Supply Chain", link: "/manufacturing" },
    { id: 6, img: ind6, title: "Travel & Hospitality", link: "/travel" },
    { id: 7, img: ind1, title: "Technology & SaaS", link: "/technology" },
  ];

  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-[#fafafa] to-white overflow-hidden">
      <img
        src={bgnew}
        alt="background shape"
        className="absolute opacity-90 object-cover pointer-events-none select-none -rotate-[14.7deg]
          w-[800px] h-[500px] -top-[3px] -left-[0px]
          md:w-[1200px] md:h-[1200px] md:-top-[60px] md:-left-[90px]
          lg:w-[1327px] lg:h-[1357px] lg:-top-[52px] lg:-left-[82px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12 mt-24">
          <h2 className="text-gray-900 font-['THICCCBOI'] font-bold text-[24px] lg:text-[60px] leading-[100%]">
            Industries we cater to
          </h2>
          <p className="mt-4 text-gray-600 font-['THICCCBOI'] font-normal text-base leading-[140%] text-center">
            We proudly serve a wide range of industries by delivering tailored
            solutions that address their unique challenges. From retail and
            e-commerce to healthcare, education, and manufacturing — our
            services are designed to streamline operations and enhance customer
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {industries.map((item) => (
            <div
              key={item.id}
              className="lg:w-[630px] h-[599px] border rounded-xl bg-white shadow-md p-6 text-center relative"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[331px] object-cover rounded-lg mb-6"
              />

              <div className="relative flex justify-center -mt-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#EAF8FD] rounded-full flex items-center justify-center">
                    <img src={ico1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm px-4">
                We work primarily within the {item.title.toLowerCase()} niche
                and aim to deliver high-quality software solutions with an
                emphasis on speed, flexibility, and effectiveness.
              </p>

              <div className="text-center">
                <Link
                  to={item.link}
                  className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
                >
                  <span className="relative mt-4 flex items-center group-hover:text-[rgba(50,185,233,1)]">
                    Learn More
                    <span className="ml-2 duration-300 group-hover:translate-x-2">
                      <img src={arro1} alt="arrow" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industriespage1;


// import React from "react";
// import { Link } from "react-router-dom";
// import ind1 from "../../assets/image/ind1.png";
// import ind2 from "../../assets/image/ind2.jpg";
// import ind3 from "../../assets/image/ind3.png";
// import ind4 from "../../assets/image/ind4.png";
// import ind5 from "../../assets/image/ind5.png";
// import ind6 from "../../assets/image/ind6.png";
// import ico1 from "../../assets/image/Cpu.svg";
// import arro1 from "../../assets/image/ArrowRight.png";
// import bgnew from "../../assets/image/bgnew.png";

// function Industriespage1() {
//   const industries = [
//     { id: 1, img: ind1, title: "Fintech & Crypto" },
//     { id: 2, img: ind2, title: "Retail & E-Commerce" },
//     { id: 3, img: ind3, title: "Healthcare & Wellness" },
//     { id: 4, img: ind4, title: "Education & Learning" },
//     { id: 5, img: ind5, title: "Manufacturing & Supply Chain" },
//     { id: 6, img: ind6, title: "Travel & Hospitality" },
//     { id: 7, img: ind1, title: "Technology & SaaS" },
//   ];

//   return (
//     <div className="w-full min-h-screen relative bg-gradient-to-b from-[#fafafa] to-white overflow-hidden">
//       <img
//         src={bgnew}
//         alt="background shape"
//         className="
//           absolute 
//           opacity-90 
//           object-cover 
//           pointer-events-none 
//           select-none 
//           -rotate-[14.7deg]
//           w-[800px] h-[500px] -top-[3px] -left-[0px]
         
//           md:w-[1200px] md:h-[1200px] md:-top-[60px] md:-left-[90px]
//           lg:w-[1327px] lg:h-[1357px] lg:-top-[52px] lg:-left-[82px]
//         "
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center max-w-4xl mx-auto mb-12 mt-24">
//           <h2 className="text-gray-900 font-['THICCCBOI'] font-bold text-[24px] lg:text-[60px] leading-[100%]">
//             Industries we cater to
//           </h2>
//           <p className="mt-4 text-gray-600 font-['THICCCBOI'] font-normal text-base leading-[140%] text-center">
//             We proudly serve a wide range of industries by delivering tailored
//             solutions that address their unique challenges. From retail and
//             e-commerce to healthcare, education, and manufacturing — our
//             services are designed to streamline operations and enhance customer
//             experiences.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
//           {industries.map((item) => (
//             <div
//               key={item.id}
//               className="lg:w-[630px] h-[599px] border rounded-xl bg-white shadow-md p-6 text-center relative"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-[331px] object-cover rounded-lg mb-6"
//               />
//               <div className="relative flex justify-center -mt-10">
//                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
//                   <div className="w-12 h-12 bg-[#EAF8FD] rounded-full flex items-center justify-center">
//                     <img src={ico1} alt="Icon" className="w-6 h-6" />
//                   </div>
//                 </div>
//               </div>

//               <h3 className="text-xl font-semibold text-gray-800 mt-4">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 mt-2 text-sm">
//                 We work primarily within the {item.title.toLowerCase()} niche
//                 and aim to deliver high-quality software solutions with an
//                 emphasis on speed, flexibility, and effectiveness.
//               </p>

//               <div className="text-center">
//                 <Link
//                   to="#"
//                   className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
//                 >
//                   <span className="relative mt-4 flex items-center group-hover:text-[rgba(50,185,233,1)]">
//                     Learn More
//                     <span className="ml-2 duration-300 group-hover:translate-x-2">
//                       <img src={arro1} alt="" />
//                     </span>
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Industriespage1;