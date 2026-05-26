// import React from "react";
// import teamImage from "../../assets/image/pot1.jpg";
// import bgimg from "../../assets/image/bgnew.png";

// function Servicespage3() {
//   const steps = [
//     "Through Research & Development",
//     "Collaborative Idea Refinement",
//     "User-Focused UX Review",
//     "Strategic UI/UX Design",
//     "Complete Branding Solutions",
//     "Innovative Product Design",
//     "Agile Rapid Prototyping",
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
    
//        <img
//         src={bgimg}
//         alt="Background shape"
//         className="
//           absolute 
//           object-cover 
//           pointer-events-none 
//           select-none 
//           -rotate-[14.7deg]
//           opacity-90
//          w-[500px] h-[580px] -top-[0px] -left-[40px]
     
//          md:w-[1200px] md:h-[800px] md:-top-[140px] md:-left-[90px]
//           lg:w-[1327px] lg:h-[1357px] lg:-top-[213px] lg:-left-[125px]
//         "
//       />

     
//       <div
//         className="absolute -top-[213px] -left-[125px] w-[1327px] h-[1357px] -rotate-[14.7deg] opacity-60"
//         style={{
//           background:
//             "linear-gradient(205.02deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.75) 80%)",
//         }}
//       ></div>


//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Smart & Simple Project Coordination
//           </h2>
//           <p className="text-gray-300 mb-10 text-start max-w-3xl leading-relaxed">
//             Our team uses agile methods to manage projects, boosting efficiency
//             and cutting down completion times. Agile involves breaking projects
//             into smaller, manageable parts called sprints, allowing us to
//             regularly check progress and make adjustments as needed.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <ul className="space-y-6">
//               {steps.map((item, index) => (
//                 <li key={index} className="flex items-center group">
//                   <span className="text-blue-400 font-semibold mr-4">{`0${
//                     index + 1
//                   }`}</span>
//                   <span className="flex-1 relative pb-1">
//                     <span className="transition-colors duration-300 group-hover:text-blue-400">
//                       {item}
//                     </span>
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex justify-center lg:justify-end">
//             <img
//               src={teamImage}
//               alt="Team Working"
//               className="rounded-[50px] shadow-2xl max-w-[612px] h-[550px] border border-gray-700"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Servicespage3;
import React, { useState } from "react";
import teamImage from "../../assets/image/pot1.jpg";
import bgimg from "../../assets/image/bgnew.png";
import { ChevronDown } from "lucide-react";

function Servicespage3() {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      title: "Through Research & Development",
      desc: "We analyze your business requirements, explore technologies, and define innovative strategies to create effective digital solutions.",
    },
    {
      title: "Collaborative Idea Refinement",
      desc: "We refine your ideas through constant collaboration, ensuring alignment with your brand vision and project objectives.",
    },
    {
      title: "User-Focused UX Review",
      desc: "Our UX team studies real user behavior and feedback to ensure the interface remains simple, intuitive, and accessible.",
    },
    {
      title: "Strategic UI/UX Design",
      desc: "We create visually stunning, functional, and user-friendly interfaces that reflect your brand’s identity.",
    },
    {
      title: "Complete Branding Solutions",
      desc: "We deliver holistic branding solutions including logo, color palette, and visual identity to make your brand stand out.",
    },
    {
      title: "Innovative Product Design",
      desc: "From concept to prototype, our product design process focuses on innovation and seamless user experience.",
    },
    {
      title: "Agile Rapid Prototyping",
      desc: "We use agile methods to quickly turn ideas into prototypes, helping you test and improve fast.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full lg-h-screen bg-black text-white py-20 px-4 md:px-10 lg:px-16 overflow-hidden">
      <img
        src={bgimg}
        alt="Background shape"
        className="absolute object-cover pointer-events-none select-none -rotate-[14.7deg] opacity-90
         w-[500px] h-[580px] -top-[0px] -left-[40px]
         md:w-[1200px] md:h-[1000px] md:-top-[140px] md:-left-[90px]
         lg:w-[1327px] lg:h-[1357px] lg:-top-[213px] lg:-left-[125px]"
      />

      <div
        className="absolute -top-[213px] -left-[125px] w-[1327px] h-[1357px] -rotate-[14.7deg] opacity-60"
        style={{
          background:
            "linear-gradient(205.02deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.75) 80%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        <div className="mb-12 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Smart & Simple Project Coordination
          </h2>
          <p className="text-gray-300 mb-10 text-start max-w-3xl leading-relaxed">
            Our team uses agile methods to manage projects, boosting efficiency
            and cutting down completion times. Agile involves breaking projects
            into smaller, manageable parts called sprints, allowing us to
            regularly check progress and make adjustments as needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-12 lg:gap-28  items-start ">
          <div>
            <ul className="space-y-6 ">
              {steps.map((item, index) => (
                <li
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className="cursor-pointer  border-gray-700 pb-3 transition-colors"
                >
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center">
                      <span className="text-blue-400 font-semibold mr-4">{`0${
                        index + 1
                      }`}</span>
                      <span className="font-medium group-hover:text-blue-400">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-sm text-start leading-relaxed ">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-4 lg:justify-end w-[345px] md:w-[385px]  lg:h-[550px] lg:w-[580px]">
            <img
              src={teamImage}
              alt="Team Working"
              className="rounded-[50px]  w-[612px] h-[400px]  lg:w-[612px] lg:h-[550px] border border-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicespage3;
