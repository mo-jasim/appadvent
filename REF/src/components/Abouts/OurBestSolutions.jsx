import React from "react";
import phone from "../../assets/image/Frame 243.png";
import bgImg from "../../assets/image/bgnew.png";
import { FaFutbol } from "react-icons/fa";

export default function OurBestSolutions() {
  const solutions = [
    {
      id: 1,
      text1:
        "It allows users to join groups, discuss matches, share opinions, and make friends while staying updated with live scores and news.",
     
    },
    {
      id: 2,
      text1:
        "Users can connect with global football fans and build personalized communities for their favorite teams or leagues.",
     
    },
    {
      id: 3,
      text1:
        "Provides real-time notifications and match statistics that help users stay updated with every goal, card, and event.",
    },
    {
      id: 4,
      text1:
        "Encourages fan engagement through prediction games and challenges that reward active participants.",
    },
  ];

  return (
    <section
      className="relative w-full bg-gradient-to-br from-black via-[#020405] to-[#010203] text-gray-900 py-16 px-6 md:px-10 lg:px-4 flex flex-col items-center overflow-hidden"
    >
      <img
        src={bgImg}
        alt="Left Decoration"
        className="absolute opacity-60 w-[776px] h-[733px] top-[-166px] left-[-452px] rotate-[18.8deg] pointer-events-none select-none"
      />
      <img
        src={bgImg}
        alt="Right Decoration"
        className="absolute opacity-60 w-[776px] h-[783px] top-[-101px] right-[-360px] rotate-[-12.09deg] pointer-events-none select-none"
      />

      <div className="mt-2 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8">
          {/* <img
            src={phone}
            alt="Phone Mockup 1"
            className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[340px] sm:h-[400px] md:h-[440px] object-cover rounded-[20px] lg:rounded-[30px]"
          /> */}
          <img
            src={phone}
            alt="Phone Mockup 2"
            className="w-[360px] sm:w-[180px] md:w-[400px] lg:h-[483px] lg:w-[467px] h-[340px] sm:h-[400px] md:h-[340px] object-cover rounded-[20px] lg:rounded-[30px] mt-6 md:mt-10"
          />
        </div>

        <div className="text-center md:text-left space-y-6">
          <h3 className="font-THICCCBOI font-extrabold text-white text-[28px] sm:text-[32px] md:text-[36px] leading-[110%] mb-4">
            Our Best Solutions
          </h3>

          <ul className="space-y-6 text-gray-300 text-[16px] sm:text-lg leading-[150%]">
            {solutions.map((item) => (
              <li key={item.id} className="flex flex-col items-start gap-2">
                <div className="flex items-start gap-3">
                  <FaFutbol className="text-gray-400 text-2xl mt-[4px]" />
                  <p className="font-thicccboi text-start">{item.text1}</p>
                </div>
                <p className="text-gray-400 text-start ml-8">{item.text2}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
