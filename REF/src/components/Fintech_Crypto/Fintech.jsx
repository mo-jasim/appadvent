import React from "react";
import footballImg from "../../assets/image/Frame 134.png";
import fintech1 from "../../assets/image/CryptoCove - Crypto Wallet 1.png";
import bgImg from "../../assets/image/bgnew.png";
import tick from "../../assets/image/Tick.svg";

export default function Fintech() {
  const services = [
    {
      title: "Web and Mobile Application Development",
      desc: "For a fintech company, both web and mobile applications are essential for customer satisfaction and creating seamless experiences.",
    },
    {
      title: "Security Audits and Testing",
      desc: "Security is vital in the fintech industry. Appadvent performs security checks and infrastructure assessments to help protect user data.",
    },
    {
      title: "Fintech Product Development Consulting",
      desc: "Appadvent’s product-based fintech consulting helps financial product ideas become scalable business-ready apps.",
    },
    {
      title: "Modernization and Support of Fintech App",
      desc: "Existing projects gain value through fintech app modernization solutions, helping fintech apps stay up-to-date with the latest technologies.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-[#fcfdfd] to-[#fafeff] text-gray-900 py-20 sm:py-24 md:py-28 lg:py-32 px-10  md:px-10 lg:px-14 flex flex-col items-center overflow-hidden">
      <img
        src={bgImg}
        alt="Background shape"
        className="absolute opacity-60 rotate-[-14.7deg] w-[800px] sm:w-[950px] md:w-[1027px] h-[1200px] sm:h-[1300px] md:h-[1357px] top-[-52px] left-[-9px] object-contain pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          <h2 className="text-2xl  lg:text-[60px] font-THICCCBOI font-extrabold leading-[110%] tracking-[0%] text-start">
            Fintech & Crypto App Development Solutions
          </h2>
          <p className="text-gray-700 text-start text-sm sm:text-base md:text-lg leading-relaxed   md:px-0">
            We work primarily within the fintech niche and aim to deliver
            high-quality software solutions with an emphasis on speed,
            flexibility, and effectiveness. We acknowledge the basic
            requirements of your business and are committed to making your dream
            come true on a given schedule and budget.
          </p>
          <div className="mb-5 px-1 sm:px-2 md:px-0">
            <a
              href="#"
              className="text-[rgba(50,185,233,1)] font-semibold underline hover:text-[rgba(50,185,233,1)] transition"
            >
              Have a project in mind?
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src={footballImg}
            alt="Fintech Illustration"
            className="w-[75%] sm:w-[85%] md:w-[750px] object-contain"
          />
        </div>
      </div>

      <div className="py-8 max-w-7xl w-full px-2 sm:px-4 md:px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-start font-THICCCBOI font-bold text-gray-900 mb-4">
          Scale Your Fintech Needs with Appadvent's Expert <br />
          <span className="text-[rgba(50,185,233,1)]">
            Software Development Services
          </span>
        </h2>
        <p className="text-start text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          We work primarily within the fintech niche and aim to deliver
          high-quality software solutions with an emphasis on speed, flexibility,
          and effectiveness. We acknowledge the basic requirements of your
          business and are committed to making your dream come true on a given
          schedule and budget.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl w-full mt-2 grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center px-2 sm:px-4 md:px-0">
        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <img src={tick} alt="tick" className="w-5 h-5 sm:w-6 sm:h-6" />
                <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-[20px] text-black font-['THICCCBOI'] leading-[100%] tracking-[0%] text-start">
                  {service.title}
                </h1>
              </div>
              <p className="text-gray-700 text-start text-sm sm:text-base md:text-lg pl-7 sm:pl-8 md:pl-9 font-['THICCCBOI'] font-normal lg:text-[16px] leading-[140%] tracking-[0%]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-center md:h-[300px] lg:w-[600px] flex-wrap">
          <img
            src={fintech1}
            alt="Fintech App"
            className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[462px] lg:h-[458px]"
          />
        </div>
      </div>
    </section>
  );
}