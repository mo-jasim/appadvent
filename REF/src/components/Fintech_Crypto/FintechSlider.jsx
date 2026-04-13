import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import right from "../../assets/image/Frame 130.svg";
import left from "../../assets/image/Frame 129.svg";

import icon1 from "../../assets/image/Component 27 (1).svg";
import icon2 from "../../assets/image/Component 27 (2).svg";
import icon3 from "../../assets/image/Component 27.svg";

const FintechSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      title: "Expertise",
      desc: "High-end fintech expertise for your business growth.",
      bg: "bg-[#DBF3FB]",
      img: icon1,
    },
    {
      id: 2,
      title: "Innovation",
      desc: "Creative and smart solutions that set you apart.",
      bg: "bg-[#FEFFEA]",
      img: icon2,
    },
    {
      id: 3,
      title: "Customization",
      desc: "Tailor-made fintech apps for your unique needs.",
      bg: "bg-[#E5F8F6]",
      img: icon3,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#eef4ff] to-[#f5f5f5] py-12 px-2 md:px-4 lg:px-8 xl:px-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-6 sm:p-4 md:p-6 lg:p-8 rounded-lg">
        <h2 className="w-full text-start sm:text-start md:text-start text-2xl font-[THICCCBOI] lg:text-[48px] leading-[100%] tracking-[0] font-bold mb-4 text-black lg:w-2/4 px-8  md:px-0">
          Why Appadvent is Your Ideal Partner for {" "}
          <span className="text-blue-400">Fintech App </span>Development?
        </h2>

        <p className="text-start sm:text-start md:text-start text-black font-[THICCCBOI] font-medium text-[16px] sm:text-[17px] md:text-[18px] leading-[150%] tracking-[0] lg:w-1/2 max-w-[600px] px-8 md:px-0">
          Appadvent offers the best and unique fintech application development
          solutions to assist your business in achieving higher performance in
          the new world. The strategic management approach that we follow is the
          one that encourages the focus on innovation, teamwork, and market
          orientation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-3">
              <div
                className={`${card.bg} rounded-[30px] p-6 sm:p-6 md:p-8 h-[320px] sm:h-[340px] md:h-[350px] flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300`}
              >
                <img src={card.img} alt={card.title} className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  {card.title}
                </h3>
                <button className="text-blue-500 mt-4 text-start text-sm font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-6 flex justify-end gap-4 sm:pr-4 md:pr-6 lg:pr-10">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="transition-transform hover:scale-110"
        >
          <img src={left} alt="Previous" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="transition-transform hover:scale-110"
        >
          <img src={right} alt="Next" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
        </button>
      </div>
    </div>
  );
};

export default FintechSlider;