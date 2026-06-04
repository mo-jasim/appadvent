import React from "react";
import phoneImg from "../../assets/image/pot1.jpg";
import Google from "../../assets/image/image 26.svg";
import app from "../../assets/image/image 27.svg";
import phone from "../../assets/image/golkick 1.png";
import Technology from "../../assets/image/Technology.svg";
import footballImg from "../../assets/image/fott.png";
import bgImg from "../../assets/image/bgnew.png";

export default function Abhero() {
  return (
    <section
      className="relative w-full bg-gradient-to-br from-white via-[#ffffff] to-[#fafeff] text-gray-900 py-32 px-6 md:px-10 lg:px-20 flex flex-col items-center overflow-hidden"
    >
      <img
        src={bgImg}
        alt="Background shape"
        className="absolute opacity-60 rotate-[-14.7deg] w-[1027px] h-[1357px] top-[-52px] left-[-9px] object-contain pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-THICCCBOI font-extrabold lg:text-[60px] leading-[100%] tracking-[0%]">
            Goalkick Social App for Football Fans
          </h2>
          <p className="text-gray-700 text-start text-base leading-relaxed">
            The ultimate destination for football enthusiasts to connect, engage,
            and indulge in their passion for the beautiful game. This football
            social network app goes beyond conventional fan experiences, offering
            a dynamic platform where you can join groups, discuss matches, and make
            new friends.
          </p>

          <div className="flex justify-center md:justify-start gap-8 h-8 w-60 mb-8">
            <img src={Google} className="h-8 w-60" alt="Google Play" />
            <img src={app} className="h-8 w-60" alt="App Store" />
          </div>

          <div className="mb-5">
            <a
              href="#"
              className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
            >
              Have a project in mind?
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src={footballImg}
            alt="Football illustration"
            className="w-[80%] md:w-[750px] object-contain"
          />
        </div>
      </div>

 
<div className="mt-2 w-full md:gap-28 px-6 md:px-0 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

  <div className="flex items-center gap-4 md:gap-0 justify-center md:justify-start">
    <img
      src={phone}
      alt="Phone Mockup 1"
      className="w-[160px] md:w-[190px] lg:w-[218px] h-[340px] md:h-[420px] lg:h-[443px] object-cover rounded-[20px] lg:rounded-[30px]"
    />
    <img
      src={phone}
      alt="Phone Mockup 2"
      className="w-[160px] md:w-[190px] lg:w-[218px] h-[340px] md:h-[420px] lg:h-[443px] object-cover rounded-[20px] lg:rounded-[30px] mt-6 md:mt-12"
    />
  </div>

 
  <div>
    <h3 className="font-THICCCBOI font-extrabold text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] leading-[110%] mb-4">
      About Goalkick App
    </h3>
    <p className="text-gray-700 text-[16px] sm:text-[17px] md:text-[18px] leading-[160%] font-THICCCBOI font-semibold text-start">
      It’s an online stadium where fans from around the world unite, chat,
      and immerse themselves in the excitement of football. Dive into
      discussions, share live match reactions, and enjoy the latest football
      memes through a seamless app experience. Whether you wish to connect
      with fellow fans, join live matches, or explore updates — this app has
      it all!
    </p>

    <div className="grid grid-cols-2 gap-6  mt-10 text-sm md:text-base">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="flex items-start md:items-center gap-3 md:gap-4"
        >
          <img
            src={Technology}
            alt="Icon"
            className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10"
          />
          <div className="flex flex-col">
            <p className="text-start text-gray-900 font-THICCCBOI font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-[130%]">
              Industry
            </p>
            <p className="text-gray-900 font-THICCCBOI font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-[130%]">
              Social App
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}
