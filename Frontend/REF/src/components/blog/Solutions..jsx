import React from "react";
import phone from "../../assets/image/Frame 240.png";
import bgImg from "../../assets/image/bgnew.png";
import home from "../../assets/image/home2.svg";

export default function Solutions1() {
  const solutions = [
    {
      id: 1,
      heading: "Community Interaction:-",
      text: "It allows users to join groups, discuss matches, share opinions, and make friends while staying updated with live scores and news.",
      subtext:
        "Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.",
    },
    {
      id: 2,
      heading: "Global Connectivity:-",
      text: "Users can connect with global football fans and build personalized communities for their favorite teams or leagues.",
      subtext:
        "Goalkick bridges global fans with a seamless experience of chat, score updates, and match discussions.",
    },
    {
      id: 3,
      heading: "Real-time Updates:-",
      text: "Provides real-time notifications and match statistics that help users stay updated with every goal, card, and event.",
      subtext:
        "Goalkick integrates live data streams to deliver instant updates and insights for fans.",
    },
    {
      id: 4,
      heading: "Gamified Experience:-",
      text: "Encourages fan engagement through prediction games and challenges that reward active participants.",
      subtext:
        "Goalkick uses gamification to increase community interaction and user loyalty.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-black via-[#020405] to-[#010203] text-gray-900 py-16 px-6 md:px-10 lg:px-20 flex flex-col items-center overflow-hidden">
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
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={phone}
            alt="Phone Mockup 1"
            className="w-[390px] sm:w-[180px] md:w-[620px] lg:w-[620px] lg:h-[640px] sm:h-[400px] md:h-[390px] object-cover rounded-[20px] lg:rounded-[30px]"
          />
        </div>

        <div className="text-center md:text-left space-y-8">
          <h3 className="font-THICCCBOI font-extrabold text-white text-[28px] sm:text-[32px] md:text-[36px] leading-[110%] mb-4">
            Our Best Solutions
          </h3>

          <ul className="space-y-8 text-gray-300 text-[16px] sm:text-lg leading-[150%]">
            {solutions.map((item) => (
              <li key={item.id} className="flex flex-col items-start gap-3">
                <div className="flex items-start gap-3">
                  <img src={home} alt="icon" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="font-THICCCBOI text-start text-white">
                    <span className="font-semibold text-white">{item.heading} </span>
                    <span className="text-gray-300">{item.text}</span>
                  </p>
                </div>

                <p className="text-gray-400 text-start ml-9">{item.subtext}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
