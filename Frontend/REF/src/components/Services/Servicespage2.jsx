import React from "react";
import bg from "../../assets/image/bgnew.png";

function Servicespage2() {
  const services = [
    {
      title: "Tailored Web Solutions for Enterprises",
      desc: "We are your go-to team for creating top-notch, secure, and custom websites that truly reflect your brand.",
    },
    {
      title: "HTML5 Made Simple",
      desc: "Our HTML5 web development services deliver complete solutions optimized for speed, scalability, and responsiveness.",
    },
    {
      title: "Customized Design & Development",
      desc: "Every business is unique, and so should be its website. We specialize in creating bespoke web solutions that perfectly align with your brand and business goals.",
    },
    {
      title: "Crafted Drupal Solutions",
      desc: "With over a decade of experience under our belt, we are masters at building and supporting innovative, tailor-made Drupal solutions.",
    },
    {
      title: "Performance-Driven Solutions",
      desc: "Our focus is on delivering high-performance web solutions that load quickly, scale seamlessly, and provide a smooth user experience.",
    },
    {
      title: "Next-Gen Web Experiences",
      desc: "We combine creativity with technology to build digital experiences that inspire and engage your audience.",
    },
  ];

  return (
    <div className="relative py-[64px] px-[24px] sm:px-[32px] md:px-[48px] bg-gray-50 overflow-hidden">
   
      <img
        src={bg}
        alt="background shape"
        className="absolute w-[972px] h-[782px] rotate-[20.05deg] opacity-60 top-[100px] left-[80px] pointer-events-none object-contain"
      />

     
      <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-center mb-[64px] text-gray-800 font-['THICCCBOI'] relative z-10">
        Smart Solutions, Powerful Outcomes
      </h2>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] place-items-center relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full max-w-[360px] h-[220px] rounded-[16px] border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <div className="absolute top-[40px] left-[28px] flex flex-col justify-center gap-[15px] w-[85%]">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-start text-gray-600 font-['THICCCBOI'] text-[15px] sm:text-[16px] leading-[130%] tracking-[0%]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicespage2;
