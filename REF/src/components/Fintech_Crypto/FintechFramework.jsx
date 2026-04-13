import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function FintechFramework() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const swiperRef = useRef(null);

  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1); 
      } else if (width < 1024) {
        setSlidesPerView(2); 
      } else {
        setSlidesPerView(4); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Understanding Your Vision",
      desc: "First of all, we immerse ourselves in your concepts and visions of the fintech application.",
      bg: "bg-[#FFE9E5]",
    },
    {
      id: 2,
      title: "Strategic Planning",
      desc: "After that, we hold briefing meetings to define the project’s objectives, functionalities, and schedule.",
      bg: "bg-[#E5F8F6]",
    },
    {
      id: 3,
      title: "Agile Development",
      desc: "In this process, the FinTech app is created through multiple sprints based on the principles of agile development.",
      bg: "bg-[#E8E8FF]",
    },
    {
      id: 4,
      title: "Robust Testing",
      desc: "Quality is a very important aspect that is considered in our work.",
      bg: "bg-[#FFE9E5]",
    },
    {
      id: 5,
      title: "Launch & Support",
      desc: "Lastly, the app is launched and continuously supported for performance and updates.",
      bg: "bg-[#E5F8F6]",
    },
    {
      id: 6,
      title: "Continuous Improvement",
      desc: "We analyze feedback and continuously improve your fintech app for better results.",
      bg: "bg-[#E8E8FF]",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#050B18] via-[#0B1C2D] to-[#071018] py-16 text-white overflow-hidden">
      <h2 className="text-center font-['THICCCBOI'] text-2xl md:text-4xl font-bold mb-10">
        Our Fintech Application Development <br /> Framework
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        centeredSlides={slidesPerView < 4}  
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4500}
        loop={true}
        freeMode={true}
        allowTouchMove={true}
        className="max-w-7xl mx-auto"
      >
        {steps.map((step) => (
          <SwiperSlide key={step.id}>
            <div
              className={`${step.bg} rounded-2xl shadow-lg p-6 h-[300px] lg:w-[307px] flex flex-col hover:scale-[1.03] transition-transform duration-300 cursor-pointer`}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.autoplay.stop();
                }
              }}
            >
                 <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#32B9E9] font-bold shadow-md mr-3">
                  {step.id}
                </span>
              <div className="flex items-center mb-">
               
                <h3 className="font-['THICCCBOI'] mt-2 mb-4  text-start  font-semibold text-lg text-black">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm text-start leading-[140%] font-['THICCCBOI'] font-normal">
                {step.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
