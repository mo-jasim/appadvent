// import React from "react";
// import pot1 from "../../assets/image/pot1.jpg";
// import pot2 from "../../assets/image/pot2.png";
// import pot3 from "../../assets/image/pot3.jpg";
// import pot4 from "../../assets/image/pot4.png";
// import pot5 from "../../assets/image/pot5.png";
// import pot6 from "../../assets/image/pot6.png";

// function Portfoliopage2() {
//   return (
//     <div className="max-w-[1280px]   mx-auto mt-1 pb-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

    
//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot1}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//             1 Freshup - Social Networking App
//           </h3>
//           <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot2}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//         Goalkick-Social networking app
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot3}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//           Claim 360
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot4}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//          Privicam-storage privacy app
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot5}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//            Letramway
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot6}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//          Detect microplastic
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot1}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//           Niotek
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center">
//         <div className="w-full h-auto p-4 flex flex-col">
//           <img
//             src={pot2}
//             alt="project"
//             className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
//           />
//           <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
//            Droneverse
//           </h3>
//          <div className="flex items-center text-sm font-semibold text-gray-900">
//             <div className="flex-1">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Completion Time</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">3 Months</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">Platform</p>
//               <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">Application</p>
//             </div>
//             <div className="h-10 border-l border-gray-300 mx-2"></div>
//             <div className="flex-1 ml-2">
//               <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">View</p>
//               <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">Full details</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portfoliopage2;
import React from "react";
import pot1 from "../../assets/image/pot1.jpg";
import pot2 from "../../assets/image/pot2.png";
import pot3 from "../../assets/image/pot3.jpg";
import pot4 from "../../assets/image/pot4.png";
import pot5 from "../../assets/image/pot5.png";
import pot6 from "../../assets/image/pot6.png";

function Portfoliopage2() {
  const projects = [
    { id: 1, img: pot1, title: "Freshup - Social Networking App" },
    { id: 2, img: pot2, title: "Goalkick - Social Networking App" },
    { id: 3, img: pot3, title: "Claim 360" },
    { id: 4, img: pot4, title: "Privicam - Storage Privacy App" },
    { id: 5, img: pot5, title: "Letramway" },
    { id: 6, img: pot6, title: "Detect Microplastic" },
    { id: 7, img: pot1, title: "Niotek" },
    { id: 8, img: pot2, title: "Droneverse" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto mt-1 pb-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full bg-white rounded-[16px] border border-gray-300 flex items-center justify-center"
        >
          <div className="w-full h-auto p-4 flex flex-col">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[400px] object-cover rounded-[13px] mb-4"
            />
            <h3 className="font-thicccboi font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] mb-6">
              {project.title}
            </h3>

            <div className="flex items-center text-sm font-semibold text-gray-900">
              <div className="flex-1">
                <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">
                  Completion Time
                </p>
                <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-start">
                  3 Months
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              <div className="flex-1 ml-2">
                <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">
                  Platform
                </p>
                <p className="font-[THICCCBOI] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-start">
                  Application
                </p>
              </div>

              <div className="h-10 border-l border-gray-300 mx-2"></div>

              <div className="flex-1 ml-2">
                <p className="font-[THICCCBOI] font-medium text-[13px] sm:text-[14px] mb-2 text-start">
                  View
                </p>
                <p className="font-bold font-thicccboi text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(50,185,233,1)] inline-block border-b-2 border-[rgba(50,185,233,1)] hover:text-sky-600 hover:border-sky-600">
                  Full details
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfoliopage2;
