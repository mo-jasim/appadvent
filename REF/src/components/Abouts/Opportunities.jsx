import React from "react";
import phoneImg from "../../assets/image/Frame 239 (1).png";
import bg from "../../assets/image/bgnew.png";
import { FaFutbol } from "react-icons/fa";

function Opportunities() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50 to-white py-16 px-6 md:px-10 lg:px-10 overflow-hidden">
      <img
        src={bg}
        alt="Background Design"
        className="absolute opacity-60 rotate-[20deg]"
        style={{
          width: "1327.87px",
          height: "1357.31px",
          top: "1479px",
          left: "-124px",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

     
      <div className="  relative z-10 max-w-7xl lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
     
        <div className="space-y-6 text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Opportunities await
          </h2>

          <ul className="space-y-5 text-gray-600 text-base sm:text-lg">
            {[1, 2, 3].map((_, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaFutbol className="text-gray-700 mt-1 text-lg sm:text-xl" />
                <p className="text-start leading-relaxed">
                  There’s also a gap in reward-driven engagement where fans feel
                  recognized and appreciated for their participation.
                </p>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="relative flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] md:w-[420px] h-[300px] sm:h-[360px] md:h-[442px]">
            <img
              src={phoneImg}
              alt="App Mockup"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
