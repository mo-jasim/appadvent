import React, { useState } from "react";
import teamImage from "../../assets/image/Frame 241.png";
import bgimg from "../../assets/image/bgnew.png";
import { ChevronDown } from "lucide-react";

function Essential() {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      title: "  Football Copmmunity & Groups ",
      desc: "We believe in a meticulous approach to understanding the challenges and opportunities at hand before initiating any changes. Our dedicated research and development phase involves in-depth analysis and a comprehensive understanding of your current systems, market landscape, and business objectives. ",
    },
    {
      title: "  Match Discussions & Banter",
      desc: "We refine your ideas through constant collaboration, ensuring alignment with your brand vision and project objectives.",
    },
    {
      title: " Real-Time Updates",
      desc: "Our UX team studies real user behavior and feedback to ensure the interface remains simple, intuitive, and accessible.",
    },
    {
      title: " Personalized Feed",
      desc: "We create visually stunning, functional, and user-friendly interfaces that reflect your brand’s identity.",
    },
    {
      title: "Interactive Engagement",
      desc: "We deliver holistic branding solutions including logo, color palette, and visual identity to make your brand stand out.",
    },
    
    {
      title: " Friendship & Networking",
      desc: "We use agile methods to quickly turn ideas into prototypes, helping you test and improve fast.",
    },
    {
      title: "  Interactive Engagement",
      desc: "We use agile methods to quickly turn ideas into prototypes, helping you test and improve fast.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full lg-h-screen bg-white text-black py-20 px-4 md:px-10 lg:px-16 overflow-hidden">
      <img
        src={bgimg}
        alt="Background shape"
        className="absolute object-cover pointer-events-none select-none -rotate-[14.7deg] opacity-60
         w-[500px] h-[580px] -top-[0px] -left-[40px]
         md:w-[1200px] md:h-[1000px] md:-top-[140px] md:-left-[90px]
         lg:w-[1327px] lg:h-[1357px] lg:-top-[203px] lg:-left-[125px]"
      />

      <div
        className="absolute -top-[213px] -left-[125px] w-[1327px] h-[1357px] -rotate-[14.7deg] opacity-60"
        // style={{
        //   background:
        //     "linear-gradient(205.02deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.75) 80%)",
        // }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        <div className="mb-12 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
         Essential Highlights 
          </h2>
       
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
              className="rounded-[50px]  w-[412px] h-[400px]  lg:w-[492px] lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Essential;
