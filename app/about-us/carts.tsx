"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

function Carts() {
  const [mounted, setMounted] = useState(false);
  const [imageKeys, setImageKeys] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    setMounted(true);
    setImageKeys([Date.now(), Date.now(), Date.now()]);
  }, []);

  const handleHover = (index: number): void => {
    if (!mounted) return;
    setImageKeys((prev) => {
      const updated = [...prev];
      updated[index] = Date.now();
      return updated;
    });
  };

  const cardsData = [
    {
      title: "Our Mission",
      desc: "Our business at Appadvent aims to provide organizations with advanced and effective tools and programs that enhance their online presence and drive growth. The clients’ needs shall be prioritized and served to their fullest satisfaction to meet their business objectives.",
      icon: "/images/arrow.svg"
    },
    {
      title: "Our Vision",
      desc: "Appadvent's goal is to become known as a trustworthy outsourcing partner for companies looking to leverage technology for business growth. As the environment is always changing, our strategic goal is to evolve and become as inventive as we can continuously.",
      icon: "/images/crad2.svg"
    },
    {
      title: "Our Proficiency",
      desc: "Appadvent focuses on UI/UX design, mobile app development, website design, SaaS platforms, branding, and digital solutions that are scalable, performance-oriented, and aimed at improving user experience and increasing conversions.",
      icon: "/images/crad3.svg"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div
        className='mt-10 font-THICCCBOI grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mb-[80px] lg:mb-[120px] gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto '
      >
        {cardsData.map((card, idx) => (
          <div key={idx}>
            <div className="h-full">
              <div className="block h-full group" onMouseEnter={() => handleHover(idx)}>
                <div
                  className="relative h-full min-h-[380px] rounded-[24px] border border-gray-100 bg-white px-7 pt-10 pb-5 shadow-sm flex flex-col items-center justify-between overflow-hidden transition-all duration-300"
                >
                  <div className="flex flex-col items-center flex-grow">
                    <div className="relative mb-5 flex items-center justify-center">
                      <Image
                        src={mounted && imageKeys[idx] ? `${card.icon}?v=${imageKeys[idx]}` : card.icon}
                        alt={card.title}
                        width={72}
                        height={72}
                        className="shrink-0"
                      />
                    </div>

                    <p className="text-[#1a1a2e] font-bold text-center text-[19px] leading-snug">
                      {card.title}
                    </p>
                    <p className="text-[#5a6270] text-center text-[14px] leading-relaxed mt-3">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carts;