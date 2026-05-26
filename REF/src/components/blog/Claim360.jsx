import React from "react";
import laptopImg from "../../assets/image/Group 4.png";
import bg from "../../assets/image/bgnew.png";
import icon from "../../assets/image/Technology.svg";

const Claim360 = () => {
  const features = [
    { title: "Industry:", value: "Social App" },
    { title: "Development Time:", value: "3 Months" },
    { title: "OS Platform:", value: "Android & iOS" },
    { title: "Services:", value: "Design & Development" },
  ];

  return (
    <div className="relative bg-white text-gray-900 font-sans px-4 md:px-10 lg:px-20 py-32 overflow-hidden">
      {/* ✅ Background Image */}
      <img
        src={bg}
        alt="Background shape"
        className="absolute object-cover pointer-events-none select-none -rotate-[14.7deg] opacity-60
          w-[700px] h-[700px] -top-[250px] -left-[90px]
          sm:w-[950px] sm:h-[950px] sm:-top-[320px] sm:-left-[100px]
          md:w-[1150px] md:h-[1150px] md:-top-[350px] md:-left-[110px]
          lg:w-[1327px] lg:h-[1357px] lg:-top-[398px] lg:-left-[121px]"
      />

      <div className="relative z-10">
        {/* ✅ Heading & Description */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Claim 360 – Your All-in-One CRM Web Application for Seamless Client Management
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px] sm:text-[16px] md:text-[18px]">
            Claim360 is a comprehensive web app designed to simplify home insurance claims after natural disasters.
            It streamlines every step — from reporting damage to final settlement — ensuring speed, transparency,
            and peace of mind. When disaster strikes, Claim360 helps homeowners recover faster.
          </p>
          <button className="text-[rgba(50,185,233,1)] underline font-medium px-6 py-3 rounded-lg transition">
            Have a project in mind?
          </button>
        </div>

        {/* ✅ Image Section */}
        <div className="relative mt-16 flex flex-col items-center justify-center">
          <img
            src={laptopImg}
            alt="Laptop Dashboard"
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[1055px]"
          />
        </div>

        {/* ✅ About Section */}
        <div className="mt-24 text-center max-w-6xl mx-auto w-full">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            About Claim 360 WebApp
          </h3>
          <p className="text-gray-600 leading-relaxed mb-10 text-[15px] sm:text-[16px] md:text-[18px]">
            Claim360 is a web application designed to simplify and automate home insurance claims during natural disasters.
            With features like premium claim tracking, multi-channel alerts, and integrated CRM, it ensures
            seamless management, transparency, and faster resolution for both agents and homeowners.
          </p>

          {/* ✅ Features Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 
            w-full max-w-6xl mx-auto"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="p-5 flex items-center space-x-3 justify-center md:justify-start 
                bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 flex-shrink-0">
                  <img src={icon} alt="Service Icon" className="h-10 w-10 object-contain" />
                </div>
                <div className="text-left flex flex-wrap items-center w-52 sm:w-60">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-600 text-sm ml-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim360;
